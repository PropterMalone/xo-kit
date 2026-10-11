# Turning off training on your human's data

For the agent. This is the first-sitting privacy step after the seed paste. Say that the seed has already reached the provider; switching training off now cannot undo prior processing. Before collecting personal details or creating files, guide your human through the relevant setting and troubleshoot it one step at a time. Ask them to confirm its state. If they decline or cannot confirm, explain the limits and ask whether they want to continue. Carry that recorded choice into sitting 01; do not make them repeat the same setting trip without new evidence.

These policies change. Each entry has a last-verified date and an official link. **Before walking your human through it, open the official page and check it. If the page and this file disagree, trust the page and tell your human what changed.**

Tell your human plainly what turning it off does *not* cover.

## Anthropic (Claude, Claude Code)

- Last verified: 2026-09-27
- Setting: "Help improve our AI models." Settings → Privacy, or directly: https://claude.ai/settings/data-privacy-controls
- Default: consumer accounts are asked to choose; check which choice they made.
- Covers Claude Code on the same account.
- Doesn't cover: data already used in training; content flagged for safety review. Retention is 30 days with the setting off, 5 years with it on.
- Official: https://privacy.claude.com/en/articles/12109829-how-do-i-change-my-model-improvement-privacy-settings

## OpenAI (ChatGPT, Codex)

- Last verified: 2026-10-10, official Data Controls page read; desktop UI not app-tested.
- Personal account setting: **Improve the model for everyone**. The documented signed-in browser path is account menu → Settings → Data controls → turn it off → Done, at https://chatgpt.com. The setting applies across devices. Do not assert the desktop app lacks this control or give an unverified macOS path: if the app's controls differ, offer this browser path on the same account/workspace. Do not assume its current state.
- On personal plans, the official page says this opt-out also covers new Codex tasks; the Privacy Portal's **Do not train on my content** is an alternative, not a second required opt-out. **Include environments** is separate, documented at https://chatgpt.com/codex/cloud/settings/general for additional Codex environment context. Do not assume it exists in every desktop task or that the ChatGPT toggle changes it. Check only where applicable and authorized; if absent or inaccessible, record that scope as unverified and ask whether to continue without confirmation. Do not keep searching or reopening for it.
- **Business / Enterprise / Edu / Healthcare workspace:** OpenAI says workspace content is not used for training by default; available controls depend on account and workspace policy. A tester reports a Business widget locked Off. If a control is locked or unavailable, do not try to unlock it, switch workspaces or bypass an administrator to finish setup. Record the observed workspace/state or unknown, explain the limits and ask whether to continue. Workspace data still requires its applicable policy and authorized route; training-off is not permission to ingest it.
- Retention is separate: turning training off does not delete saved chats. The official page says temporary chats may be retained up to 30 days for safety while temporary, not that all chats are removed after 30 days. Managed retention/access rules can differ. Feedback such as thumbs up/down may make its associated conversation eligible for training. Never promise erasure or zero retention.
- Official: https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt and https://openai.com/enterprise-privacy/

## Z.ai (GLM coding plan)

- Last verified: 2026-09-27, **unresolved**
- The coding-plan privacy page says its "Optimization Program" is off by default (Settings → General). Z.ai's general privacy policy reads as training-compatible with no visible opt-out. We couldn't confirm which one governs coding-plan traffic. Tell your human this plainly.
- Official: https://zcode.z.ai/en/privacy and https://docs.z.ai/legal-agreement/privacy-policy

## Google (Gemini app, Antigravity)

- Last verified: 2026-09-27
- Gemini app: "Gemini Apps Activity" (Keep Activity), **on by default**. gemini.google.com → Settings & help → Activity → Turn off.
- **Antigravity (desktop, IDE, CLI) is separate.** It runs under the Google Privacy Policy plus Antigravity's own terms, which collect "Interactions" for research by default, with an opt-out inside the app. The Gemini app's switch doesn't cover it. (The older Gemini CLI consumer path was folded into Antigravity on 2026-06-18.)
- Doesn't cover: about 72 hours of service retention, human safety review, and feedback your human submits.
- Official: https://support.google.com/gemini/answer/13594961 and https://antigravity.google/terms

## Done when

- [ ] Your human has been told the seed already reached the provider and turning training off cannot undo that processing.
- [ ] You checked the current official page for the provider/account in use, gave the relevant setting path and limits, and asked the human to confirm the actual state; a missing page or control stays unverified, not marked off.
- [ ] The human's choice (off, declined, or unverified) and whether to continue despite any limits are recorded in the running handoff, without claiming training is off unless they confirmed it. Carry that choice forward in sitting 01 without an automatic repeat prompt.
