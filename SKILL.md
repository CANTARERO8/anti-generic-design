---
name: anti-generic-design
description: Universal rules to eliminate AI clichés (no brackets, no double slashes, no floating dots, no fake HUDs/telemetry, no left border bars, no icon spam) and enforce editorial UI, clean frontend architecture, semantic HTML, and concise, decoration-free code comments.
category: frontend
tags: [frontend, ui-ux, clean-code, web-design, web-components, anti-ai-cliches, accessibility]
tools: [claude, cursor, codex, copilot, windsurf, aider, antigravity]
author: Eduardo Cordova
license: MIT
---

# THE ANTI-GENERIC GUIDE: EDITORIAL FRONTEND & CLEAN UI

This skill provides universal, mandatory directives to eradicate the predictable biases, formulaic layouts, decorative noise, and comment bloat that Large Language Models (LLMs) generate by default when building frontend applications, designing web interfaces, and writing production code.

---

## WHEN TO APPLY THIS SKILL

- When creating or refactoring frontend applications, web interfaces, landing pages, or modular UI components.
- When writing frontend markup, styles, state management, event handling, or animations (HTML, CSS, Tailwind, JavaScript, TypeScript, React, Vue, Svelte).
- When writing interface copy, microcopy, buttons, and calls to action.
- When writing or reviewing code in any language, ensuring technical clarity without narrative bloat or div-soup.
- Whenever the objective is an authentic, high-end, editorial standard that avoids the look and feel of a generic AI template.

---

## PILLAR 1. PROHIBITED VISUAL SINS (UI & MICRO-DETAILS)

LLMs frequently rely on pseudo-technical ornaments to feign complexity. The following patterns are **strictly forbidden**:

### ❌ 1. Zero Brackets `[ ]` Around Text or Badges
- **Forbidden:** Enclosing kickers, categories, phase numbers, subtitles, or tags in brackets.
  - ❌ `[ 01 ]`, `[ SERVICES ]`, `[ PROCESS ]`, `[ PHASE 02 ]`, `[ CASE STUDY ]`
- **Correct:** Clean typography, direct numbering (`01`, `02`), organic CSS pills, or visual distinction through font weight and tracking (`tracking-wide`).
  - ✅ `01`, `Services`, `Process`, or an understated badge with subtle padding.

### ❌ 2. Zero Double Slashes `//` as Decorative Dividers
- **Forbidden:** Using slashes as stylistic dividers in titles, tags, or metadata.
  - ❌ `01 // ARCHITECTURE`, `DETAILS // 2026`, `SERVICES // WEB`
- **Correct:** Natural separation using negative space (`gap`, `margin`), font weight hierarchies, or clean breaks.
  - ✅ `01  Architecture`

### ❌ 3. Zero Decorative Dashes `-` / `—`
- **Forbidden:** Using dashes or hyphens to frame headings or serve as artificial bullets.
  - ❌ `- OUR VISION -`, `— TECHNOLOGY —`, `• FEATURES -`
- **Correct:** Direct, unadorned headings.
  - ✅ `Our vision`, `Technology`

### ❌ 4. Zero Floating Dots, Bullet Points, and Circular Status/Indicator Dots
- **Forbidden:**
  - **Zero Circular Status Dots or Indicator Dots:** NEVER place circular dots (`<span class="dot"></span>`, `<span class="indicator"></span>`, `border-radius: 50%`) beside buttons, status badges, capsules, pills, or state labels (e.g., `● Active`, `● Offline`, `● Live`, `● Operational`, `● Enabled`, `<span class="status-indicator"></span>`). Never simulate hardware LEDs or IoT status beacons on web UI. Communicate system or element state purely through typography, border contrast, subtle background tint, or opacity—never with a dot.
  - **Zero Bullet Points or Middle Dots:** NEVER use HTML bullet entities or symbols (`&bull;`, `•`, `·`, `●`, `◦`) between words, in inline metadata, or in navigation (e.g., `Enterprise &bull; v2.4`, `Item • Price`, `DESIGN · STRATEGY`).
  - **Zero Decorative Dot Grids:** Never use artificial background dot matrices as filler.
- **Correct:** Direct typography, natural punctuation (commas, clean hierarchy, negative space), and semantic lists without pseudo-dots.
  - ✅ `Operational` or `Offline` displayed inside a subtle outlined badge with typographic weight and contrast (zero dot).
  - ✅ `Version 2.4, Production` (clean comma and spacing, zero bullets).

### ❌ 5. Zero Fake Telemetry or Sci-Fi HUD Clichés
- **Forbidden:** Inventing fictional coordinates (`LAT / LONG`), arbitrary signal levels (`SIGNAL: 98.4%`), fake system statuses (`SYSTEM_STATUS: OK`, `INITIALIZING CORE...`), or military cockpit styling on standard commercial or product websites.
- **Correct:** Real product value, verified technical specifications, and authentic data.

