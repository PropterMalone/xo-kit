# Connect a finite subscription-budget run

For the agent. Optional Node.js 20+ APIs on Linux only. Read `spare-capacity.md` first. Use the same reviewed revision of `../tools/subscription-budget.mjs`, `../tools/subscription-capture.mjs` and `../tools/subscription-run.mjs`. No helper installs configuration, authenticates, schedules, sends a model prompt or chooses contact scope. Windows/macOS execution and installed provider behavior are unverified and unsupported by these runtime APIs.

## Review before installation

Show the human the exact constant wrapper, executable/helper paths, subscription route, account/bucket/workload binding, finite work list, sources, saves, provider exposure, stop files and time limits. Obtain installation approval separately from work authority. Protect wrappers and their dependencies against untrusted writes. Use absolute executable paths and argv arrays, never command strings. Do not construct executable names, flags or contacts from captured JSON. Do not grant broad shell permission. The launcher is trusted code, not a sandbox.

Create no configuration in this flow. A separately approved private directory outside the kit/engine/contact store must already exist, owned by the current user with mode 0700. The APIs atomically replace one specified snapshot using a same-directory 0600 temporary file and rename; reject symlinks, unsafe ancestor ownership/modes, hard links, nonregular files, oversized files and nonprivate destinations. Linux `/proc/self/fd` anchors directory traversal and rename to held descriptors. Temporary files are cleaned on ordinary failure; a machine/process crash can leave a minimal snapshot temporary file. Same-user hostile code or administrators remain outside this boundary. Never put credentials, raw JSON or contact data in the snapshot.

## Claude: preserve display and original observation age

Primary contract:
https://code.claude.com/docs/en/statusline

`readStatusline()` reads bounded JSON stdin (256 KiB/two seconds). `captureClaude(input, options)` projects only usage windows, subscription/binding fields and an acquisition timestamp. Require reviewed installation evidence of the Claude subscription route, plan and account; `approvedSubscriptionRoute: true` is an assertion by that trusted installation, not evidence extracted from payload shape. Gateways may also supply these fields. Do not infer subscription authentication from their presence.

The provider payload has no observation timestamp. An unchanged pair of windows retains the previous `capturedAt`, including an unavailable marker's history. This deliberately stops after the freshness limit even if timer invocations continue. Changed windows are acquired on this invocation; it cannot establish upstream measurement time or eliminate provider reporting lag. First-install input is only as trustworthy as the reviewed statusline invocation. Do not feed cached raw JSON to it. No independent fresh usage fetch while Claude is idle is demonstrated here.

Review a statusline wrapper shaped like the following; substitute real constant paths only during separately approved installation. Do not run this placeholder. The existing display function must be reviewed separately, receive the same parsed input, and preserve its prior visible output without raw JSON/error logs. If an existing command needs forwarding, use its exact reviewed argv through `spawn` with `shell:false`, bounded stdin/output/time, and no raw logging; do not turn its shell text into an unreviewed command. With no prior statusline, keep stdout empty. Capture failures must never print input or error objects.

```js
import { readStatusline, readSnapshot, captureClaude, writeSnapshot } from '/absolute/reviewed/subscription-capture.mjs';
const path = '/absolute/private/budget.json';
const options = { expected: { provider: 'claude', accountBinding: 'approved-main' },
  subscription: { type: 'claude-subscription', plan: 'pro' }, approvedSubscriptionRoute: true };
let input; let previous;
try {
  previous = await readSnapshot(path, { allowMissing: true });
  input = await readStatusline();
  await writeSnapshot(path, captureClaude(input, { ...options, previous }));
} catch {
  // Retain freshness history: deleting it could restamp an unchanged cached value.
  if (previous) await writeSnapshot(path, { ...previous, kind: 'unavailable' }).catch(() => {});
  // No previous file means no budget evidence; an unsafe existing file stays rejected.
}
// Call the separately reviewed original display implementation with input if available.
// Emit only its original display text, never JSON or capture diagnostics.
```

