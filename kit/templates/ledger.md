# Template: permissions ledger

For the agent. Copy the block below to `~/xo/ledger.md` in sitting 01 only for chosen full installation. It's a protected rule file: every edit requires the before-and-after chat yes in `templates/instructions.md`. During initial setup, the harness boundary may not yet be installed; after sitting 02, verify both protected built-in and shell write routes reach a native pre-execution gate under the active mode. Record observed gate evidence in the operational record under `templates/operations.md`'s selected save policy, or in conversation; do not promise a second lock. Do not repeat passing disposable tests merely because a chat reopened.

The ledger holds authority: actual grants/revocations, rules/settings, scope/expiry, declines and approval history. Compare it to what the harness actually allows; discrepancies require a flag and the most restrictive applicable boundary, not inferred permission from technical reach. Ordinary facts/check attempts/catalog inventory/status/liveness timestamps/update results belong in the operational record or conversation, never as new authority. Leave existing mixed ledgers untouched; adopt observations only by the exact consented copy procedure in `templates/operations.md`.

Rules:
- One entry per grant, change, decline or step down. Never edit an old entry; add a new one that supersedes it.
- The approval is your human's words, quoted exactly, with a timestamp. Not a paraphrase. A refusal of saving is respected without another log prompt; unsaved answers still hold in this conversation.
- The reversal is concrete enough that a different agent could do it.
- Source authority, work/client classifications, permitted disclosure, settings, expected cadence/liveness method and expiry remain here. Actual check/receipt times and results do not.
- A bounded operational-write POLICY is itself protected authority: include Destination, schema, Allowed fields, Scope, Cadence and Reverse from `templates/operations.md`, with the six base fields below. Require exact before-and-after plus yes for any policy change; an observation cannot alter the policy. No default policy is installed by this blank template.

```markdown
# Ledger

Harness: <Claude Code in the Claude desktop app | Codex in the ChatGPT desktop app>
Kit pin: <sha> (see kit/PIN)
Base rung: <0 | 1> (source-specific rung 2/3 grants live in entries below; do not infer one global source grant)

## Entries

### YYYY-MM-DD HH:MM <tz>: <short title>
- What: <what was granted, changed, declined, or taken away, in plain words; include POLICY for a chosen operational-write policy>
- Settings: <exact harness settings: file and lines, or app screen and toggle; no new setting if not needed>
- Approval: "<human's words, verbatim>" (YYYY-MM-DD HH:MM <tz>)
- Reverse: <exact steps, or the commit to revert>
- Expiry: <date | none>
- Status: <active | ends/supersedes prior entry "<title>" YYYY-MM-DD>. Never edit or delete an old entry; a reversal is a new entry that names the original and ends its effect. Determine current status using later superseding entries.
- Source only: human-facing view <actual item | fixed signal | pointer/check-due to native view | none>; XO/model-provider visibility <exact permitted fields or none>; retained in source <what remains there, not copied>; class <personal | work | client | overlapping | unresolved>; applicable authorities <employer, each client/project and owner, or unresolved>; policy basis/authorized approver <who permitted which route, recipient and exact fields, or unresolved — no egress until resolved>; human scope approval <source, fields, purpose, time/history range and quoted yes>; app/route scope <where permission applies>; history scope <approved range | none>; can see <permitted scope>; can go stale by <how long>; liveness <approved check method and what its result means>
- Direct source only: expected cadence/max age <duration or variable with basis chosen by human>; health-read scope <separately approved fields/frequency/expiry | none>; expiry <date or none>. Actual checks, newest-item times and technical reach are observations, not grants.
- Connector boundary: mutation tools <exact configured names and settings>; required pre-execution deny <current-session requirement, not a saved pass>. Actual inventory/gate/reopen evidence lives in the operational record or conversation.
- Proxy only: crossing <none/work-native | fixed event | coarse availability/count | selected content | broader authorized content>; permitted fields and recipient <exact scope>; max delay <duration>; liveness method <authorized independent heartbeat/deadline | source-side human confirmation plan/cadence | none>; failure alert <authorized destination or unavailable>; recovery/backfill <approved scope or none>; deployer <authorized owner>. Actual check/receipt/failure/held-event observations are not authorization.
- POLICY only: Destination <exact absolute canonical file>; schema <exact observation fields>; Allowed fields <selected factual kinds/fields>; Scope <confirmed project or exact shared setup scope>; Cadence <results of already authorized work only, no new checks or schedule>; Reverse <immediate conversational withdrawal, separately approved durable supersession>. Use the full exact policy preview from templates/operations.md.
```

## Done when

- [ ] Every entry has the six base fields (What, Settings, Approval, Reverse, Expiry, Status); source, connector, proxy and chosen POLICY entries fill their applicable conditional fields honestly.
- [ ] Grants, declines, revocations, approval history, source authority/settings and chosen cadence remain append-only protected authority. Operational observations are separately saved only under their selected consent, or remain in conversation.
- [ ] Live harness discrepancies and missing evidence are named, not converted into permission; existing legacy history remains intact.
