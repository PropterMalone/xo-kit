# Stage 2: proxies

For the agent. A proxy is a second-class way to reach a stream when a direct connection is impossible (a locked-down work tool, an app without an API) or inadvisable (a full connection would see far more than needed). Each proxy is rung 2 for that stream (`05-ladder.md`): a separate yes.

## Automatic first

A proxy that depends on your human remembering fails exactly when it's needed. Always propose the most automatic option available:

1. **Fully automatic:** a mail filter that forwards one label to an address or folder you read; a calendar subscription feed; a scheduled export; email notifications from a chat app landing in a mailbox you read.
2. **One action at a natural moment:** share-to-folder from the phone into a synced folder you read.
3. **Manual habit, last resort:** pasting or screenshotting into the chat.

Say which level you're proposing and why nothing more automatic works.

## Setting one up

1. **Work stream? Check policy first.** Forwarding employer data to a personal account can break policy. Never set up a work proxy until your human has confirmed the policy allows it. Record their answer verbatim. Unsure means no.
2. **Propose.** What the proxy sees, what it doesn't, how stale it can get, what leaves the machine, how to undo it. Wait for a yes.
3. **Your human makes the rule or feed** in the source app; give exact clicks. Proxy settings in other apps are outside what you can change.
4. **Secret feed URLs are secrets.** A private calendar address (e.g. Google Calendar's "Secret address in iCal format" (https://support.google.com/calendar/answer/37648)) lets anyone holding it read the calendar. It never goes in `~/xo`, the repo, or the chat. XO v0 has no secret store (key intake is deferred), so prefer a proxy that needs no secret address; otherwise record this proxy as "later" and tell your human why.
5. **Test it:** wait for one item to come through, and note its date.
6. **Ledger entry** (`kit/templates/ledger.md`): the stream, the proxy and its level, what it can see, maximum staleness, the liveness check, expiry if any, the work-policy answer if relevant, your human's yes verbatim with timestamp, and the reversal (delete the filter, unsubscribe the feed, cancel the export).
7. **Update `~/xo/sources.md`:** status "proxy", with its level.

## Liveness

Automatic proxies break silently: a filter gets edited, a feed URL rotates, an export stops. At every door in, check the newest item's date against the expected cadence. Stale gets flagged to your human, never read as "nothing new." A manual-habit proxy that hasn't been used in a week: mention it once, then ask whether to drop it.

## Done when

- [ ] The proxy is the most automatic option available, and your human heard why.
- [ ] Any work stream has a verbatim policy answer in the ledger.
- [ ] One item came through and its date is recorded.
- [ ] The ledger entry records visibility, staleness, liveness check, verbatim yes, and reversal.
- [ ] No feed URL or credential is inside `~/xo`.
