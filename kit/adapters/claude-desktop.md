# Adapter: Claude Code in the Claude desktop app

For the agent, if you are Claude Code. The stage 1 sittings say *what* to set; this file says *where* in your harness. Anything marked `(verify)` is our best knowledge, not a tested fact: check it on your human's machine before relying on it, and tell them if it differs.

## Instructions file

- Name: `~/xo/CLAUDE.md`. Claude Code documents loading `CLAUDE.md` and `CLAUDE.local.md` from the current folder and ancestors at launch, root toward the current folder (https://code.claude.com/docs/en/memory). Inspect relevant user/ancestor/local instructions for conflicts; do not silently change them. Use `flows/project-return.md` for the separately approved chosen-work return note and startup block. A fresh Local session must select this same existing folder; a worktree is an isolated repository copy, not automatically the same saved state (https://code.claude.com/docs/en/desktop). Sidebar resume can recover an existing conversation, not prove fresh instruction/state loading.
- Reopening in `~/xo`: in the desktop app, click **Code → + New session**, then choose `~/xo` as that session's **Project folder** (https://code.claude.com/docs/en/desktop). Check on the app if those labels have changed. Do not merely add `xo` to an existing workspace or continue an old session in another project; confirm the new session shows `xo` as its project folder before the auto-load check. Walk your human through it once, then ask them to do it cold next time.
- Auto-load check, after reopening: the human privately writes a fresh, harmless random phrase to `CLAUDE.md` after the prior chat closes; do not put it in chat, a handoff, memory, or a source file the agent has already seen. In the new session, without reading any file, ask the agent to state that phrase. A phrase already proposed or shown in the old chat (or the kit's pinned SHA) is not a valid test. A correct answer is evidence of instruction loading, but also check for user-level or other injection routes; if uncertain record unverified and read `CLAUDE.md` explicitly at every door in until resolved. The human may skip this test and use explicit reads.
- A user-level `~/.claude/CLAUDE.md` also loads everywhere if it exists. Check for one in sitting 01 and tell your human what's in it.

## Selected project subfolders

The default `~/xo` remains valid for one project. A separately approved existing folder such as `~/xo/<project-name>` may hold its own return.md and handoffs/ under `flows/project-return.md`. In a fresh Local session select that project folder and verify the actual path; a title or isolated worktree is not its saved-state binding. Keep central `~/xo/CLAUDE.md`, kit, ledger and settings. Inspect ancestors/local and child instructions through the selected project subfolder for conflicts before relying on loading; do not create writable child instructions to override protected rules or silently change existing instructions.

Selecting a child folder does not make siblings or shared rules task-owned. Keep another project's return note/handoffs unread and unchanged by default even when the existing broad allow rule technically reaches them. Reuse safety evidence only for matching actual folder/mode/rules/tool boundaries; a base-folder pass is not automatically a subfolder pass. Confirm the live session retains the central protected-file and shell gates under the shared check-attempt limits. A conflicting nested repository/settings route or unverified child-session boundary leaves return unverified, not permission to broaden grants. No permission-rule change is authorized merely by project binding.

## Routine observations

Use `~/xo/operations.md` only under the selected save policy in `templates/operations.md`: scoped ongoing factual writes, one reviewed batch, or conversation-only. Chosen rules/settings, source authority and policy remain in protected `ledger.md`; actual mode/load/catalog/gate results are operational observations. Do not widen the existing native allow rules or claim an automatic gate from this record. Shared setup scope is not another project's task or source access.

## Destination host and synced settings

Before relying on a cloned, pulled or restored setup, confirm this host's OS/runtime (macOS, Linux, native Windows or WSL2), installed Code version, canonical project path, actual command tool, effective permission mode and managed policy. Check the mode selector and loaded settings sources in the actual app; `/status` names sources, not the winning value for every key. Inspect the relevant user, shared project and local settings, session overrides and managed controls without exposing credentials. Check ancestor/child rules and path resolution too. A synced file or successful instruction-load test is not protection evidence.

Current official docs (checked 2026-10-12) support the shell sandbox on macOS, Linux and WSL2, not native Windows; WSL1 is unsupported. Linux/WSL2 require dependencies. WSL2 is a separate environment with its own paths, settings and policy, not an automatic fallback or a pass inherited from Windows. Do not install, switch to or relaunch there without a separately approved, policy-permitted plan and its own host check (https://code.claude.com/docs/en/sandboxing).

Separate shared XO instructions and approved deny/approval intent from machine-specific sandbox paths, writable roots, allow rules and credential-helper configuration. Keep the latter in reviewed local settings or user settings on that machine, with no credential values in the repository. `.claude/settings.local.json` is a project-local override, not inherently machine-bound: copying or tracking it makes it travel too. Claude Code normally adds it to global Git excludes when it writes the file; a manually created file may need an exact approved ignore entry. A tracked local file still travels and requires workspace trust for its allow rules. Verify actual location: current docs describe repository-root local settings with exceptions including Windows and worktrees; old starting-directory files may still apply. Do not assume it is always the git root (https://code.claude.com/docs/en/settings).

Managed settings take precedence over session overrides, local, shared project and user settings for ordinary keys; permission lists can merge and security-sensitive settings have exceptions. Inspect the resolved boundary rather than treating one file as the whole policy. Local configuration cannot weaken enforced managed requirements. Preserve every shared protected-file, shell and outbound deny/approval requirement when translating host-specific rules; missing local configuration leaves the dependent route unverified, not approved. Do not copy broad allow rules or trust a workspace silently to make it run (https://code.claude.com/docs/en/settings; https://code.claude.com/docs/en/managed-settings).

Claude Code can reload most settings during a running session (https://code.claude.com/docs/en/settings#when-edits-take-effect). If a sync, restore, mode selection or policy change takes effect, stop relying on earlier evidence: the old check no longer covers the effective configuration. Identify the change first. For that actual host/configuration, use one bounded check under `flows/repair-permission-loop.md`'s shared attempt limits: preview a harmless disposable target and exact proposed built-in edit and shell probe, with no real protected content, secrets or outbound action. Observe the actual pre-execution approval/denial and unchanged protected boundary before enabling dependent work. Built-in edit approval alone does not test shell writes; `sandbox.filesystem.denyWrite` applies only inside the shell sandbox and is not a substitute for permission rules on built-in file tools. Check sandbox availability, resolved paths, excluded commands and unsandboxed fallback before claiming a shell boundary. An unsupported platform, model refusal or failed command alone is not a passed protection check. A new configuration does not restart repeated attempts; do not keep retesting until green. Record this host's actual results or unverified status under the chosen operational-save policy, or in conversation. Official-doc research and this procedure are not an actual app test.

If the app reports that policy requires sandboxing but the command would not be sandboxed, fail closed: stop the affected route. Do not disable sandboxing, loosen denies, add `excludedCommands`, enable an unsandboxed retry, change permission mode or switch tools to resubmit that operation. Explain the platform/policy conflict and ask the human or their administrator for an authorized supported setup; do not diagnose the source of an enterprise requirement from its error wording alone. Manual mode is not a cure for a hard sandbox/policy block. Continue conversation-only help without shell commands if that is available. Say exactly which edits, git commits or backups did not happen; keep results unsaved if no authorized safe save route is available. A human terminal is only for a legitimate originally approved operation that policy permits, not to bypass enforced policy. No blocked scan, save or commit is called successful.

## Permissions

The shared project file is `~/xo/.claude/settings.json`; review what may safely travel before committing it (`stage2/02-github.md`). This example is not a portable sandbox configuration or proof of a safe mode. Starting point for stage 1 (rungs 0-1), to adjust with your human in sitting 02 after the destination-host check:

For the first settings file, show the exact proposed contents and path and obtain the chat yes before writing. Do not promise an approval box from rules that are not installed yet; only existing native controls can gate creation. An absent prompt alone does not establish protection; if the native gate is unknown, pause dependent configuration work and offer chat-only help under sitting 02's shared limits.

```json
{
  "permissions": {
    "defaultMode": "default",
    "allow": [
      "Read(~/xo/**)",
      "Edit(~/xo/**)",
      "WebFetch(domain:privacy.claude.com)",
      "Bash(git status)",
      "Bash(git diff:*)",
      "Bash(git log:*)"
    ],
    "ask": [
      "Edit(~/xo/CLAUDE.md)",
      "Edit(~/xo/ledger.md)",
      "Edit(~/xo/kit/**)",
      "Edit(~/xo/.claude/**)"
    ],
    "deny": []
  },
  "autoMemoryEnabled": false
}
```

- **Protected rule files** get the `ask` rules above. `ask` outranks `allow`, so built-in file edits to them prompt even though `~/xo/**` is allowed. `Edit` rules are documented to cover built-in file-editing tools including Write (read from Claude Code permission docs: https://code.claude.com/docs/en/permissions; verify the actual gate in sitting 02). Shell commands are a separate route and must stay on ask.
- **Shell is subject to native review in Auto; protect sensitive commands separately.** A shell command can write files or fetch URLs without touching the Edit and WebFetch rules. The example Bash rules are for a Bash-enabled session; a Windows Code session may offer PowerShell instead. Inventory the actual command tool and adapt only the narrow, read-only git permissions it supports. Do not add broad PowerShell permission rules or silently substitute Bash; ask before any command that writes or fetches. Never allow `curl`, `wget`, `rm`, `git push`, or a bare `Bash(*)`. Ask-only on a general runner is **not** a verified block on a read/write CLI's send subcommand. Under `stage2/03-sources.md`, inspect and use only the authorized exact operation; optional isolation is not a blanket prerequisite for a known read-only subcommand. Never auto-approve the general runner, whole CLI or mixed read/write action.
- **Fetch allowlist** is documented as domain-matched (read from Claude Code permission docs: https://code.claude.com/docs/en/permissions; confirm behavior in the actual app). The example includes only Claude's policy domain. Add another only after your human uses that provider and approves the exact domain. Do not allowlist raw GitHub: anyone can choose its URL path, so even a domain-matched fetch could leak data there. Kit fetches and updates prompt; the installed kit is local.
- A tool's presence does not prove a connected browser or account: a tester saw Claude in Chrome tools without an installed/connected extension. Verify connection separately in the app before treating any tool as live; do not direct someone to uninstall an extension you have not found.
- **Deny** can hold reviewed exact names of unwanted send, reply, forward, delete, trash and publish tools. Copy actual names; do not guess an `mcp__` prefix. Prefer narrow available controls without requiring new setup for an existing authorized read. Record configured versus observed enforcement separately; a schema error, model refusal, generic prompt or connector failure is not a tested deny. Never test on a real recipient/target. Apply policy-required isolation before dependent use; absent optional denial evidence does not prohibit a safe exact read under `stage2/03-sources.md`. Obtain approval before settings changes or enabling that itself discloses content.
- **Permission mode — consider Auto only after this host's boundary check.** Auto and sandboxing are independent: the classifier and explicit ask rules do not establish OS isolation. Sandbox auto-allow can skip a bare Bash ask rule, so do not infer protected shell safety from an Edit prompt or a generic ask rule. Check the actual sandbox mode and exact routes (https://code.claude.com/docs/en/sandboxing). In the desktop Code session, use the mode selector beside the send button to choose **Auto**; confirm it is active, and recheck after reopening because the app remembers a choice per folder and can override `defaultMode`. Claude's separate classifier reviews actions before execution, reducing routine edit/command prompts; it can make mistakes, and this trades individual human review for speed and continuity. It is not **Bypass permissions**. Claude's docs say explicit `ask` rules still prompt and protected paths are not auto-approved; verify the installed protected-file edit and shell routes in this actual session before relying on them. Keep the connector mutation deny independent of Auto. If Auto is unavailable or a protected route executes outside the agreed scope, stop dependent work, record the result and pause setup. The human may choose **Manual** with the same selector for a separately reviewed safe continuation; this does not resolve a sandbox/policy block or authorize retrying it. The mode can be changed during a session; do not silently switch it for the human (https://code.claude.com/docs/en/desktop; https://code.claude.com/docs/en/permission-modes).
- **"Yes, and don't ask again"** for a shell command or WebFetch can save an allow rule to `.claude/settings.local.json`. Confirm its actual location and tracking status under the destination-host procedure; Windows, older versions and worktrees need particular care. File-edit approvals last only for the session, not permanently (https://code.claude.com/docs/en/permissions). The `.claude/**` rule protects the local settings file from built-in edits; the door-in drift check (sitting 05) compares both settings files and the app's mode against the ledger.
- `~/.claude/settings.json` (user level) also applies. It's outside `~/xo`, so edits to it ask. Check it in sitting 02 for rules that loosen these.

## Harness-private memory

Claude Code has an auto-memory store outside the folder (`~/.claude/projects/<encoded-folder>/memory/`). Turn it off with `"autoMemoryEnabled": false` above (Claude Code settings reference: https://code.claude.com/docs/en/settings-reference); verify in the app that it is off. If it already holds files, show your human, propose moving anything worth keeping into `~/xo/memory/`, and read memory only from `~/xo`.

The Claude chat side may have its own memory of past chats (verify: setting name and whether Code sessions can see it). It is not the system of record; tell your human it exists and where to turn it off if they want.

## Connectors

Use `stage2/03-sources.md` for authority, the exact operation, optional isolation and actual limits. Preview a new connection's account/grant, provider disclosure, checked costs and reversal; inspect actual app/plan/platform screens. Reuse an existing valid scope without reconnecting or compulsory second consent. A connection alone is not read authority. Record sign-in, Code-session reach, controls and bounded read outcome separately; no read call does not prove no provider exposure.

Connectors reached Code sessions with read and mutation tools on one configured Windows account (tested 2026-09-27; not a clean-account or current-host guarantee). Official docs describe **Tool permissions** with Always allow, Needs approval or Blocked by group/tool (https://claude.com/docs/connectors/getting-started); remote account connectors are described as available in signed-in Claude Code. Verify actual exposure and applicable controls rather than infer current reach or enforcement. The folder cannot enforce app-side settings. A safe exact read can proceed within informed authority without proving every other tool denied. Do not invoke mixed actions, auto-approve broad shell, or claim unknown isolation exists. Required institutional/human isolation must hold; unknown governed policy permits no crossing.

Stage 1 does not choose new connectors. Existing unchosen routes remain outside task authority; no sign-in, certification, revocation or disruptive off/reopen cycle is required for local setup. Classify relevant exposed shared tools without account reads, keeping actual settings and unknowns visible. Their presence is not permission to mutate and is not a blanket veto on a different exact read. Native denials stop the affected route; a custom proxy is not a prerequisite.

## Rungs to settings

| Rung | Settings |
|---|---|
| 0 memory | The `settings.json` above. No source access without applicable authority. |
| 1 drafting | Same as 0. Drafts go in `~/xo/drafts/`; your human copies and sends. |
| 2 read one source | Use the authorized exact read operation under `stage2/03-sources.md`; native review stays intact, optional isolation is reported honestly and required isolation holds. No blanket mutation-tool disable or mandatory deny probe. |
| 3 stage in channel | Exact supported draft-only operation with separate approval; do not use a combined draft/send action. Sending remains separately controlled. |

Standing rule/settings changes use the protected self-edit gate and separate ledger-save approval. A bounded informed read request can authorize the exact operation in conversation without changing standing rules or saving a ledger entry.

## What this harness can't do

- Run while the app is closed. No scheduled or background work in v0.
- Take hidden input. The command runner can't do an interactive no-echo prompt, so never ask your human to type a secret into a command.
- Block a WebFetch URL by path; its permission rules match the domain, not the URL path (Claude Code permission docs: https://code.claude.com/docs/en/permissions).
- Enforce connector per-tool settings from the folder. They live in the app and can be changed there without a trace in git.
- Stop a shell command from doing what an Edit or WebFetch rule forbids. Auto reviews ordinary commands but does not turn an Edit/WebFetch rule into a shell restriction; sensitive commands need their own explicit ask/deny boundary and an actual-session test.

## Done when

- [ ] `~/xo/CLAUDE.md` auto-loads on reopen (checked as above) or the failure is in the handoff.
- [ ] The actual loaded shared/local/user settings, effective mode, host paths and applicable policy match the approved boundary, with authority in the ledger only under its protected save gate. Each dependent route has this host's bounded observed result or stays unavailable/unverified; a sync or changed mode/configuration does not reuse an obsolete pass.
- [ ] Auto-memory is off or confirmed ignored; any existing auto-memory files are shown to your human.
- [ ] Relevant tool effects/settings or unknowns are inventoried without source-content reads. Selected reads use authorized exact operations with required controls; optional isolation is not mistaken for permission or a compulsory gate. Unchosen routes need no setup/certification; no route is called disconnected, blocked or verified without evidence.
