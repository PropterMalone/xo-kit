# XO patch notes

Published builds are pinned to full commit SHAs. A note is not permission to update an installed kit: review rule changes and approve separately. Source connections remain unverified in the desktop apps; keep mail and calendar connectors off during first setup.

## 2026-09-28 — connector guidance and safety revision

Supersedes the 2026-09-28 feedback revision's kit pin (the build pinned by these pages before this one).

- **[rules]** Every source is classified personal / employer-managed / client-governed before any connection, per account, tenant, and project; rules can overlap and conflict. Unknown or conflicting authority means no crossing — not even an event-only signal — until the authorized owner clarifies.
- **[rules]** Connecting a source no longer grants standing reads. Each read needs a separately approved exact scope (source, fields, purpose, time range) or stays on ask. Historical reach is checked or marked unknown; it is never inferred.
- **[rules]** Proxies for managed sources rank by what crosses first: work-native, fixed signal, coarse availability, selected fields, broader content only where authorized. Liveness separates last successful check, newest item, and destination receipt; silent routes report `unknown/manual check due`, never "nothing new." A work-native reminder is a valid route, not a failure.
- **[rules]** Routine memory writes are previewed and approved before writing. Old-chat answers and exports are screened for employer/client/project material before any provider sees them.
- **[rules]** Setup cannot pass with send-type tools enabled by override; protected-file gate tests are real pre-execution requests the human denies; Codex restore reopens in `~/xo/work` and retests the protected parent; kit updates move kit and PIN together and verify ancestry by `git merge-base`.
- **[rules]** Three similar failures trigger an architecture review, not a fourth retry; a single re-entry blocker gets a safe pause immediately; a security denial stops on first occurrence.
- Still unverified: clean-account install, connector read/send gates, historical reach, feedback forwarding. Keep mail and calendar connectors off during first setup. First-generation installs keep their optional GitHub Releases check.

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
