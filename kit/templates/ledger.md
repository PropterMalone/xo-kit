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
Base rung: <0 | 1> (source-specific rung 2/3 grants live in entries below; do not infer one global source grant)

## Harness facts
- Actual project folder: <path shown by the fresh session, not just the intended path> (checked YYYY-MM-DD)
- Active permission mode: <mode shown in that session | unverified> (checked YYYY-MM-DD)
- Instructions auto-load after real reopen: <pass | fail | unverified; evidence and explicit-read workaround> (checked YYYY-MM-DD)
- Fresh-task boundary: <work-file write pass/fail/unverified; protected-parent pre-execution prompt/deny pass/fail/unverified; setup-time approval not counted> (checked YYYY-MM-DD)
- Harness-private memory: <off | ignored | unverified> (YYYY-MM-DD)
- Machine backup: <on/off, covers ~/xo?, sends data to> (YYYY-MM-DD)
- Kit update check: <every door in | human-chosen cadence and their quoted approval>; last attempted <date/result: checked | not checked | inconclusive>, last declined pin <sha or none>
- Known gaps: <what the harness doesn't enforce>

## Gate checks
- YYYY-MM-DD protected-file built-in edit: <pass | fail | unverified; real pre-execution prompt and human deny? executed? ledger unchanged?>
- YYYY-MM-DD protected-file shell write: <pass | fail | unverified; real pre-execution prompt and human deny? executed? ledger unchanged?>
- YYYY-MM-DD outside fetch: <pass | fail | unverified; pre-execution prompt and human deny? fetched?>

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
- Source only: human-facing view <actual item | fixed signal | pointer/check-due to native view | none>; XO/model-provider visibility <exact fields or none>; retained in source <what remains there, not copied>; class <personal | work | client | overlapping | unresolved>; applicable authorities <employer, each client/project and owner, or unresolved>; policy basis/authorized approver <who permitted which route, recipient and exact fields, or unresolved — no egress until resolved>; human scope approval <source, fields, purpose, time/history range and quoted yes>; app/session <where connected and where tested>; observed reads <metadata | content | unverified>; history scope <approved range | none>; can see <what>; can go stale by <how long>; liveness <how checked and what result means>
- Direct source only: last successful read/check <time or never>; newest item observed <item time/identifier or unknown, separate from check time>; expected cadence/max age <duration or variable with basis>; latest liveness result <healthy | stale | failed | no new items verified | inconclusive, with check time/error>; expiry <date or none>
- Connector boundary: inventory checked <date/session>; mutation tools <exact names and settings>; pre-execution deny <observed outcome or unverified, no real send/delete>; after reopen <recheck date or pending>
- Proxy only: crossing <none/work-native | fixed event | coarse availability/count | selected content | broader authorized content>; permitted fields and recipient <exact scope>; max delay <duration>; last source check <time/result or unknown>; last destination receipt <time/item identifier or unknown, independent of source check, or not applicable to work-native>; liveness method <independent heartbeat with deadline | authorized source-side human check due at time | none, unknown/manual check due>; failure alert <where and last seen or unavailable>; held events <count inside source boundary or not applicable>; recovery/backfill <approved scope or none>. A one-time receipt does not prove continuing health.
```

## Done when

- [ ] Every entry has the six base fields (What, Settings, Approval, Reverse, Expiry, Status); source, connector, and proxy entries also fill their applicable conditional fields, using `unknown` or `not applicable` honestly.
- [ ] The inventory lists every tool you can call.
- [ ] "Harness facts" and "Gate checks" reflect the latest checks.
