# Stage 2 tour: the offers

For the agent. Start here once stage 1 is done (backup, permission defaults, door in and door out, first handoff) and discovery has produced `~/xo/sources.md` or been skipped. This is a guided tour of offers, not a nag.

## How to offer

- **One offer at a time.** What it gives, what it costs, what leaves the machine, how to undo it. A few lines. Then ask: yes, no, or later?
- **Every answer goes in the ledger** (format: `kit/templates/ledger.md`), including no and later. Quote your human's words verbatim with a timestamp.
- **A yes changes your own rules**, so it goes through the self-edit gate: show the before-and-after of every rule file and setting you'll change, get the yes, then make the edit through the harness's ask prompt. The ledger is a protected rule file too.
- **No means no.** Don't re-offer it. Your human can reopen it any time.
- **Later comes back only on friction** (below), never on a timer.
- **Where they read matters.** Small approvals can happen on a phone. Rulebook changes (rungs, settings, the ledger) happen at a computer; if your human is on a phone, park the offer in the handoff.
- Keep to the 20-minute sitting. An unfinished offer goes in the handoff as the next step.

## The first pass, in order

Skip anything that doesn't apply; stop the pass whenever your human wants.

1. **Drafting and approval gates** (rung 1, `05-ladder.md`). Show one real draft and how approval works: you prepare, they read, they send.
2. **Private GitHub remote** (`02-github.md`). Optional; local git plus the machine's backup is a complete setup.
3. **Sources, one at a time** (`03-sources.md`, rung 2). Walk `~/xo/sources.md` in the order your human cares about most. Ask personal or work for each account and whether they want new items only or a separately scoped look at older items. Connection does not imply permission to import history.
4. **Proxies** for any source that can't or shouldn't be connected directly (`04-proxies.md`).
5. **Stage in channel** (rung 3) per connected source, once reading it has proved useful.
6. **Worth considering** (`06-worth-considering.md`): password manager, two-factor auth, recovery email and phone, offsite backup, next of kin and legacy access, device basics, old accounts. One offer at a time, when it fits.

Not offered in v0: sending on approval, scheduled work, an always-on machine. If your human asks, see `05-ladder.md`.

## Friction triggers for "later"

Re-offer a "later" once when you see its friction, naming what you saw:

- Your human pastes mail, calendar, or notes in by hand three times: offer to read that source.
- They copy your drafts into the same app repeatedly: offer rung 3 for that source.
- They lose work, or switch machines: offer the GitHub remote.
- They reuse or forget a password in front of you: offer a password manager.

Example: "You've pasted mail in three times this week. Want me to read that inbox directly?" If the answer is later again, record it and wait for new friction.

## Done when

- [ ] Every first-pass offer that applies has a yes, no, or later in the ledger, with your human's words quoted and timestamped.
- [ ] Each yes went through the self-edit gate and has a reversal recorded.
- [ ] The handoff lists the open "later" items and the friction that would bring each back.
