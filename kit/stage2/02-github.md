# Stage 2: private GitHub remote

For the agent. An optional rung: a private remote for `~/xo`. It gives off-machine backup, reading memory on a phone, a base for cloud harnesses later, and GitHub issues as the report-back channel. Local git plus the machine's own backup is a complete setup without it. You run git; your human never types it.

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
3. Show your human the exact text that will be filed. File only on a yes to that text.
4. No GitHub account? Use the channel the front page names.

## Done when

- [ ] Your human heard the Microsoft disclosure before saying yes.
- [ ] Two-factor auth is on, and recovery codes are outside `~/xo`.
- [ ] `gh repo view` reads PRIVATE, and the first push passed the secret scan.
- [ ] The ledger entry records the account, repo, push cadence, verbatim yes, and reversal.
