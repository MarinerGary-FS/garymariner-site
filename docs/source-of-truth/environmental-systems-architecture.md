# **ENVIRONMENTAL SYSTEMS ARCHITECTURE.md**

## **GARYMARINER.COM — ENVIRONMENTAL SYSTEMS ARCHITECTURE V1**

---

# **CORE THESIS**

The environment of GaryMariner.com is not decoration.

It is the invisible intelligence layer.

The environmental system must make the site feel:

* alive  
* cinematic  
* infrastructural  
* executive  
* immersive  
* intelligent  
* restrained

The environment should imply:

“There are systems operating beneath the surface.”

It must NEVER feel like:

* sci-fi wallpaper  
* AI cliché graphics  
* crypto glow  
* gamer UI  
* random particles  
* tech demo flexing

This is executive systems immersion.

Not a nightclub, Papi.

---

# **ENVIRONMENTAL PHILOSOPHY**

The environment should behave like:

# **intelligent infrastructure responding quietly to presence.**

It should support:

* atmosphere  
* hierarchy  
* emotional pacing  
* scene transition  
* dimensional depth  
* executive futurism

The visitor should feel:

“This space has depth.”

Not:

“This website has effects.”

That distinction is law.

---

# **ENVIRONMENTAL LAYER MODEL**

The site environment should be built in layers.

Recommended hierarchy:

Layer 0 — Base Field  
Layer 1 — Atmospheric Gradient  
Layer 2 — Infrastructure Texture  
Layer 3 — Depth Grid  
Layer 4 — Light Events  
Layer 5 — Scene-Specific Environmental States  
Layer 6 — Optional WebGL / Shader Layer  
Layer 7 — Content Masking \+ Foreground Atmosphere

Each layer must be independently controllable.

No chaotic one-file visual soup.

---

# **LAYER 0 — BASE FIELD**

## **Purpose**

Creates the foundation of the visual world.

## **Visual Direction**

* obsidian  
* graphite  
* deep carbon  
* cinematic dark  
* not pure black

## **Requirements**

The base should:

* support contrast  
* create depth  
* avoid flatness  
* feel premium

## **Implementation**

Use CSS variables from `DESIGN_TOKEN_SYSTEM.md`.

Recommended:

