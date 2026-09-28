# XO patch notes

Published builds are pinned to full commit SHAs. A note is not permission to update an installed kit: review rule changes and approve separately. Connector reach and mutation controls remain unverified across both desktop apps; an account being connected is not proof of a safe XO read.

## 2026-09-28 — first-use connections and intake (new pin in GitHub Release)

**Why:** Testers are connecting mail and calendars before XO has guided them, while the opening setup asks for decisions before it shows what they lead to. This version gives XO a short first-use route and makes the opening conversation about the person's own goal. It does not certify connector controls or make new connections automatically.

- **[rules] Intake:** XO asks what the person wants help with and what would change if it worked, optionally asks what slips, then gives a short map from setup to a useful first task. The person may skip questions. XO must not search unrelated projects, files, or old chats to fill gaps; it must name a useful source and ask before looking. Existing approval and app permission gates remain.
- **[rules] Sources:** “Check my connections” or an ordinary question about mail, messages, or a calendar opens one-source guidance even before the full stage-2 tour. It works with accounts already connected: XO checks what its *current Code/Codex session* can reach rather than assuming a chat-side connection works, and does not tell the person to disconnect. It asks which source and what task matters now, then proposes one named item, event, or bounded range. A yes to that specific read covers the selected contents, not unrelated history, standing access, or sending.
- **[rules] Boundaries:** Before a connector read, XO inventories the tools in the working session and requires an enforceable block on send/reply/forward/delete and other out-of-rung mutations. A model's promise not to send, a connected account, or a missing tool in one list does not establish the block. If the gate is unverified, XO offers a human-selected paste or genuinely read-only route instead. Work/client material still requires the applicable authority before it crosses to a personal provider. Gate checks are unattended with consent; no real message or event is sent or deleted to test a deny.
- **[rules] Less setup debt:** The stage-2 tour records only offers actually made; stopping after one useful step does not create a yes/no/later decision for every optional feature. Autoload checks no longer use the kit SHA or a phrase the agent already disclosed. A fresh harmless phrase privately added to the instruction file after closing the prior chat can test the new session; skipping it records auto-load unverified with explicit file reads instead.
- **Pages and README:** The welcome page states its ADHD starting assumption in the author's own words: this is a loose kit, not a straitjacket; XO makes assertions to fill a presumed structure gap, but people have explicit pre-blessing to do it their way and build around themselves. Tell us what works. The starting action is now “open Code/Codex and paste the message,” not “install a harness.” The doors point already-connected testers to “check my connections”; the public README explains the test in ordinary language. The untried local-model door no longer promises that an unspecified setup sends nothing to a provider.

**For an existing XO:** Review the new rules and compare them to your installed kit before deciding to update; do not replace the installed folder just because this release exists. A first-generation install may check GitHub Releases only at the cadence its human chose; newer ones check the published door-page pin. Ask XO to show the release notes and the rule diff, then approve or defer the update. No kit auto-installs. After an approved update, “check my connections” is available, but a connector read still waits on a scoped yes and the actual-session gate.

**Still unverified:** A complete clean-account installation, connector reach and mechanical send denies on both personal-plan desktop apps, historical reach, and any specific user's already-connected account. Report each as pass/fail/unverified from unattended tester evidence; do not describe this guidance as a passed integration.

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
