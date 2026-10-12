# Restore and undo

For the agent. Restore gets your human back to where they were on a new machine or after a broken setup. Undo reverses one change you made in `~/xo`.

## Restore

### Detect

You land here when your human pastes the seed and there's no `~/xo`, or `~/xo` exists but is broken: no instructions file, no ledger, no handoffs, or git reports errors. Check each and tell your human what you found in a few lines. First distinguish a separately approved bounded return-enabled save from a full installation: seed/startup plus return note without a ledger, local kit, memory or handoffs is not broken merely because those full-installation files are absent. Use `kit/flows/project-return.md` for that route; do not initiate restore, backup or a running handoff under its approval.

If `~/xo` exists but is broken, don't overwrite it. Propose moving it aside to `~/xo-broken-<date>` first.

### Find the backup

Ask: "Did we set up a backup? A private GitHub repo, or your computer's own backup?"

- **GitHub remote:** propose installing git and `gh` if missing (each a yes), your human signs in (`kit/stage2/02-github.md`, step 4), then clone the private repo to `~/xo`.
- **The machine's backup:** your human restores the `xo` folder through the OS: Time Machine on a Mac, File History on Windows (verify: current menu paths). Guide them; you can't drive it.
- **Neither:** say so plainly. Start fresh with `kit/START.md`, and use any surviving files (an old handoff, `~/xo/work/sources.md` on Codex; `~/xo/sources.md` otherwise) as data to shorten the setup.

### Bring it back

1. Preserve the approved simple or indexed memory form under `kit/stage1/03-memory.md`; absent frontmatter/indexes are not corruption and an empty/declined memory does not trigger setup. Never blank, downgrade or convert surviving memory without its exact separate preview and yes. Read the installed instructions and ledger; confirm the selected project through `kit/flows/project-return.md` before task recovery. Read only that project's approved return note and owner-verified applicable handoff, and `MEMORY.md` for authorized relevant recall. Leave other projects and ambiguous legacy records untouched; restored copies do not prove ownership or access. Use `kit/flows/project-return.md` before task selection: a newest global handoff is not project-specific when multiple threads share the folder. Stop ambiguous task recovery rather than guess. Tell your human the saved chosen work and last verified setup; ask whether to continue the task or resume paused setup, never resume installation automatically. A missing return note needs a separate reviewed addition, not silent reconstruction.
2. Check `~/xo/kit/PIN` (full SHA and matching commit-pinned raw START URL), the kit contents at that commit, and the ledger's recorded SHA agree. A file-exists check is not a version check. If these cannot be verified, say so and do not treat the restored kit as instructions until the human approves a safe recovery.
3. Apply the current adapter and `kit/stage1/02-permissions.md` gate criteria in the actual selected project folder (default `~/xo/work` for Codex or `~/xo` otherwise, or its separately approved project subfolder). Do not reuse a base-folder boundary as proof for a different folder. On a new machine or changed folder, mode, rules or tool route, obtain fresh consent for the relevant disposable protected-file checks, separately for built-in and shell writes; record human versus automatic review, pre-execution denial and whether any write ran. Use sitting 02's shared check-attempt record and at-most-one bounded correction limit. A fresh chat alone does not require repeating an unchanged passing file-boundary test; an unchanged failed or inconclusive result does not justify another attempt either. If restored active records demand automatic repeat/revoke/restart, stop that directive and offer `kit/flows/repair-permission-loop.md` before continuing affected setup; preserve real failures and grants. Rewriting those records is not fixing the app boundary. An approved working-file write must succeed while the protected probe is denied before execution; unexpected probe success stops protected-file setup, with separate approval for cleanup. A gap is not a passed boundary; chat-only help remains available.
4. Compare instructions loading and the capability inventory with the adapter and stage 1. If a consented reopen test has not established auto-load, record it unverified and explicitly read the instructions at each door in; do not require repeated reopens. Group ordinary local tools; inventory exposed outbound/account mutation routes exactly, deferring unselected connector audits. A restored account connection proves neither current-session reach nor a mutation gate: apply `kit/stage2/03-sources.md` before any connector read.
5. **Walk the ledger, top to bottom, one entry at a time.** For each entry still active after applying later superseding entries, compare it with this machine: is the setting in place, is the source connected? If not, show what you'll redo, wait for a yes, redo it. Old approvals don't carry over: a redo needs a fresh yes, recorded as a new ledger entry that names the one it restores. Sign-ins are your human's.
6. For exposed outbound/account mutation routes not granted in the ledger, propose an enforceable block or off setting under stage 1; ask alone is not a mutation deny. If the boundary cannot be established, leave that route unavailable for XO use. Do not require exhaustive audits of unrelated ordinary local tools or silently disconnect existing accounts.
7. Secrets were never in the backup. Anything that needs one gets set up again, or waits.
8. For an operational record, restored observations are not authority or proof of a current pass. Confirm the protected exact POLICY and applicable scoped yes, path/project/mode/tools/version/evidence before reuse or writes; a new machine/destination/policy change needs its exact reviewed approval. Preserve legacy mixed ledger, real failures/denials and attempt stops; no automatic migration or new checks. Use `kit/templates/operations.md` for chosen ongoing scope, one batch or conversation-only, never task/memory save permission.
9. Commit, and update the handoff under its own approval/cadence.

