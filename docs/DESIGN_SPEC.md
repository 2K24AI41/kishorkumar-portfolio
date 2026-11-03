# Design Specification: Kishor Kumar AI/ML Engineering Portfolio

> **This document is the design source of truth** (see `CLAUDE.md` §3). If code, rules, agent output, or other documentation conflict with it, this document wins. Changes require the owner's approval and are recorded in [§19](#19-design-decisions-and-change-log).

| Field | Value |
|-------|-------|
| Owner | Kishor Kumar |
| Version | 0.12 |
| Document status | **Draft.** Approved decisions D1–D20 are binding. Everything marked *Proposed* needs owner approval. |
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

**Positioning statement (Proposed):**
> "I build and evaluate machine learning systems across computer vision, NLP, and applied AI, with a focus on clear problem framing and honest results."

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

### 2.5 Explicitly avoided
- Generic AI-generated portfolio templates and layouts.
- Excessive gradients, glows, neon, and glassmorphism.
- Unnecessary or decorative-only animation.
- Fake terminal interfaces or typing-effect command prompts.
- Skill percentage bars, star ratings, or proficiency meters.
- Fake statistics, achievements, clients, or testimonials.
- Unverified project results.
- Stock "AI" imagery (glowing brains, robots, abstract neural-network art).

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
- **Right (desktop):** About · Skills · Projects · Experience · Education · Learning · Contact, then a **Resume** button (secondary style, opens a PDF in a new tab with an external indicator).
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
- **Content:** eyebrow label (mono: "AI/ML Engineer"), name (`h1`, display size), positioning statement (§2.1), focus chips (ML · DL · Computer Vision · NLP · Applied AI), CTAs.
- **CTAs:** *View projects* (primary) → `#projects`, shown only when at least one project is published (otherwise *Download resume* becomes primary); *Download resume* (secondary); icon links to GitHub and LinkedIn.
- **Optional:** availability line (e.g. "Open to internships / entry-level roles"): **Open (OD-7)**; include only if true.
- **Visual:** blueprint grid background (§2.4). Optional professional photo: **Open (OD-8)**.
- **Layout:** left-aligned text on all viewports. On desktop, an optional right column for the photo or a real project visual.
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

**Approved:** balanced and purposeful animation (D3), implemented with Motion (D8).

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
| Hero | One-time entrance: fade + 12px rise, staggered (eyebrow → name → tagline → CTAs), total ≤ 800ms |
| Section content | Fade + 16px rise when 15% in view, **once** per element |
| Project cards | Staggered reveal; hover lift 2px plus a surface/border change |
| Mobile menu | Panel slides/fades in (`base`); links stagger lightly |
| Nav active indicator | Underline slides between items (shared layout animation) |
| Page transitions | Simple fade (≤ 200ms) between home and case studies; **Proposed** |

### 11.4 Not allowed
Parallax, scroll-jacking, cursor-follow effects, particle or neural-net backgrounds, typing effects, auto-playing video/carousels, continuous glow/pulse, counters animating up to (fake or real) numbers.

