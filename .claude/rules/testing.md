# Testing Rules

- **Introduction (D20 in `docs/DESIGN_SPEC.md`)**: ESLint, Prettier, Vitest, Playwright and axe are introduced gradually. Each rule below applies once its tool is set up; all must pass before release (spec §18).
- **Unit/component**: Vitest. Testing Library is optional and not yet approved (Proposed in spec §16.5); if used, query by role/label, not by class or test id when avoidable.
- **E2E**: Playwright for critical flows — navigation, external links. (No theme-toggle tests: v1 is dark only with no toggle, per D16 in `docs/DESIGN_SPEC.md`.)
- **Contact form (conditional)**: only if a contact form is approved (OD-10 in `docs/DESIGN_SPEC.md`) and implemented, add Playwright E2E tests for it covering the behaviors required in spec §9.8 (labeled fields, validation, success and error states). Until then, no contact-form tests are required.
- **Accessibility**: run `@axe-core/playwright` on every page in E2E.
- **Visual/responsive**: Playwright screenshots at the widths in `docs/DESIGN_SPEC.md` §18.3 (source of truth): 320, 375, 414, 768, 1024, 1280, 1440, 1920, 2560.
- Test behavior, not implementation details. No snapshot tests of large DOM trees.
- New components ship with at least one test covering rendering and key interaction.
- Bug fixes include a regression test.
- All tests, lint, and type-check must pass before merge (`npm run lint && npx tsc --noEmit && npm test`).
