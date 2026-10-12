# Template: handoff

For the agent. Confirm the selected project through `flows/project-return.md`. Copy the block below to that project's own `handoffs/YYYY-MM-DD.md` at the start of a sitting; the default single-project folder still works. Fill the owner markers from the confirmed folder, not a guessed title. Update it at meaningful boundaries: before a planned reopen, when a session may end, after a consequential permission/settings change, and at door out. Batch routine approved actions and checks into one checkpoint under the applicable handoff save approval, not a separate save for each action. Before an approved action risks abrupt context loss, preserve the last verified state and safe next step first; this does not authorize the risky action. Record only approved actions actually completed under Done; keep denied, interrupted, unverified or unfinished attempts and their actual outcomes in Notes, with a safe next step. Handoff cadence grants no standing write authority and is separate from the operational POLICY; a return-note update still needs its exact preview and save approval. At the door out, date it and fill every section. Phone-first: the next action on line one, short lines, no tables.

```markdown
Next: <one plain sentence: the very next action>

# Sitting YYYY-MM-DD (<kit sitting, e.g. stage 1 / 02>)

Project name: <familiar project name>
Project folder: <confirmed canonical folder or safe path relative to confirmed XO root>
Chosen work: <last approved chosen task; tangents do not replace it>

## Waiting on you
- <decision or task only your human can do, or "nothing">

## Done
- <approved action> (yes at HH:MM)

## Saved to memory
- <file.md>: <one line>

## Notes
- <anything surprising, a gap found, a gate check result>

Ended: YYYY-MM-DD HH:MM <timezone>, <clean | cut off mid-step: which>
```

## Naming and collisions

Use date plus numeric sitting sequence within the selected project's `handoffs/` only: `YYYY-MM-DD.md` is sitting 1; `-2.md`, `-3.md`, through `-10.md` follow. Select latest date then largest number; sitting 10 follows sitting 2, not lexical order. The agent chooses the next unused number; the human manages no identifiers. Apply `flows/project-return.md`'s state-path containment checks before listing or opening this store or any record, separately from owner markers. Reject symlink/reparse-point redirects before access; for a new destination validate existing ancestors and its direct local target. Recheck target containment, redirect status, owner and version before writing; inability to establish containment pauses access or creation, not permission to follow a redirect. Inspect only this approved directory. Check owners before task recovery; never use another project's latest date.

Before creation, verify the destination is unused. Before an update, recheck owner and contents against the version this sitting last read. If a parallel writer created that destination, changed the record, owns it differently, or is known to be active in this same folder, stop writing and reconcile with the human. Preserve both writers' known work; never overwrite or select the last writer as authoritative. Do not silently evade a detected collision by taking another number. These checks are not a lock or atomic concurrency guarantee; coordinate same-project sessions or use a reviewed continuation in chat. Different project folders remain independent.

For ownerless legacy handoffs, use the bounded verification/adoption procedure in `flows/project-return.md`; do not edit or migrate history automatically. Ownership grants no permissions or additional note-writing authority.

## Done when

- [ ] Line one is a single plain next action.
- [ ] "Waiting on you" is filled, or says "nothing".
- [ ] Every approved action actually completed by this checkpoint is under "Done"; denied, interrupted or unfinished attempts are not marked complete. Routine actions may share one checkpoint. No unapproved save was made.
- [ ] Owner and chosen work match the selected confirmed project; date/sequence was chosen only inside its handoffs. A collision stops writing for human reconciliation, not overwrite or last-writer selection.
