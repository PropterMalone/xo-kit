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
    memory/  handoffs/  drafts/
```

- **Two phases, different permissions:** creating `~/xo` and protected parent files may need a human-approved, narrowly scoped outside-workspace action during setup. Approval for that action is not evidence the later working task protects `~/xo`. Avoid permanent read/write grants to the whole parent just to create the folder; if the app offers only a persistent grant, explain that tradeoff and offer human creation of the parent files instead. Do not guess that a one-time option exists.
- Fresh working tasks open in the existing `~/xo/work` folder. Codex may load `AGENTS.md` from the git root down to the session folder; confirm parent auto-load with the check below. Inspect the task's actual project folder and permissions, request workspace details via `/status`, and check whether `~/xo/work` is writable while `~/xo` stays protected. If `/status` omits writable roots, do not invent them: use a harmless approved work-file write, then request a write to a new disposable probe path in the parent with the human's informed yes. A prompt or denial before execution proves a gate for that operation; if the app permits the write silently, remove only that probe with a separate yes and record the failed boundary. Never test by editing `AGENTS.md`, the ledger, or real data. If the parent result cannot be established, stop and record a protection gap.
- Git commits write `~/xo/.git`. Codex documents `.git` as read-only even inside a writable root; test whether this app requests approval before relying on a commit prompt. A chat yes is still required before the commit, whether or not the harness asks too.
- Where other kit files say `~/xo/memory/`, `~/xo/handoffs/`, or `~/xo/drafts/`, read `~/xo/work/...`.
- If a protected-parent write fails, use the bounded diagnosis below before asking the human to do the file work. A chat yes and even an app approval are not proof that a file was saved. **Do not ask to override an enforced policy or switch to Full access.**
- If the split layout still can't be made to work (for example the app won't open a subfolder, the working task can silently write in `~/xo`, or the parent `AGENTS.md` doesn't load), stop and tell your human. Only with their approval, fall back to one folder at `~/xo`, protection by prompt only. Record the known gap in the ledger; do not claim the harness enforces self-edit approval.

## When a bootstrap read or write fails

Troubleshoot the *specific operation* before retrying or making a claim about the whole app. Keep this to one diagnosis and at most one changed-route retry; if it still fails, report the gap and offer the human path. Do not repeatedly request the same denied escalation.

1. **Inspect without changing policy.** Note the exact attempted operation and target (read/fetch versus create/write), the tool or command used, the error text or automatic-review result, whether a human app approval actually appeared and was granted, the session's permissions control below the composer (**Ask for approval**, **Approve for me / Auto-review**, or other), the active project folder, and any workspace details `/status` actually shows. If it only shows usage or session information, say so and inspect the app's permission/folder UI instead. Ask the human for missing UI facts rather than inventing them. Avoid printing private home paths in a shareable report. Check whether the file or folder actually exists before saying it was saved.
2. **Classify the boundary.** A failed network fetch is not a file-write failure; check its URL, network permission and error separately. If **Auto-review** denied an outside-workspace request, explain that automatic review—not the human's chat yes—made that decision. Ask whether the human wants to select **Ask for approval** for this session via the permissions control below the composer; this changes who reviews requests, **not** the writable sandbox or all-file access. If Ask for approval is disabled by local or organization policy, stop trying to escalate. If human app approval was granted but the write still failed, quote the filesystem error and leave its cause unknown until tested; do not label it Windows ACL without evidence.
3. **Try a safer route only when applicable.** For a failed shell command that combined creating folders and writing a protected file, do not repeat it unchanged. With the human's separate yes, try a single narrowly scoped built-in file edit or creation request for the reviewed file, if the tool is available; this still must pass the app boundary. No shell redirection, command splitting or alternate tool may be used to evade a denial. If one route can create a working folder inside the verified `~/xo/work` root, that does **not** grant permission to create `~/xo/AGENTS.md`; never move the protected instructions into the writable root and call that equivalent. Verify the intended file exists and matches approved text after any successful write.
4. **Report and hand off.** State what was observed, what remains uncertain, which gate blocked which target, and the least-permissive change that would let setup continue. Offer: (a) human-reviewed **Ask for approval** for one outside-root action if available and not yet tried; (b) human creation of `~/xo` and `~/xo/work` in File Explorer and saving the reviewed exact seed as plain-text `~/xo/AGENTS.md` (not `.txt`); or (c) pause and leave the layout unverified. A human-created file must be checked for existence and contents. Then start a fresh task with `~/xo/work` selected as the actual existing folder, verify its work/parent boundary and instruction auto-load separately before proceeding. Codex may check only the current folder if it cannot identify a project root, so parent `AGENTS.md` load is not guaranteed. If those checks fail, explain the protection gap before offering the one-folder fallback with explicit consent. Never claim installation succeeded just because a prompt was approved.

## Instructions file

- Name: `~/xo/AGENTS.md`. A user-level `~/.codex/AGENTS.md` (or `AGENTS.override.md`) also loads if it exists (https://learn.chatgpt.com/docs/agent-configuration/agents-md); check for one in sitting 01 and tell your human what's in it.
- Reopening: in the ChatGPT desktop app, open Codex and choose the **existing folder** `~/xo/work` through the folder picker as the task's project folder (verify: exact menu path). A project-name text field is not a folder picker: entering a path there may create a default-location project instead (tester report). Before continuing, inspect the folder shown in the trust prompt and task header; if it isn't the intended `~/xo/work`, stop and select the correct existing folder. A connected project folder is only one step; it does not establish writable roots, instruction auto-load, or a handoff.
- Auto-load check, after reopening: without reading any file, state one detail that is only in `AGENTS.md` (for example the kit's pinned SHA once it's there). If you can't, auto-load failed: say so, and read `AGENTS.md` explicitly at every door in until it's fixed. If only `AGENTS.md` exists and no handoff does, inspect the task folder and permissions (using `/status` only for facts it actually shows), then ask to create the handoff per `START.md` before another reopen. On that reopen run this auto-load check; report each result separately and propose the next action. If already reopened, you may check auto-load now, but still create the missing handoff before proceeding.

## Permissions

Settings live in `~/.codex/config.toml`, shared by the CLI and the app (verify for the app; it may also expose these as a mode picker). It's outside the writable root, so editing it asks. Starting point for stage 1:

```toml
approval_policy = "on-request"
sandbox_mode = "workspace-write"

