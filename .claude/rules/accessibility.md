# Accessibility Rules (WCAG 2.2 AA)

- One `h1` per page; heading levels never skip.
- All interactive elements are reachable and operable by keyboard; visible `:focus-visible` styles.
- Provide a "Skip to content" link.
- Images have meaningful `alt`; decorative images use `alt=""`.
- Icon-only buttons/links have an accessible name (`aria-label` or visually hidden text).
- Text contrast ≥ 4.5:1 (≥ 3:1 for large text and UI components).
- Touch targets ≥ 24×24px (aim for 44×44px).
- Forms: every input has a `<label>`; errors are announced and described via `aria-describedby`.
- Never convey information by color alone.
- Respect `prefers-reduced-motion`; no autoplaying motion longer than 5s without a pause control.
- Set `lang` on `<html>`; page `<title>` is unique and descriptive.
- Test with keyboard only, a screen reader (NVDA/VoiceOver), and axe/Lighthouse.
