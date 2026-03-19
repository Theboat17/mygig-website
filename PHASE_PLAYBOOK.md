# MyGig Landing Page — Full Phase-by-Phase Build Playbook

> **How to use this document:** Each phase is a self-contained prompt for Claude Code. Copy the phase you're working on, paste it into Claude Code, and run it. Complete phases sequentially — each builds on the previous. Run the quality checks at the end of each phase before moving to the next.

> **Pre-requisites:** `CONVENTIONS.md` must be in your project root. Phase 1 must be completed first (it sets up the project scaffold). The `ui-ux-pro-max-skill` should be installed in Claude Code's skills directory. The 21st.dev MCP server should be connected.

---

## BUILD SEQUENCE OVERVIEW

| Phase | Sections Built | Est. Complexity | Key Dependencies |
|-------|---------------|-----------------|------------------|
| 1 | Scaffold + Nav + Hero | Foundation | CONVENTIONS.md |
| 2 | Problem Statement + Current Solutions Failing | Medium | Phase 1 components |
| 3 | Solution Overview + "What is WaaS" | High | Phase 2 establishes pain |
| 4 | Benefits + Unique Features | Medium | Phase 3 establishes solution |
| 5 | Social Proof + FAQ + Final CTA + Footer | Medium-High | All prior sections |
| 6 | Animation Polish + Performance + Responsive QA | Polish | Complete page |

---

# PHASE 1 — Project Scaffold + Design System + Navigation + Hero

> See `PHASE_1_PROMPT.md` for the complete Phase 1 prompt.

### Phase 1 Checkpoint

Before moving to Phase 2, confirm:
- Project builds without errors
- CSS variables are all defined in globals.css
- NavBar renders correctly at all breakpoints
- Hero section displays with correct typography, spacing, and animation sequence
- Button component works in both primary and secondary variants
- ScrollReveal wrapper works for scroll-triggered animations

---

# PHASE 2 — Problem Statement + Current Solutions Failing

## Context

You are continuing the MyGig landing page build. Phase 1 is complete — the project scaffold, design system, navigation, and hero section are built. **Read `CONVENTIONS.md` before starting.** All components from Phase 1 are available for reuse.

This phase builds the two sections that establish the buyer's pain. These sections draw from the MyGig 3PL sales deck but are written for a broader **warehouse and logistics** audience (not exclusively 3PL).

---

## Section 1: Problem Statement

### `src/components/sections/ProblemStatement.tsx`

**Background:** Dark (`bg-primary`, white text)

**Layout:** Split — left column (text content, ~55% width) + right column (image, ~45% width)

**Left Column Content:**

