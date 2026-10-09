# Adapter: Codex in the ChatGPT desktop app

For the agent, if you are Codex. The stage 1 sittings say *what* to set; this file says *where* in your harness. Anything marked `(verify)` is our best knowledge, not a tested fact: check it on your human's machine before relying on it, and tell them if it differs. The Codex app is Untried: nothing here has been run end to end yet.

## Layout: protected files sit outside the writable root

Codex protects files by leaving them outside the folders its sandbox can write, not by configurable per-file rules (https://learn.chatgpt.com/docs/config-file/config-reference). Verify the actual working-task boundary before treating this as protection: ask `/status` for workspace details, but if this app only shows usage/session information, inspect the active project-folder and permissions UI instead and mark the roots unverified until a safe test establishes them. So on Codex, `~/xo` splits in two:

```
~/xo/                  git root; should NOT be silently writable by a working task
  AGENTS.md            instructions (protected)
  ledger.md            permissions ledger (protected)
  kit/                 vendored kit (protected)
  work/                the session folder; the only writable root
    memory/  handoffs/  drafts/  sources.md
```

- **Two phases, different permissions:** creating `~/xo` and protected parent files may need a human-approved, narrowly scoped outside-workspace action during setup. Approval for that action is not evidence the later working task protects `~/xo`. Avoid permanent read/write grants to the whole parent just to create the folder; if the app offers only a persistent grant, explain that tradeoff and offer human creation of the parent files instead. Do not guess that a one-time option exists.
- Fresh working tasks open in the existing `~/xo/work` folder. Codex may load `AGENTS.md` from the git root down to the session folder; confirm parent auto-load with the check below. Inspect the task's actual project folder and permissions, request workspace details via `/status`, and check whether `~/xo/work` is writable while `~/xo` stays protected. If `/status` omits writable roots, do not invent them: use a harmless approved work-file write, then, after the human agrees to the *test*, submit a write request for a disposable probe path in the parent. If the app prompts the human, ask them to deny it; if a native automatic reviewer denies before execution, record that separately. Verify no probe was written. A chat yes to test is not a yes to write; if the app permits the write silently, stop, remove only that probe with a separate yes, and record the failed boundary. Never test by editing `AGENTS.md`, the ledger, or real data. If the parent result cannot be established, stop and record a protection gap.
- Git commits write `~/xo/.git`. Codex documents `.git` as read-only even inside a writable root; test whether this app requests approval before relying on a commit prompt. A chat yes is still required before the commit, whether or not the harness asks too.
- Where other kit files say `~/xo/memory/`, `~/xo/handoffs/`, `~/xo/drafts/`, or `~/xo/sources.md`, use `~/xo/work/memory/`, `~/xo/work/handoffs/`, `~/xo/work/drafts/`, or `~/xo/work/sources.md` respectively. Protected `~/xo/kit/`, `~/xo/kit/PIN`, `~/xo/ledger.md`, and `~/xo/AGENTS.md` stay in the parent.
- If a protected-parent write fails, use the bounded diagnosis below before asking the human to do the file work. A chat yes and even an app approval are not proof that a file was saved. **Do not ask to override an enforced policy or switch to Full access.**
- If the split layout still can't be made to work (for example the app won't open a subfolder or the working task can silently write in `~/xo`), stop and tell your human. If parent `AGENTS.md` auto-load fails or is unverified while the folder and protected-parent boundary work, explicitly read it at each door in and record the gap; do not treat that alone as a reason to abandon the split layout. Only with their approval, fall back to one folder at `~/xo`, protection by prompt only. Record the known gap in the ledger; do not claim the harness enforces self-edit approval.

## When a bootstrap read or write fails

Troubleshoot the *specific operation* before retrying or making a claim about the whole app. Keep this to one diagnosis and at most one changed-route retry; if it still fails, report the gap and offer the human path. Do not repeatedly request the same denied escalation.

