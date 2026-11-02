---
name: responsive-testing
description: Test the site's layout across mobile, tablet, and desktop viewports and report breakage. Use when asked to check responsiveness or after layout changes.
---

# Responsive Testing

Viewports (from `docs/DESIGN_SPEC.md` §18.3): **320, 375, 414** (mobile), **768** (tablet), **1024, 1280, 1440** (desktop), **1920, 2560** (large desktop).

1. Make sure the dev server (or a preview build) is running.
2. For each page and viewport (Playwright preferred):
   - Take a full-page screenshot.
   - Check for horizontal overflow: `document.documentElement.scrollWidth > window.innerWidth`.
   - Check that text doesn't overflow or clip, images keep their aspect ratio, and nav is usable (mobile menu opens, closes, and traps focus).
   - Check that touch targets are ≥ 24px (ideally 44px) on mobile.
   - Check landscape orientation on mobile.
   - Check the hero fits above the fold at 375×667 and 1280×720 (`docs/DESIGN_SPEC.md` §9.1).
3. Test 200% and 400% browser zoom, and a 320px width for reflow (WCAG 1.4.10).
4. Test the dark theme (v1 is dark only, D16).
5. Report per page: viewport → issue → screenshot path → likely cause (file:line) → fix.
