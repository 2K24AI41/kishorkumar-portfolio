# Architecture Rules

## Structure
- Organize by feature/section, not by file type, once a section has more than ~3 files.
- Suggested layout:
  - `src/app` or `src/pages` – routes/pages only; keep them thin.
  - `src/components/ui` – reusable, presentational primitives (Button, Card, Tag).
  - `src/components/sections` – page sections (Hero, Projects, Experience, Contact).
  - `src/lib` – pure utilities, data fetching, helpers.
  - `src/content` or `src/data` – portfolio content (projects, experience) as typed data/MDX.
  - `src/styles` – global styles and design tokens.
  - `public/` – static assets (optimized images, favicon, resume PDF).

## Principles
- Separate content from presentation: never hardcode project/experience text inside components.
- Components are small, single-purpose, and composable. Split when a file exceeds ~200 lines.
- Prefer static generation; the portfolio should work without a backend.
- No new runtime dependency without a clear reason; prefer platform/native APIs.
- Use TypeScript with `strict` enabled. Type all content schemas.
- Absolute imports via a single alias (e.g. `@/`).
