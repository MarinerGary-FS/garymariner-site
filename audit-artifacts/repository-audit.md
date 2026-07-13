# GaryMariner.com Repository Audit

Date: 2026-07-13

Scope: repository audit only. No product redesign or application-code changes were made.

## 1. Architecture Map

- Framework: Next.js 15.5.14 App Router, React 19, TypeScript, Tailwind CSS 3.
- Rendering model: all current app routes build as static prerendered pages.
- Source roots:
  - `app/`: App Router layouts/pages and global CSS.
  - `components/`: modular scene, social, network, layout, media, typography, UI, and legacy section components.
  - `lib/`: content/config/token/data utilities.
  - `docs/source-of-truth/`: current strategic/design source of truth.
  - `public/`: static images, icons, vCard, OG image.
- Main homepage path: `app/(main)/page.tsx` -> `HomeExperience` -> six scene components backed by `lib/scene-config.ts`.
- Root concerns:
  - `app/layout.tsx`: metadata, fonts, `EventTracker`, Cal.com script.
  - `app/(main)/layout.tsx`: global `Nav` and `Footer` for main group routes.
  - `/social` and `/network` intentionally bypass the main layout and render standalone gateway experiences.

## 2. Route Inventory

Current local routes:

- `/`: six-scene homepage. Static. First Load JS from build: 111 kB.
- `/contact`: controlled invitation/contact page. Static. First Load JS: 110 kB.
- `/social`: executive ecosystem gateway. Static. First Load JS: 145 kB.
- `/network`: private networking gateway. Static, `robots: noindex,nofollow`. First Load JS: 117 kB.
- `/icon.png`, `/apple-icon.png`: app metadata image routes.
- `/_not-found`: generated Next not-found route.

Configured redirects in `next.config.ts`:

- `/about` -> `https://www.marinernexus.com/about` temporary 307.
- `/services` and `/services/:path*` -> `https://www.marinernexus.com/services` temporary 307.
- `/case-studies` and `/case-studies/:path*` -> `https://www.marinernexus.com/case-studies` temporary 307.

## 3. Component Inventory

Primary current architecture:

- Experience: `HomeExperience`, `SceneContainer`, `SceneHeader`, `SceneTransition`.
- Scenes: `EntrySystemScene`, `TranslatorScene`, `SystemsInfrastructureScene`, `HumanTransformationScene`, `EcosystemScene`, `ControlledInvitationScene`.
- Environment/media: `AmbientBackground`, `FamilyCrestArtifact`, `ExecutiveMediaPreview`.
- Ecosystem/conversion: `EcosystemMap`, `ControlledCTA`.
- Layout: `Nav`, `Footer`.
- Typography: `DisplayStatement`, `EditorialText`, `ThoughtFragment`.
- Social/network: `SocialPortal`, `SocialHero`, `SocialDrawer`, `CommandCard`, `CommandGrid`, `IdentityBackdrop`, `VCardModal`, `NetworkingPortal`.
- UI primitives: `Button`, `BookingButton`, `Reveal`, `SectionWrapper`, `PageHero`, `AnimatedCounter`.
- Analytics: `EventTracker`, `trackEvent`.

Likely legacy or previous-generation homepage components still present:

- `components/sections/*` including `Hero`, `ProofSection`, `WhatIBuild`, `SystemFlow`, `ProofBeforePhilosophy`, etc.
- These are not part of the six-scene homepage path and should be reviewed before further build-out to avoid parallel component systems.

Client components:

- `EventTracker`, `Nav`, `MarinerVisualSystem`, `NetworkingPortal`, `CaseStudyPreview`, `ContactForm`, `SystemFlow`, `CommandCard`, `SocialDrawer`, `SocialHero`, `SocialPortal`, `VCardModal`, `AnimatedCounter`, `BookingButton`, `Reveal`.

## 4. Styling And Token Assessment

Strengths:

- Dark-first system is established.
- The source-of-truth token model exists in `docs/source-of-truth/design-token-system.md`.
- `lib/design-tokens.ts`, `tailwind.config.ts`, and `app/globals.css` all express parts of the intended palette, spacing, and motion system.
- Reduced-motion baseline exists in `app/globals.css`.
- Typography is intentionally editorial with Newsreader + IBM Plex Sans.

Gaps:

- Token values are duplicated across `lib/design-tokens.ts`, `tailwind.config.ts`, and CSS custom properties.
- The source-of-truth gold accent is `#B48A4F`, but current Tailwind and runtime tokens alias `gold` to sapphire `#5B7FFF`.
- Many styling decisions remain inline as Tailwind arbitrary values, which makes design governance harder.
- `styles/tokens.css` is recommended by source-of-truth but not present.

