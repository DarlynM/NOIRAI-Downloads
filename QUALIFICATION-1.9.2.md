# Noir 1.9.2 for Windows

The public installer for Windows x64 has SHA-256 `2a48e2b603c1d8b75c72cc1e92da97d530b5b06314039353a907928b2fc9e26c`. Its update receipt is signed with the Noir update key. Windows Authenticode signing is pending.

| Check | Observed result |
| --- | --- |
| Anonymous installation | Installed into an empty directory. Five runtime archives came from their publishers. The test verified all 2,140 installed files and ran the optional Git installation. |
| Desktop conversation | A real local Qwen model replied twice. Between those replies the same chat switched between two simulated provider accounts. Cancelling the sharing preview preserved the draft. |
| Native cloud requests | Controlled streams exercised all five provider adapters. The test inspected outgoing request bodies for the exact destination, allowed cloud history, and exclusion of private turns. |
| Cross-device sync | Two clean profiles used the live encrypted sync service. The receiving profile recovered cloud turns with their original provider. Private text and the local chat title stayed on the originating device. |
| Phone connection | The installed app paired with a synthetic phone over the live encrypted relay and ran a local model. Reconnect, retry, per-device reply retrieval, revocation and restart were exercised. |
| Upgrade and recovery | The 1.9.1 installation upgraded to 1.9.2 and rolled back. Both transitions preserved synthetic user data. |
| Bundled media tools | File and PDF extraction, photo OCR, camera capture and offline dictation ran through the packaged Windows interface using test inputs. |

The provider tests used synthetic credentials. They did not spend from a customer's plan. OpenRouter sign-in and direct API access have different billing arrangements. Direct use of ChatGPT plan entitlements inside Noir depends on OpenAI partner approval.

Both clean installations passed on Windows Server 2022 and 2025. See the [public verification record](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44333048736). The iPhone build and App Review have their own release status.
