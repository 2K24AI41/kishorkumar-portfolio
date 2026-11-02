---
name: frontend-development
description: Build or modify frontend features (pages, sections, components) end-to-end following project rules — plan, implement, test, and review. Use when asked to add or change UI.
---

# Frontend Development

1. **Understand** – Clarify the requirement. Read `.claude/rules/architecture.md`, `frontend.md`, and `design-system.md`.
2. **Discover** – Search for existing components, tokens, and content data to reuse.
3. **Plan** – List the files to create/change and the component API (props, variants, states).
4. **Implement**
   - Content in the data layer; presentation in components.
   - Semantic HTML, tokens only, mobile-first, all interaction states.
   - Optimized images and reduced-motion support.
5. **Test** – Add/update component tests and, for user flows, a Playwright test (see `testing.md`).
6. **Verify** – Run `npm run lint`, `npx tsc --noEmit`, `npm test`. Fix all failures.
7. **Review** – Run the `code-reviewer` agent on the diff and address blockers.
8. **Summarize** – Files changed, how it was verified, open follow-ups.
