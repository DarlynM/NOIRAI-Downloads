# NOIR 1.3.0 for Windows x64

NOIR is a free local AI desktop app by NoirGen LLC. The desktop shortcut is named **NOIRAI**.

This release adds a model library with pinned, SHA-256 checked downloads; compatible text GGUF imports; and loopback connections to OpenAI-compatible local servers such as Ollama and LM Studio. Imported models start in chat mode. A synthetic format check enables coding tools; it is not a guarantee of a model's coding quality.

Download the approximately 20 MB `NOIRAI-1.3.0-Setup.exe`, compare its SHA-256 with `SHA256SUMS.txt`, read the license, and install. An Internet connection is required for setup: the installer automatically downloads approximately 921 MB of pinned Electron, Node, Python, llama.cpp and CUDA runtimes from their official distribution locations, verifies SHA-256 checksums, and creates the desktop shortcut. Optional Git tools add a 38 MB download directly from Git for Windows. Models download separately. Start with a small model and check your available memory and disk space. External servers must be started separately; managed GGUF inference starts with NOIR.

The initial installer is unsigned. Code signing is part of the funding plan. Never bypass an antivirus detection; report it with the release filename and checksum.

## Verification

55 isolated checks passed: model transfers and endpoint validation, tool-protocol recovery, scrolling and conversation UI, fresh installation, automatic command isolation, real local replies, deletion during generation, persistence after restart, model switching, and protected Node/Python execution and a Git checkpoint.

The public installer was downloaded without authentication and installed into an empty isolated folder. All five runtime archives and optional Git downloaded from their official publishers; no developer runtime cache was preloaded. All 2,115 installed files matched the release manifest. An initial network attempt failed; subsequent empty-folder runs passed, including the installer's normal verification entry point.

Nine additional cold-install application checks passed. The installed application downloaded Qwen3 0.6B and Qwen2.5-Coder 1.5B through its own model library, verified their hashes, produced real CPU replies, restored chats and the selected model after restart, switched models, and executed protected Node/Python tools and Git checkpoint operations. These checks ran on one existing Windows x64 machine with isolated synthetic data; they are not a clean-OS VM or universal device certification.

Qwen3 0.6B, Qwen2.5-Coder 1.5B, and SmolLM2 1.7B produced real CPU replies and passed the model-format check. The catalog also offers Qwen2.5-Coder 7B; that download entry is pinned, but this release's new-model test run did not qualify its inference. Model capability and performance vary. These checks do not establish compatibility with every Windows computer or model.

## Privacy and licensing

NOIR is proprietary freeware. No editable application source, development repository, private conversations, projects, production settings or model weights are included in this repository or installer. Compiled desktop bundles ship as required to run the application and can be inspected; packaging is not encryption.

The app has no telemetry or cloud-model fallback. Model downloads contact their publisher only when selected. External local servers have their own privacy and networking behavior. Read `PRIVACY.txt` and `LICENSE.txt`; third-party notices are included in the installer.

Uninstall preserves local chats, models and project data. Keep your own backups. Review model-generated edits and commands before approving them.

Support: support@noirgen.com. Send version, model and reproduction steps using a synthetic example.

Optional development support: https://www.gofundme.com/f/help-build-noir-free-local-ai-for-everyone