Serialize statusline capture invocations; do not allow two wrappers to overwrite each other's history. Reject a changed Claude account/route during an existing installation and re-review its binding. Claude payload fields cannot detect an otherwise invisible account switch: approved route/account controls are mandatory. An unavailable marker fails the guard. Do not delete history to resume stale catch-up; wait for genuinely changed evidence or stop automatic catch-up. If writing an unavailable marker fails, halt the consuming runtime; a failing storage medium cannot provide a reliable cross-process stop signal.

## Codex: usage-only direct app-server

Primary contract:
https://learn.chatgpt.com/docs/app-server.md

`captureCodex({ executable, codexHome, expected, identitySalt, accountFingerprint, signal })` starts the reviewed absolute executable with these constant args:

```text
--no-daemon -c model_provider="openai" -c forced_login_method="chatgpt" app-server --stdio
```

Require an already authenticated, separately approved config-free `CODEX_HOME` (0700). This helper refuses any `config.toml`, including symlinks, and never reads/copies auth files. An existing login is not demonstrated reusable through a different home; establishing that home may require a separately approved login to the same subscription. Do not silently copy credentials, log in, replace existing config, or claim the setup is installed. `--ignore-user-config` was observed for `exec`, not established for `app-server`, so it is not used here. Global/system managed configuration and the actual installed version must be inspected during installation; if they can start unreviewed integrations or redirect service endpoints, do not launch. A config-free home plus fixed provider overrides is not proof that machine-wide policy is harmless.

The child receives only `HOME`, fixed `PATH`/`LANG`, and `CODEX_HOME`; API keys, URL overrides, proxies, provider environment, `NODE_OPTIONS` and inherited tokens are not forwarded. Auth stays internal to Codex. Do not accept extra flags/hosts/endpoints. Handshake: `initialize`, `initialized`, `account/read` with `{refreshToken:false}`, then `account/rateLimits/read`; no thread, turn, login, logout, reset/credit-consume, purchase, export or message method is sent. App-server itself can maintain internal auth/cache state; this is not a promise of zero internal filesystem/network activity.

Require `requiresOpenaiAuth:true`, `account.type:'chatgpt'`, plan `plus`/`pro`, exact approved bucket and the reviewed workload applicability. Missing/unsupported windows stop; only 300/10080-minute windows are supported. Credits and unrelated fields are ignored, never counted. Bounded JSONL uses fatal streaming UTF-8 decoding and permits id-less rate-limit notifications with object params. Only the explicit safe-integer ID of the one outstanding request is accepted; unknown, stale, id-less or malformed responses fail closed. Server requests, account/auth change notifications, malformed replies, limits or timeouts stop. The child process group is killed and closed on success/failure. No model response is requested.

The account fingerprint is SHA-256 over UTF-8 `xo-account-v1`, NUL, a reviewed installation nonce (16–64 alphanumeric/underscore/hyphen characters), NUL, account type, NUL, plan, NUL, documented email. Prepare the expected digest through a separately reviewed local enrollment that never prints/persists email; this task does not ship or perform login/enrollment. Store only the nonce/digest in protected wrapper configuration, never email/token. Reject missing email, plan/email changes or mismatch. This catches changes in those documented fields, not two distinct identities sharing them; it is not cryptographic account attestation. The nonsecret `accountBinding` alias alone proves nothing. Never treat a locally fabricated snapshot as authentic provider evidence.

## Run a finite reviewed tranche

Import `runBounded` from `../tools/subscription-run.mjs` in a protected constant wrapper. Supply `snapshotPath`, the exact `expected` binding, a finite `batches` array of `{executable,args,cwd?}`, `maxBatches` (1–100), `maxRuntimeMs` (1–3600000), `batchTimeoutMs` (at most total time), and at least one absolute `stopPaths` marker. Name a foreground marker and a human pause/withdrawal marker. Existence or inspection error stops; the runtime checks them between batches and polls during work/capture. Connect SIGINT/SIGTERM to an `AbortController` passed as `signal`. This is a cooperative foreground protocol, not automatic detection of other sessions.

