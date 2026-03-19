# CONVENTIONS.md — MyGig Website Design System
> **Purpose:** This is the single source of truth for all visual, typographic, layout, and interaction decisions. Every file, component, and section MUST reference this document. Never deviate from these tokens without explicit approval.

---

## 1. TECH STACK

| Layer | Tool | Version |
|-------|------|---------|
| Framework | Next.js (App Router) | 14+ |
| Styling | Tailwind CSS + CSS Variables | 3.4+ |
| Animation | Framer Motion | 11+ |
| UI Components | 21st.dev MCP (Magic UI) | Latest |
| Icons | Lucide React | Latest |
| Fonts | Self-hosted (local files) | — |
| Deployment | Vercel | — |

**Rules:**
- All styling through Tailwind utility classes + CSS custom properties
- No inline `style={}` except for dynamic values from Framer Motion
- Components are React Server Components by default; add `"use client"` only when needed for interactivity/animation
- All images use `next/image` with explicit `width`, `height`, and `alt`

---

## 2. COLOUR SYSTEM

### CSS Custom Properties (define in `globals.css` on `:root`)

```css
:root {
  /* === PRIMARY / BRAND === */
  --color-primary:        #0a0f16;   /* Near-black — buttons, navbar, footer, dark sections */
  --color-white:           #ffffff;
  
  /* === BRAND ACCENT (Purple) === */
  --color-accent:          #855EEE;   /* Brand Purple — from brand guidelines */
  --color-accent-vivid:    #6c60ff;   /* Vivid purple — interactive states, links */
  --color-lavender:        #DCD8FA;   /* Lavender — CTA cards, soft backgrounds, overlays */
  --color-lavender-mid:    #e8e6f9;   /* Deeper lavender — sparingly */
  
  /* === NEUTRALS === */
  --color-neutral-100:     #ffffff;   /* Page background */
  --color-neutral-200:     #f0f0f0;   /* Light grey backgrounds */
  --color-neutral-300:     #f0f0f5;   /* Card backgrounds, accordion items */
  --color-neutral-400:     #d5dadd;   /* Borders */
  --color-neutral-500:     #b8bec1;   /* Muted text */
  --color-neutral-600:     #969da0;   /* Footer link text */
  --color-neutral-700:     #696e72;   /* Secondary body text */
  --color-neutral-800:     #45494b;   /* Primary body text */
  --color-neutral-900:     #0a0f16;   /* Headings, primary text */
  
  /* === STATUS / SYSTEM === */
  --color-success:         #05c168;
  --color-success-bg:      #def2e6;
  --color-info:            #1d88fe;
  --color-info-bg:         #eaf4ff;
  --color-danger:          #ff5a65;
  --color-danger-bg:       #ffeff0;
  --color-warning:         #ff9e2c;
  --color-warning-bg:      #ffedd1;
  
  /* === SHADOWS === */
  --shadow-xs:   0 1px 2px rgba(20, 20, 43, 0.06);
  --shadow-sm:   0 2px 4px rgba(20, 20, 43, 0.08);
  --shadow-md:   0 4px 8px rgba(20, 20, 43, 0.12);
  --shadow-lg:   0 8px 16px rgba(20, 20, 43, 0.16);
  --shadow-xl:   0 12px 24px rgba(20, 20, 43, 0.20);
  --shadow-2xl:  0 16px 32px rgba(20, 20, 43, 0.24);
  --shadow-btn:  0 2px 4px rgba(10, 15, 22, 0.12);
}
```

### Tailwind Extension (in `tailwind.config.js`)

