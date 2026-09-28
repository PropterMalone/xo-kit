# Stage 1, sitting 02: permissions

For the agent. Goal: prompts only for decisions that matter, and the harness, not your good behavior, guarding your own rules. About 20 minutes.

Why this matters to your human, in one line: constant prompts train people to click yes without reading, and then the prompts protect nothing.

## 1. The defaults

Propose these, with the exact settings from your adapter. Show the full settings change before asking for the yes.

**Always allow**
- Reading and editing files inside `~/xo`, except the protected rule files.
- Web fetches to a short allowlist of official policy domains named in `training-opt-out.md` for providers your human uses. Domain matching does not inspect URL paths, query strings, or redirects: before any fetch, check the full URL for private data. Do **not** always-allow `raw.githubusercontent.com` or another user-content host; kit updates and fresh kit fetches ask.

**Ask**
- Edits to the protected rule files.
- Reading any connected source by default. A yes to connect or enter rung 2 is not a standing read grant; each read asks until the human separately approves an exact standing source/field/time scope that the harness can enforce.
- Any other web fetch.
- Installing anything; changing settings; editing anything outside `~/xo`.
- Shell commands, except a few read-only git ones.

**Block; if the harness cannot enforce it, leave the capability off**
- Sending, replying, forwarding, deleting, trashing, publishing. Your human sends. For a connector with callable send-type tools, an unverified block means the connector stays off; ask-only is not the default safety boundary.

This grants rungs 0 and 1 only: memory and drafting.

## 2. Protected rule files

- The installed instructions file (`CLAUDE.md` or `AGENTS.md`).
- The harness's settings and approval config (per adapter).
- `ledger.md`.
- `kit/`.

No always-allow for file edits covers them. Claude Code's `ask` rules gate built-in edits, but shell commands can bypass those rules: leave shell on ask and test both routes. Codex must confirm its actual writable roots with `/status` before treating the parent folder as protected. A change you've shown and your human approved in chat should still trigger a harness prompt. Tell them that's by design: two locks, not a glitch.

## 3. Record it

Write one ledger entry for the defaults per `templates/ledger.md`: what, the exact settings, their yes verbatim with a timestamp, how to reverse it (the previous settings, or "delete the file"), expiry (none).

## 4. Two gate checks

Demonstrate that the harness holds, not just the prompt. For each, tell your human first: "I'm going to try X. The app should stop and ask you. Please say no." Go ahead only on their yes.

1. **Protected file: two genuine pre-execution requests, never an append.** With your human present and after their yes to the *test only*, request a built-in editor operation that would append the harmless line `gate check` to `ledger.md`. Do not preview-only or simulate the tool call: it must reach the harness approval gate, where your human denies it **before execution**. Verify the file is unchanged. Only if that passes, request a shell command that would append the same line; again let the real harness approval prompt appear, have your human deny before execution, and verify the command did not run and the file is unchanged. Do not grant approval, actually append, or clean up a written test line as if the gate passed. If either request runs without a pre-execution human denial, or the prompt cannot be demonstrated, stop further setup, record fail or unverified precisely, and diagnose the permission gap with the adapter before retrying. A chat-level yes to run the test is not permission to write the ledger.
2. **Outside fetch.** Try to fetch `https://example.com/?xo-gate-check=1`. Pass: the harness prompts, your human denies, nothing is fetched. This catches an outside-domain URL, but it does **not** test an exfiltration URL on an allowlisted domain. The seed's no-data-in-URLs rule still applies to every fetch.

Record each route and the fetch result in the ledger under "Gate checks" with the date, observed prompt/denial, execution outcome, and unchanged-file check. A failed or unverified protected-file gate stops setup; tell your human plainly what happened and propose the adapter's safe correction (or say there isn't one). Never mark a missing prompt as a pass.

## Done when

- [ ] The harness settings match the defaults above, as adjusted and approved by your human.
- [ ] Both protected-file routes produced genuine pre-execution prompts, the human denied both, neither executed, and `ledger.md` stayed unchanged. A fail or unverified gate stops setup; recording the gap does not satisfy this check.
- [ ] A non-allowlisted fetch prompted and was denied before fetching; otherwise stop and record the gap.
- [ ] Send-type tools are blocked and the block tested, or their connector/capability is off; the ledger records which.
- [ ] The ledger has the defaults entry with a verbatim, timestamped yes and a reversal.
- [ ] The handoff names the next step: sitting 03.