Review every work argv for the selected records, sources, provider/account/model, per-batch work limit, concurrency 1, retry cap (prefer zero), native gates and included-subscription-only configuration. The generic runner cannot infer those properties or disable paid extras in an arbitrary executable. Do not enable work until that route is proven; no snapshot grants source/read/research/save authority. No retries occur in this runner. Do not pass provider overrides through the parent environment; the child environment is minimal. Provider-specific home/config requirements belong in a reviewed constant executable wrapper; inherited `CODEX_HOME` or Claude credentials are deliberately not forwarded to work.

For Codex, provide an `acquire(signal)` closure that calls the exact reviewed `captureCodex` options, passes `signal`, then immediately `writeSnapshot`s the result before returning. For Claude, omit `acquire` and read only the independently maintained statusline snapshot; no background idle refresh is implied. Capture callbacks are trusted code and must respect cancellation. After pause, cancellation, deadline or capture failure, the runner aborts and allows at most one additional second for acquisition settlement; it reports `capture-cleanup-timeout` if that grace expires. The built-in Codex capture settles only after its child closes, and fake-process tests cover this path. An arbitrary callback can ignore cancellation and outlive the runner; the grace does not forcibly isolate it. Do not hide an unbounded process in a callback.

Each batch rereads the private snapshot and invokes the existing guard. Veto, unavailable/stale evidence, a changed reset, pause, cancellation, deadline, work error, child-output bound or timeout stops this run. Active work is additionally capped at the earliest known short/weekly reset, with a conservative 50 ms margin: `reset-expired` kills the process group and does not count that batch as completed, even with the one-run reserve waiver. The reset is converted to a monotonic deadline so a backward wall-clock change cannot extend it; active checks also stop on a forward wall-clock crossing. This uses the local clock, not verified provider clock synchronization. It does not refresh quota/reserve usage during an active batch, and cannot undo requests already sent upstream. The runner emits only `{completed,reason}`; work stdout/stderr are discarded with a 256 KiB combined bound. `completed` counts zero-exit batches, not records or verified saves. Process-group SIGKILL stops descendants that stay in that group; intentionally daemonized/session-escaping children are unsupported and forbidden in reviewed work. Killing a child cannot undo work already sent upstream. Native guards must still operate inside the finite batch.

`dryRun:true` validates static limits and starts no capture/work or snapshot write; it is not live quota validation. The default guard reserves remain 20%. Explicit reserve zero additionally requires `burnAllThisRun:true` in this one invocation, only after the human's “burn it all” choice. Never persist that waiver as recurring policy. Exhausted windows still veto; freshness, reset horizon, finite limits and native gates remain. Usage percentages are not exact token/request/contact predictions. Reporting lag and in-flight overshoot remain: this guard cannot guarantee that a subscription will not exhaust. Never enable paid extras, buy credits or switch providers after a stop.

Manual targeted enrichment outside the catch-up window is a separately approved finite one-run flow, not a fabricated meter or a gate bypass. This module has no scheduler and no force flag. Prove actual installed behavior only after separate approval; fake tests do not demonstrate unattended enrichment.

## Done when

- [ ] Exact wrappers, sources/provider route, account/workload/bucket, finite tranche and native/stop controls are reviewed and separately approved for installation.
- [ ] Claude display survives unchanged, cached observations age honestly, and unavailable/reset/foreground paths stop.
- [ ] Codex's actual installed config isolation/authenticated home and local fingerprint enrollment are demonstrated without leaking credentials or account identity.
- [ ] Target-host synthetic runner and separately approved live usage-only/consuming-work checks pass; unsupported idle/unattended behavior stays labeled unavailable.