## 5. Content-Source Inventory

Primary current source-of-truth:

- `docs/source-of-truth/homepage-scene-architecture.md`
- `docs/source-of-truth/visual-language-system.md`
- `docs/source-of-truth/typography-and-copy-system.md`
- `docs/source-of-truth/motion-and-interaction-system.md`
- `docs/source-of-truth/environmental-systems-architecture.md`
- `docs/source-of-truth/component-architecture-system.md`
- `docs/source-of-truth/design-token-system.md`
- `docs/source-of-truth/mobile-experience-architecture.md`
- `docs/source-of-truth/performance-and-optimization-protocol.md`
- `docs/source-of-truth/ecosystem-routing-architecture.md`
- `docs/source-of-truth/executive-media-system.md`
- `docs/source-of-truth/experience-implementation-blueprint.md`
- `docs/source-of-truth/phased-build-system.md`

Runtime content/config:

- `lib/scene-config.ts`: six homepage scenes.
- `lib/copy-system.ts`: positioning, forbidden phrases, CTAs, proof metrics.
- `lib/ecosystem-config.ts`: ecosystem nodes.
- `lib/media-config.ts`: media previews.
- `lib/social-config.ts`: social gateway copy and commands.
- `lib/content.ts`: legacy/general site content, sections, proof, footer.
- `lib/vcard.ts`: contact, vCard, channels.
- `lib/cal-config.ts`: Cal.com meeting links.

Supporting legacy docs:

- `docs/brand-strategy.md`, `docs/case-study-digital-harmony.md`, `docs/content-brief.md`, `docs/design-system.md`, `docs/homepage-copy.md`, `docs/homepage-wireframe.md`, `docs/site-architecture.md`.

## 6. Dependency Health Report

Install:

- `npm install`: passed.
- npm reported 2 vulnerabilities: 1 moderate, 1 high.

Key packages:

- `next`: installed 15.5.14, wanted 15.5.20, latest 16.2.10.
- `react` / `react-dom`: installed 19.2.4, wanted/latest 19.2.7.
- `postcss`: installed 8.5.8, wanted/latest 8.5.19.
- `tailwindcss`: installed 3.4.19, latest 4.3.2.
- `lucide-react`: installed 1.14.0, wanted/latest 1.24.0.
- `gsap`: installed and used dynamically by `Reveal`.

Audit findings:

- `next` has high-severity advisories fixed by patch upgrade.
- `postcss` has a moderate advisory fixed by patch upgrade.

## 7. Accessibility Baseline

Browser/static checks across `/`, `/contact`, `/social`, `/network`:

- Every checked route has exactly one `h1`.
- Contact form fields have labels.
- No checked links/buttons/inputs were missing accessible names.
- Reduced-motion CSS is present.
- Decorative crest images use empty `alt`, but do not consistently add `aria-hidden`; acceptable for decorative images but should be normalized.
- `/social` and `/network` heading text renders as `Gary L.Mariner II` in DOM text because line spans have no separating whitespace. Visual rendering is acceptable, but text extraction/screen-reader phrasing should be reviewed.

Not performed:

- Full axe-core audit. No accessibility tooling is installed.

## 8. Performance Baseline

Production build passed. Next build route sizes:

- `/`: 172 B route payload, 111 kB first-load JS.
- `/contact`: 4.79 kB route payload, 110 kB first-load JS.
- `/network`: 5.74 kB route payload, 117 kB first-load JS.
- `/social`: 34.4 kB route payload, 145 kB first-load JS.
- Shared first-load JS: 102 kB.

Local dev HTTP timing via Node client:

- `/`: 166,304 bytes HTML, TTFB 154 ms, total 177 ms.
- `/contact`: 64,086 bytes HTML, TTFB 209 ms, total 212 ms.
- `/social`: 38,599 bytes HTML, TTFB 59 ms, total 62 ms.
- `/network`: 40,641 bytes HTML, TTFB 95 ms, total 96 ms.

Asset notes:

- `public/og-image.png`: 1.4 MB.
- `public/images/glm-signature.png`: 1.4 MB.
- `public/images/glm-business.jpg`: 1.1 MB.
- `.DS_Store` files exist under `public/` and should be removed.

Limitations:

- Lighthouse/Web Vitals were not run because no audit tooling is installed.
- Browser Performance API was unavailable in this in-app browser runtime, so timing came from local HTTP and build output.

