import { ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/foundation/Container'
import { decisionCases } from '@/lib/homepage-content'

export function DecisionCaseStudies() {
  return (
    <section id="decisions" aria-labelledby="decisions-title" className="relative py-24 md:py-32 lg:py-40">
      <Container>
        <header className="grid gap-6 border-b border-white/12 pb-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="gm-kicker mb-4">Act III / Judgment</p>
            <h2 id="decisions-title" className="text-4xl font-semibold leading-[1.06] md:text-6xl">
              Selected decisions, not a project gallery.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/62 lg:justify-self-end md:text-lg md:leading-8">
            The useful evidence is not that a system was built. It is why the architecture changed, which constraints mattered, and how the operating model became clearer.
          </p>
        </header>

        <div>
          {decisionCases.map(({ label, href, project }, index) => (
            <article key={project.slug} className="grid gap-8 border-b border-white/12 py-10 md:py-14 lg:grid-cols-[0.34fr_0.66fr] lg:gap-14">
              <header>
                <div className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/38">
                  <span className="text-cyan">0{index + 1}</span>
                  <span>{label}</span>
                </div>
                <h3 className="mt-5 text-3xl font-semibold leading-tight md:text-4xl">{project.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-6 text-white/56">{project.summary}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gm-interactive mt-7 inline-flex min-h-11 items-center gap-2 border-b border-white/18 text-sm font-semibold text-white/76 hover:border-cyan/50 hover:text-cyan"
                >
                  Examine the work <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </header>

              <dl className="grid gap-px bg-white/10 sm:grid-cols-2">
                <div className="bg-background p-5 md:p-6">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/34">Context</dt>
                  <dd className="mt-3 text-sm leading-6 text-white/68">{project.context}</dd>
                </div>
                <div className="bg-background p-5 md:p-6">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/34">Decision</dt>
                  <dd className="mt-3 text-sm leading-6 text-white/78">{project.decision}</dd>
                </div>
                <div className="bg-background p-5 md:p-6">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/34">Tradeoff</dt>
                  <dd className="mt-3 text-sm leading-6 text-white/68">{project.tradeoffs[0]}</dd>
                </div>
                <div className="bg-background p-5 md:p-6">
                  <dt className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/34">Outcome</dt>
                  <dd className="mt-3 text-sm leading-6 text-white/78">{project.outcomes[0].description}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
