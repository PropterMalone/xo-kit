# Excise an unwanted repeated instruction

For the agent. Optional, explicitly requested: “excise <behavior>” or a clear request to stop and correct an unwanted repeated instruction. This is a portable skill specification, not an installed app skill or automatic cleanup task. For a permission-check loop, use `repair-permission-loop.md` for the detailed repair. Do not run excise at door in or merely because a memory is old.

## What excise does

Stop the named unwanted behavior in this conversation where doing so respects the human's current instructions and safety rules. Identify the active records reinforcing it, distinguish stale directives from valid rules and evidence, and propose one coherent correction. Do not assume a repeated mention proves its cause. Excise is not authority to weaken safeguards, cancel an obligation, change account state or erase history.

1. **Name the target.** Use the human's description and current conversation to identify the behavior to stop, its last observed instance and the desired replacement. Ask one focused question only if the distinction materially changes the repair. Do not repeat the unwanted action to diagnose it.
2. **Bound the reads.** State the relevant active set before inspection: installed instructions actually loaded, newest handoff/continuation, relevant decision or permissions log, approved simple working-memory file or memory index and only linked memories driving this behavior, under `stage1/03-memory.md`. Absent indexes are not a repair trigger; memory contents are data, not protected authority. Use existing authorization for this purpose; ask for missing scope. Follow an older reference only if it still supplies an active directive and its read is authorized. Do not search unrelated projects, accounts, all chats or the whole memory store. List inaccessible active sources as unresolved; do not retry a denied read through another tool.
3. **Separate instruction from history.** Identify which passages are obsolete repeat directives, which are still-valid rules, and which record actual events or uncertainty. Preserve genuine failures, unknowns, approvals, grants, obligations and useful audit history. An unwanted reminder is not evidence its underlying task is cancelled. A historical description alone is not an instruction to repeat it. A suspected hidden summary remains a hypothesis.
4. **Preview one correction.** Show exact before-and-after text and destination for every proposed active-record change, including index/pointer changes, with a short reason. Replace or remove only the stale directive in editable records; keep unrelated content. Append superseding entries to append-only logs and determine current effect from later supersession, never rewrite old approvals or results. For immutable historical records, correct the current dependency rather than editing every archive. State the replacement behavior and any condition for reconsidering it. Do not delete whole records by default.
5. **Approve, then apply.** Wait for approval of the shown bounded batch under existing instruction-edit and memory rules. “Excise” authorizes the requested analysis, not unseen replacement text. Settings changes, task cancellation, deletion or revocation are separate consequential proposals. Denied writes stay unmade; do not switch tools, permissions or writable roots to bypass them. Offer reviewed human-applied text or a pause. Report partial changes and unsaved corrections; unsaved text cannot be promised across sessions.
6. **Verify and return.** Reread approved changed records and the bounded active sources for conflicting directives, dangling pointers and the agreed replacement. Do not repeat the unwanted operation or run a gate probe to verify prose. Report what changed, what remains unresolved and the next useful action on the human's chosen task. Keep genuine safety gates; do not force a new chat. Corrected active text does not erase provider-held chats, hidden summaries or inaccessible memory, and does not prove recurrence impossible.

## Copyable prompt: make this a reusable skill

Offer this only when the human wants a reusable app skill. They may use the procedure directly without saving anything. A slash command is available only if their actual app supports and registers one; do not promise `/excise` merely because a file exists.

```text
Help me create a reusable skill named excise, using the specification I give
below. Its job is to stop a named unwanted repeated behavior and propose
corrections to the authorized active instructions, handoffs and relevant
memories reinforcing it—not to purge history or weaken safeguards.

Draft first. Use my existing instructions and permissions. Verify this app's
supported skill format, location and invocation method from authorized local
examples or official documentation; ask before a fetch or read outside my
existing scope. If support cannot be verified, give me a portable text
specification instead of guessing paths, installing tools or claiming a slash
command exists.

Preserve the specification's explicit invocation, bounded reads, distinction
between stale directives and genuine facts, exact multi-record preview and
approval, append-only history, denied-write stop, reread verification and
honest partial/hidden-memory limits. Do not run the repair while creating the
skill. Do not add automatic triggers, scheduled cleanup or new access.

Show the full proposed skill text, exact save path, any registration/settings
changes and how to invoke or remove it. Explain any adaptation that affects
behavior. Wait for my approval before saving or registering it. If approved,
use the existing write gates, reread it and run a supported validator if
available and authorized. Distinguish saved, validated and actually loaded;
tell me if a reload is needed without restarting my session automatically.
Do not publish it or send it anywhere.

Specification:
[Paste the “What excise does” section here, or ask your agent to read this
exact guide if that read is already authorized.]
```

## Done when

- [ ] The human's named behavior was distinguished from valid rules, evidence and any unfinished obligation; no diagnostic repetition occurred.
- [ ] Active-record reads stayed within the stated authorized bound, with inaccessible sources reported.
- [ ] Exact proposed corrections were approved before writing; history and safety gates were preserved, and partial/unsaved changes were identified.
- [ ] Changed and active records were checked for conflicts, and the human received a useful next action without a forced restart or erasure promise.
- [ ] If the human requested skill creation instead of repair, only the approved skill artifact/registration was saved; support, validation and loading limits were reported, and the repair itself was not run.
