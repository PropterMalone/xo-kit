# Use spare subscription capacity

For the agent. Use this when the human chooses gradual background progress on permitted work using one existing Claude Pro or ChatGPT Plus/Codex subscription. Budget awareness is general: prefer the most useful approved deferrable work, such as optional Kettle enrichment, not filling quota for its own sake. Do not add another subscription, provider, model purchase, API key, credits or extra usage. A monthly price is not a fixed token allowance.

This flow includes the local Node.js 20+ quota parser/guard, `../tools/subscription-budget.mjs`. Optional Linux-only reference capture/run APIs also ship in `../tools/subscription-capture.mjs` and `../tools/subscription-run.mjs`; read [subscription-runtime.md](subscription-runtime.md) for the minimal reviewed constant wrapper before proposing installation. These are source candidates conditional on review, not an installed meter, authenticated live-account verification, wakeup or scheduler. No publication or native Windows/macOS support is claimed. Catch-up needs an active session or separately approved runtime, actual source boundaries and demonstrated stop behavior. Own the wrapper proposal and verification; do not make the human maintain a spreadsheet, assemble commands or reapprove unchanged batches.

## 1. Choose useful work and one bounded policy

Keep foreground work first. Start with an already-given, actually permitted source such as the chosen email or contact scope when it serves the task; do not make another connection or broad intake a prerequisite. Existing access alone is not new read/research/save authority. Offer one decision that identifies the useful backlog, initial finite tranche and ongoing finite limits. For example, a separately approved Kettle plan can handle a high-salience person now, construct a chosen thematic cohort, then gradually enrich the remaining approved tranche with weekly leftovers. Manual targeted work is independent of the automatic meter. Neither a new person nor a theme authorizes new sources or a wider provider exposure.

One approval may cover recurring batches within an explicit unchanged scope; do not ask again for each batch. Establish permitted records, sources, fields, model/provider, permitted research and saves, maximum total records/work units per cycle, per-batch size, maximum elapsed runtime, retry limit, foreground reserve, expiry/review point and stop control. An overall finite tranche prevents an endless queue even across resets. A quota signal is not permission to read, research, save, send, install or schedule. Apply `stage2/03-sources.md`, native protection and the chosen work's separate gates; use `address-book.md` for Kettle authority and disclosure. Never turn a broad shell into a claimed read-only boundary.

Pause and review only on a material change: scope, source authority, provider/account/model/bucket, costs, config/runtime controls, human withdrawal, expiry or native denial. Stop denied routes immediately without another tool/provider path. Do not automatically switch provider, buy capacity, use credits/extra usage, continue after reset on old evidence or treat the reset as a target to exhaust.

If no supported fresh meter exists, say automatic catch-up is unavailable. Offer a human-declared **one-run allowance** with explicit finite work, batch/time/retry limits, chosen route and permitted data actions. Keep it labeled manual, not measured or automatic; do not forge a snapshot, type a quota estimate into the helper, or carry this allowance into future weeks. A known exhaustion/denial still stops it. The helper has no manual-bypass switch.

## 2. Review capture before installing it

Verify the actual target host, Node version, subscription authentication and consuming model. Use one provider only. Show the exact adapter/launcher contents, absolute paths, private capture destination, native configuration change, statusline preservation, runtime/stop controls and reversal before any separately approved installation. Do not overwrite an existing statusline command or its visible output. Do not print raw captures in chat or logs. This source flow itself performs no installation or account request.

Supported primary payload references:

Claude Code statusline:
https://code.claude.com/docs/en/statusline

Codex app-server rate limits and account API:
https://learn.chatgpt.com/docs/app-server.md#6-rate-limits-chatgpt

- **Claude:** the statusline receives `rate_limits.five_hour` and `rate_limits.seven_day`, each containing `used_percentage` and `resets_at` in Unix seconds. These fields are documented for Pro/Max after the first response; windows can be independently absent and disappear after a reset. Missing either window stops catch-up. The local statusline command itself uses no model tokens; obtaining a model response is not free merely because capture is local. Preserve existing display behavior. Reject API/Bedrock/other billing routes rather than inferring a subscription from payload shape.
- **Codex:** support the documented `account/rateLimits/read` response's `result` or `account/rateLimits/updated` notification's `params`, containing `rateLimits` and/or `rateLimitsByLimitId`. Inspect `limitId`, `usedPercent`, `windowDurationMins`, `resetsAt`, and `rateLimitReachedType`. Require the exact approved bucket and its actual applicability to the intended model/workload. An extra bucket is not more capacity to select. Conflicting representations stop. Require a 300-minute short window and exactly 10080-minute weekly window, regardless of primary/secondary position; other durations are deliberately unsupported. Do not count credits. Establish subscription authentication separately from the documented `account/read` with `{refreshToken:false}`: project only `account.type === 'chatgpt'` and `planType` (this helper accepts Plus/Pro). Never retain or emit email, tokens or credentials. The optional usage-only reference API is documented in `subscription-runtime.md`; it has no live smoke or installed-account verification. Use a separately approved authenticated config-free Codex home and local fingerprint enrollment, with no credential copying. Fingerprints stay protected locally; do not print public account identifiers or raw account payloads. Claude's wrapper preserves the existing statusline output and unchanged windows retain their original capture time; re-reading a fresh-looking cache never restamps them.

