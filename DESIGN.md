---
name: Rubinowe
description: One ruby sheet, folded once, cut with precision.
colors:
  paper: "#fbfbf9"
  ruby: "#e30613"
  ruby-deep: "#9e0a16"
  ink: "#1a0d10"
  ink-soft: "#4b3539"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.2rem + 4.1vw, 5.75rem)"
    fontWeight: 800
    lineHeight: 0.93
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 88"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 3.6vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 88"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.625rem, 1.2rem + 1.3vw, 2.375rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 88"
  address:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1rem + 1.7vw, 2.625rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.03em"
    fontVariation: "\"wdth\" 88"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  lead:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.95rem + 0.4vw, 1.3125rem)"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.6
rounded:
  tab: "2px"
spacing:
  gutter: "clamp(20px, 4.5vw, 64px)"
  section: "clamp(64px, 7vw, 112px)"
  nav-h: "76px"
components:
  nav-link:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    padding: "6px 0"
  nav-link-hover:
    textColor: "{colors.ruby-deep}"
  lang-tab:
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.tab}"
    padding: "0 8px"
    height: "36px"
  lang-tab-current:
    backgroundColor: "{colors.ruby}"
    textColor: "{colors.paper}"
    rounded: "{rounded.tab}"
  email-link:
    textColor: "{colors.ruby}"
    typography: "{typography.address}"
  email-link-hover:
    textColor: "{colors.ruby-deep}"
  contact-sheet:
    backgroundColor: "{colors.ruby}"
    textColor: "{colors.paper}"
    padding: "calc(var(--section) * 0.9) var(--gutter) var(--section)"
  footer:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    padding: "28px var(--gutter)"
---

# Design System: Rubinowe

## Overview

**Creative North Star: "The Folded Wycinanka"**

Rubinowe is one sheet of ruby paper, folded once along a vertical axis and cut with precision. Every ornament is a mirror-symmetric papercut (rosette, tree, ladder, birds, lattice) whose cuts are drawn from code glyphs: braces, angle brackets, square brackets. The cut is exact and geometric, never folk-soft. The page around the art is plain white paper with heavy, tight grotesque headlines and a calm workhorse body; the papercut carries the voice, the type carries the facts.

Depth is physical, not tonal. Paper lies on paper and casts a real shadow, cuts are real holes the shadow falls through, and state is shown by form (folded, cut, flat) rather than by a new hue. The signature behaviour is the fold: each papercut opens from its folded right half along the mirror axis, on load for the hero and driven by scroll for every other section, settling flat with critical damping and no overshoot. The last section is the same sheet reversed: drenched ruby with a scalloped top edge and a white-paper rosette cut into it.

Density is low and the rhythm generous. Sections breathe on a fluid section unit, copy columns stay narrow (34 to 44ch), and composition is asymmetric except where the fold demands mirroring.

**Key Characteristics:**
- Four flat inks only: paper, ruby, deep ruby, ink (plus a soft ink for secondary text).
- Papercut art built from code glyphs, mirror-symmetric about x = 0, folded at the axis.
- Real cast shadows between paper layers; no tonal shading, no gradients in the art.
- Display set heavy and narrow (Bricolage Grotesque 800, wdth 88, negative tracking).
- Dotted perforation lines are the only rules.
- One motion curve, critically damped: cubic-bezier(0.16, 1, 0.3, 1).

## Colors

A two-paper world: white paper and ruby paper, with ink for words and a deeper ruby only where paper sits beneath paper.

### Primary
- **Rubinowe Ruby** (ruby): the top paper layer of every papercut, the primary action (the email address), the hover underline bar, the current-language tab, the scrollbar thumb, text selection, and the whole contact sheet. Matches the logo gem; it is the brand.

### Secondary
- **Under-Layer Ruby** (ruby-deep): the second paper layer seen through and beneath cuts, and the hover colour for ruby and ink links. Also the services subtitle. Never a fill for large surfaces.

### Neutral
- **White Paper** (paper): the page ground, nav strip, text on ruby and ink, and the top layer of the reversed contact rosette.
- **Ink** (ink): headlines, body text, focus outlines, the footer slab, the skip link.
- **Soft Ink** (ink-soft): lead and supporting paragraphs only. A text colour, never an art colour.

### Named Rules
**The Two Papers Rule.** Art uses exactly two paper colours per surface: a top layer and an under layer (ruby over deep ruby on white; white paper over deep ruby on the contact sheet). No midtones, no tints, no gradients inside a papercut.

**The Reversal Rule.** On a ruby ground the sheet reverses: the top paper becomes white and the under layer stays deep ruby. Achieve it by setting `--cut-top` and `--cut-under` on the art container, never by redrawing the motif.

