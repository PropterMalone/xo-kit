# Stage 1, sitting 04: backup

For the agent. Goal: establish reviewed history for committed changes and check whether a separate backup covers the folder. Uncommitted work and an unknown or deferred backup remain at risk; do not claim either is protected. About 20 minutes.

Local-only is a complete path. A private GitHub copy is a later, separate offer (stage 2).

## 1. Local git

Git gives your human reviewed history for committed changes, including your mistakes. Uncommitted edits have no guaranteed Git undo point; inspect and preview their actual state before proposing a reversal. A failed commit creates no new history point: report the failure and unsaved history limit, preserve the working files, and do not claim backup or retry without the applicable approval.

1. Check whether git is installed. If not, say what you'd install and how (Windows: Git for Windows, e.g. `winget install --id Git.Git -e` (https://learn.microsoft.com/en-us/windows/package-manager/winget/install); Mac: Apple's command line tools, `xcode-select --install`; Linux: the system package manager), and get a yes.
2. Reuse the approved root established before first Codex return after checking it is still exactly `~/xo`, with no nested/worktree or unrelated ancestor conflict (`adapters/codex-app.md`). Do not run init again. If no root exists, inspect ownership/layout and obtain separate approval before making `~/xo` a repository; an unfamiliar existing repository stops that change. On Codex it's `~/xo`, not `~/xo/work`; root creation did not grant commit, backup or identity approval. The commit steps will ask, which is expected.
3. Set a name and email for this repository only, not globally. Suggest `XO` and `xo@localhost`; nothing personal needs to go in.
4. Add a `.gitignore`: `.DS_Store`, `Thumbs.db`, `exports/`, `*.zip`, `.env`, `.env.*` (except a deliberately non-secret `.env.example`), `*.pem`, `*.key`, and credential dumps. Raw chat exports and downloads never go in history. Before every commit, review untracked files too; ignored files are not a license to leave secrets in `~/xo`.
5. Make the first commit after the secret scan (below) passes.

From now on: offer a commit at the door out (sitting 05), separately selectable as yes, no or later; closing does not require a commit. On commit no or later, do not stage or commit; continue independent approved memory and handoff saves when safe under their own save gates. Leave any declined or deferred private upload undone. Report only verified saves and the actual uncommitted/not-uploaded limits: uncommitted edits have no guaranteed Git undo point and are not backed up by a private Git upload. One yes covers only the scan and exact commit you've shown, not a private upload.

Undo, when your human wants it: follow `flows/restore.md`'s history-preserving Undo procedure. Find the commit and show the exact proposed reversal. Preserve live ledger entry history and genuine operational failures/denials/attempt stops; append approved supersession or factual correction instead of deleting them with a whole-commit revert. Reverse only the other reviewed effects, with the self-edit gate for protected changes and the existing operational-save scope.

## 2. The machine's own backup

Git lives in the same folder; a lost laptop takes both. Check the machine's backup:

- Mac: Time Machine. `tmutil latestbackup` shows the last one (verify: needs Full Disk Access on recent macOS; if it errors, ask your human to open System Settings → General → Time Machine).
- Windows: Windows Backup or File History, or OneDrive folder backup (verify: which one this Windows version uses and where its status shows; ask your human to open Settings → Accounts → Windows backup).
- Linux: ask what they use.

Report: on, off, or unknown, and whether `~/xo` is covered. If it's off or unknown, offer to help turn it on or check coverage once; if your human defers, record unknown/not backed up and a future reminder, then continue local setup without asking again this sitting. Preview any yes, no, or later ledger entry under the protected save gate; respect an unsaved answer without more saving prompts. Actual backup status, coverage and check time go in the operational record under `templates/operations.md`'s selected save policy, or conversation; backup configuration/disclosure policy stays protected. Say plainly where a cloud backup sends the folder (Apple, Microsoft, and so on).

## 3. Secret scan

Nothing secret belongs in the folder, and a scan catches some slips before they become history. This page is the canonical scan procedure; at every door out follow it rather than copying a separate command into memory. Before **every** commit, first show the file list and stage exactly the approved files, then scan the staged diff below. Never stage `~/xo/.env` or credentials. The staged diff is a read-only git operation, but this grep pipeline is a shell command: under sitting 02's default, ask for harness approval to run it unless that exact safe route has been separately configured and recorded. Do not quietly widen the shell allowlist to automate commits. A local commit doesn't leave the machine, but history travels with any later push. A hit or scan error stops the commit; a clean scan is not proof that the files contain no private information.

```sh
# Run in Git Bash or another Bash shell; inspect both pipeline statuses.
git -C ~/xo diff --cached -U0 | grep -Ei \
  -e '-----BEGIN [A-Z ]*PRIVATE KEY-----' \
  -e 'AKIA[0-9A-Z]{16}' \
  -e '(^|[^A-Za-z0-9])(sk|rk)-[A-Za-z0-9_-]{20,}' \
  -e 'gh[pousr]_[A-Za-z0-9]{30,}' \
  -e 'github_pat_[A-Za-z0-9_]{20,}' \
  -e 'xox[abprs]-[A-Za-z0-9-]{10,}' \
  -e 'AIza[0-9A-Za-z_-]{35}' \
  -e '(password|passwd|secret|api[_-]?key|token)[[:space:]]*[:=][[:space:]]*[^[:space:]]{6,}' \
  > /dev/null
scan_status=("${PIPESTATUS[@]}")
diff_status=${scan_status[0]} grep_status=${scan_status[1]}
if [ "$diff_status" -ne 0 ] || [ "$grep_status" -gt 1 ]; then printf 'STOP: scan error\n'; exit 2
elif [ "$grep_status" -eq 0 ]; then printf 'STOP: possible secret in staged diff\n'; exit 1
else printf 'No pattern matched; review staged files before committing\n'; fi
```

- The printed no-match result means this pattern check completed without a match; a STOP result blocks the commit. The command discards matching text so no secret value enters the chat/tool log. If it flags, inspect the staged file list and diff locally without pasting secret values, identify the file and line for your human with the value masked, and propose removing it. If it was real, walk them through revoking and reissuing it: once written down, treat it as exposed.
- On Windows, run it in Git Bash, which ships with Git for Windows. If shell approval is denied, do not treat an unrun scan as clean or commit.
- Before the first push anywhere (stage 2), scan the whole outgoing history too, with the same patterns and output suppressed; get separate approval for the push and do not treat a clean staged diff as a clean history.
- The last pattern can catch ordinary prose ("password: in the manager"). False alarms are cheap; show them and move on.
- This is a v0 net for common key shapes, not a guarantee. The rule that stops secrets is not writing them down.

If memory saving is chosen, preview a pointer in the approved simple or indexed `memory/MEMORY.md` to this canonical procedure, under `03-memory.md`'s separate memory-save approval. Do not require a memory file or re-offer a declined save to complete backup; the installed doors still refer to this procedure. Do not duplicate the pattern list in a memory file or treat a stored pointer as protected instruction authority.

## Done when

- [ ] `~/xo` is a git repository with a repo-only identity and the `.gitignore` above.
- [ ] The secret scan ran clean and the first commit exists.
- [ ] The machine's backup status and coverage are checked or honestly marked unknown/deferred in the operational record under its selected save policy, or conversation, with the data destination if known; a deferral does not silently become a verified backup or repeatedly interrupt setup.
- [ ] If the memory pointer was chosen, its exact approved text/path points to this page's scan procedure in the current simple or indexed form; otherwise no memory save was forced. No second scan command is stored in memory.
- [ ] The handoff names the next step: sitting 05.
