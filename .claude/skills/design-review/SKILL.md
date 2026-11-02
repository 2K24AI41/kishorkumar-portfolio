---
name: design-review
description: Run a full design review of a page, section, or component — visual hierarchy, design-system consistency, and accessibility. Use when asked to review the design or UI of the portfolio.
---

# Design Review

1. Identify the scope (page, section, or component) and read the relevant files.
2. Read `.claude/rules/design-system.md` and `.claude/rules/accessibility.md`.
3. Delegate in parallel:
   - `ui-ux-reviewer` for hierarchy, layout, consistency, and UX.
   - `accessibility-reviewer` for WCAG 2.2 AA issues.
4. If a dev server is running, capture screenshots at 375, 768, and 1440px to ground the review.
5. Merge findings, remove duplicates, and present a single prioritized list:
   - **Critical** – breaks usability or accessibility
   - **Should fix** – inconsistency or noticeable UX friction
   - **Nice to have** – polish
6. Ask before applying fixes.
