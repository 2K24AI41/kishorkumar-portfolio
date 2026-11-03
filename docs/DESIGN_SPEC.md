# Design Specification: Kishor Kumar AI/ML Engineering Portfolio

> **This document is the design source of truth** (see `CLAUDE.md` §3). If code, rules, agent output, or other documentation conflict with it, this document wins. Changes require the owner's approval and are recorded in [§19](#19-design-decisions-and-change-log).

| Field | Value |
|-------|-------|
| Owner | Kishor Kumar |
| Version | 0.19 |
| Document status | **Draft.** Approved decisions D1–D34 are binding. Everything marked *Proposed* needs owner approval. |
| Last updated | 2026-11-03 |

**Status labels**
- **Approved (Dn):** binding; recorded in §19. Do not change without owner approval.
- **Proposed:** the default to design and build against until the owner approves or changes it.
- **Open:** an owner decision is needed before that part is implemented.

---

## 1. Project Overview

### 1.1 Purpose
A premium, professional engineering portfolio that demonstrates Kishor Kumar's real technical capabilities, projects, problem-solving ability, and career development as an aspiring AI/ML Engineer.

### 1.2 Goals
| Priority | Goal | Success signal |
|----------|------|----------------|
| Primary | Visitors understand who Kishor is and what Kishor builds within 5 seconds | Hero communicates name, role, and focus without scrolling |
| Primary | Visitors explore at least one project in depth (when at least one featured project is published, D18) | Clear path from the home page to case study pages |
| Primary | Visitors can make contact easily | Contact and resume are reachable from every page |
| Secondary | Demonstrate engineering quality through the site itself | Meets the accessibility, performance, and SEO criteria in §18 |
| Secondary | Show growth over time | Learning and Research section kept up to date |

### 1.3 Scope (v1)
- **In scope:** single-page home with anchored sections; one case study page per featured project; resume download; contact links; a 404 page.
- **Out of scope for v1 (Approved, D16):** light theme and light/dark theme toggle. v1 ships dark only.
- **Out of scope for v1 (Approved, D18):** a separate All Projects page. It may be considered in a future version if there are more than 3 strong projects.
- **Out of scope for v1 (Proposed):** blog/CMS, internationalization, user accounts, analytics dashboards.

### 1.4 Primary interests
Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, and Applied AI.

---

## 2. Brand Identity

### 2.1 Positioning
**Aspiring AI/ML Engineer** who builds practical, well-evaluated machine learning systems and can explain the reasoning behind them.

**Positioning statement (Approved, D22):**
> "Artificial Intelligence undergraduate developing a strong foundation in Machine Learning, Computer Vision, and Natural Language Processing."

The v0.12 draft ("I build and evaluate machine learning systems…") is retired: it claimed more than the current work shows (D12). Use the D22 wording exactly.

### 2.2 Brand attributes
| Attribute | Means | Does not mean |
|-----------|-------|---------------|
| Precise | Exact language, measured claims, clean alignment | Cold or sterile |
| Rigorous | Evaluation, baselines, and trade-offs are visible | Dense academic walls of text |
| Modern | Contemporary type, dark premium surfaces, refined motion | Trend-chasing effects |
| Honest | Only verified work and results | Over-selling or inflating |
| Curious | Learning and research are first-class content | Unfocused or scattered |

### 2.3 Voice and tone
- First person, plain language, specific.
- Lead with the problem and the outcome, then the method.
- No buzzword stacking ("cutting-edge", "revolutionary", "passionate ninja").
- Confident but accurate: "Built", "Evaluated", "Deployed"; never claim expertise that the work doesn't show.

### 2.4 Visual signature (Proposed)
To stand out from generic templates without gimmicks:
1. **Blueprint grid:** a faint grid pattern behind the hero only, fading out toward the edges. It suggests engineering precision.
2. **Monospace metadata:** labels, tags, dates, and section indices (e.g. `01 / About`) use the monospace face. These are typographic accents, **not** a fake terminal.
3. **Single accent line:** a 2px electric-blue rule marks the active nav item, section headings, and the selected project card.
4. **Real artifacts as imagery:** architecture diagrams, confusion matrices, sample model outputs, and UI screenshots from actual projects.
5. **Logo/monogram:** "KK" wordmark set in the heading typeface (Open: OD-6).
6. **Signature illustration (Approved, D21):** one labeled, accurate neural-network diagram in the hero, drawn in SVG as a foreground figure. It is not a background and not decoration. Details in §20.3.

### 2.5 Explicitly avoided
- Generic AI-generated portfolio templates and layouts.
- Excessive gradients, glows, neon, and glassmorphism.
- Unnecessary or decorative-only animation.
- Fake terminal interfaces or typing-effect command prompts.
- Skill percentage bars, star ratings, or proficiency meters.
- Fake statistics, achievements, clients, or testimonials.
- Unverified project results.
- Stock "AI" imagery (glowing brains, robots, abstract neural-network art). The only exception is the labeled foreground illustration approved in D21 (§2.4 item 6, §20.3); it does not permit neural-network backgrounds or decorative network art anywhere.

---

## 3. Target Audience

| Audience | Goals on the site | Time spent | Must find quickly |
|----------|-------------------|------------|-------------------|
| **Recruiters / talent acquisition** | Screen for role fit | 30–90 seconds | Role, focus areas, skills, education, resume, contact |
| **Hiring managers / ML engineers** | Judge technical depth | 3–15 minutes | Problem framing, data, method, evaluation, code, personal contribution |
| **Academic / research contacts** | Assess research interest | 2–10 minutes | Learning and Research, project methodology, papers/notes |
| **Collaborators / open-source peers** | Find shared interests | Variable | GitHub, project repositories, contact |

**Design implication:** support two reading depths. Skimmers get the essentials from the hero, skill groups, and project cards. Deep readers get full case studies one click away.

---

## 4. Design Philosophy

1. **Evidence over decoration.** Every visual element supports understanding of the work.
2. **Clarity first.** Strong hierarchy, generous spacing, short paragraphs, scannable structure.
3. **Restraint is premium.** One accent color, few effects, deliberate motion.
4. **Honesty by design.** The layout never requires content that doesn't exist. Empty fields are omitted, never filled with placeholders or estimates.
5. **Accessible by default.** Accessibility is a baseline requirement, not a feature (D11).
6. **Fast by default.** Server-rendered, minimal client JavaScript, optimized media (§15).
7. **Content-driven.** All portfolio content lives in a typed content layer, separate from presentation (§16).

---

## 5. Color System

**Approved:** dark premium direction (D1) with a blue / electric-blue accent (D2).
**Approved (D14):** the token values in §5.1 and §5.2, unchanged from v0.2. v1 uses this dark palette only (D16).
**Still required:** accessibility contrast validation (§5.5) before implementation.

### 5.1 Core tokens (Approved, D14)
| Token | Value | Role |
|-------|-------|------|
| `--color-bg` | `#080D18` | Page background |
| `--color-surface` | `#101827` | Cards, header, footer, code blocks |
| `--color-surface-elevated` | `#172338` | Hover states, popovers, mobile menu, highlighted cards |
| `--color-accent` | `#3B82F6` | Brand accent: fills, icons, large text, active indicators |
| `--color-accent-highlight` | `#60A5FA` | Link text, focus ring, accent text at body size |
| `--color-text` | `#F8FAFC` | Primary text |
| `--color-text-muted` | `#94A3B8` | Secondary text, metadata, captions |
| `--color-border` | `#263449` | Decorative dividers and card outlines only |

### 5.2 Additional tokens needed to pass contrast (Approved, D14)
| Token | Value | Role | Why |
|-------|-------|------|-----|
| `--color-accent-strong` | `#2563EB` | Primary button fill (white text) | White on `#3B82F6` is only 3.68:1 |
| `--color-accent-strong-hover` | `#1D4ED8` | Primary button hover | Keeps ≥ 4.5:1 with white text |
| `--color-on-accent` | `#FFFFFF` | Text on `accent-strong` fills | 5.17:1 / 6.70:1 |
| `--color-border-strong` | `#64748B` | Form-input borders and other meaningful UI boundaries | `#263449` is below the 3:1 non-text minimum |

**Status colors** (success, warning, error) are **Open (OD-4)**. v1 has no contact form (D17), so they are needed only if a future feature requires them. Validate them with the same method.

### 5.3 Measured contrast ratios (WCAG 2.x relative luminance)
| Foreground | on `bg` | on `surface` | on `surface-elevated` | Verdict |
|------------|---------|--------------|------------------------|---------|
| `text` `#F8FAFC` | 18.57 | 16.98 | 15.05 | ✅ AA/AAA all text |
| `text-muted` `#94A3B8` | 7.58 | 6.93 | 6.14 | ✅ AA all text |
| `accent-highlight` `#60A5FA` | 7.64 | 6.99 | 6.19 | ✅ AA all text, focus ring |
| `accent` `#3B82F6` | 5.28 | 4.83 | **4.28** | ⚠️ AA for normal text on `bg`/`surface` only; on `surface-elevated` use for large text (≥ 24px, or ≥ 18.66px bold) and non-text only |
| `border-strong` `#64748B` | 4.08 | 3.73 | 3.31 | ✅ ≥ 3:1 non-text |
| `border` `#263449` | 1.54 | 1.41 | 1.25 | ❌ decorative only |
| White on `accent` `#3B82F6` | 3.68 | | | ❌ normal text (large text only) |
| White on `accent-strong` `#2563EB` | 5.17 | | | ✅ AA |
| White on `accent-strong-hover` `#1D4ED8` | 6.70 | | | ✅ AA |

### 5.4 Usage rules
- **Links and inline accent text** use `accent-highlight`, not `accent`.
- **Primary buttons:** `accent-strong` fill with `on-accent` text. Do **not** put white text on `#3B82F6`.
- **Focus ring:** `accent-highlight`, 2px solid, 2px offset (≥ 3:1 on every surface).
- **Borders:** `border` for decoration; `border-strong` wherever the boundary conveys meaning (inputs, toggles, selected states).
- **No gradients** except an optional, very subtle radial wash behind the hero (accent at ≤ 8% opacity). It must not reduce text contrast.
- **No glow effects.** Elevation is shown by a surface step (`bg` → `surface` → `surface-elevated`), not by shadows or glows.
- **Data visualization:** a categorical chart palette is defined when the first chart is built. It must be validated against `surface`, and series are never distinguished by color alone.

### 5.5 Contrast-validation requirement (still required before implementation)
The palette values are approved (D14). Contrast validation is still required before implementation:
1. Recompute every foreground/background pair actually used in the UI (as in §5.3).
2. Run an automated audit (axe) on every page; zero color-contrast violations.
3. Manually check hover, focus, active, disabled, and selected states.
4. Check at 200% zoom and with a Windows High Contrast / forced-colors mode sanity pass.
5. Record the results and the owner's approval in §19.

