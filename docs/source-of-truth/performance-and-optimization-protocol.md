# **PERFORMANCE AND OPTIMIZATION PROTOCOL.md**

## **GARYMARINER.COM — PERFORMANCE & OPTIMIZATION PROTOCOL V1**

---

# **CORE THESIS**

Performance is not:  
a technical afterthought.

Performance IS:

# **executive perception.**

The fastest way to destroy:

* cinematic immersion  
* premium feel  
* executive authority  
* technological credibility

…is lag.

A site about:  
systems intelligence,  
organizational transformation,  
and technological sophistication  
cannot feel operationally inefficient.

That contradiction kills trust instantly.

---

# **PERFORMANCE PHILOSOPHY**

The site must feel:

* immediate  
* responsive  
* calm  
* fluid  
* intentional

Even while immersive.

The visitor should never think:

“This is heavy.”

They should feel:

“This environment is refined.”

---

# **PERFORMANCE PRIORITY HIERARCHY**

When conflicts occur,  
follow this order:

## **1\. Readability**

## **2\. Responsiveness**

## **3\. Navigation fluidity**

## **4\. Motion smoothness**

## **5\. Environmental atmosphere**

## **6\. Experimental effects**

If something threatens:  
clarity or responsiveness,  
cut the effect immediately.

No emotional attachment to animations.

We are building executive trust,  
not trying to win Behance awards.

---

# **TARGET PERFORMANCE METRICS**

## **DESKTOP TARGETS**

desktopTargets \= {  
  lighthousePerformance: 92+,  
  lighthouseAccessibility: 95+,  
  lighthouseBestPractices: 95+,  
  lighthouseSEO: 95+,

  targetFPS: 60,  
  minimumFPS: 50,

  targetLCP: "\< 2.2s",  
  targetCLS: "\< 0.08",  
  targetINP: "\< 200ms",

  maxInitialJS: "220kb",  
  maxHeroAsset: "350kb"  
}

---

# **MOBILE TARGETS**

mobileTargets \= {  
  lighthousePerformance: 85+,  
  lighthouseAccessibility: 95+,

  targetFPS: 50,  
  minimumFPS: 40,

  targetLCP: "\< 2.5s",  
  targetCLS: "\< 0.1",  
  targetINP: "\< 250ms",

  maxInitialJS: "180kb",  
  maxHeroAsset: "250kb"  
}

---

# **PERFORMANCE PRINCIPLES**

---

# **PRINCIPLE 1 — IMMERSION MUST BE CHEAP**

The environment should FEEL expensive.

Not BE expensive.

The illusion matters more than raw technical complexity.

Avoid:

* unnecessary GPU abuse  
* endless render loops  
* giant JS bundles  
* WebGL everywhere  
* over-layered DOM structures

---

# **PRINCIPLE 2 — CSS FIRST**

Always attempt:

1. CSS  
2. SVG  
3. Canvas  
4. WebGL

In that order.

Do NOT jump to:  
Three.js  
because it “looks cool.”

---

# **PRINCIPLE 3 — MOTION MUST EARN ITS COST**

Every animated system must justify:

* CPU usage  
* GPU usage  
* memory cost  
* hydration cost

If the emotional gain is small:  
remove it.

---

# **PRINCIPLE 4 — LOAD ONLY WHAT IS NEEDED**

The site should progressively enhance itself.

Users should NOT download:  
the entire cinematic system immediately.

---

# **PRINCIPLE 5 — MOBILE IS SACRED**

Mobile performance matters MORE than desktop aesthetics.

If mobile struggles:  
reduce effects aggressively.

No ego.

---

# **RENDERING STRATEGY**

---

# **SERVER COMPONENT PRIORITY**

Use React Server Components whenever possible.

Use server rendering for:

* scene structure  
* copy  
* layout  
* ecosystem metadata  
* navigation  
* typography layers

Avoid unnecessary client-side rendering.

---

# **CLIENT COMPONENT RULES**

Client components are ONLY for:

* animation  
* interactivity  
* motion orchestration  
* scene observation  
* environmental response  
* WebGL/canvas

Do NOT convert everything into client components.

That is lazy architecture.

---

# **HYDRATION STRATEGY**

Hydration should feel:  
invisible.

