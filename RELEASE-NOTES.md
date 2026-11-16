# NOIR 1.4.0 for Windows x64

Free local AI by NoirGen LLC. Open **NOIRAI** from the desktop; the interface is **NOIR**.

This release centers model choice: eight pinned downloads, including Huihui Qwen 4B and 27B, Dolphin 3 8B, and MeroMero 26B-A4B. Discover has search and an Uncensored filter. Interrupted model downloads retain verified progress and offer Resume, including after an app restart. Completed downloads must match the pinned SHA-256 before installation.

Compatible text GGUF imports and loopback model-server connections remain available. Managed GGUF inference starts with the app; external servers must be started separately. Coding qualification now checks a two-turn create/result/finish exchange. The agent clearly distinguishes review proposals from applied edits and returns control after finishing. Model quality and compatibility vary.

## Install

Download `NOIRAI-1.4.0-Setup.exe` and compare its SHA-256 with `SHA256SUMS.txt`. The approximately 20 MB installer downloads about 921 MB of pinned runtimes from their official publishers, plus optional Git (38 MB). Models are separate downloads with their own licenses. Start with a small model that fits your available RAM and VRAM.

The installer is unsigned. Code signing is a funding priority. Do not disable security protection to work around a detection; send the warning and checksum to support@noirgen.com.

## Verification

72 isolated checks passed across downloads, model library, UI/scrolling/history, tool recovery and review, four uncensored models, and the actual packaged app. The final public installer was downloaded without authentication and installed into an empty folder with no preloaded runtime cache. All five runtime archives and optional Git downloaded from their publishers; all 2,115 installed files verified.

The installed app freshly downloaded Huihui Qwen 4B and Qwen Coder 1.5B through its own library, generated real local replies, restored conversations and its model after restart, and switched models. Deleting a conversation during generation released the queue. Actual protected Node and Python commands, Git checkpointing, and a real uncensored-model edit followed by review, apply, execution and revert passed. Its installer-created shortcut opened a native window that produced another real reply and left the composer usable.

The four uncensored candidates passed integrity checks, benign CPU replies and two-turn coding checks. Huihui 4B/27B and MeroMero used native calls; Dolphin used structured JSON. These results come from one Windows computer with synthetic data, not a clean-OS VM or universal hardware qualification. See `RELEASE-VERIFICATION.json` for the exact scope and installer hash.

## Privacy and support

NOIR is proprietary freeware. Editable application source, private conversations, projects, settings and model weights are not published. Compiled application bundles must ship to run the app and can be inspected; packaging is not encryption. The app has no telemetry or cloud-model fallback. Downloads contact publishers; external local servers have their own behavior. Uninstall preserves local chats, models and projects.

[First-run guide](https://noirgen-noir-launch.etherealtune1.chatgpt.site/start.html) · [Model guide](https://noirgen-noir-launch.etherealtune1.chatgpt.site/models.html) · [Report a synthetic reproduction](https://github.com/DarlynM/NOIRAI-Downloads/issues/new/choose)

[Optional development support](https://www.gofundme.com/f/help-build-noir-free-local-ai-for-everyone). Initial goal: $10,000 USD. No purchase is required. Support: support@noirgen.com.
