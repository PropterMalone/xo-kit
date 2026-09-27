# Stage 2: connecting sources

For the agent. Connect your human's sources (mail, calendar, tasks, notes, messages) one at a time. Each connection is rung 2, "read one source" (`05-ladder.md`), and a separate yes. Work from `~/xo/sources.md`.

## First: personal or work?

Before the first connector or proxy, ask: "Is this account personal, or managed by an employer?" Ask again for each new account.

- **Work:** the employer's policy governs. An approved enterprise account may work; verify its actual tools, data controls, and permission settings with the same gates as a personal account. Work data never goes into a personal subscription. If your human doesn't know the policy, stop and suggest they check it or ask IT. Record their answer verbatim.
- **Personal:** continue.

## Choosing how to connect

1. **Prefer a CLI to a connector (MCP server) when both exist and setup costs are comparable.** A CLI runs nothing in the background, loads no tool definitions into every session, and leaves plain commands in the log. If the CLI needs much more setup, take the connector.
2. **Hard rule:** no path that requires your human to create a cloud or developer project, or their own OAuth client. Signing in and approving is fine. If only that path exists, say so, and use a proxy (`04-proxies.md`) or skip.
3. **Keys:** key intake isn't in v0. If a service only offers an API key, tell your human that, record "later", and don't improvise a way to store it.
4. **Prefer draft-only commands or tools.** Record in the ledger every command or tool that can send.
5. For current connector routes per harness (Google mail and calendar in particular), see your adapter in `kit/adapters/`.

## Connecting one source

1. **Propose.** Name the source, the route, what you'll be able to read, what leaves the machine (what you read goes to your provider), and how to undo it. Wait for a yes.
2. **Your human signs in.** You can't do sign-ins; tell them exactly where to click.
3. **List the tools it added.** Re-run the capability inventory from the first sitting. Name every new tool, including send, reply, forward, trash, delete, and label changes.
4. **Set per-tool permissions.** In v0 your human sends, so:
   - Read tools for this source: allow (rung 2's yes makes these reads always-allow).
   - Draft-creating tools: ask, until rung 3 for this source.
   - Send, reply, forward, trash, delete: block where the harness allows it. If a connector exposes these but a block cannot be verified in the Code session, leave the connector off and offer a read-only proxy; merely asking is not a substitute for the v0 human-sends boundary.
   Check your adapter for the Code session's actual controls. On a personal Claude plan, app-side per-tool permissions are not documented as available (check on the app); do not connect a send-capable source merely because chat-side connector controls exist. If the Code harness cannot block send-type tools, leave the connector off and offer a read-only proxy instead.
5. **Test one read.** Fetch the newest item's date, not its contents unless your human asks. That date is the first liveness point.
6. **Ledger entry** (`kit/templates/ledger.md`): source, account (personal or work), route, the per-tool settings, which tools can send, your human's yes verbatim with timestamp, reversal (turn off the connector, revoke the sign-in at the provider's account page), and liveness and expiry (below).
7. **Update `~/xo/sources.md`:** status connected, route, date.

## Liveness and expiry

Connectors and tokens break silently. Record for each source:

- **Expected cadence:** how often new items normally arrive (mail: daily; a quiet calendar: weekly).
- **How to check:** the one read that returns the newest item's date.
- **Expiry:** if the sign-in or token has one, the date. If unknown, say unknown.

At every door in, check each source: when did the last item arrive, and is that plausible? A stale source gets flagged to your human, never read as "nothing new." Flag expiries within two weeks.

## Done when

- [ ] Personal or work was asked and answered for this account.
- [ ] The source is connected by a route that needed no developer project or OAuth client.
- [ ] Every tool it added is listed, and send-capable tools are blocked and gate-checked; otherwise the connector stays off and a proxy is used or the source is deferred.
- [ ] One test read worked.
- [ ] The ledger entry has settings, send-capable tools, verbatim yes, reversal, cadence, check, and expiry.
- [ ] `~/xo/sources.md` shows the source as connected.
