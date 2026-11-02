---
name: responsive-testing
description: Test the site's layout across mobile, tablet, and desktop viewports and report breakage. Use when asked to check responsiveness or after layout changes.
---

# Responsive Testing

Viewports: **320, 375, 414** (mobile), **768, 1024** (tablet), **1280, 1440, 1920** (desktop).

1. Make sure the dev server (or a preview build) is running.
2. For each page and viewport (Playwright preferred):
   - Take a full-page screenshot.
   - Check for horizontal overflow: `document.documentElement.scrollWidth > window.innerWidth`.
   - Check that text doesn't overflow or clip, images keep their aspect ratio, and nav is usable (mobile menu opens, closes, and traps focus).
   - Check that touch targets are ≥ 24px (ideally 44px) on mobile.
   - Check landscape orientation on mobile.
3. Test 200% browser zoom and a 320px width for reflow (WCAG 1.4.10).
4. Test the dark theme (v1 is dark only, D16).
5. Report per page: viewport → issue → screenshot path → likely cause (file:line) → fix.
