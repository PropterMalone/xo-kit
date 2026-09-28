# Stage 1, sitting 01: home

For the agent. Goal: a folder your human owns, instructions that load on their own, and a true list of what you can do right now. About 20 minutes. Update the running handoff after every approved step.

## 1. The folder

If the first sitting already made `~/xo` and saved the seed, confirm both and skip ahead. Otherwise propose it now (seed step 2, after the training-setting discussion).

Propose this layout, adjusted by your adapter (Codex puts the working folders under `~/xo/work/`):

```
~/xo/
  CLAUDE.md or AGENTS.md   your instructions (protected)
  ledger.md                permissions ledger (protected)
  kit/                     vendored kit (protected)
  memory/                  MEMORY.md and one file per memory
  handoffs/                one dated handoff per sitting
  drafts/                  anything you draft for your human to send
```

Create `ledger.md` from `templates/ledger.md`. Create the folders empty; sitting 03 fills `memory/`.

## 2. Reopen and check auto-load

1. Tell your human you'll ask them to close this session and start a new session using the project folder specified by the adapter (`~/xo` on Claude; `~/xo/work` on Codex). This is not the same as adding a folder to an existing workspace. Put the next action and the reopening path in the handoff first. Walk them through it per your adapter.
2. After reopening, confirm the session's actual project folder (on Codex, use the existing-folder picker, not the project-name field) and run your adapter's auto-load check: state one detail that is only in the instructions file, without reading it. A correct folder alone does not prove auto-load. On Codex, separately inspect the fresh-task write boundary using the adapter's safe probes; a setup-time parent grant is not proof of protection. On Claude, check the active Manual mode again after reopening.
3. Record the folder, auto-load, active permission mode, and (on Codex) fresh-task protection results separately in the ledger under "Harness facts": pass, unverified, or fail plus the workaround (reading the file explicitly at every door in). If reopening or a permission denial interrupts the session, read the handoff if one exists; otherwise inspect the last verified first-sitting step. Check what actually completed, tell your human what did not, and propose the next safe step. Do not assume an interrupted operation succeeded.

Check for a user-level instructions file too (adapter says where). If one exists, show your human what's in it; it applies to every session.

## 3. Capability inventory

"Nothing is connected yet" is something you check, not assume. Connectors turned on in the chat side of the app can reach your sessions. Conversely, a tool appearing in the inventory does not prove an account, browser, or extension is connected; verify actual connection separately before describing a live source.

1. List every tool you can call, by its exact name, from your own tool list.
2. For each: what it does in plain words; whether it can act outside `~/xo` (send, reply, forward, delete, trash, publish, pay, change settings, reach the network); its current setting, if you can tell.
3. Write the list into the ledger's "Capability inventory" section.
4. Show your human the short version: which tools could act outside the folder. Propose, one yes each or as one batch they can see in full, turning off or setting to "ask" anything they haven't chosen. Send-type tools get "block" where the harness allows it.
5. Record each yes verbatim, with a timestamp, per `templates/ledger.md`.

On Codex, this step also answers the connector-reach question (adapter, "open v0 blocker"). Record the answer either way.

## Done when

- [ ] `~/xo` has the layout above (as adjusted by your adapter) and `ledger.md` exists.
- [ ] The project folder and auto-load were checked separately after a real reopen, and both results are in the ledger.
- [ ] Any user-level instructions file has been shown to your human.
- [ ] Every callable tool is in the ledger's inventory with its setting.
- [ ] Every tool that can act outside the folder is off, ask, or block, or your human chose otherwise and the ledger quotes that choice.
- [ ] The handoff names the next step: sitting 02.
