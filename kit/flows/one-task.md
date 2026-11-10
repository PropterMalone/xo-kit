# Serve me one doable task

For the agent. Optional, on request: “something small I can finish,” “serve me one doable task,” “task roulette,” or a clear equivalent. Serve one task from an automatically derived list of known tasks that look finishable within about 20 minutes, with no complicated dependencies. No separate pool approval or curation is required. This is not a priority planner, scheduled reminder, new task manager or permission grant. Never spin automatically at door in, or replace the conversation's unfinished task without the human choosing to switch.

## 1. Automatically collect eligible known tasks

As tasks become known through this conversation and existing records already authorized for task selection, assess them for roulette. Include eligible tasks across that authorized context, not just your favorite project or recent items. Do not turn old brainstorms, unaccepted suggestions, “later” offers or inferred needs into obligations. Keep the existing task identity and source pointer where available; deduplicate references to the same task. The roulette list is a derived view, not another authoritative backlog.

“All known” is not “all technically accessible.” Do not search accounts, old chats, unrelated projects or the whole memory store to discover more work unless existing authorization covers that search for this purpose. Source-specific read scope, standing-read limits, actual-session gates and work/client authority still apply. Classification of known tasks grants no new source read. Do not ingest governed content into this provider without its authorized route.

Automatically include a task when the available evidence supports all of these:

- It is a real, still-open task the human chose or accepted.
- It has a concrete result that can plausibly be **finished**, not just started, within about 20 minutes including necessary preparation and normal review.
- The human can start now: needed materials/access are available, with no unresolved prerequisite, complex setup or dependency on someone else's response.
- It fits the human's known exclusions and any current override (for example, no work tasks tonight or only five minutes).
- It can be helped with under current permissions. Selection never authorizes a send, purchase, install, connection, destructive action or protected-file change.

Use roughly 20 minutes as the default finishability ceiling, not a timer, promise or target. Estimate from the actual task; do not squeeze an uncertain or clearly longer task under the cutoff to fill the list. Unknown readiness, stale status or uncertain dependencies keep an item out for now.

No time/effort intake is needed before the first draw. Ask at most one useful clarification when nothing is confirmed eligible; do not require metadata for every task. Do not infer health, mood or capacity from their writing. Respect a human-chosen shorter or different limit for that draw. Explicit “too big” or overrun feedback can improve later estimates; offer a useful exact memory note only under ordinary approval, without automatic timing logs or another questionnaire.

A bounded step of a larger task qualifies only when it has its own real finish line, such as “draft the three-sentence appointment request.” Present it as a step of the parent task, not a new obligation or “finish arranging the appointment.” Do not serve “spend 20 minutes on the project” as a finishable task. A human-performed send may be a short task if its draft/materials are ready; preparing it does not let XO send it. Tasks needing a complex approval/setup sequence stay out.

Maintain the derived list in the conversation by default: identity/source, finish line, rough duration, readiness evidence and status, plus round exclusions. Update eligibility as facts change; no user pool-management work. Before a draw, reconcile with current authorized evidence: remove completed, blocked, cancelled, excluded or no-longer-short items and deduplicate. Do not call a stale snapshot current or claim coverage of unread sources.

For continuity, offer one local note or a pointer from the handoff if useful, but do not make file setup a prerequisite. Persistent list/default/status/index edits follow the existing exact preview and approval rules in `stage1/03-memory.md`; batch related changes instead of asking item by item. Automatic classification is not automatic write authority. Prefer pointers and selection metadata rather than copying the whole backlog. Never silently mirror or mutate an external task account. If no tasks are known, ask one easy concrete question: “What is making today harder?” Help turn their answer into a manageable next step, not a task-list request, intake questionnaire or invented filler chores. Do not search accounts to supply work. If the human explicitly says they are hungry, tired or exhausted, food or rest may be their chosen useful outcome, not a diagnosis or an obligation to produce. Do not automatically prescribe it or infer health/capacity from writing. Stopping is valid.

## 2. Check this candidate before displaying it

