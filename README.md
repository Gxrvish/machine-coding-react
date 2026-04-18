# React Machine Coding Playground

Practice interview-style frontend machine coding rounds by building and studying reusable React components.

This repository is designed for two outcomes:

1. Learn core frontend problem solving through guided mini-projects.
2. Build production-leaning, reusable components that hold up in interviews.

## Who This Repo Is For

- Beginners who want structure, not random tutorials.
- Developers preparing for frontend machine coding interviews.
- Engineers who want to practice API design and reusable component thinking.

## Quick Start

### Prerequisites

- Node.js 20+
- npm 10+

### Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000` and then go to `http://localhost:3000/machine-coding`.

## Learning Workflow (Recommended)

For each challenge:

1. Read the problem statement first (when available in `.md` inside the challenge folder).
2. Try implementing it yourself before reading the existing code.
3. Compare your approach with the current implementation.
4. Refactor it into a reusable component API (props, callbacks, sensible defaults).
5. Note tradeoffs: accessibility, performance, edge cases, testing strategy.

Use the reusable component checklist in [docs/REUSABLE_COMPONENT_PLAYBOOK.md](docs/REUSABLE_COMPONENT_PLAYBOOK.md).

## Challenge Map

All challenge routes live under `/machine-coding/<challenge-name>`.

| Challenge | Route | Interview Focus |
| --- | --- | --- |
| Accordion | `/machine-coding/accordion` | Controlled state, keyboard interactions |
| Chips Input | `/machine-coding/chips-input` | Input parsing, keyboard UX |
| Controlled Dropdown Button | `/machine-coding/controlled-dropdown-button` | Controlled components, event handling |
| File Explorer | `/machine-coding/file-explorer` | Recursive rendering, tree state |
| Generic Dialog | `/machine-coding/generic-dialog` | Portals, focus management, composability |
| Grid Row Sortable Filterable | `/machine-coding/grid-row-sortable-filterable` | Data transforms, sort/filter architecture |
| Images Carousel | `/machine-coding/images-carousel` | Navigation state, transitions |
| Images Pagination | `/machine-coding/images-pagination` | API fetching, pagination patterns |
| Infinite Scroll | `/machine-coding/infinite-scroll` | Progressive loading, viewport handling |
| Interactive Shape | `/machine-coding/interactive-shape` | SVG/canvas-style interaction modeling |
| Markdown Preview | `/machine-coding/markdown-preview` | Parsing pipeline, editor-preview sync |
| Notification Toast | `/machine-coding/notification-toast` | Queueing, timers, transient UI |
| OTP Input | `/machine-coding/otp-input` | Input orchestration, focus chaining |
| Pro Todo App | `/machine-coding/pro-todo-app` | Global state design, predictable updates |
| Progress Bar | `/machine-coding/progress-bar` | Timed state updates, visual feedback |
| Search Ahead | `/machine-coding/search-ahead` | Query handling, async UX |
| Snake Game | `/machine-coding/snake-game` | Game loop, grid simulation |
| Star Rating | `/machine-coding/star-rating` | Interactive rating primitives |
| Stopwatch | `/machine-coding/stopwatch` | Timers, control flow |
| Tab Form | `/machine-coding/tab-form` | Multi-step forms, state partitioning |
| Tic Tac Toe | `/machine-coding/tic-tac-toe` | Grid logic, winner detection |
| Virtualized List Performance | `/machine-coding/virtualized-list-performance` | Rendering performance, virtualization |

## Repo Structure

```text
src/
	app/
		page.tsx                       # Minimal home page
		machine-coding/
			page.tsx                     # Challenge links
			<challenge>/
				page.tsx                   # Route entry for the challenge
				<ChallengeComponent>.tsx   # Main implementation
				*.css / data / notes       # Optional support files
```

## What "Interview-Ready Reusable" Means Here

A good solution in this repo should:

- Expose a clean API with typed props.
- Avoid hardcoding behavior that should be configurable.
- Separate business logic from presentational details where practical.
- Handle edge cases and communicate state clearly.
- Be extendable (theming, data source swap, accessibility improvements).

Read [docs/REUSABLE_COMPONENT_PLAYBOOK.md](docs/REUSABLE_COMPONENT_PLAYBOOK.md) for the full rubric.

## Adding a New Challenge

Use these docs before opening a PR:

- [docs/CONTRIBUTING.md](docs/CONTRIBUTING.md)
- [docs/CHALLENGE_TEMPLATE.md](docs/CHALLENGE_TEMPLATE.md)

At minimum, each new challenge should include:

1. A clear problem statement.
2. A reusable component API expectation.
3. Edge cases and evaluation criteria.
4. A working route under `/machine-coding/<slug>`.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run test
npm run test:watch
npm run test:coverage
```

## Testing

Tests are powered by Vitest + React Testing Library.

- Component tests: `src/test/components`
- State/reducer tests: `src/test/state`

Run all tests:

```bash
npm run test
```

Run with coverage report:

```bash
npm run test:coverage
```

## FAQ

### Where do I start as a beginner?

Start with: `accordion`, `star-rating`, `stopwatch`, `progress-bar`, then move to `file-explorer`, `search-ahead`, and `virtualized-list-performance`.

### Is this only for interview prep?

No. The goal is both interview fluency and real component engineering habits.

### Why are some challenges accompanied by `.md` files?

Those are challenge specs. Treat them like interviewer prompts: requirements, constraints, edge cases, and evaluation criteria.
