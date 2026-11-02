# Frontend Rules

- Use semantic HTML first (`header`, `nav`, `main`, `section`, `article`, `footer`); ARIA only to fill gaps.
- Functional components and hooks only. Keep state as local as possible; lift only when shared.
- Avoid `useEffect` for derived data; compute during render.
- No inline magic values for colors, spacing, or typography — use design tokens (see design-system.md).
- Images: always set `width`/`height` (or aspect-ratio), `alt`, lazy-load below the fold, serve modern formats (AVIF/WebP).
- Fonts: self-host or preload, use `font-display: swap`, limit to 2 families.
- Animations: respect `prefers-reduced-motion`; animate only `transform` and `opacity`.
- Mobile-first CSS; breakpoints come from tokens.
- Links to external sites use `rel="noopener noreferrer"` when `target="_blank"`.
- No `console.log` in committed code. No unused exports, props, or dependencies.
- Performance budget: LCP < 2.5s, CLS < 0.1, INP < 200ms, initial JS < 150KB gzipped.
