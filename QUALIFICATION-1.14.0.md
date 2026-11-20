# Noir 1.14.0 for Windows

An anonymous download of the official installer verified all 2,144 installed files, five runtime archives and the Ed25519 update receipt. The installer is 94,473,728 bytes. Its SHA-256 is `f2248f3507665400f830350f70fdb7107766156eade1770407ac373762d14ecf`.

| What was exercised | Result |
| --- | --- |
| Connected app directory | Five searchable providers with setup, scopes, approval, management and disconnect. |
| Public GitHub | Live repository search returned DarlynM/NOIRAI-Downloads. Issue search returned 7 matches. An actual issue was opened. Requests used no authorization header. |
| Private providers | Authenticated read and error scenarios exercised with fixtures. Live calls without credentials were rejected. No private content is included in these checks. |
| Google sign-in | The authorization broker enforces one specific read-only scope per connector. Covered grant rotation, invalid scopes, cross-service refresh rejection and the existing model provider route. |
| Local model | In live Huihui Qwen 4B tests, the model used Calculator and public GitHub after review. A clarification card accepted an audience and the model completed the announcement. Model output varies between runs. |
| Project from an empty folder | A local Huihui Qwen 27B model built a Node program, wrote tests and ran them after approval. A separate acceptance test exposed an edge case. Review Edits proposed changes to both files and kept them untouched until applied. The shipping build reopened the same project, notes, chats and tasks and passed both suites. |
| Project panel | The UI created and edited a nested file, found a literal numeric match, opened its diff, edited a memory and queued/cancelled a planning task. The saved file, note, summary and task survived restart. |
| Small CPU model | Qwen 0.6B answered arithmetic, exact-word, geography and tool-description prompts in a fresh install profile. An explicit arithmetic answer-only request returned a bare 5. |
| Hosted Windows | Windows 2022 (running), Windows 2025 (running) |
| Windows regression | 261 checks across 16 groups, zero skips. Includes scoped credentials, revoked authorization, backup/restore, approved local tools, cloud history and native computer assistance. |
| Installer recovery | Tested upgrade from 1.13.0, low disk space, interruption and rollback with synthetic user data. |
| Phone pairing | Final Windows code exchanged files and updates through the encrypted production relay with current and older software phone peers. Physical iPhone connection timing requires device measurements. |

[Hosted Windows checks](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44840139387) · [Installer, checksum and update receipt](https://github.com/DarlynM/NOIRAI-Downloads/releases/tag/v1.14.0) · [Machine-readable results](RELEASE-VERIFICATION.json)