[sandbox_workspace_write]
network_access = false
```

- **Approval** `on-request`: work inside the active `~/xo/work` workspace runs; outside-workspace or network operations require an approval route, but the app may deny, auto-review, or offer a broader remembered grant rather than the narrow permission expected. Inspect the actual prompt scope before approving; a chat yes alone does not authorize the app action. Separate chat approval under the seed is still required before installs, settings changes, account setup, or self-edits. In the app, **Ask for approval** is available under Settings → General → Permissions and chosen for the session using the permissions control below the composer (https://learn.chatgpt.com/docs/permission-modes). Enabling a mode in settings does not select it in an existing chat. **Approve for me / Auto-review** routes boundary requests to an automatic reviewer instead of your human; it does not expand the workspace. Do not choose Full access. If `/status` omits roots, inspect the task folder and use the safe boundary checks above; keep protection unverified until then.
- **Sandbox** `workspace-write` with the session folder as the intended writable root (plus any runtime-managed temporary locations). Don't add `~/xo` itself to `writable_roots`; verify the live task's boundary rather than assuming the config alone establishes it.
- **Fetch allowlist**: local personal Codex config documents no per-domain allowlist (https://learn.chatgpt.com/docs/config-file/config-reference). With the network off, every fetch asks, including the kit and policy pages. Since the kit is vendored, that's rare. Tell your human this is stricter than the brief's default, not looser.
- **Never** use `danger-full-access`, `approval_policy = "never"`, or the app's full-access mode.
- An approval of the form "don't ask again for this" widens what runs silently (verify: where the app records it). The door-in drift check (sitting 05) compares the live config against the ledger.

## Harness-private memory

The system of record is `~/xo/work/memory/`. Codex local memories are off by default; check Settings → Personalization → Enable memories and propose turning it off if on (https://learn.chatgpt.com/docs/customization/memories). ChatGPT's chat-side memory (Settings → Personalization) is separate; tell your human it exists and that it isn't where XO keeps anything.

## Connectors: open v0 blocker

**Unknown whether a Codex session reaches the Gmail and Calendar connectors turned on in ChatGPT.** Testing that is a v0 blocker for this door. In sitting 01, the capability inventory answers it for this machine: list every tool you can call. Then:

- If no connector tools appear: say so. Mail and calendar will go through proxies in stage 2 (a forwarding rule into a folder, a calendar feed). Record "no connector reach" in the ledger.
- If they appear: record each one, including any send, reply, delete, or trash tools, and find where their per-tool approval is set (verify: whether the app has per-tool settings for connectors in Codex). Send-type tools must be blocked and the block verified in this Codex session before keeping the connector on. If you can't verify a block, turn that connector off and propose a read-only proxy or defer the source in stage 2.

## Rungs to settings

| Rung | Settings |
|---|---|
| 0 memory | The config above; writable root `~/xo/work` only. |
| 1 drafting | Same as 0. Drafts in `~/xo/work/drafts/`; your human copies and sends. |
| 2 read one source | Connector route only when send-type tools are blocked and verified: allow that source's read tools, everything else off or ask. Otherwise use a read-only proxy in `~/xo/work`, or defer. One source per yes. |
| 3 stage in channel | Only if draft creation can be approved independently of blocked send, reply, forward, and delete tools in this Codex session. Otherwise this rung is unavailable. |

Every rung change edits `ledger.md` and possibly `config.toml`, both protected, and goes through the self-edit gate.

## What this harness can't do

- Run while the app is closed. No scheduled or background work in v0.
- Take hidden input. Never ask your human to type a secret into a command.
- Allowlist fetch domains in documented personal config; fetches ask instead.
- Configure single files read-only inside a writable root; only fixed paths such as `.git`, `.codex`, and `.agents` receive built-in protection (https://learn.chatgpt.com/docs/agent-approvals-security). Hence the layout above.
- Reach ChatGPT's connectors, possibly. See the blocker above.

## Done when

- [ ] A fresh task shows the correct `~/xo/work` project folder; work-file write succeeds, a requested parent-file probe prompts or is denied before execution (or any silently created probe is removed with a separate yes and the protection gap recorded), and `~/xo/AGENTS.md` auto-loads without a read. If the safe probe or auto-load check is unavailable, label that protection unverified; diagnose the exact gap before proceeding.
- [ ] The live config matches what your human approved, and the ledger records it.
- [ ] Connector reach is answered for this machine and recorded.
- [ ] Any harness-private memory is off or confirmed ignored.
