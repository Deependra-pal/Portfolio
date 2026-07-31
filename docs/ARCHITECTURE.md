# Probey Services — Frontend Architecture

> Production architecture for the Probey Services portfolio rebuild.
> **Stack:** React 19 · Vite · Tailwind CSS v4 · React Router DOM · GSAP · Cloudinary.
> This document defines *structure*. The visual language lives in [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md).

---

## 1. Guiding principles

1. **One design system, five pages.** Every screen composes the same primitives. No page invents its own button, card, or spacing.
2. **Primitives → composites → sections → pages.** Data flows down this hierarchy only. A section never reaches around a primitive.
3. **Content is data, not markup.** All copy, services, offices, and contact details come from `src/data/*`. Components render data; they don't hardcode it.
4. **Dumb components, smart data.** UI components are presentational and reusable. Business logic and content shaping happen in `data/` and `hooks/`.
5. **Mobile-first, always responsive.** Every component ships responsive from line one. No desktop-only layouts.
6. **Motion is a layer, not a dependency.** Components render and are usable with zero animation. GSAP enhances; it never gates.
7. **Accessibility is not optional.** Semantic HTML, focus-visible states, `prefers-reduced-motion`, and color contrast are acceptance criteria.

---

## 2. Folder structure

```
Portfolio/
├─ docs/
│  ├─ ARCHITECTURE.md          # this file
│  └─ DESIGN_SYSTEM.md         # tokens, type, color, components spec
├─ index.html
├─ public/
│  ├─ favicon.svg
│  └─ fonts/                   # self-hosted variable fonts (perf)
├─ src/
│  ├─ main.jsx                 # React root + Router provider
│  ├─ App.jsx                  # Route table + PageShell
│  ├─ index.css                # @import "tailwindcss" + design tokens + base
│  │
│  ├─ styles/
│  │  ├─ theme.css             # @theme block — ALL design tokens
│  │  └─ base.css              # element resets, selection, scrollbar, focus
│  │
│  ├─ lib/
│  │  ├─ cn.js                 # className merge helper
│  │  ├─ cloudinary.js         # URL builder for images/video
│  │  └─ constants.js          # breakpoints, routes, z-index scale (JS mirror)
│  │
│  ├─ hooks/
│  │  ├─ useScrollReveal.js    # GSAP ScrollTrigger reveal (reduced-motion aware)
│  │  ├─ useMediaQuery.js      # responsive logic in JS
│  │  ├─ useLockBodyScroll.js  # mobile nav / modal
│  │  ├─ useScrolled.js        # navbar elevation on scroll
│  │  └─ useReducedMotion.js   # single source of truth for motion gating
│  │
│  ├─ data/
│  │  ├─ company.js            # brand, mission, approach  (EXISTS)
│  │  ├─ services.js           # service groups + detail pages
│  │  ├─ offices.js            # locations  (split out of company.js)
│  │  ├─ navigation.js         # nav + footer link maps
│  │  ├─ process.js            # "how we work" steps
│  │  └─ seo.js                # per-route <title>/meta
│  │
│  ├─ components/
│  │  ├─ ui/                   # PRIMITIVES — zero business logic
│  │  │  ├─ Container.jsx
│  │  │  ├─ Section.jsx
│  │  │  ├─ SectionHeading.jsx
│  │  │  ├─ Eyebrow.jsx
│  │  │  ├─ Button.jsx
│  │  │  ├─ IconButton.jsx
│  │  │  ├─ Card.jsx
│  │  │  ├─ Badge.jsx
│  │  │  ├─ Tag.jsx
│  │  │  ├─ Icon.jsx
│  │  │  ├─ Link.jsx           # wraps RouterLink + external detection
│  │  │  ├─ Field.jsx          # label + control + error  (EXISTS)
│  │  │  ├─ Input.jsx
│  │  │  ├─ Textarea.jsx
│  │  │  ├─ Select.jsx
│  │  │  ├─ Divider.jsx
│  │  │  ├─ AspectRatio.jsx
│  │  │  ├─ Media.jsx          # Cloudinary <img>/<video> w/ lazy + blur-up
│  │  │  ├─ Avatar.jsx
│  │  │  └─ Spinner.jsx
│  │  │
│  │  ├─ motion/               # animation wrappers (GSAP)
│  │  │  ├─ Reveal.jsx         # fade/slide-in on scroll
│  │  │  ├─ Stagger.jsx        # staggers children reveals
│  │  │  ├─ Parallax.jsx
│  │  │  ├─ TextReveal.jsx     # line/word split heading reveal
│  │  │  └─ Counter.jsx        # animated stat number
│  │  │
│  │  ├─ layout/               # app frame
│  │  │  ├─ PageShell.jsx      # <Navbar/> + <main/> + <Footer/> + ScrollToTop
│  │  │  ├─ Navbar.jsx         # desktop nav + mobile drawer  (EXISTS)
│  │  │  ├─ MobileNav.jsx
│  │  │  ├─ Footer.jsx         # (EXISTS)
│  │  │  └─ ScrollToTop.jsx    # reset scroll on route change
│  │  │
│  │  ├─ common/               # COMPOSITES reused across pages
│  │  │  ├─ Hero.jsx           # configurable hero (variant per page)
│  │  │  ├─ CTASection.jsx     # closing "Let's work together" band
│  │  │  ├─ StatStrip.jsx      # metric row  (EXISTS as about/StatsStrip)
│  │  │  ├─ FeatureGrid.jsx    # grid of FeatureCards
│  │  │  ├─ FeatureCard.jsx    # icon + title + copy
│  │  │  ├─ ServiceCard.jsx    # service group card
│  │  │  ├─ ProcessSteps.jsx   # numbered/timeline steps
│  │  │  ├─ LogoCloud.jsx      # trust logos / tech stack marquee
│  │  │  ├─ Testimonial.jsx
│  │  │  ├─ FAQ.jsx            # accordion
│  │  │  └─ Marquee.jsx
│  │  │
│  │  ├─ home/                 # page-specific sections
│  │  ├─ about/                # (EXISTS: AboutHero, MissionVision, …)
│  │  ├─ web-development/
│  │  ├─ ios-development/
│  │  └─ contact/              # (EXISTS: ContactHero, ContactForm, …)
│  │
│  └─ pages/
│     ├─ Home.jsx
│     ├─ About.jsx             # (EXISTS)
│     ├─ WebDevelopment.jsx
│     ├─ IosDevelopment.jsx
│     ├─ Contact.jsx
│     └─ NotFound.jsx
```