```js
theme: {
  extend: {
    colors: {
      primary:      'var(--color-primary)',
      accent:       'var(--color-accent)',
      'accent-vivid': 'var(--color-accent-vivid)',
      lavender:     'var(--color-lavender)',
      'lavender-mid': 'var(--color-lavender-mid)',
      neutral: {
        100: 'var(--color-neutral-100)',
        200: 'var(--color-neutral-200)',
        300: 'var(--color-neutral-300)',
        400: 'var(--color-neutral-400)',
        500: 'var(--color-neutral-500)',
        600: 'var(--color-neutral-600)',
        700: 'var(--color-neutral-700)',
        800: 'var(--color-neutral-800)',
        900: 'var(--color-neutral-900)',
      }
    }
  }
}
```

### Colour Usage Rules

- **NEVER use pure `#000000`** — always use `--color-primary` (#0a0f16) for blacks
- **Dark sections** use `bg-primary` with white text
- **Card backgrounds** alternate between `bg-neutral-300` (#f0f0f5) and `bg-lavender` (#DCD8FA)
- **Purple accents** are used sparingly — accent markers, hover states, decorative elements. Never as large background fills except for the lavender CTA card
- **Body text** is `text-neutral-800` (#45494b); secondary body is `text-neutral-700` (#696e72)
- **Headings** are always `text-neutral-900` (#0a0f16) on light backgrounds, `text-white` on dark

---

## 3. TYPOGRAPHY

### Font Stack

| Role | Font | Weights | Fallback |
|------|------|---------|----------|
| Display / Headings (H1, H2) | **Grenette Pro** | Light 300, Regular 400, Bold 700 | Georgia, serif |
| Body / UI / H3+ | **Onest** | Regular 400, Medium 500, Bold 700 | system-ui, sans-serif |

> **NOTE:** Brand guidelines specify Segoe UI for body text. The live site uses Onest. This build uses **Onest** to match the live site. If the brand guidelines are the intended source of truth, replace Onest references with Segoe UI.

### Font Loading

**Grenette Pro** — WOFF2 files are provided and ready to use. Copy to `/public/fonts/`:

```
public/fonts/GrenettePro-Light.woff2     (52KB — weight 300)
public/fonts/GrenettePro-Regular.woff2   (55KB — weight 400)
public/fonts/GrenettePro-Bold.woff2      (57KB — weight 700)
```

**Onest** — source `.woff2` files for Regular 400, Medium 500, Bold 700 and place in `/public/fonts/`. If not yet available, create placeholder files (they'll be replaced later).

Load all fonts via `@font-face` in `globals.css` with `font-display: swap`:

```css
/* Grenette Pro — Display / Headings */
@font-face {
  font-family: 'Grenette Pro';
  src: url('/fonts/GrenettePro-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Grenette Pro';
  src: url('/fonts/GrenettePro-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Grenette Pro';
  src: url('/fonts/GrenettePro-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Onest — Body / UI (add @font-face declarations for each weight) */
@font-face {
  font-family: 'Onest';
  src: url('/fonts/Onest-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Onest';
  src: url('/fonts/Onest-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Onest';
  src: url('/fonts/Onest-Bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

Register in Tailwind config:
- `fontFamily.display` → `['Grenette Pro', 'Georgia', 'serif']`
- `fontFamily.body` → `['Onest', 'system-ui', 'sans-serif']`

**Usage guidance for Grenette Pro weights:**
- **Bold 700** — H1, H2 headings (primary use)
- **Regular 400** — Large display text, pull quotes, decorative subheadings where a lighter serif feel is desired
- **Light 300** — Use sparingly: oversized decorative text, watermark-style numbers, background type treatments

### Type Scale

```
H1:     Grenette Pro Bold    | 66px / 77px (1.17)  | tracking: -0.02em  | color: neutral-900
H2:     Grenette Pro Bold    | 54px / 66px (1.22)  | tracking: -0.01em  | color: neutral-900
H3:     Onest Bold           | 28px / 40px (1.43)  | tracking: 0        | color: neutral-900
H4:     Onest Bold           | 22px / 32px (1.45)  | tracking: 0        | color: neutral-900
Body:   Onest Regular        | 18px / 30px (1.67)  | tracking: 0        | color: neutral-800
Body-sm: Onest Regular       | 16px / 26px (1.63)  | tracking: 0        | color: neutral-700
Nav:    Onest Regular        | 18px / 24px          | tracking: 0        | color: neutral-900
Button: Onest Bold           | 18px / 24px          | tracking: 0        | color: white/neutral-700
```

### Responsive Type Scale

```
H1:  66px → 48px → 36px  (desktop → tablet → mobile)
H2:  54px → 40px → 30px
H3:  28px → 24px → 22px
Body: 18px → 16px → 16px
```

### Alignment Rules

- Hero headings and subtitles: **center-aligned**
- Section headings: **center or left** depending on layout (left for split sections)
- Body text: **left-aligned** (never justify)
- Cards: **left-aligned** internally

---

## 4. BUTTON SYSTEM

### Primary Button

```
Background:    var(--color-primary)  (#0a0f16)
Text:          white
Font:          Onest Bold 18px
Padding:       26px vertical × 38px horizontal
Border:        1px solid var(--color-primary)
Border-radius: 8px
Icon:          Right arrow (→) — Lucide ArrowRight, 16px
Hover:         opacity: 0.9, translateY(-1px), shadow-btn
Transition:    all 200ms ease
```

### Secondary Button

```
Background:    transparent
Text:          var(--color-neutral-700) (#696e72)
Font:          Onest Regular 18px
Padding:       26px vertical × 38px horizontal
Border:        1px solid var(--color-neutral-700)
Border-radius: 8px
Hover:         bg-neutral-200, border-color neutral-800, text-neutral-900
Transition:    all 200ms ease
```

### Small / Header Button

```
Background:    var(--color-primary)
Text:          white
Font:          Onest Bold 16px
Padding:       18px vertical × 24px horizontal
Border-radius: 8px
Height:        72px, Width: 160px
```

### Button Pair Pattern

- Always displayed as a flex row — Primary (left) + Secondary (right)
- Row is centered within its container
- Gap: 16px
- On mobile: stack vertically, full-width

---

## 5. LAYOUT SYSTEM

### Container

```
Max-width:      1340px
Padding:        0 24px (horizontal)
Margin:         0 auto
```

### Inner Containers (for constraining text width)

```
Wide:    max-width: 914px   (hero headings)
Medium:  max-width: 648px   (hero subtitles, body text blocks)
Narrow:  max-width: 600px   (focused content)
```

### Section Spacing

```
Section padding:  80px vertical (desktop), 48px (tablet), 32px (mobile)
Between sections: 0 (sections are flush; visual separation via background color alternation)
```

### Grid & Flex Patterns

```
Gap-sm:    16px
Gap-md:    24px
Gap-lg:    32px
Gap-xl:    48px

Columns:   2-col (split content), 3-col (feature cards), 4-col (footer links)
Breakpoints: 1340px / 914px / 648px / 480px
```

---

## 6. BORDER & RADIUS

```
Default radius:    8px   — ALL components (buttons, cards, sections, images, accordions)
Announcement bar:  12px
Pill/badge:        9999px (full round)
```

**Rule:** Use `rounded-lg` (8px) on everything. No mixed radii.

---

## 7. SHADOW & DEPTH

- The overall aesthetic is **virtually flat**
- Depth is conveyed through **background color contrast** (alternating light/dark sections), not heavy shadows
- Shadows are reserved for: elevated cards on hover, dropdown menus, floating elements
- Shadow tokens use `#14142b` (not pure black) for warmth
- Button shadows are subtle: `--shadow-btn`

---

## 8. SECTION BACKGROUND PATTERN

Sections alternate between these backgrounds to create visual rhythm:

```
1. White          (#ffffff)        — Default
2. Light grey     (#f0f0f5)        — Card/content sections
3. Dark           (#0a0f16)        — CTA/impact sections (white text)
4. Lavender       (#DCD8FA)        — Feature CTA card
```

**Rule:** Never place two sections with the same background adjacent to each other.

---

## 9. ANIMATION SYSTEM (Framer Motion)

### Core Principles

- **Purposeful motion** — every animation communicates something (entrance, hierarchy, state change)
- **Scroll-triggered reveals** — sections animate in on scroll, not on page load
- **Stagger patterns** — child elements animate sequentially with 0.1–0.15s delay
- **Performance-first** — animate only `transform` and `opacity`; never animate `width`, `height`, `margin`

### Standard Variants

```tsx
// Fade up — default section entrance
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

// Stagger container
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

// Stagger child
const staggerChild = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

// Scale in — for cards, images
const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

// Slide from left/right — for split sections
const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};
```

### Scroll Trigger Pattern

```tsx
// Use whileInView for scroll-triggered animations
<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-100px" }}
>
```

### Hover Interactions

```tsx
// Card hover
whileHover={{ y: -4, transition: { duration: 0.2 } }}

// Button hover
whileHover={{ y: -2, opacity: 0.9 }}
whileTap={{ scale: 0.98 }}
```

### Easing

```
Default ease:  [0.22, 1, 0.36, 1]   (custom ease-out — smooth, not bouncy)
Quick ease:    [0.4, 0, 0.2, 1]     (for hover/tap states)
Spring:        { type: "spring", stiffness: 200, damping: 25 }  (for playful elements only)
```

### Performance Rules

- NEVER animate `layout` properties (width, height, padding, margin)
- ALWAYS use `will-change: transform` on frequently animated elements
- `viewport={{ once: true }}` — elements animate in once, not every scroll
- Reduce motion: wrap in `useReducedMotion()` check

---

## 10. 21st.dev MCP INTEGRATION

When using `21st_magic_component` via MCP:
- Request components that match the design system (dark/light variants)
- Override default styling with our CSS variables
- Preferred components: animated cards, hero sections, feature grids, testimonial carousels, FAQ accordions
- Always customise the colour scheme to match our tokens — never use default MCP component colours

---

## 11. IMAGE & ASSET GUIDELINES

### Photography Style

- High-quality, diverse Australian workers — warehousing, logistics, construction, retail
- Warm colour grading (golden-hour tones, earth tones)
- Portrait orientation for hero gallery (3:7 aspect ratio)
- Square for testimonial avatars (1:1)
- Environmental/wide shots for section backgrounds

### Image Containers

```
Border-radius: 8px (always)
Aspect ratios: 3:7 (portrait gallery), 16:9 (section backgrounds), 1:1 (avatars)
```

### Logo Assets

The MyGig logo uses a distinctive handwritten-script "My" paired with a bold geometric "Gig" and an ® symbol. The "My" portion has a brushstroke/hand-drawn texture. **Never attempt to recreate the logo with fonts — always use the provided asset files.**

**Available files (copy to `public/images/` during project setup):**

| File | Format | Use Case | Path |
|------|--------|----------|------|
| `MyGig_logo_black.svg` | SVG | **Primary — use this for the header/navbar on light backgrounds.** Crisp at any size. Native dimensions: 338×129px. | `public/images/MyGig_logo_black.svg` |
| `MyGig_Logo_Black_x2.png` | PNG @2x | Fallback for the black logo if SVG causes issues. High-res bitmap. | `public/images/MyGig_Logo_Black_x2.png` |
| `Group_37__1_.png` | PNG | **White logo on transparent background** — use for dark sections (footer, dark CTA blocks). Horizontal lockup. | `public/images/mygig-logo-white.png` |
| `mygig__1_.png` | PNG | **White logo with tagline "Work your Way"** — square format, use for OG image / social sharing / favicon source. NOT for use in the website layout. | `public/images/mygig-logo-tagline.png` |

**Usage rules:**

```
Header / Navbar (light bg):   MyGig_logo_black.svg     → displayed at 134×48px (width: 134px, height: auto)
Footer (dark bg):             mygig-logo-white.png     → displayed at ~160×57px (slightly larger than header)
OG / Social meta:             mygig-logo-tagline.png   → 512×512px (square, includes tagline)
Favicon:                      Derive from the "G" letterform in the logo
```

**Implementation:**

```tsx
// Header — use next/image with SVG
import Image from "next/image";

<Image
  src="/images/MyGig_logo_black.svg"
  alt="MyGig"
  width={134}
  height={48}
  priority
/>

// Footer — white logo on dark background
<Image
  src="/images/mygig-logo-white.png"
  alt="MyGig"
  width={160}
  height={57}
/>
```

**Critical:** The white logo PNG (`Group_37__1_.png`) has a black background baked into the image. You will need to either:
1. Use CSS `mix-blend-mode: screen` to knock out the black, OR
2. Process the image to make the black background transparent before adding to the project

Option 2 is strongly preferred — create a transparent-background version during project setup.

---

## 12. COPY & MESSAGING PRINCIPLES

### Voice

- Professional, confident, direct
- No corporate fluff — every sentence earns its place
- Buyer-centric: lead with the problem/pain, then the solution
- Use warehouse/logistics terminology naturally (DIFOT, cost-per-unit, penalty rates, SLA)

### Landing Page Copy Rules

- The page targets **warehouse and logistics** broadly — NOT exclusively 3PL
- 3PL is a primary buyer segment but the messaging should resonate with any company managing casual warehouse workers
- Lead with operational pain (inflexibility, overtime, compliance risk), not product features
- "Workforce-as-a-Service" is the category term; explain it, don't assume understanding
- The EOR differentiator must be prominent — this is the moat
- No competitor names on the landing page — position against categories ("labour hire", "SaaS tools", "DIY compliance")

### CTA Language

- Primary: "Book a demo", "Get started", "Talk to us"
- Secondary: "See how it works", "Learn more", "Download the app"
- Avoid: "Sign up free", "Try now" (this is a sales-led product, not PLG)

---

## 13. COMPONENT NAMING CONVENTIONS

```
Sections:      Hero, ProblemStatement, SolutionOverview, WhatIsWaaS, Benefits, UniqueFeatures, SocialProof, FAQ, FinalCTA, Footer
Components:    Button, ButtonPair, SectionHeading, Card, FeatureCard, TestimonialCard, AccordionItem, NavBar, AnnouncementBar
Layout:        Container, InnerContainer, SplitSection, GridSection
Animation:     AnimatedSection, StaggerGrid, ScrollReveal
```

### File Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── NavBar.tsx
│   │   ├── Footer.tsx
│   │   ├── Container.tsx
│   │   └── AnnouncementBar.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── ProblemStatement.tsx
│   │   ├── SolutionOverview.tsx
│   │   ├── WhatIsWaaS.tsx
│   │   ├── Benefits.tsx
│   │   ├── UniqueFeatures.tsx
│   │   ├── SocialProof.tsx
│   │   ├── FAQ.tsx
│   │   └── FinalCTA.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── ButtonPair.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Card.tsx
│   │   └── AccordionItem.tsx
│   └── animation/
│       ├── ScrollReveal.tsx
│       ├── StaggerGrid.tsx
│       └── variants.ts
├── lib/
│   └── constants.ts
└── public/
    ├── fonts/
    │   ├── GrenettePro-Bold.woff2
    │   └── Onest-[weight].woff2
    └── images/
```

---

## 14. ACCESSIBILITY

- All interactive elements must have visible focus states (2px outline, `--color-accent-vivid`, 2px offset)
- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large text
- All images have descriptive `alt` text
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Skip-to-content link
- `prefers-reduced-motion` disables all Framer Motion animations

---

## 15. PERFORMANCE

- All fonts preloaded with `<link rel="preload">`
- Images use `next/image` with `priority` on above-the-fold, `loading="lazy"` below
- Dynamic imports for heavy sections below the fold
- Target: Lighthouse score ≥ 90 on all categories
