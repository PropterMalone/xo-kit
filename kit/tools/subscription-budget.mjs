#!/usr/bin/env node
// Local projection and gate only: capture authenticity belongs to the approved adapter.
import { open, lstat } from 'node:fs/promises';
import { constants } from 'node:fs';
import { resolve, parse, join } from 'node:path';
import { pathToFileURL } from 'node:url';

export const DEFAULT_POLICY = Object.freeze({ maxAgeSeconds: 300, horizonHours: 24, weeklyReserve: 20, shortReserve: 20 });
const MAX_BYTES = 262144;
const MIN_EPOCH = 1577836800;
const MAX_EPOCH = 4102444800;
class BudgetError extends Error {}
const fail = reason => { throw new BudgetError(reason); };
const record = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const own = (value, key) => record(value) && Object.hasOwn(value, key);
const binding = value => typeof value === 'string' && /^[a-z0-9][a-z0-9_-]{0,63}$/.test(value);
function expectations(expected) {
  if (!record(expected) || !['claude', 'codex'].includes(expected.provider) || !binding(expected.accountBinding)) fail('invalid-binding');
  if (expected.provider === 'codex' && (!binding(expected.bucket) || !binding(expected.workloadBinding))) fail('invalid-binding');
  if (expected.provider === 'claude' && (expected.bucket !== undefined || expected.workloadBinding !== undefined)) fail('invalid-binding');
}
function policySettings(overrides) {
  if (!record(overrides) || Object.keys(overrides).some(key => !own(DEFAULT_POLICY, key))) fail('invalid-policy');
  const policy = { ...DEFAULT_POLICY, ...overrides };
  for (const [key, min, max] of [['maxAgeSeconds', 1, 900], ['horizonHours', 1, 168], ['weeklyReserve', 0, 100], ['shortReserve', 0, 100]]) {
    const value = policy[key];
    if (typeof value !== 'number' || !Number.isFinite(value) || value < min || value > max) fail('invalid-policy');
  }
  if (!Number.isInteger(policy.maxAgeSeconds)) fail('invalid-policy');
  return policy;
}
function epoch(value) {
  if (!Number.isSafeInteger(value) || value < MIN_EPOCH || value > MAX_EPOCH) fail('invalid-timestamp');
  return value;
}
function observation(value, expected, now, policy) {
  expectations(expected); epoch(now);
  if (!record(value) || value.schemaVersion !== 1) fail('unsupported-schema');
  if (value.provider !== expected.provider) fail('provider-mismatch');
  if (value.accountBinding !== expected.accountBinding) fail('account-mismatch');
  if (value.provider === 'codex' && value.workloadBinding !== expected.workloadBinding) fail('workload-mismatch');
  if (value.provider === 'codex' && value.bucket !== expected.bucket) fail('missing-bucket');
  const source = value.provider === 'claude' ? 'claude-statusline' : 'codex-app-server';
  if (value.source !== source) fail('unsupported-source');
  const subscription = value.subscription;
  if (!record(subscription) || (value.provider === 'claude'
    ? subscription.type !== 'claude-subscription' || !['pro', 'max'].includes(subscription.plan)
    : subscription.type !== 'chatgpt' || !['plus', 'pro'].includes(subscription.plan))) fail('unsupported-subscription');
  epoch(value.capturedAt);
  if (value.capturedAt > now) fail('future-observation');
  if (now - value.capturedAt > policy.maxAgeSeconds) fail('stale-observation');
}
function windowValue(usedPercent, resetsAt, durationMins, capturedAt, now) {
  if (typeof usedPercent !== 'number' || !Number.isFinite(usedPercent) || usedPercent < 0 || usedPercent > 100) fail('invalid-percentage');
  epoch(resetsAt);
  if (resetsAt <= now) fail('reset-expired');
  if (resetsAt > capturedAt + durationMins * 60) fail('invalid-reset');
  return { usedPercent, resetsAt, durationMins };
}
function codexWindows(value, capturedAt, now) {
  if (!record(value) || !record(value.primary) || !record(value.secondary)) fail('missing-windows');
  if (value.rateLimitReachedType !== null) fail('limit-reached');
  const windows = [value.primary, value.secondary];
  const short = windows.find(window => window.windowDurationMins === 300);
  const week = windows.find(window => window.windowDurationMins === 10080);
  if (!short || !week) fail('unsupported-windows');
  return {
    short: windowValue(short.usedPercent, short.resetsAt, 300, capturedAt, now),
    week: windowValue(week.usedPercent, week.resetsAt, 10080, capturedAt, now),
  };
}

