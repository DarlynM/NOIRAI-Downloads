# Noir 1.9.1 qualification

The anonymous Windows x64 installer is 94,354,432 bytes. Its SHA-256 is `84d42d53e49e464f386bde5e10c70f736706118be84b0b2c9cffa39c8cb87e37`. The publisher's signed update receipt verified against the packaged public key. Windows Authenticode signing is pending.

## Public installation and local work

Two empty hosted Windows machines downloaded the public installer, five runtime archives and two local text models. Each verified the 2,140 installed files. Both received a real CPU-generated reply, deleted a chat during generation and sent a new prompt. They ran protected Node and Python commands, exercised Review, Review Edits and Agent with real inference, switched models, moved a finished chat, restarted and recovered history. The Server 2025 job also exercised local image generation. A third clean Windows installation on our test machine fetched all five archives again. An upgrade from 1.8.6 and rollback preserved synthetic data. [Public Windows run](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44239119352)

## Where chats go

Nine isolated cloud and media checks passed, including a two-client round trip through the deployed encrypted sync service. A native Apple client and a Windows-compatible client exchanged synthetic encrypted events. The installed Windows interface passed eight interaction checks. They included local PDF extraction, Windows photo OCR, bundled offline dictation, cancellation and workspace selection. Protected Windows pairing and revocation were also checked across restarts.

The provider adapters were exercised with synthetic model lists and streams for five services. The OpenRouter sign-in check used a browser callback, PKCE verification and a simulated credential exchange. Paid customer-account inference, a live customer's OpenRouter consent and compatibility with every consumer PC were outside these checks.

Windows ran 39 core tests, 16 navigation checks, 12 interface-polish checks, eight phone settings checks, four tool-panel checks and a separate reliability suite. On iOS the signed TestFlight pipeline ran eleven simulator UI tests. The iOS build is a separate distribution.

## Try the same workflow

Use the title menu to choose Private or Cloud. OpenRouter sign-in and API connections can create chats inside Noir. Opening ChatGPT, Claude, Gemini or Mistral Vibe uses the official service and its existing plan. [Get started](https://noirgen-noir-launch.etherealtune1.chatgpt.site/start.html)
