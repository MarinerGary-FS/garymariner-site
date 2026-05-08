# **COMPONENT ARCHITECTURE SYSTEM.md**

## **GARYMARINER.COM — COMPONENT ARCHITECTURE SYSTEM V1**

---

# **CORE THESIS**

Components on GaryMariner.com are not generic UI blocks.

They are:

# **cinematic system modules.**

Each component must support:

* executive presence  
* immersive atmosphere  
* narrative progression  
* ecosystem routing  
* human-centered futurism  
* operational clarity  
* strategic conversion

The site must never feel like:

* a component library demo  
* SaaS template assembly  
* portfolio grid  
* agency landing page  
* AI tool showcase

Components must feel:  
custom,  
intentional,  
quietly intelligent.

---

# **COMPONENT ARCHITECTURE PRINCIPLES**

## **1\. Components Serve Scenes**

No orphan components.

Every component must belong to:

* a scene  
* a narrative purpose  
* a conversion purpose  
* an environmental layer

If it does not strengthen a scene,  
remove it.

---

## **2\. Reusable, But Not Generic**

Components should be reusable at the system level,  
but visually adapted enough to avoid sameness.

The system should feel cohesive,  
not repetitive.

---

## **3\. Config-Driven, Not Hardcoded**

Major content should come from config files.

This includes:

* scene metadata  
* ecosystem nodes  
* thought fragments  
* CTA labels  
* media previews  
* animation timings

This keeps the system editable and scalable.

---

## **4\. Motion-Aware By Default**

Components must support:

* motion states  
* reduced-motion mode  
* mobile-safe behavior  
* scroll-aware reveal logic

Motion should be built into the architecture,  
not slapped on afterward.

---

## **5\. Performance-Conscious**

Components must be:

* lightweight  
* lazy-loadable where needed  
* server-rendered when possible  
* client-rendered only when necessary

No bloated client components just because someone got excited. Tranquilo (calm down).

---

# **RECOMMENDED FILE STRUCTURE**

/components  
  /experience  
    HomeExperience.tsx  
    SceneContainer.tsx  
    SceneHeader.tsx  
    SceneTransition.tsx  
    SceneProgress.tsx

  /scenes  
    EntrySystemScene.tsx  
    TranslatorScene.tsx  
    SystemsInfrastructureScene.tsx  
    HumanTransformationScene.tsx  
    EcosystemScene.tsx  
    ControlledInvitationScene.tsx

  /environment  
    AmbientBackground.tsx  
    InfrastructureField.tsx  
    LightGradientLayer.tsx  
    NoiseTexture.tsx  
    DepthGrid.tsx  
    AtmosphericOverlay.tsx

  /typography  
    DisplayStatement.tsx  
    EditorialText.tsx  
    ThoughtFragment.tsx  
    RevealText.tsx  
    KineticLine.tsx

  /motion  
    MotionProvider.tsx  
    ScrollOrchestrator.tsx  
    ParallaxLayer.tsx  
    MaskReveal.tsx  
    ReducedMotionFallback.tsx

  /ecosystem  
    EcosystemMap.tsx  
    EcosystemNode.tsx  
    DirectionalGateway.tsx  
    InitiativePreview.tsx

  /media  
    ExecutiveMediaPreview.tsx  
    PodcastSignal.tsx  
    MediaGateway.tsx  
    AudioPreviewToggle.tsx

  /navigation  
    ExecutiveNav.tsx  
    MobileNav.tsx  
    ScrollAwareNav.tsx

  /conversion  
    ControlledCTA.tsx  
    ContactGateway.tsx  
    StrategicInquiryForm.tsx

/lib  
  scene-config.ts  
  ecosystem-config.ts  
  media-config.ts  
  copy-system.ts  
  animation-config.ts  
  design-tokens.ts

---

# **COMPONENT TIERS**

## **TIER 1 — EXPERIENCE SHELL COMPONENTS**

These define the structural nervous system.

### **HomeExperience.tsx**

Owns:

* homepage scene order  
* global layout flow  
* scene composition  
* environment mounting

Should NOT contain:

* large blocks of copy  
* animation details  
* hardcoded ecosystem data

---

### **SceneContainer.tsx**

Wraps each scene.

Responsibilities:

* consistent spacing  
* viewport behavior  
* z-index handling  
* motion scope  
* responsive padding  
* reduced-motion awareness

Props may include:

sceneId  
eyebrow  
density  
variant  
backgroundMode  
motionMode

---

### **SceneTransition.tsx**

Handles transitions between scenes.

Should support:

* fade transitions  
* depth shifts  
* lighting changes  
* atmospheric pacing

Avoid:  
hard section dividers.

No lazy horizontal rules pretending to be design.

---

# **TIER 2 — SCENE COMPONENTS**

Each scene is a dedicated component.

---

## **EntrySystemScene.tsx**

Purpose:  
immediate immersive impact.

Should include:

