# NOIR 1.8.1 qualification

NOIR 1.8.1 simplifies the Tools panel and fixes recovery around pending actions. It keeps the existing inference, coding tools, model catalog and privacy boundaries.

- **Focused checks:** 4 in-memory React workflow tests and 20 tool-backend checks passed. These cover retry after setup failure, cancellation, duplicate submission prevention, per-call approval, and releasing window access during a pending action. The native selected-window interaction test was not repeated in this patch.
- **Fresh public installation on the development PC:** installer downloaded anonymously; all 5 runtime archives downloaded into an empty installation without a preseeded cache. All 2,119 installed files verified. Optional Git downloaded and ran.
- **Fresh hosted Windows installations:** [Windows 2022 and Windows 2025 qualification](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/43964721416) passed, with 14 and 17 application checks. Both downloaded two text models, loaded them on CPU, exercised local chat, coding/edit review, deletion during generation, model switching, MCP approval, and restart persistence. Windows 2025 also downloaded the image runtime and model and generated a real image.
- **Update and rollback:** 1.8.0 to 1.8.1 and rollback passed. Synthetic conversation, project and model sentinels were preserved. The publisher-signed update receipt and installer hash verified; a tampered receipt was rejected.
- **Additional fresh model downloads:** the development PC DNS repair was verified with fresh Qwen 0.6B, Huihui Qwen 4B and Stable Diffusion 1.5 downloads. All full-file SHA-256 hashes matched. Cancel/resume used only bytes downloaded during the test.

## Scope and limits

The automated Windows screenshot service was unavailable during this patch. Accessible controls and component behavior were checked, but a finished visual review and small-window layout qualification are not claimed. Prior 1.8 hardware checks remain separately documented in [1.8.0 qualification](./QUALIFICATION-1.8.0.md); they are not new 1.8.1 hardware certifications.

A 0.6B model gave one incorrect arithmetic answer in a local diagnostic. Streamed and non-streamed outputs matched exactly with a normal stop. This was model answer quality, not truncation or a corrupt download. Model quality and compatibility vary.

Local Streamable HTTP MCP servers, selected-window accessibility controls, and complete SD 1.x/SDXL image checkpoints remain the supported optional tools. This does not establish compatibility with every GPU, model, plugin or Windows application. The installer is not Windows Authenticode-signed. Application source remains private. No owner conversations or projects were inspected during qualification.

Installer SHA-256: `3bd943644a9cdfa574c7c187cc1ec430bc2463d4109b739ad09d93ae090dbe30`.
