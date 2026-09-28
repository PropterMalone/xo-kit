# Adapter: Claude Code in the Claude desktop app

For the agent, if you are Claude Code. The stage 1 sittings say *what* to set; this file says *where* in your harness. Anything marked `(verify)` is our best knowledge, not a tested fact: check it on your human's machine before relying on it, and tell them if it differs.

## Instructions file

- Name: `~/xo/CLAUDE.md`. Claude Code loads `CLAUDE.md` from the folder a session opens in.
- Reopening in `~/xo`: in the desktop app, click **Code → + New session**, then choose `~/xo` as that session's **Project folder** (https://code.claude.com/docs/en/desktop). Check on the app if those labels have changed. Do not merely add `xo` to an existing workspace or continue an old session in another project; confirm the new session shows `xo` as its project folder before the auto-load check. Walk your human through it once, then ask them to do it cold next time.
- Auto-load check, after reopening: the human privately writes a fresh, harmless random phrase to `CLAUDE.md` after the prior chat closes; do not put it in chat, a handoff, memory, or a source file the agent has already seen. In the new session, without reading any file, ask the agent to state that phrase. A phrase already proposed or shown in the old chat (or the kit's pinned SHA) is not a valid test. A correct answer is evidence of instruction loading, but also check for user-level or other injection routes; if uncertain record unverified and read `CLAUDE.md` explicitly at every door in until resolved. The human may skip this test and use explicit reads.
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

- **Protected rule files** get the `ask` rules above. `ask` outranks `allow`, so built-in file edits to them prompt even though `~/xo/**` is allowed. `Edit` rules are documented to cover built-in file-editing tools including Write (read from Claude Code permission docs: https://code.claude.com/docs/en/permissions; verify the actual gate in sitting 02). Shell commands are a separate route and must stay on ask.
- **Shell stays on ask.** A shell command can write files or fetch URLs without touching the Edit and WebFetch rules. The example Bash rules are for a Bash-enabled session; a Windows Code session may offer PowerShell instead. Inventory the actual command tool and adapt only the narrow, read-only git permissions it supports. Do not add broad PowerShell permission rules or silently substitute Bash; ask before any command that writes or fetches. Never allow `curl`, `wget`, `rm`, `git push`, or a bare `Bash(*)`. Ask-only on a general runner is **not** a verified block on a read/write CLI's send subcommand: use a truly read-only route or an observed command-level pre-execution deny; otherwise do not use that CLI for XO source reads.
- **Fetch allowlist** is documented as domain-matched (read from Claude Code permission docs: https://code.claude.com/docs/en/permissions; confirm behavior in the actual app). The example includes only Claude's policy domain. Add another only after your human uses that provider and approves the exact domain. Do not allowlist raw GitHub: anyone can choose its URL path, so even a domain-matched fetch could leak data there. Kit fetches and updates prompt; the installed kit is local.
- A tool's presence does not prove a connected browser or account: a tester saw Claude in Chrome tools without an installed/connected extension. Verify connection separately in the app before treating any tool as live; do not direct someone to uninstall an extension you have not found.
- **Deny** gets the exact names of send, reply, forward, delete, trash, and publish tools from the capability inventory (sitting 01). Copy each actual tool name from your Code session; don't assume an `mcp__` prefix or guess the names. Prefer configuring connector Tool permissions while the connector is off, before sign-in or content exposure. If safe pre-connection tool testing is available, observe the pre-execution deny then. After enabling, re-inventory without reading contents and verify a harmless no-recipient/no-target denial before any XO source read. If the app cannot expose or test the controls without sending source content to Code/provider first, do not claim a pre-exposure gate: leave it off and use a read-only route or defer.
- **Permission mode**: keep the desktop session on **Manual** (asks before edits or commands), not Accept edits, Auto, or Bypass permissions. A tester reopened to find **Auto** despite previously choosing Manual; check the active mode after every reopen and record a mismatch before continuing. The mode chosen in the app can be remembered per folder and override `defaultMode`; recheck at door in (https://code.claude.com/docs/en/desktop).
- **"Yes, and don't ask again"** for a shell command or WebFetch can save an allow rule to the git root's `.claude/settings.local.json` (`~/xo/.claude/settings.local.json` after backup setup). File-edit approvals last only for the session, not permanently (https://code.claude.com/docs/en/permissions). The `.claude/**` rule protects the local settings file from built-in edits; the door-in drift check (sitting 05) compares both settings files and the app's mode against the ledger.
- `~/.claude/settings.json` (user level) also applies. It's outside `~/xo`, so edits to it ask. Check it in sitting 02 for rules that loosen these.

## Harness-private memory

Claude Code has an auto-memory store outside the folder (`~/.claude/projects/<encoded-folder>/memory/`). Turn it off with `"autoMemoryEnabled": false` above (Claude Code settings reference: https://code.claude.com/docs/en/settings-reference); verify in the app that it is off. If it already holds files, show your human, propose moving anything worth keeping into `~/xo/memory/`, and read memory only from `~/xo`.

The Claude chat side may have its own memory of past chats (verify: setting name and whether Code sessions can see it). It is not the system of record; tell your human it exists and where to turn it off if they want.

## Connectors

Connectors turned on in the app reached Code sessions, including send, reply, forward, trash, and label tools on one configured Windows account (tested 2026-09-27; not a clean account). Official connector docs describe **Tool permissions** for a connector, with Always allow, Needs approval, or Blocked per group or single tool (https://claude.com/docs/connectors/getting-started); remote connectors added to the Claude account are available in Claude Code when signed in (same doc). Personal-plan availability of each control in this tester's app and whether a Blocked setting denies the **actual Code tool call** still need an app check. For each personal/employer/client/project source, first establish every applicable policy authority and exact permitted route/fields; an unknown or conflicting policy permits no crossing, even a fixed event. Obtain a specific informed yes to connect, configure exact send-type tools to Blocked in connector Tool permissions **before sign-in/enabling where the app allows it**, and test a safe pre-execution refusal without a recipient or target. Then re-inventory the live Code session without reading source content and verify the actual Code deny. Get a separate scoped yes before any read; a connection never means standing read permission. If controls require enabling first, keep content unread during inventory and gate testing; if content is exposed to the provider merely by enabling or the deny cannot be verified without exposure, leave the send-capable connector off, choose a genuinely read-only route, or defer. Record the gap; the folder cannot enforce app-side connector settings. Recheck live tools and settings at each door in.

Stage 1 default: every connector off. A yes to connect authorizes only the setup; prepare controls before enabling wherever possible, then verify actual Code-session gates before any authorized read. If this cannot be done without unapproved content exposure, leave it off and use an authorized read-only route or work-native reminder later.

## Rungs to settings

| Rung | Settings |
|---|---|
| 0 memory | The `settings.json` above. Connectors off until individual send-capable tools can be blocked and tested. |
| 1 drafting | Same as 0. Drafts go in `~/xo/drafts/`; your human copies and sends. |
| 2 read one source | Record a yes to connect, prepare send-type blocks before enabling where possible, and verify a harmless pre-execution denial in the actual Code session without reading contents. Record a separate source- and field-specific yes for each read or standing scope; keep read tools on ask unless the approved scope can be enforced. For work/client sources, apply all authorities per tenant/project and the authorized crossing route. Otherwise use an authorized read-only proxy or work-native route. |
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
