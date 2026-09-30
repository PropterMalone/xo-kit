# Stage 1, sitting 02: permissions

For the agent. Goal: prompts only for decisions that matter, and the harness, not your good behavior, guarding your own rules. About 20 minutes.

Why this matters to your human, in one line: constant prompts train people to click yes without reading, and then the prompts protect nothing.

## 1. Recommend native automatic review early

Strongly recommend the native reviewed mode for the human's actual app, once the working folder and protected boundary are understood: Claude Code desktop **Auto**, or Codex desktop **Approve for me** (called **Auto-review** in settings). Explain in plain words before asking:

- **What and why:** the app's own classifier reviews routine requests instead of interrupting the human for each one. Repeated prompts cost focus and teach reflexive yeses; the human still decides the task, account connections, rule changes, source-read scope and outbound acts in chat.
- **What it gets:** fewer interruptions. Claude Auto reviews actions in the background; Codex already permits ordinary edits inside its sandbox and Auto-review handles requests for additional access without widening that sandbox. These modes are not Full access or Bypass permissions.
- **What it costs:** the reviewer can mistakenly allow or block a request; the human sees fewer individual tool requests. This is less human oversight, not a security guarantee. Explicit protected-file controls and blocked send/delete tools remain separate; a classifier is not a substitute for an enforced deny or consent to read an account.
- **How and undo:** follow the adapter's current app-specific mode picker, inspect the active selection, and record the previous mode and how to switch back. If the reviewed mode is unavailable or the actual boundary check fails, use Manual / Ask for approval and record why; do not choose Full access / Bypass to remove friction.

Propose the defaults below with the exact settings from your adapter. Show the full settings change before asking for the yes. Verify boundaries before treating the reviewed mode as the steady-state choice; do not promise a specific prompt count or gate outcome before an actual-session check.

**Always allow**
- Reading and editing files inside `~/xo`, except the protected rule files.
- Web fetches to a short allowlist of official policy domains named in `training-opt-out.md` for providers your human uses. Domain matching does not inspect URL paths, query strings, or redirects: before any fetch, check the full URL for private data. Do **not** always-allow `raw.githubusercontent.com` or another user-content host; kit updates and fresh kit fetches ask.

**Ask**
- Edits to the protected rule files.
- Reading any connected source by default. A yes to connect or enter rung 2 is not a standing read grant; each read asks until the human separately approves an exact standing source/field/time scope that the harness can enforce.
- Any other web fetch (a request for review, not a promise of a human prompt in the reviewed mode).
- Installing anything; changing settings; editing anything outside `~/xo` (retain the chat-level yes for these even if the native reviewer would allow the tool call).
- Shell commands, except a few read-only git ones. For Claude's protected shell-write route, use an explicit ask/deny rule rather than assuming the generic shell request always goes to the human.

**Block; if the harness cannot enforce it, leave the capability off**
- Sending, replying, forwarding, deleting, trashing, publishing. Your human sends. For a connector with callable send-type tools, an unverified block means the connector stays off; ask-only is not the default safety boundary.

This grants rungs 0 and 1 only: memory and drafting.

## 2. Protected rule files

- The installed instructions file (`CLAUDE.md` or `AGENTS.md`).
- The harness's settings and approval config (per adapter).
- `ledger.md`.
- `kit/`.

No always-allow for file edits covers them. Claude Code's explicit `ask` rules gate built-in edits even in Auto, but shell commands can bypass those rules: retain an explicit protected-command ask/deny route and test both. Codex must confirm its actual writable roots with `/status` or the adapter's safe checks before treating the parent folder as protected. A chat-approved rule change still passes through the native boundary: distinguish a human prompt, automatic review, and a deny rather than calling them equivalent. XO still asks in chat for the consequential decision; a protected write silently running outside that approved scope fails the gate.

## 3. Record it

Write one ledger entry for the defaults per `templates/ledger.md`: what, the exact settings, their yes verbatim with a timestamp, how to reverse it (the previous settings, or "delete the file"), expiry (none).

## 4. Two gate checks

Demonstrate the live boundary, not just a config value. Tell your human what harmless operation you will attempt and that the native reviewer may allow, deny, or ask; ask for a yes to the **test only**. Never make a real send/delete or use account content. Check the result rather than calling every automatic decision a human approval.

1. **Protected boundary, both routes—disposable target only.** With test consent, choose a fresh, empty probe path outside the ordinary writable area: on Codex, `~/xo/.xo-gate-probe` in the protected parent; on Claude, `~/xo/.claude/xo-gate-probe` under the protected `.claude/**` edit rule. Confirm the path does not exist and show the exact proposed operation. Request a built-in create of that probe containing only `gate check`; it must reach the native pre-execution gate, not a simulated call. If a human prompt appears, have the human deny it. If a classifier denies it, record that distinction. Confirm the probe was not created. Then, with a fresh nonexistent probe path in the same protected area, test a shell command that would create only that disposable probe; Claude's built-in edit rule does not cover shell. Again record human prompt/denial versus automatic refusal and check that no probe appeared. If either attempt is automatically allowed or executes, stop and record the failed boundary; remove only the disposable probe with a separate, specific human yes, never as evidence of a passing gate. If a request cannot reach a gate, mark it unverified and pause setup. Never target `ledger.md`, installed instructions, real settings, or real kit content for a denial test. The disposable probe tests the selected path and route, not every protected file: inspect the actual rules and writable roots for the other protected paths and record any unverified coverage.
2. **Outside fetch.** With test consent, try `https://example.com/?xo-gate-check=1`, with no private data in the URL. Record whether the live mode prompts the human, automatically denies, or automatically allows it. A human denial or observed automatic pre-execution denial proves this attempt did not fetch; an automatic allowance is an explicit example of the reviewed mode's tradeoff, **not** proof of a private-data URL filter. If this is outside the human's chosen network scope, stop and restore Ask/Manual or a narrower enforced rule. The seed's no-data-in-URLs rule still applies to every fetch.

Record the selected mode, test scope, route, reviewer (human/classifier), outcome, unchanged-file or fetch evidence and rollback in the ledger. A failed or unverified protected-file gate stops setup; tell your human what happened and propose the adapter's safe correction. A denied attempt proves only that particular route and session, not universal protection.

## Done when

- [ ] The harness settings match the defaults above, as adjusted and approved by your human.
- [ ] Both disposable protected-boundary probe routes reached a real native pre-execution gate and were denied (human or classifier recorded distinctly), neither executed, and neither probe was created; the remaining protected paths' rules or writable-root coverage were inspected and any uncertainty recorded. A fail or unverified gate stops setup; recording the gap does not satisfy this check.
- [ ] The outside-fetch probe's actual reviewer and result were recorded; any automatic allowance outside the chosen network scope caused a pause and a narrower rule or return to Manual / Ask for approval.
- [ ] Send-type tools are blocked and the block tested, or their connector/capability is off; the ledger records which.
- [ ] The ledger has the defaults entry with a verbatim, timestamped yes and a reversal.
- [ ] The handoff names the next step: sitting 03.
