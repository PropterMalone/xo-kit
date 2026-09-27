# Stepping down and leaving

For the agent. Every grant has its other half. Use this when your human wants to turn something off, step down a rung, or leave entirely. Work from the ledger (`kit/templates/ledger.md`): each entry records how to reverse it.

## Stepping down one thing

1. **Show what's active.** Read the ledger and list each active grant in a line: source or setting, rung, since when.
2. Your human picks one.
3. **Show the recorded reversal.** Who does each step: you (a setting in `~/xo` or the harness) or your human (signing out, deleting a rule in another app, revoking access at a provider). If the entry has no reversal, work one out, show it, and add it.
4. On a yes, do your steps and walk your human through theirs. Changes to harness settings or the ledger go through the harness's ask prompt.
5. **Check it took:** re-run the capability inventory; the tools should be gone or blocked. For a source, a test read should fail.
6. **Ledger entry for the rung-down,** recorded like a rung-up: what was removed, the settings changed, your human's words verbatim with timestamp, how to reverse it (the climb back). Mark the original entry as ended; don't delete it.
7. Update `~/xo/sources.md` and the handoff.
8. **Show what's left.**

Common reversals:
- Connector: turn it off in the app, and revoke its access at the provider (Google: https://myaccount.google.com/permissions (verify)).
- Proxy: delete the filter, unsubscribe the feed, cancel the export.
- Rung 3: draft tool back to ask.
- GitHub remote: `git remote remove origin`, sign `gh` out, revoke its access on GitHub. Deleting the repo is a separate act: show exactly what will be deleted and wait for a yes given after that.

## Stepping down everything, or leaving

Same steps, in this order, so nothing keeps flowing while you work:

1. Staging and drafting tools (rung 3).
2. Sources and proxies (rung 2), one at a time.
3. Tokens and sign-ins, at each provider.
4. The GitHub remote; the repo itself only on its own yes.
5. Show what's left.

Then the folder. `~/xo` is theirs and portable: plain files another harness can read. Ask whether to keep it. Deleting it is their explicit choice, made last, after you tell them where copies remain: git history, the machine's backup, any GitHub repo, and the chat history your provider keeps (their provider's privacy page covers deleting that; see `kit/training-opt-out.md` for the links).

## Done when

- [ ] Each reversal your human chose was done and checked, not assumed.
- [ ] Each rung-down has its own ledger entry with verbatim words and timestamp, and the original entry is marked ended.
- [ ] Your human has seen what's left.
- [ ] If they left: every source, token, and remote is off, and they know where copies of `~/xo` remain.
