# Restore and undo

For the agent. Restore gets your human back to where they were on a new machine or after a broken setup. Undo reverses one change you made in `~/xo`.

## Restore

### Detect

You land here when your human pastes the seed and there's no `~/xo`, or `~/xo` exists but is broken: no instructions file, no ledger, no handoffs, or git reports errors. Check each and tell your human what you found in a few lines.

If `~/xo` exists but is broken, don't overwrite it. Propose moving it aside to `~/xo-broken-<date>` first.

### Find the backup

Ask: "Did we set up a backup? A private GitHub repo, or your computer's own backup?"

- **GitHub remote:** propose installing git and `gh` if missing (each a yes), your human signs in (`kit/stage2/02-github.md`, step 4), then clone the private repo to `~/xo`.
- **The machine's backup:** your human restores the `xo` folder through the OS: Time Machine on a Mac, File History on Windows (verify: current menu paths). Guide them; you can't drive it.
- **Neither:** say so plainly. Start fresh with `kit/START.md`, and use any surviving files (an old handoff, `~/xo/work/sources.md` on Codex; `~/xo/sources.md` otherwise) as data to shorten the setup.

### Bring it back

1. Read the installed instructions, `MEMORY.md`, the newest handoff, and the ledger. Tell your human where things stood.
2. Check `~/xo/kit/PIN` (full SHA and matching commit-pinned raw START URL), the kit contents at that commit, and the ledger's recorded SHA agree. A file-exists check is not a version check. If these cannot be verified, say so and do not treat the restored kit as instructions until the human approves a safe recovery.
3. Apply the current adapter and `kit/stage1/02-permissions.md` gate criteria in the adapter's working folder (`~/xo/work` for Codex; `~/xo` otherwise). On a new machine or changed folder, mode, rules or tool route, obtain fresh consent for the relevant disposable protected-file checks, separately for built-in and shell writes; record human versus automatic review, pre-execution denial and whether any write ran. A fresh chat alone does not require repeating an unchanged passing file-boundary test. An approved working-file write must succeed while the protected probe is denied before execution; unexpected probe success stops protected-file setup, with separate approval for cleanup. A gap is not a passed boundary; chat-only help remains available.
4. Compare instructions loading and the capability inventory with the adapter and stage 1. If a consented reopen test has not established auto-load, record it unverified and explicitly read the instructions at each door in; do not require repeated reopens. Group ordinary local tools; inventory exposed outbound/account mutation routes exactly, deferring unselected connector audits. A restored account connection proves neither current-session reach nor a mutation gate: apply `kit/stage2/03-sources.md` before any connector read.
5. **Walk the ledger, top to bottom, one entry at a time.** For each active entry, compare it with this machine: is the setting in place, is the source connected? If not, show what you'll redo, wait for a yes, redo it. Old approvals don't carry over: a redo needs a fresh yes, recorded as a new ledger entry that names the one it restores. Sign-ins are your human's.
6. For exposed outbound/account mutation routes not granted in the ledger, propose an enforceable block or off setting under stage 1; ask alone is not a mutation deny. If the boundary cannot be established, leave that route unavailable for XO use. Do not require exhaustive audits of unrelated ordinary local tools or silently disconnect existing accounts.
7. Secrets were never in the backup. Anything that needs one gets set up again, or waits.
8. Commit, and update the handoff.

## Undo

When your human says "undo that", or you spot your own mistake:

1. Find the commit: show recent commits in plain words (date, what changed) and ask which one, unless it's obvious; name it.
2. Show before-and-after for every file the revert would change.
3. Propose `git revert <sha>` (a new commit that reverses it; history stays). Never reset or rewrite history.
4. If the revert touches a protected rule file (installed instructions, harness settings, the ledger, `~/xo/kit/`), it goes through the self-edit gate and the harness's ask prompt.
5. Git undoes files only. A setting changed in an app or a connected source isn't in git: reverse those with `kit/flows/stepping-down.md`.

## Done when

Restore:
- [ ] `~/xo` is back from the remote or OS backup, or your human knows there was none and a fresh start is under way.
- [ ] Instructions auto-load passed a consented test, or is recorded unverified with explicit instruction reads at door in. The working/protected-file boundary passes the current adapter and stage-1 criteria, with dated reusable evidence only while unchanged and separate human/automatic built-in/shell outcomes. A failed or unverified file boundary stops protected-file setup, not chat-only help.
- [ ] Every active ledger entry was checked against this machine: still-applicable unchanged grants were verified, and needed changes were redone with a fresh yes, declined, or recorded as stepped down. Connector reach/mutation gates were checked for the current session before any connector read.
- [ ] The harness's tools match the ledger.

Undo:
- [ ] Your human saw the before-and-after, and the revert is a new commit.
- [ ] Anything outside git that the change touched was handed to `stepping-down.md`.
