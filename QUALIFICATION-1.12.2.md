# Windows 1.12.2 release checks

The Windows x64 installer is 94,427,648 bytes. Its SHA-256 is `3819e013d1c8ee15183c88ccd910738afc59099d8beacbe9fbec2b2a5ecf7d22`. We downloaded the public installer anonymously and started with an empty installation and runtime cache. The installer took about two minutes on this workstation. All 2,144 files matched the manifest. All five runtime archives verified. The optional Git download verified and ran as 2.56.1.windows.1. The updater’s Ed25519 receipt matched this exact installer and rejected a changed byte count. Windows Authenticode signing is a fundraising goal.

## Receiving desk

The sidebar worksheet opened with zero installed models in a fresh profile. The sample produced **3 missing and 1 extra**, then **2 missing and 1 extra** after one more washer. The counts responded to typed quantities, renamed items, extra rows and removed rows. Invalid fractional quantities disabled copying. The edited worksheet reopened after an app restart.

The two published messages also worked in local Chat with Qwen 3 0.6B loaded. The corrected count survived closing and reopening the app between messages. A different item list produced 19 missing and 14 extra, then 19 missing and 17 extra. A table with reordered columns and an ordinary arrival message produced 9 missing and 3 extra, then 9 missing and 6 extra. Unrelated messages went to the model. The receiving replies identify themselves as calculations on the PC.

## Local chat

Using ordinary chat on a Windows 10 Home workstation with an Intel i7-12700KF and two RTX 3060 12 GB cards, each model received two CPU prompts and two CUDA prompts. Runtime logs confirmed CPU operation and GPU layer offload. All eight replies reappeared after restarting Noir.

| Model | Correct replies | First-use observation |
| --- | --- | --- |
| Huihui Qwen 4B | 4 of 4 | Correctly identified the Pacific Ocean and Saturn, calculated a meeting end time, and translated “cat” into Spanish. |
| Qwen 3 0.6B | 3 of 4 | Incorrectly named the Atlantic as the largest ocean. The catalog identifies this model as a small download for short drafts and device checks. |

These are observed answers to four specific prompts per model. A CPU-only consumer laptop was not part of this hardware run.

## Regression checks

237 checks passed across 16 desktop suites. They covered the task queue, chat and model switching, protected commands, recovery, reviewed edits, updater verification and cloud-provider fixtures. Another 45 companion transport checks passed.

## Independent hosted Windows tests

Fresh Windows Server 2022 and 2025 machines downloaded the public installer and all five runtimes. Both jobs passed the editable worksheet, clipboard, real CPU chat, protected tools, model switching, code review, and restart checks. The 2025 job also downloaded the image runtime and model and generated a 512-by-512 PNG on CPU. The job logs show each check.

## Updating from 1.12.1

A disposable installation passed low-space rejection, recovery after an interrupted update, upgrade to 1.12.2 and rollback to 1.12.1. All 2,144 files matched the expected manifest after each operation. Synthetic chat, model and project files survived throughout.

## iPhone and iPad

Windows 1.12.2 and a software phone peer paired through the real desktop QR and trust controls over the live encrypted relay. The pair caught up after a desktop restart, retained conflicting versions for resolution, transferred attachments byte-for-byte both ways and revoked access. A physical Wi-Fi-to-cellular handoff and the activity timer on a real device running iOS build 20004 still need testing.

The separate iPhone and iPad version is 1.12.1 (20004). App Store Connect recorded internal TestFlight availability and Waiting for Review on November 20. Apple is set to release it automatically after approval. Apple accepted the corrected listing text explaining trusted key sharing and kept the same build in review.

[Windows release](https://github.com/DarlynM/NOIRAI-Downloads/releases/tag/v1.12.2) · [Public Windows installation run](https://github.com/DarlynM/NOIRAI-Downloads/actions/runs/44830136933) · [Receiving desk guide](Windows-Pilot.md)
