# Template: permissions ledger

For the agent. Copy the block below to `~/xo/ledger.md` in sitting 01. It's a protected rule file: every edit requires the before-and-after chat yes in `templates/instructions.md`. During initial setup, the harness ask rule may not yet be installed; after sitting 02, test that built-in edits and shell writes both prompt. If either does not, record the gap rather than promising a second lock.

The ledger is how your human and any future agent check what's been granted against what the harness actually allows. If they disagree, the harness is what's true: flag it.

Rules:
- One entry per grant, change, or step down. Never edit an old entry; add a new one that supersedes it.
- The approval is your human's words, quoted exactly, with a timestamp. Not a paraphrase.
- The reversal is concrete enough that a different agent could do it.
- Sources carry a liveness check and an expiry if they have one.

```markdown
# Ledger

Harness: <Claude Code in the Claude desktop app | Codex in the ChatGPT desktop app>
Kit pin: <sha> (see kit/PIN)
Current rung: <0 | 1 | 2 | 3>

## Harness facts
- Instructions auto-load: <pass | fail, workaround> (checked YYYY-MM-DD)
- Harness-private memory: <off | ignored> (YYYY-MM-DD)
- Machine backup: <on/off, covers ~/xo?, sends data to> (YYYY-MM-DD)
- Kit update notice: every door in, read-only; last checked <date/result>, last declined pin <sha or none>
- Known gaps: <what the harness doesn't enforce>

## Gate checks
- YYYY-MM-DD protected-file built-in edit: <pass | fail: what happened>
- YYYY-MM-DD protected-file shell write: <pass | fail: what happened>
- YYYY-MM-DD outside fetch: <pass | fail: what happened>

## Capability inventory (YYYY-MM-DD)
- <exact tool name>: <what it does>. Acts outside ~/xo: <no | send | delete | ...>. Setting: <allow | ask | block | off>.

## Entries

### YYYY-MM-DD HH:MM <tz>: <short title>
- What: <what was granted, changed, or taken away, in plain words>
- Settings: <exact harness settings: file and lines, or app screen and toggle>
- Approval: "<human's words, verbatim>" (YYYY-MM-DD HH:MM <tz>)
- Reverse: <exact steps, or the commit to revert>
- Expiry: <date | none>
- Status: <active | ended YYYY-MM-DD, see entry "<title>">. Never delete an entry; a reversal is its own entry, and the original is marked ended.
- Source only: can see <what>; can go stale by <how long>; liveness: <how to check>
```

## Done when

- [ ] Every entry has all six fields (What, Settings, Approval, Reverse, Expiry, Status).
- [ ] The inventory lists every tool you can call.
- [ ] "Harness facts" and "Gate checks" reflect the latest checks.
