// Optional Node 20+ Linux APIs. Import only from a separately reviewed constant wrapper.
import { open, lstat, rename, unlink } from 'node:fs/promises';
import { constants } from 'node:fs';
import { resolve, isAbsolute, dirname, basename, join, parse } from 'node:path';
import { randomBytes, createHash } from 'node:crypto';
import { spawn } from 'node:child_process';
import { normalize, check } from './subscription-budget.mjs';

const MAX = 262144;
const record = x => x !== null && typeof x === 'object' && !Array.isArray(x);
export const runtimeError = reason => Object.assign(new Error(reason), { budgetRuntime: true });
const fail = reason => { throw runtimeError(reason); };
const epochNow = () => Math.floor(Date.now() / 1000);
export function linuxOnly() { if (process.platform !== 'linux') fail('unsupported-platform'); }
const sameWindows = (a, b) => JSON.stringify([a.short, a.week]) === JSON.stringify([b.short, b.week]);

export function captureClaude(input, options) {
  const { expected, subscription, approvedSubscriptionRoute, previous, policy = {} } = options;
  if (approvedSubscriptionRoute !== true || expected?.provider !== 'claude') fail('unapproved-route');
  const now = epochNow();
  const envelope = { schemaVersion: 1, provider: 'claude', accountBinding: expected.accountBinding,
    source: 'claude-statusline', subscription, capturedAt: now, payload: { rate_limits: input?.rate_limits } };
  const snapshot = normalize(envelope, expected, now, policy);
  if (previous) {
    if (previous.provider !== snapshot.provider || previous.accountBinding !== snapshot.accountBinding ||
        JSON.stringify(previous.subscription) !== JSON.stringify(snapshot.subscription)) fail('account-changed');
    if (sameWindows(previous, snapshot)) snapshot.capturedAt = previous.capturedAt;
    // An observed reset is not permission to continue an old finite run.
  }
  check(snapshot, expected, policy, now);
  return snapshot;
}

// Bound stdin before parsing; never echo malformed input or provider errors.
export async function readStatusline(stream = process.stdin) {
  return await new Promise((accept, reject) => {
    let bytes = 0; const chunks = [];
    const finish = (error, value) => {
      clearTimeout(timer); stream.off('data', data); stream.off('end', end); stream.off('error', errorEvent); stream.pause();
      error ? reject(runtimeError(error)) : accept(value);
    };
    const data = chunk => { const b = Buffer.from(chunk); bytes += b.length; if (bytes > MAX) finish('input-limit'); else chunks.push(b); };
    const end = () => { try { finish(null, JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(Buffer.concat(chunks)))); } catch { finish('invalid-json'); } };
    const errorEvent = () => finish('input-unavailable');
    const timer = setTimeout(() => finish('input-timeout'), 2000);
    stream.on('data', data); stream.once('end', end); stream.once('error', errorEvent);
  });
}

