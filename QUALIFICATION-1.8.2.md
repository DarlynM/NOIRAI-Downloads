# NOIR 1.8.2 qualification

NOIR 1.8.2 adds expandable project chats and makes coding setup available directly from the composer. Agent, Review Edits and Review are selectable; prerequisites appear with actions instead of disabled menu choices. The model compatibility safeguard remains enforced.

- **20 UI workflow checks:** the actual React App and Tools components with synthetic in-memory IPC. Project expansion/collapse, nested chat actions, completed-chat moves, create-from-chat, draft retention, all five modes, coding checks (pass/fail/stop/retry), model switching, slash-command preflight, deleting during generation, archive/search, duplicate New chat prevention and pending tool recovery passed.
- **109 backend regression checks:** download/resume/integrity, model library, maintenance, tool protocol recovery, protected commands, update reliability, conversations, clean start, streaming completion, project organization and optional tools passed.
- **8 additional checks against the downloaded executable:** project creation, expansion metadata, moving an existing chat, create-from-chat, stale-move rejection, failed preflight recovery, file save/read, restart persistence and deletion preserving project files passed. These are API checks, not pointer-driven UI tests.
- **Fresh public installation:** the installer was downloaded anonymously. All five runtime archives downloaded into an empty installation with no preseeded cache; all 2,119 files verified. Optional Git downloaded and ran.
- **Update and rollback:** 1.8.1 → 1.8.2 → 1.8.1 passed with synthetic conversation, project and model sentinels preserved. The signed update receipt and installer SHA-256 verified; tampering was rejected.

## Hosted Windows checks

The exact installer passed [Windows 2022 and Windows 2025 qualification](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/43981904098), with 14 and 17 application checks. Both machines downloaded two fresh text models, produced real CPU replies, exercised coding/edit review, protected commands, cancellation/deletion, model switching, MCP discovery and approval, and restart persistence. Windows 2025 additionally downloaded the image runtime and model, generated a real decoded PNG, and retained it after restart.

## Scope and limits

The running synthetic app exposed the new project controls and displayed coding setup after a synthetic /agent prompt. Native screenshot capture timed out, and pointer input reported unavailable geometry. Native pointer and complete visual/small-window qualification are not claimed. Project and menu interactions passed in the actual React component tests. The native selected-window control test was not repeated in this patch.

These checks do not establish universal hardware, model, plugin or Windows-application compatibility, and cannot prove the absence of every unknown bug. Prior GPU qualification is separately documented in [1.8.0](./QUALIFICATION-1.8.0.md). The installer remains unsigned by Windows Authenticode. Application source stays private. No owner projects or conversations were read.

Installer SHA-256: `920ca923a3768cc556fa1753c54928ddfeaa8ceedaa0d1f54c427aa37ef8c430`.
