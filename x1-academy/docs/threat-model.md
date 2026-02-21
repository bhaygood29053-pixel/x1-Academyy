# Threat Model (Lightweight MVP)

## What we’re protecting
- Progress integrity (avoid fake completions)
- Fairness (avoid infinite attempts / brute forcing)
- User trust (avoid storing sensitive data)

## Attack surface
- Quiz answer scraping
- Replay submissions
- Botting attempts
- Session hijacking

## MVP mitigations
- Wallet signature auth (nonce challenge)
- Attempt rate limits per lesson
- Randomize question order + variant pools
- Store attempt timestamps + duration
- Server-side scoring (never trust client score)

## Out of scope (MVP)
- Perfect anti-cheat (not needed)
- Identity/KYC
- Token incentives
