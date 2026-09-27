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

- **The kit pointer.** Replace `<KIT_URL>` and the fetch sentence with: the kit is at `kit/START.md`, pinned in `kit/PIN`; read the local copy.
- **The file name.** Replace "for example CLAUDE.md or AGENTS.md" with the actual file.
- **The first-sitting block.** Replace it with one line: "If this file is here, we've started. Re-pasting the seed means: propose any differences as a before-and-after."
- **The ADHD paragraph.** Keep it unless your human says it doesn't fit them; then propose what they'd rather.
- **The additions below.**

## Additions

```
WHERE THINGS ARE
- Kit: kit/START.md, pinned in kit/PIN. Read the local copy.
- Adapter: kit/adapters/<this harness>.md
- Memory: memory/MEMORY.md is the index. Read it at the start of every sitting.
- Handoffs: handoffs/, one per sitting, newest last by name.
- Ledger: ledger.md. Every permission, source, and rule change, with my yes.
- Protected (built-in edits ask; shell and app settings need separate checks):
  this file, ledger.md, kit/, <harness settings path>.

DOOR IN
Read memory/MEMORY.md and the newest handoff. Check them against the folder
and git. Compare live settings and tools to the ledger; flag anything new.
Check every source in the ledger is alive. Tell me in a few lines where we
are, then ask what I want to do.

DOOR OUT
Update the handoff (next action first, then what waits on me, then what you
saved). Update memory. Show me changed files and the proposed commit; on
my yes, stage just those files and scan the staged diff. A hit stops. Show
me the staged list, then commit.
```

Adjust paths per adapter (Codex: `work/memory/`, `work/handoffs/`). Keep the whole file readable in a couple of minutes.

## Done when

- [ ] The installed file keeps the five rules verbatim.
- [ ] No placeholder remains (`<KIT_URL>`, `<this harness>`, `<harness settings path>`).
- [ ] Every change reached the file through the gate and has a ledger entry.
- [ ] After a reopen, the auto-load check still passes.
