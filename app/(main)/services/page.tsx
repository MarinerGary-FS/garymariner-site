import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Systems I Build — Gary L. Mariner II',
  description:
    'AI workflow architecture, website-to-CRM ecosystems, automation dashboards, conversion website systems, nonprofit infrastructure, and executive brand platforms.',
}

const domains = [
  {
    id: 'ai-systems',
    number: '01',
    label: 'AI Workflow Architecture',
    headline: 'AI Systems for Operational Scale',
    summary:
      'Most AI adoption stalls because the tool is never connected to how work actually moves. The result is experimentation without operational lift.',
    what: 'I map real workflows, identify where AI can remove manual work, and design practical implementation paths for intake, response, routing, analysis, and execution.',
    outcomes: [
      'AI workflows tied to measurable business outcomes',
      'Automation that reduces manual workload',
      'More consistent execution across repeated processes',
    ],
    for: 'Operators who need AI applied to real work, not another pilot.',
  },
  {
    id: 'digital-infrastructure',
    number: '02',
    label: 'Website-to-CRM Ecosystems',
    headline: 'Websites That Connect to the Business',
    summary:
      'A website should not be an isolated brochure. It should capture demand, route intent, and support the operational process behind the offer.',
    what: 'I design digital ecosystems that connect content, conversion paths, booking, CRM routing, follow-up, and reporting into one execution layer.',
    outcomes: [
      'Conversion-ready digital infrastructure',
      'Cleaner handoffs from visitor interest to business action',
      'CRM and booking pathways that support scale',
    ],
    for: 'Organizations whose website needs to function as a business engine.',
  },
  {
    id: 'operations',
    number: '03',
    label: 'Automation & Operational Dashboards',
    headline: 'Make Work Visible, Repeatable, and Easier to Manage',
    summary:
      'Manual updates, unclear status, and fragmented tools create overhead that grows quietly until it slows the business.',
    what: 'I structure automations, dashboards, and workflow visibility so teams can see what matters, reduce repetitive coordination, and act faster.',
    outcomes: [
      'Streamlined workflows with less manual intervention',
      'Clearer ownership, status, and performance visibility',
      'Reduced overhead without adding unnecessary headcount',
    ],
    for: 'Teams with too much manual coordination and too little operational visibility.',
  },
  {
    id: 'communications',
    number: '04',
    label: 'Conversion Website Systems',
    headline: 'Premium Websites Built Around Proof and Action',
    summary:
      'A strong digital presence must establish authority quickly, prove capability, and guide the visitor toward a clear next action.',
    what: 'I build executive websites around positioning, proof, case studies, conversion pathways, analytics, and content architecture.',
    outcomes: [
      'Clearer positioning and stronger immediate legitimacy',
      'Case study-driven trust architecture',
      'Lead capture and booking systems built into the experience',
    ],
    for: 'Founders, consultants, and organizations that need authority and conversion.',
  },
  {
    id: 'nonprofit-infrastructure',
    number: '05',
    label: 'Nonprofit Digital Infrastructure',
    headline: 'Digital Systems for Mission-Driven Operations',
    summary:
      'Nonprofit platforms often need to support donors, events, volunteers, partners, and community pathways without creating administrative drag.',
    what: 'I connect website architecture, event check-ins, donation pathways, CRM routing, and communications into infrastructure that supports the mission.',
    outcomes: [
      'Cleaner community and donor journeys',
      'Operational pathways for events, outreach, and CRM follow-up',
      'Digital infrastructure that can expand with the organization',
    ],
    for: 'Community organizations and nonprofits modernizing how they engage and operate.',
  },
  {
    id: 'executive-brand-platforms',
    number: '06',
    label: 'Executive Brand Platforms',
    headline: 'Authority Platforms for Operators and Leaders',
    summary:
      'Executive brands need more than a polished bio. They need a platform that clarifies expertise, shows proof, and supports business development.',
    what: 'I build positioning, content architecture, proof systems, social ecosystems, and consultation pathways for executive-level trust.',
    outcomes: [
      'Sharper executive positioning',
      'More credible proof and thought leadership structure',
      'A clear path from attention to consultation',
    ],
    for: 'Operators, founders, and leaders whose digital presence must create trust quickly.',
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
        eyebrow="Systems I Build"
        headline="AI, automation, websites, and operations built as one execution layer."
        supporting="Each system is designed to reduce friction, improve visibility, and turn digital infrastructure into measurable operational improvement."
      />

      {/* Why AI Fails — Authority section */}
      <SectionWrapper className="bg-surface border-t border-border/40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">
          <Reveal>
            <div className="lg:sticky lg:top-36">
                <p className="text-xs font-sans text-gold/70 uppercase tracking-[0.18em] mb-8">
                Executive AI Clarity
              </p>
              <h2 className="font-display font-bold text-display-lg text-white leading-[1.1]">
                AI only creates value when it is connected to operations.
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
                  AI adoption often starts with a vendor pitch or a competitor announcement. Leadership buys in. Tools are deployed. The work barely changes because the implementation was never tied to workflows, ownership, or business outcomes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="flex flex-col gap-4">
                <h3 className="font-display font-semibold text-lg text-white">
                  Why it keeps happening
                </h3>
                <p className="font-sans text-sm text-white/55 leading-[1.85]">
                  AI exposes broken handoffs, unclear ownership, and disconnected communication. The technology does not create those problems. It makes them expensive and visible.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="flex flex-col gap-4 border-l border-gold/25 pl-6">
                <h3 className="font-display font-semibold text-lg text-white">
                  What actually works
                </h3>
                <p className="font-sans text-sm text-white/55 leading-[1.85]">
                  Start with the business process. Map how work moves. Identify where manual effort, slow communication, or missing data creates friction. Then build AI workflows, automation, and infrastructure around that reality.
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
                <p className="font-sans text-sm text-white/60 leading-[1.8]">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
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
                  Apply This To Your Business
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
