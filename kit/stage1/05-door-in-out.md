# Stage 1, sitting 05: the door in and the door out

For the agent. Goal: every sitting opens and closes the same way, so your human can walk away mid-sentence and lose nothing. About 20 minutes: walk through both doors once with your human, then write the steps into your instructions file.

## The running handoff

One file per sitting in `handoffs/`, from `templates/handoff.md`. Update it after every approved action, not only at the end: a usage limit, a crash, or your human walking away must never cost more than the last step.

**Phone-first.** Your human may read it on a phone, in a hurry, a week later.
- First line: the next action, as one plain sentence.
- Short lines. No tables. Headings and short bullets only.
- Say what's waiting on your human separately from what you'll do next.

## The door in (start of every sitting)

1. Read the instructions file (if auto-load failed on this harness, per the ledger), `memory/MEMORY.md`, and the newest handoff.
2. **Check against reality.** Does the folder match what the handoff says? Is git clean, or are there uncommitted changes from a sitting that ended abruptly? Say what you found.
3. **Drift check.** Compare the live harness settings, the app's permission mode, and your current tool list against the ledger. On Codex, inspect the actual task folder, mode, and any roots `/status` exposes; if it omits them, use the adapter's approved safe boundary checks rather than claiming protection. On Claude, confirm the folder's mode is Manual and check `.claude/settings.local.json`. Anything granted that the ledger doesn't record (a new "always allow", a new connector, a new tool) gets flagged to your human before you use it.
4. **Liveness check, every source in the ledger.** For each connected source or proxy: when did the newest item arrive, and is that plausible for this source? Past its expiry date? A stale source gets flagged as "may be broken", never read as "nothing new". (In stage 1 there are usually no sources yet; say so in one line.)
5. **Kit update notice (every door in; read-only).** Follow `kit/flows/update.md`: compare `kit/PIN` with the commit pin advertised by the published XO door pages. If the advertised pin is confirmed as a newer commit in the same kit repo, tell your human plainly: “Your XO kit is behind the current published build. You can review an update now or leave it as is.” Do not claim an update is available if the pages cannot be checked or disagree; say the check could not be completed. Do not replace the kit or change settings without the separate review and yes in that flow. Keep this notice short; do not turn door-in into an automatic install.
6. Tell your human in a few lines where things stand and what the handoff says is next. Then ask what they want to do.

Keep the door in under two minutes of their reading.

## The door out (end of every sitting)

1. Finish or park the current step at a clean point.
2. Update the handoff: date it; next action on line one; what's waiting on your human; what you saved to memory this sitting.
3. Update memory files that changed; keep `MEMORY.md` in step.
4. If your instructions aren't saved yet, remind your human (seed rule).
5. Propose the commit: show the list of changed files and a one-line message. On yes, stage exactly those files and run the secret scan (sitting 04) on the staged diff. A hit stops here.
6. If the scan is clean, show the staged file list once more and commit only what your human approved.
7. Tell your human it's safe to close.

## Write it down

Propose adding both doors, in short form, to your instructions file, through the self-edit gate (`templates/instructions.md`). After that the instructions carry them and you don't need this file each sitting.

## Done when

- [ ] You ran the door in once with your human watching, including the drift and liveness checks.
- [ ] You ran the door out once, ending in a clean commit.
- [ ] The newest handoff opens with the next action and has no tables.
- [ ] The door-in update comparison ran or its failure was reported; no update was installed without review and approval.
- [ ] Both doors are in the instructions file, approved through the self-edit gate.
- [ ] The handoff names what's next: stage 1 is done; the next step is `discovery.md`, then stage 2 if your human wants to continue.