/** Project an adapter's trusted capture; this function cannot authenticate it. */
export function normalize(envelope, expected, now = Math.floor(Date.now() / 1000), overrides = {}) {
  const policy = policySettings(overrides);
  observation(envelope, expected, now, policy);
  let windows;
  if (expected.provider === 'claude') {
    const limits = envelope.payload?.rate_limits;
    if (!record(limits?.five_hour) || !record(limits?.seven_day)) fail('missing-windows');
    windows = {
      short: windowValue(limits.five_hour.used_percentage, limits.five_hour.resets_at, 300, envelope.capturedAt, now),
      week: windowValue(limits.seven_day.used_percentage, limits.seven_day.resets_at, 10080, envelope.capturedAt, now),
    };
  } else {
    const payload = envelope.payload;
    if (!record(payload) || own(payload, 'error')) fail('unsupported-payload');
    let data;
    if (own(payload, 'result') && !own(payload, 'params') && !own(payload, 'method')) data = payload.result;
    else if (payload.method === 'account/rateLimits/updated' && !own(payload, 'result')) data = payload.params;
    else fail('unsupported-payload');
    if (!record(data)) fail('unsupported-payload');
    const candidates = [];
    if (own(data, 'rateLimits')) {
      if (!record(data.rateLimits) || !binding(data.rateLimits.limitId)) fail('ambiguous-bucket');
      if (data.rateLimits.limitId === expected.bucket) candidates.push(data.rateLimits);
    }
    if (own(data, 'rateLimitsByLimitId')) {
      if (!record(data.rateLimitsByLimitId)) fail('ambiguous-bucket');
      if (own(data.rateLimitsByLimitId, expected.bucket)) {
        const selected = data.rateLimitsByLimitId[expected.bucket];
        if (!record(selected) || selected.limitId !== expected.bucket) fail('ambiguous-bucket');
        candidates.push(selected);
      }
    }
    if (candidates.length === 0) fail('missing-bucket');
    const projected = candidates.map(candidate => codexWindows(candidate, envelope.capturedAt, now));
    if (projected.some(candidate => JSON.stringify(candidate) !== JSON.stringify(projected[0]))) fail('ambiguous-bucket');
    windows = projected[0];
  }
  return {
    schemaVersion: 1, kind: 'subscription-budget', provider: expected.provider,
    accountBinding: expected.accountBinding, source: envelope.source,
    capturedAt: envelope.capturedAt,
    subscription: { type: envelope.subscription.type, plan: envelope.subscription.plan },
    ...(expected.provider === 'codex' ? { bucket: expected.bucket, workloadBinding: expected.workloadBinding } : {}),
    ...windows,
  };
}

/** Revalidate at every batch boundary; a valid snapshot is still not work consent. */
export function check(snapshot, expected, overrides = {}, now = Math.floor(Date.now() / 1000)) {
  const policy = policySettings(overrides);
  observation(snapshot, expected, now, policy);
  if (snapshot.kind !== 'subscription-budget') fail('unsupported-schema');
  if (!record(snapshot.short) || !record(snapshot.week)) fail('missing-windows');
  if (snapshot.short.durationMins !== 300 || snapshot.week.durationMins !== 10080) fail('unsupported-windows');
  const short = windowValue(snapshot.short.usedPercent, snapshot.short.resetsAt, 300, snapshot.capturedAt, now);
  const week = windowValue(snapshot.week.usedPercent, snapshot.week.resetsAt, 10080, snapshot.capturedAt, now);
  let reason = 'eligible';
  if (100 - short.usedPercent <= policy.shortReserve) reason = 'short-reserve';
  else if (100 - week.usedPercent <= policy.weeklyReserve) reason = 'weekly-reserve';
  else if (week.resetsAt - now > policy.horizonHours * 3600) reason = 'outside-catchup-window';
  return { allowed: reason === 'eligible', reason };
}

