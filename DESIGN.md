---
name: Nocturna
description: An illustrated midnight bestiary for a short Romanian fantasy personality quiz.
colors:
  charcoal: "#171719"
  panel: "#211e1c"
  panel-deep: "#1b1a1a"
  answer-surface: "#252120"
  answer-selected: "#3b2e27"
  copper: "#b89578"
  primary-fill: "#bd9b7d"
  copper-light: "#e2bb95"
  running-gold: "#dfb76f"
  focus-ring: "#e9c6a3"
  button-surface: "#292321"
  progress-track: "#2e2927"
  answer-text: "#dfc8af"
  text: "#e7d2b9"
  text-muted: "#b49b88"
  red-trait: "#a9514a"
  blue-trait: "#5b839a"
  green-trait: "#63856c"
typography:
  display:
    fontFamily: "MedievalSharp, Georgia, serif"
    fontSize: "clamp(57px, 8vw, 96px)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: ".08em"
  headline:
    fontFamily: "MedievalSharp, Georgia, serif"
    fontSize: "clamp(43px, 4.5vw, 64px)"
    fontWeight: 400
    lineHeight: 1.08
  question:
    fontFamily: "MedievalSharp, Georgia, serif"
    fontSize: "clamp(35px, 4.1vw, 51px)"
    fontWeight: 400
    lineHeight: 1.16
  body:
    fontFamily: "MedievalSharp, Georgia, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.45
  button:
    fontFamily: "MedievalSharp, Georgia, serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: ".025em"
  label:
    fontFamily: "MedievalSharp, Georgia, serif"
    fontSize: "15px"
    fontWeight: 400
    letterSpacing: ".04em"
  match:
    fontFamily: "MedievalSharp, Georgia, serif"
    fontSize: "clamp(63px, 7vw, 98px)"
    fontWeight: 400
    lineHeight: 1
rounded:
  frame: "0"
  button: "0"
spacing:
  tight: "12px"
  regular: "18px"
  action: "24px"
  section: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary-fill}"
    textColor: "{colors.charcoal}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "0 24px"
    height: "56px"
  button-secondary:
    backgroundColor: "{colors.button-surface}"
    textColor: "{colors.text}"
    typography: "{typography.button}"
    rounded: "{rounded.button}"
    padding: "0 24px"
    height: "56px"
  answer:
    backgroundColor: "{colors.answer-surface}"
    textColor: "{colors.answer-text}"
    typography: "{typography.body}"
    rounded: "{rounded.frame}"
    padding: "12px 18px"
    height: "70px"
  answer-selected:
    backgroundColor: "{colors.answer-selected}"
    textColor: "{colors.answer-text}"
    typography: "{typography.body}"
    rounded: "{rounded.frame}"
    padding: "12px 18px"
    height: "70px"
  framed-panel:
    textColor: "{colors.text}"
    rounded: "{rounded.frame}"
    padding: "32px"
  quiz-progress:
    backgroundColor: "{colors.progress-track}"
    rounded: "{rounded.frame}"
    height: "10px"
  match-percentage:
    textColor: "{colors.copper-light}"
    typography: "{typography.match}"
  related-card:
    textColor: "{colors.text}"
    rounded: "{rounded.frame}"
    padding: "10px"
---

# Design System: Nocturna

## Overview

**Creative North Star: "The Midnight Bestiary"**

Nocturna feels like opening a small illustrated fantasy bestiary after dark. Original creature portraits provide the spectacle; the interface acts as a restrained charcoal and copper frame around each choice and revelation. The visual language is game-like and ceremonial, but the interaction stays direct enough for a seven-minute quiz.

The same world spans the landing page, one-question-at-a-time quiz, and result. Fine copper borders, four extended square corners on each major frame, heraldic icons, and MedievalSharp connect those screens. Dense ornament lives at the edges and around milestones, leaving answer text and result stories easy to scan. A selected answer carries the only continuous animation: four clipped, gold-tipped gradients travel along its edges.

**Key Characteristics:**
- Original retro-fantasy creature portraits are the focal imagery.
- Charcoal surfaces and warm copper strokes establish the dark RPG mood.
- Four-corner copper frames repeat around portraits, quiz panels, and result panels.
- A selected answer shows a moving gold edge light, with a static border for reduced motion.
- Responsive layouts keep the answer path and result reading order simple.

## Colors

The palette is warm metal against near-black surfaces, with small red, blue, and green accents reserved for trait bars.

### Primary
- **Copper** (`colors.copper`): theme accent, frame highlights, ornaments, and progress accents. **Primary Fill** (`colors.primary-fill`) is the slightly lighter solid action surface.
- **Light Copper** (`colors.copper-light`): the prominent result percentage and other high-emphasis numerals.
- **Running Gold** (`colors.running-gold`): the gold end of each moving selected-answer edge gradient, which begins at the selected brown surface.
- **Focus Ring** (`colors.focus-ring`): a separate, light outline shown when the user navigates by keyboard.

### Secondary
- **Trait Red, Blue, and Green** (`colors.red-trait`, `colors.blue-trait`, `colors.green-trait`): alternating fills for measured traits on the result screen. They do not replace copper as the main accent.

### Neutral
- **Charcoal** (`colors.charcoal`): full-screen foundation and dark image backing.
- **Panel and Deep Panel** (`colors.panel`, `colors.panel-deep`): close tonal layers inside framed areas and letter tiles.
- **Answer Surface and Selected Surface** (`colors.answer-surface`, `colors.answer-selected`): distinct resting and chosen response states.
- **Button Surface and Answer Text** (`colors.button-surface`, `colors.answer-text`): the secondary action fill and warm answer lettering.
- **Progress Track** (`colors.progress-track`): the quiet base beneath quiz and trait fills.
- **Text and Muted Text** (`colors.text`, `colors.text-muted`): warm reading text and supporting copy.

