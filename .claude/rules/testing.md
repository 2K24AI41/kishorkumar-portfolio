# Testing Rules

- **Unit/component**: Vitest (or Jest) + Testing Library. Query by role/label, not by class or test id when avoidable.
- **E2E**: Playwright for critical flows — navigation, external links. (No theme-toggle tests: v1 is dark only with no toggle, per D16 in `docs/DESIGN_SPEC.md`.)
- **Contact form (conditional)**: only if a contact form is approved (OD-10 in `docs/DESIGN_SPEC.md`) and implemented, add Playwright E2E tests for it covering the behaviors required in spec §9.8 (labeled fields, validation, success and error states). Until then, no contact-form tests are required.
- **Accessibility**: run `@axe-core/playwright` on every page in E2E.
- **Visual/responsive**: Playwright screenshots at 375, 768, 1024, 1440 widths.
- Test behavior, not implementation details. No snapshot tests of large DOM trees.
- New components ship with at least one test covering rendering and key interaction.
- Bug fixes include a regression test.
- All tests, lint, and type-check must pass before merge (`npm run lint && npx tsc --noEmit && npm test`).