## Undo

When your human says "undo that", or you spot your own mistake:

1. Find the commit: show recent commits in plain words (date, what changed) and ask which one, unless it's obvious; name it.
2. Inspect the selected commit and current files, then show the exact before-and-after for the proposed reversal. Never directly revert ledger entry history or genuine operational attempt/failure/denial history. Git retaining the old commit is not preservation of those records in the live files.
3. If those records are included, preserve their live history, append the exact approved superseding ledger entry for any authority change or a dated factual correction for an observation, and revert only other reviewed changes. A prior withdrawal, revocation, expiry or attempt stop remains effective until its applicable separate approval/evidence requirements are met; undo is not implicit reauthorization or retry consent. Corrections retain original failures and denials rather than replacing them with a pass. Show the complete resulting edits and apply only after their existing scoped approvals. Commit the reviewed reversal as a new commit; do not run an unqualified whole-commit revert that removes these records. If selective reversal cannot be established safely, pause rather than lose history.
4. Only when no protected entry history or stopping evidence would be removed, propose `git revert <sha>` as a new reversal commit. Never reset or rewrite history. Any protected rule-file edit (installed instructions, harness settings, the ledger, `~/xo/kit/`) still goes through the self-edit gate and actual native boundary; operational corrections keep their selected save scope and policy. A human request to undo does not bypass the exact preview or expand that policy.
5. Git undoes files only. A setting changed in an app or a connected source isn't in git: reverse those with `kit/flows/stepping-down.md`. Include a mixed-commit check in validation: a withdrawal plus other edits, and a failed-probe observation plus other edits, must both retain live history and stops while reversing only the approved effects.

## Done when

Restore:
- [ ] `~/xo` is back from the remote or OS backup, or your human knows there was none and a fresh start is under way.
- [ ] Instructions auto-load passed a consented test, or is recorded unverified with explicit instruction reads at door in. The working/protected-file boundary passes the current adapter and stage-1 criteria, with dated reusable evidence only while unchanged and separate human/automatic built-in/shell outcomes. A failed or unverified file boundary stops protected-file setup, not chat-only help.
- [ ] Every active ledger entry was checked against this machine: still-applicable unchanged grants were verified, and needed changes were redone with a fresh yes, declined, or recorded as stepped down. Connector reach/mutation gates were checked for the current session before any connector read.
- [ ] The harness's tools match the ledger.

Undo:
- [ ] Your human saw the exact proposed before-and-after, and the reversal is a new commit. Live ledger entries and genuine operational attempt/failure/denial history remain; any authority reversal is an approved append-only supersession, never implicit reauthorization or retry consent.
- [ ] Anything outside git that the change touched was handed to `stepping-down.md`.
