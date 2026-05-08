# **EXPERIENCE IMPLEMENTATION BLUEPRINT.md**

## **GARYMARINER.COM — EXPERIENCE IMPLEMENTATION BLUEPRINT V1**

---

# **CORE BUILD DECISION**

GaryMariner.com will be built as:

# **Tier 2 — Executive Systems Immersion**

This means the site should feel:

* cinematic  
* immersive  
* executive  
* infrastructural  
* intelligent  
* editorial  
* technically elevated

WITHOUT becoming:

* a WebGL tech demo  
* a portfolio site  
* an AI gimmick experience  
* a heavy experimental art piece  
* a generic luxury landing page

The build must balance:

# **visual ambition \+ operational discipline.**

No bloated nonsense, Papi.

---

# **EXPERIENCE OBJECTIVE**

The website must create the feeling of:

entering an intelligent executive environment designed by someone who understands systems, people, technology, culture, and organizational transformation.

The site should make visitors believe:

“This is someone who can translate vision into intelligent execution.”

---

# **TECHNICAL EXPERIENCE THESIS**

The experience should be implemented as a layered cinematic system:

1. **Static executive editorial foundation**  
2. **Motion-enhanced scene architecture**  
3. **Environmental intelligence layer**  
4. **Selective immersive WebGL/Three.js layer**  
5. **Progressive enhancement for performance**  
6. **Mobile-specific cinematic adaptation**

The site must remain:

* fast  
* readable  
* accessible  
* maintainable  
* conversion-capable

Immersion must never damage usability.

---

# **APPROVED STACK DIRECTION**

## **Core Framework**

* Next.js App Router  
* React Server Components where appropriate  
* TypeScript  
* Tailwind CSS

## **UI Foundation**

* shadcn/ui only where useful  
* custom components preferred for signature experience  
* avoid generic component-library appearance

## **Motion Layer**

* Framer Motion for component-level reveals and interactions  
* GSAP for cinematic scroll choreography  
* ScrollTrigger only where it creates meaningful scene progression

## **Immersive Layer**

Use selectively:

* Three.js  
* React Three Fiber  
* lightweight shader backgrounds  
* CSS-based atmospheric layers when sufficient

Do NOT use WebGL everywhere.

WebGL must serve:

* environmental atmosphere  
* infrastructural intelligence  
* dimensional depth

NOT decorative spectacle.

## **Utility Layer**

* Lenis optional for smooth scrolling if performance remains strong  
* Zustand only if state complexity requires it  
* Next/Image for optimized imagery  
* Dynamic imports for heavy interactive modules

---

# **ARCHITECTURAL PRIORITY ORDER**

When implementation decisions conflict, follow this order:

1. Performance  
2. Executive clarity  
3. Visual sophistication  
4. Motion restraint  
5. Immersive depth  
6. Experimental interaction

If performance or clarity suffers:  
cut the effect.

Immediately.

---

# **PAGE STRUCTURE**

The homepage should be built as six cinematic scenes:

1. Entry Into The System  
2. The Translator  
3. Systems & Infrastructure  
4. Human-Centered Transformation  
5. The Ecosystem  
6. Controlled Invitation

Each scene should be:

* its own component  
* independently testable  
* motion-scoped  
* mobile-aware  
* progressively enhanced

Recommended structure:

/app  
  /page.tsx

/components  
  /experience  
    HomeExperience.tsx  
    SceneContainer.tsx  
    SceneNavigation.tsx

  /scenes  
    EntrySystemScene.tsx  
    TranslatorScene.tsx  
    SystemsInfrastructureScene.tsx  
    HumanTransformationScene.tsx  
    EcosystemScene.tsx  
    ControlledInvitationScene.tsx

  /motion  
    MotionProvider.tsx  
    ScrollOrchestrator.tsx  
    RevealText.tsx  
    ParallaxLayer.tsx  
    ReducedMotionFallback.tsx

  /environment  
    AmbientBackground.tsx  
    InfrastructureField.tsx  
    LightGradientLayer.tsx  
    NoiseTexture.tsx  
    DepthGrid.tsx

  /ecosystem  
    EcosystemNode.tsx  
    EcosystemMap.tsx  
    DirectionalGateway.tsx

  /media  
    ExecutiveMediaPreview.tsx  
    ThoughtFragment.tsx  
    PodcastSignal.tsx

