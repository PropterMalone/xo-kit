# XO patch notes

Published builds are pinned to full commit SHAs. A note is not permission to update an installed kit: review rule changes and approve separately. Connector reach and mutation controls remain unverified across both desktop apps; an account being connected is not proof of a safe XO read. The new kit commit SHA cannot be embedded in its own commit; the matching GitHub Release notes identify its full SHA and the previous pin.

## 2026-09-29 — first-win clarity, checkup and update recovery (new pin in GitHub Release)

Previous public kit: `38f4a1936240896fa975778fff18f122dbfebda6`. The full new kit SHA and release target are in the matching GitHub Release notes. Publication, not the date of this note alone, makes an update available.

- **[rules]** The first sitting offers a goal-tied, optional in-chat first win after the privacy discussion and before any folder or connector step. It uses only what the human provides in chat. Stage 1 offers it once if skipped; neither route treats an unfinished setup as complete.
- **[rules]** The update flow checks for both local `kit/PIN` and `kit/START.md` before comparing pins. Missing vendoring leads back to approved setup and its write diagnosis, not a manual edit of `AGENTS.md` or a claimed successful update. This addresses a tester-reported failure mode, not a verified app fix.
- **[rules]** An optional read-only checkup audits the human's own setup, not XO conformity. It labels evidence and limits; delegated review does not automatically mean isolation, and account-content reads or autoload tests are separate consented tasks.
- A dedicated copy-to-email proxy option discloses destination access and retention. The doors clarify the short start, first-use privacy order and tester-report address; the front page links to the checkup at the new kit pin after rendering. No connector permission or fresh clean-app install was verified by these edits.

**Existing installs:** compare the full rule-relevant diff from your installed PIN to the new kit SHA in the published Release notes, then review before updating. The old generation may check Releases at a chosen cadence, and newer kits may check door pins. Neither auto-installs. An installation missing its local kit/PIN must finish vendoring rather than using the update flow.

## 2026-09-28 — first-use connections and goal-led intake (public kit SHA 38f4a1936240896fa975778fff18f122dbfebda6; Pages 6f8166c7dac27dc676c42c2096d025bebb8c1f00; Release xo-intake-connections-2026-09-28; previous public SHA cfbd761ec4199c7cabfa53dea64e659d54375c18)

- **[rules]** First sitting asks what the human wants help with and what success would change; people with specific goals can opt into a quick three-question goals pass before the short setup-to-use map. It does not browse other projects or old chats to profile them; opening questions can be skipped.
- **[rules]** “Check my connections” opens a one-source, one-use path for mail, messages, and calendars, including accounts already connected. A bounded personal read needs one scoped yes and a verified working-session mutation boundary; work/client material follows its own authority. The detailed gate remains available when needed, rather than being a questionnaire for every tester. No connector gate has been verified by a live tester in both apps; do not claim an unverified send deny works.
- The welcome page uses the author's own ADHD starting assumption and explicit pre-blessing to build it your way, then asks what works; the doors and public README explain the starting action without calling it a separate harness installation. Prior blanket “leave connectors off” outreach language is retired for new messages; the app-session gate is still required for XO-driven connector reads.

## 2026-09-28 — connector guidance and safety revision (public kit SHA cfbd761ec4199c7cabfa53dea64e659d54375c18; Pages 9432e79; Release xo-connectors-2026-09-28; previous public SHA e51f358cb8c85f4a47e9aa4e7987775ce84adb44, ancestry verified)

The connector guidance is exploratory text, not a tested integration: no connector read/send gate, historical reach, or clean-account install has been verified. Keep mail and calendar connectors off during first setup. An update notice is not installation approval.

- **[rules]** Source connection now classifies each source personal / employer-managed / client-governed per account, tenant, and project before anything is proposed; overlapping authorities resolve most-restrictive, and unknown policy means no crossing — not even event-only — until the authorized owner clarifies. The eight-pass blind review prompted several of these rules; post-review edits received local checks only, no fresh blind pass.
- **[rules]** Connect and read are separate yeses: no standing read without an approved exact scope; historical reach is tested or marked unknown. Send/mutation tools must be mechanically blocked with an observed pre-execution denial in the actual session, or the route is deferred or work-native.
- **[rules]** Proxies rank by what crosses first for managed sources; liveness distinguishes last successful check, newest item, and destination receipt, and silent routes report `unknown/manual check due` rather than "nothing new." Work-native reminders are a valid route.
- **[rules]** Memory writes are previewed and approved before writing; discovery screens old-chat answers and exports for employer/client/project material before any provider sees them; setup cannot pass with send tools enabled by override; protected-file gate tests are real denied pre-execution requests; Codex paths/restore fixed; kit updates move kit and PIN together with merge-base ancestry; three-strike friction rule added.
- **Sent with the publication:** reaction-ask DMs to all 17 current testers (is this helping / where you stopped). Connector announcement to testers staged, not sent.

## 2026-09-28 — feedback revision (public SHA in GitHub Release notes)

This build remains untried as a full clean-account install. Connector reach and send-tool controls are deferred; do not enable mail or calendar during first setup. An update notice is not installation approval.

- **[rules]** Codex bootstrap separates setup-time parent access from fresh-task protection. It checks the actual selected folder and uses safe work/parent boundary probes when `/status` does not expose writable roots; it does not assume one-time grants exist. A project-name field is not the existing-folder picker.
- **[rules]** Claude reopen checks Manual mode again; Windows command guidance distinguishes PowerShell from Bash and tool visibility from connected-source reach.
- **[rules]** ChatGPT privacy guidance treats a missing "Include environments" control as unverified and asks for an informed choice instead of claiming it was changed.
- **[rules]** Future installed kits check published door-page pins at door-in, review patch notes and rule diffs, and move pins only after a separate yes. The first public build used an optional GitHub Releases check instead; it cannot be assumed to discover this door-page signal.
- This revision remains untried as a complete clean install. No live tester had received these changes when these notes were written.
- Public door copy distinguishes training opt-out from retention and defers personal-source connectors until their send-tool boundaries are tested.

## First public test build — 7395c656b913de0db0ec633a58b745d1842b1145 (2026-09-27)

- Initial exploratory kit: START, Claude desktop and Codex app adapters, stage 1, discovery, stage 2, flows, and templates. Not a clean-account certification.
- Human-reviewed drafts and a tester-report flow; connector send-type tools remain unavailable until their block is proved in the actual session.
- The installed update check in this build consults GitHub Releases at a human-chosen frequency. Publishing only a newer door-page pin will not reliably notify this build's users.
