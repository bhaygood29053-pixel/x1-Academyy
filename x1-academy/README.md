# X1 Academy (Interactive X1 Blockchain Learning App)

X1 Academy is an interactive learning app that teaches people about the **X1 blockchain** and **Xen** through **stories, quizzes, puzzles, and mini‑games**. Learners earn **XP and badges** as they progress.

## MVP
- Web app with wallet connect
- Story lessons + quizzes
- Off‑chain progression (XP + badges) via API
- Optional on‑chain proofs later (attestation or badge NFTs)

## Monorepo layout
- `apps/web` — Next.js client
- `services/api` — Progress + auth API
- `packages/content` — Lessons, question banks, badges
- `packages/sdk` — Shared TS helpers (XP, scoring, auth)
- `programs/*` — Anchor programs (Phase 2+)

## Getting started (coming next)
1. Add content schemas + first lessons (Track A #1–#5)
2. Build web skeleton (Home → Curriculum → Lesson → Quiz → Results)
3. Build API skeleton (wallet‑signature auth + progress storage)

## Contributing
- Keep lessons short and interactive.
- Favor clarity over jargon.
- Every lesson should end with a quiz or a puzzle checkpoint.

## License
TBD
