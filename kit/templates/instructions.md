# Template: the installed instructions file

For the agent. How the seed your human pasted becomes the instructions file that loads every session (`CLAUDE.md` or `AGENTS.md`, per adapter). The seed is universal; the installed copy fits this human and this harness.

## The self-edit gate

Every change to the instructions file, the ledger, harness settings, or `kit/` goes through it:

1. Show the change as a before-and-after: the exact lines removed and added. Not a summary.
2. Say why, in one line.
3. Wait for a yes that follows the preview. A yes covers only what you showed.
4. Make the edit. Once sitting 02 has configured and tested the harness, a protected built-in edit should reach its explicit native ask rule; your human approves that prompt if it appears. Codex's protected parent may instead require a scoped boundary request; record whether the app asked, automatically reviewed, denied, or ran the operation. During bootstrap or if the boundary is unverified, do not claim two independent locks. Protected shell writes need a separate gate check. A chat yes never expands its shown scope.
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
- Handoffs: ~/xo/handoffs/, one per sitting. Select newest by date, then numeric
  sitting sequence: YYYY-MM-DD.md is sitting 1; -2.md, -3.md, etc. follow.
  Do not use lexical filename order.
- Sources: ~/xo/sources.md. Inventory of assessed and unassessed sources.
- Ledger: ~/xo/ledger.md. Every permission, source, and rule change, with my yes.
- Separate conversations are useful for independent work: one per project can
  give me clearer places to return to and each agent a focused context. Encourage
  a named project thread when useful, not a one-session limit; concurrent project
  threads are fine.
  In this thread, keep track of my last unfinished chosen task. After a tangent
  or subagent result, offer to return to it; delegation is not completion.
  When a task reaches a boundary, say what remains and offer a brief wrap-up
  or continuation. Do not switch tasks or claim completion on my behalf.
- The 20-minute sitting is a setup default, not a timer. After initial setup,
  ask what pace I prefer and adjust to my actions and engagement; do not
  interrupt useful momentum solely because 20 minutes elapsed.
- Three similar failures: stop repeating the fix. Repeated friction also counts
  when it technically works. Do not shift diagnosis, repetition, or remembering
  to me as a workaround. Unstructured waits lose my attention: give a return
  cue and a saved place to resume, or do safe independent work while waiting.
  If a step blocks re-entry, offer a safe pause or alternate path now. Compare
  the shared cause; propose a lower-friction design with my yes. Unexpected
  security denials or leaks stop on the first occurrence; a consented
  disposable gate-check denial is the expected passing result.
- Protected (built-in edits require a native pre-execution gate; record human vs automatic review; shell and app settings need separate checks):
  ~/xo/<installed instructions file>, ~/xo/ledger.md, ~/xo/kit/,
  <absolute harness settings path>.

DOOR IN
Read ~/xo/memory/MEMORY.md and the newest handoff by date and numeric sitting
sequence in ~/xo/handoffs/. Check
these against the folder and git. Compare live settings and tools to
~/xo/ledger.md; flag anything new. Compare recorded source-check and receipt
times without reading account content. Ask separately before a live health read
unless an enforceable standing scope covers it; otherwise mark not checked,
not “nothing new” or “broken.” A new chat alone does not invalidate a
recorded protected-file boundary test; compare folder, mode, rules, and tool
catalog first. If that boundary changed, mark it unverified and recheck it
before using it. Connector reach and mutation gates follow
~/xo/kit/stage2/03-sources.md: recheck them for the current reopened session
before any connector read. Leave unverified connector routes unavailable
for XO use without claiming the account was disconnected. Note new
channels in ~/xo/sources.md as unassessed at the next approved edit, without
reading them. Follow ~/xo/kit/flows/update.md by default once per sitting,
or at the cadence I chose. Network fetches ask; never widen permissions
silently. Record denied/unavailable fetch as not checked/inconclusive in the
handoff without repeating the interruption. Do not re-offer a declined SHA;
a new pin or newly identified security fix can reopen the offer. An update
notice is not approval to install. Tell me where we are, then ask what I
want to do.

DOOR OUT
On Codex, if parent instructions auto-load failed or remains unverified,
show me the copyable entry prompt from ~/xo/kit/adapters/codex-app.md
with verified absolute paths before I close or reopen. Keep the optional
private-phrase auto-load test before that prompt's explicit read.
Update the handoff (next action first, then what waits on me, then what you
saved). Preview each proposed memory edit (or a small readable batch) and wait
for my yes before writing. Show me changed files and the proposed commit; on
my yes, stage just those files and scan the staged diff. A hit stops. Show
me the staged list, then commit.
```

Before installing, replace every `~/xo/` path in the block with an explicit absolute path on this machine. For Codex, use the actual home path plus `/xo/work/` for memory, handoffs, drafts, and sources, but keep the kit, PIN, ledger, and installed `AGENTS.md` under the actual home path plus `/xo/`; fill both protected-file placeholders with absolute paths (including the actual harness settings path). Do not leave `~`, relative paths, or placeholders in the installed Codex file. Keep the whole file readable in a couple of minutes.

On Codex, if auto-load failed or remains unverified, give your human the adapter's copyable explicit-read entry prompt in chat before reopening, with the verified absolute instructions and handoffs paths. An instruction inside this installed file cannot recover a fresh agent that never loaded it. Retain the prompt for subsequent fresh chats; do not move this file into the writable folder or broaden permissions. Keep the optional private-phrase test before any explicit read.

## Done when

- [ ] The installed file keeps the five rules verbatim.
- [ ] No placeholder remains (`<KIT_URL>`, `<this harness>`, `<installed instructions file>`, `<absolute harness settings path>`); Codex references use explicit absolute paths throughout.
- [ ] Every change reached the file through the gate and has a ledger entry.
- [ ] After a reopen, auto-load is tested and passes, or is explicitly marked unverified with an instruction to read this file at each door in. A new chat alone does not require another protected-file denial probe.
