import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Focus Areas — Gary L. Mariner II',
  description:
    'AI Transformation Strategy, Digital Infrastructure, Operations & Workflow Design, and Strategic Communications. Built for organizational impact.',
}

const domains = [
  {
    id: 'ai-systems',
    number: '01',
    label: 'AI Transformation Strategy',
    headline: 'Align AI to Your Organization',
    summary:
      'Most AI adoption fails not because of the technology, but because there\u2019s no strategy connecting it to how the organization actually operates.',
    what: 'I map workflows, identify where AI creates real leverage, and design implementation strategy that fits your operations and your people.',
    outcomes: [
      'AI strategy tied to operational outcomes',
      'Automation opportunities that reduce manual overhead',
      'Workflow redesigns for speed and consistency',
    ],
    for: 'Leaders who need AI strategy, not experimentation.',
  },
  {
    id: 'digital-infrastructure',
    number: '02',
    label: 'Digital Infrastructure',
    headline: 'Infrastructure That Reflects Operational Maturity',
    summary:
      'If your digital presence doesn\u2019t reflect your capabilities, you\u2019re leaving credibility and opportunity on the table.',
    what: 'Modern digital infrastructure \u2014 websites, systems architecture, and tooling that are clean, scalable, and aligned with how the organization operates.',
    outcomes: [
      'Digital presence that builds trust immediately',
      'Architecture supporting real workflows',
      'Scalable without unnecessary complexity',
    ],
    for: 'Organizations whose digital presence no longer reflects their capabilities.',
  },
  {
    id: 'operations',
    number: '03',
    label: 'Operations & Workflow Design',
    headline: 'Replace Friction with Structure',
    summary:
      'Operational friction compounds quietly until it becomes expensive. Unclear processes and fragmented communication create overhead that grows faster than the organization.',
    what: 'I map how work actually flows, identify friction points, and redesign the processes and accountability structures that remove overhead.',
    outcomes: [
      'Streamlined workflows with less manual intervention',
      'Clearer accountability and faster decisions',
      'Reduced overhead without adding headcount',
    ],
    for: 'Organizations where manual processes and unclear ownership limit performance.',
  },
  {
    id: 'communications',
    number: '04',
    label: 'Strategic Communications',
    headline: 'Communication That Creates Alignment',
    summary:
      'Misaligned teams, unclear messaging, and inconsistent stakeholder communication quietly erode performance and trust.',
    what: 'Communication frameworks that create alignment, reduce friction, and give leadership the structure to operate at scale.',
    outcomes: [
      'Internal systems that create team clarity',
      'Stakeholder frameworks that build trust',
      'Communication that scales with the organization',
    ],
    for: 'Leadership teams where communication gaps limit growth.',
  },
]

