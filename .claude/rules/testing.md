# Testing Rules

- **Introduction (D20 in `docs/DESIGN_SPEC.md`)**: ESLint, Prettier, Vitest, Playwright and axe are introduced gradually. Each rule below applies once its tool is set up; all must pass before release (spec §18).
- **Unit/component**: Vitest with Testing Library (approved, D31 in `docs/DESIGN_SPEC.md`), in `src/**/*.test.ts` and `src/**/*.test.tsx`. Query by role/label, not by class or test id when avoidable.
- **E2E**: Playwright for critical flows — navigation, external links. (No theme-toggle tests: v1 is dark only with no toggle, per D16 in `docs/DESIGN_SPEC.md`.)
- **Contact form (conditional)**: only if a contact form is approved (OD-10 in `docs/DESIGN_SPEC.md`) and implemented, add Playwright E2E tests for it covering the behaviors required in spec §9.8 (labeled fields, validation, success and error states). Until then, no contact-form tests are required.
- **Accessibility**: run `@axe-core/playwright` on every page in E2E.
- **Visual/responsive**: Playwright screenshots at the widths in `docs/DESIGN_SPEC.md` §18.3 (source of truth): 320, 375, 414, 768, 1024, 1280, 1440, 1920, 2560.
- Test behavior, not implementation details. No snapshot tests of large DOM trees.
- New components ship with at least one test covering rendering and key interaction, in the same step that introduces the component (D32). Browser tests add coverage and never replace it.
- Bug fixes include a regression test.
- **Required checks before merge (current):** lint, type-check, formatting, build and tests must all pass: `npm run lint && npm run typecheck && npm run format:check && npm run build && npm test`. Use `npm run typecheck` rather than `npx tsc --noEmit` alone: on a fresh clone, Next.js route types must be generated first.
- **Tests:** Vitest is installed and `npm test` runs it (jsdom, no browser; needs Node.js ≥ 20.19). Playwright and axe are not installed yet; when they are introduced, those suites become required merge checks, and this rule is updated.
