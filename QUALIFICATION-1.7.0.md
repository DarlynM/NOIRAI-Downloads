# NOIR 1.7.0

Free local AI for Windows, by NoirGen LLC. Open **NOIRAI** from the desktop; the interface is **NOIR**.

## New in this release

- Move a completed chat into a project, create a project from that chat, remove its project association, or undo a move. Messages and chat identity are retained.
- Project renaming, project-specific chat lists, All chats, searchable destinations, and keyboard-accessible menus and quick actions.
- Unsent drafts stay with their chat while you navigate within the app. Drafts are not saved across restarts.
- A completed model response releases the conversation even when the local server keeps the HTTP connection open.
- Pending edits and active work must be resolved before a chat moves. Saved coding tasks retain their original project scope and cannot silently resume in another project.

The 1.6 reliability features remain included: verified resumable downloads, memory guidance, coding checks bound to model/runtime/context, previewable private support reports, publisher-verified manual updates, and application rollback.

## Verified

145 isolated regression checks, including 26 existing UI checks and 14 new navigation checks. UI fixtures are synthetic; the real packaged backend was also exercised separately.

Both fresh hosted Windows environments downloaded the public installer, five runtime archives, and two models with no preloaded cache. Each passed 11 real application checks: local replies, deletion recovery, protected Node/Python, model-created edit review/apply/run/revert, model switching, restart persistence, and chat organization. [Public qualification run](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/43923854575).

The same public installer passed a fresh Windows 10 installation, verification of all 2,116 app files, 11 real application checks, and three npm/Git/checkpoint checks. One publisher model transfer was interrupted; explicit in-app retry resumed and verified it successfully. Upgrade from 1.5 and rollback retained synthetic data. Both large pinned Qwen and MeroMero models also produced local replies and passed coding-format checks on two RTX 3060 12 GB GPUs; allocation was verified on both devices.

## Install or update

Download the installer and compare its SHA-256 with SHA256SUMS.txt. For 1.5 or earlier, close NOIR and run Setup in the existing installation folder. From 1.6 onward, download the installer and its update.json receipt together and use Settings → Updates & recovery → Choose update. Chats, models and project files are preserved. Rollback restores prior application files; it does not undo your project edits.

Eight pinned model downloads include four community uncensored/abliterated options. Compatible text GGUF imports and loopback model servers are supported. Models download separately and retain their own licenses. Run Check coding tools before coding with a new model.

## Scope

Windows x64. Fresh Server 2022/2025 VMs and this Windows 10/GPU setup do not certify every consumer computer. AMD/Intel GPU acceleration, ARM, macOS and Linux remain unqualified. Model behavior, speed and memory requirements vary.

The Windows installer remains unsigned for Authenticode. The publisher-signed update receipt is a separate protection and does not remove SmartScreen notices. No zero-bug or universal model compatibility claim is made.

NOIR is proprietary freeware. Editable development source remains private; Electron bundles can be inspected. Support is optional. Use synthetic examples for support reports; never send private work unintentionally.

Installer SHA-256: `33db7035e4f5951ae7f2d0a59f6527ada646dcd0d23137a475a3624f63b9cf77`.
