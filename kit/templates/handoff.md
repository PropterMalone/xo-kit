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

## If the handoff cannot be saved

Distinguish permission to read or expose a folder from effective write authority to this exact canonical, contained handoff target in the confirmed same project. Adding the folder to the app or project, selecting it, or granting read access does not grant write authority. Use current effective root/path/mode/policy evidence under `stage1/02-permissions.md`'s shared check-attempt limits. Reuse a prior observed successful approved write as corroboration only for the same canonical folder and actual tool route, with unchanged relevant session state, mode, policy and protected boundary. An existing handoff/observation may point to that event; an existing file or success claim alone is neither proof nor a grant. Success does not authorize the current save: retain the current save's applicable consent, containment, ownership and version checks. A first approved write needs no historical record; require no new marker, probe, repeated intake or routine observation save. Missing historical evidence does not block a currently permitted ordinary route; unattempted is not app-denied. A past read proves only read, not write; evidence does not extend to siblings, protected files or new sessions. Evidence of changed roots/policy or an actual denial overrides old evidence; current-session source gates still apply.

Stop a known blocked or denied save route immediately. If effective write access remains genuinely unknown, leave the save unattempted, not app-denied. State exactly which handoff or update did not save; do not mark it saved or promise automatic return. Offer its exact copyable continuation in chat with the chosen work, last verified state, next action and relevant unsaved limit. Do not seek Full access, add a writable root, retry a known block or denial through a shell or alternate tool, redirect the handoff into a protected parent, or silently move/copy it elsewhere.

Keep environmental recovery separate from this save: propose only a bounded change justified by the actual app, OS, canonical target path, effective mode and policy, with its own approval and the existing shared attempt limits. Do not rerun the entire setup, renew attempts on a task switch, or run arbitrary probes to make the save pass. Keep useful task help available within existing permissions; no recovery or save is required for chat-only success.

## Done when

- [ ] Line one is a single plain next action.
- [ ] "Waiting on you" is filled, or says "nothing".
- [ ] Every approved action actually completed by this checkpoint is under "Done"; denied, interrupted or unfinished attempts are not marked complete. Routine actions may share one checkpoint. No unapproved save was made.
- [ ] Owner and chosen work match the selected confirmed project; date/sequence was chosen only inside its handoffs. A collision stops writing for human reconciliation, not overwrite or last-writer selection.
