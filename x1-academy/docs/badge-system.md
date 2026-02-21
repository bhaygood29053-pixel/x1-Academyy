# Badge System

## Principles
- Badges reflect real understanding, not grind.
- Badges unlock content and act as shareable milestones.
- MVP badges are **off‑chain**; on‑chain minting is optional later.

## Badge types
1. **Module badges**: complete a lesson set
2. **Skill badges**: demonstrate a concept (e.g., PDAs)
3. **Streak badges**: learn consistently
4. **Challenge badges**: perfect score / timed puzzle

## MVP badge rules
- Pass quiz >= 80% → lesson completion
- Complete 5 lessons in Track A → “X1 Fundamentals” badge
- 3‑day learning streak → “Consistent Learner” badge

## Badge metadata
- `badge_id`
- `name`
- `description`
- `icon`
- `requirements` (machine‑readable)

## Phase 2 (optional)
- On‑chain attestation account per user
- Badge NFT mint per milestone
