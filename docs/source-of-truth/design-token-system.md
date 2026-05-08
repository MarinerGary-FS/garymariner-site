# **DESIGN TOKEN SYSTEM.md**

## **GARYMARINER.COM — DESIGN TOKEN SYSTEM V1**

---

# **CORE THESIS**

The design token system is the:

# **executive infrastructure layer.**

Tokens are not just styling variables.

They are:

* atmosphere controls  
* pacing controls  
* authority controls  
* cinematic controls  
* environmental consistency systems

The token system ensures:  
every scene,  
component,  
interaction,  
and environment layer  
feels like part of the same intelligent ecosystem.

Without this system:  
the experience fragments.

---

# **TOKEN SYSTEM PRINCIPLES**

## **Principle 1 — Restraint Creates Luxury**

The system should avoid:

* excessive variation  
* random values  
* inconsistent spacing  
* chaotic color usage  
* animation inconsistency

A premium environment feels:  
disciplined.

---

## **Principle 2 — Cinematic Consistency**

Every token should support:

* editorial futurism  
* executive calm  
* infrastructural intelligence  
* atmospheric immersion

No token should feel:  
playful,  
trendy,  
or startup-generic.

---

## **Principle 3 — Performance Matters**

Visual sophistication should not create:  
render chaos.

Tokens should support:

* maintainability  
* scalability  
* performance optimization  
* motion consistency  
* responsive predictability

---

# **TOKEN STRUCTURE**

Recommended structure:

/lib/design-tokens.ts  
/styles/tokens.css

---

# **COLOR TOKEN SYSTEM**

## **COLOR PHILOSOPHY**

The palette should feel:

* executive  
* cinematic  
* infrastructural  
* intelligent  
* atmospheric

Avoid:

* oversaturated neon  
* crypto gradients  
* generic AI blue  
* trendy startup palettes

---

# **PRIMARY COLORS**

colors \= {  
  obsidian: "\#05070A",  
  graphite: "\#11151B",  
  carbon: "\#171C23",  
  steel: "\#242B35",  
  fog: "\#A8B0BC",  
  ivory: "\#F3F1EC",  
  softWhite: "\#E8E6E1"  
}

---

# **ENVIRONMENTAL COLORS**

Used for:

* atmosphere  
* ambient lighting  
* depth systems  
* environmental gradients

environment \= {  
  ambientBlue: "rgba(60, 100, 255, 0.08)",  
  ambientCyan: "rgba(0, 180, 255, 0.06)",  
  ambientGold: "rgba(180, 140, 60, 0.05)",  
  ambientCrimson: "rgba(140, 40, 40, 0.04)"  
}

These colors should:  
whisper,  
not scream.

---

# **ACCENT COLORS**

Accent colors are:  
rare and strategic.

accent \= {  
  sapphire: "\#5B7FFF",  
  cyan: "\#58C4DD",  
  gold: "\#B48A4F",  
  ember: "\#8F4D4D"  
}

Accent usage should remain:  
under 10–15% of total visual composition.

No rainbow nonsense.

---

# **GRADIENT TOKENS**

Gradients should feel:  
environmental,  
not decorative.

gradients \= {  
  atmosphericPrimary:  
    "linear-gradient(180deg, rgba(5,7,10,1) 0%, rgba(17,21,27,1) 100%)",

  atmosphericOverlay:  
    "radial-gradient(circle at top, rgba(91,127,255,0.10), transparent 60%)",

  ambientDepth:  
    "linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0))"  
}

Avoid:  
loud multi-color gradients.

---

# **TYPOGRAPHY TOKEN SYSTEM**

## **TYPOGRAPHY PHILOSOPHY**

Typography should feel:

* editorial  
* executive  
* cinematic  
* intelligent  
* timeless

Avoid:

* futuristic gimmick fonts  
* overly geometric startup fonts  
* sci-fi typography

---

# **FONT STACKS**

## **Display Font**

Should feel:  
strong,  
elegant,  
architectural.

Suggested direction:

fontDisplay \= "'Inter Tight', 'Neue Montreal', sans-serif"

Alternative elite directions:

* Satoshi  
* General Sans  
* Cabinet Grotesk

---

## **Editorial Font**

Should feel:  
readable,  
human,  
premium.