1. **Inspect without changing policy.** Note the exact attempted operation and target (read/fetch versus create/write), the tool or command used, the error text or automatic-review result, whether a human app approval actually appeared and was granted, the session's permissions control below the composer (**Ask for approval**, **Approve for me / Auto-review**, or other), the active project folder, and any workspace details `/status` actually shows. If it only shows usage or session information, say so and inspect the app's permission/folder UI instead. Ask the human for missing UI facts rather than inventing them. Avoid printing private home paths in a shareable report. Check whether the file or folder actually exists before saying it was saved.
2. **Classify the boundary.** A failed network fetch is not a file-write failure; check its URL, network permission and error separately. If **Auto-review** denied an outside-workspace request, explain that automatic review—not the human's chat yes—made that decision. Ask whether the human wants to select **Ask for approval** for this session via the permissions control below the composer; this changes who reviews requests, **not** the writable sandbox or all-file access. If Ask for approval is disabled by local or organization policy, stop trying to escalate. If human app approval was granted but the write still failed, quote the filesystem error and leave its cause unknown until tested; do not label it Windows ACL without evidence.
3. **Try a safer route only when applicable.** For a failed shell command that combined creating folders and writing a protected file, do not repeat it unchanged. With the human's separate yes, try a single narrowly scoped built-in file edit or creation request for the reviewed file, if the tool is available; this still must pass the app boundary. No shell redirection, command splitting or alternate tool may be used to evade a denial. If one route can create a working folder inside the verified `~/xo/work` root, that does **not** grant permission to create `~/xo/AGENTS.md`; never move the protected instructions into the writable root and call that equivalent. Verify the intended file exists and matches approved text after any successful write.
4. **Report and hand off.** State what was observed, what remains uncertain, which gate blocked which target, and the least-permissive change that would let setup continue. Offer: (a) human-reviewed **Ask for approval** for one outside-root action if available and not yet tried; (b) human creation of `~/xo` and `~/xo/work` in File Explorer and saving the reviewed exact seed as plain-text `~/xo/AGENTS.md` (not `.txt`); or (c) pause and leave the layout unverified. A human-created file must be checked for existence and contents. Then start a fresh task with `~/xo/work` selected as the actual existing folder, verify its work/parent boundary and instruction auto-load separately before proceeding. Codex may check only the current folder if it cannot identify a project root, so parent `AGENTS.md` load is not guaranteed. If those checks fail, explain the protection gap before offering the one-folder fallback with explicit consent. Never claim installation succeeded just because a prompt was approved.

## Give your human an entry prompt before reopening

