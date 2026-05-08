import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/ui/PageHero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { siteContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About Gary L. Mariner II — AI Systems Architect',
  description:
    'Gary L. Mariner II designs AI systems, automation, digital infrastructure, and execution architecture for modern operators and organizations.',
}

const background = [
  {
    period: '15+ Years',
    title: 'Operations Before Architecture',
    description:
      'Built and led teams across sales, customer operations, property operations, and business development. The systems work is grounded in how execution actually happens.',
  },
  {
    period: 'Global',
    title: 'Communication as Infrastructure',
    description:
      'Led work spanning the USA, Europe, and Asia. The consistent lesson: many operational problems are communication and workflow problems before they are technology problems.',
  },
  {
    period: 'The Shift',
    title: 'From Managing Work to Redesigning Work',
    description:
      'As AI matured, the opportunity became clear: not more tools, but better execution architecture. The focus shifted from running operations to rebuilding how operations scale.',
  },
  {
    period: 'Today',
    title: 'AI Systems for Business Operations',
    description:
      'Designs AI workflows, automation, CRM pathways, websites, and digital infrastructure around business outcomes, team behavior, and measurable operational improvement.',
  },
]

const differentiators = [
  {
    title: 'Operator-Level Translation',
    description:
      'Translates executive goals into workflows, automations, content systems, and infrastructure teams can actually use.',
  },
  {
    title: 'AI Applied to Real Work',
    description:
      'AI is used to reduce manual workload, improve consistency, and increase visibility. It is not used as a novelty layer.',
  },
  {
    title: 'Strategy, Communication, Implementation',
    description:
      'The work combines operational leadership, strategic communication, and technical execution into one accountable architecture process.',
  },
]

export default function AboutPage() {
  const { philosophy } = siteContent

  return (
    <>
      <PageHero
        eyebrow="About Gary"
        headline="An operator who builds AI systems for execution."
        supporting="Gary L. Mariner II helps organizations modernize operations through AI systems, automation, digital infrastructure, and practical implementation architecture."
      />

      {/* Bio narrative */}
      <SectionWrapper className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-24 items-start">

          {/* Left — sticky identity block */}
          <Reveal>
            <div className="lg:sticky lg:top-36 flex flex-col gap-6">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface/50">
                <Image
                  src="/images/gary-studio-97.jpg"
                  alt="Gary L. Mariner II"
                  width={1214}
                  height={1618}
                  className="aspect-[4/5] w-full object-cover opacity-90 saturate-[0.86]"
                  sizes="(min-width: 1024px) 320px, 100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/62 via-transparent to-transparent" />
              </div>

              <div>
                <p className="font-display font-bold text-display-md text-white leading-tight mb-2">
                  Gary L. Mariner II
                </p>
                <p className="text-sm font-sans text-gold/80 tracking-wide">
                  AI Systems Architect for Business Operations
                </p>
              </div>

              <div className="divider" />

              <p className="font-sans text-sm text-white/45 leading-[1.85]">
                Builds the connective layer between strategy, websites, automation, AI workflows, CRM routing, and business operations.
              </p>

              <div className="flex flex-col gap-3 mt-2">
                {['15+ Years in Operational Leadership', 'AI Workflow & Automation Strategy', 'Nonprofit and Customer Operations Systems', 'Conversion-Ready Digital Infrastructure'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                    <span className="text-xs font-sans text-white/60 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Button href="/contact" size="sm">
                  Start the Architecture Review
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Right — career narrative */}
          <div className="flex flex-col">
            {background.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group flex gap-6 md:gap-8 py-8 border-b border-border/50 last:border-0">
                  <div className="shrink-0 w-20">
                    <span className="text-xs font-sans text-gold/60 tracking-[0.12em] uppercase leading-none">
                      {item.period}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="w-6 h-0.5 bg-gold/35 group-hover:bg-gold/65 group-hover:w-10 transition-all duration-400 rounded-full mb-1" />
                    <h3 className="font-display font-semibold text-base md:text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-white/55 leading-[1.8]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What makes this work different */}
      <SectionWrapper className="bg-surface border-t border-border/40">
        <Reveal className="mb-14">
          <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-5">
            Why Organizations Trust This Work
          </p>
          <h2 className="font-display font-bold text-display-lg text-white max-w-xl">
            Experience That Connects Strategy to Execution
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="group flex flex-col gap-5 py-8 md:py-0 border-b border-border/30 md:border-b-0 last:border-b-0">
                <div className="w-8 h-0.5 bg-gold/35 group-hover:bg-gold/65 group-hover:w-14 transition-all duration-500 rounded-full" />
                <h3 className="font-display font-semibold text-lg text-white leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-white/60 leading-[1.8]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Beyond Work — Undugu */}
      <SectionWrapper className="bg-background border-t border-border/40">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-8">
            Beyond Work
          </p>
          <h2 className="font-display font-bold text-display-lg text-white mb-8">
            Systems thinking extends into community infrastructure.
          </h2>
          <p className="font-sans text-base text-white/55 leading-[1.85] mb-10">
            I serve as Technology Committee Chair for the Undugu Society in Nairobi, helping integrate technology and AI into community-focused initiatives for street children and vulnerable youth. That work includes digital infrastructure, event pathways, community communication, and practical systems modernization.
          </p>
          <Button href="https://undugu.org" variant="text" size="sm" external>
            Learn about Undugu Society &rarr;
          </Button>
        </Reveal>
      </SectionWrapper>

      {/* Philosophy */}
      <SectionWrapper className="bg-background border-t border-border/40">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-10">
            Operating Philosophy
          </p>
          <h2 className="font-display font-bold text-display-xl text-white mb-8">
            {philosophy.statement}
          </h2>
          <p className="font-sans text-base text-white/55 leading-[1.85] mb-12">
            {philosophy.closing}
          </p>

          <div className="flex flex-col gap-0 border-t border-border/50 pt-10">
            {philosophy.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex gap-6 py-7 border-b border-border/30 last:border-0">
                  <span className="font-display font-bold text-3xl text-white/[0.06] leading-none select-none tabular-nums shrink-0 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-semibold text-base text-white">
                      {p.title}
                    </h3>
                    <p className="font-sans text-sm text-white/60 leading-[1.8]">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative px-5 md:px-8 lg:px-10 py-20 md:py-24 bg-background border-t border-border/40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gold/[0.06] blur-[120px] pointer-events-none" />
        <div className="relative max-w-site mx-auto">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-6">
                What&apos;s Next
              </p>
              <h2 className="font-display font-bold text-display-xl text-white mb-10">
                Need clearer systems behind the work?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Start the Architecture Review
                </Button>
                <Button href="/case-studies" variant="ghost" size="lg">
                  View Transformation Work
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