Immediately before every task proposal, including Another and a revised card, check the specific candidate's status before displaying it as work to do. List reconciliation alone is not this check. Keep the check bounded to this task, not a repeated whole-backlog audit; do not show the card first and check afterward.

1. Match the candidate to its existing task identity/source and reconcile newer human statements and observed outcomes. A stale handoff or list entry alone is not current status. Reuse current checked evidence when the relevant facts are unchanged; a current human statement can be sufficient, with no ceremonial tool call. If a newer candidate-specific source is already within approved scope and could materially change status, read only the minimum relevant evidence before display under the existing source-specific and current-session gates. Unread is not checked. If the read is denied or unavailable, keep the resulting uncertainty; respect native denials without alternate-route retries. This grants no account search or new read grant.
2. Resolve whether it is still open and actionable, completed, cancelled or superseded, blocked, in progress, taken on by the human or delegated. For completed, cancelled or superseded tasks, do not propose them as open work. “I’ll do it” is not completion, but do not offer already-handled work anew: establish the actual remaining action and who owns it before any fresh proposal. An unresolved promise is not evidence of readiness. For blocked or materially uncertain candidates, withhold it as a ready proposal; use another checked candidate or ask one focused clarification. Do not silently mark any of these states complete.
3. Only after the check, apply this flow's finishability and readiness rules and display the card. Keep status reasoning internal unless a short status/source cue or clarification helps the human. There are no automatic status writes; retain ordinary preview and approval. This is not a universal five-minute exclusion or a recurring “Waiting on you” list.

Continue already-selected unfinished work under its known status and permissions; this proposal check is not a standing recheck loop or a reason to interrupt each next step. Recheck only when relevant new evidence or a fresh task proposal calls for it. Label a genuinely new task idea as a proposal, not a recovered obligation. Check its known prerequisites and possible duplication without inventing a prior task or requiring a nonexistent status record; it is not eligible for roulette until the human accepts it.

## 3. Draw and serve one card

For an ordinary short-task request, apply all of section 1 and the candidate check in section 2 before display, then make a useful choice and label it “my pick,” not a random draw. Only use the random-draw procedure when the request supports random/roulette intent, such as “pick at random” or “surprise me with a task.” Otherwise make a useful choice; “another” asks for another eligible pick in the same mode, not permission to invent randomness. No question about selection mode is required before helping. A generic “what next?” is not by itself a request for a short task: use START's context-sensitive next-step/urgency route instead.

If a known deadline is today or overdue, flag it in one short line before the card. Do not search beyond the authorized scope for deadlines or secretly weight the draw toward urgency. The human can choose the deadline instead of spinning; roulette does not override that choice. Say when deadlines were not checked if relevant, without implying the entire external backlog is covered.

For random/roulette intent, draw among eligible tasks. With an available, permitted local random-choice tool, use one equal-chance draw over stable task IDs; never send task text to an outside randomizer. Do not install a dependency, widen shell access or create an approval detour just for randomness. Without a permitted random tool, make a varied choice and label it “my pick,” not a verified uniform random draw. With one eligible item, serve it plainly.

Show one card, not the candidate list or filtering analysis. Name the finish line, rough time and first move. For example, only if the appointment draft is known to be ready:

```text
Send the appointment request
About 5 minutes
First move: open the prepared draft and check the proposed dates.

Start · Another · Not doable
```

These are reply choices, not a promise of clickable app buttons. The card authorizes no sending. Omit unnecessary private account details.

For Another, exclude cards already served in this round. Rerolls do not delete, complete, block or downgrade source tasks. If all eligible items have been served, say so and offer restarting the round or stopping; don't loop forever or silently restore rejected items. Known human exclusions remain until changed; a reroll alone is not a lasting category preference.

If nothing qualifies, say “Nothing I currently know is confirmed ready to start and finish within about 20 minutes” (or their chosen limit). Offer one useful clarification or stop. If evidence is stale, say that instead of claiming there is nothing to do. Do not prescribe a larger task, invent a filler task or make the human curate a pool. Stopping is valid.

## 4. Respond and help finish