1. **Section Eyebrow** — Onest Medium 14px, uppercase, tracking wider, color accent-vivid (#6c60ff), letter-spacing 0.1em
   - Text: `"THE PROBLEM"`

2. **Heading (H2)** — Grenette Pro Bold 54px, white
   - Text: `"Inflexible workforces put key contracts at risk"`

3. **Three Pain Cards** — stacked vertically with 24px gap
   
   Each card:
   - Background: white, rounded-lg (8px), padding 32px
   - Purple triangle/chevron accent marker on the left edge (use a small SVG or CSS pseudo-element in `--color-accent`)
   - **Card Title** — Onest Bold 20px, color neutral-900
   - **Card Body** — Onest Regular 16px, color neutral-700, max 2 lines
   
   Card 1:
   - Title: `"Unpredictable volumes put DIFOT at risk"`
   - Body: `"When a spike hits, your current casual workforce can't scale fast enough. Shifts go unfilled, picks get missed, DIFOT drops."`
   
   Card 2:
   - Title: `"Overtime is the only lever — and it's bleeding margin"`
   - Body: `"When you can't flex headcount, overtime becomes the default. Penalty rates compound, cost-per-unit blows out, and you pay more to deliver less."`
   
   Card 3:
   - Title: `"One bad peak puts a key account on notice"`
   - Body: `"Clients review performance at peaks. Repeated SLA breaches trigger reviews and put key accounts at risk."`

**Right Column:**
- Large warehouse image (placeholder: dark grey rounded rectangle with subtle grain texture)
- Border-radius: 8px
- Full height of the section, object-fit cover

**Animation:**
- Left column: `slideLeft` variant on scroll
- Each pain card: `staggerChild` with 0.12s stagger delay
- Right column: `slideRight` variant, slightly delayed

**Responsive:**
- Below 1024px: stack to single column, image above text
- Cards go full-width

---

## Section 2: Current Solutions Failing

### `src/components/sections/CurrentSolutionsFailing.tsx`

**Background:** White (`bg-white`)

**Layout:** Centered heading + 3-column card grid

**Content:**

1. **Heading (H2)** — Grenette Pro Bold 54px, centered, constrained to 914px
   - Text: `"Current solutions can't keep up with the pace of your operation"`

2. **Subtitle** — Onest Regular 18px, color neutral-700, centered, constrained to 648px
   - Text: `"Whether it's labour hire, DIY compliance, or manual rostering — the tools you have today weren't built for the speed and complexity of modern fulfilment."`

3. **Three Failure Cards** — equal-width grid (3 columns), 24px gap

   Each card:
   - Background: neutral-300 (#f0f0f5), rounded-lg, padding 40px 32px
   - **Card Icon** — 48×48px circle, white background, centered, containing a Lucide icon in accent colour
   - **Card Title** — Onest Bold 22px, centered, margin-top 24px
   - **Card Body** — Onest Regular 16px, color neutral-700, centered or left-aligned
   - **Bullet Points** — 3 short pain points per card, using Onest Regular 16px with small dot markers (not list-style, use a CSS dot or small circle)

   Card 1 — Labour Hire:
   - Icon: `Clock` (Lucide)
   - Title: `"Labour hire is too slow for fulfilment"`
   - Bullets:
     - "Slow, manual processes"
     - "Days to respond, not hours"
     - "By the time workers arrive, DIFOT is already missed"

   Card 2 — No Optimisation:
   - Icon: `BarChart3` (Lucide)
   - Title: `"No way to optimise the labour mix in real time"`
   - Bullets:
     - "No forecast modelling of skills, shift lengths, or start times"
     - "Evening penalty rates hit when one long shift replaces two short ones"
     - "You overpay on every spike because you're flying blind"

   Card 3 — Admin & Compliance:
   - Icon: `ShieldAlert` (Lucide)
   - Title: `"Admin and compliance cost is too high to DIY"`
   - Bullets:
     - "Recruitment, onboarding, payroll, award interpretation"
     - "Fair Work compliance sits on already-stretched ops teams"
     - "Overhead kills any cost advantage before it starts"

**Animation:**
- Heading + subtitle: `fadeUp`
- Cards: `staggerContainer` + `staggerChild` with `scaleIn` variant
- Cards animate in on scroll as a group

**Responsive:**
- Below 1024px: 2 columns
- Below 640px: single column, cards stack

---

## Phase 2 Quality Checks

- [ ] ProblemStatement renders correctly on dark background with white text
- [ ] Pain cards have consistent styling and purple accent markers
- [ ] CurrentSolutionsFailing cards are equal-height in the grid
- [ ] All copy is warehouse/logistics-generic (not 3PL-specific language)
- [ ] Scroll animations fire correctly for both sections
- [ ] Responsive layout works at 1340px, 1024px, 768px, 480px
- [ ] No hardcoded colours — all via CSS variables or Tailwind tokens

---

# PHASE 3 — Solution Overview + "What is WaaS"

## Context

Phase 2 is complete — the problem and pain are established. This phase delivers the solution reveal and explains the WaaS model. This is the most strategically important phase because it positions MyGig's EOR differentiator. **Read `CONVENTIONS.md` before starting.**

---

## Section 3: Solution Overview

### `src/components/sections/SolutionOverview.tsx`

**Background:** Dark (`bg-primary`, white text)

**Layout:** Full-width dark section with centered content

**Content:**

1. **Eyebrow** — Onest Medium 14px, uppercase, accent-vivid, tracking wide
   - Text: `"THE SOLUTION"`

2. **Heading (H2)** — Grenette Pro Bold 54px, white, centered, max-width 914px
   - Text: `"MyGig is the operational backbone for warehouse fulfilment"`

3. **Four Capability Rows** — stacked vertically, max-width 800px, centered

   Each row:
   - Flex layout: checkmark icon (left) + text block (right)
   - Checkmark: Lucide `Check` icon in a 32px circle with accent/lavender background
   - Text: Onest Regular 18px, white, with the key phrase in **Bold**
   
   Row 1: `"**Scale casual headcount up and down** to match demand — without overtime as the default"`
   Row 2: `"**Real-time scenario modelling** of skills, shift lengths, and start times to optimise cost-per-unit"`
   Row 3: `"**Fill shifts within hours** — including certified roles like forklift drivers"`
   Row 4: `"**Outsource all Fair Work risk and compliance** to MyGig as the Employer of Record (EOR)"`

4. **App Mockup** — positioned to the right or below the capability rows
   - Placeholder: a phone-shaped container (rounded-2xl, aspect ~9:19, white background, shadow-xl) with mock UI elements inside
   - Show a simplified shift creation interface mockup:
     - Header: "Create Shifts" / "Open Shifts" / "Closed Shifts" tabs
     - A sample shift card: "Tuesday, Apr 23 — Warehouse Picker / Packer — 8:00 AM - 5:00 PM — $144.00 — 3 of 3 filled"
   - This can be a styled div, not an actual image

**Animation:**
- Eyebrow + heading: `fadeUp`
- Capability rows: `staggerContainer` + `staggerChild`
- App mockup: `scaleIn` with slight delay after rows complete

**Responsive:**
- Stack vertically on mobile
- App mockup goes below capability rows on smaller screens

---

## Section 4: What is Workforce-as-a-Service?

### `src/components/sections/WhatIsWaaS.tsx`

**Background:** White (`bg-white`)

**This is the key differentiator section — treat it with extra care.**

**Layout:** Two columns — Left (explanation + app screenshots, ~50%) | Right (comparison table, ~50%)

**Left Column:**

1. **Heading (H2)** — Grenette Pro Bold 54px, left-aligned
   - Text: `"What is Workforce-as-a-Service?"`

2. **Explanation** — Onest Regular 18px, color neutral-800
   - Text: `"MyGig is the Employer of Record for all casual staff engaged through the platform — assuming full Fair Work compliance, payroll, tax, and super liability while managing recruitment, onboarding, vetting, time & attendance, and workforce admin end to end."`

3. **App Screenshots Cluster** — 2-3 overlapping phone mockup containers
   - Use placeholder styled divs showing worker profiles, shift completion screens
   - Offset/overlap positioning using negative margins or absolute positioning
   - Subtle shadow-lg for depth

**Right Column — "What our platform covers → What it replaces"**

A comparison table showing what MyGig replaces:

| Function | MyGig Covers | Replaces (SaaS) | Replaces (Staff) |
|----------|-------------|------------------|-------------------|

Build this as a visual component, NOT a raw HTML table. Each row should be:
- A horizontal card/strip with:
  - Left: Function name + icon (Onest Bold 16px)
  - Center: "MyGig" pill/badge (lavender background)
  - Right: What it replaces — two items (SaaS tool + Staff role) shown as crossed-out or greyed items

Rows:
1. **Recruitment** → Job Ads + Internal Recruiter
2. **Onboarding & HR Compliance** → ATS/HRIS + HR Manager
3. **Fair Work Award Interpretation** → Award Interpretation Software (e.g. TANDA-style) + Payroll Manager
4. **Rostering, Time & Attendance** → T&A Software (e.g. Deputy-style) + HR Manager + Ops
5. **Payroll** → Payroll Software + Payroll Manager + Accountant
6. **Legal & Compliance** → Int./Ext. Lawyer

**Style each "replaces" item as visually "eliminated"** — use a line-through, reduced opacity, or red/grey styling to communicate that MyGig removes these costs.

**Animation:**
- Left column: `slideLeft`
- Right column comparison: `slideRight`, then rows stagger in

**Responsive:**
- Below 1024px: stack columns, comparison table goes below explanation
- Comparison table scrolls horizontally on very small screens if needed

---

## Phase 3 Quality Checks

- [ ] SolutionOverview reads as a clear, confident answer to Phase 2's pain
- [ ] Capability rows are scannable — bold key phrases catch the eye on skim
- [ ] WhatIsWaaS comparison table clearly communicates the "replaces" concept
- [ ] EOR is prominently mentioned and explained (not buried)
- [ ] No competitor names appear (no "TANDA", "Deputy" — use generic descriptors)
- [ ] App mockup placeholders look intentional, not broken
- [ ] Responsive layouts stack cleanly
- [ ] Scroll animations work correctly

---

# PHASE 4 — Benefits + Unique Features

## Context

Phases 1–3 are complete. The page flow is: Pain → Solution → Explanation. This phase adds the concrete benefits and feature differentiators. **Read `CONVENTIONS.md` before starting.**

---

## Section 5: Benefits

### `src/components/sections/Benefits.tsx`

**Background:** Neutral-300 (#f0f0f5)

**Layout:** Centered heading + 2×2 grid of benefit blocks

**Content:**

1. **Heading (H2)** — Grenette Pro Bold 54px, centered
   - Text: `"The benefits"`

2. **2×2 Benefit Grid** — 24px gap, max-width 1100px, centered

   Each block:
   - Background: white, rounded-lg, padding 48px 40px
   - Purple checkmark icon (Lucide `Check` in accent circle, 40px) top-left
   - **Block Title** — Onest Bold 28px
   - **3 Bullet Points** — Onest Regular 16px, color neutral-700, with small dot markers, 12px gap between items

   Block 1 — Greater Flexibility:
   - Title: `"Greater flexibility"`
   - Bullets:
     - "Shifts filled within 24 hours, including urgent last-minute cover"
     - "Optimised workforce allocation across peak and off-peak demand"
     - "Daily pay improves retention and reduces attrition"

   Block 2 — Reduce Cost:
   - Title: `"Reduce cost"`
   - Bullets:
     - "Reduce total cost to serve your casual workforce by up to 70%"
     - "Eliminate TOIL leakage, overtime blowouts, and penalty miscalculations"
     - "Transparent pricing with no hidden fees"

   Block 3 — Remove Admin:
   - Title: `"Remove admin"`
   - Bullets:
     - "Zero HR, payroll, or compliance burden on your team"
     - "Fully digital with a single source of truth"
     - "Same-day super handled automatically"

   Block 4 — Remove Risk:
   - Title: `"Remove risk"`
   - Bullets:
     - "Full Fair Work compliance shield"
     - "MyGig is the Employer of Record — we assume payroll, tax, and super liability"
     - "Fully audit-ready and documented"

**Animation:**
- Heading: `fadeUp`
- Grid blocks: `staggerContainer` + `scaleIn` stagger

**Responsive:**
- Below 768px: single column stack

---

## Section 6: Unique Features

### `src/components/sections/UniqueFeatures.tsx`

**Background:** Dark (`bg-primary`, white text)

**Layout:** Centered heading + visual feature showcase

**Content:**

1. **Heading (H2)** — Grenette Pro Bold 54px, white, centered
   - Text: `"Built different"`

2. **Subtitle** — Onest Regular 18px, color neutral-500, centered, max-width 648px
   - Text: `"Features designed specifically for the realities of warehouse workforce management."`

3. **Five Feature Cards** — use an asymmetric, editorial layout (NOT a boring grid)

   Consider a layout like:
   - Row 1: Two cards side by side (60/40 split)
   - Row 2: One wide card spanning full width
   - Row 3: Two cards side by side (40/60 split)
   
   Or use 21st.dev MCP `21st_magic_component` to find an animated feature showcase / bento grid component. Customise it to match the design system colours.

   Each feature card:
   - Background: slightly lighter than primary (e.g., rgba(255,255,255,0.05) or a very dark grey)
   - Border: 1px solid rgba(255,255,255,0.1)
   - Rounded-lg, padding 40px
   - **Feature badge** — lavender pill with feature name (Onest Bold 14px)
   - **Feature visual** — a mockup/illustration area (placeholder for now)
   - **Feature description** — Onest Regular 16px, white/neutral-400

   Features:
   1. **Same Day Pay** — "Workers get paid the day they work. Improves retention and reduces no-shows."
   2. **AI-Powered Fair Work Compliance** — "Automatic award interpretation ensures every shift is compliant with the correct rates, penalties, and allowances."
   3. **Automated Timesheets** — "Workers clock in and out via the app. GPS-verified. Zero manual timesheets."
   4. **Employ Now, Pay Later** — "Flexible payment terms — 7, 14, 30, or 60 days. Cash flow when you need it."
   5. **Easy-to-Use Worker App** — "Workers manage their shifts, get directions, and track pay — all from one app."

**Animation:**
- Use viewport-triggered entrance animations
- Cards stagger in with slight scale + fade
- Consider a subtle parallax or float effect on the mockup areas inside cards

**Responsive:**
- Stack all cards single column on mobile
- Maintain readable card padding

---

## Phase 4 Quality Checks

- [ ] Benefits grid is balanced and scannable
- [ ] Unique features section feels visually distinct from the rest of the page (editorial, not template-y)
- [ ] Feature cards have consistent internal spacing
- [ ] Dark section text is readable (check contrast)
- [ ] No hardcoded colours
- [ ] Animations are smooth, not janky
- [ ] Responsive stacking works cleanly

---

# PHASE 5 — Social Proof + FAQ + Final CTA + Footer

## Context

Phases 1–4 are complete. The page narrative is established: Pain → Solution → Benefits → Features. This phase adds trust signals, handles objections, delivers the final conversion push, and closes with the footer. **Read `CONVENTIONS.md` before starting.**

---

## Section 7: Social Proof / Testimonials

### `src/components/sections/SocialProof.tsx`

**Background:** White

**Layout:** Centered heading + 2×2 testimonial card grid (or a carousel — choose whichever feels more dynamic)

**Content:**

1. **Heading (H2)** — Grenette Pro Bold 54px, centered
   - Text: `"Trusted by warehouse operators across Australia"`

2. **Testimonial Cards** — 2×2 grid, 24px gap

   Each card:
   - Background: neutral-300 (#f0f0f5), rounded-lg, padding 40px
   - **Quote Title** — Onest Bold 22px, in smart quotes ("..."), 2-3 lines max
   - **Quote Body** — Onest Regular 16px, color neutral-700, 2-3 sentences
   - **Avatar Row** — flex row: circular avatar (48px, grey placeholder), name (Onest Bold 16px), job title + company (Onest Regular 14px, neutral-600)

   Use placeholder testimonials for now:
   
   Card 1:
   - Quote: "We cut our overtime spend by 40% in the first quarter"
   - Name: "Sarah M." | "Operations Manager, [Logistics Co]"
   
   Card 2:
   - Quote: "Filling shifts used to take days. Now it takes hours"
   - Name: "James T." | "Warehouse Manager, [Distribution Co]"
   
   Card 3:
   - Quote: "The compliance piece alone was worth the switch"
   - Name: "Michelle L." | "CFO, [Fulfilment Co]"
   
   Card 4:
   - Quote: "Our team finally has time to focus on operations, not admin"
   - Name: "David K." | "COO, [Supply Chain Co]"

**Animation:**
- Cards: `staggerContainer` + `scaleIn`

**Responsive:**
- Below 768px: single column

---

## Section 8: FAQ Accordion

### `src/components/sections/FAQ.tsx`

**Background:** Neutral-300 (#f0f0f5)

**Layout:** Centered heading + stacked accordion items, max-width 800px, centered

**Content:**

1. **Heading (H2)** — Grenette Pro Bold 54px, centered
   - Text: `"Frequently asked questions"`

2. **Accordion Items** — each item:
   - Background: rgba(240,240,240,0.5) (50% opacity light grey), rounded-lg, padding 24px 40px
   - **Question** — Onest Bold 22px, flex row with + icon (Lucide `Plus`) on right
   - **Answer** — Onest Regular 16px, color neutral-700, revealed on click
   - Toggle animation: + rotates to × (or use `ChevronDown` that rotates), answer slides down with Framer Motion `AnimatePresence`
   - Gap between accordion items: 12px

   Questions:
   
   Q1: "What is Workforce-as-a-Service?"
   A1: "Workforce-as-a-Service means MyGig handles everything — recruitment, onboarding, payroll, compliance, rostering, and time & attendance — for your casual workforce. We're the Employer of Record, so all Fair Work liability sits with us, not you."
   
   Q2: "How quickly can you fill shifts?"
   A2: "Most shifts are filled within 24 hours, including specialist roles like forklift drivers. For urgent last-minute cover, we can often respond within hours."
   
   Q3: "What does it cost?"
   A3: "For new workers supplied by MyGig, we charge a transparent service fee on gross wages. For transitioning your existing casuals onto our platform, our EOR model is designed to reduce your total non-wage OPEX by 20-25% or more."
   
   Q4: "Do workers have to use the MyGig app?"
   A4: "Yes — the app handles shift acceptance, GPS-verified clock-in/out, timesheets, and pay. It's designed to be simple and intuitive, and workers consistently rate it highly."
   
   Q5: "What awards do you cover?"
   A5: "Our AI-powered compliance engine covers all major awards relevant to warehousing and logistics, including the Storage Services Award, the General Retail Industry Award, and the Road Transport Award. Every shift is automatically calculated with the correct base rates, penalties, overtime, and allowances."
   
   Q6: "How does the Employer of Record model work?"
   A6: "When you engage workers through MyGig, we become their legal employer. That means payroll, tax, superannuation, workers' comp, and Fair Work compliance are all our responsibility. You direct the work — we handle everything else."

**Build the AccordionItem as a reusable component:**

### `src/components/ui/AccordionItem.tsx`

- `"use client"` component
- Uses Framer Motion `AnimatePresence` and `motion.div` for smooth expand/collapse
- Accepts `question: string`, `answer: string`, `isOpen: boolean`, `onToggle: () => void`
- The FAQ section manages open state (only one open at a time)

**Responsive:**
- Full-width on all screen sizes (already constrained to 800px)

---

## Section 9: Final CTA

### `src/components/sections/FinalCTA.tsx`

**Background:** Lavender (#DCD8FA)

**Layout:** Two columns — Left (phone mockups) | Right (text + CTA)

**Content:**

**Left Column:**
- 2 overlapping phone mockup placeholders showing the MyGig app
- Offset positioning, subtle rotation on one, shadow-xl
- Rounded-2xl containers

**Right Column:**
1. **Heading (H2)** — Grenette Pro Bold 54px, left-aligned
   - Text: `"Ready to transform how you staff your warehouse?"`

2. **Body** — Onest Regular 18px, color neutral-800
   - Text: `"See how MyGig can reduce your workforce costs, eliminate compliance risk, and give you the flexibility to scale on demand."`

3. **ButtonPair** — left-aligned
   - Primary: "Book a demo"
   - Secondary: "Talk to our team"

**Animation:**
- Phone mockups: `slideLeft` + float/bob animation (subtle, continuous)
- Text + CTA: `slideRight`

**Responsive:**
- Below 1024px: stack, phone mockups above text
- On mobile, hide one phone mockup to save space

---

## Section 10: Footer

### `src/components/layout/Footer.tsx`

**Background:** Dark (`bg-primary`)

**Layout:** 4-column link grid + bottom bar

**Columns:**

Column 1 — "For Businesses":
- Recruitment, Onboarding, Payroll, Time & Attendance, Award Interpretation, Compliance, Pricing

Column 2 — "For Workers":
- Find Work, Download the App, How It Works, FAQs

Column 3 — "Industries":
- Warehousing, Logistics, Retail, Construction, Hospitality, Events, Agriculture, Manufacturing

Column 4 — "Company":
- About, Careers, Blog, Contact, ISO 27001

**Column Headings:** Onest Bold 20px, white
**Links:** Onest Regular 18px, color neutral-600 (#969da0), hover → white

**Bottom Bar:**
- MyGig logo (white version): `<Image src="/images/mygig-logo-white.png" alt="MyGig" width={160} height={57} />` — see CONVENTIONS.md Section 11 for transparent-background note
- Copyright: "© 2026 MyGig. All rights reserved."
- Privacy Policy | Terms of Use
- Social icons: Facebook, LinkedIn, Instagram (Lucide icons)

**Responsive:**
- Below 1024px: 2×2 grid
- Below 640px: single column stack

---

## Phase 5 Quality Checks

- [ ] Testimonial cards render with consistent height/alignment
- [ ] FAQ accordion opens/closes smoothly with only one item open at a time
- [ ] FAQ answers are readable and well-spaced
- [ ] FinalCTA lavender background provides clear visual break from previous sections
- [ ] Footer links are organised logically
- [ ] Footer renders cleanly on all screen sizes
- [ ] Scroll animations work for all new sections
- [ ] Full page scroll from top to bottom is smooth, no jumps or layout shifts

---

# PHASE 6 — Animation Choreography + Performance + Responsive QA

## Context

All sections are built. This phase is pure polish — animation refinement, performance optimisation, responsive QA, and final visual consistency checks. **Read `CONVENTIONS.md` before starting.**

---

## Task 1: Animation Choreography Audit

Review every section's animation and ensure:

1. **Consistent easing** — all entrance animations use `[0.22, 1, 0.36, 1]` unless there's a deliberate reason to differ
2. **No animation overlap** — sections that are close together vertically shouldn't both be animating at the same time. Adjust `viewport.margin` values if needed.
3. **Stagger timing is consistent** — all stagger delays are 0.1–0.15s
4. **Hero sequence is polished** — badge → headline → subtitle → buttons → gallery should feel like a choreographed reveal, not a cascade of independent animations
5. **Reduced motion** — verify that `prefers-reduced-motion: reduce` disables ALL animations. Content should be immediately visible with no motion.

### Add Scroll Progress Indicator (Optional Enhancement)

Consider adding a thin progress bar at the top of the page (2px height, accent colour) that fills as the user scrolls. Use Framer Motion's `useScroll` and `useTransform`:

```tsx
const { scrollYProgress } = useScroll();
```

---

## Task 2: Performance Optimisation

1. **Font loading** — ensure `<link rel="preload">` for all .woff2 files in `layout.tsx`
2. **Image optimisation** — all placeholder images should use `next/image` with explicit dimensions
3. **Code splitting** — sections below the fold should use `next/dynamic` with `ssr: false` for their Framer Motion components
4. **Bundle analysis** — run `npm run build` and check the output sizes. Flag any component over 50KB.
5. **Lighthouse audit** — target ≥ 90 on Performance, Accessibility, Best Practices, SEO

---

## Task 3: Responsive QA

Test at these breakpoints and fix any issues:

| Breakpoint | Device | Check |
|-----------|--------|-------|
| 1440px | Desktop (large) | Full layout, all columns visible |
| 1340px | Container max-width | Content should not exceed container |
| 1024px | Tablet landscape | 2-col → stacking transitions |
| 768px | Tablet portrait | Nav collapse, single-column layouts |
| 480px | Mobile | Everything stacks, readable text, tappable buttons |
| 375px | iPhone SE | Minimum viable layout, no overflow |

**Common issues to look for:**
- Text overflow or truncation
- Button pairs that don't stack on mobile
- Cards that are too narrow to read
- Horizontal scroll (there should be NONE at any breakpoint)
- Touch targets smaller than 44px
- Images that don't resize properly

---

## Task 4: Visual Consistency Audit

Walk through the entire page and verify:

1. **Typography** — every heading, body text, and button label matches the CONVENTIONS.md type scale exactly
2. **Colours** — no hardcoded hex values anywhere in the codebase. All colours reference CSS variables or Tailwind tokens.
3. **Spacing** — consistent section padding, card padding, and gap values
4. **Border radius** — everything is 8px (rounded-lg) except pills (rounded-full) and the announcement bar (12px)
5. **Button consistency** — every primary button has the right arrow icon, every secondary button has the outlined style
6. **Dark sections** — text is white, accent markers are visible, contrast is sufficient
7. **Card backgrounds** — alternating between neutral-300 and lavender per the pattern

---

## Task 5: SEO & Meta

Verify/add to `src/app/layout.tsx`:

```tsx
export const metadata = {
  title: "MyGig — The Smarter Way to Staff Your Warehouse",
  description: "AI-powered Workforce-as-a-Service. Scale your casual workforce, eliminate Fair Work risk, and reduce costs by up to 70%. MyGig is your Employer of Record.",
  openGraph: {
    title: "MyGig — Workforce-as-a-Service for Warehousing & Logistics",
    description: "Scale casual headcount on demand. Full Fair Work compliance. Same-day pay. Book a demo today.",
    type: "website",
    locale: "en_AU",
    url: "https://mygig.com.au",
    images: [{ url: "/images/mygig-logo-tagline.png", width: 512, height: 512, alt: "MyGig — Work your Way" }],
  },
};
```

Add structured data (JSON-LD) for Organisation:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "MyGig",
  "url": "https://mygig.com.au",
  "description": "AI-powered Workforce-as-a-Service platform",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AU"
  }
}
```

---

## Task 6: Final Build Verification

```bash
npm run build
npm run start
```

- Zero build errors
- Zero console warnings/errors in browser
- Full page loads in < 3 seconds on throttled 3G
- All animations are smooth at 60fps
- No layout shifts (CLS = 0)

---

## Phase 6 Checkpoint — Ship Readiness

- [ ] All 10 sections render correctly
- [ ] Animation choreography feels polished, not robotic
- [ ] `prefers-reduced-motion` works
- [ ] Responsive at all 6 breakpoints
- [ ] No hardcoded values — everything traces back to CONVENTIONS.md
- [ ] Lighthouse ≥ 90 all categories
- [ ] Meta tags and OG tags are correct
- [ ] `npm run build` passes cleanly
- [ ] Ready for real font files, images, and testimonials to be swapped in

---

# POST-BUILD: WHAT TO SWAP IN

Once the scaffold is complete, these items need to be replaced with real assets:

| Placeholder | Real Asset |
|------------|------------|
| Font placeholder files | ✅ Grenette Pro .woff2 files included. Still need: Onest .woff2 files (Regular, Medium, Bold) |
| Placeholder images (grey boxes) | Professional warehouse photography |
| Phone mockup styled divs | Actual app screenshot images |
| ~~Logo text placeholder~~ | ✅ Real logo SVGs/PNGs already included — see `public/images/` |
| Placeholder testimonials | Real customer quotes (with permission) |
| "Book a demo" link | Calendly or HubSpot meeting link |
| Company placeholder names | Real company names in testimonials |
| Social links | Real Facebook/LinkedIn/Instagram URLs |
| Availability badge regions | Current real availability |

---

# 21st.dev MCP INTEGRATION NOTES

Throughout the build, use the 21st.dev MCP (`21st_magic_component`) to source pre-built animated components where they'd be higher quality than hand-coded alternatives. Good candidates:

- **Hero sections** with advanced animation patterns
- **Bento grids** for the Unique Features section
- **Animated counters** for statistics/metrics
- **Testimonial carousels** with smooth transitions
- **FAQ accordions** with polished expand/collapse
- **Floating/dock navigation** components

**Always customise** MCP components to match the CONVENTIONS.md colour scheme. Never ship default MCP colours.

---

# ui-ux-pro-max-skill INTEGRATION NOTES

This skill provides advanced motion design patterns. Use it for:

- Complex scroll-triggered animation sequences
- Parallax effects on hero images
- Micro-interaction patterns for buttons and cards
- Page transition choreography
- Advanced hover state designs

Reference the skill's documentation for specific implementation patterns and combine with Framer Motion for execution.
