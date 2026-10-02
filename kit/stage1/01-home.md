# Stage 1, sitting 01: home

For the agent. Goal: a folder your human owns, instructions that load on their own, and a true list of what you can do right now. Aim for one short sitting, not a chain of permission-audit chats. Save a handoff before a planned reopen or interruption and at a meaningful checkpoint; batch routine findings into one reviewed update instead of asking to log each observation. Use the first goal your human chose in the seed's opening questions to explain why this setup matters: the folder helps you pick up where you left off; the inventory and permission checks show what you can safely do; later, you can try one useful task together. If they skipped the questions, don't hold up setup. This is a short map, not another intake or a promise to connect anything.

## 1. The folder

If the first sitting already made `~/xo` and saved the seed, confirm both and skip ahead. Otherwise propose it now (seed step 4, after the training-setting discussion and optional in-chat first win).

Propose this layout, adjusted by your adapter (Codex puts the working folders under `~/xo/work/`):

```
~/xo/
  CLAUDE.md or AGENTS.md   your instructions (protected)
  ledger.md                permissions ledger (protected)
  kit/                     vendored kit (protected)
  memory/                  MEMORY.md and one file per memory
  handoffs/                one dated handoff per sitting
  drafts/                  anything you draft for your human to send
  sources.md                inventory of unassessed and connected sources (created during discovery)
```

Create `ledger.md` from `templates/ledger.md`. Create the folders empty; sitting 03 fills `memory/`.

## 2. Reopen and check auto-load

1. Tell your human you'll ask them to close this session and start a new session using the project folder specified by the adapter (`~/xo` on Claude; `~/xo/work` on Codex). This is not the same as adding a folder to an existing workspace. Put the next action and the reopening path in the handoff first. Walk them through it per your adapter.
2. After reopening, confirm the session's actual project folder (on Codex, use the existing-folder picker, not the project-name field) and offer your adapter's auto-load check: use a fresh private phrase the human added after the prior chat closed, per the adapter, without reading the file. If they skip it, record auto-load unverified and explicitly read instructions at every door in; do not reopen again merely to force this optional check. A correct folder alone does not prove auto-load. On Codex, establish the fresh-task work and protected-parent boundary once with the adapter's safe probes; a setup-time parent grant is not proof of protection. On Claude, check the active mode again after reopening.
3. Record the actual project folder, active permission mode, instructions auto-load, and (on Codex) fresh-task work-file write and protected-parent boundary results separately in the ledger under "Harness facts": pass, unverified, or fail, with the date and any workaround (such as reading instructions explicitly at every door in). A setup-time approval is not a fresh-task boundary test. If reopening or a permission denial interrupts the session, read the handoff if one exists; otherwise inspect the last verified first-sitting step. Check what actually completed, tell your human what did not, and propose the next safe step. Do not assume an interrupted operation succeeded.

Check for a user-level instructions file too (adapter says where). If one exists, show your human what's in it; it applies to every session.

## 3. Capability inventory

"Nothing is connected yet" is something you check, not assume. Connectors turned on in the chat side of the app can reach your sessions. Conversely, a tool appearing in the inventory does not prove an account, browser, or extension is connected; verify actual connection separately before describing a live source.

1. Inventory the tools exposed **in this session**, grouping ordinary local work separately from connected-account or outbound mutations (send, reply, forward, delete, trash, publish, pay, account/settings changes). Record exact names for the latter and their observed setting; do not infer account reach from catalog presence or absence. A full exact-name inventory can be finished when a connection or higher rung is proposed; do not exhaustively audit unrelated housekeeping tools to start local memory and drafts.
2. Show your human a short risk summary and propose one reviewed batch of relevant defaults. For stage 1, keep unchosen connectors/capabilities off; any exposed connected-account or outbound mutation route must be mechanically blocked or its capability left off, not merely set to ask. Ordinary approved work inside `~/xo/work` is not this category. If you cannot establish that boundary for a specific route, leave it off and record that route as unavailable; do not loop through global plugin deny-list changes to certify every app feature. A change that affects unrelated sessions needs its own clear scope, reversal, and yes.
3. Record the batch approval verbatim with a timestamp in the ledger. Check the resulting catalog once if the change needs a new session to load; absence supports that session's off state, not a universal runtime-denial claim. Do not reopen solely to turn an honest `unverified` into `passed`, or extend the deny list to unrelated tools after a relevant route is off. Revisit a route when the user selects it, a new tool or grant appears, or its effective setting changes.

On Codex, this inventory answers only which connector tools are exposed in this session, not whether a selected account is reachable. Record account reach as unverified until a separately approved, gated account-specific check succeeds (`adapters/codex-app.md`, connector blocker).

## 4. Try one useful thing now

The seed offers an in-chat first win after the privacy conversation and goals question, before the folder and this setup sitting. Do not make the human wait through this sitting to try it, or repeat it if they have already tried or declined. If they skipped it because they were focused on setup, you may offer it once here using only what they told you: a reply draft to review, one next action, or a short plan. No other file search, connector, or new permission is needed; the human sends any draft. If setup stalls, the in-chat option remains available without weakening a tool boundary. Record a chosen result only with the human's approval, or a pending offer in the handoff; do not treat a decline as a failure.

## Done when

- [ ] `~/xo` has the layout above (as adjusted by your adapter) and `ledger.md` exists.
- [ ] After a real reopen, the actual project folder, active permission mode, auto-load, and (on Codex) fresh-task write/boundary checks are recorded separately in the ledger; unverified or failed protection is not marked pass.
- [ ] Any user-level instructions file has been shown to your human.
- [ ] The ledger distinguishes ordinary local tools from the exact exposed connected-account/outbound mutation routes and records their observed settings; deeper capability inventory is deferred until a connection or rung change.
- [ ] For stage 1, unchosen connectors are off; each relevant exposed connected-account/outbound mutation route is mechanically blocked or its capability is off (catalog absence after a disable establishes only absence in that session). Do not call an ask-only route blocked. If a relevant route cannot be kept off or gated, stop **that route and any work using it**, record the gap, and continue local memory/drafting only if the protected-file boundary still passes. Unrelated housekeeping tools need not be disabled for local setup.
- [ ] The seed's optional in-chat first win was offered once (here if skipped earlier); a decline is not a failure. Keep any chosen result only on approval.
- [ ] The handoff names the next step: sitting 02, plus a pending first win if they want one later.