### ❌ 6. Zero Decorative Vertical Left Lines (`border-left` Callout Cliché)
- **Forbidden:** Adding vertical accent bars on the left side of text blocks, lists, or feature items (`border-left: 2px solid ...; padding-left: 1rem;` repeated across every item).
  - ❌ Repetitive colored left bars simulating artificial callouts on every paragraph.
- **Correct:** Natural vertical spacing, typographic hierarchy, and clean contrast without lateral boxing.
  - ✅ Distinct header weight followed by description text with comfortable vertical spacing.

### ❌ 7. Zero Decorative Icons as Design Crutches (Icon Spam)
- **Forbidden:** Placing generic icons (rockets, lightbulbs, gears, checkmarks, stars) inside colored circles next to every heading or list item simply to fill empty space.
  - ❌ Generic icon in a small colored box above every card in a grid.
- **Correct:** Rely on editorial typography, scale, and composition. Icons are only permitted when they serve a **strictly functional or interactive purpose** (e.g., accordion toggle, modal close, media controls).

### ❌ 8. Zero Inflated Bubbles (Exaggerated Rounded Corners)
- **Forbidden:** Applying `rounded-3xl` or `rounded-full` to large rectangular containers, giving the site a cartoonish appearance.
- **Correct:** Subtle radiuses (`rounded-md`, `rounded-lg`, or `border-radius: 6px to 12px`) and precise architectural edges.

### ❌ 9. Zero Generic AI Gradients and Cheap Drop Shadows
- **Forbidden:** The ubiquitous AI demo gradient (purple to cyan: `from-purple-600 to-cyan-500`) and exaggerated floating glows (`shadow-purple-500/50` or white cards with fuzzy, cheap gray drop shadows).
- **Correct:** Tonal surfaces, refined contrast palettes (e.g., technical monochrome, warm earth tones, Catppuccin Mocha), crisp 1px hairline dividers, and intentional architectural depth.

---

## PILLAR 2. ANTI-CLICHÉ COPYWRITING (NO REPETITIVE AI JARGON)

LLMs fall back on repetitive marketing vocabulary that sounds grand but conveys little substance. Formulaic copywriting is prohibited:

### ❌ Forbidden Formulas:
- ❌ *"Empowering the future of..."*
- ❌ *"Revolutionizing the way you..."*
- ❌ *"Unlock the power of..."*
- ❌ *"Built for the modern digital era"*
- ❌ *"Next-generation seamless end-to-end solutions"*
- ❌ Twin generic action buttons: *"Get Started"* and *"Learn More"*.

### ✅ Required Approach:
- **Specific and tangible:** State exactly what the product or service does in the opening sentence.
- **Real data and metrics:** Highlight methods, materials, architecture, or verifiable results.
- **Contextual action triggers:** Use clear, descriptive buttons: *"Browse collection"*, *"Download technical paper"*, *"Review documentation"*, *"Schedule evaluation"*.

---

## PILLAR 3. ANTI-TEMPLATE STRUCTURE & EDITORIAL LAYOUTS

### ❌ Banned Structural Tropes:
1. **The Cloned 3-Column Pricing Grid:**
   - The default three cards (*Basic / Pro / Enterprise*) where the center card features a glowing border and a *"MOST POPULAR"* badge.
   - If pricing is required: use clean technical specification tables, modular breakdowns, or straightforward comparisons without deceptive highlights.
2. **The Infinite Word Marquee:**
   - A looping horizontal ticker of buzzwords (*SPEED • INNOVATION • RESILIENCE*) used as filler.
3. **The Fake Logo Strip:**
   - Rows of invented company names (*Acme Corp, Nova, Zenith, Pulse*) in muted gray to simulate social proof.
4. **Unsolicited FAQ Accordions:**
   - Forcing an accordion of four generic questions on pages where an FAQ was never requested.

### ✅ Editorial Composition Principles:
1. **Ultra-Wide Hero Containers (2 to 3 Lines Max):**
   - The primary heading (H1) **must never** wrap into 5 or 6 narrow lines due to a cramped container (`max-w-md`).
   - Use generous container widths (`max-w-5xl`, `max-w-6xl`, or `w-full`) with fluid clamp sizing (`clamp(...)`) so the headline breathes horizontally and reads in 2 to 3 lines maximum.
2. **Generous Section Rhythm:**
   - Structure each section as an independent editorial chapter with ample vertical breathing room (`py-24`, `py-32`, or `py-40`). Never crowd elements together.
3. **Grid Integrity and Animation Hygiene:**
   - Never inject unsolicited wrapper elements into strict pre-existing CSS grids.
   - For GSAP and scroll libraries: adhere to clean lifecycle management (`context()`, `kill()`). Never perform geometric calculations or measurements on unmounted or hidden nodes.

---

## PILLAR 4. CLEAN CODE, ACCESSIBILITY & SURGICAL COMMENTS