### Directory contract

| Folder | May import from | May NOT import from | Business logic? |
|---|---|---|---|
| `ui/` | `lib/`, `ui/` | `common/`, `pages/`, `data/` | ❌ none |
| `motion/` | `lib/`, `hooks/` | `common/`, `pages/` | ❌ none |
| `layout/` | `ui/`, `data/navigation` | `pages/` | minimal |
| `common/` | `ui/`, `motion/`, `data/` | `pages/` | ❌ presentational only |
| `<page>/` sections | `ui/`, `motion/`, `common/`, `data/` | other pages' folders | data-shaping ok |
| `pages/` | everything | — | route composition |

> **Rule:** primitives never know what page they're on. If a `ui/` component needs page-specific values, they arrive as props.

---

## 3. Component architecture

Four tiers, strictly one-directional:

```
   data/ ──────────────┐
                       ▼
  PRIMITIVES  →  COMPOSITES  →  SECTIONS  →  PAGES
   (ui/)         (common/)      (home/…)    (pages/)
      ▲              ▲
   motion/ ──────────┘
```

- **Primitives (`ui/`):** the design system in code. Styleless of context, fully prop-driven, no data imports. Examples: `Button`, `Card`, `Section`, `Input`.
- **Composites (`common/`):** meaningful UI assembled from primitives, reused on ≥2 pages. Examples: `Hero`, `CTASection`, `FeatureGrid`.
- **Sections (`<page>/`):** a full page band wired to real `data/`. Named `<Page><Block>` (e.g. `HomeHero`, `AboutMission`). Own one screen region.
- **Pages (`pages/`):** compose sections in order, set SEO, own no styling beyond layout order.

### Component authoring rules
- One component per file, default export, `PascalCase` filename === export name.
- Public API first: destructure props with defaults at the top; spread `...rest` onto the root node so consumers can pass `className`, `aria-*`, handlers.
- Merge classes through `cn()` — consumer `className` always wins/extends, never gets dropped.
- Polymorphic where useful via `as` prop (already in `Button`/`Card`).
- No inline hex/px for anything the token system covers — use Tailwind utilities backed by `@theme`.
- Variants live in a lookup map (`const variants = {…}`), never sprawling ternaries. (Current `Button.jsx` is the pattern to follow.)

---

## 4. Reusable component inventory

**Primitives (`ui/`)** — Container · Section · SectionHeading · Eyebrow · Button · IconButton · Card · Badge · Tag · Icon · Link · Field · Input · Textarea · Select · Divider · AspectRatio · Media · Avatar · Spinner.

**Motion (`motion/`)** — Reveal · Stagger · Parallax · TextReveal · Counter.

**Layout (`layout/`)** — PageShell · Navbar · MobileNav · Footer · ScrollToTop.

**Composites (`common/`)** — Hero · CTASection · StatStrip · FeatureGrid · FeatureCard · ServiceCard · ProcessSteps · LogoCloud · Testimonial · FAQ · Marquee.

