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
    headline: 'Align AI to Your Organization — Not the Other Way Around',
    summary:
      'Most organizations adopt AI reactively — chasing trends without a clear systems strategy. The result is disconnected tools, duplicated effort, and no measurable impact. The problem is rarely the technology. It\u2019s the absence of strategy connecting it to how the organization actually operates.',
    what: 'I start with how your organization runs. I map workflows, identify where AI creates real leverage, and design an implementation strategy that fits your operations and your people — not a vendor\u2019s pitch deck.',
    outcomes: [
      'A clear AI implementation strategy tied to operational outcomes',
      'Identified automation opportunities that reduce manual overhead',
      'Workflow redesigns that improve speed and consistency',
      'AI adoption aligned to your team\u2019s capacity, not just your industry\u2019s hype cycle',
    ],
    for: 'Leaders navigating AI adoption who need strategy, not experimentation.',
  },
  {
    id: 'digital-infrastructure',
    number: '02',
    label: 'Digital Infrastructure',
    headline: 'Infrastructure That Reflects How Your Organization Operates',
    summary:
      'A weak digital presence signals weak operations. If your website, systems, or digital tools don\u2019t reflect your actual capabilities, you\u2019re leaving credibility — and opportunity — on the table.',
    what: 'I design and build modern digital infrastructure from the ground up — websites, systems architecture, and operational tooling that are clean, scalable, and aligned with your brand and operational model.',
    outcomes: [
      'A professional digital presence that builds trust immediately',
      'Systems architecture that supports real organizational workflows',
      'Scalable infrastructure that grows with the organization',
      'Technical implementation without unnecessary complexity',
    ],
    for: 'Organizations with a digital presence that no longer reflects their capabilities or positioning.',
  },
  {
    id: 'operations',
    number: '03',
    label: 'Operations & Workflow Design',
    headline: 'Replace Friction with Structure',
    summary:
      'Operational friction compounds quietly — until it becomes expensive. Unclear processes, manual workarounds, and fragmented communication create overhead that grows faster than the organization.',
    what: 'I map how work actually flows across your organization, identify friction points, and redesign the processes, tools, and accountability structures that remove overhead and improve execution speed.',
    outcomes: [
      'Streamlined workflows that reduce manual intervention',
      'Clearer accountability and faster decision-making',
      'Reduced operational overhead without adding headcount',
      'Systems designed for how your team actually works',
    ],
    for: 'Operations-heavy organizations where manual processes and unclear ownership are limiting performance.',
  },
  {
    id: 'communications',
    number: '04',
    label: 'Strategic Communications',
    headline: 'Communication That Creates Alignment and Drives Action',
    summary:
      'Poor communication systems are invisible until they\u2019re expensive. Misaligned teams, unclear messaging, and inconsistent stakeholder communication quietly erode performance and trust.',
    what: 'I design internal and external communication frameworks that create alignment, reduce friction in stakeholder relationships, and give leadership teams the structure they need to operate at scale.',
    outcomes: [
      'Internal communication systems that create team clarity',
      'Stakeholder-facing frameworks that build trust and reduce friction',
      'Messaging architecture aligned to the brand and organizational goals',
      'Operational communication that scales with the organization',
    ],
    for: 'Leadership teams where communication gaps are limiting performance, trust, or organizational growth.',
  },
]

const approach = [
  {
    step: '01',
    title: 'Diagnosis',
    description:
      'Every engagement starts with understanding how your organization actually operates — not how it looks on paper. I map workflows, identify friction points, and clarify objectives before recommending anything.',
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'Based on the diagnosis, I design a clear systems strategy. This includes what gets built, what gets optimized, and what gets removed. No tools until the strategy is sound.',
  },
  {
    step: '03',
    title: 'Implementation',
    description:
      'Strategy becomes infrastructure. I build, integrate, and configure the systems — ensuring they are aligned to how your team works, not just technically functional.',
  },
  {
    step: '04',
    title: 'Optimization',
    description:
      'Systems require iteration. I monitor performance, identify gaps, and refine until the infrastructure is operating at the level your organization needs.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Focus Areas"
        headline="Where Strategy Meets Implementation"
        supporting="Four interconnected domains. Each one focused on reducing friction, improving alignment, and building the infrastructure organizations need to operate at the next level."
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
                  Most AI adoption starts with the technology — a tool demo, a vendor pitch, a competitor announcement. Leadership buys in. IT implements. And then nothing changes. Because the organization was never prepared for the tool, the tool was never designed for the workflow, and nobody translated the strategy into something frontline teams could actually use.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-semibold text-lg text-white">
                  Why it keeps happening
                </h3>
                <p className="font-sans text-sm text-white/55 leading-[1.85]">
                  AI exposes every misalignment an organization has been tolerating. Broken handoffs between teams. Unclear ownership. Communication that works at 50 people but collapses at 200. The technology doesn&apos;t create these problems — it makes them impossible to ignore. And organizations that don&apos;t address them first will fail at AI regardless of which tools they choose.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-col gap-4 border-l border-gold/25 pl-6">
                <h3 className="font-display font-semibold text-lg text-white">
                  What actually works
                </h3>
                <p className="font-sans text-sm text-white/55 leading-[1.85]">
                  Start with people and workflows, not tools. Map how work actually moves through the organization. Identify where communication breaks down and where decisions stall. Then — and only then — design AI systems that fit the reality of how your teams operate. The organizations that succeed at AI transformation are the ones that treat it as an organizational design problem, not a technology procurement exercise.
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
          <h2 className="font-display font-bold text-display-md text-white max-w-xl">
            How Every Engagement Works
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 lg:divide-x lg:divide-border/50">
          {approach.map((step, i) => (
            <Reveal key={step.step} delay={i * 80}>
              <div className="group flex flex-col gap-5 lg:px-8 first:pl-0 last:pr-0 pb-8 sm:pb-10 lg:pb-0 border-b border-border/25 sm:border-b-0 last:border-b-0">
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
      <section className="relative px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-background border-t border-border/40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gold/[0.06] blur-[120px] pointer-events-none" />
        <div className="relative max-w-site mx-auto">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-6">
                What&apos;s Next
              </p>
              <h2 className="font-display font-bold text-display-xl text-white leading-[1.06] mb-8">
                Not sure where to start?
                <br />
                <span className="text-white/55">That&apos;s usually the right place.</span>
              </h2>
              <p className="font-sans text-base text-white/45 leading-[1.85] mb-10 max-w-lg">
                Most engagements begin with a single conversation. Bring your operational challenges —
                I&apos;ll help identify where systems thinking can create the most impact.
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
