# NOIR 1.8.6 for Windows

The public installer was downloaded anonymously into an empty directory. It fetched five runtime archives and verified 2,119 installed files. The test downloaded its models separately through the app.

| Check | Observed result |
| --- | --- |
| Fresh Windows installs | Windows Server 2022 and 2025 passed. The first 2025 attempt timed out in the community-model check. The repeat passed using the same installer. |
| Local chat | Two newly downloaded models answered on CPU. Model switching, restart, and deleting a generating conversation passed. |
| Coding | Review reported findings. Review Edits applied an approved patch. Agent ran an approved command in an isolated workspace. Protected Node and Python tests passed. |
| Optional tools | Plugin discovery, tool approval and execution passed. The image-enabled job downloaded the generation stack and produced a decodable PNG. |
| Desktop and iPhone connection | The packaged desktop used Windows key protection and exchanged encrypted test chat messages through the relay. Revocation and reconnect were exercised with a synthetic phone client. |
| Upgrade and rollback | Upgrading an isolated 1.8.4 installation and restoring its 2,119 original files both passed. Synthetic conversations, projects and model files survived. |
| Privacy | A support report generated during the test excluded the synthetic chat text and installation path. |

The setup file is 20,148,736 bytes. Its SHA-256 is `0134dcfc3b77c8c0f37d7565ace164fbebac426216103e700072358ec946d067`. Windows may show an unknown-publisher prompt because the installer is unsigned. CPU results on hosted machines do not establish performance on every Windows PC or GPU.

[Windows qualification run](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44218188925) · [Release files and checksums](https://github.com/DarlynM/NOIRAI-Downloads/releases/tag/v1.8.6)
