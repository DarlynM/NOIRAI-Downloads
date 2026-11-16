# NOIR 1.5.0 for Windows x64

Free local AI by NoirGen LLC. Open **NOIRAI** from the desktop; the interface is **NOIR**.

The top model menu now shows all eight catalog choices, including downloads, instead of only installed models. Browse all models opens the library directly; a fresh installation offers a clear first-model action. Four publisher-described uncensored or abliterated choices are available, alongside smaller general and coding models. Compatible text GGUF imports and local server connections remain supported. Models download separately and retain their own licenses.

The charcoal interface drops the persistent Local badge. Escape closes the model window without stopping an active chat. Clear conversation history is available in Settings, with protection for active work and unsaved editor changes. It removes active chat, task and review history while keeping project files, models and preferences. Existing backups and exports are separate. Updating does not automatically delete history.

## Install

Download `NOIRAI-1.5.0-Setup.exe` and verify it against `SHA256SUMS.txt`. The approximately 20 MB online installer downloads about 921 MB of pinned runtimes plus optional Git. Models need additional disk space and memory. Start with a smaller model if unsure.

This build is unsigned. Do not disable security protections to bypass a warning; contact support@noirgen.com with the warning and checksum.

## Verification

78 isolated checks passed for this build. The exact public installer was downloaded anonymously into a fresh folder with zero preloaded runtime archives. All five runtime archives, optional Git and 2,115 installed files verified. The packaged app downloaded Huihui Qwen 4B and Qwen Coder 1.5B from their publishers, produced real replies, restored chats and its selected model after restart, and switched models.

Real checks exercised deletion during generation, protected Node and Python commands, Git checkpoints, an uncensored model creating a reviewable edit, apply, execute and revert. History reset was refused during active work; an idle reset preserved synthetic project bytes and models, and a new real reply worked afterward. UI checks covered scrolling, history selection and the full model picker.

Testing used one Windows computer and isolated synthetic data, not a clean-OS VM or all hardware. The four unchanged uncensored catalog files retain their separate 1.4.0 integrity and benign CPU/tool-protocol qualification; those are not counted as new 1.5 checks. See `RELEASE-VERIFICATION.json`.

## Privacy and support

NOIR is proprietary freeware. Editable application source is private; runnable Electron bundles can be inspected. No private projects, conversations, settings or model files are published. Managed inference has no telemetry or cloud-model fallback. Downloads and external servers have separate networking behavior.

[First-run guide](https://noirgen-noir-launch.etherealtune1.chatgpt.site/start.html) · [Model guide](https://noirgen-noir-launch.etherealtune1.chatgpt.site/models.html) · [Report a synthetic reproduction](https://github.com/DarlynM/NOIRAI-Downloads/issues/new/choose)

[Optional support on GoFundMe](https://www.gofundme.com/f/help-build-noir-free-local-ai-for-everyone). The app is free and donations are not required. Initial campaign goal: $10,000 USD. Support: support@noirgen.com.