## 9. Security Baseline

Findings:

- `npm audit` reports vulnerable `next` and `postcss` versions.
- No explicit security headers are configured in `next.config.ts`.
- Local responses include `X-Powered-By: Next.js`.
- No CSP, HSTS, `X-Content-Type-Options`, `Referrer-Policy`, or `Permissions-Policy` observed in local response headers.
- `app/layout.tsx` injects a Cal.com embed via `dangerouslySetInnerHTML`; the script is static, but this will complicate a future strict CSP.
- Contact submission uses `mailto:` only. No backend secret handling is present.
- No `.env` files or obvious secrets were found in the inspected app/lib/component code.

## 10. Current-Site Screenshots

Saved screenshots:

- `audit-artifacts/screenshots/home-desktop.png`
- `audit-artifacts/screenshots/contact-desktop.png`
- `audit-artifacts/screenshots/social-desktop.png`
- `audit-artifacts/screenshots/network-desktop.png`
- `audit-artifacts/screenshots/home-mobile.png`
- `audit-artifacts/screenshots/contact-mobile.png`
- `audit-artifacts/screenshots/home-viewport-debug.png`

Browser verification:

- `/`, `/contact`, `/social`, `/network` load with meaningful DOM content.
- No Next.js error overlay detected.
- No browser console warnings/errors captured during verification.
- Mobile home/contact checks showed no document-level horizontal overflow.

## 11. Technical Debt Ranked By Severity

Critical:

- None found that prevents build or route rendering.

High:

- Vulnerable `next` and `postcss` versions.
- Lint is not operational: `npm run lint` invokes deprecated `next lint` and prompts for ESLint configuration.
- No test suite or `test` script exists.
- Missing security headers and framework disclosure via `X-Powered-By`.

Medium:

- Token duplication and source-of-truth drift, especially gold accent mapping to sapphire.
- Parallel/legacy component system under `components/sections/*`.
- `public/` contains `.DS_Store` and oversized PNG/JPG assets.
- Inline Cal.com embed makes CSP hard.
- Client component surface is reasonable but should be reviewed after pruning legacy sections and dynamic GSAP import paths.

Low:

- Decorative images should consistently use `aria-hidden` when `alt=""`.
- `/social` and `/network` heading spans should include accessible spacing.
- `curl` is unavailable in the local shell, so audit scripts should not assume it.

## 12. Migration Decision

Recommendation: no framework migration now.

Keep Next.js App Router and Tailwind. The current architecture already matches the intended six-scene source-of-truth model, builds successfully, and statically prerenders all public routes. Phase one should be stabilization and alignment, not a rebuild.

Recommended upgrades:

- Patch within Next 15 first: `next@15.5.20`, `postcss@8.5.19`, React patch updates.
- Defer Next 16 and Tailwind 4 migration until lint/test/security baselines exist and visual regressions can be caught.

## 13. Phase-One Implementation Plan

1. Stabilize engineering baseline.
   - Replace `next lint` with ESLint CLI configuration.
   - Add `typecheck` script.
   - Add a minimal test/e2e script for route smoke checks.
   - Patch vulnerable dependencies.

2. Add security and deployment hygiene.
   - Add production security headers.
   - Disable `X-Powered-By`.
   - Remove `.DS_Store` files from `public/`.
   - Prepare a CSP-compatible strategy for Cal.com.

3. Align tokens with source-of-truth.
   - Create one canonical token source.
   - Fix gold/sapphire drift.
   - Reduce arbitrary one-off values where they undermine consistency.

4. Prune or quarantine legacy sections.
   - Confirm whether `components/sections/*` is still needed.
   - Remove unused previous-generation homepage components only after route coverage exists.

5. Performance pass.
   - Optimize large public assets.
   - Add Lighthouse or Web Vitals baseline.
   - Check image priority/sizes on visual routes.

6. Accessibility pass.
   - Add axe-based route audit.
   - Normalize decorative image semantics.
   - Fix accessible text spacing on split-line headings.

## Command Results And Failures

- `npm install`: passed; reported 2 vulnerabilities.
- `npm run dev -- --port 3000`: passed; ready in 1436 ms.
- `npm run lint`: failed because `next lint` is deprecated and prompted interactively for ESLint setup.
- `npx tsc --noEmit`: passed.
- `npm test`: failed because no `test` script exists.
- `npm run build`: passed.
- Browser verification: passed on primary routes, no overlay/console errors.
- `curl`: unavailable in shell; Node HTTP client used for response timing.
