# Noir 1.9.5 release checks

[Download Noir for Windows](https://github.com/DarlynM/NOIRAI-Downloads/releases/tag/v1.9.5). The installer is 94,361,088 bytes. Its SHA-256 is `829c4e2afeb6331e79da622669adb39ae12722e1f7896deee3ac2022e04c5d54`. Noir’s update receipt verifies the publisher’s receipt signature and installer hash through the Noir updater. Windows Authenticode signing is pending.

| What was checked | Evidence |
|---|---|
| Fresh installation | An anonymous installer download and an empty installation directory fetched all five runtime archives, totaling 920,831,610 bytes. All 2,140 installed files matched their expected SHA-256 values. |
| Clean Windows hosts | Both the Windows 2022 and 2025 hosted qualification jobs passed, including real CPU inference and packaged coding tools. [Public run](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44389033213) |
| Update and recovery | Upgrading a synthetic 1.9.3 installation to 1.9.5 and rolling it back restored the previous executable package and preserved a separate synthetic user file. |
| Keyboard and screen sizes | Tested three Windows layouts, from 1024 × 640 to 1600 × 900. The provider chooser opens and closes from the keyboard, focuses within the dialog, and preserves an unsent draft. |
| Provider choice | Tested five credential and routing adapters with synthetic provider responses, including explicit OpenRouter routing. All five real services rejected a deliberately invalid credential and Noir saved none. Provider-billed generation was outside this test. |
| Release regression suites | 39 desktop core checks, 12 cloud and media checks, nine provider-picker and support UI checks, 42 companion transport and backend checks, and ten packaged desktop and live-relay checks passed. |
| Privacy demonstration | A Qwen 3 0.6B model generated the dinner title on the PC. In the same chat, Cancel sent nothing. The approved mock-provider request included only the new invitation prompt from that conversation. The local location and local answer were absent. |
| Mobile release | The Windows host was tested with a simulated phone over the live relay, including pairing, reconnection and revocation. Native compilation and physical iPhone testing for 1.9.5 are pending. |
| Cloud account access | Personal ChatGPT, Claude and Gemini subscription sign-ins are deferred. The Google catalog-only OAuth pilot is separate from the shipped direct API-key flow. |

## First-run help

If Gemini shows HTTP 400 when connecting a key, check that you entered a Gemini API key for the intended project. Our intentionally invalid test key produced this message. OpenAI, Claude, Mistral and OpenRouter displayed a provider rejection. The Windows app shows the API setup guide beside the connection field.

The setup guide explains local hardware requirements, optional API charges, remote pairing and voluntary support. [First-run guide](https://noirgen-noir-launch.etherealtune1.chatgpt.site/start.html)
