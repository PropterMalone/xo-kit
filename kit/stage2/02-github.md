# Stage 2: private GitHub remote

For the agent. An optional rung: a private remote for `~/xo`. It gives off-machine backup, a base for cloud harnesses later, and GitHub issues as the report-back channel. Local git plus the machine's own backup is a complete setup without it. You run git; your human never types it. Phone read/capture is a separate later option, not part of this release; do not promise it works in the current kit.

## Before offering, say plainly

- A private repo sits on Microsoft's servers (GitHub is Microsoft's). Private means hidden from the public, not from GitHub.
- Every commit you push stays in the repo's history, even after later edits.
- Undo: remove the remote here, and delete the repo on GitHub.

## Steps (each a separate yes)

1. **Account.** Existing or new. Offer a pseudonymous account: a username that isn't their name, and an email alias if they have one. Your human signs up in a browser; batch it with other browser trips.
2. **Two-factor auth.** Settings → Password and authentication (https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication). Authenticator app or passkey. Recovery codes go in their password manager, never in `~/xo`.
3. **Hide their email.** Settings → Emails → "Keep my email addresses private" (https://docs.github.com/en/account-and-profile/how-tos/email-preferences/setting-your-commit-email-address). Propose setting `user.email` in `~/xo`'s git config to the account's noreply address, which that page shows.
4. **Sign in for you.** Propose installing GitHub's CLI, `gh`, then a browser sign-in (`gh auth login --web`). A sign-in is fine; never ask your human to create an OAuth app or a developer project. Desktop-app command runners can't take interactive input, so if the login prompts, have your human run it in a terminal (verify on each door).
5. **Create the repo as private.** Propose the name and `gh repo create <name> --private --source ~/xo --remote origin` (https://cli.github.com/manual/gh_repo_create). Afterwards, confirm with `gh repo view --json visibility` that it reads PRIVATE.
6. **First push**, following the push rule below.
7. **Ledger entry** (`kit/templates/ledger.md`): account name, repo URL, visibility, what gets pushed and when (default: end of every sitting, after the commit), the harness setting that allows the push, your human's yes verbatim with timestamp, and the reversal: `git remote remove origin`, delete the repo on GitHub (Settings → General → Danger Zone (https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository)), sign `gh` out (`gh auth logout`) and revoke its access on GitHub (Settings → Applications → Authorized OAuth Apps (https://docs.github.com/en/apps/oauth-apps/using-oauth-apps/reviewing-your-authorized-oauth-apps)).

## Settings and another machine

Sync shared XO instructions and approved protection requirements, not credentials or an assumed machine boundary. Review `.claude/settings.json` before it enters history: separate machine-specific sandbox paths, writable roots, allow rules and credential-helper configuration from shared deny/approval intent. Keep that intent enforceable on every destination; do not discard protections to make the configuration portable. Use `adapters/claude-desktop.md`'s destination-host check for Claude Code before relying on synced files, including changes that take effect midchat. Native Windows is not a sandboxed Mac; WSL2 is a separate environment, not an automatic workaround.

For a new, untracked `.claude/settings.local.json`, review its exact contents and location and obtain approval for its exact exclusion if needed. Local settings can contain remembered allow rules; a present or absent local file is not startup proof. Claude Code's automatic exclusion applies when it writes the file; verify actual tracking/ignore status rather than assuming a name ending in `.local.json` stays local. Check user settings and effective app mode/policy on the destination as well.

For settings or sandbox configuration already tracked, an ignore entry does not untrack the file or remove history. Stop before the next push and propose an exact reviewed selective migration: name each file and setting to retain shared or recreate locally, show the before/after rules with paths resolved per host, retain all deny/approval intent, and verify local protections before removing their shared enforcement. Obtain separate approval for any protected edits, exact ignore entry and selective index removal while keeping the required local copy; do not ignore or remove the whole `.claude/` tree or silently trust copied settings. Existing clones and outgoing history still contain earlier versions. Review that history under the push rule; if it contains a secret, stop and use revocation/reissue and the human's separately approved history/remediation plan. Excluding or deleting the current file does not make old secrets safe (https://docs.github.com/en/get-started/git-basics/ignoring-files). Do not rewrite history automatically.

A separate private local-config backup is a separate choice, not implicitly included in the GitHub remote. Preview the exact path and files, destination/provider, access and secret exposure, exclusions and restoration plan; get specific consent before creating or uploading it. Verify that the chosen machine backup actually covers those excluded settings, or report unknown/not backed up. Do not put credentials or private local configuration in public files, issues or report drafts. A private remote is not a secret store; sign-in credentials stay in the appropriate credential/password manager, not XO history.

Restore/Undo must preserve protections and authority history. Preview only the exact intended reversal under `flows/restore.md`, retain genuine denials/stops and append approved supersession rather than deleting authority history. Restoring another host's settings is a new effective configuration, not permission to reinstate old grants: resolve current policy and run the bounded destination-host check before dependent work. An unavailable safe route remains blocked/unverified; chat-only work can finish without a push or a false saved-state claim.

## Before every push

1. The stage-1 staged-diff scan does **not** cover earlier commits. Before the first push, inspect **all commits** that would leave this machine for names, private data, and secrets, not only the current diff. Before later pushes, inspect every commit since the remote's tracked tip; if the tracked tip or the scope is uncertain, stop and do the full-history inspection again. A regex scan helps but cannot certify privacy. Show your human the outgoing file list and anything suspicious (mask values). **A hit or uncertain history stops the push.** If a real secret already reached GitHub, walk them through revoking and reissuing it.
2. Confirm the remote still reads PRIVATE. If not, stop and tell your human.
3. Show exactly which commits and files will be sent. Push only on an action-specific yes after that preview.

## Never public without an explicit, specific yes

Making the memory repo public is publishing. Do it only when your human names this repo and asks for it to be public, after you've shown what the full history contains and said that anyone can copy it once it's out. Recommend a fresh public repo holding only chosen files instead. A general "sure" or "go ahead" doesn't count.

## Report-back issues

Issues on the kit's repo are public.

1. Draft the issue in a file, not in GitHub.
2. Scrub it: names, emails, usernames, folder paths containing their name, employer, account IDs, message or document content, anything from a connected source.
3. Show your human the entire draft for review. Make their requested changes and show the full final text again. Your human chooses whether to copy and file it; do not send, upload, or publish it yourself.
4. No GitHub account? Use the channel the front page names.

## Done when

- [ ] Your human heard the Microsoft disclosure before saying yes.
- [ ] Two-factor auth is on, and recovery codes are outside `~/xo`.
- [ ] `gh repo view` reads PRIVATE, and the first push passed the secret scan.
- [ ] The ledger entry records the account, repo, push cadence, verbatim yes, and reversal.
- [ ] Shared protection intent survives any approved local-settings separation. Exact tracking/exclusions and outgoing history were reviewed; excluded local configuration has separately chosen backup coverage or honest unknown/not-backed-up status. A destination-host check passed for dependent work, or that work remains blocked/unverified with unsaved results named.