**Status (2026-11-02): partially complete.** Items 1–2 are done for the Foundation + Hero milestone; items 3–4 are only partly done (emulated checks only). Details and outstanding checks are in [§19.6](#196-accessibility-validation-record-55-foundation--hero). The validation is **not** marked complete.

---

## 6. Typography

**Approved (D15):** Geist Sans + Geist Mono, loaded with `next/font` (self-hosted at build time, no layout shift). These are modern, technical, and highly legible typefaces designed for screen interfaces. (Inter + JetBrains Mono was considered and not chosen.)

### 6.1 Families
| Role | Family | Use |
|------|--------|-----|
| Sans | Geist Sans (variable) | Headings, body, UI |
| Mono | Geist Mono | Tags, labels, metadata, section indices, code, metrics |

Maximum two families. Latin subset only. `font-display: swap` (handled by `next/font`).

### 6.2 Type scale (fluid with `clamp()`)
| Token | Mobile → Desktop | Weight | Line height | Letter spacing | Use |
|-------|------------------|--------|-------------|----------------|-----|
| `display` | 40 → 72px | 600 | 1.05 | -0.03em | Hero name |
| `h1` | 32 → 48px | 600 | 1.1 | -0.02em | Case study title |
| `h2` | 28 → 40px | 600 | 1.15 | -0.02em | Section titles |
| `h3` | 20 → 24px | 600 | 1.3 | -0.01em | Card titles, subsections |
| `body-lg` | 18 → 20px | 400 | 1.6 | 0 | Hero tagline, lead paragraphs |
| `body` | 16 → 17px | 400 | 1.65 | 0 | Default text |
| `small` | 14px | 400 | 1.5 | 0 | Captions, secondary metadata |
| `label` (mono) | 12 → 13px | 500 | 1.4 | 0.06em, uppercase | Tags, section indices, eyebrow labels |

### 6.3 Rules
- Body text never smaller than 16px; captions and labels never smaller than 12px.
- Prose line length 60–75 characters (`max-w-prose` or ~68ch).
- Sentence case for headings; uppercase only for mono labels.
- Numerals in metrics and tables use tabular figures.
- Text must remain readable when users increase text spacing (WCAG 1.4.12).

---

## 7. Layout and Spacing

### 7.1 Spacing scale (4px base)
`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 112 · 128` px. Use these values only.

**Scope:** this scale applies to **layout spacing**: margins, padding, and gaps (including grid gutters and space between sections and cards). It does **not** restrict:
- component dimensions (e.g. 44px button height, 64/72px header height),
- typography offsets (e.g. 3px underline offset),
- borders and focus-ring offsets (e.g. 2px focus-ring offset),
- animation distances (e.g. 2px hover lift, 12–16px reveal rise).

Offsets tied to a component dimension follow that dimension. For example, the root `scroll-padding-top` equals the header height plus an 8px focus-ring buffer (§8.1, §13.2).

### 7.2 Containers
| Container | Max width | Use |
|-----------|-----------|-----|
| `content` | 1200px | Default section width |
| `wide` | 1360px | Large desktop project grids and hero |
| `prose` | ~68ch | Long-form text in About and case studies |

Horizontal page padding: 16px (mobile) · 24px (tablet) · 32px (desktop) · 40px (large desktop).

**Interpretation (Approved, 2026-11-03):** each max width above is the **total width of the container box, including the horizontal page padding**. The usable content area is therefore narrower than the max width by twice the padding (for example, 1200px minus 2 × 40px = 1120px on a large desktop). The header and the hero use `wide`; the About, Skills, Education and Contact sections use `content`, the default. Project grids will use `wide` when they exist (D18). Because `content` is narrower than `wide`, on screens wider than about 1200px the sections start further in from the left than the header and the hero.

### 7.3 Grid
| Viewport | Columns | Gutter |
|----------|---------|--------|
| Mobile | 4 | 16px |
| Tablet | 8 | 24px |
| Desktop | 12 | 24px |
| Large desktop | 12 | 32px |

### 7.4 Vertical rhythm
| | Mobile | Tablet | Desktop+ |
|---|--------|--------|----------|
| Between sections | 64px | 80px | 112px (desktop) / 128px (large desktop) |
| Section title → content | 32px | 40px | 48px |
| Between cards | 16px | 24px | 24–32px |

### 7.5 Shape and depth
- Radius tokens: `sm` 6px (tags, inputs), `md` 10px (buttons), `lg` 16px (cards, images), `full` (pills, avatar).
- Shadows: none by default. Depth comes from surface steps (§5.4).

---

## 8. Navigation

### 8.1 Header
- Sticky at the top. Transparent over the hero, then switches to `surface` at ~90% opacity with a backdrop blur ≤ 8px and a bottom `border` after scrolling 24px.
- **Left:** wordmark/monogram linking to home (top of page).
- **Right (desktop):** About · Skills · Projects · Experience · Education · Learning · Contact, then a **Resume** button (secondary style, opens a PDF in a new tab with an external indicator). The Resume button appears only when a resume PDF exists (D23, OD-16).
- Height: 64px mobile, 72px desktop. Anchor targets and focused elements stay clear of the header through `scroll-padding-top` on `html` (the `--header-height` token, 65px mobile / 73px desktop including the 1px border, plus an 8px buffer for the focus ring); sections carry no `scroll-margin-top` (§13.2).

### 8.2 Active state
- The current section is indicated with an accent underline (2px, `accent`) plus `aria-current="true"` on the link.
- Updated with an IntersectionObserver-based scroll spy; no scroll-jacking.

### 8.3 Mobile and tablet navigation
- Below `lg` (1024px): a menu button (Lucide `Menu` / `X` icon with an accessible label "Open menu" / "Close menu", `aria-expanded`, `aria-controls`).
- Opens a full-height overlay panel on `surface-elevated` with large tap targets (≥ 48px rows) and the Resume button.
- Focus is trapped inside while open. Esc closes it. Focus returns to the menu button. Page scroll is locked. Choosing a link closes the menu and moves focus to the target section.

### 8.4 Other navigation
- **Skip to main content:** the first focusable element, visible on focus.
- **Smooth scrolling** for anchor links, disabled under reduced motion.
- **Case study pages:** a "← All projects" back link at the top (to the homepage `#projects` section), and previous/next project links at the bottom (omitted when only one project is published).
- **Footer:** email, GitHub, LinkedIn (icon + text label), "Back to top", copyright line.
- **404 page:** a short message plus links to Home and, when at least one project is published, Projects.

---

## 9. Website Sections

Section order (Approved via requirements): **Hero → About → Technical Skills → Featured Projects → Experience → Education → Learning and Research → Contact.**
Each section is a `<section>` with an `id`, an `h2` (except the hero), and a mono index label (`01`–`07`).
A section with no approved content is hidden: its navigation link is removed, and index labels number the visible sections consecutively.

### 9.1 Hero (`#top`)
- **Content:** eyebrow label (mono: "Aspiring AI/ML Engineer", D27), name (`h1`, display size), positioning statement (§2.1, D22), focus chips (ML · DL · Computer Vision · NLP · Applied AI), CTAs. The exact content order is in §20.3.
- **CTAs (amended by D23):** *Get in touch* (primary) → `#contact`; icon links to GitHub and LinkedIn. *View projects* → `#projects` is added only when at least one project is published (D18). *Download resume* appears only when a resume PDF exists (OD-16); until then there is no resume CTA, and D18's fallback "Download resume becomes primary" does not apply.
- **Optional:** availability line (e.g. "Open to internships / entry-level roles"): **Open (OD-7)**; include only if true.
- **Visual:** blueprint grid background (§2.4) and the signature illustration (D21, §20.3). Optional professional photo: **Open (OD-8)**.
- **Layout:** left-aligned text on all viewports. On desktop, a right column holds the signature illustration (D21); a photo remains Open (OD-8).
- Must fit above the fold at 1280×720 and 375×667.

### 9.2 About (`#about`)
- 2–3 short paragraphs: background, what draws Kishor to ML/AI, the kinds of problems to work on, and current goals.
- Optional "Currently" list (mono label): what Kishor is learning or building now. Real items only.
- Prose width; optional photo on desktop if not used in the hero.

### 9.3 Technical Skills (`#skills`)
- Grouped lists. **No percentages, bars, ratings, or years-of-experience claims.**
- Proposed groups: **Machine Learning** · **Deep Learning** · **Computer Vision** · **NLP** · **Data and Analysis** · **MLOps and Deployment** · **Languages** · **Tools and Platforms**.
- Each skill may link to the project(s) that demonstrate it ("Used in: Project A"). Evidence over claims.
- Only list skills that are demonstrated in projects, coursework, or experience.

### 9.4 Featured Projects (`#projects`)
- **Approved (D18): 0–3 project cards** (§10.2), with the strongest project first. Only projects with approved, verified content (§17.1, §17.3, §18.2) are shown.
- Never show empty, placeholder or "coming soon" cards. With 0 approved projects, the section is hidden (§9 intro).
- The grid adapts to 1, 2 or 3 cards (§12.1). Projects can be added to the content layer later without redesigning the homepage, which shows at most 3.
- Each card links to a case study page at `/projects/[slug]`.
- Project selection and order: **Open (OD-5)**.

### 9.5 Experience (`#experience`)
- Reverse-chronological timeline: role, organization, location/remote, dates, 2–4 outcome-focused bullets, and technology tags.
- Includes internships, research assistantships, freelance work, or relevant roles, **only real entries**.
- If no professional experience exists yet, the section is hidden (not filled with placeholders) until it does. **Open (OD-9)**.

### 9.6 Education (`#education`)
- Degree, institution, dates (or expected graduation), and, optionally, relevant coursework, thesis/capstone, and honors (verified only).
- Card or timeline layout matching Experience.

### 9.7 Learning and Research (`#learning`)
- Demonstrates growth and research curiosity. Possible content types:
  - Courses and certifications (issuer, date, credential link).
  - Papers studied or reproduced (with notes or a repository).
  - Research interests and open questions.
  - Technical notes or articles (external links if hosted elsewhere).
- Every item links to evidence where possible. Do not list certifications or publications that don't exist.

### 9.8 Contact (`#contact`)
**Approved (D17): email only for v1.** No contact form, and no backend or API route.
- Short invitation (1–2 sentences).
- Email address displayed as visible text, plus a `mailto:` link.
- GitHub and LinkedIn links.
- Optional: a "Copy email" button.
- **Future contact form:** not part of v1. Adding one requires a new owner decision on OD-10 that supersedes D17 (see `.claude/rules/architecture.md`). If added, it needs labeled fields, inline validation, spam protection, a server-side handler, and success/error states (see `.claude/rules/security.md`).

---

## 10. Component Guidelines

### 10.1 General
- Server Components by default; Client Components only for interactivity (menu, scroll spy, animations).
- Every interactive component defines: default, hover, focus-visible, active, disabled (if applicable), and loading/error (if applicable).
- Components consume design tokens through Tailwind theme utilities; no hardcoded colors, spacing, or font sizes.
- Icons: Lucide React (D9). Import icons individually. Default size 16/20/24px, stroke width 1.75. Decorative icons get `aria-hidden="true"`; icon-only controls get an accessible name.

### 10.2 Project card
| Element | Spec |
|---------|------|
| Container | `surface`, `border`, radius `lg`, padding 24px (20px mobile). Hover: `surface-elevated` + `border-strong` + 2px upward translate |
| Thumbnail | 16:10, radius `md`, `next/image` with `sizes`; a real project visual |
| Domain label | Mono label (e.g. `COMPUTER VISION`) |
| Title | `h3` |
| Summary | 1–2 lines: the problem being solved |
| Verified result | Optional single line in mono: metric + value + context (e.g. dataset/baseline). Omit if not verified |
| Tech tags | 3–5 tags |
| Actions | "Case study" (primary link) · GitHub · Live demo (only if they exist; icon + text) |
| Click target | The whole card is clickable via the title link (stretched link pattern), with secondary links still independently focusable |

### 10.3 Case study page (`/projects/[slug]`)
Fixed structure. Sections without real content are omitted:
1. **Header:** title, one-line summary, domain, timeline, role, links (GitHub, demo), hero visual.
2. **Problem:** what is being solved, why it matters, constraints.
3. **Overview:** the solution at a glance.
4. **Dataset** (where applicable): source and license, size, features/classes, splits, preprocessing, known limitations and biases.
5. **Technical implementation:** baseline, approaches tried, final model/pipeline and why, key engineering decisions.
6. **Architecture** (where useful): diagram with alt text and a text description.
7. **Evaluation:** metric choices and rationale, validation strategy, results table versus the baseline. **Verified results only** (§17.3).
8. **Personal contribution:** what Kishor did personally (essential for team or course projects).
9. **Technologies:** grouped tags.
10. **Lessons and next steps:** what didn't work, trade-offs, future improvements.
11. **Links:** repository, live demo, notebook, report/paper.
12. **Footer navigation:** previous/next project (omitted when only one project is published), back to all projects (the homepage `#projects` section).

### 10.4 Buttons
| Variant | Style | Use |
|---------|-------|-----|
| Primary | `accent-strong` fill, `on-accent` text; hover `accent-strong-hover` | One per view: main CTA |
| Secondary | Transparent, `border-strong` 1px, `text`; hover `surface-elevated` | Resume, secondary actions |
| Ghost / link | `accent-highlight` text, underline on hover | Inline actions |
| Icon | 44×44px minimum hit area, accessible label, tooltip optional | Social links, menu toggle |

Height 44px (48px on touch-primary layouts), radius `md`, padding 16–20px horizontal, `label`/`small` weight 500.

### 10.5 Tags / chips
Mono 12–13px, `surface-elevated` background, `text-muted` text, radius `sm`, padding 4×8px. Non-interactive unless used as filters (then they become buttons with `aria-pressed`).

### 10.6 Section heading
Mono index + label (`02 / ABOUT`) in `text-muted`, then the `h2`, then an optional one-line intro in `text-muted`. A 2px × 32px `accent` rule may precede the index.

### 10.7 Timeline item (Experience / Education)
Left rail with `border` line and an `accent` dot for the current item. Title (`h3`), organization, dates in mono, bullets, tags. Collapses to a stacked list on mobile.

### 10.8 Links
- Inline links: `accent-highlight`, underline offset 3px, always underlined in prose (not color-only).
- External links: `target="_blank"` + `rel="noopener noreferrer"` + a visible Lucide `ArrowUpRight` icon + visually hidden "(opens in new tab)".

### 10.9 Images and figures
- Always `next/image` with width/height or `fill` + `sizes`, radius `lg`.
- Figures have captions where they add context. Charts include a text summary or data table.

---

## 11. Animation Guidelines

**Approved:** balanced and purposeful animation (D3), implemented with Motion (D8). For Milestone 4, animation is CSS-only and Motion is not installed (D24, §11.7).

### 11.1 Principles
- Motion clarifies hierarchy, state, or spatial relationships. If it doesn't, remove it.
- Subtle and fast. Nothing loops, bounces, or demands attention after load.
- Animate only `transform` and `opacity` (no layout-affecting properties).
- Content is fully visible and usable **without** JavaScript or motion (no content hidden until an animation runs, if JS fails).

### 11.2 Tokens
| Token | Duration | Easing | Use |
|-------|----------|--------|-----|
| `fast` | 150ms | `ease-out` | Hover, focus, color changes |
| `base` | 250ms | `cubic-bezier(0.2, 0, 0, 1)` | Menus, toggles, card hover lift |
| `slow` | 450ms | `cubic-bezier(0.2, 0, 0, 1)` | Section/element reveals |
| `stagger` | 60ms between items, max 6 items | — | Card grids, lists |

### 11.3 Allowed animations
| Element | Animation |
|---------|-----------|
| Hero | One-time entrance: a subtle `translateY` rise of the eyebrow, positioning statement, credential line, chips and actions (not the name), staggered, total ≤ 800ms. Transform only: opacity is not animated from zero (Milestone 4, §11.7) |
| Section content | Fade + 16px rise when 15% in view, **once** per element. **Not built in Milestone 4:** scroll-triggered reveals are removed (D24, §11.7) |
| Project cards | Staggered reveal; hover lift 2px plus a surface/border change |
| Mobile menu | Panel slides/fades in (`base`); links stagger lightly |
| Nav active indicator | Underline slides between items (shared layout animation). Not implemented in Milestone 4: it needs Motion (D24) |
| Page transitions | Simple fade (≤ 200ms) between home and case studies; **Proposed** |

### 11.4 Not allowed
Parallax, scroll-jacking, cursor-follow effects, particle or neural-net backgrounds, typing effects, auto-playing video/carousels, continuous glow/pulse, counters animating up to (fake or real) numbers. The D21 illustration is a labeled foreground figure revealed once; it does not relax this list.

### 11.5 Reduced motion
- Respect `prefers-reduced-motion: reduce` globally (Motion's reduced-motion configuration set to follow the user setting).
- Under reduced motion: no transforms, no reveals (content shows immediately), no smooth scrolling; opacity/color transitions ≤ 150ms are allowed.

### 11.6 Performance
- Use Motion's lazy feature loading and lightweight components to keep the animation bundle small.
- Animations must not cause layout shift or block interaction. Hero entrance must not delay LCP (the LCP element renders visible immediately or animates from opacity ≥ 0.01 only if measured to be safe; prefer no animation on the LCP element).

### 11.7 Milestone 4 implementation approach (D24)
- Animation is **CSS-only** (keyframes and transitions using the §11.2 tokens). "CSS-only" means no animation library: Motion (D8) is not installed in Milestone 4, and D8 is not revoked.
- **Animations that are built:**
  - **The hero entrance is transform-only.** The eyebrow, positioning statement, credential line, chips and actions each rise with a subtle `translateY` (about 12px) to their final position, staggered, starting on page load and ending within 800ms. **Opacity is never animated from zero**, so all hero text is visible from the first paint. The hero `h1` is not animated at all (§11.6).
  - **The neural-network illustration** (D21) is visible immediately. It may use a subtle, one-time, transform-only entrance (for example, layers settling slightly into place). "Revealed once" in D21 means this one-time entrance, never a fade from zero and never a loop.
  - Subtle hover and focus transitions of 150ms or less (color, background, or a small transform).
- **Not built in Milestone 4:** scroll-triggered section reveals (the "Section content" row of §11.3), staggered card reveals, the sliding nav indicator, cursor-follow or spotlight effects, parallax, and any looping motion.
- **`IntersectionObserver` and scroll listeners are not banned.** The existing header scroll spy (§8.2, `src/components/layout/useHeaderState.ts`) uses `IntersectionObserver` and **remains unchanged**. What is prohibited is **new** `IntersectionObserver` or scroll-listener code written for scroll-triggered animation, reveal effects or hidden section states.
- **All page content is visible immediately.** No section, card or text block has a hidden starting state, and nothing waits for JavaScript, scrolling or any other event to appear. The page is complete with JavaScript disabled (§11.1).
- **Reduced motion** (`prefers-reduced-motion: reduce`, §11.5): all movement is removed and the hero and the illustration show their final state immediately. Color or opacity transitions of 150ms or less (for example on hover) are still allowed.

---

## 12. Responsive Design

Mobile-first. Breakpoints align with Tailwind defaults.

| Tier | Range | Tailwind |
|------|-------|----------|
| Mobile | 320–639px | base |
| Large mobile / small tablet | 640–767px | `sm` |
| Tablet | 768–1023px | `md` |
| Desktop | 1024–1535px | `lg`, `xl` (1280) |
| Large desktop | ≥ 1536px | `2xl` |

### 12.1 Behavior by tier
| Aspect | Mobile | Tablet | Desktop | Large desktop |
|--------|--------|--------|---------|---------------|
| **Navigation** | Menu button + overlay | Menu button + overlay | Full inline nav + Resume button | Same as desktop; nav aligned to `wide` container |
| **Page padding** | 16px | 24px | 32px | 40px; container capped at 1200px (sections) or 1360px (header, hero), including the padding, centered |
| **Section spacing** | 64px | 80px | 112px | 128px |
| **Typography** | Fluid minimums (display 40px, body 16px) | Interpolated | Near maximums | Maximums (display 72px, body 17px); no further growth |
| **Hero** | Single column, photo/visual below text or hidden | Single column, wider measure | Two columns (text 7 / visual 5) if a visual exists | Same, more whitespace |
| **Skills** | 1 column of groups | 2 columns | 3–4 columns | 4 columns |
| **Project cards** (1–3, D18) | 1 column, thumbnail on top | 1: full width · 2: 2 columns · 3: first card full width, 2 below | 1: full width, horizontal · 2: 2 columns · 3: first card full width (horizontal), 2 below | 1: full width, horizontal · 2: 2 columns · 3: 3 columns |
| **Timeline** | Stacked, rail on the left edge | Rail with dates beside the title | Dates in a left column, content right | Same as desktop |
| **Case study** | Single column, full-width figures | Single column, prose width | Prose column + sticky in-page table of contents | Same, with wider figures (breakout) |
| **Images** | Full container width; `sizes="100vw"` | `sizes="50vw"` in grids | `sizes` matched to column width | Capped at intrinsic/2× size, never upscaled |
| **Touch targets** | ≥ 44×44px | ≥ 44×44px | ≥ 24×24px (44px for primary controls) | Same as desktop |
| **Motion** | Reduced distances (12px rise), fewer staggers | Standard | Standard | Standard; no extra effects for large screens |

### 12.2 Universal requirements
- No horizontal page scroll from 320px to 2560px; code blocks and tables scroll inside their own container.
- Reflows at 320 CSS px and works at 200% and 400% zoom without loss of content or function.
- Landscape mobile: the hero must not exceed the viewport height; the menu overlay scrolls if needed.
- Hover-only interactions always have a tap/focus equivalent.

---

## 13. Accessibility

**Approved:** WCAG 2.2 Level AA (D11). Detailed checklist: `.claude/rules/accessibility.md`.

### 13.1 Semantic HTML
- Landmarks: `<header>`, `<nav aria-label="Primary">`, `<main id="main">`, `<footer>`. Each section is a `<section aria-labelledby>`.
- One `h1` per page (hero name on home; project title on case studies); no skipped heading levels.
- Lists for lists (skills, tags, links); `<time>` for dates; `<figure>`/`<figcaption>` for visuals; tables for results data.
- `<html lang="en">` and a unique, descriptive `<title>` per page.

### 13.2 Keyboard navigation
- Every interactive element is reachable and operable by keyboard in a logical order.
- Skip link first. No keyboard traps, except the open mobile menu, which traps focus intentionally and restores it on close.
- Esc closes overlays. Enter/Space activate buttons.
- Focused elements are never hidden behind the sticky header (WCAG 2.4.11), handled with `scroll-padding-top`.

### 13.3 Focus visibility
- Custom `:focus-visible` ring on all interactive elements: 2px solid `accent-highlight`, 2px offset, ≥ 3:1 against adjacent colors.
- Never remove outlines without an equivalent replacement.

### 13.4 Contrast
- Text ≥ 4.5:1; large text and non-text UI (icons, borders that convey meaning, focus rings) ≥ 3:1. Validated per §5.5.
- Information is never conveyed by color alone (tags, active state, chart series, form errors).

### 13.5 Accessible interactions
- Target size ≥ 24×24px minimum (WCAG 2.5.8); 44×44px for primary and mobile controls.
- Icon-only buttons have accessible names. Toggle buttons expose state (`aria-expanded`, `aria-pressed`).
- External links announce that they open in a new tab.
- Forms (if added): visible labels, `aria-describedby` for hints and errors, errors announced via a live region, no reliance on placeholders as labels.
- The scroll-spy active state uses `aria-current`.

### 13.6 Reduced motion
As in §11.5. Tested with the OS setting enabled.

### 13.7 Alternative text
- Meaningful images: alt text describes the content and purpose (e.g. "Confusion matrix for the 10-class classifier showing most errors between cats and dogs"), not "image of…".
- Charts and diagrams: short alt text plus an adjacent text summary or data table.
- Decorative images and the background grid: `alt=""` / CSS backgrounds / `aria-hidden`.
- Profile photo: "Portrait of Kishor Kumar".

### 13.8 Testing
- Automated: axe checks in Playwright on every route; Lighthouse accessibility score ≥ 95 (but manual checks are the real gate).
- Manual: keyboard-only pass, NVDA (Windows) and VoiceOver (iOS/macOS) passes, 200% zoom, reduced motion.

---

## 14. SEO

Implemented with the Next.js App Router Metadata API (D5, D6).

| Item | Requirement |
|------|-------------|
| Titles | Home: "Kishor Kumar · Aspiring AI/ML Engineer" (D27). Case studies: "{Project} · Kishor Kumar". Template-based, unique per page |
| Descriptions | 140–160 characters, unique per page, written from real content |
| Canonical URLs | Set on every page once a site URL is configured; production domain **Open (OD-11)**. No domain is invented or hardcoded; absolute URLs (canonical, Open Graph, sitemap, JSON-LD `url`) come from configuration (D26) |
| Open Graph / Twitter | Title, description, URL, and a 1200×630 image per page (generated or designed, matching the dark brand) |
| Structured data | JSON-LD `Person` on home (name, jobTitle "Aspiring AI/ML Engineer", url only if configured, sameAs: GitHub/LinkedIn), serialized safely (D25). `CreativeWork`/`SoftwareSourceCode` on case studies |
| Sitemap / robots | Generated `sitemap.xml` and `robots.txt` via App Router metadata files |
| Icons | Favicon, Apple touch icon, web app manifest |
| Headings and semantics | As in §13.1; descriptive link text |
| Performance | Core Web Vitals targets in §15 (they affect ranking) |
| Indexing | Preview deployments on Vercel are `noindex`. Production must never be `noindex`: the rule applies only when a deployment is positively identified as a preview, never as a fallback default (D26) |

---

## 15. Performance

### 15.1 Budgets (measured on a mid-range mobile device, 4G profile)
| Metric | Target |
|--------|--------|
| Largest Contentful Paint (LCP) | < 2.5s (aim < 1.8s) |
| Interaction to Next Paint (INP) | < 200ms |
| Cumulative Layout Shift (CLS) | < 0.1 (aim < 0.05) |
| First-load JavaScript (home) | < 150KB gzipped |
| Total home page weight | < 1MB on first load |
| Lighthouse Performance (mobile) | ≥ 90 |

### 15.2 Rendering
- Static generation for all pages (home and every case study, via `generateStaticParams`).
- Server Components by default; isolate Client Components to the smallest interactive leaf.
- No client-side data fetching for portfolio content.

### 15.3 Images
- `next/image` everywhere: automatic AVIF/WebP, responsive `srcset`, correct `sizes`.
- The hero/LCP image (if any) uses priority loading; everything below the fold lazy-loads (the default).
- Explicit dimensions or aspect ratio on every image (no CLS).
- Source images ≤ 2560px wide, compressed before committing; diagrams as SVG where possible.
- Blur placeholders for large project thumbnails.

### 15.4 Fonts
- `next/font` for self-hosting with automatic preload and size-adjusted fallbacks (no layout shift).
- Variable fonts, Latin subset, two families maximum, only the weights in use.

### 15.5 JavaScript and bundle
- Motion (not installed in Milestone 4, D24): if added later, use lazy-loaded features and lightweight motion components; never animate in Server Components.
- Lucide: per-icon imports only (no full icon set).
- Third-party scripts: none by default. Any analytics (OD-12) loads after interaction/idle and must be privacy-friendly.
- Use the bundle analyzer before each release; reject dependencies that add > 20KB gzipped without a strong reason.

### 15.6 Delivery
- Vercel (D10) edge caching for static assets; immutable caching for hashed files.
- Resume PDF compressed (< 500KB).
- Monitor Core Web Vitals in production (Vercel Speed Insights): **Open (OD-12)**.

---

## 16. Technical Architecture

**Approved stack:** Next.js (D4) · TypeScript (D5) · App Router (D6) · Tailwind CSS (D7) · Motion (D8; not installed in Milestone 4, D24) · Lucide React (D9) · Vercel (D10) · npm package manager (D13).
Exact package versions are pinned at initialization (npm records them in `package-lock.json`) and recorded in §19.

### 16.1 Routes
| Route | Content | Rendering |
|-------|---------|-----------|
| `/` | Home with all sections | Static |
| `/projects/[slug]` | Case study per project | Static (pre-generated) |
| `/resume.pdf` | Resume file (static asset). Exists only once the owner supplies a resume (OD-16) | Static |
| 404 | Not-found page | Static |
| `/api/contact` | Not in v1 (D17). Only if a future decision on OD-10 supersedes D17 | Serverless function |

### 16.2 Proposed folder structure
```
src/
  app/                    # routes, layouts, metadata files (sitemap, robots, OG images)
    projects/[slug]/
  components/
    ui/                   # primitives: Button, Tag, Card, Container, SectionHeading
    sections/             # Hero, About, Skills, Projects, Experience, Education, Learning, Contact
    layout/               # Header, MobileMenu, Footer, SkipLink
    motion/               # Client-side motion wrappers (Reveal, Stagger)
  content/                # typed portfolio data: profile, skills, projects, experience, education, learning
  lib/                    # utilities (metadata helpers, formatting)
  styles/                 # global CSS and design tokens
  types/                  # content schemas
public/                   # images, resume PDF, icons
docs/                     # DESIGN_SPEC.md and other documentation
```
Consistent with `.claude/rules/architecture.md`.

### 16.3 Content model (typed)
Each entity is defined as a TypeScript type and validated at build time. Optional fields are omitted when unknown.
- **Profile:** name, role, positioning, summary, location (optional), availability (optional), email, social links, resume path.
- **Skill group:** name, skills[] (each optionally linked to project slugs).
- **Project:** slug, title, summary, problem, overview, domain(s), role, timeline, personal contribution, dataset (optional), implementation, architecture (optional, image + description), evaluation (metrics with value, dataset/split, baseline, and source/evidence link), technologies[], links (repo, demo optional), images[], featured flag (at most 3 featured, D18), order.
- **Experience:** role, organization, location, start/end, bullets[], technologies[].
- **Education:** degree, institution, start/end (or expected), coursework (optional), honors (optional).
- **Learning item:** type (course | certification | paper | research note | article), title, issuer/source, date, link, notes (optional).

**Approved (D19):** all v1 content, including case studies, is stored in TypeScript data files. No MDX in v1; MDX may be reconsidered in a future version if needed.

### 16.4 Design tokens in code
- Tokens defined once as CSS custom properties (§5–§7, §11.2) and mapped into the Tailwind theme so components use semantic utilities only.
- `.claude/rules/design-system.md` governs usage.

### 16.5 Quality tooling (Approved, D20)
**Approved (D20):** ESLint (Next.js config), Prettier, Vitest, Playwright and axe, alongside TypeScript `strict` (D5). Tools are introduced gradually as development progresses; each is required once it is set up, and all must pass before release (§18). Testing Library (for Vitest component tests): **Approved (D31)**, with `@testing-library/user-event`, `@testing-library/jest-dom`, `jsdom` and `@vitejs/plugin-react`.
**Milestone 4 (D29):** Playwright and `@axe-core/playwright` are set up in step 4.6 for a small, selective set of browser tests that run in GitHub Actions only (§20.4). This set is the *minimum* for Milestone 4, not a reduction of the standards in `.claude/rules/testing.md`. **D30 (v0.16)** adds screenshots at the nine §18.3 widths to the CI run and sets up Vitest in step 4.1. **D31–D34 (v0.17)** approve the Testing Library stack, require a component test for every new React component in its own step (Playwright adds end-to-end coverage and does not replace it), make rule-file updates separate reviewed proposals, and fix the CI browser and screenshot details. Vitest is not used for unrelated application logic. §20.7 maps every `testing.md` requirement to where it is met.
Commands are documented in `CLAUDE.md` once the project is initialized.

### 16.6 Deployment
- Vercel with preview deployments per branch and production on the main branch.
- Security headers (CSP, HSTS, etc.) per `.claude/rules/security.md`.
- Environment variables only if needed; none are needed for contact in v1 (email only, D17). Never exposed to the client unless non-sensitive.

### 16.7 Security headers and Content Security Policy (D25)
- Headers required by `.claude/rules/security.md`: Content-Security-Policy, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, HSTS.
- **The CSP must be conservative.** `'unsafe-inline'` and `'unsafe-eval'` are not assumed, and are not defaults. The policy is designed and then tested against the actual production build (`next build` + `next start`) before it is enforced.
- If testing shows an exception is unavoidable (for example Next.js inline scripts), it is written into this section with the reason, the directive and the alternatives considered, and the owner approves it before enforcement. Until then, no `unsafe-*` source is enforced.
- The CSP is verified on every route (`/` and the 404 page) with zero violations in the browser console.
- JSON-LD (D25) is the only permitted use of `dangerouslySetInnerHTML`. It serializes a fixed, typed object with `JSON.stringify` and escapes `<`, U+2028 and U+2029. No user input is ever included.

---

## 17. Content Guidelines

### 17.1 Integrity rules (D12, non-negotiable)
- Only real projects, experience, education, certifications, and research.
- **No invented metrics, achievements, clients, users, testimonials, or statistics.**
- Placeholder text never ships. If content isn't ready, its section or field is hidden.
- Team or course projects state the personal contribution clearly.

### 17.2 Writing style
- Short sentences and paragraphs (≤ 4 lines on desktop).
- Lead with the problem and the outcome; use active verbs.
- Explain acronyms on first use in case studies.
- Use consistent tense: past tense for completed work, present for ongoing.

### 17.3 Verified results
A result may be displayed only if all of these hold:
1. It was actually measured by the project.
2. The metric, dataset/split, and baseline are stated.
3. Evidence exists (a repository, notebook, report, or logged experiment), linked where public.
4. It is reported exactly. No rounding up, no cherry-picking without saying so.

Otherwise, describe the evaluation approach qualitatively, or omit the result.

### 17.4 Media
- Use real screenshots, diagrams, plots, and sample outputs.
- Diagrams use the brand palette and the sans/mono typefaces.
- Respect dataset and image licenses; credit sources where required.
- No personal data from datasets is shown.

### 17.5 Required content from the owner before build completion
Bio and positioning confirmation, skills list, 0–3 featured projects with verified content and assets (D18), experience entries (if any), education details, learning/research items, resume PDF, professional photo (optional), email and social links, and the production domain.

---

## 18. Acceptance Criteria

A release is complete only when every item below passes. The per-step criteria for Milestone 4 are in §20.4; they add to these items and do not replace them.

### 18.1 Design
- [ ] All colors, spacing, type, radii, and motion use the tokens in this spec.
- [ ] The palette contrast-validation gate (§5.5) has passed and is recorded in §19.
- [ ] None of the items in §2.5 appear.
- [ ] Every section in §9 follows its specification or is intentionally hidden for lack of real content.
- [ ] The homepage shows 0–3 featured projects and never an empty or placeholder card (D18).

### 18.2 Content
- [ ] All content is real and owner-approved; no placeholder text.
- [ ] Every displayed metric meets §17.3.
- [ ] Every project shows problem, overview, implementation, technologies, personal contribution, and a GitHub link (or states why it's private).

### 18.3 Responsive
- [ ] No horizontal scroll or clipped content at 320, 375, 414, 768, 1024, 1280, 1440, 1920, and 2560px.
- [ ] Works at 200% and 400% zoom and in landscape mobile.
- [ ] Mobile menu passes all §8.3 behaviors.
- [ ] The projects grid is checked with 1, 2 and 3 cards at every width above (D18).

### 18.4 Accessibility
- [ ] Zero axe violations on all routes.
- [ ] Keyboard-only and screen reader (NVDA + VoiceOver) passes complete without blockers.
- [ ] Reduced motion fully respected.
- [ ] All images have appropriate alt text; charts have text equivalents.

### 18.5 Performance
- [ ] Meets every budget in §15.1 on the production build.
- [ ] No CLS from fonts, images, or animations.

### 18.6 SEO
- [ ] Unique title, description, canonical URL, and OG image on every page.
- [ ] Valid JSON-LD; sitemap and robots present; preview deployments are `noindex`.

### 18.7 Engineering
- [ ] TypeScript strict with no errors; lint and tests pass; production build succeeds.
- [ ] `pre-deployment-audit` skill returns **GO**.

---

## 19. Design Decisions and Change Log

### 19.1 Process
1. A change is proposed (by the owner or Claude) with its rationale.
2. The owner approves or rejects it explicitly.
3. The affected sections and this log are updated together.
4. Claude never marks a decision Approved without the owner's explicit confirmation, and never contradicts an Approved decision.

### 19.2 Approved decisions
| ID | Decision | Date | Approved by |
|----|----------|------|-------------|
| D1 | Visual direction: **dark premium** | 2026-11-02 | Kishor Kumar |
| D2 | Accent color: **blue / electric blue** | 2026-11-02 | Kishor Kumar |
| D3 | Animation: **balanced and purposeful** | 2026-11-02 | Kishor Kumar |
| D4 | Framework: **Next.js** | 2026-11-02 | Kishor Kumar |
| D5 | Language: **TypeScript** | 2026-11-02 | Kishor Kumar |
| D6 | Routing: **Next.js App Router** | 2026-11-02 | Kishor Kumar |
| D7 | Styling: **Tailwind CSS** | 2026-11-02 | Kishor Kumar |
| D8 | Animation library: **Motion** | 2026-11-02 | Kishor Kumar |
| D9 | Icons: **Lucide React** | 2026-11-02 | Kishor Kumar |
| D10 | Hosting target: **Vercel** | 2026-11-02 | Kishor Kumar |
| D11 | Accessibility target: **WCAG 2.2 AA** | 2026-11-02 | Kishor Kumar (from spec requirements) |
| D12 | Content integrity: no fake statistics, achievements, clients, testimonials, or unverified results | 2026-11-02 | Kishor Kumar (from CLAUDE.md §3 and spec requirements) |
| D13 | Package manager: **npm** (resolves OD-15) | 2026-11-02 | Kishor Kumar |
| D14 | Color palette: **approve the proposed palette** in §5.1 and §5.2 as specified in v0.2, including `accent-strong`, `accent-strong-hover`, `on-accent`, and `border-strong`. Values unchanged. Accessibility contrast validation (§5.5) is still required before implementation (resolves OD-1) | 2026-11-02 | Kishor Kumar |
| D15 | Typography: **Geist Sans + Geist Mono** (resolves OD-2) | 2026-11-02 | Kishor Kumar |
| D16 | Theme: **dark only for v1**; no light/dark toggle in the initial release (resolves OD-3) | 2026-11-02 | Kishor Kumar |
| D17 | Contact: **email only for v1**. No contact form, no backend or API route. Email shown as visible text with a `mailto:` link, plus GitHub and LinkedIn links; a copy-email button is optional (resolves OD-10) | 2026-11-02 | Kishor Kumar |
| D18 | Featured projects: the homepage shows **at most 3** featured projects (0–3; replaces 3–6). Only approved, verified projects are shown; no empty or placeholder cards; the grid adapts to 1, 2 or 3 cards; with 0 projects, the section and its navigation link are hidden and *Download resume* becomes the primary hero CTA. Each featured project has its own case study page. A separate All Projects page is not part of v1 | 2026-11-02 | Kishor Kumar |
| D19 | Content storage: **TypeScript data files** for all v1 content, including case studies. No MDX in v1; MDX may be reconsidered in a future version if needed (resolves OD-13) | 2026-11-02 | Kishor Kumar |
| D20 | Quality tooling: **ESLint, Prettier, Vitest, Playwright and axe**. Introduced gradually as development progresses rather than all at once; each is required once set up, and all must pass before release (§18) | 2026-11-02 | Kishor Kumar |
| D21 | Signature illustration: one **labeled, accurate, foreground** SVG neural-network illustration is allowed in the hero, as a specific exception to the decorative restrictions in §2.5 and §11.4. It must be captioned as an illustration and never presented as Kishor's own model or result; use flat token colors (no glow, §5.4); be revealed once with no looping motion; and have a text alternative. Neural-network backgrounds, particle effects and decorative network art remain not allowed | 2026-11-03 | Kishor Kumar |
| D22 | Hero positioning statement (resolves OD-14), exactly: "Artificial Intelligence undergraduate developing a strong foundation in Machine Learning, Computer Vision, and Natural Language Processing." Replaces the v0.12 draft in §2.1 | 2026-11-03 | Kishor Kumar |
| D23 | Hero primary CTA is **"Get in touch"**, linking to `#contact`. No resume CTA, Resume button or resume link until an actual resume PDF exists (OD-16). This amends only D18's fallback ("Download resume becomes the primary hero CTA"); the rest of D18 is unchanged | 2026-11-03 | Kishor Kumar |
| D24 | Milestone 4 animation is **CSS-only**; Motion is not installed. D8 is not revoked: Motion remains the approved library if a later milestone needs it | 2026-11-03 | Kishor Kumar |
| D25 | JSON-LD `Person` is approved, with safe serialization and escaping (§16.7); it is the only permitted `dangerouslySetInnerHTML` use. The CSP must be conservative: `unsafe-inline` / `unsafe-eval` are **not** assumed as defaults, and a policy is tested against the actual production build before it is enforced (§16.7) | 2026-11-03 | Kishor Kumar |
| D26 | Domain and indexing: no production domain exists and none is invented (OD-11 stays open). Preview deployments are `noindex`; production must not be accidentally `noindex`, so the rule applies only when a deployment is positively identified as a preview. Absolute URLs come from configuration, not hardcoded values | 2026-11-03 | Kishor Kumar |
| D27 | Role wording: **"Aspiring AI/ML Engineer"** is used consistently, including the hero eyebrow, page title and metadata, JSON-LD `jobTitle` and the share image. Amends the eyebrow in §9.1 and the home title in §14 | 2026-11-03 | Kishor Kumar |
| D28 | Milestone 4 ("Premium Visual Identity and Portfolio Polish") includes all steps 4.0 through 4.7 as set out in §20.4 | 2026-11-03 | Kishor Kumar |
| D29 | Browser tests in Milestone 4 (resolves OD-17): **selective Playwright browser tests plus axe accessibility checks** for essential page and menu states. They run in **GitHub Actions only**; browsers are installed in CI only, never locally. Essential tests: homepage loads with exactly one `h1` and a working skip link; the mobile menu opens, closes with Escape and restores focus; anchor navigation works; external links carry appropriate `rel` attributes; the 404 page returns HTTP 404; axe checks the homepage, the 404 page and the open mobile-menu state. The tests are added in step 4.6 together with CI; step 4.7 records the results. Vitest is **not** added unless a genuine unit-testing need arises. D20 is not revoked (Vitest stays approved but is not set up). **Clarified in v0.15:** these tests are the *minimum* automated browser and accessibility coverage for Milestone 4; they do not weaken the existing requirements in `.claude/rules/testing.md`, which stay in force and are not edited in the specification step. **Extended in v0.16 by D30:** the sentence "Vitest is not added unless a genuine unit-testing need arises" is refined by D30, which sets up Vitest in step 4.1 for components that genuinely need component-level tests | 2026-11-03 | Kishor Kumar |
| D30 | Testing standards for Milestone 4 (closes the testing gap recorded in v0.15). (1) `.claude/rules/testing.md` is preserved **unchanged and fully in force**. (2) Playwright browser tests and `@axe-core/playwright` checks run in GitHub Actions. (3) **Screenshots at all nine §18.3 widths** (320, 375, 414, 768, 1024, 1280, 1440, 1920, 2560) are part of CI verification. (4) **Vitest** is set up (in step 4.1, with the shared `Button`) and used for `Button` and any other newly introduced component that genuinely requires component-level testing, following `testing.md` (queries by role/label; no snapshot tests of large DOM trees). (5) Vitest is **not** added for unrelated application logic without a genuine need. (6) Browsers are installed and run **only in CI**; Vitest needs no browser. (7) The D29 scenarios remain the *minimum* Milestone 4 browser and accessibility coverage. (8) Test results, screenshot artifacts and CI run identifiers are recorded in step 4.7. Testing Library remains Proposed until separately approved (OD-18). **Refined in v0.17:** Testing Library is approved by D31 (resolves OD-18); D32 replaces the "genuinely requires" qualifier in item (4) by a component test for **every** new React component in the step that introduces it; D34 settles the CI browser and screenshot details | 2026-11-03 | Kishor Kumar |
| D31 | Testing Library approval (resolves OD-18). The Vitest component-testing stack is approved: `vitest`, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`, `jsdom` and `@vitejs/plugin-react`. They are development dependencies, each **explicitly pinned** (exact versions, `.npmrc` `save-exact`) to **mutually compatible** versions chosen and verified at installation in step 4.1, then recorded in §19.5. Nothing is installed during documentation-only steps. Component tests query by accessible role/name or label, as `testing.md` requires | 2026-11-03 | Kishor Kumar |
| D32 | Component tests accompany components. **Every new React component receives its required component test in the same implementation step in which the component is introduced**; a component's only test is never postponed to a later step or milestone. This applies to `Button` (4.1), the copy-email control (4.3), `NeuralFigure` (the step that introduces it, 4.2) and the Footer (the step that introduces it, 4.4), and to any other new React component. The **404 route** receives its browser-level test in 4.6. Playwright tests give additional end-to-end coverage and **do not replace** required component tests. Tests verify user-observable behavior, use accessible role/name or label queries wherever practical, and avoid large DOM snapshots and implementation-detail testing. Vitest is still not added for unrelated application logic without a genuine need (D30) | 2026-11-03 | Kishor Kumar |
| D33 | Rule-file updates are proposals, reviewed before application. At step 4.1, separate proposed updates for `.claude/rules/testing.md` and for `CLAUDE.md` §9 are prepared to reflect Vitest and the new required `npm test` gate. At step 4.6, separate proposed updates for the Playwright and axe requirements are prepared. **Neither file is edited** until the owner has reviewed and approved the proposal. Every proposal preserves the existing standards. The implementation plan states which rule governs in the meantime (§20.5) | 2026-11-03 | Kishor Kumar |
| D34 | CI and screenshots. **Chromium** is the initial CI browser. Screenshots are taken at all nine §18.3 widths (320, 375, 414, 768, 1024, 1280, 1440, 1920, 2560) for **both** the homepage and the 404 route (18 images). An **automated horizontal-overflow check** runs at every required viewport. Screenshot artifacts are **uploaded even when tests fail**, with **14-day retention**. Screenshots are inspected by a human; **no screenshot baselines are committed** and no image comparison is run. Browsers are installed and run **only in CI**; Vitest may run locally because it uses `jsdom` and needs no browser | 2026-11-03 | Kishor Kumar |

### 19.3 Open decisions
| ID | Decision needed | Section | Current proposal |
|----|-----------------|---------|------------------|
| OD-4 | Status colors (success, warning, error) | §5.2 | Not needed in v1 (no contact form, D17); define if a future feature requires them |
| OD-5 | Featured projects and their order | §9.4 | Owner to provide: 0–3 projects, each with verified content (D18) |
| OD-6 | Logo / monogram | §2.4 | "KK" wordmark in Geist Sans |
| OD-7 | Availability line in the hero | §9.1 | Include only if true; wording from owner |
| OD-8 | Professional photo | §9.1 | Optional |
| OD-9 | Experience section when there is no professional experience | §9.5 | Hide until real entries exist |
| OD-11 | Production domain | §14 | Owner to provide |
| OD-12 | Analytics and Speed Insights | §15 | Vercel Speed Insights only, privacy-friendly |
| OD-16 | Resume PDF: availability and file | §8.1, §9.1, §16.1 | No resume exists. The Resume button, resume CTA and `/resume.pdf` stay absent until the owner supplies a PDF (< 500KB, §15.6) |OD-11 (production domain) and OD-7 (availability line) also stay open. OD-6 (logo): the "KK" wordmark is the working proposal for the footer and icons, still pending approval.
### 19.3a Resolved decisions
| ID | Decision needed | Resolution | Date |
|----|-----------------|------------|------|
| OD-1 | Approve the palette values, including the added `accent-strong`, `accent-strong-hover`, `on-accent`, and `border-strong` tokens | **Resolved by D14.** Palette approved as specified; contrast validation (§5.5) still required before implementation | 2026-11-02 |
| OD-2 | Typefaces | **Resolved by D15.** Geist Sans + Geist Mono | 2026-11-02 |
| OD-3 | Light theme | **Resolved by D16.** Dark only for v1; no theme toggle | 2026-11-02 |
| OD-15 | Exact package manager and versions | **Resolved by D13.** npm. Exact versions are pinned at initialization and recorded in §19 | 2026-11-02 |
| OD-10 | Contact form vs. email only | **Resolved by D17.** Email only for v1; no contact form, backend or API route | 2026-11-02 |
| OD-13 | MDX for case study content | **Resolved by D19.** TypeScript data files for all v1 content; no MDX in v1 | 2026-11-02 |
| OD-14 | Positioning statement wording | **Resolved by D22.** Exact wording approved by the owner | 2026-11-03 |
| OD-17 | When Playwright + axe (and Vitest) are introduced | **Resolved by D29.** Selective Playwright and axe tests in Milestone 4, added in step 4.6 and run in GitHub Actions only; no Vitest unless a genuine need arises | 2026-11-03 |
| OD-18 | Vitest tooling and Testing Library approval | **Resolved by D31.** `vitest`, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`, `jsdom` and `@vitejs/plugin-react` approved, explicitly pinned and mutually compatible; exact versions chosen at installation in step 4.1 and recorded in §19.5 | 2026-11-03 |

### 19.4 Change log
| Version | Date | Change | Author | Status |
|---------|------|--------|--------|--------|
| 0.1 | 2026-11-02 | Initial draft (teal accent, Inter, light and dark themes) | Claude | Superseded, never approved |
| 0.2 | 2026-11-02 | Full rewrite to the owner's 19-section structure. Recorded D1–D10 from the owner; added D11 (WCAG 2.2 AA) and D12 (content integrity) from stated requirements. Added the owner's proposed palette with measured contrast and four extra tokens needed to pass AA. Listed open decisions OD-1–OD-15 | Claude | Draft, pending owner review |
| 0.3 | 2026-11-02 | Recorded owner approvals: D13 npm (OD-15), D14 color palette (OD-1), D15 Geist Sans + Geist Mono (OD-2), D16 dark only for v1 (OD-3). Updated §1.3, §5 intro, §5.1, §5.2, §5.5, §6, §16, §19.2, §19.3 and §19.3a. No palette values changed. Contrast validation still required before implementation. Conflicts with `.claude/rules/` not yet resolved | Claude | Draft; D13–D16 approved by owner |
| 0.4 | 2026-11-02 | Resolved spacing conflict 3 (owner-approved): added 112px to the §7.1 spacing scale (now 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 112, 128), matching the existing desktop section spacing. Clarified §7.4 "Between sections" Desktop+ value from "112–128px" to "112px (desktop) / 128px (large desktop)". §12.1 unchanged. No spacing values changed. `.claude/rules/design-system.md` spacing rule aligned to §7.1 | Claude | Draft; change approved by owner |
| 0.5 | 2026-11-02 | Completed conflict 3 cleanup (owner-approved): §10.5 tag padding changed from 4×10px to 4×8px so it uses the spacing scale. §7.1 now states the scale applies to layout spacing (margins, padding, gaps), not to component dimensions, typography offsets, borders, focus-ring offsets or animation distances. Unchanged: 72px desktop header height and its `scroll-margin-top`, 2px focus-ring offset, 3px underline offset, 2px hover lift, 44px button height. Spacing scale values unchanged | Claude | Draft; change approved by owner |
| 0.6 | 2026-11-02 | Resolved conflict 5 (owner-approved): recorded D17, email-only contact for v1 (resolves OD-10). Updated §9.8 Contact, the §16.1 `/api/contact` row, the §16.6 environment-variable note, the §5.2 status-color note and the OD-4 proposal to reflect that v1 has no contact form. `.claude/rules/architecture.md` now states v1 is frontend-only and links backend changes to OD-10 | Claude | Draft; D17 approved by owner |
| 0.7 | 2026-11-02 | Recorded D18 (owner-approved): homepage shows at most 3 featured projects (0–3) instead of 3–6. Updated §1.2, §1.3 (All Projects page out of scope for v1), §8.4, §9 intro (hidden-section rule), §9.1 hero CTA, §9.4, §10.3, §12.1 project grid, §16.3, §17.5, §18.1, §18.3 and the OD-5 proposal. Clarified that "All projects" links go to the homepage `#projects` section. Removed the ≥ 6 domain filter, which is no longer reachable | Claude | Draft; D18 approved by owner |
| 0.8 | 2026-11-02 | Recorded D19 (owner-approved): TypeScript data files for all v1 content, no MDX (resolves OD-13). Recorded D20 (owner-approved): ESLint, Prettier, Vitest, Playwright and axe, introduced gradually and all required before release. Updated §16.3 and §16.5; OD-13 moved to §19.3a. Testing Library remains Proposed | Claude | Draft; D19–D20 approved by owner |
| 0.9 | 2026-11-02 | Milestone 1 (Next.js setup): added §19.5 with the exact installed dependency versions, ESLint 9.39.5 as a temporary tooling exception (end of life, with revisit condition), and the analysis of the dev-only minimatch advisory. No approved decisions, token values or other sections changed | Claude | Draft; recorded at the owner's request |
| 0.10 | 2026-11-02 | Recorded the partial accessibility validation (§5.5) for Milestone 2 (Foundation + Hero) in new §19.6, and added a status note under §5.5. Four accessibility fixes (A–D) were applied in code. No approved decisions, token values or other sections changed. The validation is **not** marked complete: real browser zoom, real Windows High Contrast, NVDA, VoiceOver, other browsers and touch testing are outstanding | Claude | Draft; recording approved by the owner |
| 0.11 | 2026-11-03 | Milestone 3 (About, Skills, Education, Contact, header). Resolved an internal conflict (owner-approved): §8.1 and §7.1 said anchored sections use `scroll-margin-top`, while §13.2 requires `scroll-padding-top` for WCAG 2.4.11. The offset now lives on `html` as `scroll-padding-top` (header height + 8px); per-section `scroll-margin-top` is removed to avoid double spacing. Added the `lucide-react` row to §19.5. No tokens or approved decisions changed | Claude | Draft; change approved by owner |
| 0.12 | 2026-11-03 | Container widths (owner-approved clarification, found by a read-only audit against v0.11). §7.2 now states that each container max width is the total box width, including the horizontal page padding. §12.1 "Page padding" row reworded to match. Implementation: the header and the hero use the `wide` (1360px) container; About, Skills, Education and Contact use the default `content` (1200px) container. Previously every section used `wide`. No token values changed | Claude | Draft; clarification approved by owner |
| 0.13 | 2026-11-03 | Milestone 4.0 (plan only, no code). Recorded owner decisions D21–D28: labeled foreground neural-network illustration (D21), exact positioning statement (D22, resolves OD-14), "Get in touch" hero CTA with no resume CTA (D23), CSS-only animation (D24), JSON-LD plus a conservative, tested CSP (D25), no invented domain and safe indexing (D26), "Aspiring AI/ML Engineer" wording (D27), Milestone 4 scope 4.0–4.7 (D28). Updated §2.1, §2.4, §2.5, §8.1, §9.1, §11 (new §11.7), §14, §15.5, §16 (new §16.7), §18, §19.5; added open decisions OD-16 and OD-17; added §20 (Milestone 4 plan, design details, sequence, acceptance criteria, unresolved items, conflicts). No token values and no decisions D1–D20 changed (D18's CTA fallback is amended only by D23; D8 is not revoked) | Claude | Draft; D21–D28 approved by owner |
| 0.14 | 2026-11-03 | Amendments after owner review of v0.13 (v0.13 is kept as the reviewed version). (1) **Animation corrected:** v0.13 §11.7 and §20.3 introduced an `IntersectionObserver` helper and scroll-triggered section reveals, which contradicted the CSS-only decision (D24) and the rule that content is visible immediately. Both are removed: the hero entrance (without the `h1`), the illustration's one-time reveal, reduced-motion support and subtle hover/focus transitions stay; no scroll reveals, no observer, no hidden starting states; content is visible with JavaScript disabled. §11.3 "Section content" row annotated. (2) **D29 added and OD-17 resolved:** selective Playwright browser tests and axe checks, run in GitHub Actions only, added in step 4.6, results recorded in step 4.7; no Vitest unless a genuine need arises; §16.5 and §19.5 updated. (3) **Step 4.1** now includes correcting the role wording in `src/content/site.ts` to "Aspiring AI/ML Engineer" (was step 4.5). (4) **Acceptance criteria** for steps 4.0–4.4, 4.6 and 4.7 and the common gate updated: no axe requirement before the CI test setup exists in 4.6. §20.1–§20.6 updated to match. No token values and no decisions D1–D28 changed | Claude | Draft; amendments and D29 approved by owner |
| 0.15 | 2026-11-03 | Final documentation corrections after owner review of v0.14 (v0.13 and v0.14 are preserved above). (1) **Animation:** the hero entrance is now transform-only (subtle `translateY`); opacity is never animated from zero; the `h1` stays unanimated; the neural illustration is visible immediately and may use a subtle one-time, transform-only entrance; no scroll-triggered reveals or hidden section states; reduced motion removes movement and shows the final state at once. Updated §11.3 (Hero row), §11.7, §20.3 and the step 4.2 criteria. (2) **`IntersectionObserver`:** no longer banned globally. The existing header scroll spy (§8.2) uses it and remains unchanged; only new `IntersectionObserver` or scroll-listener code for scroll-triggered animation, reveal effects or hidden section states is prohibited. Step 4.1 criteria corrected so they no longer contradict the scroll spy. (3) **Testing standards:** D29 is the minimum automated browser and accessibility coverage for Milestone 4 and does not weaken `.claude/rules/testing.md`, which is unchanged; the v0.14 line saying the rule file would be updated in 4.6 is removed; the open question of how its Playwright, screenshot and component-test rules are met is recorded in §20.5; any rule-file change is presented separately for review. Updated D29 (clarification), §16.5, §20.4 (steps 4.0, 4.1, 4.2, 4.6, 4.7), §20.5 and §20.6. No token values and no decisions D1–D28 changed | Claude | Draft; amendments approved by owner |
| 0.16 | 2026-11-03 | Testing gap resolved (owner decisions; v0.13, v0.14 and v0.15 are preserved above). Added **D30**: `.claude/rules/testing.md` stays unchanged and fully in force; Playwright and axe run in GitHub Actions; screenshots at all nine §18.3 widths are part of CI verification; Vitest is set up in step 4.1 for `Button` and any other new component that genuinely needs component-level tests, not for unrelated application logic; browsers are installed and run only in CI; the D29 scenarios stay the minimum; test results, screenshot artifacts and CI run identifiers are recorded in step 4.7. The exact rule file was read before editing and each of its requirements is mapped to its coverage in the new §20.7. Updated D29 (pointer to D30), §16.5, §19.5, §20 intro, §20.2, §20.4 (common gate now includes `npm test` from 4.1; steps 4.0, 4.1, 4.2, 4.3, 4.4, 4.6, 4.7), §20.5 and §20.6. Added open decision **OD-18** (Testing Library and the exact Vitest packages, needed before 4.1). The rule-file and `CLAUDE.md` updates that `testing.md` itself calls for are not made here and are to be presented separately for review. No token values and no decisions D1–D29 changed | Claude | Draft; D30 approved by owner |
| 0.17 | 2026-11-03 | Testing decisions D31–D34 (owner decisions; v0.13 to v0.16 are preserved above). **D31:** Testing Library approved as part of a six-package Vitest stack (`vitest`, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`, `jsdom`, `@vitejs/plugin-react`), explicitly pinned and mutually compatible, versions chosen at installation in step 4.1; OD-18 resolved. **D32:** every new React component gets its component test in the same step that introduces it (`Button` 4.1, `NeuralFigure` 4.2, copy-email control 4.3, Footer 4.4); the 404 route's browser-level test is in 4.6; Playwright is additional and never replaces a required component test; v0.16's "static components are tested in the browser in 4.6" is superseded. **D33:** rule-file updates are separate proposals (4.1 for Vitest and `npm test`, 4.6 for Playwright and axe) for `.claude/rules/testing.md` and `CLAUDE.md` §9, reviewed before application; nothing edited; the governing rule in the meantime is stated. **D34:** Chromium in CI, screenshots at nine widths for the homepage and the 404 route (18 images), automated overflow checks, upload even on failure, 14-day retention, human inspection, no committed baselines; Vitest may run locally. Updated D30 (refinement note), §16.5, §19.5, §20 intro, §20.2, §20.4 (common gate; steps 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7), §20.5, §20.6 and §20.7. No token values and no decisions D1–D30 changed other than the refinements noted | Claude | Draft; D31–D34 approved by owner |
| 0.18 | 2026-11-03 | Two final corrections after owner review of v0.17 (v0.13 to v0.17 are preserved above). (1) **Immediate regression test:** step 4.1 now includes a focused Vitest assertion for the corrected "Aspiring AI/ML Engineer" role/title content, written in the same step as the correction instead of in 4.6; it is an owner-directed exception to "no Vitest for unrelated application logic" (D30), limited to this one test. The browser-level page-title assertion stays in 4.6 as additional coverage. (2) **`npm test` permission:** `.claude/settings.json` stays unchanged; step 4.1 must inspect its current permission configuration and propose the smallest necessary update for `npm test`, applied only with the owner's explicit approval. Updated §20 intro, §20.4 (steps 4.0, 4.1, 4.6), §20.5, §20.6 and §20.7 (requirement 11). D31–D34, the component-test assignments, the testing requirements, the CI gates and the design, accessibility, security, animation and responsive requirements are unchanged | Claude | Draft; corrections approved by owner |
| 0.19 | 2026-11-03 | Step 4.1 record (no decisions changed). §19.5 now lists the eight test dependencies installed in step 4.1 with their exact versions (`vitest` 4.1.12, `@testing-library/react` 16.3.3, `@testing-library/user-event` 14.6.8, `@testing-library/jest-dom` 6.9.1, `jsdom` 29.1.1, `@vitejs/plugin-react` 6.2.1, plus the required peers `vite` 8.3.5 and `@testing-library/dom` 10.4.2, both owner-approved additions to the six-package list of D31), the Node.js requirements for testing (20.19+ locally, 22.13+ in CI; `engines` unchanged), the lockfile platform note and the `npm audit` result. Version 0.18 stays the committed specification checkpoint | Claude | Draft; recorded as required by step 4.1 |

### 19.5 Pinned dependency versions
Installed at project initialization (Milestone 1, 2026-11-02) with npm (D13). All direct dependencies are pinned to exact versions (`.npmrc`: `save-exact=true`), and `package-lock.json` records the full dependency tree. Node.js ≥ 20.9.0 (`engines` in `package.json`); verified locally on Node.js 26.13.0 and npm 11.20.0.

| Package | Version | Type | Notes |
|---------|---------|------|-------|
| `next` | 16.4.4 | dependency | D4, D6 |
| `react` | 19.3.1 | dependency | |
| `react-dom` | 19.3.1 | dependency | |
| `lucide-react` | 1.67.0 | dependency | D9. Added in Milestone 3 (2026-11-03) for the Mail and ArrowUpRight icons; imported individually |
| `typescript` | 5.9.3 | devDependency | D5. TypeScript 7.x is not used: `typescript-eslint` supports TypeScript < 6.1.0 only |
| `tailwindcss` | 4.3.3 | devDependency | D7 |
| `@tailwindcss/turbopack` | 4.3.3 | devDependency | Tailwind integration generated by `create-next-app` 16.4.4 (Turbopack loader in `next.config.ts`; no PostCSS config). Change only for a demonstrated technical requirement |
| `eslint` | 9.39.5 | devDependency | D20. **Temporary tooling exception** (see below) |
| `eslint-config-next` | 16.4.4 | devDependency | D20; matches `next` |
| `prettier` | 3.9.10 | devDependency | D20 |
| `prettier-plugin-tailwindcss` | 0.8.1 | devDependency | Tailwind class ordering |
| `@types/node` | 20.19.43 | devDependency | Matches the Node.js 20 minimum |
| `@types/react` | 19.3.0 | devDependency | |
| `@types/react-dom` | 19.3.0 | devDependency | |
| `vitest` | 4.1.12 | devDependency | D20, D30, D31. Added in step 4.1 (2026-11-03). Latest 4.x; the 5.x line needs Node 22+ and `@types/node` 22+, which this project does not use (a dry run failed with `ERESOLVE`) |
| `@testing-library/react` | 16.3.3 | devDependency | D31. Step 4.1. React 19 supported |
| `@testing-library/user-event` | 14.6.8 | devDependency | D31. Step 4.1 |
| `@testing-library/jest-dom` | 6.9.1 | devDependency | D31. Step 4.1. Deliberately below 6.10.0 and 7.x, which require Node 22 or newer |
| `jsdom` | 29.1.1 | devDependency | D31. Step 4.1. Test environment; no browser needed |
| `@vitejs/plugin-react` | 6.2.1 | devDependency | D31. Step 4.1. Requires Vite 8 |
| `vite` | 8.3.5 | devDependency | Step 4.1. Required peer of `vitest` and `@vitejs/plugin-react`; pinned explicitly with owner approval (not in the six-package list of D31) |
| `@testing-library/dom` | 10.4.2 | devDependency | Step 4.1. Required peer of `@testing-library/react` and `@testing-library/jest-dom`; pinned explicitly with owner approval (not in the six-package list of D31) |

Not installed yet: Motion (D8), Playwright and axe (D20). Their versions are recorded here when they are added. Motion is deliberately not installed during Milestone 4 (D24). Playwright (`@playwright/test`) and `@axe-core/playwright` are installed in step 4.6 (D29) with exact pinned versions, which are recorded in this table at that time. Vitest and its supporting test tooling were installed in step 4.1 (D30, D31); their exact versions are in the table above. Installed without `--force` or `--legacy-peer-deps`; `npm ls` reports no peer-dependency problems.

**Node.js requirements for testing (step 4.1).** The application keeps `engines.node >=20.9.0` (unchanged, owner decision): building and running the site works from Node.js 20.9. Running the tests (`npm test`) needs **Node.js 20.19 or newer** (Vite 8, `@vitejs/plugin-react` 6 and `jsdom` 29 require `^20.19.0 || ^22.13.0 || >=24`). The CI baseline for step 4.6 is **Node.js 22.13 or newer** (22 LTS). Local development was verified on Node.js 26.13.0.

**Lockfile and platforms.** The lockfile records the native binaries of `rolldown` and `lightningcss` for Windows, Linux and macOS, as it already did for Next.js and Tailwind, so `npm ci` on a Linux CI runner is expected to work. This is only proven by the first CI run in step 4.6.

**`npm audit` after step 4.1.** Unchanged from before the install: 16 moderate findings, all from the single minimatch advisory in the development dependencies described above, and 0 vulnerabilities with `--omit=dev`. The new test tooling introduced no findings.

**Temporary tooling exception: ESLint 9.39.5 is end of life.**
- **Status:** ESLint 9 is no longer supported upstream. npm marks 9.39.5 as deprecated: "This version is no longer supported."
- **Reason:** there is no supported ESLint 10 combination for `eslint-config-next` 16.4.4. Its dependencies `eslint-plugin-react` 7.37.5 (`^9.7`), `eslint-plugin-jsx-a11y` 6.10.2 (`^9`) and `eslint-plugin-import` 2.32.0 (`^9`), the latest stable releases, do not declare ESLint 10 support. Installing ESLint 10 succeeds only because npm overrides these peer dependencies (`ERESOLVE overriding peer dependency`).
- **Revisit condition:** upgrade to ESLint 10 when stable releases of all three plugins declare ESLint 10 support, without prereleases, overrides or force flags. Check at each milestone and before every release.

**Known advisory (development dependencies only): GHSA-g3hv-75wg-m249 / CVE-2026-118764, minimatch, moderate.**
It stays visible in `npm audit` (16 moderate findings, all from this one advisory). It is not suppressed and not force-fixed. `npm audit --omit=dev` reports 0 vulnerabilities.
- **Affected range:** the GitHub Advisory Database lists `< 11.0.1` (first patched version 11.0.1). The maintainer's advisory text describes the issue in minimatch **10.2.6**, in `firstPhasePreProcess()` when `optimizationLevel >= 2`.
- **minimatch 3.1.5** (used by `eslint`, `@eslint/config-array`, `@eslint/eslintrc`, `eslint-plugin-react`, `eslint-plugin-jsx-a11y` and `eslint-plugin-import`): the installed code contains no `firstPhasePreProcess`, `secondPhasePreProcess` or `optimizationLevel`, so the described vulnerable code is not present. It is reported only because of the database's broader range.
- **minimatch 10.2.6** (used by `@typescript-eslint/typescript-estree` 8.72.1): the described code path is present. Its only call in `typescript-estree` passes `{ dot: true }`, so `optimizationLevel` keeps its default of 1 and the path is not reached.
- **No non-breaking fix exists:** 3.1.5 and 10.2.6 are the latest releases in their lines, and the dependents require `^3.1.x` and `^10.2.2`. `npm audit fix --force` would downgrade to `eslint` 4.0.0 / `eslint-config-next` 0.2.4 and must not be used. Revisit with the ESLint upgrade and before every release.

### 19.6 Accessibility validation record (§5.5): Foundation + Hero

**Status: PARTIAL. The §5.5 validation is not complete.** This records what was actually tested for the home page (`/`) at Milestone 2 (Foundation + Hero, 2026-11-02). The owner reviewed the audit report and approved recording these results; that approval covers the record only, not the completion of §5.5.

**Method and environment**
- Chrome 157.0.8103.26 (headless, Windows 11), driven over the DevTools protocol with scripted key presses and media emulation. The scripts were temporary and are not part of the repository.
- Tested against the production build (`next build` + `next start`). A first run accidentally used a development server; it was repeated on the production build with identical results.
- axe-core 4.14.0, taken from `node_modules` where it is a transitive dependency of `eslint-config-next` (through `eslint-plugin-jsx-a11y`). It is not a direct dependency, and the D20 axe tooling (`@axe-core/playwright`) is not set up yet.

**Automated (axe-core 4.14.0)**
- Rule sets: wcag2a, wcag2aa, wcag21a, wcag21aa, wcag22aa, best-practice.
- Before fixes: **0 violations**, 33 rules passed, 1 incomplete (`color-contrast`, 2 nodes).
- After fixes: **0 violations**, 35 rules passed, the same 1 incomplete.
- The incomplete nodes are the eyebrow `<p>` and `#hero-heading`: axe cannot determine their background because of the CSS-masked blueprint grid. They were checked by calculation (below), not by axe.

**Contrast (calculated independently, WCAG 2.x relative luminance; Foundation + Hero pairs only)**

| Pair as used | Ratio | Required | Result |
|--------------|-------|----------|--------|
| `text` on `bg` (header name link, `h1`) | 18.57:1 | 4.5:1 | Pass |
| `accent-highlight` on `bg` (eyebrow) | 7.64:1 | 4.5:1 | Pass |
| `text-muted` on `surface-elevated` (chips) | 6.14:1 | 4.5:1 | Pass |
| `text` on `surface-elevated` (skip link) | 15.05:1 | 4.5:1 | Pass |
| Focus ring `accent-highlight` on `bg` | 7.64:1 | 3:1 | Pass |
| Focus ring `accent-highlight` on `surface-elevated` | 6.19:1 | 3:1 | Pass |
| `text` over a grid line (`border`) | 12.02:1 | 3:1 (large text) | Pass |
| `accent-highlight` over a grid line (`border`) | 4.95:1 | 4.5:1 | Pass (small margin; keep in mind when adding text over the grid) |

The chip background against the page background (1.23:1) and the grid lines (1.54:1) are not requirements: the chip text carries the meaning and the grid is decorative.

**Keyboard (scripted in Chrome)**
- Tab order: skip link, then the header name link, then out of the page. Logical.
- Focus ring on both links: 2px solid `rgb(96, 165, 250)` with 2px offset, matching `:focus-visible`.
- Skip link activation changes the URL to `#main`. Before fix C, focus placement in `main` could not be shown; after fix C, focus moves to `main#main`.
- Name link target size 106×44px. Skip link while focused: 161×28px before fix A, 193×52px after.
- This was a scripted check. A manual, human keyboard-only pass has not been done.

**Zoom and reflow (emulated by viewport size, not by browser zoom)**
- 200% zoom emulated as a 640 CSS px viewport and 400% as a 320 CSS px viewport: no horizontal scroll and no overflowing elements at either.
- WCAG 1.4.12 text-spacing overrides at 375px: no horizontal scroll.
- Root font size raised to 64px at 1280px (after fix D): the header grows to contain its link, the hero starts below it, and there is no horizontal scroll.

**Display preferences (emulated)**
- Reduced motion: the setting took effect (`prefers-reduced-motion: reduce` matches). The page currently has no animations, transitions or smooth scrolling, so the result is trivially a pass. It must be retested when animation is added.
- Forced colors (Chrome emulation, plain white and black palette): text stays legible, the focus ring stays visible, and the decorative grid is removed. Before fix B, chip backgrounds disappeared and chips had no border; after fix B they show a 1px border.

**Fixes applied (from the audit)**

| ID | File | Change | Verified |
|----|------|--------|----------|
| A | `src/components/layout/SkipLink.tsx` | Focused padding via `focus:px-4 focus:py-3` (`not-sr-only` reset it to 0) | Focused size 193×52px, padding 12px 16px |
| B | `src/components/ui/Tag.tsx` | Added `border border-transparent` | Border is visible in forced colors, transparent in normal mode |
| C | `src/app/page.tsx` | Added `tabIndex={-1}` to `<main>` | Skip link moves focus to `main#main` |
| D | `src/components/layout/Header.tsx` | `h-16 lg:h-18` changed to `min-h-16 lg:min-h-18` | 64px at 320px, 72px at 1280px; grows with large text |

Finding E (the eyebrow's 4.95:1 over a grid line) passes and was left unchanged.

**Focus ring on `main` after fix C (resolved).** Making `main` focusable (fix C) made the global `:focus-visible` ring appear around the whole `main` area when the skip link moved focus there. Two owner-approved attempts to hide it on `main` alone did not work:
1. `focus:outline-none` on `<main>`: no effect, because the global focus rule is unlayered CSS and unlayered CSS beats Tailwind's layered utilities.
2. Wrapping the global focus rule in `@layer base { … }`: no effect in the Next.js production build. Tailwind's own output keeps the rule inside `@layer base` (checked in isolation), but the CSS served by the Next.js/Turbopack build contains the rule at the top level, outside any layer. The stage that removes the layer was not identified.

**Final solution (owner-approved):** the `@layer base` wrapper was removed, so the global rule is again plain `:focus-visible { outline: 2px solid var(--color-accent-highlight); outline-offset: 2px; }`, and a separate rule `main:focus { outline: none; }` was added to `src/styles/globals.css`. It is more specific than `:focus-visible`, so it wins without depending on CSS layers. `focus:outline-none` stays on `<main>` (redundant but harmless). `main` is focusable only so the skip link can move focus to it; it is not an interactive control.

**Verified in Chrome on a production build (computed styles; not inspected visually):** the skip link moves focus to `main#main`; `main` has `outline-style: none`; the skip link and the header name link keep `solid 2px rgb(96, 165, 250)` with a 2px offset; Tab moves from the skip link to the name link. Because `main` now has no focus indicator, a keyboard user who activates the skip link has no visible marker of where focus is. The next Tab press moves to the next interactive element, and the page has none after the header yet. Revisit when more interactive content exists, and cover it in the screen-reader and manual keyboard passes still outstanding below.

**§5.5 checklist status**

| Item | Status |
|------|--------|
| 1. Recompute every pair used in the UI | Done for Foundation + Hero (table above). Repeat for each new section. |
| 2. Automated audit, zero contrast violations | Done with a temporary axe-core 4.14.0 run (0 violations; 2 contrast nodes incomplete, covered by calculation). The repeatable Playwright + axe suite (D20) is not set up. |
| 3. Hover, focus, active, disabled and selected states | Partial. Focus checked. The header link's hover underline was inspected in code only. No active, disabled or selected states exist yet. |
| 4. 200% and 400% zoom, forced colors | Partial. Emulated only (see outstanding checks). |
| 5. Record results and owner approval | This record. The owner approved recording it; validation is **not** approved as complete. |

**Outstanding checks (not performed)**
- Real browser zoom at 200% and 400%.
- Real Windows High Contrast themes (the checks above used Chrome's emulation).
- Screen reader testing with NVDA (Windows) and VoiceOver (macOS/iOS), required by §13.8.
- A manual, human keyboard-only pass.
- Other browsers (Firefox, Safari, Edge) and touch/mobile device testing.
- Lighthouse accessibility audit.
- Repeatable automated suite (Playwright + `@axe-core/playwright`, D20).
- Retest of reduced motion once any animation exists.

---

## 20. Milestone 4: Premium Visual Identity and Portfolio Polish

> Recorded in v0.13 (step 4.0) and amended in v0.14 (D29 and the animation correction) and v0.15 (transform-only entrance, `IntersectionObserver` rule, testing standards) v0.16 (D30, testing gap resolved) and v0.17 (D31–D34, component tests with components, rule-file proposals, CI details) and v0.18 (immediate role/title regression test, `npm test` permission proposal). The scope and decisions D21–D34 are **Approved**. The design details in §20.3 are **Proposed**: the owner confirms each one when the step that builds it is reviewed. Nothing in this section overrides an Approved decision.

### 20.1 Goal and constraints
**Concept: "Neural Architecture"**, a digital identity built around intelligence, mathematics and machine learning. In practice: a calm dark page, one blue accent, and one signature figure that carries the identity.

Owner constraints (binding for the whole milestone):
- No Projects section. No invented experience, achievements, metrics or projects (D12).
- Dark only (D16). No light theme.
- No contact form and no backend (D17).
- No WebGL or heavy 3D. Prefer CSS, SVG and optimized assets.
- No unnecessary dependencies. Do not redesign existing sections without a clear reason. Preserve the existing architecture where practical.
- Typography (D15), spacing (§7.1) and container widths (§7.2) are unchanged.
- Target hardware for local testing: 8 GB RAM, no dedicated GPU, so measure against production builds and keep the visual lightweight.

### 20.2 Confirmed decisions
D21 illustration · D22 positioning statement · D23 hero CTA · D24 CSS-only animation · D25 JSON-LD and conservative CSP · D26 domain and indexing · D27 role wording · D28 scope 4.0–4.7 · D29 selective Playwright + axe tests, CI only · D30 full testing standards: `testing.md` unchanged, nine-width screenshots in CI · D31 Testing Library stack approved · D32 every new component gets its component test in its own step · D33 rule-file updates are separate reviewed proposals · D34 Chromium, 18 screenshots, overflow checks, 14-day artifacts, no committed baselines. Full text in §19.2; requirement-by-requirement coverage in §20.7.

### 20.3 Design details (Proposed)
**Hero content order**
1. Eyebrow (mono, `accent-highlight`): "Aspiring AI/ML Engineer" (D27).
2. `h1`: "Kishor Kumar" (display size). Not animated.
3. Positioning statement, word for word as in D22 (`body-lg`, about 60–68ch wide).
4. Credential line (mono, `text-muted`), read from the education content so nothing is retyped: degree · university · expected graduation.
5. Focus chips (existing).
6. Actions: primary button "Get in touch" → `#contact` (D23); icon links to GitHub and LinkedIn (44×44px, accessible names, external-link rules of §10.8).
7. From `lg`: the signature illustration in the right column (text 7 / visual 5, §12.1).

**Signature illustration (D21)**
- A feed-forward network: 4 input nodes, 5 hidden nodes, 3 output nodes, with connecting lines. One path is highlighted in `accent-highlight` / `accent` to show a signal flowing through. Flat fills and strokes from tokens only: no glow, no blur, no gradients, no raw hex.
- Layer labels (INPUT, HIDDEN, OUTPUT) and the two equations (`h = ReLU(W₁x + b₁)`, `ŷ = softmax(W₂h + b₂)`) are HTML text beside or under the SVG so they never fall below 12px (§6.3).
- Visible caption: "Illustration: a small feed-forward neural network." No numbers, accuracy, or claim that it is Kishor's model.
- Markup: server component, `<figure>` with `<svg role="img">` carrying `<title>` and `<desc>`; fixed `viewBox` and aspect ratio (no layout shift). The `desc` and caption say in words that one path is highlighted, so color is never the only signal (§13.4).
- Motion: visible immediately. It may use a subtle, one-time, transform-only entrance, with layers settling slightly into place from left to right (inside the 800ms hero budget, §11.3). No opacity animation from zero and no loop (§11.7).
- Mobile: below the text at full width (about 360px maximum); hidden in short landscape viewports so the hero does not exceed the screen (§12.2).

**Existing sections** (structure, spacing and widths unchanged)
- About: first paragraph styled as a lead (`body-lg`) with a short accent rule; remaining paragraphs unchanged.
- Skills: keep the grid and column counts of §12.1; add one decorative Lucide icon per group header (`aria-hidden`).
- Education: entry in a `surface` card; keep the dates layout of §12.1; no progress bars.
- Contact: email as the focal element (large text, visible, `mailto:` link), optional "Copy email" button (§9.8) with a polite live-region message, GitHub and LinkedIn as secondary buttons. The email works without JavaScript.
- A shared `Button` primitive (primary, secondary, icon; §10.4) is used by the hero and Contact.

**Footer** (§8.4, `surface` background, top `border`): "KK" monogram, name and one line ("AI undergraduate · University of Sindh"); navigation links built from the visible sections; email, GitHub and LinkedIn (icon + text); "Back to top"; copyright line; a static decorative three-dot divider echoing the illustration. No placeholder content. The year is a fixed value or the build year, not a client-side date.

**Animation** (CSS-only, D24, §11.7): hero entrance (except `h1`) as a subtle `translateY` rise only, 60ms stagger, total ≤ 800ms, starting on page load, with no opacity animation from zero; the illustration visible immediately with an optional one-time, transform-only entrance; hover and focus transitions of 150ms or less. Under `prefers-reduced-motion: reduce`: no movement, final state shown at once. All page content is visible immediately and with JavaScript disabled. Not built: scroll-triggered section reveals, hidden starting states, any new `IntersectionObserver` or scroll-listener code for animation or reveals, sliding nav indicator, cursor-follow, parallax, looping motion. The existing header scroll spy is unchanged.

**Mobile**: one column; stacked 44px buttons; 12px hero entrance rise; footer groups stacked; long email wraps.

### 20.4 Implementation sequence and acceptance criteria (D28)
Common gate for every step: `npm run lint && npm run typecheck && npm run format:check && npm run build` all pass; no dependency is added unless the step says so; nothing is committed or pushed without owner approval (CLAUDE.md §6); contrast is recomputed for any new color pair (§5.5). From step 4.1 on, `npm test` (Vitest, D30) is part of the gate: `npm run lint && npm run typecheck && npm run format:check && npm run build && npm test`. `npm test` runs Vitest only and needs no browser, so it may run locally. **Component-test rule (D32):** a step is not complete unless every new React component it introduces has its component test in that same step; tests use accessible role/name or label queries wherever practical, test user-observable behavior, and use no large DOM snapshots. **Rule files:** until the owner approves the D33 proposals, `.claude/rules/testing.md` and `CLAUDE.md` §9 stay as they are, and this stricter gate governs; each Milestone 4 request for commit approval reports the `npm test` result from step 4.1 on. Automated axe, Playwright and screenshot checks do not exist before step 4.6, so steps 4.1–4.5 are not required to pass them; each of those steps is checked by the criteria below, a manual keyboard review and a code review. From step 4.6 on, the CI browser tests and screenshots are an additional gate. Browsers are installed and run in GitHub Actions only; none is installed or run locally (D29, D30). Every requirement of `.claude/rules/testing.md` is mapped to its coverage in §20.7.

| Step | Scope | Objective acceptance criteria |
|------|-------|-------------------------------|
| **4.0** Spec | This document, v0.12 → v0.13 (reviewed), then amended to v0.14 (D29, animation correction) v0.15 (transform-only entrance, `IntersectionObserver` rule, testing standards) and v0.16 (D30, testing gap resolved) v0.17 (D31–D34) and v0.18 (immediate role/title regression test, `npm test` permission proposal). Documentation only | `git status` shows only `docs/DESIGN_SPEC.md` modified and nothing staged; version row reads 0.18; changelog rows 0.13 to 0.18 exist; no rule file (`.claude/rules/*`), `CLAUDE.md`, package file or source file is modified; nothing is installed; D21–D34 recorded; the text of D1–D20 is unchanged apart from the amendments named in D23; OD-11 and OD-16 remain Open; OD-17 is resolved by D29 and extended by D30; OD-18 is resolved by D31; the owner approves |
| **4.1** Foundations | Vitest set up with the D31 stack; `Button` primitive **with its component test, in this step (D32)**; proposed `testing.md` and `CLAUDE.md` §9 updates for Vitest and `npm test` (D33, presented separately, not applied); CSS-only motion utilities from the §11.2 tokens (transform-only hero entrance keyframes, 150ms transitions); site configuration module; **correct the role wording in `src/content/site.ts` from "AI/ML Engineer" to "Aspiring AI/ML Engineer"** (currently in `homeTitle`), **with a focused Vitest regression assertion written in this step (v0.18)**; inspect the permission configuration in `.claude/settings.json` and propose the smallest update `npm test` needs (not applied without the owner's explicit approval) | the only new dependencies are the six D31 dev dependencies (`vitest`, `@testing-library/react`, `@testing-library/user-event`, `@testing-library/jest-dom`, `jsdom`, `@vitejs/plugin-react`), each explicitly pinned (exact version) to a mutually compatible version, installed without `--force` or `--legacy-peer-deps`, with `npm ls` reporting no peer-dependency errors and the exact versions recorded in §19.5; if no compatible set exists, work stops and the owner is told before the list changes; no browser is downloaded; test files are checked by `npm run lint` and `npm run typecheck`, and the `@/` import alias works inside tests; `npm test` exists, runs without a browser and passes; the `Button` test covers rendering and key interaction (for example that a click is handled, that a disabled button does not fire it, and which element it renders), queries by role or label, and contains no snapshot of a large DOM tree; `Button` documents default, hover, focus-visible, active and disabled states; the built home page `<title>` reads "Kishor Kumar · Aspiring AI/ML Engineer" and the string "AI/ML Engineer" appears in `site.ts` only as part of "Aspiring AI/ML Engineer"; the motion utilities are CSS only, animate `transform` only for entrances (no opacity animation from zero), and are removed under reduced motion; the existing header scroll spy (`src/components/layout/useHeaderState.ts`, which uses `IntersectionObserver`) is not modified; step 4.1 adds no new `IntersectionObserver` or scroll-listener code for scroll-triggered animation, reveal effects or hidden section states, and no section has a hidden starting state; the page is fully visible with JavaScript disabled; the site URL comes from configuration and no domain is hardcoded; **the role/title correction has its regression test in this step, not later:** a focused Vitest assertion checks that the home page title content reads exactly "Kishor Kumar · Aspiring AI/ML Engineer" and that the role content reads "Aspiring AI/ML Engineer", and it fails if the old "AI/ML Engineer"-only wording returns (an owner-directed exception to "no Vitest for unrelated application logic", D30, limited to this one regression test); the browser-level page-title assertion in 4.6 is additional coverage and does not replace it; **settings:** `.claude/settings.json` is left unchanged by default; the step inspects its current permission configuration (today it allows `npm run test:*` but not `npm test`) and presents the smallest necessary update for `npm test` as a proposal in the step report, and the file is changed only after the owner explicitly approves that proposal; the D33 proposals for `.claude/rules/testing.md` and for `CLAUDE.md` §9 are written as two separate documents in the step report for owner review, preserve the existing standards, and neither file is modified before approval |
| **4.2** Hero + illustration | New hero content (§20.3), signature illustration, hero entrance | D22 text matches exactly; eyebrow reads "Aspiring AI/ML Engineer"; exactly one `h1`; "Get in touch" links to `#contact`; no resume CTA or link exists; hero content fits above the fold at 1280×720 and 375×667; the SVG has `role="img"`, `<title>`, `<desc>` and a visible "Illustration" caption; no horizontal scroll from 320 to 2560px; CLS < 0.1; hero entrance ≤ 800ms, CSS only and transform only (no opacity animation from zero), with the `h1` not animated; all hero text and the illustration are visible from the first paint; with reduced motion there is no movement and the final state shows at once; manual keyboard and code review finds no accessibility issue (automated axe checks start in 4.6); the illustration component (`NeuralFigure`) has its Vitest component test **in this step (D32)**: it finds the figure by role and accessible name, checks the description and the visible "Illustration" caption, and checks that the description says one path is highlighted; the browser tests added in 4.6 are additional and do not replace it |
| **4.3** Sections | About, Skills, Education, Contact treatments (§20.3) | Section order, ids and headings unchanged; Skills columns match §12.1; the email is visible text with a working `mailto:` without JavaScript; the copy-email control has its Vitest component test **in this step (D32)**, covering a successful copy, a failed copy, the announcement and keyboard activation, using role or label queries and `user-event`; no hover lift on non-interactive items; no scroll reveals or hidden starting states; manual keyboard and code review finds no accessibility issue (axe starts in 4.6); contrast table for new pairs recorded |
| **4.4** Footer | Footer component | Exactly one `contentinfo` landmark; email, GitHub, LinkedIn (icon + text), "Back to top" and copyright present; nav links only for visible sections; external links carry `rel="noopener noreferrer"`; targets ≥ 44px (never below 24px); manual keyboard and code review finds no accessibility issue (axe starts in 4.6); the Footer has its Vitest component test **in this step (D32)**: it finds the `contentinfo` landmark by role, checks that the email, GitHub, LinkedIn and "Back to top" links exist by name with the right `href` and `rel`, and that the navigation links match the visible sections; the browser tests added in 4.6 are additional and do not replace it |
| **4.5** Metadata and SEO | Title/description, Open Graph and Twitter tags, generated 1200×630 share image, icons and manifest, robots, sitemap, JSON-LD, 404 page | Home title is "Kishor Kumar · Aspiring AI/ML Engineer"; description 140–160 characters; share image is 1200×630; JSON-LD parses as valid JSON with `<` escaped and contains no invented data; a preview deployment returns `noindex` and a production build does not (tested by simulating both environments); canonical, sitemap and Open Graph `url` appear only when a site URL is configured; a search of the source finds no hardcoded production domain; the 404 page returns status 404; the JSON-LD serialization (whether a React component or a helper) has a Vitest test in this step covering valid JSON output and the escaping of `<`, U+2028 and U+2029 (a genuine safety need, D25); any other React component added in this step has its component test in this step (D32); the 404 route's browser-level test is written in 4.6, as the owner decided (D32) |
| **4.6** Security headers + CI + browser tests + screenshots (D29, D30) | Headers in `next.config.ts` (§16.7); GitHub Actions workflow with a quality job and a browser-test job; Playwright and `@axe-core/playwright` as dev dependencies with a Playwright config, an end-to-end test folder and an npm script for the browser tests (separate from `npm test`, which runs Vitest only); the D29 tests; additional end-to-end checks for the illustration and the footer, and the required browser-level test for the 404 route (§20.7), which add to and do not replace the component tests (D32); screenshots at the nine §18.3 widths for both pages (D34); proposed Playwright and axe updates to `.claude/rules/testing.md` and `CLAUDE.md` §9 (D33, presented separately, not applied) | **Security:** all headers in §16.7 present on the production build; the CSP is tested on `/` and the 404 page with zero console violations; any `unsafe-*` source is documented in §16.7 and approved before enforcement. **Workflow:** the quality job runs the four gate commands, `npm test` and `npm audit --omit=dev --audit-level=high`; the browser-test job builds the site and runs the browser tests against the production server; permissions are `contents: read` and action versions are pinned. **Chromium (D34) is installed and run only inside the CI job**; no `package.json` script or install hook downloads a browser, and `npm test` and the gate commands need none (Vitest uses `jsdom`). Exact versions of Playwright and `@axe-core/playwright` are pinned and recorded in §19.5. **Tests (the first six are the D29 minimum):** (1) the homepage loads with exactly one `h1` and the skip link moves focus to `main`; (2) at a mobile width the menu opens, closes with Escape and returns focus to the menu button; (3) anchor navigation reaches the target section; (4) every `target="_blank"` link has `rel` containing `noopener` and `noreferrer`; (5) an unknown URL returns HTTP 404; (6) axe finds 0 violations (WCAG 2.2 A and AA rule tags) on the homepage, on the 404 page, and on the homepage with the mobile menu open; (7) the homepage `<title>` is "Kishor Kumar · Aspiring AI/ML Engineer" (additional browser-level coverage; the immediate regression test is the Vitest assertion written in step 4.1); (8) end-to-end checks for the illustration (visible on load with its caption), the footer (its links and "Back to top" work) and the 404 route (HTTP 404 and a link home, which is the 404 route's required browser-level test, D32); these add to the component tests already written in 4.2 and 4.4. The axe test visits **every page route in the production build** (`/` and the 404 page; the route list is checked in 4.7). Tests query by role, label or text, not by class or test id when avoidable, and contain no snapshot of a large DOM tree. **Screenshots (D30):** full-page captures of every page route (`/` and the 404 page) at 320, 375, 414, 768, 1024, 1280, 1440, 1920 and 2560px wide (18 images) on the production build, uploaded as a workflow artifact **even when a test fails**, with **14-day retention** (D34). An automated check at every one of the 18 page/viewport combinations fails the run if the page has horizontal overflow (document width larger than the viewport). The images are for human visual inspection; **no screenshot baselines are committed** and no image comparison is run (D34). The first CI run is green with all of the above. `.claude/rules/testing.md` and `CLAUDE.md` are **not** edited in this step; the Playwright and axe updates are written as separate proposals (D33), preserve the existing standards, and are applied only after owner review (§20.5) |
| **4.7** Verification | Run `responsive-testing`, `design-review`, accessibility, performance and code reviews, and `pre-deployment-audit`; record results | No horizontal scroll at 320, 375, 414, 768, 1024, 1280, 1440, 1920 and 2560px; Lighthouse on the production build, mobile: Performance ≥ 90, Accessibility ≥ 95; LCP < 2.5s and CLS < 0.1; first-load JavaScript for `/` < 150KB gzipped (measured and stated); the CI browser-test run on the final commit is green, and its results (the D29 minimum plus the additional tests of step 4.6, including axe on `/`, the 404 page and the open menu) are recorded with the CI run identifier; the Vitest results (`npm test`, including the component test of every new component, each in the step that introduced it) and the screenshot artifact (its name, the run it belongs to, and the 18 images: `/` and the 404 page at nine widths, with the horizontal-overflow check results) are recorded as well; every row of the §20.7 coverage tables is shown as met, or listed as an open issue for the owner; the axe route list is compared with the route list of the production build; a validation record is added in §19.6 style, listing what was **not** tested (for example NVDA, VoiceOver, real browser zoom); the owner approves the result |

### 20.5 Unresolved items (not decided in v0.13)
- **OD-11 production domain:** still open. How canonical, sitemap and Open Graph URLs behave before a domain exists is proposed in step 4.5 and approved then.
- **OD-16 resume PDF:** still open; no resume CTA, Resume button or route until a PDF exists.
- **OD-7** availability line, **OD-8** photo, **OD-6** logo ("KK" is a proposal only), **OD-12** analytics, and **OD-4** status colors: unchanged.
- **Final CSP directives:** decided by testing in step 4.6 (§16.7).
- **Remaining details of the browser tests and screenshots (step 4.6):** the folder and script names, and the screenshot viewport heights. The browser (Chromium), the 18 screenshots, the overflow checks, the 14-day artifact retention and the no-baseline rule are settled by D34. OD-17 is resolved by D29.
- **Testing standards (resolved by D30–D34, mapped in §20.7):** `.claude/rules/testing.md` is unchanged and in force; the Testing Library stack is approved (D31, OD-18 resolved); each new component's test arrives in its own step (D32); nine-width screenshots are in 4.6 (D34).
- **Exact versions of the six D31 packages (decided in step 4.1):** chosen as mutually compatible at installation, checked with `npm ls`, and recorded in §19.5. If no compatible set exists, the owner is told before the list changes.
- **Rule-file and `CLAUDE.md` updates (D33; proposals pending, nothing applied):** the last bullet of `testing.md` says that when Vitest (and later Playwright and axe) are introduced, `npm test` and those suites become required merge checks "and this rule is updated". Its "Vitest is not installed yet" and "Required checks (current)" wording will be out of date after step 4.1, and `CLAUDE.md` §9 (commands) will be too. Four separate proposals are prepared for review, none applied until approved: `testing.md` and `CLAUDE.md` §9 for Vitest and `npm test` at step 4.1, and `testing.md` and `CLAUDE.md` §9 for Playwright and axe at step 4.6. Each preserves the existing standards. **Rule in the meantime:** the existing rule files stay as they are, and the stricter gate in §20.4 governs; every Milestone 4 request for commit approval reports `npm test` (from 4.1) and the CI results (from 4.6). **Permissions for `npm test`:** `.claude/settings.json` is unchanged. Its allowlist today contains `npm run test:*` but not `npm test`, so `npm test` may prompt for permission. In step 4.1 the current permission configuration is inspected and the smallest necessary update is proposed in the step report; the file is changed only after the owner explicitly approves the proposal.
- **Share-image design** and the exact §20.3 details (credential line, footer wording, section treatments): confirmed when the step that builds them is reviewed.
- **Existing code that will change in later steps** (not edited in 4.0): the role wording in `src/content/site.ts` still reads "AI/ML Engineer" (corrected in step 4.1), and the hero code comment still says "no buttons yet" (corrected in 4.2).

### 20.6 Conflicts and how they are resolved
| Conflict | Resolution |
|----------|------------|
| §2.5 and §11.4 ban neural-network art and backgrounds, versus the requested illustration | D21: one labeled foreground illustration only; the bans otherwise stand |
| §5.4 no glow, §11.1 and §11.4 no looping or pulsing | The illustration uses flat fills and a one-time reveal |
| OD-14 draft wording versus D12 (no overclaiming) | D22 replaces the draft |
| §9.1 / D18 CTA fallback assumes a resume exists | D23: "Get in touch" is the primary CTA; no resume CTA |
| D8 names Motion; Milestone 4 wants no extra dependencies | D24: CSS-only for Milestone 4; D8 not revoked; sliding nav indicator not built |
| `security.md` discourages `dangerouslySetInnerHTML`; static Next.js pages often need inline scripts | D25: one JSON-LD exception with safe serialization; CSP without default `unsafe-*`, tested before enforcement |
| §14 requires `noindex` on previews, but production must stay indexable, and no domain exists | D26: `noindex` only for positively identified previews; no invented domain |
| §9.1 eyebrow and §14 title say "AI/ML Engineer" | D27: "Aspiring AI/ML Engineer" everywhere |
| §11.3 animates the hero name, §11.6 prefers no animation on the LCP element | `h1` not animated (§11.7); consistent with §11.6 |
| Spotlight and cursor-follow effects common on portfolio sites | Not used (§11.4) |
| v0.13 §11.7 and §20.3 added an `IntersectionObserver` helper and scroll-triggered section reveals, which contradicted CSS-only animation (D24) and "content visible immediately" | Resolved in v0.14 (no scroll reveals, no hidden starting states; §11.3 "Section content" row not built) and refined in v0.15: `IntersectionObserver` is **not** banned. The existing header scroll spy is unchanged; only new `IntersectionObserver` or scroll-listener code for scroll-triggered animation, reveal effects or hidden section states is prohibited |
| v0.14 allowed a fade + rise on the hero, but an opacity animation from zero conflicts with "content visible immediately" | Resolved in v0.15: the hero entrance is transform-only (`translateY`), with no opacity animation from zero; the `h1` is not animated; the illustration is visible immediately |
| D21 says the illustration is "revealed once" | Clarified in §11.7: "revealed once" means a one-time, transform-only entrance, never a fade from zero and never a loop. The text of D21 is unchanged |
| `.claude/rules/testing.md` asks for axe on every page, screenshots at nine widths and a test for every new component; D29 defines a smaller, selective set for Milestone 4 | v0.15: D29 is the *minimum* automated browser and accessibility coverage, not permission to weaken `.claude/rules/testing.md`; the rule file is unchanged. **Resolved in v0.16 by D30:** nine-width screenshots in CI (4.6), Vitest from 4.1 for components that need it, every `testing.md` requirement mapped in §20.7. Any rule-file or `CLAUDE.md` change is presented separately for review |
| D29 says no Vitest unless a genuine need arises, but `testing.md` requires a test for every new component and the shared `Button` has interaction states | v0.16 (D30): Vitest is set up in 4.1 for `Button` and components that genuinely need it, and static components were left to browser tests in 4.6. **Superseded in v0.17 by D32:** every new React component gets its component test in the step that introduces it (`Button` 4.1, `NeuralFigure` 4.2, copy-email control 4.3, Footer 4.4); the 404 route's browser-level test is in 4.6 by the owner's decision; Playwright tests are additional and never replace a required component test. Vitest is still not used for unrelated application logic |
| The last bullet of `testing.md` ("Vitest is not installed yet", "this rule is updated") becomes out of date once Vitest is installed, but rule files may not be edited in a spec step | The rule files are left unchanged. Updates are prepared as separate proposals at 4.1 and 4.6 and applied only after owner review (D33, §20.5). Until approved, the existing rule files and this spec's stricter gates (§20.4) apply together, so nothing is weakened and the gate to follow is stated |
| D30 allowed the CI browser, screenshot retention and baseline policy to remain open | Settled in v0.17 by D34: Chromium, 18 screenshots, automated overflow checks, upload on failure, 14-day retention, no committed baselines |
| `testing.md` lists Testing Library as optional and not yet approved | Settled in v0.17 by D31: the six-package stack is approved; `testing.md` line 4 (role/label queries) still governs how tests are written |
| v0.17 left the regression test for the corrected "Aspiring AI/ML Engineer" wording to the browser tests in 4.6, while `testing.md` line 11 says bug fixes include a regression test and Vitest exists from 4.1 | Resolved in v0.18: a focused Vitest assertion is written in step 4.1 itself (an owner-directed exception to "no Vitest for unrelated application logic", limited to this one test); the 4.6 browser assertion is additional coverage |
| `npm test` is a required gate from 4.1, but `.claude/settings.json` does not allow it | Resolved in v0.18 without changing the file: step 4.1 inspects the permission configuration and proposes the smallest necessary update; no change without the owner's explicit approval |

No conflict with D16 (dark only), D17 (email only), D18 (no Projects section until real projects exist) or D19 (TypeScript content files).

### 20.7 Coverage of `.claude/rules/testing.md` (D30)
The rule file was read line by line at v0.16, re-checked at v0.17, and is **unchanged**. The table maps each of its requirements (by line) to where this plan meets it.

| `testing.md` line and requirement | How it is met | Where |
|---|---|---|
| 3. Tools are introduced gradually; each rule applies once its tool is set up; all must pass before release (§18) | Vitest and its rules apply from step 4.1; Playwright and axe rules from step 4.6; lint, format, type-check and build already apply. All must pass before release | §20.4, §18.7, step 4.7 |
| 4. Unit/component tests use Vitest; Testing Library is optional and not yet approved; query by role or label | Vitest from 4.1; every new React component gets a component test in its own step (D32). Testing Library is approved (D31). Queries use accessible role/name or label wherever practical | D30, D31, D32; steps 4.1 to 4.5 |
| 5. E2E with Playwright for critical flows: navigation, external links | D29 tests (1) skip link, (2) mobile menu, (3) anchor navigation, (4) external-link `rel`, (5) HTTP 404 | Step 4.6 |
| 6. Contact-form tests only if a contact form is approved (conditional) | **Not applicable:** there is no contact form (D17, no OD-10 change). The copy-email control is not a form and gets a component test | Step 4.3 |
| 7. `@axe-core/playwright` on every page in E2E | Test (6): axe on `/`, the 404 page and the open mobile menu. The route list covers **every page route** of the production build and is compared with the build's routes in 4.7 | Steps 4.6, 4.7 |
| 8. Playwright screenshots at 320, 375, 414, 768, 1024, 1280, 1440, 1920, 2560 | D30: full-page screenshots of every page route at all nine widths (18 images) uploaded as a CI artifact even on failure, 14-day retention, an automated horizontal-overflow check at every viewport, human inspection, no committed baselines (D34) | Step 4.6; artifact recorded in 4.7 |
| 9. Test behavior, not implementation; no snapshot tests of large DOM trees | Role, label or text queries; assertions on behavior and accessible names; no DOM-tree snapshot assertions. Screenshots are image artifacts for review, not DOM snapshots | Steps 4.1, 4.3, 4.6 |
| 10. New components ship with at least one test covering rendering and key interaction | Every new React component has its Vitest component test **in the step that introduces it** (D32); the 404 route's browser-level test is in 4.6; Playwright tests add coverage and do not replace component tests | Table below; §20.4 common gate |
| 11. Bug fixes include a regression test | Any bug fixed during Milestone 4 gets a regression test in the same step (Vitest) or in 4.6 (browser behavior). The step 4.1 role/title correction has its Vitest regression assertion in 4.1 itself (v0.18), and test (7) in 4.6 is additional browser-level coverage | Steps 4.1, 4.6 |
| 12. Required checks before merge: lint, type-check, format, build | Unchanged; run at every step and in CI | §20.4 common gate, step 4.6 |
| 13. When Vitest (and later Playwright and axe) are introduced, `npm test` and those suites become required merge checks, and the rule is updated | `npm test` is in the gate from 4.1; the Playwright, axe and screenshot suites are required CI checks from 4.6. The rule-file updates are prepared as **separate proposals** (D33) at 4.1 (Vitest, `npm test`) and 4.6 (Playwright, axe), reviewed before application, and not made here | §20.4, §20.5 |

**New components and their tests (D32).** Every new React component has its Vitest component test **in the same step that introduces it**. Tests check user-observable behavior, query by accessible role/name or label wherever practical, and use no large DOM snapshots or implementation-detail checks. Browser tests in 4.6 are additional and never replace a component test.

| New component | Step | Component test (same step) | Additional browser coverage (4.6) |
|---|---|---|---|
| `Button` (shared primitive) | 4.1 | Vitest: which element it renders, click handling, disabled state does not fire | Used by the hero and Contact, so covered by the homepage, anchor and axe tests |
| Illustration (`NeuralFigure`) | 4.2 | Vitest: found by role and accessible name; description and visible "Illustration" caption present; the description says one path is highlighted | Visible on load with its caption; axe; screenshots |
| Copy-email control | 4.3 | Vitest with `user-event`: successful copy, failed copy, announcement, keyboard activation | Email stays visible text with a working `mailto:`; axe |
| Footer | 4.4 | Vitest: `contentinfo` landmark by role; email, GitHub, LinkedIn and "Back to top" links by name with the right `href` and `rel`; navigation links match the visible sections | Links and "Back to top" work in the browser; external-link `rel` (D29 test 4); axe |
| JSON-LD serialization (component or helper) | 4.5 | Vitest: valid JSON; `<`, U+2028 and U+2029 escaped (genuine safety need, D25) | Page `<title>` and metadata checks where observable |
| 404 route | 4.5 | By the owner's decision (D32) its test is browser-level and written in 4.6 | Required in 4.6: HTTP 404, a link home, axe, screenshots |
| Any further new React component | When created | Vitest in the step that creates it, recorded in the step report | Added to the 4.6 browser tests where it affects a page |

The `Button`, `NeuralFigure`, copy-email and Footer tests are therefore never deferred: a step is not complete without them (§20.4 common gate).

Existing sections that are changed but not new (Hero, About, Skills, Education, Contact) are covered by the homepage, anchor-navigation, axe and screenshot tests, plus the component tests of the new components they contain.