fontEditorial \= "'Inter', sans-serif"

Alternative:

* Manrope  
* Geist  
* Suisse Int’l if licensed

---

# **TYPOGRAPHY SCALE**

## **Display Scale**

display \= {  
  heroXL: "clamp(5rem, 10vw, 10rem)",  
  heroLarge: "clamp(4rem, 8vw, 7rem)",  
  heroMedium: "clamp(3rem, 6vw, 5rem)"  
}

---

## **Heading Scale**

headings \= {  
  h1: "clamp(3rem, 5vw, 5rem)",  
  h2: "clamp(2.25rem, 4vw, 4rem)",  
  h3: "clamp(1.75rem, 3vw, 2.5rem)"  
}

---

## **Editorial Scale**

editorial \= {  
  large: "1.25rem",  
  body: "1rem",  
  small: "0.9rem",  
  micro: "0.75rem"  
}

---

# **LINE HEIGHT TOKENS**

Typography should breathe.

lineHeight \= {  
  display: 0.95,  
  heading: 1.05,  
  editorial: 1.6,  
  compact: 1.3  
}

Avoid:  
compressed reading experiences.

---

# **LETTER SPACING TOKENS**

tracking \= {  
  tight: "-0.04em",  
  display: "-0.03em",  
  normal: "-0.01em",  
  editorial: "0em",  
  expanded: "0.08em"  
}

---

# **SPACING TOKEN SYSTEM**

## **SPACING PHILOSOPHY**

Spacing creates:  
authority.

Whitespace is:  
structural.

Avoid:  
tight layouts,  
compressed sections,  
SaaS density.

---

# **CORE SPACING SCALE**

spacing \= {  
  xs: "0.25rem",  
  sm: "0.5rem",  
  md: "1rem",  
  lg: "2rem",  
  xl: "4rem",  
  xxl: "6rem",  
  xxxl: "10rem",  
  cinematic: "14rem"  
}

---

# **SCENE SPACING**

sceneSpacing \= {  
  mobile: "8rem",  
  tablet: "10rem",  
  desktop: "14rem",  
  cinematic: "18rem"  
}

Scenes should feel:  
intentional and spacious.

---

# **GRID TOKEN SYSTEM**

## **GRID PHILOSOPHY**

Layouts should feel:  
editorial,  
asymmetric,  
cinematic.

Avoid:  
repetitive card-grid SaaS patterns.

---

# **GRID TOKENS**

grid \= {  
  contentMax: "1440px",  
  editorialMax: "760px",  
  cinematicMax: "1800px",  
  gutter: "clamp(1rem, 3vw, 4rem)"  
}

---

# **RADIUS TOKEN SYSTEM**

## **RADIUS PHILOSOPHY**

Corners should feel:  
soft,  
modern,  
premium.

Avoid:  
extreme roundness.

We are not building bubble UI.

---

# **RADIUS TOKENS**

radius \= {  
  sm: "8px",  
  md: "14px",  
  lg: "20px",  
  xl: "28px",  
  cinematic: "40px"  
}

---

# **SHADOW TOKEN SYSTEM**

## **SHADOW PHILOSOPHY**

Shadows should create:  
depth,  
not drama.

Avoid:  
harsh drop shadows.

---

# **SHADOW TOKENS**

shadows \= {  
  soft:  
    "0 10px 30px rgba(0,0,0,0.18)",

  medium:  
    "0 20px 60px rgba(0,0,0,0.24)",

  atmospheric:  
    "0 0 80px rgba(91,127,255,0.12)",

  cinematic:  
    "0 40px 120px rgba(0,0,0,0.35)"  
}

---

# **BLUR TOKEN SYSTEM**

## **BLUR PHILOSOPHY**

Blur should feel:  
environmental,  
not trendy.

Glassmorphism abuse is forbidden.

---

# **BLUR TOKENS**

blur \= {  
  subtle: "6px",  
  medium: "12px",  
  atmospheric: "20px",  
  cinematic: "40px"  
}

Use sparingly.

---

# **MOTION TOKEN SYSTEM**

## **MOTION PHILOSOPHY**

Motion should feel:  
calm,  
intelligent,  
weighted.

No hyperactive transitions.

---

# **DURATION TOKENS**