### 11.5 Reduced motion
- Respect `prefers-reduced-motion: reduce` globally (Motion's reduced-motion configuration set to follow the user setting).
- Under reduced motion: no transforms, no reveals (content shows immediately), no smooth scrolling; opacity/color transitions ≤ 150ms are allowed.

### 11.6 Performance
- Use Motion's lazy feature loading and lightweight components to keep the animation bundle small.
- Animations must not cause layout shift or block interaction. Hero entrance must not delay LCP (the LCP element renders visible immediately or animates from opacity ≥ 0.01 only if measured to be safe; prefer no animation on the LCP element).

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
| Titles | Home: "Kishor Kumar · AI/ML Engineer". Case studies: "{Project} · Kishor Kumar". Template-based, unique per page |
| Descriptions | 140–160 characters, unique per page, written from real content |
| Canonical URLs | Set on every page; production domain **Open (OD-11)** |
| Open Graph / Twitter | Title, description, URL, and a 1200×630 image per page (generated or designed, matching the dark brand) |
| Structured data | JSON-LD `Person` on home (name, jobTitle, url, sameAs: GitHub/LinkedIn). `CreativeWork`/`SoftwareSourceCode` on case studies |
| Sitemap / robots | Generated `sitemap.xml` and `robots.txt` via App Router metadata files |
| Icons | Favicon, Apple touch icon, web app manifest |
| Headings and semantics | As in §13.1; descriptive link text |
| Performance | Core Web Vitals targets in §15 (they affect ranking) |
| Indexing | Preview deployments on Vercel are `noindex` |

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
- Motion: use lazy-loaded features and lightweight motion components; never animate in Server Components.
- Lucide: per-icon imports only (no full icon set).
- Third-party scripts: none by default. Any analytics (OD-12) loads after interaction/idle and must be privacy-friendly.
- Use the bundle analyzer before each release; reject dependencies that add > 20KB gzipped without a strong reason.

### 15.6 Delivery
- Vercel (D10) edge caching for static assets; immutable caching for hashed files.
- Resume PDF compressed (< 500KB).
- Monitor Core Web Vitals in production (Vercel Speed Insights): **Open (OD-12)**.

---

## 16. Technical Architecture

**Approved stack:** Next.js (D4) · TypeScript (D5) · App Router (D6) · Tailwind CSS (D7) · Motion (D8) · Lucide React (D9) · Vercel (D10) · npm package manager (D13).
Exact package versions are pinned at initialization (npm records them in `package-lock.json`) and recorded in §19.

### 16.1 Routes
| Route | Content | Rendering |
|-------|---------|-----------|
| `/` | Home with all sections | Static |
| `/projects/[slug]` | Case study per project | Static (pre-generated) |
| `/resume.pdf` | Resume file (static asset) | Static |
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
**Approved (D20):** ESLint (Next.js config), Prettier, Vitest, Playwright and axe, alongside TypeScript `strict` (D5). Tools are introduced gradually as development progresses; each is required once it is set up, and all must pass before release (§18). Testing Library (for Vitest component tests): **Proposed**.
Commands are documented in `CLAUDE.md` once the project is initialized.

### 16.6 Deployment
- Vercel with preview deployments per branch and production on the main branch.
- Security headers (CSP, HSTS, etc.) per `.claude/rules/security.md`.
- Environment variables only if needed; none are needed for contact in v1 (email only, D17). Never exposed to the client unless non-sensitive.

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

A release is complete only when every item below passes.

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
| OD-14 | Positioning statement wording | §2.1 | As drafted |
### 19.3a Resolved decisions
| ID | Decision needed | Resolution | Date |
|----|-----------------|------------|------|
| OD-1 | Approve the palette values, including the added `accent-strong`, `accent-strong-hover`, `on-accent`, and `border-strong` tokens | **Resolved by D14.** Palette approved as specified; contrast validation (§5.5) still required before implementation | 2026-11-02 |
| OD-2 | Typefaces | **Resolved by D15.** Geist Sans + Geist Mono | 2026-11-02 |
| OD-3 | Light theme | **Resolved by D16.** Dark only for v1; no theme toggle | 2026-11-02 |
| OD-15 | Exact package manager and versions | **Resolved by D13.** npm. Exact versions are pinned at initialization and recorded in §19 | 2026-11-02 |
| OD-10 | Contact form vs. email only | **Resolved by D17.** Email only for v1; no contact form, backend or API route | 2026-11-02 |
| OD-13 | MDX for case study content | **Resolved by D19.** TypeScript data files for all v1 content; no MDX in v1 | 2026-11-02 |

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

Not installed yet: Motion (D8), Vitest, Playwright and axe (D20). Their versions are recorded here when they are added.

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
