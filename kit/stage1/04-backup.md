# Stage 1, sitting 04: backup

For the agent. Goal: before the folder holds anything worth losing, every change can be undone and the folder survives a dead laptop. About 20 minutes.

Local-only is a complete path. A private GitHub copy is a later, separate offer (stage 2).

## 1. Local git

Git gives your human undo for every change, including your mistakes.

1. Check whether git is installed. If not, say what you'd install and how (Windows: Git for Windows, e.g. `winget install --id Git.Git -e` (https://learn.microsoft.com/en-us/windows/package-manager/winget/install); Mac: Apple's command line tools, `xcode-select --install`; Linux: the system package manager), and get a yes.
2. Propose making `~/xo` a git repository. On Codex it's `~/xo`, not `~/xo/work`; the commit steps will ask, which is expected.
3. Set a name and email for this repository only, not globally. Suggest `XO` and `xo@localhost`; nothing personal needs to go in.
4. Add a `.gitignore`: `.DS_Store`, `Thumbs.db`, `exports/`, `*.zip`, `.env`, `.env.*` (except a deliberately non-secret `.env.example`), `*.pem`, `*.key`, and credential dumps. Raw chat exports and downloads never go in history. Before every commit, review untracked files too; ignored files are not a license to leave secrets in `~/xo`.
5. Make the first commit after the secret scan (below) passes.

From now on: commit at the end of every sitting, as part of the door out (sitting 05). One yes covers the scan and the commit you've shown.

Undo, when your human wants it: find the commit, show the before and after, and propose reverting it. A revert that touches a protected rule file goes through the self-edit gate.

## 2. The machine's own backup

Git lives in the same folder; a lost laptop takes both. Check the machine's backup:

- Mac: Time Machine. `tmutil latestbackup` shows the last one (verify: needs Full Disk Access on recent macOS; if it errors, ask your human to open System Settings → General → Time Machine).
- Windows: Windows Backup or File History, or OneDrive folder backup (verify: which one this Windows version uses and where its status shows; ask your human to open Settings → Accounts → Windows backup).
- Linux: ask what they use.

Report: on or off, and whether `~/xo` is covered. If it's off, recommend turning it on and walk them through it; a yes or no goes in the ledger. Say plainly where a cloud backup sends the folder (Apple, Microsoft, and so on).

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

In `memory/MEMORY.md`, point to this canonical procedure so every door out uses the current command. Do not duplicate the pattern list in a memory file.

## Done when

- [ ] `~/xo` is a git repository with a repo-only identity and the `.gitignore` above.
- [ ] The secret scan ran clean and the first commit exists.
- [ ] The machine's backup is checked, and the ledger records on or off, what it covers, and where it sends data.
- [ ] `memory/MEMORY.md` points to this page's scan procedure; no second scan command is stored in memory.
- [ ] The handoff names the next step: sitting 05.