motionDuration \= {  
  instant: "120ms",  
  fast: "220ms",  
  standard: "450ms",  
  slow: "800ms",  
  cinematic: "1400ms",  
  atmospheric: "3000ms"  
}

---

# **EASING TOKENS**

easing \= {  
  smooth: "cubic-bezier(0.22, 1, 0.36, 1)",  
  cinematic: "cubic-bezier(0.16, 1, 0.3, 1)",  
  gentle: "cubic-bezier(0.25, 0.1, 0.25, 1)",  
  responsive: "cubic-bezier(0.4, 0, 0.2, 1)"  
}

No cartoon easing.

---

# **Z-INDEX TOKEN SYSTEM**

## **LAYER PHILOSOPHY**

Layering should feel:  
controlled and predictable.

---

# **Z-INDEX TOKENS**

zIndex \= {  
  background: 0,  
  environment: 10,  
  scene: 20,  
  content: 30,  
  interactive: 40,  
  nav: 50,  
  overlay: 60,  
  modal: 70,  
  debug: 100  
}

No z-index chaos.

---

# **OPACITY TOKEN SYSTEM**

## **OPACITY PHILOSOPHY**

Transparency should create:  
depth,  
not confusion.

---

# **OPACITY TOKENS**

opacity \= {  
  hidden: 0,  
  subtle: 0.08,  
  low: 0.18,  
  medium: 0.4,  
  strong: 0.72,  
  full: 1  
}

---

# **ENVIRONMENTAL TOKEN SYSTEM**

## **ENVIRONMENT PHILOSOPHY**

The site environment should feel:  
alive,  
not busy.

---

# **NOISE TOKENS**

noise \= {  
  subtle: 0.015,  
  medium: 0.03  
}

---

# **PARALLAX TOKENS**

parallax \= {  
  light: 10,  
  medium: 20,  
  atmospheric: 40  
}

Never extreme.

---

# **LIGHTING TOKENS**

lighting \= {  
  edgeGlow: "0 0 120px rgba(91,127,255,0.15)",  
  ambientGlow: "0 0 80px rgba(255,255,255,0.04)",  
  cinematicGlow: "0 0 160px rgba(0,0,0,0.4)"  
}

---

# **BREAKPOINT TOKEN SYSTEM**

breakpoints \= {  
  mobile: "360px",  
  tablet: "768px",  
  laptop: "1024px",  
  desktop: "1440px",  
  cinematic: "1800px"  
}

---

# **PERFORMANCE TOKENS**

## **PERFORMANCE PHILOSOPHY**

Executive feel depends on:  
speed.

---

# **PERFORMANCE TARGETS**

performance \= {  
  targetFPS: 60,  
  mobileMinimumFPS: 40,  
  maxInitialJS: "220kb",  
  maxHeroAsset: "350kb",  
  maxSceneTransition: "1400ms"  
}

---

# **REDUCED MOTION TOKENS**

reducedMotion \= {  
  disableParallax: true,  
  reduceAtmosphere: true,  
  simplifyTransitions: true,  
  keepOpacityTransitions: true  
}

Reduced motion should still feel:  
premium.

---

# **COMPONENT TOKEN RULES**

Every component must inherit tokens.

Never:  
hardcode spacing,  
colors,  
durations,  
shadows,  
or easing values.

That is how systems decay.

---

# **DESIGN TOKEN QUALITY GATES**

Every token must answer:

## **1\.**

Does this reinforce executive futurism?

## **2\.**

Does this support cinematic restraint?

## **3\.**

Does this avoid trendy startup aesthetics?

## **4\.**

Does this improve consistency?

## **5\.**

Does this support performance?

If not:  
remove it.

---

# **ABSOLUTE TOKEN BANS**

Do not introduce:

* rainbow gradients  
* neon overload  
* excessive blur  
* glassmorphism abuse  
* cartoon easing  
* giant border radii  
* ultra-thin unreadable typography  
* flashy hover colors  
* random spacing scales  
* generic AI blue saturation

That weakens authority immediately.

---

# **FINAL TOKEN SYSTEM STANDARD**

The token system is successful only if:

every scene,  
component,  
motion layer,  
environmental effect,  
and interaction  
feels like part of the same:

cinematic executive intelligence ecosystem built around systems transformation, infrastructural technology, and human-centered futurism.

