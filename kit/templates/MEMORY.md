# Template: memory index

For the agent. Only if your human chooses indexed memory in sitting 03, copy the block below to `memory/MEMORY.md` under that file's exact preview and save approval. For a simple first memory or no save, follow `stage1/03-memory.md` instead. Never overwrite an existing memory file with this template; preserve its approved content and layout, and preview any chosen conversion separately. It's an index, not a store: active entries belong here; inactive entries belong in linked cold indexes (`roster.md` for projects/areas, `topics.md` for other memories). Keep it around 40 lines and move inactive entries when needed. Give each memory file exactly one appropriate index entry in the hot or cold index; the content lives in the file. Do not duplicate cold entries in the hot index. For every new or moved entry, check its link and routing so there is no orphan. Check retrieval of a cold record through the hot pointer and appropriate cold entry, using only authorized relevant recall; index reachability grants no other-project read.

```markdown
# Memory index

Read at the start of every sitting. One line each: - [Title](file.md) — hook

## About you
- [How you like to work](user-working-style.md) — one question at a time; short replies

## How we work
- Secret scan: follow the canonical procedure in the installed `~/xo/kit/stage1/04-backup.md` before each commit (Codex also reads this from `~/xo/work`); do not copy its command or patterns into memory

## Going on now
- <project or area> — one line on where it stands

## Where things live
- <reference>

## Cold indexes (open only when needed)
- [roster.md](roster.md) — inactive project and area entries
- [topics.md](topics.md) — inactive other-memory entries
```

Delete the cold-index lines until those files exist.

## Done when

These checks apply only to chosen indexed memory; a simple file or no memory save remains valid under `stage1/03-memory.md`.

- [ ] The hot index directs active entries and links each existing cold index; every memory file has exactly one appropriate index entry in the hot or linked cold index, with no orphan. Do not duplicate cold entries here.
- [ ] Every link resolves; new or moved entries route to the right index. A relevant authorized cold record can be retrieved through the hot pointer without opening unrelated records.
