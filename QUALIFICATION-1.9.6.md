# Noir 1.9.6 release checks

[Windows installer](https://github.com/DarlynM/NOIRAI-Downloads/releases/download/v1.9.6/NOIRAI-1.9.6-Setup.exe) · [Test your own API keys (PDF)](https://github.com/DarlynM/NOIRAI-Downloads/releases/download/v1.9.6/Noir-Quick-Check.pdf) · [Clean-host results](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44423348543)

| Check | What passed |
| --- | --- |
| Public installation | An independent download on the development PC fetched five runtime archives with an empty cache. The installed executable, application package and 2,140 files matched the release manifest. Windows Server 2022 and 2025 independently installed the public download on clean machines. |
| Local inference | Both clean hosts downloaded the community Huihui Qwen model and a second local model, received real CPU replies and restored the selected model and chat history after restart. |
| Editing and tools | Clean hosts exercised project organization, cancellation, protected Node and Python execution, change review and approval, and a local MCP plugin. The 2025 host also downloaded the image runtime and model and decoded a newly generated PNG. |
| Updates | The update receipt accepted the published installer and rejected altered metadata. An upgrade from 1.9.5 and a rollback preserved the synthetic history and verified all 2,140 application files. |
| Phone and PC | Ten checks ran against the packaged Windows app, real Windows key protection and the live encrypted relay using a simulated phone. They covered pairing, explicit sharing, real local inference, reconnection, restart, revocation and the visibility of shared chats. |
| Core and cloud | All 39 core checks and 13 cloud-provider regression checks passed. TypeScript reported zero errors. In a fresh profile of the installed Windows build, OpenAI, Claude and Gemini each rejected a synthetic invalid key. Noir saved no account and sent no chat prompt. Cloud tests include direct provider routing, quota rejection, review boundaries and cancellation using controlled provider responses. |

The desktop installer is 94,361,088 bytes. Its SHA-256 is `d719b8622660f1c43c880ed58592ada115b921c937c0d8518847056bdc638a82`. Windows Authenticode signing is pending. These tests cover the named hosts and models. Real replies from a customer’s OpenAI, Claude or Gemini API account depend on that account’s model access and quota. Apple controls iPhone distribution separately.