background:  
  radial-gradient(circle at 50% 0%, rgba(91,127,255,0.08), transparent 45%),  
  linear-gradient(180deg, \#05070A 0%, \#11151B 100%);

Avoid:  
flat `#000`.

That is lazy.

---

# **LAYER 1 — ATMOSPHERIC GRADIENT**

## **Purpose**

Creates cinematic lighting and scene tone.

## **Behavior**

Should shift subtly between scenes.

## **Scene Mood Examples**

### **Scene 1 — Entry Into The System**

* cool blue atmospheric intelligence  
* subtle edge lighting  
* mysterious depth

### **Scene 2 — The Translator**

* slightly clearer graphite/blue balance  
* structure begins emerging

### **Scene 3 — Systems & Infrastructure**

* deeper sapphire/cyan logic  
* operational energy

### **Scene 4 — Human-Centered Transformation**

* warmer undertones  
* restrained gold/crimson warmth  
* humanity enters the environment

### **Scene 5 — Ecosystem**

* layered multi-node lighting  
* connected atmosphere

### **Scene 6 — Controlled Invitation**

* calmer, reduced lighting  
* environmental resolution

## **Implementation**

Use CSS gradients and CSS variables first.

Only use shader gradients if CSS cannot achieve the emotional effect.

---

# **LAYER 2 — INFRASTRUCTURE TEXTURE**

## **Purpose**

Suggests invisible systems without becoming literal.

## **Acceptable Visual Patterns**

* subtle line systems  
* faint orbital paths  
* low-opacity grid logic  
* delicate connection paths  
* structured noise  
* dimensional mesh  
* abstract architecture lines

## **Unacceptable Visual Patterns**

* neural network clichés  
* glowing brain visuals  
* circuit boards  
* code rain  
* fake cyber HUDs  
* random constellation spam  
* Tron grids

We are not selling a budget AI course.

---

# **LAYER 3 — DEPTH GRID**

## **Purpose**

Creates dimensional structure and spatial intelligence.

## **Behavior**

Should be:

* barely visible  
* perspective-aware  
* slow-moving or scroll-reactive  
* low opacity

## **Implementation Options**

Preferred:

* CSS background grids  
* SVG patterns  
* canvas if necessary

Use Three.js only if:

* CSS/SVG cannot achieve required depth  
* performance remains strong  
* fallback exists

## **Rule**

The grid must be felt more than seen.

---

# **LAYER 4 — LIGHT EVENTS**

## **Purpose**

Light events create momentary emphasis during:

* scene entry  
* node activation  
* CTA reveal  
* environmental transitions

## **Examples**

* edge glow intensifies slightly on scene transition  
* ecosystem node emits subtle pathway light  
* typography reveal creates gentle light bloom  
* controlled invitation scene softens into calm glow

## **Restrictions**

No pulsing glow spam.

No neon breathing buttons.

No “look at me” lighting.

Light should behave like:  
cinematic atmosphere,  
not marketing decoration.

---

# **LAYER 5 — SCENE-SPECIFIC ENVIRONMENTAL STATES**

Each scene should be allowed to influence:

* gradient angle  
* lighting intensity  
* texture opacity  
* depth movement  
* environmental warmth  
* infrastructure visibility

Recommended config:

export const sceneEnvironmentConfig \= {  
  entry: {  
    mood: "mysterious",  
    gradient: "cool",  
    infrastructureOpacity: 0.18,  
    depthIntensity: 0.4,  
    motionIntensity: 0.35  
  },  
  translator: {  
    mood: "clarifying",  
    gradient: "structuredBlue",  
    infrastructureOpacity: 0.24,  
    depthIntensity: 0.45,  
    motionIntensity: 0.4  
  },  
  systems: {  
    mood: "operational",  
    gradient: "sapphireCyan",  
    infrastructureOpacity: 0.28,  
    depthIntensity: 0.55,  
    motionIntensity: 0.5  
  },  
  human: {  
    mood: "grounded",  
    gradient: "warmObsidian",  
    infrastructureOpacity: 0.12,  
    depthIntensity: 0.25,  
    motionIntensity: 0.2  
  },  
  ecosystem: {  
    mood: "expanded",  
    gradient: "networked",  
    infrastructureOpacity: 0.22,  
    depthIntensity: 0.5,  
    motionIntensity: 0.45  
  },  
  invitation: {  
    mood: "resolved",  
    gradient: "calm",  
    infrastructureOpacity: 0.1,  
    depthIntensity: 0.2,  
    motionIntensity: 0.15  
  }  
}

---

# **LAYER 6 — OPTIONAL WEBGL / SHADER LAYER**

## **Approved Use**

WebGL may be used only for:

* atmospheric depth  
* subtle infrastructure field  
* slow shader gradient  
* spatial environmental distortion  
* dimensional background

## **Forbidden Use**

Do NOT use WebGL for:

* spinning 3D objects  
* literal AI avatars  
* robot heads  
* animated brains  
* particle storms  
* flashy hero gimmicks  
* game-like interactions

This is not a demo reel.

---

# **WEBGL IMPLEMENTATION RULES**

If used, WebGL must be:

* dynamically imported  
* non-blocking  
* visually subtle  
* disabled or simplified on low-power devices  
* disabled in reduced-motion mode  
* never required for comprehension

Fallback must still feel premium.

Recommended strategy:

Desktop high-capability:  
  WebGL subtle environment enabled

Tablet / mid-capability:  
  CSS/SVG environment only

Mobile / low-capability:  
  static atmospheric layers \+ minimal motion

Reduced motion:  
  static cinematic composition

---

# **ENVIRONMENT COMPONENT STRUCTURE**

Recommended components:

/components/environment  
  AmbientBackground.tsx  
  AtmosphericGradient.tsx  
  InfrastructureTexture.tsx  
  DepthGrid.tsx  
  LightEventLayer.tsx  
  SceneEnvironmentController.tsx  
  WebGLEnvironment.tsx  
  StaticEnvironmentFallback.tsx

---

# **COMPONENT RESPONSIBILITIES**

## **AmbientBackground.tsx**

Owns:

* base field  
* persistent atmospheric container  
* global z-index

## **AtmosphericGradient.tsx**

Owns:

* gradient transitions  
* scene mood shifts  
* lighting warmth/coolness

## **InfrastructureTexture.tsx**

Owns:

* abstract system lines  
* low-opacity mesh  
* infrastructural texture

## **DepthGrid.tsx**

Owns:

* perspective structure  
* scroll-reactive depth  
* spatial grounding

## **LightEventLayer.tsx**

Owns:

* brief lighting emphasis  
* node/CTA activation glow  
* scene transition lighting

## **SceneEnvironmentController.tsx**

Owns:

* current scene environment state  
* intensity control  
* device capability adaptation

## **WebGLEnvironment.tsx**

Owns:

* optional immersive shader/canvas layer  
* desktop-only enhancement  
* fallback handoff

## **StaticEnvironmentFallback.tsx**

Owns:

* non-WebGL environmental styling  
* reduced-motion states  
* mobile simplification

---

# **ENVIRONMENT STATE MANAGEMENT**

Use a lightweight state strategy.

Potential:

* React context  
* Zustand only if complexity demands it  
* config-driven state mapping

Avoid:  
overengineering.

Environment state should track:

currentScene  
motionIntensity  
deviceCapability  
reducedMotion  
activeNode  
lightEvent

---

# **SCROLL-BASED ENVIRONMENT BEHAVIOR**

Scroll should influence:

* lighting intensity  
* gradient position  
* depth shift  
* infrastructure reveal  
* scene state

Scroll should NOT:

* hijack the page  
* overload animation  
* make content unreadable  
* trigger constant heavy re-renders

Use:

* GSAP ScrollTrigger selectively  
* IntersectionObserver for scene state  
* CSS transitions where possible

---

# **INTERACTION-BASED ENVIRONMENT BEHAVIOR**

Interactions may trigger:

* slight light shift  
* node pathway reveal  
* depth emphasis  
* contextual atmospheric response

Example:  
Hovering over “Mariner Nexus” node:

* subtle sapphire edge light  
* pathway line becomes visible  
* node context reveals

Hovering over “Undugu” node:

* warmer undertone  
* human-centered atmosphere  
* softer texture

Media node:

* waveform-like atmospheric hint  
* no loud player behavior

---

# **SCENE ENVIRONMENT SPECIFICATIONS**

---

## **SCENE 1 — ENTRY INTO THE SYSTEM**

Environment should feel:  
like an intelligent system coming online.

Visual behavior:

* cool ambient lighting  
* slow atmospheric depth  
* faint infrastructure texture  
* subtle awakening motion

Intensity:  
medium-low.

Goal:  
intrigue.

---

## **SCENE 2 — THE TRANSLATOR**

Environment should feel:  
like complexity becoming organized.

Visual behavior:

* lines align  
* pathways clarify  
* light becomes more structured  
* directional composition emerges

Goal:  
intellectual engagement.

---

## **SCENE 3 — SYSTEMS & INFRASTRUCTURE**

Environment should feel:  
operational and deep.

Visual behavior:

* strongest infrastructure presence  
* layered system texture  
* spatial depth  
* subtle modular activation

Goal:  
executive trust.

Warning:  
This is where overdesign will try to sneak in wearing cologne. Slap it.

---

## **SCENE 4 — HUMAN-CENTERED TRANSFORMATION**

Environment should feel:  
warmer,  
slower,  
more grounded.

Visual behavior:

* reduced infrastructure opacity  
* warmer light notes  
* softer motion  
* documentary atmosphere

Goal:  
human trust.

---

## **SCENE 5 — THE ECOSYSTEM**

Environment should feel:  
expanded and interconnected.

Visual behavior:

* node pathways  
* spatial relationship hints  
* multi-directional depth  
* network atmosphere

Goal:  
ecosystem gravity.

---

## **SCENE 6 — CONTROLLED INVITATION**

Environment should feel:  
resolved.

Visual behavior:

* reduced motion  
* calm lighting  
* open space  
* softened infrastructure

Goal:  
strategic alignment.

---

# **ENVIRONMENTAL MOTION RULES**

Approved:

* slow gradient drift  
* low-opacity texture movement  
* scroll-based depth shift  
* subtle pathway activation  
* calm light transitions

Banned:

* constant particle storms  
* fast-moving backgrounds  
* animated circuit boards  
* excessive neon glow  
* cursor trails  
* loud 3D movement  
* scroll hijacking

---

# **PERFORMANCE RULES**

Environmental systems must be cheap unless truly justified.

Requirements:

* CSS first  
* SVG second  
* Canvas/WebGL only when necessary  
* lazy load heavy layers  
* pause background animation when tab inactive  
* reduce motion on mobile  
* disable expensive effects on low-power devices  
* avoid continuous React state updates for animation

Use refs and external animation timelines where appropriate.

Do not re-render the kingdom every time a gradient breathes.

---

# **ACCESSIBILITY RULES**

Environment must never:

* reduce readability  
* hide content  
* create motion sickness  
* flash rapidly  
* require animation to understand meaning

Required:

* prefers-reduced-motion handling  
* sufficient text contrast  
* static fallback  
* no essential hover-only content  
* no visual overload around reading areas

---

# **RESPONSIVE ENVIRONMENT RULES**

## **Desktop**

Can support:

* full atmospheric layer stack  
* subtle WebGL enhancement  
* richer depth  
* scene-aware transitions

## **Tablet**

Use:

* CSS/SVG atmosphere  
* reduced depth  
* lighter motion

## **Mobile**

Use:

* static gradients  
* minimal texture  
* no heavy parallax  
* no WebGL by default  
* strong typography-first atmosphere

Mobile must feel intentional,  
not stripped.

---

# **QUALITY GATES**

Every environmental layer must pass:

## **Strategic Gate**

Does it reinforce executive systems immersion?

## **Visual Gate**

Does it feel premium and restrained?

## **Motion Gate**

Does movement feel intelligent?

## **Performance Gate**

Is it lightweight enough?

## **Accessibility Gate**

Can users read and navigate comfortably?

If not:  
cut it.

No mercy.

---

# **FINAL ENVIRONMENT STANDARD**

The environmental system is successful only if the visitor feels:

“This site has intelligence beneath the surface.”

Not:

“This site has animated backgrounds.”

The environment must create:  
presence,  
depth,  
and systems-level atmosphere  
while allowing Gary’s executive authority to remain the center of gravity.

