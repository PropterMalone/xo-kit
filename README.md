# xo

xo helps you get useful work done with an AI assistant without building a system first. Start with a useful task in chat. Stop with the result, keep working, or choose to save your result and next step. Saving your place does not commit you to full setup; you can save nothing. If you choose a note or return folder, you own it and approve what the assistant may do. Connecting mail, messages, or a calendar is optional.

If you want to try it, start at [the public test page](https://proptermalone.github.io/xo-kit/index.html) and pick the app you use; it has the ready-to-paste instructions. You don't need to install a separate “harness.” This clean public export contains the [rendered entry pages](docs/index.html) and [agent instructions](kit/START.md), including the separate optional [setup guide](kit/flows/setup.md).

This is an exploratory test, not a finished app. A full clean-account install and connector permission controls have not been verified in both desktop apps. The rendered door pages carry the release's pinned kit instructions. [Changes](CHANGELOG.md).

## Optional writing review

[Prose, by David Crespo](docs/prose.html), is a core XO module for reviewing selected Markdown drafts. Installation and use are optional; writing in chat still works. The [agent guide](kit/flows/prose.md) installs nothing.

**Limited prerelease:** [Prose 0.1.0-rc.1 release](https://github.com/PropterMalone/xo-kit/releases/tag/xo-2026-11-02-prose-rc.1), with a separate [source ZIP](https://github.com/PropterMalone/xo-kit/releases/download/xo-2026-11-02-prose-rc.1/prose-0.1.0-rc.1-source.zip) and [SHA256 checksum](https://github.com/PropterMalone/xo-kit/releases/download/xo-2026-11-02-prose-rc.1/prose-0.1.0-rc.1-source.zip.sha256). GitHub's automatic XO source downloads do not contain the separate Prose runtime. Verify public availability and the pinned archive checksum before setup. Mac real-agent handling and interrupted-agent recovery are unverified; no general Windows/Mac agent-support claim is made.

Install Deno 2.9.6 separately; the plain-editor route needs no Node.js, npm command, Python or Helix. The browser bundle is prebuilt, but server dependencies download on first use: this is not an offline distribution. Native Windows x64 Claude 2.1.316 completed a cached same-agent question, scoped edit, authenticated reply and browser reload with the explicit `--allow-windows-claude-all-access` opt-in. **That opt-in disables Deno's sandbox and grants broad process, FFI, system, network and filesystem authority.** Restricted defaults remain unchanged. Native macOS ARM64 runtime/browser checks used synthetic agent operations; the Mac real-agent route is unverified. A cached Linux Codex route was checked separately; it is not native Windows/Mac evidence. Interrupted recovery, generic resend/deduplication, fresh installation, Intel Macs, Windows ARM64 and arbitrary browsers remain unverified. Check the actual agent return route before using private drafts. David Crespo's applicable MIT licenses and third-party notices remain in the source archive.

Prose source ZIP: **4,108,090 bytes**. SHA256: `91807ce6f20ee7909b0aa8fb9d1dfeb5ff79e9bd8f21e8a89c8448b2795d8f26`.

## Optional Kettle address book

Kettle is separate software, not required for xo. Import selected contacts, let XO enrich a small approved group using its ordinary web tools, then try a useful question. Hero chooses scope and saving; XO prepares the research and typed requests, not biographies or JSON for Hero to author. Near reset, use otherwise-unused included subscription allowance if Hero wants; no API credentials, paid overflow, installed meter or scheduler is required. Private papers need separate permission and private evidence.

Use Node.js >=24.22.1 <25. Kettle’s core workflows are verified natively on Linux, Windows and macOS; advanced migration, replay, cloud custody and optional adapters are not certified across platforms. The broader Windows suite remains unaccepted. Follow the exact engine pin and setup guide in `kit/flows/address-book.md`, and verify public availability before setup. Reading the flow installs and connects nothing.
