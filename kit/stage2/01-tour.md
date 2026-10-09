# Stage 2 tour: the offers

For the agent. Start here once stage 1 is done (backup, permission defaults, door in and door out, first handoff) and discovery has produced the sources inventory (`~/xo/sources.md`; Codex: `~/xo/work/sources.md`) or been skipped. This is a guided tour of offers, not a nag.

## How to offer

Do the authorized scope and evidence work yourself; show the human the benefit, material disclosure/cost, decision and relevant limitation, not an internal checklist. Reuse recorded answers only within their actual scope and expiry; do not ask them to classify the same known source again unless a material fact changed or remains unresolved. Unknown authority still stops governed content crossing, and source reads still require their actual-session gates. Give the technical detail when it affects the choice or they ask. Put the question beside its necessary context and accept requests for smaller chunks or a fuller explanation without a layout questionnaire.

- **One offer at a time.** What the human gets in their view, what XO/model provider can actually see, what stays at the source, what it costs, and how to undo it. A pointer to a work-native view is not a claim that XO read its items. A few lines. For example: “I can draft a reply here; you review it and send it yourself. Nothing connects to your mail, and you can delete the draft. Try one?” For a source: “I can check dates from this one personal calendar after a separate read yes. Its data reaches this provider; send tools must be blocked first. You can turn the connection off. Review that option, skip it, or leave it for later?” Then ask: yes, no, or later?
- **Respect actual answers; offer to save them.** For permission/configuration offers that received an answer, quote the human's words verbatim with a timestamp in a proposed ledger entry (`kit/templates/ledger.md`). Include no and later, but their answer to the offer is not approval of the ledger write. Preview the exact bounded entry batch and obtain a yes to saving it under `templates/instructions.md`. If saving is declined or interrupted, respect the answer in conversation and say it was not saved; a handoff note also needs its own applicable approval. Do not repeatedly ask for bookkeeping approval or claim future-session continuity without a saved record. Ordinary chat-only task selection needs no ledger entry; saving its preferences still follows memory rules.
- **A yes to a rule or setting change** goes through the self-edit gate: show every changed rule/setting as an exact before-and-after and get the scoped yes. Use and check the configured protected-write boundary per `templates/instructions.md`; record the actual human/automatic review, denial or execution outcome rather than promising a particular ask prompt. If the boundary is unverified or permits an out-of-scope write, stop that change and name the gap; do not widen permissions. The ledger is protected too. A yes to try roulette or queue is not a rule change or new source grant.
- **No means no.** Don't re-offer it. Your human can reopen it any time. An unsaved no is still no in this conversation.
- **Later comes back only on friction** (below), never on a timer.
- **Where they read matters.** Small approvals can happen on a phone. Rulebook changes (rungs, settings, the ledger) happen at a computer; if the human is on a phone, leave the change unmade and offer an approved handoff note if useful.
- Keep to the setup sitting's pace. The human can stop before answering an offer. An unanswered or interrupted offer is not no or later and creates no obligation; offer to note it as pending only if they want a continuation. Never manufacture an answer to complete the checklist.

## The first pass, in order

Skip anything that doesn't apply; stop the pass whenever your human wants.

1. **Drafting and approval gates** (rung 1, `05-ladder.md`). Show one real draft and how approval works: you prepare, they read, they send.
2. **Connect one useful source, with the human** (`03-sources.md`, rung 2). Ask which account would help today and what they want to find. Include accounts already connected; do not make them redo sign-in. Explain the concrete benefit, requested access, provider disclosure, likely money/usage and privacy costs, and how to undo it. Guide the actual app's setup one screen at a time; check the sign-in screen rather than guessing. Take one bounded read only after the working-session mutation gate and a separate scoped yes. For work/client material, clarify policy before anything crosses. Defer standing reads and broad history until useful.
3. **Private GitHub remote** (`02-github.md`). Optional; local git plus the machine's backup is a complete setup. Do not make this a prerequisite for connecting a personal source.
4. **Other routes, later:** if a direct connection cannot pass its actual-session safety gate, name the limitation and continue with human-selected content or the source's own view. Do not turn the first connector sitting into proxy design; `04-proxies.md` is a later, separately chosen option.
5. **Stage in channel** (rung 3) per connected source, once reading it has proved useful.
6. **Worth considering** (`06-worth-considering.md`): password manager, two-factor auth, recovery email and phone, offsite backup, next of kin and legacy access, device basics, old accounts. One offer at a time, when it fits.

Not offered in v0: sending on approval, scheduled work, an always-on machine. If your human asks, see `05-ladder.md`.

## Optional task choices

When the human wants help choosing or seeing their work, offer a useful default rather than a configuration exercise:

- **Roulette** (`flows/one-task.md`): “I can pick one task you can start now and likely finish in about 20 minutes.” Automatically derive eligible known tasks; no curated-pool approval or metadata questionnaire.
- **Queue** (`flows/queue.md`): “I can pick what I think is most urgent; tell me what you'd change.” Use learned explicit priorities and make a correctable judgment, not a deadline-only ranking.
- **Sweep** (`flows/task-sweep.md`): “I can check the channels you've authorized for new commitments and show the whole known task picture.” Coverage depends on actual read grants and gates, not just connected tools. No silent standing reads or source mutations.

These are on request, not new compulsory stops in this tour or door in. No, later or stopping is valid. Use tasks/content already known when access is unavailable. Keep ordinary conversation behavior separate from a permission/rule change; persistent defaults still use memory preview and approval. Don't ask the human to erect a task system before trying one useful selection.

## Friction triggers for "later"

Re-offer an explicitly answered "later" once when you see its friction, naming what you saw:

- Your human pastes mail, calendar, or notes in by hand three times: offer to read that source.
- They copy your drafts into the same app repeatedly: offer rung 3 for that source.
- They lose work, or switch machines: offer the GitHub remote.
- They reuse or forget a password in front of you: offer a password manager.

Example: "You've pasted mail in three times this week. Want me to read that inbox directly?" If the answer is later again, respect it and offer saving only through the separate ledger gate. Wait for new friction; don't turn a refusal to save into another offer.

## Done when

- [ ] Actual permission/configuration answers were respected; any ledger records were separately previewed and approved. Unsaved answers were identified as unsaved, and unanswered/interrupted offers were not assigned a decision. Stopping or skipping is valid; chat-only task choices required no ledger setup.
- [ ] Each performed rule/setting change went through the self-edit gate with a reversal and actual native-boundary outcome recorded; unverified/out-of-scope boundaries stopped that change. Ordinary task-selection requests were not treated as rule changes.
- [ ] The first connector offer, if reached, gave a concrete benefit and a legible access/cost/reversal preview; XO helped with the actual app setup or named why it could not proceed. Proxies and GitHub backup were not prerequisites.
- [ ] Any approved handoff distinguishes explicitly chosen later items from an unanswered pending offer, without creating obligations for offers never made or implying declined records were saved.
