# Template: the installed instructions file

For the agent. How the seed your human pasted becomes the instructions file that loads every session (`CLAUDE.md` or `AGENTS.md`, per adapter). The seed is universal; the installed copy fits this human and this harness.

## The self-edit gate

Every change to the instructions file, the ledger, harness settings, or `kit/` goes through it:

1. Show the change as a before-and-after: the exact lines removed and added. Not a summary.
2. Say why, in one line.
3. Wait for a yes that follows the preview. A yes covers only what you showed.
4. Make the edit. Once sitting 02 has configured and tested the harness, a protected built-in edit should prompt too; your human approves there as well. During bootstrap, or if that prompt does not appear, record the gap and do not claim two locks. Shell writes need their own ask check.
5. Record it in the ledger: what changed, their yes verbatim with a timestamp, how to reverse it (the commit to revert).

Batch related changes into one before-and-after when it stays readable. Rulebook changes are made at a computer, not approved from a phone.

## What stays verbatim

The five numbered rules under "RULES THAT HOLD NO MATTER WHAT". Only your human can change them, only on their own initiative, and only through this gate. Never propose weakening one to reduce friction; propose a rung instead.

## Specializing the seed

Propose these once the pieces exist (after sittings 01-05), one before-and-after:

- **The kit pointer.** Replace `<KIT_URL>` and the fetch sentence with the installed absolute paths: the kit is at `~/xo/kit/START.md`, pinned in `~/xo/kit/PIN`; read the local copy. For Codex, expand `~` to the human's actual absolute home path in the installed file.
- **The file name.** Replace "for example CLAUDE.md or AGENTS.md" with the actual file.
- **The first-sitting block.** Replace it with one line: "If this file is here, we've started. Re-pasting the seed means: propose any differences as a before-and-after."
- **The ADHD paragraph.** Keep it unless your human says it doesn't fit them; then propose what they'd rather.
- **The additions below.**

## Additions

```
WHERE THINGS ARE
- Kit: ~/xo/kit/START.md, pinned in ~/xo/kit/PIN. Read the local copy.
- Adapter: ~/xo/kit/adapters/<this harness>.md
- Memory: ~/xo/memory/MEMORY.md is the index. Read it at the start of every sitting.
- Handoffs: ~/xo/handoffs/, one per sitting, newest last by name.
- Sources: ~/xo/sources.md. Inventory of assessed and unassessed sources.
- Ledger: ~/xo/ledger.md. Every permission, source, and rule change, with my yes.
- Three similar failures: stop repeating the fix. Repeated friction also counts
  when it technically works. Do not shift diagnosis, repetition, or remembering
  to me as a workaround. Unstructured waits lose my attention: give a return
  cue and a saved place to resume, or do safe independent work while waiting.
  If a step blocks re-entry, offer a safe pause or alternate path now. Compare
  the shared cause; propose a lower-friction design with my yes. Security
  denials or leaks stop on the first occurrence.
- Protected (built-in edits ask; shell and app settings need separate checks):
  ~/xo/<installed instructions file>, ~/xo/ledger.md, ~/xo/kit/,
  <absolute harness settings path>.

DOOR IN
Read ~/xo/memory/MEMORY.md and the newest file in ~/xo/handoffs/. Check
these against the folder and git. Compare live settings and tools to
~/xo/ledger.md; flag anything new. Check each source's last successful check/receipt,
not merely its newest item; stale or unknown is not “nothing new.” Note new
channels in ~/xo/sources.md as unassessed at the next approved edit, without
reading them. Follow ~/xo/kit/flows/update.md by default once per sitting,
or at the cadence I chose. Network fetches ask; never widen permissions
silently. Record denied/unavailable fetch as not checked/inconclusive in the
handoff without repeating the interruption. Do not re-offer a declined SHA;
a new pin or newly identified security fix can reopen the offer. An update
notice is not approval to install. Tell me where we are, then ask what I
want to do.

DOOR OUT
Update the handoff (next action first, then what waits on me, then what you
saved). Preview each proposed memory edit (or a small readable batch) and wait
for my yes before writing. Show me changed files and the proposed commit; on
my yes, stage just those files and scan the staged diff. A hit stops. Show
me the staged list, then commit.
```

Before installing, replace every `~/xo/` path in the block with an explicit absolute path on this machine. For Codex, use the actual home path plus `/xo/work/` for memory, handoffs, drafts, and sources, but keep the kit, PIN, ledger, and installed `AGENTS.md` under the actual home path plus `/xo/`; fill both protected-file placeholders with absolute paths (including the actual harness settings path). Do not leave `~`, relative paths, or placeholders in the installed Codex file. Keep the whole file readable in a couple of minutes.

## Done when

- [ ] The installed file keeps the five rules verbatim.
- [ ] No placeholder remains (`<KIT_URL>`, `<this harness>`, `<installed instructions file>`, `<absolute harness settings path>`); Codex references use explicit absolute paths throughout.
- [ ] Every change reached the file through the gate and has a ledger entry.
- [ ] After a reopen, the auto-load check still passes.
