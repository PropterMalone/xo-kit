# Stage 1, sitting 03: memory

For the agent. Goal: a memory your human owns, in plain files in `~/xo`, that any future agent on any harness can read. About 20 minutes.

Context is disposable; continuity is not. Everything worth keeping goes in the folder, so a new session, a new harness, or a new model picks up where the last one stopped.

## 1. Where memory lives

- **Only in `~/xo/memory/`** (Codex: `~/xo/work/memory/`). Your harness's private memory store is off or ignored (adapter). Nothing about your human lives anywhere you can't show them.
- **Reads are explicit.** Your instructions file names `memory/MEMORY.md`; you read it at every door in. Don't count on the harness to load it for you.

## 2. The index

Create `memory/MEMORY.md` from `templates/MEMORY.md`. It's an index, not a store: one line per memory, `- [Title](file.md) — one-line hook`. Keep it short enough to read in a glance, around 40 lines. Past that, move anything not in active use to `memory/roster.md` (areas and projects) or `memory/topics.md` (everything else), which you open only when you need them, and say so in the index.

## 3. One memory per file

Each memory is its own Markdown file in `memory/`, named by its slug:

```markdown
---
name: short-kebab-slug
description: one specific line, so a future session can judge relevance
type: user | feedback | project | reference
updated: YYYY-MM-DD
---

The memory. Link related ones with [[other-slug]].
```

Four types:
- **user**: who your human is, how they like to work, what they know. ("Prefers one question at a time; mornings are for deep work.")
- **feedback**: how to work with them, both corrections and things that worked. Lead with the rule, then **Why:** and **How to apply:**. Save what worked, not only what went wrong.
- **project**: something ongoing, with a goal or a deadline. Date it; it goes stale fast.
- **reference**: where something lives. ("Rent is paid from the joint account, via the bank's app.")

Don't save: passwords, keys, account numbers, or anything secret; anything already in the instructions file; raw copies of mail or chats. Memory is for intent, preferences, decisions, and pointers.

## 4. When to save

- Before writing any memory, show your human the proposed exact text and file path (and any index change), then wait for a yes. Batch a few related routine memories into one readable preview and one yes covering only that batch; do not silently add to it. Show sensitive memories about health, money, relationships, or other named people separately and get a specific yes. Do not bring employer/client/project material into a personal AI subscription by proposing it here unless a specific route is authorized under every applicable policy; unknown policy means no crossing. A memory yes alone does not authorize that crossing.
- Move what you learned in the first sitting (kept in the handoff until now) into memory files only after this preview and approval. List what was saved in the handoff.
- A memory is a snapshot. Check a recalled fact against how things are before you act on it.

## 5. Handoffs

Handoffs live in `~/xo/handoffs/` (Codex: `~/xo/work/handoffs/`), one per sitting, named `YYYY-MM-DD.md` (add `-2`, `-3` for more sittings that day). Format in `templates/handoff.md`; the door in and out are in sitting 05. At door in select the latest date, then the largest numeric sitting suffix on that date; the unsuffixed file is sitting 1. Do not use lexical filename order, which can put the unsuffixed file after later sittings.

## Done when

- [ ] `memory/MEMORY.md` exists from the template and links every memory file.
- [ ] Each memory file has the frontmatter above with a real `description`.
- [ ] Each saved memory and index change was previewed and approved before writing (routine additions in a bounded readable batch); your human has seen the saved list.
- [ ] The harness's private memory is off or ignored, per the adapter, and the ledger says which.
- [ ] Your instructions file tells you to read `memory/MEMORY.md` and the newest handoff at every door in (add it through the self-edit gate if it doesn't; see `templates/instructions.md`).
- [ ] The handoff names the next step: sitting 04.
