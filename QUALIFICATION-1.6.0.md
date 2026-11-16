# NOIR 1.6.0

This release makes first installation, local coding, updates and recovery more dependable.

- Resumable runtime downloads, disk-space preflight, verified staging, interruption recovery and rollback of application files.
- Memory guidance based on free RAM/VRAM, plus clearer model-load errors. Coding checks are tied to the model file, inference runtime and context setting.
- Optional support reports with preview-before-save. Conversations, project contents, credentials and private paths are excluded; nothing is uploaded automatically.
- Manual updates verified with a publisher-signed receipt and installer hash. No background checks or automatic downloads.
- Fixed the bundled Python adapter version mismatch and long Windows temporary-path failures found by fresh installation tests. Expanded cancellation, deletion, scrolling and coding-recovery regression coverage.

## Verified

113 isolated regression checks; full 1.5 → 1.6 → 1.5 update/rollback with synthetic data retained; actual resumed runtime transfers; and anonymous installation with no cached runtimes.

Two fresh hosted Windows VMs downloaded their own models and passed real CPU replies, protected Node/Python execution, model-created edit review/apply/run/revert, deletion recovery, switching and restart persistence. A Windows 10 machine also passed fresh installation, the same application/runtime chat checks, and real npm, Git and checkpoint checks. [Public fresh-install run](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/43831251534).

## Install or update

From 1.5 or earlier, close NOIR and run Setup in the existing installation folder. Chats, projects and models are preserved. From 1.6 onward, download the installer and its update.json receipt together, then use Settings → Updates & recovery → Choose update. Rollback becomes available after an update and restores application files; it does not undo your project edits.

Models download separately. Eight pinned options include four community uncensored/abliterated choices. Compatible GGUF imports and loopback servers remain available. Run Check coding tools before using coding modes; a format check does not guarantee every model-generated task.

## Scope

Windows x64. Hosted Server 2022/2025 tests are not certification of every Windows 10/11 computer or GPU. CPU inference is supported; suitable NVIDIA hardware can accelerate compatible models. Other GPU backends and operating systems remain future qualification work.

The Windows executable is unsigned. The signed update receipt is separate from Windows Authenticode and does not remove SmartScreen notices. Source remains private; NOIR is free to use. Support is optional.

Installer SHA-256: `fdd133b5e665ce013fd6ea0d3c812408d50b2bffe4dc1b42472bc354db2290fa`.