* ambient environment  
* bold display typography  
* minimal strategic copy  
* subtle scroll cue  
* controlled hero composition

Must avoid:

* long biography  
* service language  
* “Hi, I’m Gary”  
* case study links  
* generic hero CTA overload

---

## **TranslatorScene.tsx**

Purpose:  
introduce executive translation.

Should include:

* translation pair system  
* strategic thought fragments  
* abstract alignment visual  
* concise explanatory copy

Possible translation pairs:

* executive intent → operational execution  
* complexity → clarity  
* AI potential → human adoption  
* vision → system architecture

---

## **SystemsInfrastructureScene.tsx**

Purpose:  
show operational depth.

Should include:

* infrastructure visual module  
* systems philosophy fragments  
* strategic capability hints  
* layered environmental visuals

Must avoid:

* fake dashboards  
* tech-stack dumps  
* overexplained services  
* AI buzzword grids

---

## **HumanTransformationScene.tsx**

Purpose:  
restore humanity.

Should include:

* Undugu-adjacent human systems reference  
* cultural leadership framing  
* emotional intelligence layer  
* documentary-inspired visual treatment

Must avoid:

* nonprofit brochure copy  
* trauma exploitation  
* excessive sentimentality  
* generic community language

---

## **EcosystemScene.tsx**

Purpose:  
reveal interconnected world.

Should include:

* ecosystem node map  
* Mariner Nexus node  
* Undugu node  
* Media/Podcast node  
* strategic collaboration pathway

Must avoid:

* logo walls  
* random link lists  
* portfolio grids  
* visual clutter

---

## **ControlledInvitationScene.tsx**

Purpose:  
conversion with restraint.

Should include:

* concise invitation statement  
* primary CTA  
* optional secondary routing  
* minimal contact gateway

Must avoid:

* sales urgency  
* “book now”  
* free consultation language  
* overbuilt forms

---

# **TIER 3 — ENVIRONMENT COMPONENTS**

These create atmosphere and infrastructural intelligence.

---

## **AmbientBackground.tsx**

Purpose:  
global atmospheric foundation.

Should support:

* subtle gradients  
* lighting shifts  
* scene-aware states  
* reduced-motion fallback

Must be lightweight.

---

## **InfrastructureField.tsx**

Purpose:  
visualize invisible systems.

Can be:

* CSS/SVG based  
* canvas based  
* Three.js only if justified

Should feel:  
subtle,  
dimensional,  
infrastructural.

Avoid:  
AI cliché visuals.

---

## **LightGradientLayer.tsx**

Purpose:  
cinematic environmental lighting.

Should support:

* edge light  
* soft radial glow  
* scene mood changes  
* responsive scaling

---

## **NoiseTexture.tsx**

Purpose:  
add cinematic texture.

Must be:

* subtle  
* low-cost  
* non-distracting

---

## **DepthGrid.tsx**

Purpose:  
create spatial infrastructure depth.

Should be:  
barely visible.

Not a Tron grid.  
We are not building a 2009 nightclub.

---

# **TIER 4 — TYPOGRAPHY COMPONENTS**

Typography is the authority layer.

---

## **DisplayStatement.tsx**

Purpose:  
large conceptual statements.

Should support:

* responsive scale  
* line breaks  
* reveal motion  
* editorial spacing

---

## **EditorialText.tsx**

Purpose:  
body copy with premium rhythm.

Should support:

* max-width control  
* reading rhythm  
* variant styles  
* restrained motion

---

## **ThoughtFragment.tsx**

Purpose:  
intellectual texture.

Used for:

* systems observations  
* strategic statements  
* media excerpts  
* micro-philosophy

Should feel:  
like insight,  
not quote-card filler.

---

## **RevealText.tsx**

Purpose:  
controlled typography reveal.

Should support:

* masking  
* staggered lines  
* reduced-motion fallback

Avoid:  
typewriter animation.

Banned. Dead. Buried.

---

# **TIER 5 — MOTION COMPONENTS**

---

## **MotionProvider.tsx**

Purpose:  
centralize motion preferences.

Should manage:

* reduced-motion detection  
* motion intensity  
* device type awareness  
* performance guardrails

---

## **ScrollOrchestrator.tsx**

Purpose:  
coordinate scene-level scroll behavior.

Use carefully.

Should NOT:  
hijack scroll unnecessarily.

---

## **ParallaxLayer.tsx**

Purpose:  
depth movement.

Should only affect:

* environmental layers  
* non-critical visuals

Never body copy.

---

## **MaskReveal.tsx**

Purpose:  
cinematic reveal for text/images.

Should be reusable across scenes.

---

# **TIER 6 — ECOSYSTEM COMPONENTS**

---

## **EcosystemMap.tsx**

Purpose:  
show interconnected initiatives.

Should feel:  
like a living network,  
not a diagram from a corporate slide deck.

Must include:

* spatial hierarchy  
* node relationships  
* controlled interaction  
* mobile adaptation

---

## **EcosystemNode.tsx**

