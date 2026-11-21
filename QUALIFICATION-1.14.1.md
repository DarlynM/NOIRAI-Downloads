# Windows 1.14.1 release verification

An anonymous download matched the published SHA-256 and verified the Ed25519 update receipt, all 2,144 installed files and all five runtime archives. The installer contains 94,474,752 bytes. Its SHA-256 is `31d19e2e32e184ae2679792fe33107bf711939842ab0a55f9510c1559e216b6a`.

## Workspace and run history

Project chats appear once while their project is expanded. Collapsing the project makes those conversations available under Recent. Search and archive views retain their own filters. Manual tests and commands record their actual exit results in the run log. The Continue action is tied to saved assistant execution state.

The packaged UI created and edited a nested file, found numeric text in its contents, inspected its diff, edited project memory, and queued and cancelled a planning task. The file, note, project summary and task history survived a restart. The Windows regression suite passed 263 checks with zero skips.

In the final executable the local 27B model ran the four packing-helper tests and reported what happens at zero carton capacity. Both the generated suite and an independent edge-case suite passed in the protected runner after reopening the project. The new workspace showed the same chat once, with the successful assistant outcome intact after an independently failed manual test.

The installer passed an upgrade from 1.14.0, low-space handling, interrupted update recovery and rollback while preserving synthetic user data. Hosted Windows results are Windows 2025 (success), Windows 2022 (success). [Fresh Windows runs](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44842758445)

Both fresh Windows machines downloaded and switched real local models, ran protected Node and Python commands, and exercised chat recovery and MCP. The Windows 2025 run also downloaded a fresh image runtime and generated a decoded 512 by 512 PNG on CPU.

The preceding [1.14.0 project and connected-app tests](QUALIFICATION-1.14.0.md) cover a local 27B model building a packing helper, the review and test of a follow-up change, public GitHub searches, private transport fixtures and alternate reply models. [Current release verification](RELEASE-VERIFICATION.json)

### Exact-copy check

The first hosted run asked the 0.6B model to return the single word BLUE with a period immediately following BLUE in the instruction. It produced `BLUE.`, while the check expected four characters. On the same shipping binary we observed this locally and tested three bracketed targets with explicit instructions to omit punctuation. Three fresh CPU chats returned `BLUE`, `LAMP` and `MINT` exactly. The updated hosted check also records the original response. [Original run](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44841467585) · [Repeat with three exact targets](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44842758445)
