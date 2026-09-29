# Stage 1, sitting 01: home

For the agent. Goal: a folder your human owns, instructions that load on their own, and a true list of what you can do right now. About 20 minutes. Update the running handoff after every approved step. Use the first goal your human chose in the seed's opening questions to explain why this setup matters: the folder helps you pick up where you left off; the inventory and permission checks show what you can safely do; later, you can try one useful task together. If they skipped the questions, don't hold up setup. This is a short map, not another intake or a promise to connect anything.

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
2. After reopening, confirm the session's actual project folder (on Codex, use the existing-folder picker, not the project-name field) and run your adapter's auto-load check: use a fresh private phrase the human added after the prior chat closed, per the adapter, without reading the file. If they skip that optional check, record auto-load unverified and explicitly read instructions at every door in. A correct folder alone does not prove auto-load. On Codex, separately inspect the fresh-task write boundary using the adapter's safe probes; a setup-time parent grant is not proof of protection. On Claude, check the active Manual mode again after reopening.
3. Record the actual project folder, active permission mode, instructions auto-load, and (on Codex) fresh-task work-file write and protected-parent boundary results separately in the ledger under "Harness facts": pass, unverified, or fail, with the date and any workaround (such as reading instructions explicitly at every door in). A setup-time approval is not a fresh-task boundary test. If reopening or a permission denial interrupts the session, read the handoff if one exists; otherwise inspect the last verified first-sitting step. Check what actually completed, tell your human what did not, and propose the next safe step. Do not assume an interrupted operation succeeded.

Check for a user-level instructions file too (adapter says where). If one exists, show your human what's in it; it applies to every session.

## 3. Capability inventory

"Nothing is connected yet" is something you check, not assume. Connectors turned on in the chat side of the app can reach your sessions. Conversely, a tool appearing in the inventory does not prove an account, browser, or extension is connected; verify actual connection separately before describing a live source.

1. List every tool you can call, by its exact name, from your own tool list.
2. For each: what it does in plain words; whether it can act outside `~/xo` (send, reply, forward, delete, trash, publish, pay, change settings, reach the network); its current setting, if you can tell.
3. Write the list into the ledger's "Capability inventory" section.
4. Show your human the short version: which tools could act outside the folder. Propose, one yes each or as one batch they can see in full, turning off or setting to "ask" anything they haven't chosen. Send, reply, forward, delete, trash, publish, and other connected-account or outbound mutation tools must be blocked with an enforceable setting or their capability/connector left off; an "ask" setting or chat override is not enough for stage 1. Ordinary approved edits inside the work folder are not this category. If the human wants a different boundary, record the request but do not mark sitting 01 complete or enable the capability; revisit it through the later rung/self-edit process only after a verified safe path exists.
5. Record each yes verbatim, with a timestamp, per `templates/ledger.md`.

On Codex, this step also answers the connector-reach question (adapter, "open v0 blocker"). Record the answer either way.

## 4. Try one useful thing now

The seed offers an in-chat first win after the privacy conversation and goals question, before the folder and this setup sitting. Do not make the human wait through this sitting to try it, or repeat it if they have already tried or declined. If they skipped it because they were focused on setup, you may offer it once here using only what they told you: a reply draft to review, one next action, or a short plan. No other file search, connector, or new permission is needed; the human sends any draft. If setup stalls, the in-chat option remains available without weakening a tool boundary. Record a chosen result only with the human's approval, or a pending offer in the handoff; do not treat a decline as a failure.

## Done when

- [ ] `~/xo` has the layout above (as adjusted by your adapter) and `ledger.md` exists.
- [ ] After a real reopen, the actual project folder, active permission mode, auto-load, and (on Codex) fresh-task write/boundary checks are recorded separately in the ledger; unverified or failed protection is not marked pass.
- [ ] Any user-level instructions file has been shown to your human.
- [ ] Every callable tool is in the ledger's inventory with its setting.
- [ ] Send/reply/forward/delete/trash/publish and other connected-account or outbound mutation capabilities are mechanically blocked or off; none is left on allow or ask by override. Other outside-folder tools are off, ask, or block as approved and recorded. If a mutation gate cannot be verified, stop here and record the gap.
- [ ] The seed's optional in-chat first win was offered once (here if skipped earlier); a decline is not a failure. Keep any chosen result only on approval.
- [ ] The handoff names the next step: sitting 02, plus a pending first win if they want one later.