When writing or modifying code (JavaScript, TypeScript, Python, CSS, HTML), code must remain direct, accessible, and completely free of decorative clutter.

### ❌ Strictly Prohibited in Code:

1. **Zero Generic Comments Narrating Obvious Syntax:**
   - ❌ `// Handle button click`
   - ❌ `// Return user if found`
   - ❌ `// Set loading state to true`
   - ❌ `// Function to calculate total`
   - ❌ `// Render component`
   - ❌ `// Loop over items array`
   - *Rule:* If the code already states what it does (`setIsLoading(true)`), writing "set loading to true" is redundant noise.

2. **Zero Banners, ASCII Boxes, or Section Dividers:**
   - ❌ `// ========================================== `
   - ❌ `/* ----------------- HELPERS ----------------- */`
   - ❌ `// ****************************************** `
   - *Rule:* Zero multi-line decorative dividers. Code organization is achieved through files, functions, and semantic naming.

3. **Zero Emojis, Icons, or Graphic Symbols in Comments:**
   - ❌ `// 🚀 Send request to server`
   - ❌ `// ✨ Update UI with results`
   - ❌ `// ⚡ Fast calculation`
   - ❌ `// ➔ Handle state transition`
   - ❌ `// ✦ Main initialization block`
   - *Rule:* Zero emojis or Unicode decoration (`⚡`, `➔`, `✦`, `★`, `▶`, `■`, `●`) in source code comments. Professional code is sober and technical.

4. **Zero Generic AI Mock Data:**
   - ❌ Never use *"John Doe"*, *"Jane Smith"*, or arbitrary *"Lorem ipsum"* blocks. Use authentic contextual data aligned with the project domain.

5. **Zero Phantom Event Handlers:**
   - ❌ Never ship non-functional interactive elements with `onClick={() => console.log('click')}` or placeholder alerts. Use functional navigation anchors or real state handlers.

6. **Zero Inaccessible Div-Soup:**
   - ❌ Never use `<div onClick=...>` without `role="button"`, keyboard handling, and proper focus management.
   - ✅ Always use semantic HTML elements (`<button>`, `<a>`, `<nav>`, `<main>`, `<article>`) with accessible labels (`aria-label`) and descriptive image `alt` attributes.

---

### ✅ The Required Standard: Direct, Purpose-Driven Comments

1. **Explain the "Why", Never the "What":**
   - Comment solely when there is a non-obvious engineering decision, a browser-specific quirk, a layout compensation, or a specialized business rule.

2. **Single-Line, Minimal, and Surgical:**
   - Keep comments to a single concise line, free of conversational filler.

#### Comparison: Incorrect vs. Correct

```typescript
// ❌ INCORRECT: Redundant, decorated, and obvious
// ===================================================
// Function that calculates the discounted price
// ===================================================
function getDiscount(price: number, code: string) {
  // Check if coupon exists
  if (!code) return price;
  // Return discounted value
  return price * 0.9;
}

// ✅ CORRECT: Self-explanatory code without unnecessary noise
function getDiscount(price: number, code: string) {
  if (!code) return price;
  return price * 0.9;
}

// ✅ CORRECT: Concise explanation of non-obvious rationale
// Compensates for fixed header offset on Safari iOS viewport resize
const scrollMargin = isIOS ? 72 : 0;

// Prevents canvas context reinitialization during React StrictMode remounts
if (rendererRef.current) return;
```

---

## PRE-DELIVERY VERIFICATION CHECKLIST

Before completing any frontend task or submitting code, verify each item:
- [ ] Are there decorative brackets `[ ]` in text, badges, or kickers? -> **Remove.**
- [ ] Are there double slashes `//` or decorative dashes in titles? -> **Remove.**
- [ ] Are there floating dots `·`, bullet points (`•`, `&bull;`), or circular status/indicator dots next to buttons or labels? -> **Remove.**
- [ ] Are there fake telemetry metrics or sci-fi status indicators? -> **Remove.**
- [ ] Are there vertical left lines (`border-left`) beside text blocks? -> **Remove.**
- [ ] Are there decorative icon crutches inside lists or cards? -> **Remove.**
- [ ] Is there generic AI marketing copy ("Empowering...", "Get Started / Learn More")? -> **Rewrite with tangible value.**
- [ ] Are there formulaic 3-column pricing cards, marquees, or fake logos? -> **Remove.**
- [ ] Are there emojis, icons, or symbols in code comments? -> **Remove.**
- [ ] Are code comments concise, single-line, and strictly explaining the non-obvious "why"? -> **Refine.**
- [ ] Does the primary H1 headline breathe in an ultra-wide container in 2 to 3 lines? -> **Verify.**
- [ ] Does the code use native semantic HTML with proper accessibility attributes? -> **Verify.**
- [ ] Does the layout preserve grid integrity and scroll smoothly without runtime errors? -> **Verify.**