**The Copper Hierarchy Rule.** Use copper for the primary action and decisive details; let muted text and frame edges handle supporting information.

## Typography

**Display Font:** MedievalSharp, with Georgia and serif fallbacks.  
**Body Font:** MedievalSharp, with the same fallbacks.  
The bundled MedievalSharp face is used at weight 400 throughout the implemented interface.

**Character:** The pointed fantasy letterforms make the product unmistakably nocturnal and playful. Scale, line height, and contrast create hierarchy without adding a second font family.

### Hierarchy
- **Display** (`typography.display`): the Nocturna masthead; wide tracking and a one-line silhouette.
- **Headline** (`typography.headline`): the landing-page invitation.
- **Question** (`typography.question`): centered quiz prompt inside the frame.
- **Body** (`typography.body`): answer labels and readable copy.
- **Button** (`typography.button`): compact action text with slight tracking.
- **Label** (`typography.label`): progress and other compact status information.
- **Match** (`typography.match`): the oversized result percentage.

**The One-Face Rule.** Keep the fantasy face across headings, choices, and controls; use size and spacing to distinguish their jobs.

## Layout

The landing and result pages use a maximum width of 1160px and a two-column artwork/text composition on desktop. The quiz is narrower at 860px, centering one framed question and five stacked answers. The answer gap is 12px; actions sit beneath the answers with clear separation. Result details form two columns, and the three related-creature cards form a row.

At 800px, the related cards stack. At 650px, the landing artwork and copy, result artwork and story, detail panels, and quiz actions become vertical. At 390px, the masthead, progress text, and answer letter tiles reduce in size. Screens retain generous outer padding, while the mobile quiz uses 18px horizontal padding.

**The Single Decision Rule.** Present one question at a time in one central frame; keep the five answers in a consistent vertical scan path.

## Elevation & Depth

Depth comes from tonal layers and the frame itself: a dark diagonal panel gradient, thin copper strokes, four extended square corners, and one soft outer shadow. The shell uses a subtle radial glow near the top. Controls stay visually flatter than the illustrated art and large panels.

### Shadow Vocabulary
- **Framed panel:** `0 18px 36px #0004`; use on the recurring RPG frame. Copper borders and corner extensions provide the structure.

## Shapes

Panels, answer rows, and buttons are square. Each large frame has four 0.5rem corner squares, with two thin strokes extending 2rem from each corner. Answer rows use a plain square border and contain the selected light within their edges. Buttons use top and bottom copper rules, plus a rotated 1.45rem ornament at each side with a nested outlined square and a filled inner square. Portraits are clipped into the frames; letter tiles are square.

**The Fine Frame Rule.** Place four separate square-and-line ornaments around important surfaces; keep their strokes thin and the surrounding charcoal space open.

## Components

### Buttons
- **Shape:** a square-ended control, at least 56px high, with 24px horizontal padding. Thin top and bottom rules meet rotated side ornaments built from nested outlined and filled squares.
- **Primary:** copper fill with dark lettering; the hover state lightens and rises 2px, while the disabled state dims and does not lift.
- **Secondary:** dark surface with warm text, top and bottom copper rules, and the same paired side ornaments as the primary action.
- **Focus:** a visible 2px light-copper outline, offset 4px, when the user is navigating by keyboard. The app reveals it after `keydown` and hides it after `pointerdown`.

### Cards / Containers
- **RPG frame:** a one-pixel copper border, four separate square corners with extended strokes, a dark gradient, and a soft outer shadow. It carries the main question, portrait, result feature, and detail panels.
- **Related-creature card:** a compact horizontal frame with a 90px square portrait and brief match metadata; it stacks with peers on smaller screens.

### Inputs / Fields
- **Answer choice:** the actual quiz input is a radio inside a full-width, at least 70px high row. Each row has a square border, letter tile, answer text, and small directional icon.
- **Selected state:** warms the surface, fills the letter tile with copper, and adds a subtle translucent sheen through `::before`. A clipped wrapper holds four 2px edge spans whose brown-to-gold gradients move with separate transform keyframes. Each takes 2 seconds; top and bottom start after 1 second, left and right after 2 seconds. The wrapper is displayed only on the selected answer.
- **Reduced motion and focus:** the moving wrapper disappears and a bright static gold border remains under `prefers-reduced-motion`. A 2px outline offset 4px marks keyboard focus only; `pointerdown` hides that ring and `keydown` reveals it.

**The Input Modality Rule.** Reveal focus outlines after `keydown` and hide them after `pointerdown`; selected-answer light remains a separate state.

### Progress and Results
- **Progress:** a square-ended 10px bar ahead of the quiz frame; result trait bars are 8px and use the reserved trait colors.
- **Result match:** the large percentage and creature story sit beside the portrait on desktop and below it on mobile.

## Do's and Don'ts

### Do:
- **Do** let the creature art remain the visual focal point and keep its frame thin.
- **Do** use the copper primary action consistently for advancing or sharing.
- **Do** preserve a single-column answer list and distinct selected, disabled, hover, and keyboard-only focus states.
- **Do** keep the selected-answer edge lights as the only continuous motion, and replace them with a static bright border under `prefers-reduced-motion`.

### Don't:
- **Don't** introduce rounded card shapes into the square-framed quiz and result surfaces.
- **Don't** use the red, blue, or green trait colors as competing page-level accents.
- **Don't** crowd the ornate frame with extra controls or decorative copy around the answer path.
