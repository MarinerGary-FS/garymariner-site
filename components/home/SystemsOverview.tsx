import { ArrowRight } from 'lucide-react'
import { Container } from '@/components/foundation/Container'
import { NexusField } from '@/components/home/NexusField'
import { homepageContent } from '@/lib/homepage-content'

export function SystemsOverview() {
  return (
    <section id="systems" aria-labelledby="systems-title" className="relative isolate overflow-hidden border-y border-white/10 bg-surface/30 py-24 md:py-32 lg:py-40">
      <div className="gm-energy-field absolute inset-0 opacity-40" aria-hidden="true" />
      <Container className="relative z-10">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div>
            <p className="gm-kicker mb-4">Systems overview</p>
            <h2 id="systems-title" className="max-w-3xl text-4xl font-semibold leading-[1.06] md:text-6xl">
              The work lives between vision and execution.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/66 md:text-lg md:leading-8">
              Technology becomes valuable when strategy, workflows, ownership, data, and human adoption operate as one system.
            </p>
            <NexusField className="mt-10 max-w-3xl" />
          </div>

          <ol className="border-t border-white/12">
            {homepageContent.systems.map((system, index) => (
              <li key={system.id} className="group grid gap-4 border-b border-white/12 py-6 sm:grid-cols-[3rem_0.8fr_1.2fr] sm:items-start">
                <span className="font-mono text-xs text-cyan/72">0{index + 1}</span>
                <h3 className="text-lg font-semibold text-white">{system.label}</h3>
                <p className="text-sm leading-6 text-white/56">{system.description}</p>
              </li>
            ))}
          </ol>
        </div>
        <a
          href="#decisions"
          className="gm-interactive mt-10 inline-flex min-h-11 items-center gap-2 border-b border-cyan/35 text-sm font-semibold text-cyan hover:text-white"
        >
          Follow the decisions <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </Container>
    </section>
  )
}
