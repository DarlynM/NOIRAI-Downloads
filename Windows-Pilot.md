# The receiving desk

Can a local AI catch a short shipment when another item has a surplus? Try it on a Windows x64 PC in about ten minutes after setup. Two fictional delivery slips and a hand count give you an independent answer.

**[Download Noir for Windows](https://github.com/DarlynM/NOIRAI-Downloads/releases/tag/v1.12.1)** · **[Print the two-page worksheet](https://github.com/DarlynM/NOIRAI-Downloads/releases/download/v1.12.1/Noir-receiving-desk-pilot.pdf)**

## Run the test

1. From the release, download `NOIRAI-1.12.1-Setup.exe`. The installer is unsigned. The release provides its SHA-256 checksum. Use a PC where your normal software policy permits installation.
2. Open **NOIRAI** from the desktop shortcut. In the model picker, download a local model that fits the PC. Internet is needed for initial setup and the model download. This exercise runs locally with no provider account or API key.
3. Start a new chat with that local model and paste the prompt below. If you try a second model, use a fresh chat and the same prompt.

```text
Order J17, in pieces. Each line gives ordered, slip A, slip B.
Blue washers: 30, 18, 9
Green tape: 12, 7, 5
Red caps: 9, 6, 4

Reconcile each item. Show received totals and variance against the order.
Report total pieces missing and total extras separately.
What should the receiving lead recount first?
```

Then send this in the same chat:

```text
One more blue washer arrives. Update the affected row. How many pieces are missing and how many are extra now?
```

<details>
<summary><strong>Check the hand count</strong></summary>

| Item | Ordered | Received | Difference |
| --- | ---: | ---: | ---: |
| Blue washers | 30 | 27 | 3 short |
| Green tape | 12 | 12 | 0 |
| Red caps | 9 | 10 | 1 extra |

The first delivery totals are 51 ordered and 49 received. Recount the washers and caps. A net difference of two hides the individual discrepancies. After one washer arrives, 50 pieces have arrived in total, with two washers missing and one cap extra.

</details>

## Tell us how it went

Reply to the person who invited you or [email NoirGen’s pilot mailbox](mailto:social@noirgen.com?subject=Noir%20Windows%20pilot%20result). If you use GitHub, you can also [report a pilot result or setup blocker publicly](https://github.com/DarlynM/NOIRAI-Downloads/issues/new?template=windows-pilot.yml). One line is enough. Choose whichever describes your experience:

- **Ran it** — Windows PC or GPU, model name, missing/extra counts on each turn, and the first thing that slowed you down.
- **Stopped during setup** — the step you reached and what you saw.
- **Interested in testing with your team** — the type of workflow you want to try.

The results people volunteer help us choose fixes. A model can give a wrong answer. Fictional quantities are all we need for this exercise.
