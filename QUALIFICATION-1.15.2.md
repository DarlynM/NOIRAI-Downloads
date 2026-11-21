# Noir 1.15.2 for Windows

The public installer contained 94,479,360 bytes. An anonymous download matched SHA-256 `faca688323a2fd6915ec029cac021adaf0de7f59a5c8584b0a25f40c8c8a3f2c`. From an empty installation we verified the Ed25519 updater receipt, every one of the 2,144 installed files, and all five freshly downloaded runtime archives. The installer is unsigned.

## First launch

One click on **Download and start chatting** started the recommended model download. During the download, **Try Receiving desk** displayed three missing pieces and one extra. Adding one blue washer immediately changed the result to two missing and one extra. Noir verified the weights and started the selected model automatically. Its first chat answered the arithmetic question correctly.

| Fresh environment | Recommended model | Mode | Bytes already transferred at the worksheet edit |
| --- | --- | --- | ---: |
| Local Windows PC | Huihui Qwen · 4B | CPU | 2,019,475 |
| windows-2022 | SmolLM 2 · 1.7B | CPU | 14,424 |
| windows-2025 | SmolLM 2 · 1.7B | CPU | 14,424 |

The private regression suite passed 275 checks in 16 groups with zero skips. Coverage included download interruption and resumption, recommendation fit, local and cloud chat, project changes, MCP calls, selected-window controls and task recovery.

Both hosted Windows jobs downloaded and ran the public installer and real local models. They exercised the app's first-run, chat, tool and project flows. The Windows 2025 job also generated an image on CPU. [Windows 2022](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44854997624/job/136695006639) · [Windows 2025](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44857281516/job/136702330568)

The first Windows 2025 run reached the five-minute timeout waiting for the model's MCP approval. Its diagnostic output did not identify what the model was doing at the timeout. The full Windows 2025 qualification ran again on the same public binary with progress reporting, explicit checks for unnecessary clarification, and a ten-minute CPU window. It retained the checks for consent, exactly one tool execution and the correct answer. [Initial run](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44854997624)

A synthetic upgrade from 1.14.1 preserved conversations, a model marker and project data. Low disk space, interrupted installation, successful update and rollback checks all preserved their expected manifests and data. [Machine-readable evidence](RELEASE-VERIFICATION.json)

## Using a named plugin

During verification of the earlier candidate, the 4B local model searched project files when asked to call a connected calculator. It then reported that the plugin had no tools. We reproduced that outcome on a physical PC and on both hosted Windows versions. In this release, Agent uses the named connection's available operations. Across 9 independent registrations on the test PC, the same request produced an approval in 6.03–6.72 seconds. In each attempt the tool ran exactly once after approval and the assistant reported 42. [Earlier candidate checks](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44852735040)

During the live private-account test, Google blocked managed Drive sign-in before consent. The test therefore could not run a private file search. Windows now explains verification and organizational blocks in the connection screen. [Getting started](https://noirgen-noir-launch.etherealtune1.chatgpt.site/start.html) · [Google connection help](https://noirgen-noir-launch.etherealtune1.chatgpt.site/tools.html)
