# NOIR 1.8.0

Free local AI for Windows, by NoirGen LLC. The desktop shortcut is **NOIRAI**; the interface is **NOIR**.

## New optional tools

- **Images:** verified Stable Diffusion 1.5 setup, compatible complete SD 1.x/SDXL checkpoint imports, CPU or Vulkan generation, Stop, a persistent local gallery, and PNG export.
- **Plugins:** explicitly connect and enable a loopback Streamable HTTP MCP server. Inspect tools and arguments, approve individual calls, and disconnect when finished. Changed definitions invalidate approval. Tokens use Windows encryption.
- **Computer:** explicitly select one Windows window. Inspect its accessibility controls and approve individual actions. Password values are excluded from inspection. Permission ends on release or restart.
- **Agent recovery:** approved local extension results continue with a constrained response format. This fixes a reproduced native-template loop that could request a second approval after a successful plugin call. Approval and denial are covered through the real task queue.

The 1.7 chat-to-project moves, create-from-chat, undo, draft navigation, scroll behavior and streaming completion fixes remain included. Drafts persist during navigation, not across restarts.

## Qualification

173 isolated regression checks passed, including installer interruption/disk/integrity cases, chat cancellation and deletion, scrolling, task recovery, model guidance and binding, support-report exclusions, update receipt checks, and tool permissions. The packaged renderer and preload passed 47 UI checks within that total. Fixtures contain synthetic data only.

Both fresh hosted Windows environments downloaded this exact public installer, five runtime archives and two models into empty libraries. Server 2022 passed 14 real app checks. Server 2025 passed 17, including a fresh image runtime and 4.3 GB checkpoint download, real CPU generation and gallery persistence after restart. Neither used preloaded model or application caches. [Public qualification run](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/43951978824).

An anonymous download of this exact installer also passed a Windows 10 installation into an initially empty folder. All 2,119 installed files verified. A network interruption was recovered using only downloads from that attempt; no preseeded application or model cache was supplied. Actual protected npm tests, Git status/diff, and checkpoints passed against the public package. An installation from 1.5 to 1.8 and rollback verified all application files and preserved synthetic chat/project/model sentinels.

Both original pinned Qwen 27B and MeroMero 26B-A4B models produced real replies and passed coding checks with measured allocation on both RTX 3060 12 GB GPUs at 4,096-token context. Image generation passed on CPU and each Vulkan GPU. GPU image work released the managed chat model, generated a valid image, reloaded the model, and returned a real chat response. Local GPU/image tests used previously verified public model binaries; they are separate from fresh network-download qualification.

The real model-to-plugin test requested one approval, executed once, returned 42, and completed. Manual plugin calls, replay rejection, cancellation, selected synthetic window control and restart defaults were also checked.

## Reliability work and limits

| Area | Implemented and checked | Remaining coverage |
| --- | --- | --- |
| Installation and recovery | Pinned downloads, SHA-256 verification, retry/resume, transactional install and disk-space checks | More consumer Windows devices and GPU vendors |
| Chat and coding | Cancellation/deletion recovery, scroll stability, model switching, review/apply/run/revert, scoped task continuation | Model behavior varies; a compatibility check is not a guarantee of task quality |
| Model guidance | Eight pinned options, memory estimates, imports and loopback servers; coding checks bound to model/runtime/profile | Other architectures and community checkpoints need individual verification |
| Updates | Publisher-signed receipts, verified manual installation and application rollback | Windows Authenticode signing remains unfunded |
| Private support | Optional previewable report excluding chats, project contents, credentials and private paths | Users choose whether to export/share it; no automatic upload |

Fresh hosted Server 2022/2025 environments and this Windows 10/NVIDIA setup do not certify every computer. AMD/Intel GPUs, ARM, macOS and Linux remain unqualified. On the development PC, the system DNS resolver could not resolve Hugging Face during one optional image-download check; no global DNS settings were changed. This does not affect installed local models. Network and publisher availability can still interrupt setup; Retry retains verified progress.

MCP support is loopback Streamable HTTP, with text results; it does not include arbitrary plugin program installation, remote/stdio transports, or automatic project access. Plugins execute outside the protected coding sandbox and can contact their own services. Computer controls rely on the selected app's Windows accessibility support; they are not unrestricted desktop automation. Screenshots can include private information visible in the chosen window. Image support is for compatible complete SD 1.x/SDXL checkpoints, not every image model or extension. Read the release's TOOLS.txt.

## Install or update

Download the installer and compare it with SHA256SUMS.txt. For an existing installation, close NOIR and choose its current folder in Setup. From 1.6 onward, download the installer and update.json receipt together and use **Settings → Updates & recovery → Choose update**. Saved chats, model files and projects are preserved. Rollback restores application files, not project edits.

Models and optional image components download separately under their publishers' licenses. Run **Check coding tools** before coding with a new model. NOIR is proprietary freeware; editable development source remains private. Electron application bundles can be inspected. The Windows installer is unsigned for Authenticode; its signed update receipt is a separate protection and does not remove SmartScreen notices.

No zero-bug, universal model compatibility or full Codex-parity claim is made. Support is optional. Use synthetic examples or preview an optional support report before sharing it.

Installer SHA-256: `e621f20cbe8c2b4a883d9a8f28c11b2f0cbda6800a91b0138ef8aeb80326ed2b`.
