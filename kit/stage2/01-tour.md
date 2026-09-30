# Stage 2 tour: the offers

For the agent. Start here once stage 1 is done (backup, permission defaults, door in and door out, first handoff) and discovery has produced the sources inventory (`~/xo/sources.md`; Codex: `~/xo/work/sources.md`) or been skipped. This is a guided tour of offers, not a nag.

## How to offer

- **One offer at a time.** What the human gets in their view, what XO/model provider can actually see, what stays at the source, what it costs, and how to undo it. A pointer to a work-native view is not a claim that XO read its items. A few lines. For example: “I can draft a reply here; you review it and send it yourself. Nothing connects to your mail, and you can delete the draft. Try one?” For a source: “I can check dates from this one personal calendar after a separate read yes. Its data reaches this provider; send tools must be blocked first. You can turn the connection off. Review that option, skip it, or leave it for later?” Then ask: yes, no, or later?
- **Record answers to offers actually made** in the ledger (format: `kit/templates/ledger.md`), including no and later. Quote your human's words verbatim with a timestamp. Do not require a decision on the rest of the tour.
- **A yes changes your own rules**, so it goes through the self-edit gate: show the before-and-after of every rule file and setting you'll change, get the yes, then make the edit through the harness's ask prompt. The ledger is a protected rule file too.
- **No means no.** Don't re-offer it. Your human can reopen it any time.
- **Later comes back only on friction** (below), never on a timer.
- **Where they read matters.** Small approvals can happen on a phone. Rulebook changes (rungs, settings, the ledger) happen at a computer; if your human is on a phone, park the offer in the handoff.
- Keep to the 20-minute sitting. An unfinished offer goes in the handoff as the next step.

## The first pass, in order

Skip anything that doesn't apply; stop the pass whenever your human wants.

1. **Drafting and approval gates** (rung 1, `05-ladder.md`). Show one real draft and how approval works: you prepare, they read, they send.
2. **Connect one useful source, with the human** (`03-sources.md`, rung 2). Ask which account would help today and what they want to find. Include accounts already connected; do not make them redo sign-in. Explain the concrete benefit, requested access, provider disclosure, likely money/usage and privacy costs, and how to undo it. Guide the actual app's setup one screen at a time; check the sign-in screen rather than guessing. Take one bounded read only after the working-session mutation gate and a separate scoped yes. For work/client material, clarify policy before anything crosses. Defer standing reads and broad history until useful.
3. **Private GitHub remote** (`02-github.md`). Optional; local git plus the machine's backup is a complete setup. Do not make this a prerequisite for connecting a personal source.
4. **Other routes, later:** if a direct connection cannot pass its actual-session safety gate, name the limitation and continue with human-selected content or the source's own view. Do not turn the first connector sitting into proxy design; `04-proxies.md` is a later, separately chosen option.
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

- [ ] Only offers reached in this sitting have a yes, no, or later recorded; stopping or skipping the rest is a valid completion for today, not an outstanding permission decision.
- [ ] Each yes went through the self-edit gate and has a reversal recorded.
- [ ] The first connector offer, if reached, gave a concrete benefit and a legible access/cost/reversal preview; XO helped with the actual app setup or recorded the exact reason it could not proceed. Proxies and GitHub backup were not prerequisites.
- [ ] The handoff lists only explicitly chosen “later” items and the next useful step, if any; do not create an obligation for offers never made.
