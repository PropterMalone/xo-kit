// Finite in-session execution only. Work argv and capture callbacks belong to a reviewed wrapper.
import { spawn } from 'node:child_process';
import { lstat } from 'node:fs/promises';
import { isAbsolute } from 'node:path';
import { check } from './subscription-budget.mjs';
import { readSnapshot, runtimeError, linuxOnly, isolatedEnvironment, killGroup } from './subscription-capture.mjs';
const fail = reason => { throw runtimeError(reason); };
const integer = (n, max) => Number.isInteger(n) && n > 0 && n <= max;
async function stopReason(options, deadline) {
  if (options.signal?.aborted) return 'cancelled';
  if (performance.now() >= deadline) return 'deadline';
  for (const path of options.stopPaths) {
    try { await lstat(path); return 'paused'; } catch (e) { if (e.code !== 'ENOENT') return 'stop-unavailable'; }
  }
}
async function work(batch, options, deadline, resetsAt) {
  // Convert once so a backward wall-clock jump cannot extend this observation's run.
  const resetDeadline = performance.now() + resetsAt * 1000 - Date.now() - 50;
  const resetExpired = () => performance.now() >= resetDeadline || Date.now() >= resetsAt * 1000 - 50;
  if (resetExpired()) return 'reset-expired';
  return await new Promise(accept => {
    const child = spawn(batch.executable, batch.args, { cwd: batch.cwd, env: isolatedEnvironment(), shell: false, detached: true, stdio: ['ignore', 'pipe', 'pipe'] });
    let reason; let bytes = 0; let probing = false;
    const stop = value => { if (!reason) { reason = value; killGroup(child); } };
    const now = performance.now();
    const batchDeadline = now + options.batchTimeoutMs;
    const timeoutReason = resetDeadline <= Math.min(deadline, batchDeadline) ? 'reset-expired' : deadline <= batchDeadline ? 'deadline' : 'work-timeout';
    const timer = setTimeout(() => stop(resetExpired() ? 'reset-expired' : timeoutReason),
      Math.max(1, Math.min(batchDeadline, deadline, resetDeadline) - now));
    const poll = setInterval(async () => {
      if (probing) return; probing = true;
      try { if (resetExpired()) stop('reset-expired'); else { const why = await stopReason(options, deadline); if (why) stop(why); } } finally { probing = false; }
    }, 25);
    const output = chunk => { if (resetExpired()) stop('reset-expired'); bytes += chunk.length; if (bytes > 262144) stop('work-output-limit'); };
    child.stdout.on('data', output); child.stderr.on('data', output);
    child.once('error', () => stop('work-failed'));
    child.once('close', code => { if (resetExpired()) stop('reset-expired'); clearTimeout(timer); clearInterval(poll); killGroup(child); accept(reason ?? (code === 0 ? null : 'work-failed')); });
  });
}

export async function runBounded(options) {
  linuxOnly();
  const { batches, maxBatches, maxRuntimeMs, batchTimeoutMs, snapshotPath, expected, policy = {}, acquire, dryRun = false, burnAllThisRun = false } = options;
  if (!Array.isArray(batches) || !integer(maxBatches, 100) || batches.length < 1 || batches.length > maxBatches ||
      !integer(maxRuntimeMs, 3600000) || !integer(batchTimeoutMs, maxRuntimeMs) || !isAbsolute(snapshotPath ?? '') ||
      !Array.isArray(options.stopPaths) || options.stopPaths.length < 1 || options.stopPaths.length > 8 || !options.stopPaths.every(p => typeof p === 'string' && isAbsolute(p)) ||
      (acquire !== undefined && typeof acquire !== 'function') || typeof dryRun !== 'boolean' || typeof burnAllThisRun !== 'boolean') fail('invalid-run');
  for (const b of batches) {
    if (!b || !isAbsolute(b.executable ?? '') || !Array.isArray(b.args) || b.args.length > 128 ||
        !b.args.every(a => typeof a === 'string' && a.length <= 4096 && !a.includes('\0')) ||
        (b.cwd !== undefined && !isAbsolute(b.cwd))) fail('invalid-run');
  }
  if ((policy.weeklyReserve === 0 || policy.shortReserve === 0) && !burnAllThisRun) fail('reserve-waiver-required');
  if (dryRun) return { completed: 0, reason: 'dry-run' };
  let completed = 0; let resets;
  const deadline = performance.now() + maxRuntimeMs;
  for (const batch of batches) {
    let why = await stopReason(options, deadline); if (why) return { completed, reason: why };
    if (acquire) {
      const controller = new AbortController(); let timer; let monitor; let resolveStop; let probing = false;
      const stopped = new Promise(accept => { resolveStop = accept; });
      const relay = () => { controller.abort(); resolveStop('cancelled'); }; options.signal?.addEventListener('abort', relay, { once: true });
      try {
        monitor = setInterval(async () => {
          if (probing) return; probing = true;
          try { const reason = await stopReason(options, deadline); if (reason) { controller.abort(); resolveStop(reason); } }
          finally { probing = false; }
        }, 25);
        const acquisition = Promise.resolve().then(() => acquire(controller.signal)).then(() => null, () => 'capture-failed');
        const outcome = await Promise.race([
          acquisition,
          new Promise(accept => { timer = setTimeout(() => { controller.abort(); accept('deadline'); }, Math.max(1, deadline - performance.now())); }),
          stopped,
        ]);
        if (outcome) {
          controller.abort(); let cleanupTimer;
          try {
            const cleaned = await Promise.race([
              acquisition.then(() => true),
              new Promise(accept => { cleanupTimer = setTimeout(() => accept(false), 1000); }),
            ]);
            return { completed, reason: cleaned ? outcome : 'capture-cleanup-timeout' };
          } finally { clearTimeout(cleanupTimer); }
        }
      } finally { clearTimeout(timer); clearInterval(monitor); options.signal?.removeEventListener('abort', relay); }
    }
    why = await stopReason(options, deadline); if (why) return { completed, reason: why };
    let snapshot; let verdict;
    try { snapshot = await readSnapshot(snapshotPath); verdict = check(snapshot, expected, policy); }
    catch { return { completed, reason: 'budget-unavailable' }; }
    const current = [snapshot.short.resetsAt, snapshot.week.resetsAt];
    if (resets && JSON.stringify(resets) !== JSON.stringify(current)) return { completed, reason: 'reset-changed' };
    resets = current;
    if (!verdict.allowed) return { completed, reason: verdict.reason };
    why = await stopReason(options, deadline); if (why) return { completed, reason: why };
    why = await work(batch, options, deadline, Math.min(...current)); if (why) return { completed, reason: why };
    completed++;
  }
  return { completed, reason: 'complete' };
}
// Done when every approved batch has finished or a stop condition has ended this one run.