Codex documents that, without a recognized project root, it checks only the current folder for instructions (https://learn.chatgpt.com/docs/agent-configuration/agents-md). A fresh `~/xo/work` task can therefore miss the protected parent `AGENTS.md`: this kit does not set up Git until sitting 04. Do not move instructions into `work`, open the protected parent as writable, or make Git installation a prerequisite for re-entry.

Before **any** planned reopen, including the seed's first reopen and the human-created-file recovery above, confirm the saved instructions path and actual working folder. Give your human this short copyable prompt **in chat**, replacing both placeholders with verified absolute paths from this installation. Use the same home path for both; do not copy a path from a tester report. Explain that they can keep this prompt for future chats when automatic loading has failed or remains unverified; a handoff alone cannot tell a fresh agent where to read it. Keep personal paths out of shareable reports.

```text
Read "<absolute path to xo/AGENTS.md>" as my XO instructions and follow its kit pointer. If setup is complete, run door in. Otherwise resume setup from the newest handoff by date and numeric sitting sequence in "<absolute path to xo/work/handoffs>". If no handoff exists, say so and ask me for the next setup step. If the selected project folder is not the intended xo/work folder or the instructions cannot be read, stop and explain. Do not change permissions or move files to recover.
```

If your human chooses the private-phrase auto-load test below, tell them to ask for the phrase **before pasting this entry prompt** or any explicit file read; a read makes that session's phrase result inconclusive. They may skip the test and use the entry prompt directly, recording auto-load unverified. A successful explicit read proves read recovery, not automatic loading or protected-write enforcement. If a read is denied, stop that read; do not switch tools or permissions to evade it. After sitting 04 creates Git, a future fresh task may discover the parent, but do not mark auto-load passed without its separate test or force another reopen.

## Instructions file

- Name: `~/xo/AGENTS.md`. A user-level `~/.codex/AGENTS.md` (or `AGENTS.override.md`) also loads if it exists (https://learn.chatgpt.com/docs/agent-configuration/agents-md); check for one in sitting 01 and tell your human what's in it.
- Reopening: in the ChatGPT desktop app, open Codex and choose the **existing folder** `~/xo/work` through the folder picker as the task's project folder (verify: exact menu path). A project-name text field is not a folder picker: entering a path there may create a default-location project instead (tester report). Before continuing, inspect the folder shown in the trust prompt and task header; if it isn't the intended `~/xo/work`, stop and select the correct existing folder. A connected project folder is only one step; it does not establish writable roots, instruction auto-load, or a handoff.
- Auto-load check, after reopening: the human privately writes a fresh, harmless random phrase to `AGENTS.md` after the prior chat closes; do not put it in chat, a handoff, memory, or any source the agent already saw. In the new task, without reading any file, ask the agent to state that phrase. A phrase proposed in the old chat (or the kit's pinned SHA) cannot prove auto-load. Check for user-level or other injection routes; mark uncertain results unverified and read `AGENTS.md` explicitly at each door in. The human may skip the test and use explicit reads. If only `AGENTS.md` exists and no handoff does, inspect the task folder and permissions (using `/status` only for facts it actually shows), then ask to create the handoff per `START.md` before another reopen. Report each result separately and propose the next action; do not require repeated reopens just to satisfy the test. After a passed fresh-task protected-parent probe, reuse its dated result in later chats with the same folder, mode and protective settings. Check those facts at door in; a new chat alone does not invalidate the probe. Repeat a disposable probe only when a relevant boundary changes, the prior result was inconclusive, or a bypass is suspected, with a new test yes. If autoload is skipped or unverified, read instructions explicitly; do not make local memory/drafts wait for a forced retest.

## Permissions

Settings live in `~/.codex/config.toml`, shared by the CLI and the app (verify for the app; it may also expose these as a mode picker). It's outside the writable root, so editing it asks. Starting point for stage 1:

```toml
approval_policy = "on-request"
sandbox_mode = "workspace-write"

[sandbox_workspace_write]
network_access = false
```

- **Approval** `on-request`: work inside the active `~/xo/work` workspace runs; outside-workspace or network operations require an approval route, but the app may deny, auto-review, or offer a broader remembered grant rather than the narrow permission expected. Inspect the actual prompt scope before approving; a chat yes alone does not authorize the app action. Separate chat approval under the seed is still required before installs, settings changes, account setup, or self-edits. **Strongly recommend Approve for me / Auto-review** as the early steady-state choice after the protected-parent boundary check: routine work inside `~/xo/work` already runs, while requests for additional access go to an automatic reviewer rather than repeatedly interrupting your human. This reviewer can make mistakes; it reduces individual human oversight, not the need for XO's chat-level consent or a separately blocked send tool. In ChatGPT desktop Settings → General → Permissions, enable **Auto-review** to make it available, then choose **Approve for me** for the active Codex chat using the permissions control below the composer; enabling it does not select it in an existing chat. Confirm the live task folder and mode, do a harmless approval-gated parent-file probe, and record whether the request was automatically allowed or denied and whether the file changed. If a protected write runs outside the agreed scope or the intended workspace cannot be verified, return to **Ask for approval** from that same selector and pause setup. Keep Full access off (https://learn.chatgpt.com/docs/permission-modes). If `/status` omits roots, inspect the task folder and use the safe boundary checks above; keep protection unverified until then.
- **Sandbox** `workspace-write` with the session folder as the intended writable root (plus any runtime-managed temporary locations). Don't add `~/xo` itself to `writable_roots`; verify the live task's boundary rather than assuming the config alone establishes it.
- **Fetch allowlist**: local personal Codex config documents no per-domain allowlist (https://learn.chatgpt.com/docs/config-file/config-reference). With the network off, every fetch asks, including the kit and policy pages. Since the kit is vendored, that's rare. Tell your human this is stricter than the brief's default, not looser.
- **Never** use `danger-full-access`, `approval_policy = "never"`, or the app's full-access mode.
- An approval of the form "don't ask again for this" widens what runs silently (verify: where the app records it). The door-in drift check (sitting 05) compares the live config against the ledger.

## Harness-private memory

The system of record is `~/xo/work/memory/`. Codex local memories are off by default; check Settings → Personalization → Enable memories and propose turning it off if on (https://learn.chatgpt.com/docs/customization/memories). ChatGPT's chat-side memory (Settings → Personalization) is separate; tell your human it exists and that it isn't where XO keeps anything.

## Connectors: open v0 blocker

Use `stage2/03-sources.md`'s connection decision and guided setup before a new sign-in or first XO use of an existing connection: one useful task, the exact account/grant and provider disclosure, checked subscription/usage and privacy costs, and a revocation route. Check current official instructions and the actual app, plan and platform before naming a control or price. Guide one screen at a time; record sign-in, Codex-session reach, mutation deny and separately approved bounded read as distinct outcomes. Do not send the human through a ChatGPT chat-side connector wizard as if that alone establishes Codex reach or a safe tool gate.

**Unknown whether a Codex session inherits Gmail and Calendar accounts connected on the ChatGPT chat side.** OpenAI documents Gmail as a Codex-capable plugin and separately documents MCP servers shared through Codex configuration, but neither proves that a ChatGPT-connected Google account is reachable in this Codex session (https://learn.chatgpt.com/docs/plugins; https://learn.chatgpt.com/docs/extend/mcp). Plugin presence is not account authorization, and installing it may expose send-type tools. Testing actual reach and pre-execution tool denials is a v0 blocker for this door. In sitting 01, the capability inventory establishes only which tools are exposed in this session. It does not establish account authorization or usable Codex reach. Record those separately as unverified until an account-specific non-content check or a separately approved bounded read succeeds after the mutation gate. Then:

- If no connector tools appear: say so. Record "no connector tools exposed in this session; account reach unverified" in the ledger. Do not assume ChatGPT chat-side connections reach Codex, or claim the account is disconnected from catalog absence alone. For the first connector sitting, help with human-selected content or the source's own view instead of designing a proxy; any later work-account forwarding route needs separate policy authorization.
- If they appear: record `tools exposed; account reach unverified` until checked as above, and list the connected-account/outbound mutation tools by exact name. For a connector the human actually chooses, Codex documents MCP `enabled_tools`, `disabled_tools`, and per-tool approval modes in its config (https://learn.chatgpt.com/docs/extend/mcp); verify whether those controls apply to that connector in this app. ChatGPT chat-side approval tiers are not a demonstrated Codex per-tool deny. Block send-type tools and verify the effective restriction before using that connector. If you cannot verify it, turn that connector off and stop XO connector use; offer human-selected content or defer. Do not disable unrelated app housekeeping tools or require repeated new chats just to complete local-only stage 1; a connector-off check establishes catalog absence in that session, not universal runtime blocking.

## Rungs to settings

| Rung | Settings |
|---|---|
| 0 memory | The config above; writable root `~/xo/work` only. |
| 1 drafting | Same as 0. Drafts in `~/xo/work/drafts/`; your human copies and sends. |
| 2 read one source | Connector route only when send-type tools are blocked and verified: keep reads on ask unless a standing scope was separately approved; everything else off or ask. Otherwise help with human-selected content or defer; proxies are a later separate choice. One source per yes. |
| 3 stage in channel | Only if draft creation can be approved independently of blocked send, reply, forward, and delete tools in this Codex session. Otherwise this rung is unavailable. |

Every rung change edits `ledger.md` and possibly `config.toml`, both protected, and goes through the self-edit gate.

## What this harness can't do

- Run while the app is closed. No scheduled or background work in v0.
- Take hidden input. Never ask your human to type a secret into a command.
- Allowlist fetch domains in documented personal config; fetches ask instead.
- Configure single files read-only inside a writable root; only fixed paths such as `.git`, `.codex`, and `.agents` receive built-in protection (https://learn.chatgpt.com/docs/agent-approvals-security). Hence the layout above.
- Reach ChatGPT's connectors, possibly. See the blocker above.

## Native completion confetti

Observed 2026-10-09: an owner-supplied screenshot of Codex's **Toys → Confetti cannon** setting says “Let Codex fire confetti in the app when you ask!” That establishes the feature's existence only. Its exact agent invocation and current-session enabled-state detection remain unverified; this is not a desktop execution check or proof of permission for agent-initiated use. Follow `flows/one-task.md` for the native-only, confirmed-completion and quiet-fallback rules. Use no invented command, settings change, UI/shell workaround or substitute animation. If the actual capability requires an explicit user request, do not invoke it as a surprise.

## Done when

- [ ] A fresh task shows the correct `~/xo/work` project folder; work-file write succeeds and a disposable parent-file probe was denied before execution under the same recorded folder/mode/settings (or a silently created probe is removed with a separate yes and the protection failure recorded). An earlier fresh-task pass remains valid when those facts are unchanged. Check `~/xo/AGENTS.md` auto-load without a read if the human chooses the private-phrase test; otherwise label auto-load unverified and read instructions explicitly each door in. Do not confuse an unverified optional auto-load check with a failed protected-file boundary.
- [ ] Before reopening, your human received the copyable entry prompt in chat with verified absolute instructions and handoffs paths and knows to use it if auto-load failed or remains unverified. Any private-phrase auto-load test precedes the explicit read; successful read recovery is recorded separately.
- [ ] The live config matches what your human approved, and the ledger records it.
- [ ] Tool exposure is recorded for this session; selected-account reach remains unverified until a safe, separately scoped check establishes it. Do not mark a connector usable from a tool list alone.
- [ ] Any harness-private memory is off or confirmed ignored.
