# Adapter: Codex in the ChatGPT desktop app

For the agent, if you are Codex. The stage 1 sittings say *what* to set; this file says *where* in your harness. Anything marked `(verify)` is our best knowledge, not a tested fact: check it on your human's machine before relying on it, and tell them if it differs. The Codex app is Untried: nothing here has been run end to end yet.

## Layout: protected files sit outside the writable root

Codex protects files by leaving them outside the folders its sandbox can write, not by configurable per-file rules (https://learn.chatgpt.com/docs/config-file/config-reference). Confirm the actual writable roots with `/status` before treating this as protection. So on Codex, `~/xo` splits in two:

```
~/xo/                  git root; NOT writable by the sandbox
  AGENTS.md            instructions (protected)
  ledger.md            permissions ledger (protected)
  kit/                 vendored kit (protected)
  work/                the session folder; the only writable root
    memory/  handoffs/  drafts/
```

- Sessions open in `~/xo/work`. Codex loads `AGENTS.md` files from the git root down to the session folder, so `~/xo/AGENTS.md` should load; confirm it with the auto-load check below. Before any work, use `/status` to confirm `~/xo` is not a writable root and `~/xo/work` is; if `~/xo` is writable, stop and use the fallback, recording the protection gap.
- Git commits write `~/xo/.git`. Codex documents `.git` as read-only even inside a writable root; test whether this app requests approval before relying on a commit prompt. A chat yes is still required before the commit, whether or not the harness asks too.
- Where other kit files say `~/xo/memory/`, `~/xo/handoffs/`, or `~/xo/drafts/`, read `~/xo/work/...`.
- If this layout can't be made to work (for example the app won't open a subfolder, `/status` shows `~/xo` writable, or the parent `AGENTS.md` doesn't load), stop and tell your human. Only with their approval, fall back to one folder at `~/xo`, protection by prompt only. Record the known gap in the ledger; do not claim the harness enforces self-edit approval.

## Instructions file

- Name: `~/xo/AGENTS.md`. A user-level `~/.codex/AGENTS.md` (or `AGENTS.override.md`) also loads if it exists (https://learn.chatgpt.com/docs/agent-configuration/agents-md); check for one in sitting 01 and tell your human what's in it.
- Reopening: in the ChatGPT desktop app, open Codex and choose `~/xo/work` as the project folder (verify: exact menu path).
- Auto-load check, after reopening: without reading any file, state one detail that is only in `AGENTS.md` (for example the kit's pinned SHA once it's there). If you can't, auto-load failed: say so, and read `AGENTS.md` explicitly at every door in until it's fixed.

## Permissions

Settings live in `~/.codex/config.toml`, shared by the CLI and the app (verify for the app; it may also expose these as a mode picker). It's outside the writable root, so editing it asks. Starting point for stage 1:

```toml
approval_policy = "on-request"
sandbox_mode = "workspace-write"

[sandbox_workspace_write]
network_access = false
```

- **Approval** `on-request`: work inside `~/xo/work` runs; anything outside it, or needing the network, asks at the harness boundary. Separate chat approval under the seed is still required before installs, settings changes, account setup, or self-edits. In the app, choose **Ask for approval** under Settings → General → Permissions, not Full access (https://learn.chatgpt.com/docs/permission-modes). Confirm the actual workspace roots with `/status`.
- **Sandbox** `workspace-write` with the session folder as the only writable root. Don't add `~/xo` itself to `writable_roots`.
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

- [ ] `/status` confirms `~/xo` is outside writable roots and `~/xo/AGENTS.md` auto-loads in `~/xo/work`; otherwise use the fallback and record the protection gap.
- [ ] The live config matches what your human approved, and the ledger records it.
- [ ] Connector reach is answered for this machine and recorded.
- [ ] Any harness-private memory is off or confirmed ignored.
