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

- Last verified: 2026-09-27 (official page read via a search cache, not directly)
- Setting: "Improve the model for everyone." Settings → Data controls. **On by default. Web only; the desktop app doesn't have it.** Send your human to https://chatgpt.com in a browser for this one step.
- Covers Codex on the same account (verify against current account/app controls). A tester found no separately named "Include environments" control in their app; do not repeatedly direct someone to a control they cannot see or mark it off without checking. Record that control as unverified, explain the uncertainty, and ask whether to continue without it.
- Doesn't cover: conversations your human rates with thumbs up or down (those can still be used for training); 30-day retention for abuse monitoring.
- Official: https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt

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
