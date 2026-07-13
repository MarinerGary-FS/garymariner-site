import { ArrowUpRight, Network } from 'lucide-react'
import { Container } from '@/components/foundation/Container'
import { ecosystemNodes } from '@/lib/ecosystem-config'

export function EcosystemGateway() {
  return (
    <section id="nexus" aria-labelledby="nexus-title" className="relative isolate overflow-hidden border-y border-white/10 bg-surface/35 py-24 md:py-32 lg:py-40">
      <div className="gm-energy-field absolute inset-0 opacity-45" aria-hidden="true" />
      <Container className="relative z-10">
        <header className="grid gap-7 lg:grid-cols-[0.76fr_1.24fr] lg:items-end">
          <div>
            <p className="gm-kicker mb-4">Act VI / Nexus</p>
            <h2 id="nexus-title" className="text-4xl font-semibold leading-[1.06] md:text-6xl">
              One intelligence layer. A broader ecosystem.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/62 lg:justify-self-end md:text-lg md:leading-8">
            Strategy, implementation, community innovation, and public perspective remain connected without collapsing into one undifferentiated brand.
          </p>
        </header>

        <div className="relative mt-14 md:mt-20">
          <div className="absolute left-[10%] right-[10%] top-12 hidden h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent lg:block" aria-hidden="true" />
          <div className="grid gap-px bg-white/10 lg:grid-cols-4">
            {ecosystemNodes.map((node, index) => {
              const external = node.href.startsWith('http')
              return (
                <a
                  key={node.id}
                  href={node.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="gm-interactive group relative flex min-h-80 flex-col bg-background p-5 hover:bg-surface/80 md:p-6"
                >
                  <span className="relative z-10 flex items-center justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-surface text-cyan">
                      {index === 0 ? <Network aria-hidden="true" className="h-4 w-4" /> : <span aria-hidden="true" className="h-2 w-2 rounded-full bg-current" />}
                    </span>
                    <ArrowUpRight aria-hidden="true" className="h-4 w-4 text-white/30 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-cyan" />
                  </span>
                  <span className="relative z-10 mt-12 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/34">{node.role}</span>
                  <h3 className="relative z-10 mt-3 text-2xl font-semibold text-white">{node.name}</h3>
                  <p className="relative z-10 mt-4 text-sm leading-6 text-white/54">{node.description}</p>
                  <span className="relative z-10 mt-auto pt-8 text-sm font-medium text-cyan/78">{node.signal}</span>
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