**The Hard-Stop Rule.** CSS gradient functions appear only as hard-edged devices: punched holes, perforation dots, the solid underline bar. A gradient that blends one colour into another is outside the world.

## Typography

**Display Font:** Bricolage Grotesque (with system-ui, sans-serif), variable, opsz and wdth axes loaded, set at wdth 88
**Body Font:** Hanken Grotesk (with system-ui, sans-serif)

**Character:** A heavy, slightly condensed grotesque with negative tracking reads like letters cut from the same sheet; the body grotesque stays plain and quiet so the papercuts own the ornament.

### Hierarchy
- **Display** (800, clamp 2.75rem to 5.75rem, 0.93): the hero H1 only, bottom-left of the first viewport.
- **Headline** (800, clamp 2.5rem to 5rem, 0.98): section H2s. The contact H2 goes larger (clamp 3.25rem to 6rem, tracking -0.04em) as the closing statement.
- **Title** (800, clamp 1.625rem to 2.375rem, 1.05): H3s. Section variants scale it locally (why rows to 2.125rem, how-we-work steps to 3.5rem at line-height 0.98).
- **Address** (800, clamp 1.5rem to 2.625rem, 1.1): the email address as primary action, set in the display face. The contact version is 700 weight and grows to 5rem.
- **Body** (400, 1.0625rem, 1.6): running text; supporting paragraphs at 1.125rem in soft ink, 38 to 44ch.
- **Lead** (400, clamp 1.0625rem to 1.3125rem, 1.6): hero and services lead, soft ink, max 44ch.
- **Label** (600, 0.9375rem): nav links, language tabs, footer.
- **Subtitle** (Bricolage 600, clamp 1.25rem to 1.75rem, -0.015em, deep ruby): a line that follows a headline and completes it; it sits below, never above.

### Named Rules
**The Cut Letter Rule.** Every display-face setting uses weight 700 to 800, `font-variation-settings: "wdth" 88`, and negative tracking (-0.025em to -0.04em). Headlines use `text-wrap: balance`, paragraphs `text-wrap: pretty`.

**The Address Is The Button Rule.** The primary action is the email address itself, set in the display face with a thick underline. There are no filled buttons.

## Layout

Full-bleed sections with a fluid side gutter (gutter token) and a fluid vertical section unit (section token). Content caps between 1320px and 1500px depending on section. Grids are asymmetric fractional splits: hero 5fr/6fr with the art bleeding past the right gutter (width up to 118%, margin-right of -1.6 gutters), services head 6fr/5fr, why 4fr/7fr with a sticky headline, contact 7fr/5fr.

Where content is two-sided, it mirrors across the fold: services is a three-column sheet (left text right-aligned, tree in the middle at clamp 220px to 420px, right text left-aligned). How-we-work alternates art left and art right per step.

The nav is a sticky paper strip 76px tall (112px on narrow screens, where links wrap to a second row); anchor scroll respects it via `scroll-padding-top`. Breakpoints: 860px collapses every two-column grid to one column with art first; 760px collapses the nav and how-we-work; 600px stacks the footer.

## Elevation & Depth

A hybrid of flat colour and physical shadow. Nothing is shaded tonally; depth comes only from paper casting onto paper, always in a warm ruby-black (rgb 90 0 16) rather than neutral grey. Shadows are soft and offset downward, as from overhead light.

### Shadow Vocabulary
- **Top paper** (`filter: drop-shadow(0 7px 7px rgb(90 0 16 / 0.32))`): the top layer of every papercut, falling through its cuts onto the under layer.
- **Under paper** (`filter: drop-shadow(0 3px 3px rgb(90 0 16 / 0.25))`): the deep ruby layer onto the ground.
- **Paper tab** (`box-shadow: 0 10px 22px -8px rgb(90 0 16 / 0.35), 0 2px 4px rgb(90 0 16 / 0.18)`): a small piece of ruby paper lying on the page, used for the current-language tab.
- **Header strip** (`box-shadow: 0 8px 14px -10px rgb(90 0 16 / 0.28)`): the sticky nav cast along its whole lower edge.
- **Contact sheet** (`filter: drop-shadow(0 -6px 10px rgb(90 0 16 / 0.22))`): the ruby sheet casting upward over the white page, following the scalloped edge.

### Named Rules
**The Real Paper Rule.** A shadow exists only where one paper lies over another. It is soft, warm (rgb 90 0 16), and offset in the direction of the overlap; never a hard offset block, never a glow.

**The Folding Shade Rule.** While a flap is mid-fold it darkens (brightness 0.82 to 0.7) and returns to 1 when flat. This is transient light on moving paper, not a static midtone.

