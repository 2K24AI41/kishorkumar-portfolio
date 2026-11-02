# AI/ML Engineer Portfolio

## 1. Project Identity
- Owner: Kishor Kumar
- Role: Aspiring AI/ML Engineer
- Primary focus: Machine Learning and Applied AI

## 2. Project Objectives
- Build a professional engineering portfolio.
- Showcase real AI/ML projects.
- Communicate technical depth and problem-solving ability.
- Support future career opportunities.

## 3. Source of Truth
- docs/DESIGN_SPEC.md contains approved design decisions.
- Never contradict approved decisions.
- Do not invent project achievements or metrics.

## 4. Engineering Principles
- Maintainable architecture.
- Reusable components.
- Type safety.
- Responsive design.
- Accessibility.
- Performance optimization.
- Security best practices.

## 5. Development Workflow
- Inspect before modifying.
- Plan before implementing.
- Implement incrementally.
- Test after changes.
- Review before completion.

## 6. Git Safety
- Never commit without approval.
- Never push without approval.
- Never overwrite existing work.
- Never modify external project repositories.

## 7. Documentation
- Keep technical documentation updated.
- Record significant architectural decisions.
- Document setup and deployment procedures.

## 8. Project Configuration
Project-specific configuration lives in `.claude/`. It supports the principles and workflow above and never overrides `docs/DESIGN_SPEC.md` or the Git safety rules.

### Rules
Read the relevant rule file before inspecting, planning, or modifying code in that area.

| File | Use when |
|------|----------|
| `.claude/rules/architecture.md` | Creating files or folders, structuring features, separating content from presentation, or adding dependencies. |
| `.claude/rules/frontend.md` | Writing or changing components, pages, styles, images, fonts, or animations. |
| `.claude/rules/design-system.md` | Working with colors, spacing, typography, theming, or component variants and states. |
| `.claude/rules/accessibility.md` | Building or changing any UI, especially interactive elements, forms, images, and motion. |
| `.claude/rules/testing.md` | Adding features, fixing bugs, or deciding what tests a change needs. |
| `.claude/rules/security.md` | Handling environment variables, forms, external links, third-party scripts, headers, or user-facing data. |

### Agents
Use agents to hand off focused work. All agents except `frontend-engineer` are read-only reviewers: they report findings and do not edit files.

| File | Use when |
|------|----------|
| `.claude/agents/frontend-engineer.md` | Implementing or refactoring frontend features, components, or pages. |
| `.claude/agents/ui-ux-reviewer.md` | After building or changing UI, to review visual hierarchy, layout, consistency, and UX. |
| `.claude/agents/accessibility-reviewer.md` | Before completing any UI change, to audit against WCAG 2.2 AA. |
| `.claude/agents/performance-auditor.md` | Before deployment, or when bundle size, loading, or Core Web Vitals are a concern. |
| `.claude/agents/code-reviewer.md` | After completing a change and before requesting commit approval. |

### Skills
Use skills to run multi-step workflows in a consistent way.

| File | Use when |
|------|----------|
| `.claude/skills/frontend-development/SKILL.md` | Building or modifying UI end to end: plan, implement, test, and review. |
| `.claude/skills/design-review/SKILL.md` | Reviewing the design and accessibility of a page, section, or component. |
| `.claude/skills/responsive-testing/SKILL.md` | After layout changes, to check mobile, tablet, and desktop viewports, zoom, and the dark theme. |
| `.claude/skills/pre-deployment-audit/SKILL.md` | Before any deployment, to run the full quality, accessibility, performance, SEO, and security checklist. |

### How they fit the Development Workflow
1. **Inspect and plan:** read `docs/DESIGN_SPEC.md` and the relevant rules.
2. **Implement incrementally:** use the `frontend-development` skill or the `frontend-engineer` agent.
3. **Test:** follow `testing.md`; run `responsive-testing` for layout changes.
4. **Review:** run `code-reviewer`; for UI changes, also run `design-review`.
5. **Before deployment:** run `pre-deployment-audit`.

## 9. Commands
Next.js 16 (App Router) with npm (D13). Requires Node.js ≥ 20.9.0. Run from the project root.

| Command | What it does |
|---------|--------------|
| `npm install` | Install the exact versions recorded in `package-lock.json` |
| `npm run dev` | Start the development server at http://localhost:3000 |
| `npm run build` | Create the production build (all pages are static) |
| `npm run start` | Serve the production build locally (run `npm run build` first) |
| `npm run lint` | Run ESLint (`eslint-config-next`) |
| `npm run typecheck` | Generate Next.js route types, then run `tsc --noEmit` (strict) |
| `npm run format` | Format files with Prettier (writes changes) |
| `npm run format:check` | Check formatting without changing files |

- Use `npm run typecheck` rather than `npx tsc --noEmit` alone: on a fresh clone, the route types must be generated first.
- Before requesting commit approval, all of these must pass: `npm run lint && npm run typecheck && npm run format:check && npm run build`.
- Tests (`npm test`) will be added with Vitest (D20); this section will be updated then.
- Exact dependency versions and tooling exceptions are recorded in `docs/DESIGN_SPEC.md` §19.5.