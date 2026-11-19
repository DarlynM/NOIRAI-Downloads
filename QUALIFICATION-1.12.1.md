# Noir 1.12.1 release checks

The Windows installer was downloaded anonymously from the public stable release into a new directory. Setup started with an empty runtime cache. All 2,144 installed files matched the package manifest. Electron, Node, Python, llama.cpp and the CUDA runtime matched the expected archive hashes. The optional Git download was also verified. The installer is 94,423,040 bytes. Its SHA-256 is `e15dbd95b6f864f107925744d91953552069195b4f5fc7d9cd08924e62b73fdb`. The updater’s Ed25519 receipt matched the installer and rejected a modified receipt. Windows Authenticode signing is unavailable for this installer.

## Desktop and models

- 61 core checks, 130 feature checks, 14 cloud integration fixtures and 45 phone-transport checks passed.
- In one synthetic 6,144-row workspace on the same PC, synchronous prompt submission fell from 523 ms in 1.12.0 to 6 ms in 1.12.1. The longest measured event-loop gap fell from 523 ms to 23 ms. Model generation time varies by hardware, model and prompt.
- Eight local models returned responses to both test prompts. Fourteen of the sixteen answers matched the expected result. Qwen Coder 1.5B missed both expected answers.
- Forty-eight OpenAI model routes completed a live text request. Three incompatible routes failed the probe. Availability and effort levels depend on the provider and account.
- A five-turn workflow moved from a local 27B model to OpenAI and back. A separate 27B grid-game exercise produced reviewed changes and eleven passing Node tests.

## iPhone and iPad

The private Mac completed simulator UI tests and produced an arm64 device archive. The signed app was uploaded directly to Apple. App Store Connect validated version 1.12.1 build 20004, assigned it to internal TestFlight and accepted it for public App Review with automatic release after approval. The timer and expandable activity log passed simulator tests. A physical-device check of these two controls is still outstanding.

These checks used synthetic chats and projects. Hardware performance and model answers will vary.
