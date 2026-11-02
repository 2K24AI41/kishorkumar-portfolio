# Architecture Rules

## Structure
- Organize by feature/section, not by file type, once a section has more than ~3 files.
- Suggested layout:
  - `src/app` – routes/pages only (Next.js App Router, D6 in `docs/DESIGN_SPEC.md`); keep them thin.
  - `src/components/ui` – reusable, presentational primitives (Button, Card, Tag).
  - `src/components/sections` – page sections (Hero, Projects, Experience, Contact).
  - `src/lib` – pure utilities, data fetching, helpers.
  - `src/content` or `src/data` – portfolio content (projects, experience) as typed data/MDX.
  - `src/styles` – global styles and design tokens.
  - `public/` – static assets (optimized images, favicon, resume PDF).

## Principles
- Separate content from presentation: never hardcode project/experience text inside components.
- Components are small, single-purpose, and composable. Split when a file exceeds ~200 lines.
- Prefer static generation. v1 is frontend-only: no server-side code or API routes.
  Adding a backend (e.g. `/api/contact`) or an external form service requires a new owner-approved
  decision on OD-10 in `docs/DESIGN_SPEC.md` that supersedes D17. Live ML demos are linked externally, not hosted here.
- No new runtime dependency without a clear reason; prefer platform/native APIs.
- Use TypeScript with `strict` enabled. Type all content schemas.
- Absolute imports via a single alias (e.g. `@/`).
