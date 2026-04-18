# Contributing Guide

Thanks for improving this machine-coding playground.

The goal of contributions is to help learners practice interview-style component development with reusable design patterns.

## Contribution Principles

- Keep challenges beginner-readable.
- Keep implementations reusable, not one-off hacks.
- Include clear requirements and evaluation criteria.
- Preserve existing formatting and lint standards.

## Local Setup

```bash
npm install
npm run dev
npm run lint
```

## Add a New Challenge

1. Pick a kebab-case folder name under `src/app/machine-coding/`.
2. Add a `page.tsx` for the route entry.
3. Add the main component file (for example, `YourComponent.tsx`).
4. Add optional supporting files (`*.css`, `data.json`, utilities).
5. Add a challenge statement markdown file using [docs/CHALLENGE_TEMPLATE.md](./CHALLENGE_TEMPLATE.md).

The challenge list page is folder-driven, so new folders appear automatically.

## Suggested Challenge Folder Layout

```text
src/app/machine-coding/<your-challenge>/
  page.tsx
  <YourChallenge>.tsx
  <YourChallenge>.md
  <YourChallenge>.css            # optional
  data.json                      # optional
  utils.ts                       # optional
```

## Challenge Quality Requirements

Every new challenge should define:

- Problem goal.
- Functional requirements.
- Non-functional requirements.
- Reusable component API expectations.
- Edge cases.
- Evaluation criteria.

See [docs/REUSABLE_COMPONENT_PLAYBOOK.md](./REUSABLE_COMPONENT_PLAYBOOK.md) for the reuse checklist.

## Code Style

- Use TypeScript and functional React components.
- Keep state transitions predictable and readable.
- Avoid unnecessary dependencies.
- Keep naming explicit and interview-friendly.

## Validation Before PR

Run:

```bash
npm run lint
npm run build
```

Then verify manually:

- Route loads at `/machine-coding/<your-challenge>`.
- Core interactions work with keyboard and mouse.
- Empty/error/edge states are handled.
- Challenge markdown matches actual behavior.

## Pull Request Checklist

- [ ] New challenge follows folder structure.
- [ ] Challenge includes markdown specification.
- [ ] Component API is reusable and typed.
- [ ] Lint and build pass locally.
- [ ] README/docs references are updated when needed.