The acquisition adapter must stamp integer `capturedAt` Unix seconds **at actual acquisition**, bind that event to the approved provider/account/session and, for Codex, exact bucket/model workload, then immediately project it. The provider payload has no observation timestamp. Reading cached raw JSON later does not refresh it. Copied JSON plus a handwritten timestamp is not authenticated evidence. Use an approved local nonsecret alias, never an email/account ID or credential, for `accountBinding`; `workloadBinding` similarly names a reviewed model/bucket binding, not a guessed model label.

The helper validates a trusted envelope; it does **not** authenticate a client, discover a subscription, verify the model/bucket binding or prove truthful timing. Protect the adapter, binding configuration and snapshots against untrusted writes. Project locally before any tool result reaches the model. If approved persistence is needed, use an atomically replaced regular file in a private protected directory outside xo, engine and contact store. Do not store raw payloads for convenience. Symlinks, nonregular inputs and inputs over 256 KiB are rejected; ancestor inspection reduces accidental redirection but is not a sandbox against a hostile local process racing directory changes. The adapter/runtime security boundary must cover that risk.

## 3. Normalize and check

The adapter supplies this envelope shape, not a Hero-authored substitute for live evidence. These are deliberately synthetic abbreviated examples:

```json
{
  "schemaVersion": 1,
  "provider": "claude",
  "accountBinding": "personal-main",
  "source": "claude-statusline",
  "capturedAt": 1792584000,
  "subscription": {"type": "claude-subscription", "plan": "pro"},
  "payload": {"rate_limits": {
    "five_hour": {"used_percentage": 25, "resets_at": 1792585800},
    "seven_day": {"used_percentage": 40, "resets_at": 1792591200}
  }}
}
```

For Codex, use `provider: "codex"`, `source: "codex-app-server"`, `subscription: {"type":"chatgpt","plan":"plus"}`, `bucket: "codex"`, and `workloadBinding: "approved-model"`; replace `payload` with the actual documented response or notification. Preserve all captured timestamps; the historical example above must fail freshness checks today. Unknown raw fields are ignored and never projected. The minimal snapshot preserves capture time and only selected usage, reset, duration, source and nonsecret binding/subscription fields.

This optional helper is not required for xo base use. Review an allowlist for the verified Node executable, exact absolute helper path and bounded subcommand/arguments, not a glob such as `kit/tools/*` or a broad shell grant. Keep native protected boundaries; no shell bypass follows from allowing the helper. Retrieve the helper bytes only from the same reviewed pinned kit revision as this flow; never execute a Markdown rendering or an unreviewed branch.

Run from an approved adapter with executable/argument arrays and `shell: false`. Both commands accept bounded stdin JSON by default or `--input PATH` for a regular JSON file. `normalize` emits one minimal snapshot; `check` accepts only that snapshot and revalidates every boundary. These command shapes require the agent to substitute actual reviewed paths; they are not a human setup checklist:

```text
node /absolute/xo/kit/tools/subscription-budget.mjs normalize --provider claude --account personal-main
node /absolute/xo/kit/tools/subscription-budget.mjs check --provider claude --account personal-main --input /absolute/private/budget.json
node /absolute/xo/kit/tools/subscription-budget.mjs check --provider codex --account personal-main --bucket codex --workload approved-model --input /absolute/private/budget.json
```

For a direct PowerShell check, quoting paths with spaces requires the call operator:

```powershell
& 'C:\Program Files\nodejs\node.exe' 'C:\XO\kit\tools\subscription-budget.mjs' check --provider claude --account personal-main --input 'C:\XO Private\budget.json'
```

Verify on the actual Windows host; a Linux process test proves no native Windows/app behavior. Do not mix WSL and native paths. No helper clock override exists in the CLI.

Proposed editable defaults, **not inferred owner preferences**:

| Option | Default | Accepted bounds |
| --- | --- | --- |
| `--max-age-seconds` | 300 | integer 1–900 |
| `--horizon-hours` | 24 | 1–168 |
| `--weekly-reserve` | 20 | 0–100 percent remaining |
| `--short-reserve` | 20 | 0–100 percent remaining |