const approach = [
  {
    step: '01',
    title: 'Diagnosis',
    description: 'Understand how the organization actually operates. Map workflows, identify friction, clarify objectives.',
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Design a clear systems strategy. What gets built, what gets optimized, what gets removed.',
  },
  {
    step: '03',
    title: 'Implementation',
    description: 'Strategy becomes infrastructure. Built for how your team works, not just technically functional.',
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Monitor, identify gaps, refine. Systems require iteration.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Focus Areas"
        headline="Where Strategy Meets Implementation"
        supporting="Four interconnected domains. Each focused on reducing friction, improving alignment, and building infrastructure that works."
      />

      {/* Why AI Fails — Authority section */}
      <SectionWrapper className="bg-surface border-t border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">
          <Reveal>
            <div className="lg:sticky lg:top-36">
              <p className="text-xs font-sans text-gold/70 uppercase tracking-[0.18em] mb-8">
                A Point of View on AI
              </p>
              <h2 className="font-display font-bold text-display-lg text-white leading-[1.1]">
                Why Most AI Initiatives Fail — and What Actually Works
              </h2>
            </div>
          </Reveal>

          <div className="flex flex-col gap-10">
            <Reveal delay={60}>
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-semibold text-lg text-white">
                  What leaders get wrong
                </h3>
                <p className="font-sans text-sm text-white/55 leading-[1.85]">
                  AI adoption starts with the technology \u2014 a vendor pitch, a competitor announcement. Leadership buys in. IT implements. Nothing changes. The organization wasn&apos;t ready, and nobody translated the strategy into something teams could use.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-semibold text-lg text-white">
                  Why it keeps happening
                </h3>
                <p className="font-sans text-sm text-white/55 leading-[1.85]">
                  AI exposes every misalignment an organization has been tolerating. Broken handoffs. Unclear ownership. Communication that works at 50 people but collapses at 200. The technology doesn&apos;t create these problems \u2014 it makes them impossible to ignore.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-col gap-4 border-l border-gold/25 pl-6">
                <h3 className="font-display font-semibold text-lg text-white">
                  What actually works
                </h3>
                <p className="font-sans text-sm text-white/55 leading-[1.85]">
                  Start with people and workflows, not tools. Map how work actually moves. Identify where communication breaks down. Then design AI that fits the reality of how your teams operate. Treat it as an organizational design problem, not a procurement exercise.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>

      {/* Domains */}
      <SectionWrapper className="bg-background border-t border-border/40" as="div">
        <div className="flex flex-col gap-0">
          {domains.map((domain, i) => (
            <Reveal key={domain.id} delay={i * 60}>
              <div
                id={domain.id}
                className="group grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-8 lg:gap-20 py-12 md:py-16 lg:py-20 border-b border-border/40 last:border-0 scroll-mt-24"
              >
                {/* Left: label + meta */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display font-bold text-4xl text-white/[0.06] leading-none select-none tabular-nums">
                      {domain.number}
                    </span>
                    <span className="text-xs font-sans text-gold/70 uppercase tracking-[0.16em]">
                      {domain.label}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-display-md text-white leading-[1.15]">
                    {domain.headline}
                  </h2>
                  <p className="text-xs font-sans text-white/35 leading-[1.8] italic">
                    For: {domain.for}
                  </p>
                </div>

                {/* Right: detail */}
                <div className="flex flex-col gap-8">
                  <p className="font-sans text-base text-white/65 leading-[1.85]">
                    {domain.summary}
                  </p>

                  <div className="border-l border-gold/25 pl-6">
                    <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mb-3">
                      The Approach
                    </p>
                    <p className="font-sans text-sm text-white/60 leading-[1.85]">
                      {domain.what}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mb-4">
                      What You Get
                    </p>
                    <ul className="flex flex-col gap-3">
                      {domain.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-start gap-3">
                          <span className="mt-[0.4em] w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                          <span className="font-sans text-sm text-white/60 leading-[1.7]">
                            {outcome}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* How it works */}
      <SectionWrapper className="bg-surface border-t border-border/40">
        <Reveal className="mb-14">
          <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-5">
            The Process
          </p>
          <h2 className="font-display font-bold text-display-lg text-white max-w-xl">
            How Every Engagement Works
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {approach.map((step, i) => (
            <Reveal key={step.step} delay={i * 80}>
              <div className="group flex flex-col gap-5 pb-8 sm:pb-0 border-b border-border/25 sm:border-b-0 last:border-b-0">
                <span className="font-display font-bold text-4xl text-white/[0.07] leading-none select-none tabular-nums group-hover:text-white/[0.12] transition-colors duration-300">
                  {step.step}
                </span>
                <div className="w-6 h-0.5 bg-gold/35 group-hover:bg-gold/65 group-hover:w-10 transition-all duration-400 rounded-full" />
                <h3 className="font-display font-semibold text-lg text-white">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-white/50 leading-[1.8]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative px-6 md:px-10 lg:px-16 py-28 md:py-36 bg-background border-t border-border/40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gold/[0.06] blur-[120px] pointer-events-none" />
        <div className="relative max-w-site mx-auto">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-6">
                What&apos;s Next
              </p>
              <h2 className="font-display font-bold text-display-xl text-white mb-8">
                Not sure where to start?
                <br />
                <span className="text-white/55">That&apos;s usually the right place.</span>
              </h2>
              <p className="font-sans text-base text-white/45 leading-[1.85] mb-10 max-w-lg">
                Most engagements begin with a single conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Start a Conversation
                </Button>
                <Button href="/case-studies" variant="ghost" size="lg">
                  Explore My Work
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