// Anchor traversal and rename to held directory descriptors, not re-resolved paths.
async function privateParent(path) {
  linuxOnly();
  if (typeof path !== 'string' || !isAbsolute(path) || path !== resolve(path) || path.length > 4096) fail('unsafe-file');
  const handles = [];
  try {
    let handle = await open(parse(path).root, constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW); handles.push(handle);
    for (const part of dirname(path).split('/').filter(Boolean)) {
      handle = await open(`/proc/self/fd/${handle.fd}/${part}`, constants.O_RDONLY | constants.O_DIRECTORY | constants.O_NOFOLLOW); handles.push(handle);
      const s = await handle.stat();
      if (![0, process.getuid()].includes(s.uid) || ((s.mode & 0o022) && !(s.uid === 0 && (s.mode & 0o1000)))) fail('unsafe-directory');
    }
    const s = await handle.stat();
    if (s.uid !== process.getuid() || (s.mode & 0o777) !== 0o700) fail('unsafe-directory');
    return { anchor: `/proc/self/fd/${handle.fd}`, handles };
  } catch (e) { await Promise.all(handles.map(h => h.close())); throw e.budgetRuntime ? e : runtimeError('unsafe-directory'); }
}
async function validateFile(path, missing = false) {
  let s; try { s = await lstat(path); } catch (e) { if (missing && e.code === 'ENOENT') return; fail('unsafe-file'); }
  if (!s.isFile() || s.uid !== process.getuid() || (s.mode & 0o777) !== 0o600 || s.nlink !== 1 || s.size > MAX) fail('unsafe-file');
  return s;
}
export async function removeSnapshot(path) {
  const p = await privateParent(path);
  try { const target = join(p.anchor, basename(path)); if (await validateFile(target, true)) await unlink(target); }
  finally { await Promise.all(p.handles.map(h => h.close())); }
}
export async function readSnapshot(path, { allowMissing = false } = {}) {
  const p = await privateParent(path); let handle;
  try {
    const target = join(p.anchor, basename(path)); const s = await validateFile(target, allowMissing);
    if (!s) return undefined;
    handle = await open(target, constants.O_RDONLY | constants.O_NOFOLLOW | constants.O_NONBLOCK);
    const opened = await handle.stat(); if (opened.dev !== s.dev || opened.ino !== s.ino) fail('unsafe-file');
    const buffer = Buffer.alloc(MAX + 1); let size = 0;
    while (size < buffer.length) { const { bytesRead } = await handle.read(buffer, size, buffer.length - size, null); if (!bytesRead) break; size += bytesRead; }
    if (size > MAX) fail('input-limit');
    try { return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(buffer.subarray(0, size))); } catch { fail('invalid-json'); }
  } catch (e) { throw e.budgetRuntime ? e : runtimeError('snapshot-unavailable'); }
  finally { if (handle) await handle.close(); await Promise.all(p.handles.map(h => h.close())); }
}
export async function writeSnapshot(path, snapshot) {
  // Persist only a normalized shape, never arbitrary caller or provider fields.
  if (!record(snapshot) || !['subscription-budget', 'unavailable'].includes(snapshot.kind) || !['claude', 'codex'].includes(snapshot.provider) ||
      !/^[a-z0-9][a-z0-9_-]{0,63}$/.test(snapshot.accountBinding ?? '') || !record(snapshot.subscription) ||
      !record(snapshot.short) || !record(snapshot.week)) fail('invalid-snapshot');
  const minimal = {
    schemaVersion: snapshot.schemaVersion, kind: snapshot.kind, provider: snapshot.provider,
    accountBinding: snapshot.accountBinding, source: snapshot.provider === 'claude' ? 'claude-statusline' : 'codex-app-server',
    capturedAt: snapshot.capturedAt,
    subscription: { type: snapshot.subscription.type, plan: snapshot.subscription.plan },
    ...(snapshot.provider === 'codex' ? { bucket: snapshot.bucket, workloadBinding: snapshot.workloadBinding } : {}),
    short: { usedPercent: snapshot.short.usedPercent, resetsAt: snapshot.short.resetsAt, durationMins: snapshot.short.durationMins },
    week: { usedPercent: snapshot.week.usedPercent, resetsAt: snapshot.week.resetsAt, durationMins: snapshot.week.durationMins },
  };
  const expected = { provider: minimal.provider, accountBinding: minimal.accountBinding,
    ...(minimal.provider === 'codex' ? { bucket: minimal.bucket, workloadBinding: minimal.workloadBinding } : {}) };
  // Validate scalars even when testing/persisting an already stale observation.
  check({ ...minimal, kind: 'subscription-budget' }, expected, {}, minimal.capturedAt);
  const text = JSON.stringify(minimal) + '\n'; if (Buffer.byteLength(text) > MAX) fail('input-limit');
  const p = await privateParent(path); const target = join(p.anchor, basename(path));
  const temporary = join(p.anchor, `.budget-${randomBytes(16).toString('hex')}`); let handle;
  try {
    await validateFile(target, true);
    handle = await open(temporary, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | constants.O_NOFOLLOW, 0o600);
    await handle.writeFile(text); await handle.sync(); await handle.close(); handle = undefined;
    await validateFile(target, true); await rename(temporary, target);
    await p.handles.at(-1).sync();
  } catch (e) { throw e.budgetRuntime ? e : runtimeError('snapshot-write-failed'); }
  finally { if (handle) await handle.close(); await unlink(temporary).catch(() => {}); await Promise.all(p.handles.map(h => h.close())); }
}
export function isolatedEnvironment(codexHome) {
  // Allowlist excludes API keys, base URLs, proxies, NODE_OPTIONS and provider overrides.
  return { HOME: process.env.HOME, PATH: '/usr/bin:/bin', LANG: 'C.UTF-8', ...(codexHome ? { CODEX_HOME: codexHome } : {}) };
}
export function killGroup(child) { if (child.pid) { try { process.kill(-child.pid, 'SIGKILL'); } catch {} } }

