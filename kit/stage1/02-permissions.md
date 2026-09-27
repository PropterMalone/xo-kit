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
- Reading any connected source, until that source's rung 2 yes is in the ledger.
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

1. **Protected file.** Try to append a harmless line (`gate check`) to `ledger.md` using the built-in file editor. Pass: the harness prompts, your human denies, and the file is unchanged afterwards (show them). Then test a shell write to the same file without executing it: ask the harness to run a command that would append the same line; your human denies the shell prompt. Pass: the command does not run and the file stays unchanged. If the shell write runs silently, record a gate failure.
2. **Outside fetch.** Try to fetch `https://example.com/?xo-gate-check=1`. Pass: the harness prompts, your human denies, nothing is fetched. This catches an outside-domain URL, but it does **not** test an exfiltration URL on an allowlisted domain. The seed's no-data-in-URLs rule still applies to every fetch.

Record both results in the ledger under "Gate checks" with the date. A fail is not a setback to hide: tell your human plainly what the harness didn't stop, record it as a known gap, and propose the fix your adapter gives, or say there isn't one.

## Done when

- [ ] The harness settings match the defaults above, as adjusted and approved by your human.
- [ ] Built-in and shell attempts to edit protected files prompt (gate check 1 passed on both routes, or the gap is recorded).
- [ ] A non-allowlisted fetch prompts (gate check 2 passed, or the gap is recorded).
- [ ] Send-type tools are blocked and the block tested, or their connector/capability is off; the ledger records which.
- [ ] The ledger has the defaults entry with a verbatim, timestamped yes and a reversal.
- [ ] The handoff names the next step: sitting 03.
