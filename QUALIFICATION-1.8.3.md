# NOIR 1.8.3 qualification

The public installer fixes a reproduced coding completion loop: some local models kept calling tools after their work was done. Native coding runs now accept a complete final answer, while edit and command permissions remain enforced.

- 21 core regressions and 20 synthetic UI interaction checks passed.
- 9 actual public-installed application checks passed with Huihui Qwen 4B on CPU: Review findings without writes, revision-bound Review Edits approval, stale approval rejection, permitted Agent edits, command approval and execution, pending edits without permission, deletion during generation, and persistence after restart.
- An anonymous cold installation downloaded all five runtime archives, used no runtime cache, and verified 2,119 application files.
- Two independent GitHub-hosted Windows VMs downloaded the public installer and two fresh models each. All 19 application checks passed on Windows Server 2022; all 22 passed on Windows Server 2025, including local image generation there. See the [complete run](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/43994055314).
- Synthetic 1.8.2 to 1.8.3 upgrade, rollback, and data-preservation checks passed. The signed update receipt passed verification and rejected tampering.

Projects, chats and model files are preserved by the update. No owner projects or conversations were inspected; qualification used synthetic data. Application source remains private.

## Limits

The Windows executable is not Authenticode signed. CPU tests on hosted Windows Server VMs are not certification of every consumer Windows version, GPU, or model. UI interaction checks use the actual React application with synthetic IPC; they do not establish full native pointer or visual qualification. This evidence does not promise an absence of unknown bugs.

Installer SHA-256: `595472edba315aa72190dfb0fe0fd7a996a57d4abe49bc8561fd06233968299e`.
