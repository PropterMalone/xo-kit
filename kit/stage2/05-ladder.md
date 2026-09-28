# The rung ladder

For the agent. What each rung grants, and which harness settings implement it. The ledger and the harness must agree: at any time, you can read the ledger, read the settings, and check one against the other. Exact settings per harness are in `kit/adapters/`.

## Rules

- **Each rung is a separate, explicit yes,** per source where it applies.
- **A rung is a change to your own rules,** so it goes through the self-edit gate: before-and-after of every rule file and setting, your human's yes, then the edit through the harness's ask prompt.
- **Every rung change gets a ledger entry** (`kit/templates/ledger.md`): what was granted, the settings that implement it, the yes verbatim with timestamp, how to reverse it, expiry if any. A rung-down is recorded the same way (`kit/flows/stepping-down.md`).
- **Stage 1's defaults grant rungs 0 and 1 only.**
- **Local-model setups stop at rung 1** until they pass the gate tests.
- **Rulebook changes happen at a computer,** not approved from a phone.

## Rungs

**Rung 0: memory.** You read and write `~/xo`.
- Settings: allow ordinary reads and edits inside the adapter's working folder, except protected rule files (installed instructions, harness settings and approval config, ledger, kit), which ask. Shell writes require their own check. Fresh kit fetches and updates ask, including the first fetch from the public pinned kit URL; they are never always-allow merely because the kit is trusted. Official policy domains may be narrowly allowed per sitting 02 where the adapter supports it; other web fetches ask (Codex may ask for every fetch). A domain allow rule is not a path or data-exfiltration boundary. Follow the adapter's actual settings, not an assumed universal allowlist.

**Rung 1: drafting.** You draft; your human copies and sends.
- Settings: none beyond rung 0. Drafts live in the chat or in files in `~/xo`.

**Rung 2: read one source.** One mail account, calendar, or document store, directly or by proxy.
- Settings: that source's read tools ask unless a standing read scope was separately approved. Its draft tools ask. Its send, reply, forward, trash, and delete tools blocked and the pre-execution denial verified; if that isn't possible, do not use the connector for XO. See `kit/stage2/03-sources.md` and `04-proxies.md`.

**Rung 3: stage in channel.** You place drafts where they'll be sent (the mail app's drafts folder); your human sends. v0's ceiling for sending.
- Settings: draft creation asks until a separate standing scope is approved and shown to be independent of sending. Send remains blocked; if it cannot be blocked, this rung is unavailable for that source.
- Tell your human where staged drafts appear, and that you won't send them.

## Send on approval (not offered in v0)

You send after an action-specific yes on a preview. It saves your human app switches. v0 doesn't offer it. If your human asks for it:

1. It changes rule 2 of your installed instructions ("I do the sending myself"). Show that rule's before-and-after.
2. Say what changes: a slip on your side could now send; a yes covers only the one message you showed.
3. On a yes: that source's send tool goes to **ask**, never allow. Every send shows the final recipients and text and waits for a yes given after that preview.
4. Ledger entry as for any rung.

## Beyond

Scheduled work, an always-on machine, a cloud session, and more: not in v0. Each is gated the same way when it comes.

## Done when

- [ ] Every rung in effect has a ledger entry with verbatim yes and reversal.
- [ ] For each rung, the harness settings match what the ledger says (checked, not assumed).
- [ ] No source is above rung 3, and no send tool is set to allow.
