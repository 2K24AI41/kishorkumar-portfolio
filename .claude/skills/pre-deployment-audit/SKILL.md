---
name: pre-deployment-audit
description: Run a full pre-deployment checklist — build, tests, accessibility, performance, SEO, and security — and give a go/no-go verdict. Use before deploying the portfolio.
---

# Pre-Deployment Audit

## 1. Quality gates (must pass)
- `npm run lint`
- `npx tsc --noEmit`
- `npm test` (plus E2E if configured)
- `npm run build` – no errors or new warnings

## 2. Specialist audits (run in parallel)
- `performance-auditor` – Core Web Vitals budgets and bundle size
- `accessibility-reviewer` – WCAG 2.2 AA
- `code-reviewer` – changes since the last deploy

## 3. SEO & metadata
- Unique `<title>` and meta description per page
- Open Graph and Twitter card tags with a 1200×630 image
- Canonical URLs, `sitemap.xml`, `robots.txt`
- Favicon set and web manifest
- JSON-LD `Person` schema

## 4. Security
- `npm audit` – no high/critical issues
- No secrets in the client bundle (grep the build output for keys and tokens)
- Security headers configured (see `.claude/rules/security.md`)

## 5. Content & links
- No broken internal or external links; resume PDF downloads
- Contact form works end-to-end
- No placeholder text (lorem ipsum, TODO)

## Output
A checklist table (✅ / ❌ / ⚠️) with evidence, the blocking issues, and a final **GO / NO-GO** verdict.