Treat these values as installation-review proposals, not permission to consume the other 80%. Preserve the buffer by default; do not aim to spend to zero or fill all leftovers without an explicit one-run choice. If the human explicitly says “burn it all,” waive only the selected reserves for that bounded run (`--weekly-reserve 0 --short-reserve 0` if both were selected). Keep included subscription capacity only: never overage, credits or paid extras. Source/native gates, finite per-run work/time/retry caps, stop on exhaustion/reset and foreground interruption remain; the waiver expires with that run and does not change the default. A zero reserve still vetoes an exhausted window. Explain reporting lag and in-flight overshoot before the choice; no guard can promise exact exhaustion timing. Require an absolute finite per-run work-unit/record cap and elapsed-time/retry cap independent of the meter, for manual as well as recurring work; begin with the smallest useful sequential batch. Pause before any next batch whenever foreground work needs capacity. Usage reporting can lag and in-flight calls can overshoot; a reserve is a conservative stop threshold, not a spending target or guarantee.

Apply the same reviewed freshness setting to normalize and check. Gate on the actual weekly reset being within the selected horizon, not calendar Sunday or a guessed billing date. Require remaining headroom **strictly above** both reserves. Exhausted short windows block even with weekly spare. Future/stale observations, expired/impossible resets, missing windows, malformed percentages, mismatched bindings or unsupported subscriptions stop. Numeric timestamps must be integer seconds within 2020–2100; resets must also be no farther from capture than their window duration. Unknown/duplicate arguments fail closed.

Exit status is the contract: 0 permits the quota condition only; 1 is a valid snapshot veto (reserve or outside horizon); 2 is invalid/unavailable input or configuration. `check` stdout contains only `{allowed,reason}`; failure stderr starts with a fixed `subscription-budget: REASON`. No provider fields, raw errors or paths are echoed. There are no writes, network calls, child commands, provider fallback or quota purchases. Stdin has a two-second acquisition timeout and 256 KiB maximum.

## 4. Connect only through a separately approved driver

Use the finite argv-based runner in `subscription-runtime.md` through a reviewed constant wrapper; it executes no shell and supplies no model or research adapter. The ordinary Claude mode in Kettle's existing pipeline is a potential selected work route, with no live smoke here. Automatic headless Codex research is blocked until a supported enforced web-only tool boundary is proved; usage-only Codex capture does not resolve that gap. Manual in-session Codex research may use actual approved native tools under their permission gates; do not label it autonomous background research. Do not install configuration, perform account smoke tests or adopt wrappers without the human's exact separate approval.

Kettle's reviewed `scripts/enrich-batch.mjs` accepts `--guard-cmd` / `KETTLE_ENRICH_GUARD`, treats nonzero as a veto and reads the first stderr line. It currently executes that option as a **shell string**, not an argv array. This helper never evaluates commands, but it cannot make Kettle's outer string safe. Do not interpolate payloads, contact fields, account text, untrusted paths or other dynamic data into it. Installation must separately review an exact constant launcher/command for the actual shell and protected paths; a direct PowerShell example above is not a portable Kettle guard string. If safe target-shell construction cannot be verified, use an approved driver with argument arrays and a pre-batch check instead; do not improvise quoting or claim `--guard-cmd` is injection-proof.

Use a finite sequential loop: acquire genuinely fresh supported evidence; normalize locally; check; stop on any nonzero; execute one separately authorized finite batch with concurrency 1 and bounded retries; obtain the next real observation and recheck before continuing. Stop at the tranche/cycle/time limits, withdrawal, foreground demand, native denial, stale capture or reset. Use the engine's actual finite `--limit`, `--concurrency 1` and retry controls after exact review; never rely on its default parallelism. Kettle checks its guard at each concurrency wave, but retries and already in-flight work can overshoot a reserve. Percentages are not an exact token, request or contacts conversion. Leave conservative room and stop rather than running a final oversized batch to use every percent.

A synthetic executable demonstration lives in the source tests: `node --test scripts/tests/subscription-budget.test.mjs`. Its finite three-step subprocess driver completes two fake batches, then a reserve veto prevents the third. It uses no real account, contacts or engine work. This proves the helper's exit-status contract and sequential stop logic, not installed Kettle integration.

After approved installation, verify capture provenance/time, account/bucket/model binding, atomic refresh and stale/reset failure; run a synthetic finite driver through the actual launcher on the target host; prove no batch starts after a guard veto and that stop/withdrawal works. Demonstrate the actual consuming runtime before saying background progress is live. A scheduler or external always-on host is a separate installation decision; this helper never wakes the agent. If no active runtime exists, give that honest status rather than implying a missed weekly run happened.

## Done when

- [ ] The human chose useful permitted work and an explicit bounded one-run or recurring scope, or declined/deferred without setup debt; unchanged recurring batches do not require repeated asks.
- [ ] One subscription route, foreground reserves, actual reset horizon and finite sequential limits are named; credits, purchases, provider switching and unapproved data actions remain excluded.
- [ ] Fresh measured evidence is distinguished from a manual allowance, and trusted capture/projection is distinguished from authenticated live acquisition.
- [ ] Helper tests, installed capture, actual driver/runtime, target-host behavior and unattended capability are reported separately as observed, unavailable or unverified.
- [ ] Installation/configuration, source access, research, saves and scheduling keep their separate approvals and native boundaries; denial stops without bypass.
