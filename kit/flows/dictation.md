# Optional dictation for concrete answers

For the agent. Recommend speaking when it would make answering easier, especially in [Advokat](advokat.md). Say: “If talking is easier, use dictation. Rambling is fine; I can organize the answer and check the important details with you.” Typing is equally welcome. Dictation is not a prerequisite, a diagnosis or a reason to interrupt useful work with setup. Do not infer the person's device from the way they write.

## Use what is already there

Recommend the existing app’s dictation first, in the current task's composer, if available. This preserves the same work and lets the human review text before sending. Do not require a new live voice conversation, app, subscription or microphone purchase.

- **Claude Desktop:** official documentation describes dictation in Cowork/Code; the desktop Linux beta documentation explicitly says dictation is unavailable. Verify the actual platform/version and visible control before guiding use. Two-way voice conversation is distinct from speech-to-text entry and may differ by surface or rollout.
- **Codex desktop:** OpenAI's desktop documentation describes a Dictate control in the composer that produces editable text before sending. Its former Codex app documentation redirects to the current desktop guides. Check the actual user's version and control; do not promise every surface or plan has identical features. Live two-way voice has separate availability/limits.
- **Windows:** put the cursor in a text box and use Windows+H. Standard Windows voice typing uses online Microsoft speech recognition and needs internet; it is not local-only.
- **Mac:** use System Settings → Keyboard → Dictation, then Edit → Start Dictation or the configured shortcut. Keyboard settings indicate whether general dictation is processed on-device. Do not assume all languages/hardware are offline.
- **iPhone:** use the keyboard's dictation microphone; if missing, check Settings → General → Keyboard → Enable Dictation. Apple documents on-device dictation for many languages, not every configuration.
- **Android:** use Gboard's microphone if present. Language/device support varies; do not promise Pixel-only advanced features on all phones or universal offline operation.

Give only the relevant option and one small observable step, not the entire list to the human. Microphone access is their choice; stop if declined, unavailable or too much effort. Do not take a permission failure as a reason to request broader file/account access. If the interface differs, check current official documentation for their actual app/version or ask about the relevant control without requesting secrets.

Sources reviewed 2026-10-25 (documentation, not hands-on app verification):

https://support.claude.com/en/articles/11101966-use-voice-mode

https://support.claude.com/en/articles/10065433-install-claude-desktop

https://learn.chatgpt.com/docs/prompting#use-voice-dictation

https://support.microsoft.com/en-us/accessibility/windows/use-voice-typing-to-talk-instead-of-type-on-your-pc

https://support.apple.com/guide/mac-help/use-dictation-mh40584/mac

https://support.apple.com/guide/iphone/dictate-text-iph2c0651d2/ios

https://support.google.com/gboard/answer/2781851?hl=en&co=GENIE.Platform%3DAndroid

## A free separate desktop option only if needed

Handy is a free, open-source candidate for shortcut-to-text dictation with local transcription. The project lists Windows, macOS and Linux; Linux has extra text-insertion/display-server dependencies and Wayland limitations. Installation, model download, permissions, latency and accuracy depend on the device. Its local/privacy descriptions are maintainer claims, not a security audit. It was not benchmarked or tested with XO for this guide. Try an existing built-in route first; do not prescribe it universally or replace something that works.

https://handy.computer

https://github.com/cjpais/Handy

No installation, model download, configuration change or external post-processing follows from this guide. If separately chosen, review the official source, current release, actual platform requirements, permissions, storage, cost and reversal under the existing adapter/setup rules before any change. Do not turn a recommendation into a custom voice service or unsupported installation tutorial. Ordinary local transcription needs no paid API; do not enable optional cloud cleanup or paid fallback automatically.

## Easy capture, careful claims

Accept a rough answer and do the synthesis. Check consequential names, dates, numbers, negation and who did what before placing them in final application materials. Ask the smallest disambiguating question, such as “Was that six people or sixteen?” If they do not remember, keep the uncertainty or omit the unsupported precision; do not make them clean up an entire transcript. An interpreted transcript is not independently verified evidence. Do not infer consent, factual confirmation or submission approval from uncertain captured speech; clarify a consequential ambiguous yes.

The human controls capture and sending. No automatic recording, always-on listening or meeting capture. A personal dictated answer is not permission to record other people, import existing recordings or retain raw audio. For any chosen recording/transcript source use [source permissions](../stage2/03-sources.md); recording, transcription, storage/sync and XO reads are distinct decisions. With local transcription, text sent to a hosted assistant still reaches that provider; local speech recognition does not make the whole workflow offline. Explain unknown data handling instead of promising voice is never stored.

## Done when

- [ ] The human got one relevant low-effort choice, or chose to type/skip without setup debt.
- [ ] Actual app/device availability and provider exposure were distinguished from documentation and unknowns; no unapproved recording, installation, spend or permissions change occurred.
- [ ] Consequential uncertainties were resolved or left explicit without demanding transcript cleanup; approved final claims remain supported and any actual retained text was separately confirmed.
