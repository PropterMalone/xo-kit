# Adapter: Claude Code in the Claude desktop app

For the agent, if you are Claude Code. The stage 1 sittings say *what* to set; this file says *where* in your harness. Anything marked `(verify)` is our best knowledge, not a tested fact: check it on your human's machine before relying on it, and tell them if it differs.

## Instructions file

- Name: `~/xo/CLAUDE.md`. Claude Code loads `CLAUDE.md` from the folder a session opens in.
- Reopening in `~/xo`: in the desktop app, click **Code → + New session**, then choose `~/xo` as that session's **Project folder** (https://code.claude.com/docs/en/desktop). Check on the app if those labels have changed. Do not merely add `xo` to an existing workspace or continue an old session in another project; confirm the new session shows `xo` as its project folder before the auto-load check. Walk your human through it once, then ask them to do it cold next time.
- Auto-load check, after reopening: without reading any file, state one detail that is only in `CLAUDE.md` (for example the kit's pinned SHA once it's there). If you can't, auto-load failed: say so, and read `CLAUDE.md` explicitly at every door in until it's fixed.
- A user-level `~/.claude/CLAUDE.md` also loads everywhere if it exists. Check for one in sitting 01 and tell your human what's in it.

## Permissions

Project settings live in `~/xo/.claude/settings.json`. Starting point for stage 1 (rungs 0-1), to adjust with your human in sitting 02:

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

- **Protected rule files** get the `ask` rules above. `ask` outranks `allow`, so built-in file edits to them prompt even though `~/xo/**` is allowed. `Edit` rules cover every built-in file-editing tool, including Write (Claude Code permission docs: https://code.claude.com/docs/en/permissions). Shell commands are a separate route and must stay on ask.
- **Shell stays on ask.** A shell command can write files or fetch URLs without touching the Edit and WebFetch rules. The example Bash rules are for a Bash-enabled session; a Windows Code session may offer PowerShell instead. Inventory the actual command tool and adapt only the narrow, read-only git permissions it supports. Do not add broad PowerShell permission rules or silently substitute Bash; ask before any command that writes or fetches. Never allow `curl`, `wget`, `rm`, `git push`, or a bare `Bash(*)`.
- **Fetch allowlist** is by domain only (Claude Code permission docs: https://code.claude.com/docs/en/permissions). The example includes only Claude's policy domain. Add another only after your human uses that provider and approves the exact domain. Do not allowlist raw GitHub: anyone can choose its URL path, so even a domain-matched fetch could leak data there. Kit fetches and updates prompt; the installed kit is local.
- A tool's presence does not prove a connected browser or account: a tester saw Claude in Chrome tools without an installed/connected extension. Verify connection separately in the app before treating any tool as live; do not direct someone to uninstall an extension you have not found.
- **Deny** gets the exact names of send, reply, forward, delete, trash, and publish tools from the capability inventory (sitting 01). Copy each actual tool name from your Code session; don't assume an `mcp__` prefix or guess the names. Verify the deny rule blocks a harmless attempted call before connecting a send-capable source.
- **Permission mode**: keep the desktop session on **Manual** (asks before edits or commands), not Accept edits, Auto, or Bypass permissions. A tester reopened to find **Auto** despite previously choosing Manual; check the active mode after every reopen and record a mismatch before continuing. The mode chosen in the app can be remembered per folder and override `defaultMode`; recheck at door in (https://code.claude.com/docs/en/desktop).
- **"Yes, and don't ask again"** for a shell command or WebFetch can save an allow rule to the git root's `.claude/settings.local.json` (`~/xo/.claude/settings.local.json` after backup setup). File-edit approvals last only for the session, not permanently (https://code.claude.com/docs/en/permissions). The `.claude/**` rule protects the local settings file from built-in edits; the door-in drift check (sitting 05) compares both settings files and the app's mode against the ledger.
- `~/.claude/settings.json` (user level) also applies. It's outside `~/xo`, so edits to it ask. Check it in sitting 02 for rules that loosen these.

## Harness-private memory

Claude Code has an auto-memory store outside the folder (`~/.claude/projects/<encoded-folder>/memory/`). Turn it off with `"autoMemoryEnabled": false` above (Claude Code settings reference: https://code.claude.com/docs/en/settings-reference); verify in the app that it is off. If it already holds files, show your human, propose moving anything worth keeping into `~/xo/memory/`, and read memory only from `~/xo`.

The Claude chat side may have its own memory of past chats (verify: setting name and whether Code sessions can see it). It is not the system of record; tell your human it exists and where to turn it off if they want.

## Connectors

Connectors turned on in the app reached Code sessions, including send, reply, forward, trash, and label tools on one configured Windows account (tested 2026-09-27; not a clean account). **Do not assume a personal plan exposes per-tool settings:** the official `Customize → Connectors → Tool permissions` instructions are for Team/Enterprise owners (https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities). Check on the app whether the actual Code session exposes block/ask for each tool. If not, keep a send-capable connector off until its send-type calls are proved blocked by the Code harness; write that gap in the ledger. The folder cannot enforce app-side connector settings. Recheck the live tool list and settings at each door in.

Stage 1 default: every connector off. Turn one on only after your human approves and its read and send-type tool permissions are verified in the Code session; otherwise leave it off and use a proxy later.

## Rungs to settings

| Rung | Settings |
|---|---|
| 0 memory | The `settings.json` above. Connectors off until individual send-capable tools can be blocked and tested. |
| 1 drafting | Same as 0. Drafts go in `~/xo/drafts/`; your human copies and sends. |
| 2 read one source | After a separate yes, turn that connector on only if its send-type tools are blocked and that block passes a harmless gate check in the actual Code session. Set only that source's read tools to allow, using their exact names; all other tools ask or stay off. Otherwise use a read-only proxy. |
| 3 stage in channel | Only if the Code session proves draft creation can be approved independently of blocked send/reply/delete tools. Otherwise this rung is unavailable on this door. |

Every rung change is a protected-file edit (`settings.json`, `ledger.md`) and goes through the self-edit gate.

## What this harness can't do

- Run while the app is closed. No scheduled or background work in v0.
- Take hidden input. The command runner can't do an interactive no-echo prompt, so never ask your human to type a secret into a command.
- Block a WebFetch URL by path; its permission rules match the domain, not the URL path (Claude Code permission docs: https://code.claude.com/docs/en/permissions).
- Enforce connector per-tool settings from the folder. They live in the app and can be changed there without a trace in git.
- Stop a shell command from doing what an Edit or WebFetch rule forbids. That's why Bash stays on ask.

## Done when

- [ ] `~/xo/CLAUDE.md` auto-loads on reopen (checked as above) or the failure is in the handoff.
- [ ] `~/xo/.claude/settings.json` matches what your human approved, and the ledger records it.
- [ ] Auto-memory is off or confirmed ignored; any existing auto-memory files are shown to your human.
- [ ] Every connector tool you can call has a recorded setting; send-type tools are blocked.