> Target: every page is ~80% these shared parts + ~20% page-specific arrangement. If a page needs a *new* recurring pattern, it graduates into `common/`.

---

## 5. Routing

`react-router-dom` (v7). Single layout route wrapping all pages in `PageShell`.

```
/                     Home
/about                About
/web-development       WebDevelopment
/ios-development       IosDevelopment
/contact               Contact
*                      NotFound
```

- Routes centralized in `lib/constants.js` (`ROUTES`) so nav, footer, and the router share one source.
- `ScrollToTop` resets scroll on `pathname` change.
- Nav config in `data/navigation.js` drives both `Navbar` and `Footer`.

> Note: `data/company.js` currently lists a single `/services` nav link. The new IA splits services into two dedicated pages (`/web-development`, `/ios-development`); `navigation.js` will reflect that, with an optional "Services" dropdown grouping them.

---

## 6. Data & content layer

- **Single source of truth.** `data/*` holds all copy and structured content. No component hardcodes a service name, office, or phone number.
- **Preserve provenance.** Keep the existing `TODO:` markers in `company.js` — placeholders (mission, stats, social URLs) must be filled by the client, never fabricated.
- **Shape at the edge.** If a section needs derived data (grouping, ordering), do it in the data module or a selector, not in JSX.
- **SEO map.** `data/seo.js` exposes `{ title, description }` per route; pages set document metadata on mount.

---

## 7. Motion strategy (GSAP)

- Central registration of `ScrollTrigger` once in app bootstrap; components use the `motion/` wrappers, not raw GSAP, so behavior stays consistent.
- Every animation is **gated by `useReducedMotion()`** — reduced-motion users get the final state instantly, no transforms.
- Reveals use short, low-distance easing (fade + 12–20px rise). No bounce, no long durations — premium reads as *restrained*.
- Timelines are section-scoped and cleaned up on unmount (`gsap.context`).
- Hero and headings may use `TextReveal`; grids use `Stagger`; stats use `Counter`. Defined once, reused everywhere.

*(GSAP is wired but animations are authored in a later phase — components must look correct in their resting state first.)*

---

## 8. Performance & quality baseline

- **Fonts self-hosted** in `public/fonts` with `font-display: swap`; preload the two critical weights. No layout shift.
- **Cloudinary** for all media via `lib/cloudinary.js` — responsive `srcset`, `f_auto,q_auto`, lazy-loading, explicit `width`/`height` (via `AspectRatio`) to prevent CLS.
- **Code-split** pages with `React.lazy` + `Suspense` behind the shell.
- Images below the fold `loading="lazy"`; hero media eager + preloaded.
- Lighthouse targets: **Performance ≥ 90, Accessibility ≥ 95, Best Practices/SEO ≥ 95**.

---

## 9. Naming conventions

| Thing | Convention | Example |
|---|---|---|
| Component file & export | `PascalCase`, matching | `ServiceCard.jsx` → `ServiceCard` |
| Page section | `<Page><Block>` | `HomeHero`, `AboutMission` |
| Hook | `useCamelCase.js` | `useScrollReveal.js` |
| Data / lib module | `camelCase.js` | `company.js`, `cloudinary.js` |
| Boolean prop | plain adjective or `is*` | `interactive`, `isLoading` |
| Variant prop | noun, string-union in a map | `variant="primary"`, `size="lg"` |
| Design token | semantic, kebab in CSS var | `--color-surface`, `--radius-card` |
| Tailwind custom utility | generated from token name | `bg-brand-600`, `rounded-card`, `shadow-elevated` |
| Route constant | `SCREAMING_SNAKE` in `ROUTES` | `ROUTES.WEB_DEV` |
| Event handler prop | `on*` | `onSubmit`, `onClose` |

---

## 10. Dependencies to add

Current `package.json` has React 19, Vite, Tailwind v4 only. This architecture also requires:

```bash
npm i react-router-dom gsap
```

Cloudinary needs no SDK for delivery — `lib/cloudinary.js` builds URLs directly. Fonts are self-hosted (no runtime dep).

---

## 11. Build order (recommended)

1. **Tokens** → drop `styles/theme.css` into `index.css`; wire fonts + base.
2. **Primitives** → `ui/` (Button, Card, Section, etc.) against the tokens.
3. **Layout** → `PageShell`, `Navbar`, `Footer`, routing.
4. **Composites** → `common/` (Hero, CTASection, FeatureGrid, …).
5. **Pages** → assemble sections page by page from real `data/`.
6. **Motion** → layer `motion/` wrappers onto finished, resting-state pages.
7. **Polish** → responsive audit, a11y pass, Lighthouse, content fill for `TODO`s.

> Do not start step 5 before steps 1–3 are stable — pages built on unstable primitives get rewritten.
