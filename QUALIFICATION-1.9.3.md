# Windows 1.9.3 verification

The public 94,356,992-byte Windows x64 installer was downloaded anonymously into an empty folder. Setup fetched five runtime archives from their publishers. All 2,140 installed files passed their inventory checks. The Ed25519 update receipt verified the installer SHA-256, `e555dac05e2028cc9dfe3226ebded264cd1e93044c5148065e51a3f6bbc56013`. This version has an unsigned Windows executable.

| Check | Observed result |
| --- | --- |
| Independent provider selection | With OpenRouter already connected, one synthetic chat made four requests directly to OpenAI, Claude, Gemini and Mistral. Each request used its expected host, API method, credential format and model. |
| Optional OpenRouter | Selecting Via OpenRouter explicitly sent the fifth turn to the routed Gemini model. Switching away cleared the unfinished key field. Reopening the picker restored the saved route. |
| Billing and privacy | The send preview identified the selected provider and quota. Ten cloud tests exercised the five adapters, history selection, privacy across provider switches, device permissions, offline transcription and encrypted sync. |
| Packaged interface | The app installed from the public download opened a synthetic profile. Six checks covered direct and routed models, reconnecting, subscription disclosure and returning to the composer. |
| Sign-in | Five synthetic OpenRouter OAuth checks covered the browser callback, proof-key binding, cancellation, provider denial and expired codes. |
| Upgrade and recovery | 1.9.2 upgraded to 1.9.3 and rolled back, preserving synthetic chats, projects and models. All 39 core tests passed. |

The cloud tests used simulated provider responses. They incurred no API charges and cannot establish a customer's personal plan entitlement. OpenAI approval for using ChatGPT plan usage inside Noir is pending. Personal Claude and Gemini chat sign-in is currently unavailable in Noir. The iPhone build has a separate release process.

The Windows Server 2022 and 2025 jobs both passed. Each runner installed the public release into an empty directory, downloaded local models, received CPU-generated replies, exercised the coding tools and reopened saved synthetic work. The 2025 job also exercised local image generation. These checks cover the two tested configurations.

[Clean Windows installation jobs](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44353789134) · [Installer and update receipt](https://github.com/DarlynM/NOIRAI-Downloads/releases/tag/v1.9.3)