Avoid:

* giant hydration spikes  
* blocking interactive states  
* unnecessary re-renders  
* excessive global state

Use:

* progressive hydration  
* lazy hydration  
* dynamic imports  
* isolated motion scopes

---

# **JAVASCRIPT BUDGET**

## **Initial JS Budget**

Desktop: ≤ 220kb  
Mobile: ≤ 180kb

This includes:

* motion libraries  
* interaction systems  
* environment logic

If exceeded:  
optimize before adding features.

---

# **LIBRARY USAGE POLICY**

## **Approved Libraries**

### **Framer Motion**

Use for:

* reveals  
* transitions  
* hover states  
* lightweight motion

### **GSAP**

Use ONLY for:

* scene orchestration  
* cinematic timelines  
* advanced scroll choreography

### **Three.js / React Three Fiber**

Use ONLY for:

* subtle environmental systems  
* atmospheric depth

Never:  
for spectacle.

---

# **BANNED LIBRARY BEHAVIOR**

Avoid:

* giant utility bloat  
* overlapping animation systems  
* unused imports  
* massive client-side frameworks  
* unnecessary state managers

No dependency hoarding.

---

# **IMAGE OPTIMIZATION PROTOCOL**

---

# **IMAGE PHILOSOPHY**

Images should feel:  
cinematic,  
not heavy.

---

# **IMAGE RULES**

Mandatory:

* use `next/image`  
* modern formats only  
* responsive sizing  
* lazy loading  
* blur placeholders  
* priority only for above-the-fold visuals

---

# **IMAGE FORMAT POLICY**

Preferred:

AVIF \> WebP \> JPG

Avoid:  
PNG unless transparency is necessary.

---

# **IMAGE SIZE TARGETS**

Hero assets ≤ 350kb  
Scene imagery ≤ 220kb  
Mobile imagery ≤ 140kb

---

# **VIDEO OPTIMIZATION PROTOCOL**

---

# **VIDEO PHILOSOPHY**

Video should feel:  
intentional.

Not autoplay chaos.

---

# **VIDEO RULES**

Mandatory:

* click-to-load where possible  
* muted if autoplayed  
* short loops only  
* optimized compression  
* adaptive quality  
* lazy-loaded players

Avoid:

* giant background videos  
* unnecessary autoplay  
* multiple simultaneous videos

---

# **MOTION PERFORMANCE PROTOCOL**

---

# **MOTION PHILOSOPHY**

Motion should feel:  
smooth,  
not excessive.

---

# **APPROVED ANIMATION PROPERTIES**

Prefer:

transform  
opacity  
filter (light use only)

Avoid:

width  
height  
top  
left  
box-shadow animation  
layout-triggering properties

---

# **GPU ACCELERATION RULES**

Use:

will-change: transform;

ONLY when needed.

Never blanket apply.

---

# **ANIMATION DENSITY RULE**

Maximum:  
1–2 active motion layers per scene.

Avoid:  
simultaneous animation overload.

---

# **SCROLL PERFORMANCE RULES**

---

# **SCROLL PHILOSOPHY**

Scroll should feel:  
natural,  
fluid,  
cinematic.

Never trapped.

---

# **APPROVED SCROLL BEHAVIOR**

* subtle parallax  
* scene-aware transitions  
* opacity progression  
* directional depth shifts

---

# **BANNED SCROLL BEHAVIOR**

* aggressive scroll-jacking  
* heavy pinning everywhere  
* forced snapping  
* momentum hijacking  
* giant timeline abuse

This is an executive environment,  
not a theme park ride.

---

# **ENVIRONMENTAL PERFORMANCE RULES**

---

# **ENVIRONMENT PHILOSOPHY**

The environment should feel:  
alive cheaply.

---

# **ENVIRONMENT PRIORITY ORDER**

1\. CSS gradients  
2\. SVG texture  
3\. Canvas  
4\. WebGL

Only escalate when necessary.

---

# **WEBGL PROTOCOL**

## **Desktop**

Allowed selectively.

## **Tablet**

Highly reduced.

## **Mobile**

Disabled by default.

---

# **WEBGL RULES**

Mandatory:

* dynamic import  
* non-blocking render  
* idle loading where possible  
* visibility pause  
* reduced-motion support  
* fallback environment