function argumentsFor(argv) {
  const [command, ...args] = argv;
  if (!['normalize', 'check'].includes(command) || args.length % 2) fail('invalid-arguments');
  const allowed = new Set(['--provider', '--account', '--bucket', '--workload', '--input', '--max-age-seconds', '--horizon-hours', '--weekly-reserve', '--short-reserve']);
  const values = new Map();
  for (let i = 0; i < args.length; i += 2) {
    if (!allowed.has(args[i]) || values.has(args[i]) || !args[i + 1] || args[i + 1].length > 4096) fail('invalid-arguments');
    values.set(args[i], args[i + 1]);
  }
  const expected = { provider: values.get('--provider'), accountBinding: values.get('--account') };
  if (values.has('--bucket')) expected.bucket = values.get('--bucket');
  if (values.has('--workload')) expected.workloadBinding = values.get('--workload');
  expectations(expected);
  const policy = {};
  for (const [flag, key] of [['--max-age-seconds', 'maxAgeSeconds'], ['--horizon-hours', 'horizonHours'], ['--weekly-reserve', 'weeklyReserve'], ['--short-reserve', 'shortReserve']]) {
    if (values.has(flag)) {
      if (!/^\d+(\.\d+)?$/.test(values.get(flag))) fail('invalid-policy');
      policy[key] = Number(values.get(flag));
    }
  }
  policySettings(policy);
  return { command, expected, policy, input: values.get('--input') };
}
async function readInput(path) {
  if (path !== undefined) {
    // Reject symlink ancestors as well as the final component; no FIFOs/devices.
    const absolute = resolve(path); const root = parse(absolute).root;
    let current = root;
    for (const part of absolute.slice(root.length).split(/[\\/]/).filter(Boolean)) {
      current = join(current, part);
      const stat = await lstat(current);
      if (stat.isSymbolicLink()) fail('unsafe-input-file');
    }
    const stat = await lstat(absolute);
    if (!stat.isFile()) fail('unsafe-input-file');
    if (stat.size > MAX_BYTES) fail('input-too-large');
    const handle = await open(absolute, constants.O_RDONLY | (constants.O_NOFOLLOW ?? 0) | (constants.O_NONBLOCK ?? 0));
    try {
      const opened = await handle.stat();
      if (!opened.isFile() || opened.dev !== stat.dev || opened.ino !== stat.ino) fail('unsafe-input-file');
      if (opened.size > MAX_BYTES) fail('input-too-large');
      const buffer = Buffer.alloc(MAX_BYTES + 1);
      let size = 0;
      while (size < buffer.length) {
        const { bytesRead } = await handle.read(buffer, size, buffer.length - size, null);
        if (!bytesRead) break;
        size += bytesRead;
      }
      if (size > MAX_BYTES) fail('input-too-large');
      return new TextDecoder('utf-8', { fatal: true }).decode(buffer.subarray(0, size));
    } finally { await handle.close(); }
  }
  return await new Promise((accept, reject) => {
    const chunks = []; let size = 0;
    const finish = error => {
      clearTimeout(timer); process.stdin.removeAllListeners(); process.stdin.pause();
      if (error) reject(error);
      else {
        try { accept(new TextDecoder('utf-8', { fatal: true }).decode(Buffer.concat(chunks))); }
        catch { reject(new BudgetError('invalid-json')); }
      }
    };
    const timer = setTimeout(() => finish(new BudgetError('input-timeout')), 2000);
    process.stdin.on('data', chunk => {
      size += chunk.length;
      if (size > MAX_BYTES) finish(new BudgetError('input-too-large'));
      else chunks.push(chunk);
    });
    process.stdin.once('error', () => finish(new BudgetError('input-unavailable')));
    process.stdin.once('end', () => finish());
  });
}
async function main() {
  try {
    const options = argumentsFor(process.argv.slice(2));
    let text;
    try { text = await readInput(options.input); }
    catch (error) { if (error instanceof BudgetError) throw error; fail('input-unavailable'); }
    let input;
    try { input = JSON.parse(text); } catch { fail('invalid-json'); }
    const now = Math.floor(Date.now() / 1000);
    const result = options.command === 'normalize'
      ? normalize(input, options.expected, now, options.policy)
      : check(input, options.expected, options.policy, now);
    process.stdout.write(`${JSON.stringify(result)}\n`);
    const veto = options.command === 'check' && !result.allowed;
    if (veto) process.stderr.write(`subscription-budget: ${result.reason}\n`);
    process.exitCode = veto ? 1 : 0;
  } catch (error) {
    process.stderr.write(`subscription-budget: ${error instanceof BudgetError ? error.message : 'invalid-input'}\n`);
    process.exitCode = 2;
  }
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) await main();
