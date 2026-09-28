# XO patch notes

Published builds are pinned to full commit SHAs. A note is not permission to update an installed kit: review rule changes and approve separately. Source connections remain unverified in the desktop apps; keep mail and calendar connectors off during first setup.

## 2026-09-28 — feedback revision

- **[rules]** Codex setup separates parent-folder creation from a fresh working task's protections, no longer assumes `/status` shows writable roots, and checks the actual existing folder rather than a project name. The protected parent and auto-load still need a check in each app.
- **[rules]** Claude setup checks Manual mode after reopening, distinguishes Windows PowerShell from Bash, and does not treat visible tools as proof of a connected account.
- **[rules]** If an OpenAI privacy control is absent from the app, XO records it as unverified and asks whether to continue; it does not claim that control was switched off.
- **[rules]** New installs check published door-page pins at door-in, show patch notes and rule-relevant diffs, and never install a new kit without a separate yes. First-build installs use an optional GitHub Releases check instead; it may not run or be able to fetch the release.
- Public door pages distinguish training opt-out from retention, keep personal-source connectors off during first setup, and tell testers not to buy a subscription solely for this exploratory run.
- This is **untried as a full clean-account install**. Mail/calendar connection and send-tool gates remain unverified; those are for a later test, not this revision.

## 2026-09-27 — first exploratory build

- Initial pinned kit for a small unattended test. Not a clean-account certification.
- The installed update flow checks GitHub Releases at the frequency chosen by the tester, not the door-page pins.
