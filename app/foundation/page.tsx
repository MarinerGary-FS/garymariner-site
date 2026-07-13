import type { Metadata } from 'next'
import { ArrowRight, Check, CircleDot, Layers3 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import {
  Container,
  EnergyField,
  GlassPanel,
  MotionPreviewToggle,
  SystemGrid,
  SystemSection,
} from '@/components/foundation'
import { createMetadata } from '@/lib/metadata'

export const metadata: Metadata = createMetadata({
  title: 'V3 Foundation | Gary L. Mariner II',
  description: 'Internal reference surface for the GaryMariner.com V3 design and engineering foundation.',
  path: '/foundation',
  noIndex: true,
})

const colors = [
  ['Void', 'bg-background'],
  ['Graphite', 'bg-surface'],
  ['Sapphire', 'bg-sapphire'],
  ['Cyan', 'bg-cyan'],
  ['Platinum', 'bg-white'],
  ['Legacy gold', 'bg-gold'],
]

export default function FoundationPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-white">
      <EnergyField />

      <header className="relative z-10 border-b border-white/10 py-6">
        <Container className="flex items-center justify-between gap-6">
          <div>
            <p className="gm-kicker">GaryMariner.com / V3</p>
            <p className="mt-1 text-sm text-white/58">Foundation reference surface</p>
          </div>
          <span className="font-mono text-xs text-emerald-300">SYSTEM / READY</span>
        </Container>
      </header>

      <section aria-labelledby="foundation-title" className="relative z-10 py-24 md:py-32 lg:py-40">
        <Container>
          <SystemGrid className="items-end">
            <div className="col-span-4 md:col-span-5 lg:col-span-8">
              <p className="gm-kicker mb-6">Illuminated intelligence</p>
              <h1 id="foundation-title" className="gm-display max-w-5xl text-balance">
                Structure revealed through controlled light.
              </h1>
            </div>
            <p className="col-span-4 mt-8 max-w-md text-base leading-7 text-white/70 md:col-span-5 lg:col-span-4 lg:mt-0 lg:text-lg lg:leading-8">
              A restrained visual and engineering system for executive narrative, operational clarity,
              and human-centered intelligence.
            </p>
          </SystemGrid>
        </Container>
      </section>

      <SystemSection
        id="tokens"
        eyebrow="01 / Tokens"
        title="A disciplined environmental palette"
        description="Cyan marks active intelligence. Sapphire establishes system authority. Gold is reserved for legacy, milestones, and decisive action."
        className="border-t border-white/8"
      >
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6" aria-label="Core color tokens">
          {colors.map(([label, color]) => (
            <li key={label} className="border-t border-white/12 pt-4">
              <span className={`mb-4 block h-14 w-full rounded-md border border-white/10 ${color}`} />
              <span className="font-mono text-xs text-white/65">{label}</span>
            </li>
          ))}
        </ul>
      </SystemSection>

      <SystemSection
        id="type"
        eyebrow="02 / Typography"
        title="Authority through clarity and pacing"
        description="Geist carries structural precision. Newsreader provides a human editorial counterpoint when the narrative calls for reflection."
        className="border-t border-white/8"
      >
        <SystemGrid>
          <div className="col-span-4 border-t border-cyan/35 pt-5 md:col-span-6 lg:col-span-7">
            <p className="font-display text-4xl font-semibold leading-[1.08] md:text-6xl">
              Vision becomes credible when execution has structure.
            </p>
          </div>
          <div className="col-span-4 border-t border-gold/35 pt-5 md:col-span-6 lg:col-span-5">
            <p className="gm-editorial text-white/78">
              Intelligent systems should expand human capacity, not erase the judgment that gives them purpose.
            </p>
          </div>
        </SystemGrid>
      </SystemSection>

      <SystemSection
        id="surfaces"
        eyebrow="03 / Surfaces"
        title="Glass is a decision surface, not decoration"
        description="Each surface preserves contrast, a visible edge, interior light, and a solid-color fallback. Long-form reading remains unframed."
        className="border-t border-white/8"
      >
        <SystemGrid>
          <GlassPanel as="article" className="gm-interactive col-span-4 p-6 md:col-span-3 lg:col-span-4 lg:p-8">
            <Layers3 aria-hidden="true" className="mb-12 h-5 w-5 text-cyan" strokeWidth={1.5} />
            <p className="gm-kicker">Command module</p>
            <h3 className="mt-3 text-2xl font-semibold">System architecture</h3>
            <p className="mt-4 leading-7 text-white/62">Connected infrastructure aligned to business intent.</p>
          </GlassPanel>
          <GlassPanel as="article" strength="strong" className="gm-interactive col-span-4 p-6 md:col-span-3 lg:col-span-4 lg:p-8">
            <CircleDot aria-hidden="true" className="mb-12 h-5 w-5 text-sapphire-light" strokeWidth={1.5} />
            <p className="gm-kicker">Decision state</p>
            <h3 className="mt-3 text-2xl font-semibold">Operational clarity</h3>
            <p className="mt-4 leading-7 text-white/62">Signals translated into precise, governable action.</p>
          </GlassPanel>
          <GlassPanel as="article" className="gm-interactive col-span-4 p-6 md:col-span-6 lg:col-span-4 lg:p-8">
            <Check aria-hidden="true" className="mb-12 h-5 w-5 text-emerald-300" strokeWidth={1.5} />
            <p className="gm-kicker">Evidence state</p>
            <h3 className="mt-3 text-2xl font-semibold">Verified outcomes</h3>
            <p className="mt-4 leading-7 text-white/62">Claims remain connected to source, date, context, and approval.</p>
          </GlassPanel>
        </SystemGrid>
      </SystemSection>

      <SystemSection
        id="interaction"
        eyebrow="04 / Interaction"
        title="Calm motion, explicit action"
        description="Movement clarifies hierarchy and state. Every transition collapses cleanly when reduced motion is requested."
        className="border-y border-white/8"
      >
        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <Button href="/" variant="primary">
            Enter the system <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Button>
          <Button href="/contact" variant="ghost">Begin a conversation</Button>
          <MotionPreviewToggle />
          <p className="max-w-md text-sm leading-6 text-white/50">
            Keyboard focus uses a high-contrast cyan outline independent of color-state meaning.
          </p>
        </div>
      </SystemSection>

      <footer className="relative z-10 py-8">
        <Container className="flex flex-col gap-2 text-xs text-white/42 sm:flex-row sm:justify-between">
          <span>Foundation only. Homepage narrative remains out of scope.</span>
          <span className="font-mono">4 / 6 / 12 COLUMN SYSTEM</span>
        </Container>
      </footer>
    </div>
  )
}