/lib  
  animation-config.ts  
  scene-config.ts  
  ecosystem-config.ts  
  copy-system.ts  
  performance-utils.ts

---

# **GLOBAL LAYOUT SYSTEM**

## **Layout Philosophy**

The site must avoid generic section stacking.

Each scene should feel:

* authored  
* cinematic  
* spatial  
* intentional

Use:

* editorial grids  
* asymmetric layouts  
* large typography  
* layered environments  
* generous whitespace  
* controlled visual density

Avoid:

* card-heavy SaaS layouts  
* boxed sections  
* repetitive two-column patterns  
* template-looking grids

---

# **GLOBAL ENVIRONMENT LAYER**

The environment should persist across scenes.

It may evolve as the user scrolls.

The global environment should include:

## **1\. Ambient Lighting**

* subtle gradients  
* edge lighting  
* depth shadows  
* atmospheric glow

## **2\. Infrastructure Texture**

* soft grid logic  
* barely visible system lines  
* restrained environmental particles  
* subtle data-like movement

## **3\. Depth System**

* foreground  
* midground  
* background  
* atmospheric haze

## **4\. Noise / Grain**

* subtle cinematic texture  
* prevents flat digital look  
* must stay elegant

The environment should feel:  
alive,  
not busy.

---

# **SCENE IMPLEMENTATION RULES**

---

## **SCENE 1 — ENTRY INTO THE SYSTEM**

### **Technical Role**

Initial immersive impact.

### **Build Requirements**

* full viewport or near-full viewport  
* layered ambient background  
* bold editorial headline  
* minimal supporting copy  
* subtle environmental motion  
* scroll cue that does not feel basic

### **Motion**

* slow environment awakening  
* typography reveal through masking or opacity  
* depth parallax on scroll  
* no typewriter effect

### **Interaction**

* minimal interaction  
* focus on atmosphere and curiosity

### **Performance**

Scene 1 must load fast.

If using WebGL:

* dynamically import  
* provide CSS fallback  
* do not block LCP

---

## **SCENE 2 — THE TRANSLATOR**

### **Technical Role**

Introduce executive translation positioning.

### **Build Requirements**

* structured layout  
* abstract systems alignment visual  
* short copy fragments  
* no long bio text

### **Motion**

* node alignment  
* line/path reveals  
* text fragments appearing in sequence

### **Interaction**

Optional:

* hover/tap reveals showing translation pairs:  
  * executive intent → operational action  
  * vision → implementation  
  * AI potential → human adoption  
  * complexity → clarity

---

## **SCENE 3 — SYSTEMS & INFRASTRUCTURE**

### **Technical Role**

Deepest technology/operations scene.

### **Build Requirements**

* immersive but readable  
* infrastructure-inspired environment  
* layered content system  
* no fake dashboards

### **Motion**

* slow infrastructure activation  
* parallax depth  
* environmental responsiveness  
* modular reveals

### **Interaction**

Optional:

* system modules that reveal strategic principles  
* controlled hover/tap states  
* no overcomplicated interaction maze

### **Performance**

This is the most dangerous scene for bloat.

Keep it sharp.

---

## **SCENE 4 — HUMAN-CENTERED TRANSFORMATION**

### **Technical Role**

Reintroduce humanity.

### **Build Requirements**

* softer visual pacing  
* documentary-inspired imagery or atmospheric human texture  
* Undugu connection implied or lightly introduced  
* no nonprofit brochure energy

### **Motion**

* slower  
* softer fades  
* image mask reveals  
* reduced environmental activity

### **Interaction**

Minimal.

This scene should breathe.

---

## **SCENE 5 — THE ECOSYSTEM**

### **Technical Role**

Show the interconnected world.

### **Build Requirements**

* ecosystem node system  
* Mariner Nexus  
* Undugu  
* media / podcast  
* strategic collaboration pathway

### **Motion**

* node activation  
* spatial pathway reveals  
* relationship mapping

### **Interaction**

Each node should:

* reveal short contextual framing  
* route externally or internally  
* feel like a gateway, not a card

Avoid:  
logo dumping.

---

