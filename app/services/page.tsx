import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Services — Gary L. Mariner II',
  description:
    'AI Systems Strategy, Digital Infrastructure Design, Operations Optimization, and Executive Communication Systems. Built for business performance.',
}

const services = [
  {
    id: 'ai-systems',
    number: '01',
    label: 'AI Systems Strategy',
    headline: 'Align AI to Your Business — Not the Other Way Around',
    summary:
      'Most businesses adopt AI tools reactively — chasing trends without a clear systems strategy. The result is disconnected tools, duplicated effort, and no measurable ROI.',
    what: "We start with how your business actually operates. I map your workflows, identify where AI creates real leverage, and design an implementation roadmap that fits your operations — not a vendor's pitch deck.",
    outcomes: [
      'A clear AI implementation plan tied to business outcomes',
      'Identified automation opportunities that reduce manual overhead',
      'Workflow redesigns that improve speed and consistency',
      'AI tooling aligned to your team, not just your industry',
    ],
    for: 'Founders and operators who want to use AI strategically — not just experimentally.',
  },
  {
    id: 'digital-infrastructure',
    number: '02',
    label: 'Digital Infrastructure Design',
    headline: 'Infrastructure That Reflects How Your Business Operates',
    summary:
      "A weak digital presence signals weak operations. If your website, systems, or digital tools don't reflect your actual capabilities, you're leaving credibility — and revenue — on the table.",
    what: 'I design and build modern digital infrastructure from the ground up — websites, systems architecture, and operational tooling that are clean, scalable, and aligned with your brand and business model.',
    outcomes: [
      'A professional digital presence that builds trust immediately',
      'Systems architecture that supports real business workflows',
      'Scalable infrastructure that grows with the business',
      'Technical implementation without unnecessary complexity',
    ],
    for: 'Businesses with a digital presence that no longer reflects their operations or positioning.',
  },
  {
    id: 'operations',
    number: '03',
    label: 'Operations Optimization',
    headline: 'Replace Friction with Structure',
    summary:
      'Operational friction compounds quietly — until it becomes expensive. Unclear processes, manual workarounds, and fragmented communication create overhead that grows faster than the business.',
    what: 'I map how work actually flows across your organization, identify friction points, and redesign the processes, tools, and accountability structures that remove overhead and improve execution speed.',
    outcomes: [
      'Streamlined workflows that reduce manual intervention',
      'Clearer accountability and faster decision-making',
      'Reduced operational overhead without adding headcount',
      'Systems designed for how your team actually works',
    ],
    for: 'Operations-heavy organizations where manual processes and unclear ownership are limiting growth.',
  },
  {
    id: 'communications',
    number: '04',
    label: 'Executive Communication Systems',
    headline: 'Communication That Builds Trust and Drives Action',
    summary:
      "Poor communication systems are invisible until they're expensive. Misaligned teams, unclear messaging, and inconsistent client communication quietly erode performance and relationships.",
    what: 'I design internal and external communication frameworks that create alignment, reduce friction in client relationships, and give leadership teams the structure they need to operate at scale.',
    outcomes: [
      'Internal communication systems that create team clarity',
      'Client-facing frameworks that build trust and reduce friction',
      'Messaging architecture aligned to the brand and business goals',
      'Operational communication that scales with the organization',
    ],
    for: 'Leadership teams where communication gaps are limiting performance, client relationships, or organizational growth.',
  },
]

const approach = [
  {
    step: '01',
    title: 'Diagnosis',
    description:
      'Every engagement starts with understanding how your business actually operates — not how it looks on paper. We map workflows, identify friction points, and clarify business objectives before recommending anything.',
  },
  {
    step: '02',
    title: 'Strategy',
    description:
      'Based on the diagnosis, we design a clear systems strategy. This includes what gets built, what gets optimized, and what gets removed. No tools until the strategy is sound.',
  },
  {
    step: '03',
    title: 'Implementation',
    description:
      'Strategy becomes infrastructure. We build, integrate, and configure the systems — ensuring they are aligned to how your team works, not just technically functional.',
  },
  {
    step: '04',
    title: 'Optimization',
    description:
      'Systems require iteration. We monitor performance, identify gaps, and refine until the infrastructure is operating at the level your business needs.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        headline="Systems Built for Business Performance"
        supporting="Four focused service areas. Each one designed to reduce friction, improve execution, and create the infrastructure your business needs to scale."
      />

      {/* Services list */}
      <SectionWrapper className="bg-background" as="div">
        <div className="flex flex-col gap-0">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <div
                id={service.id}
                className="group grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-10 lg:gap-20 py-16 md:py-20 border-b border-border/40 last:border-0 scroll-mt-24"
              >
                {/* Left: label + meta */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display font-bold text-4xl text-white/[0.06] leading-none select-none tabular-nums">
                      {service.number}
                    </span>
                    <span className="text-xs font-sans text-gold/70 uppercase tracking-[0.16em]">
                      {service.label}
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-display-md text-white leading-[1.15]">
                    {service.headline}
                  </h2>
                  <p className="text-xs font-sans text-white/35 leading-[1.8] italic">
                    For: {service.for}
                  </p>
                </div>

                {/* Right: detail */}
                <div className="flex flex-col gap-8">
                  {/* Problem statement */}
                  <p className="font-sans text-base text-white/65 leading-[1.85]">
                    {service.summary}
                  </p>

                  {/* What I do */}
                  <div className="border-l border-gold/25 pl-6">
                    <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mb-3">
                      The Approach
                    </p>
                    <p className="font-sans text-sm text-white/60 leading-[1.85]">
                      {service.what}
                    </p>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mb-4">
                      What You Get
                    </p>
                    <ul className="flex flex-col gap-3">
                      {service.outcomes.map((outcome) => (
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
              <div className="group flex flex-col gap-5 lg:px-8 first:pl-0 last:pr-0 pb-10 lg:pb-0">
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
                Ready to Start
              </p>
              <h2 className="font-display font-bold text-display-xl text-white leading-[1.06] mb-8">
                Not sure which service fits?
                <br />
                <span className="text-white/55">Let&apos;s talk through it.</span>
              </h2>
              <p className="font-sans text-base text-white/45 leading-[1.85] mb-10 max-w-lg">
                Most engagements start with a single conversation. Bring your operational challenges —
                we&apos;ll identify where systems can create the most impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="https://cal.com/garymariner" size="lg" external>
                  Book a Consultation
                </Button>
                <Button href="/contact" variant="ghost" size="lg">
                  Send a Message
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