Purpose:  
represent one initiative.

Each node should include:

* title  
* role in ecosystem  
* short strategic description  
* route  
* interaction state

Example nodes:

* Gary Mariner  
* Mariner Nexus  
* Undugu Foundation  
* Media / Black Relativity  
* Strategic Collaboration

---

## **DirectionalGateway.tsx**

Purpose:  
move users into the correct ecosystem path.

Should feel:  
like a guided threshold.

Not a basic link card.

---

# **TIER 7 — MEDIA COMPONENTS**

---

## **ExecutiveMediaPreview.tsx**

Purpose:  
show curated media presence.

Should include:

* episode/conversation title  
* strategic theme  
* short context  
* optional preview link

Must avoid:  
feed clutter.

---

## **PodcastSignal.tsx**

Purpose:  
reference podcast/media presence elegantly.

Should support:

* Apple Podcast link  
* curated description  
* thought-fragment pairing  
* visual restraint

---

## **MediaGateway.tsx**

Purpose:  
route deeper into media ecosystem.

Should feel:  
editorial,  
not content creator.

---

# **TIER 8 — NAVIGATION COMPONENTS**

---

## **ExecutiveNav.tsx**

Purpose:  
minimal executive navigation.

Suggested nav labels:

* Intelligence  
* Ecosystem  
* Conversations  
* Connect

Avoid:

* About  
* Services  
* Portfolio  
* Testimonials

Those smell basic.

---

## **ScrollAwareNav.tsx**

Purpose:  
adjust nav behavior based on scene.

Should support:

* transparency changes  
* compressed state  
* active scene indicator  
* minimal movement

---

## **MobileNav.tsx**

Purpose:  
mobile-first routing.

Should be:

* clean  
* fast  
* thumb-friendly  
* not a giant drawer of chaos

---

# **TIER 9 — CONVERSION COMPONENTS**

---

## **ControlledCTA.tsx**

Purpose:  
strategic invitation.

CTA language examples:

* Begin a conversation  
* Explore alignment  
* Enter the ecosystem  
* Build intelligently

Avoid:

* Get started  
* Book now  
* Free consultation

---

## **ContactGateway.tsx**

Purpose:  
route users toward contact without desperation.

Should include:

* minimal copy  
* clear action  
* executive tone

---

## **StrategicInquiryForm.tsx**

Purpose:  
optional deeper contact form.

Fields should be minimal:

* Name  
* Email  
* Organization  
* What are you trying to build?  
* What kind of alignment are you exploring?

Avoid:  
long intake forms.

Save interrogation for later.

---

# **DESIGN TOKEN SYSTEM**

All components must use shared tokens for:

colors  
spacing  
typography  
radius  
shadows  
motionDurations  
motionEase  
zIndex  
breakpoints

No random one-off values.

Randomness is how design systems become junk drawers.

---

# **SERVER VS CLIENT COMPONENT RULES**

## **Server Components**

Use for:

* static layout  
* copy rendering  
* SEO content  
* non-interactive scene structure

## **Client Components**

Use only when needed for:

* animation  
* interactivity  
* scroll behavior  
* media loading  
* WebGL/canvas

Do not turn everything into client components.

That is lazy architecture.

---

# **CONFIG FILE REQUIREMENTS**

## **scene-config.ts**

Defines:

* scene IDs  
* labels  
* metadata  
* background modes  
* motion modes

## **copy-system.ts**

Defines:

* headlines  
* fragments  
* scene copy  
* CTA copy

## **ecosystem-config.ts**

Defines:

* ecosystem nodes  
* external routes  
* node descriptions  
* relationships

## **media-config.ts**

Defines:

* curated media items  
* podcast references  
* strategic themes

## **animation-config.ts**

Defines:

* durations  
* easings  
* stagger values  
* reduced-motion defaults

---

# **COMPONENT QUALITY GATES**

Every component must pass:

## **Strategic Gate**

Does it strengthen the executive futurism experience?

## **Visual Gate**

Does it feel custom and premium?

## **Motion Gate**

Does it move with restraint?

## **Performance Gate**

Is it lightweight and optimized?

## **Mobile Gate**

Does it work beautifully on mobile?

## **Accessibility Gate**

Can everyone use it?

If not:  
fix it or cut it.

---

# **ABSOLUTE COMPONENT BANS**

Do not build:

* testimonial carousels  
* skill bars  
* logo walls  
* generic service cards  
* tech stack clouds  
* “as seen on” clutter  
* fake AI dashboards  
* animated counters without meaning  
* massive contact forms  
* endless podcast feeds  
* portfolio grids on GaryMariner.com

Wrong website. Wrong energy.

---

# **FINAL COMPONENT STANDARD**

The component system is successful only if the site feels like:

a cinematic executive operating system for identity, intelligence, ecosystem routing, and human-centered transformation.

Every component must quietly answer:

“Does this make Gary feel more like the person who can translate vision into intelligent execution?”

If not, delete it.

