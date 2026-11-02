# Design System Rules

## Tokens (single source of truth)
Define all tokens as CSS custom properties (and mirror in Tailwind config if used):
- **Color**: semantic names only, as defined in `docs/DESIGN_SPEC.md` §5.1–§5.2 (source of truth; usage rules in §5.4): `--color-bg`, `--color-surface`, `--color-surface-elevated`, `--color-text`, `--color-text-muted`, `--color-accent`, `--color-accent-highlight`, `--color-accent-strong`, `--color-accent-strong-hover`, `--color-on-accent`, `--color-border`, `--color-border-strong`. Never use raw hex in components.
- **Spacing**: 4px base scale (4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112, 128), as defined in `docs/DESIGN_SPEC.md` §7.1 (source of truth).
- **Typography**: modular scale; tokens for size, line-height, weight. Body ≥ 16px, line-height 1.5–1.7, line length 60–75ch.
- **Radius, shadow, z-index, motion duration/easing**: tokenized.
- **Breakpoints**: sm 640, md 768, lg 1024, xl 1280.

## Theming
- v1 is dark only (D16 in `docs/DESIGN_SPEC.md`): one dark theme. No light theme, no switching based on `prefers-color-scheme`, and no manual theme toggle (`data-theme`).
- Every color pair must meet WCAG 2.2 AA contrast in the dark theme: text ≥ 4.5:1; large text and meaningful UI components ≥ 3:1.

## Components
- Each UI primitive documents its variants, sizes, and states (default, hover, focus-visible, active, disabled).
- Consistent focus ring across all interactive elements.
- Reuse existing primitives before creating new ones; no one-off styling of a primitive.
