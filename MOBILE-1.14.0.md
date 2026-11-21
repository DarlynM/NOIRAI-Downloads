# Noir for iPhone and iPad 1.14.0

Signed build 20006 is available to internal TestFlight testers. The Noir Public Beta group has build 20006 in Waiting for Beta Review. Public enrollment is awaiting Apple approval. The separate 1.12.1 App Store submission uses automatic release on approval. [Current mobile availability](https://noirgen-noir-launch.etherealtune1.chatgpt.site/support.html#iphone)

Use the model control in a chat to choose a compatible on-device model, a paired PC or a cloud provider. A phone project can hold its own files, changes, tasks, chats and notes. Select the text you want to add to a draft before sending it to a model. The Apps directory includes Gmail, Drive, Google Calendar, Slack and GitHub. [Actual iPhone and iPad screenshots](https://noirgen-noir-launch.etherealtune1.chatgpt.site/press.html#ios-current)

## Verification

- All 25 native iPhone UI scenarios passed across a full run and a focused rerun on the same application sources. The project test created and edited a file, inspected its recorded change, completed a task, saved a note, selected it for a draft, checked the exact text and reopened the project after restart.
- The iPhone simulator found the public Noir repository through GitHub. Fourteen native connector checks exercised scoped provider reads and failures. Account-authenticated Google and Slack reads were tested with controlled responses. Live access depends on the account and permissions granted.
- Sixteen scoped conversation and consent fixtures passed, including boundaries between local, paired and cloud destinations.
- The native screening benchmark accepted all 48 ordinary-work and eight family/education examples. It withheld eight of 100 held-out math prompts. A withheld cloud request kept the draft on the phone and sent no request.
- Final Windows 1.14.1 pairing tests covered trusted reconnect, file transfer and integrity, conflicting edits and revocation through the production relay with software peers. Physical iPhone cellular handoff and on-device Apple Intelligence generation remain unverified. The simulator reported that its on-device model was unavailable.

The signed distribution IPA has SHA-256 `5d9825af2b8305390011ef892e44788888ac5258c3809b6bbbe16a157a9ee132`.