## **SCENE 6 — CONTROLLED INVITATION**

### **Technical Role**

Final conversion moment.

### **Build Requirements**

* minimal CTA  
* executive language  
* strategic invitation  
* no desperation

### **Motion**

* environmental settling  
* quiet reveal  
* subtle CTA interaction

### **Interaction**

Primary CTA:

* Begin a conversation  
* Explore alignment  
* Enter the ecosystem

Secondary CTA:

* Mariner Nexus  
* Media / Conversations  
* Undugu

---

# **MOTION IMPLEMENTATION STRATEGY**

## **Framer Motion Use Cases**

Use for:

* component reveals  
* text transitions  
* hover states  
* CTA interactions  
* mobile-safe animations  
* simple scene content entrances

## **GSAP Use Cases**

Use for:

* complex scroll choreography  
* scene transitions  
* pinned moments only if necessary  
* environmental sequencing  
* advanced timeline control

## **CSS Use Cases**

Use for:

* simple hover states  
* color transitions  
* opacity shifts  
* subtle background motion  
* reduced-motion fallback

## **Do Not Overuse**

Do not use GSAP when CSS or Framer Motion is enough.

Do not use WebGL when CSS gradients can create the same emotional effect.

---

# **WEBGL / THREE.JS RULES**

WebGL is approved only for:

* subtle environmental atmosphere  
* infrastructure field  
* spatial depth  
* immersive background layer

WebGL is NOT approved for:

* gimmick 3D objects  
* spinning logos  
* literal AI brains  
* sci-fi interfaces  
* interaction-heavy games  
* unnecessary visual spectacle

## **WebGL Requirements**

* lazy load  
* fallback design  
* reduced-motion fallback  
* mobile performance guard  
* no blocking render  
* no dependency on WebGL for content comprehension

If WebGL fails:  
the site must still feel premium.

---

# **MOBILE IMPLEMENTATION STRATEGY**

Mobile must be designed intentionally.

Do NOT simply stack desktop.

Mobile should prioritize:

* cinematic typography  
* controlled scene pacing  
* reduced animation complexity  
* strong readability  
* thumb-friendly CTAs  
* lighter environment layers  
* no heavy parallax

Mobile experience should still feel:  
immersive,  
executive,  
and intentional.

---

# **RESPONSIVE BREAKPOINT PHILOSOPHY**

Design breakpoints around experience,  
not just screen size.

Suggested:

* mobile: 360–767  
* tablet: 768–1023  
* laptop: 1024–1439  
* desktop: 1440+  
* cinematic wide: 1800+

Large screens should gain:

* more atmospheric space  
* more composition depth

Small screens should gain:

* stronger sequencing  
* tighter copy hierarchy  
* less background complexity

---

# **PERFORMANCE BUDGET**

Mandatory targets:

## **Initial Load**

* fast LCP  
* no blocked hero content  
* optimized font loading  
* image priority only where justified

## **JavaScript**

* avoid loading full animation stack before needed  
* dynamic import WebGL modules  
* keep scene logic modular

## **Images**

* use next/image  
* compress aggressively  
* use modern formats  
* avoid oversized hero assets

## **Motion**

* GPU-friendly transforms  
* avoid layout-triggering animations  
* avoid excessive scroll listeners  
* debounce/throttle when needed

## **Embeds**

* no heavy podcast embeds on initial load  
* use preview cards first  
* load media only on interaction

---

# **ACCESSIBILITY REQUIREMENTS**

Required:

* semantic HTML  
* readable contrast  
* keyboard navigability  
* prefers-reduced-motion support  
* focus states  
* no hover-only critical information  
* no autoplay audio  
* no flashing effects  
* aria labels where needed

Reduced-motion mode should:

* preserve atmosphere through static composition  
* remove excessive transitions  
* keep content hierarchy intact

---

# **CONTENT IMPLEMENTATION RULES**

Copy should be stored cleanly.

Avoid scattering major copy across components.

Recommended:

/lib/copy-system.ts

This allows:

* easier refinement  
* consistent tone  
* future CMS migration  
* centralized editorial control

---

# **CONFIG-DRIVEN ARCHITECTURE**

Use config files for:

* scenes  
* ecosystem nodes  
* media previews  
* thought fragments  
* CTAs  
* animation timings