- **Start:** help with the first move under existing permissions: open an approved local draft, prepare material or work through the step in chat. Ask separately for any gated action. Keep this as the conversation's unfinished task; do not spin again unless asked. Selected, delegated or started is not done. Confirm the finish line through the human or observed result before recording completion. A finished step is not a finished parent task. If it proves blocked or longer than estimated, state that, offer a safe stopping point and adjust current eligibility without blame; do not pressure them to beat 20 minutes.
- **Another:** reroll without judgment or demanding a reason. Exclude the previous card for this round only; don't edit its source status or infer a lasting preference.
- **Not doable:** exclude it for this round. Optionally ask whether it is blocked, too big or badly described, but do not require diagnosis to reroll. With their explanation, revise eligibility or offer a concrete smaller finish line in this conversation. Present a revised card for their choice, not an automatic source-task rewrite. No answer is not a permanent blocked status. Persistent notes/source edits still need ordinary preview and approval.

A chat-only round requires no write or ledger edit. Selection/rerolls grant no persistence permission. Batch useful approved checkpoint notes; keep sensitive notes separate. Tell the human what actually changed, including whether a source task remains unfinished.

## File handoff

For a requested file, identify the current app surface and its supported file-save or export route; do not assume a local disk, Drive connection or path from another product. Create the file only through the available route and existing approval gates, then read it back and check the requested name, format and required content; check the rendered result when preview is available. Creating a file is not proof that it was saved or delivered: provide a download control or human-reachable path only when verified, and say when a file exists only in the current runtime. If the route is unknown, offer one harmless sample file only when it does not force extra approval; do not install packages or connect cloud services just to force file delivery. Stop on a permission denial; do not retry through another path or tool. Offer the complete copyable content in chat or use an editor the human chooses, and keep the file format unverified unless it was checked; never publish an applicant file to a public repository to provide a download.

## 5. Native completion confetti, when available

After confirmed completion of a roulette task, a small native confetti burst may be a surprise; do not add a celebration questionnaire or menu-diving step. Respect an existing no-animation/no-celebration preference. If they dislike it, stop immediately; retain that preference only under ordinary memory approval.

Use only an actual native confetti capability exposed and enabled in this session. Establish exposure from the current capability/tool interface and enablement from explicit current session evidence; a dated inventory or screenshot alone does not prove live availability. Read the app's adapter for observed provider-specific details. Respect the capability's documented invocation/consent requirements: if it requires an explicit user request, omit agent-initiated confetti rather than treating completion as that request. Do not invent a tool name or claim success without its result. Do not enable a disabled setting, modify global settings, or force a reopen to obtain it. If either exposure, enablement or invocation authority cannot be established, omit confetti quietly and acknowledge completion normally.

Fire at most once per confirmed completion, not on draw, selection, delegation, starting or reroll. Celebrate a bounded step truthfully while leaving its parent unfinished. Do not install a helper, use shell/UI automation, open a browser or make a substitute animation. Other apps need their own observed supported capability; do not promise confetti everywhere. Celebration changes no status or permission by itself.

## Done when

- [ ] The list was derived automatically from known authorized tasks, with no separate pool-curation work, broad search or new access.
- [ ] Eligibility required an open task with a finish line, plausible total duration of about 20 minutes or less, and no complicated or unresolved dependencies; unclear items stayed out.
- [ ] Each proposed card passed the candidate-specific status check before display; stale, unread or materially uncertain status was not presented as ready, and already-handled work was not offered anew.
- [ ] One card was served, or no-fit/stale evidence was reported honestly; any known urgent deadline was flagged without secretly replacing roulette.
- [ ] Random-tool selection versus an agent pick was labeled honestly; rerolls excluded prior cards until the round was exhausted.
- [ ] Start/Another/Not doable preserved truthful completion and source status, normal permission gates and the human's choice to stop.
- [ ] Persistent list/default/status/index changes were previewed and approved; chat-only use remained available.
- [ ] Native confetti, if any, respected preferences and actual capability requirements, followed confirmed completion once, and required no settings changes or substitute execution.