## Shapes

Paper edges are hard and exact. Rectangles are square-cornered; the only radius is a 2px softening on the language tab and focus outline. Organic form lives in the papercuts (petals, scallops, round punched holes) and in the contact sheet's scalloped top edge (22px radius half-circles on a 44px repeat), with a row of 5px punched holes 30px below it.

Papercut cuts are SVG masks, so they are real holes: shadows and the ground show through. Cut strokes use round caps and joins. Each motif is drawn whole and mirror-symmetric about x = 0; the fold component clips each half exactly at the axis (`clip-path` inset of -0.5px at the axis side, -25% elsewhere so outer shadows stay free).

Rules are dotted perforations only: 1.5px dots on an 11px repeat in ink at 35 to 45% alpha, under the nav and between the "why" rows.

## Components

### Navigation
Paper strip, quiet and exact.
- **Style:** sticky, white paper, header-strip shadow, perforated line 6px above the bottom edge inset by the gutter. Logo left at 44px tall (36px narrow).
- **Links:** Label type in ink, no underline at rest. Hover draws a 2px ruby bar in from the left (0.4s, settle curve) and shifts text to deep ruby.
- **Language tabs:** PL / EN, 40px min width, 36px tall. Current language is a ruby paper tab with white text and the paper-tab shadow; others shift to deep ruby on hover.
- **Mobile:** links wrap to a full-width second row with 22px gaps.

### Email link (primary action)
The address set as a display headline.
- **Style:** display face 800, ruby, underline 0.07em at 0.18em offset, followed by an inline SVG arrow (stroke 2.4, round caps) at 0.9em.
- **Hover:** deep ruby, underline thickens to 0.12em, arrow nudges 0.2em right (0.35s, settle curve).
- **Contact variant:** white on ruby, weight 700, up to 5rem; hover thickens the underline to 0.12em and tightens the offset.

### Perforated list
- **Style:** rows separated by dotted perforation at the top (and bottom of the last row); each row a 5fr/6fr grid of H3 and soft-ink paragraph; generous vertical padding (clamp 26px to 40px). Single column below 860px.

### Contact sheet
- **Style:** drenched ruby section, white text, scalloped top edge, punched-hole row, upward cast shadow. Its rosette uses the Reversal Rule. Focus outlines and selection invert to paper on ruby.

### Footer
- **Style:** solid ink slab, white Label text, legal name, tagline, and the email pushed right.

### The Fold (signature)
A papercut split into two SVG halves sharing one motif. The left half is fixed; the right half is the flap, hinged at its left edge with 2800px perspective.
- **Load trigger:** the hero unfolds once from rotateY(-180deg) to flat over 1.3s after 0.35s, on the settle curve.
- **Scroll trigger:** every other papercut scrubs open with a CSS view timeline (entry 15% to cover 48%). Without scroll-timeline support, an IntersectionObserver folds off-screen flaps shut and opens each at 35% visibility on the same 1.3s settle.
- **Default state is open:** without CSS or JS the paper is flat. Reduced motion removes all fold transforms and filters.
- **Motion:** one curve, `cubic-bezier(0.16, 1, 0.3, 1)`, critically damped. Paper never swings through its own ground.

## Do's and Don'ts

### Do:
- **Do** build every ornament as a mirror-symmetric papercut about x = 0, cut from code glyphs ({ } < > [ ]), with cuts as SVG mask holes.
- **Do** keep art to two paper layers per surface: top (ruby, or white paper on ruby) and under (deep ruby), switched only via `--cut-top` / `--cut-under`.
- **Do** cast shadows only where paper overlaps paper, in warm rgb(90 0 16) at 0.18 to 0.35 alpha.
- **Do** set the display face at 700 to 800, wdth 88, negative tracking.
- **Do** make the email address the primary action, set in the display face and underlined.
- **Do** separate list rows with dotted perforation lines (1.5px dots, 11px repeat).
- **Do** animate with cubic-bezier(0.16, 1, 0.3, 1) only, and leave every fold flat under reduced motion.

### Don't:
- **Don't** add midtones, tints, or colour-blending gradients to the art or surfaces; gradient functions are allowed only as hard-stop holes, dots, and bars.
- **Don't** use solid or hairline borders as dividers; perforation is the only rule.
- **Don't** use overshoot or spring easing on folds; paper settles flat.
- **Don't** use hard offset block shadows, glows, or neutral grey shadows.
- **Don't** use filled or pill buttons; actions are underlined text.
- **Don't** introduce colours beyond paper, ruby, deep ruby, ink, and soft ink.
- **Don't** let a fold half bleed past its axis; each half is clipped at the fold.
