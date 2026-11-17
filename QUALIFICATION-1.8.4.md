# NOIR 1.8.4 qualification

1.8.4 improves everyday navigation and recovery. Attached files stay with their chat, stale file/search results cannot replace a newly selected project, failed sends recover their draft, IME composition does not send a message, dialogs block background shortcuts, and the inspector preserves room for chat. Code-copy feedback confirms success or offers a retry.

- Nine broader regression suites passed: downloads, model library, maintenance, protected commands, reliability, conversation/clean-start behavior, streaming, organization, and optional tools.
- Thirty actual React interaction checks passed using synthetic data.
- Nine real local-model checks passed in the public-installed application, covering Review, Review Edits, Agent, explicit command approval, deletion during generation, and restart persistence.
- An anonymous cold public installation downloaded five runtime archives with no runtime cache and verified all 2,119 application files.
- Independent Windows Server 2022 and 2025 machines each downloaded fresh runtimes and two fresh text models. All 41 application checks passed, including real image generation on Server 2025. [Complete run](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44129731866).
- Upgrade from 1.8.3, rollback, and synthetic-data preservation passed. The publisher receipt verified and rejected tampering.
- The production renderer was visually checked with synthetic data at 1312 x 1000. Narrow layout was component-tested.

Owner projects and conversations were not inspected. Application source remains private. Existing projects, chats and model files are preserved by the update.

## Limits

The Windows executable is unsigned. Hosted CPU checks do not establish compatibility with every consumer Windows version, GPU or model. Native selected-window automation was not repeated in this polish release. This evidence does not promise an absence of unknown bugs.

Installer SHA-256: `09d7eabfa8fd3dd8e2b66f73ea24a95bd0c23cc9d2401d9c7d17d595141d2680`.