This prevents hardcoded chaos.

Recommended:

/lib/scene-config.ts  
/lib/ecosystem-config.ts  
/lib/media-config.ts  
/lib/animation-config.ts

---

# **DESIGN SYSTEM TOKENS**

Define tokens for:

* colors  
* typography scale  
* spacing  
* radius  
* shadows  
* motion durations  
* easing  
* z-index layers

Avoid random values across the site.

Executive systems need discipline.

---

# **Z-INDEX LAYERING SYSTEM**

Suggested:

background: 0  
environment: 10  
scene base: 20  
content: 30  
interactive elements: 40  
navigation: 50  
modal/overlay: 60  
debug/dev tools: 100

No chaotic z-index wars.

We are civilized.

---

# **NAVIGATION IMPLEMENTATION**

Navigation should be:

* minimal  
* scroll-aware  
* elegant  
* not dominant

Potential nav items:

* Intelligence  
* Ecosystem  
* Conversations  
* Connect

Avoid:

* About  
* Services  
* Portfolio  
* Testimonials

Too basic.

---

# **CTA IMPLEMENTATION**

CTAs should be:

* sparse  
* strategic  
* calm

Primary CTA behavior:

* subtle hover  
* arrow motion  
* border/light shift

CTA language:

* Begin a conversation  
* Explore alignment  
* Enter the ecosystem

Avoid:

* Book now  
* Get started  
* Free consultation

That smells like template funnel. Burn it.

---

# **MEDIA IMPLEMENTATION RULES**

Media should be:  
preview-first.

Do not embed heavy players immediately.

Use:

* curated preview cards  
* click-to-load embeds  
* lightweight external routing  
* editorial summaries

Podcast/media should reinforce:  
intellectual authority.

Not content creator energy.

---

# **IMAGE IMPLEMENTATION RULES**

Imagery should be:

* cinematic  
* intentional  
* optimized  
* editorial

Avoid:

* generic stock  
* cliché AI images  
* corporate boardroom stock  
* overused tech visuals

Image treatment:

* subtle grain  
* masked reveals  
* atmospheric overlays  
* restrained contrast  
* premium cropping

---

# **DEVELOPMENT SEQUENCE**

Build in phases.

## **Phase 1 — Foundation**

* design tokens  
* layout shell  
* typography system  
* global environment CSS  
* scene containers  
* config architecture

## **Phase 2 — Scene 1 Prototype**

* Entry Into The System  
* core motion language  
* atmospheric layer  
* responsive behavior  
* performance baseline

## **Phase 3 — Scene Expansion**

* Translator Scene  
* Systems Scene  
* Human Transformation Scene

## **Phase 4 — Ecosystem \+ Media**

* ecosystem nodes  
* podcast/media preview system  
* routing structure

## **Phase 5 — Conversion Layer**

* controlled invitation  
* contact flow  
* CTA refinement

## **Phase 6 — Polish \+ Performance**

* mobile optimization  
* reduced-motion mode  
* accessibility audit  
* Lighthouse checks  
* animation cleanup  
* dead code removal

---

# **QUALITY GATE CHECKLIST**

Before launch, every scene must pass:

## **Strategic Gate**

* Does this reinforce executive futurism?  
* Does this strengthen Gary’s authority?  
* Does this support intrigue and intellectual engagement?  
* Does this avoid portfolio/service-provider energy?

## **Visual Gate**

* Does it feel cinematic?  
* Does it feel premium?  
* Does it avoid AI clichés?  
* Does it avoid template patterns?

## **Motion Gate**

* Does motion serve psychology?  
* Is anything moving unnecessarily?  
* Does it feel intelligent, not flashy?

## **Performance Gate**

* Is it fast?  
* Is mobile smooth?  
* Are heavy assets lazy-loaded?  
* Does reduced motion work?

## **Conversion Gate**

* Does it create proximity?  
* Does it route intelligently?  
* Does it avoid desperate CTA language?

---

# **FINAL IMPLEMENTATION STANDARD**

The implementation is successful only if the site feels like:

an immersive executive systems environment where technology, transformation, culture, and organizational intelligence converge.

And the visitor leaves believing:

“Gary Mariner can translate ambitious vision into intelligent execution.”

