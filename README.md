# NOIR

Free local AI for Windows, by NoirGen LLC.

## Windows 1.14.0

Open **Tools** in the composer. Connect Gmail, Google Drive, Google Calendar, Slack or GitHub to search and read with the access you choose. Select public GitHub to search repositories without an account. For an offline calculation, add Calculator and enter `(24 + 6) / 3`.

Use the project panel to edit and search files, inspect changes, track tasks and save memory for later chats.

Keep local and connected cloud replies in the same chat or project. Choose the model beside the composer and review the text you share. Use **Chat history** to jump to an earlier message and **Run log** to inspect recorded actions. When a model asks for a decision, choose an answer or write your own.

[Try the receiving desk](Windows-Pilot.md) to reconcile two deliveries locally.

[Help fund Windows publisher signing and device testing](https://www.gofundme.com/f/help-build-noir-free-local-ai-for-everyone) or [contact NoirGen about partnerships and investment](mailto:social@noirgen.com?subject=Noir%20partnership%20inquiry).

Download Noir for Windows x64. Run a local model on your PC or connect your own provider API key. Review which messages go to a cloud provider before sending. Provider charges depend on your account.

[Download Windows 1.14.0](https://github.com/DarlynM/NOIRAI-Downloads/releases/download/v1.14.0/NOIRAI-1.14.0-Setup.exe) · [Release notes and SHA-256](https://github.com/DarlynM/NOIRAI-Downloads/releases/tag/v1.14.0) · [Quick start](https://github.com/DarlynM/NOIRAI-Downloads/releases/download/v1.14.0/Noir-Quick-Start.md) · [Release checks](QUALIFICATION-1.14.0.md)

The download has been verified from an empty installation. The Windows installer is unsigned. On iPhone and iPad, internal testers have access to 1.13.0 build 20005. Apple is reviewing external beta access. The separate 1.12.1 App Store submission is set to release automatically upon approval.

This repository contains release documentation, public distribution metrics, feedback forms and official Windows installer downloads. NOIR is proprietary freeware; its development source is private.

[Watch a 30-second local image demonstration](https://youtube.com/shorts/0nhqi6nuC6A) · [Download the latest release](https://github.com/DarlynM/NOIRAI-Downloads/releases/latest) · [First-run guide](https://noirgen-noir-launch.etherealtune1.chatgpt.site/start.html) · [Support development](https://www.gofundme.com/f/help-build-noir-free-local-ai-for-everyone)

Chat with compatible local models, keep conversations, review code edits, and run protected tools. NOIR offers eight pinned downloads, including four community uncensored / abliterated models: Huihui Qwen 4B and 27B, Dolphin 3 8B, and MeroMero 26B-A4B. Browse the complete catalog by choosing **Browse all models** in the chat composer’s model picker. Search or filter the catalog, resume interrupted model downloads, import a compatible text GGUF, or connect a supported loopback model server. Model files download separately; compatibility varies.

The desktop shortcut is **NOIRAI**. The app's interface is **NOIR**. The approximately 94 MB installer requires Internet access to download approximately 921 MB of verified runtimes, plus optional Git tools and your chosen models. After setup, managed GGUF inference runs locally.

Read the release notes, requirements, license and privacy notice before installing. Initial releases are unsigned. Verify the published SHA-256 and use only this official release location.

Support: support@noirgen.com. Use synthetic examples when reporting problems; do not include private projects, conversations or credentials.

[Report a reproducible problem](https://github.com/DarlynM/NOIRAI-Downloads/issues/new/choose) · [Press kit](https://noirgen-noir-launch.etherealtune1.chatgpt.site/press.html) · [NOIR on Bluesky](https://bsky.app/profile/noirgenai.bsky.social) · [NOIR on Instagram](https://www.instagram.com/noirgen.ai/) · [NOIR on YouTube](https://www.youtube.com/@NoirGen-AI) · [Model guide](https://noirgen-noir-launch.etherealtune1.chatgpt.site/models.html)

[Progress and roadmap](https://noirgen-noir-launch.etherealtune1.chatgpt.site/progress.html) · [Voluntary hardware report](https://github.com/DarlynM/NOIRAI-Downloads/issues/new?template=hardware.yml) · [Aggregate download observations](https://github.com/DarlynM/NOIRAI-Downloads/tree/main/metrics)

1.7 adds completed-chat moves, create-project-from-chat, undo, draft preservation during navigation, and a streaming completion fix. Memory guidance, private support-report previews, and verified manual updates with rollback are included. [Qualification and release scope](./QUALIFICATION-1.8.4.md).

1.8 adds optional local image generation, explicitly approved local MCP calls and selected-window accessibility tools. [Tools and permissions](https://noirgen-noir-launch.etherealtune1.chatgpt.site/tools.html).

[NOIR on X](https://x.com/NoirGenLLC) · [NOIR on TikTok](https://www.tiktok.com/@noirgen_llc)

1.8.1 simplifies Tools with focused image creation, a short plugin connection form, and searchable window controls. It improves recovery after stopped tasks and keeps window access releasable while an action is pending.

1.8.2 expands project chats in the sidebar and puts project selection and Enable coding directly in the composer. Model-switch errors recover, and drafts remain intact during setup.

1.8.3 fixes a reproduced coding completion loop. Review can finish its findings without an extra tool call. Review Edits still waits for edit approval, and Agent still follows edit and command permissions. Two fresh hosted Windows runs passed with uncached runtime and model downloads. [Try one local reply, then a reviewed edit](https://noirgen-noir-launch.etherealtune1.chatgpt.site/try.html).

1.8.4 keeps attached files and failed drafts with their chat, prevents stale project/search results during navigation, improves keyboard composition and dialog shortcuts, and preserves readable chat space beside the inspector. [1.8.4 qualification](./QUALIFICATION-1.8.4.md).

1.8.6 adds in-chat search, improves scrolling as images appear, and gives you control over exactly which chats a paired phone can see. Moving a shared chat into a project revokes its phone access. The iPhone companion is in TestFlight. [Read the 1.8.6 qualification results](./QUALIFICATION-1.8.6.md).
## Version 1.9.3

In Cloud chat, select OpenAI, Claude, Gemini or Mistral to use the provider’s own API key. OpenRouter is optional. A saved OpenRouter connection no longer changes your choice of provider. Before sending, Noir shows the destination, the selected history and the account supplying the quota.

NoirGen has requested ChatGPT subscription access. Personal Claude and Gemini subscriptions currently offer no sign-in for native Noir chat. Eligible plans may include separate API credits you can use through a linked provider account. [Provider access guide](https://noirgen-noir-launch.etherealtune1.chatgpt.site/start.html#spaces) · [1.9.3 verification](./QUALIFICATION-1.9.3.md)

## Version 1.9.2

Choose the model beside Send to switch between a local model and a connected cloud provider in the same standalone chat. Noir shows where each reply came from. Before a cloud send, choose the new message alone, this connection’s history, or earlier cloud messages across providers. Local messages and project files stay on your devices.

Sign in with OpenRouter or connect a direct provider API key. Each reply stays in Noir. Optional encrypted sync copies the cloud portion of a conversation. [Qualification and limits](./QUALIFICATION-1.9.2.md) · [Provider and privacy guide](https://noirgen-noir-launch.etherealtune1.chatgpt.site/start.html#spaces)

## Version 1.9.1

Use the Noir title menu to choose Private or Cloud. Bring your existing provider subscription to its official service, sign in to OpenRouter, or connect an API key for a conversation inside Noir. Native cloud history can be encrypted and synced across devices. File and media tools let you review extracted text before sending. [Qualification and limits](./QUALIFICATION-1.9.1.md) · [Help with provider accounts and privacy](https://noirgen-noir-launch.etherealtune1.chatgpt.site/support.html)