---

# **WEBGL FAILURE RULE**

If:

* FPS drops  
* memory spikes  
* mobile heat increases  
* battery drain becomes noticeable

Remove or reduce immediately.

No attachment to “cool.”

---

# **STATE MANAGEMENT PERFORMANCE RULES**

Avoid:  
massive global state.

Use:

* local state first  
* context lightly  
* Zustand only if justified

Do NOT trigger:  
global re-renders for environmental motion.

That is architectural malpractice.

---

# **RE-RENDER PROTOCOL**

Avoid:

* animated React state loops  
* unnecessary component updates  
* layout recalculation chains

Use:

* refs  
* GSAP timelines  
* CSS variables  
* requestAnimationFrame carefully

---

# **LAZY LOADING STRATEGY**

---

# **LAZY LOAD THESE**

* media embeds  
* podcast players  
* WebGL systems  
* advanced motion modules  
* ecosystem visualizations  
* below-the-fold assets

---

# **DO NOT LAZY LOAD**

* core typography  
* hero copy  
* navigation  
* critical atmosphere layers

The experience must feel immediate.

---

# **MOBILE OPTIMIZATION PROTOCOL**

---

# **MOBILE PHILOSOPHY**

Mobile performance \> desktop spectacle.

Always.

---

# **MOBILE REDUCTIONS**

Reduce:

* parallax intensity  
* motion density  
* environmental layers  
* shader complexity  
* background animation

Preserve:

* typography  
* spacing  
* atmosphere  
* executive feel

---

# **MOBILE BATTERY RULE**

No effect should noticeably:

* heat devices  
* drain battery  
* stutter scroll

If it does:  
remove it.

---

# **ACCESSIBILITY PERFORMANCE RULES**

Reduced motion mode must:

* preserve hierarchy  
* maintain atmosphere  
* simplify transitions  
* disable heavy movement

Accessibility is:  
executive quality.

Not optional.

---

# **FONT OPTIMIZATION PROTOCOL**

---

# **FONT RULES**

* self-host fonts  
* preload critical weights only  
* avoid giant font families  
* variable fonts preferred  
* font-display: swap

Maximum:  
2 font families.

No typography circus.

---

# **CSS OPTIMIZATION RULES**

Use:

* utility-first discipline  
* CSS variables  
* design tokens  
* minimal overrides

Avoid:

* deeply nested selectors  
* gigantic style sheets  
* duplicate utilities  
* unused animation classes

---

# **NETWORK OPTIMIZATION**

Required:

* compression enabled  
* caching headers  
* CDN optimization  
* image CDN usage  
* route prefetching selectively

Avoid:  
prefetching the whole internet.

---

# **BUILD ANALYSIS REQUIREMENTS**

Run regularly:

next build  
next analyze  
lighthouse

Audit:

* bundle size  
* hydration cost  
* render blocking  
* CLS  
* memory usage  
* mobile FPS

---

# **PERFORMANCE TESTING MATRIX**

Test on:

* iPhone standard  
* older Android  
* MacBook Pro  
* mid-range laptop  
* tablet portrait  
* tablet landscape

The site must feel:  
premium everywhere.

Not only on a developer’s $4,000 machine.

---

# **QUALITY GATES**

Every feature must pass:

## **Strategic Gate**

Does this strengthen executive immersion?

## **Performance Gate**

Does it stay smooth?

## **Mobile Gate**

Does it survive on low-power devices?

## **Accessibility Gate**

Can everyone use it?

## **Necessity Gate**

Is this effect truly needed?

If not:  
cut it.

---

# **ABSOLUTE PERFORMANCE BANS**

Do not allow:

* giant autoplay videos  
* particle storms  
* unnecessary WebGL  
* animation overload  
* giant JS bundles  
* excessive client components  
* bloated animation libraries  
* scroll hijacking  
* multiple simultaneous canvas systems  
* endless render loops

That destroys executive trust.

---

# **FINAL PERFORMANCE STANDARD**

Performance is successful only if the site feels:

immediate, intelligent, cinematic, and operationally refined.

The visitor should feel:

“This environment is sophisticated enough to feel immersive, yet disciplined enough to feel trustworthy.”

That balance is the standard.