export async function captureCodex(options) {
  linuxOnly();
  const { executable, codexHome, expected, identitySalt, accountFingerprint, policy = {}, signal } = options;
  const timeoutMs = options.timeoutMs ?? 5000;
  if (!isAbsolute(executable ?? '') || !isAbsolute(codexHome ?? '') || expected?.provider !== 'codex' ||
      typeof identitySalt !== 'string' || !/^[a-zA-Z0-9_-]{16,64}$/.test(identitySalt) ||
      !/^[a-f0-9]{64}$/.test(accountFingerprint ?? '') || !Number.isInteger(timeoutMs) || timeoutMs < 50 || timeoutMs > 10000) fail('invalid-capture');
  // A dedicated authenticated home is approved separately. Do not inspect auth files.
  const p = await privateParent(join(codexHome, 'budget-probe'));
  await Promise.all(p.handles.map(h => h.close()));
  try { await lstat(join(codexHome, 'config.toml')); fail('unreviewed-config'); } catch (e) { if (e.code !== 'ENOENT') throw e.budgetRuntime ? e : runtimeError('unreviewed-config'); }
  if (signal?.aborted) fail('cancelled');
  const args = ['--no-daemon', '-c', 'model_provider="openai"', '-c', 'forced_login_method="chatgpt"', 'app-server', '--stdio'];
  return await new Promise((accept, reject) => {
    const child = spawn(executable, args, { cwd: codexHome, env: isolatedEnvironment(codexHome), detached: true, shell: false, stdio: ['pipe', 'pipe', 'pipe'] });
    const decoder = new TextDecoder('utf-8', { fatal: true });
    let buffer = ''; let bytes = 0; let lines = 0; let id = 0; let pending; let done = false; let result; let failure;
    const finish = (error, value) => { if (done) return; done = true; failure = error; result = value; clearTimeout(timer); signal?.removeEventListener('abort', abort); killGroup(child); };
    const abort = () => finish('cancelled'); const timer = setTimeout(() => finish('capture-timeout'), timeoutMs);
    signal?.addEventListener('abort', abort, { once: true });
    child.once('error', () => finish('capture-unavailable'));
    child.once('close', () => { if (!done) finish('capture-closed'); failure ? reject(runtimeError(failure)) : accept(result); });
    child.stdout.once('end', () => {
      if (done) return;
      try { decoder.decode(); } catch { return finish('invalid-protocol'); }
      if (buffer.length) finish('invalid-protocol');
    });
    child.stdin.on('error', () => finish('capture-unavailable'));
    child.stderr.on('data', chunk => { bytes += chunk.length; if (bytes > MAX) finish('protocol-limit'); });
    const send = message => { if (!done) child.stdin.write(JSON.stringify(message) + '\n'); };
    const request = (method, params) => new Promise((yes, no) => { const requestId = ++id; pending = { id: requestId, yes, no }; send({ id: requestId, method, ...(params ? { params } : {}) }); });
    child.stdout.on('data', chunk => {
      if (done) return; bytes += chunk.length; if (bytes > MAX) return finish('protocol-limit');
      try { buffer += decoder.decode(chunk, { stream: true }); } catch { return finish('invalid-protocol'); }
      if (buffer.length > 65536 && !buffer.includes('\n')) return finish('protocol-limit');
      while (buffer.includes('\n') && !done) {
        const end = buffer.indexOf('\n'); const line = buffer.slice(0, end); buffer = buffer.slice(end + 1);
        if (++lines > 128 || line.length > 65536) return finish('protocol-limit');
        let m; try { m = JSON.parse(line); } catch { return finish('invalid-protocol'); }
        if (!record(m)) return finish('invalid-protocol');
        if (Object.hasOwn(m, 'method')) {
          if (Object.hasOwn(m, 'id')) return finish('server-request');
          if (typeof m.method !== 'string' || !record(m.params) || Object.hasOwn(m, 'result') || Object.hasOwn(m, 'error')) return finish('invalid-protocol');
          if (m.method !== 'account/rateLimits/updated') return finish('account-changed');
          continue;
        }
        // One outstanding request: unsolicited, stale and malformed IDs all fail closed.
        if (!Object.hasOwn(m, 'id') || !Number.isSafeInteger(m.id) || m.id < 1 || !pending || m.id !== pending.id) return finish('invalid-protocol');
        if (Object.hasOwn(m, 'error') || !Object.hasOwn(m, 'result')) return finish('rpc-failed');
        const waiter = pending; pending = undefined; waiter.yes(m.result);
      }
    });
    (async () => {
      await request('initialize', { clientInfo: { name: 'xo_subscription_meter', version: '1.0.0' } });
      send({ method: 'initialized', params: {} });
      const response = await request('account/read', { refreshToken: false });
      const a = response?.account;
      if (response?.requiresOpenaiAuth !== true || a?.type !== 'chatgpt' || !['plus', 'pro'].includes(a.planType)) return finish('unsupported-subscription');
      if (typeof a.email !== 'string' || a.email.length < 3 || a.email.length > 512) return finish('account-unverifiable');
      const fingerprint = createHash('sha256').update(`xo-account-v1\0${identitySalt}\0${a.type}\0${a.planType}\0${a.email}`).digest('hex');
      if (fingerprint !== accountFingerprint) return finish('account-changed');
      const limits = await request('account/rateLimits/read');
      const capturedAt = epochNow();
      try {
        const snapshot = normalize({ schemaVersion: 1, ...expected, capturedAt, source: 'codex-app-server', subscription: { type: a.type, plan: a.planType }, payload: { result: limits } }, expected, capturedAt, policy);
        finish(null, snapshot);
      } catch (e) {
        const reasons = ['invalid-binding', 'unsupported-schema', 'provider-mismatch', 'account-mismatch', 'workload-mismatch', 'missing-bucket', 'unsupported-source', 'unsupported-subscription', 'invalid-timestamp', 'future-observation', 'stale-observation', 'invalid-percentage', 'reset-expired', 'invalid-reset', 'missing-windows', 'limit-reached', 'unsupported-windows', 'unsupported-payload', 'ambiguous-bucket', 'invalid-policy'];
        finish(reasons.includes(e.message) ? e.message : 'invalid-protocol');
      }
    })().catch(() => finish('invalid-protocol'));
  });
}
// Done when the separately approved wrapper has demonstrated provenance, privacy and stale stops.
