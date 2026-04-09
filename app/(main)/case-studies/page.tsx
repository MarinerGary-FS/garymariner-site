import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Case Studies — Gary L. Mariner II',
  description:
    'Real transformations in AI systems implementation, operations optimization, and digital infrastructure design. Digital Harmony and Radco.',
}

// ─── Digital Harmony Data ─────────────────────────────────────────────────

const digitalHarmony = {
  label: 'Flagship Transformation',
  company: 'Digital Harmony',
  industry: 'Global Customer Operations',
  engagement: 'AI Systems Implementation & Growth',
  headline: 'From 500 Customers to 4,000 — While Reducing Operational Dependency by 70%',
  context:
    'Digital Harmony was a growing customer service operation with a base of roughly 500 customers across multiple global regions. The business was scaling, but the operational model — built on live agent handling — couldn\u2019t keep pace. Every new customer meant more staff, more cost, and more complexity. Growth was becoming a liability.',
  problem: {
    body: 'The operation was entirely dependent on live agents to handle incoming volume. As the customer base grew, headcount requirements grew proportionally. Response times were inconsistent across channels and regions, the cost structure was unsustainable, and there was no mechanism for retention or upsell beyond the initial service interaction. The company needed to grow 8x without scaling the team 8x.',
    signals: [
      'Complete dependency on live agents for all customer interactions',
      'No self-service infrastructure or AI-assisted workflows',
      'Inconsistent response times across channels and time zones',
      'Rising operational cost without proportional revenue growth',
      'No structured approach to customer retention or expansion',
    ],
  },
  strategy: {
    body: 'Working directly with the founder and leadership team, the strategy was to fundamentally redesign how the operation worked — not to patch it with incremental improvements. The approach: implement AI-driven automation and chatbot systems to handle volume at scale, build self-service infrastructure to deflect routine inquiries, and create structured communication workflows that turned reactive support into proactive customer experience.',
    moves: [
      'Design and deploy AI chatbot systems to handle frontline customer interactions',
      'Build multi-channel support infrastructure (chat, social, SMS, email)',
      'Implement automated ticketing, routing, and escalation workflows',
      'Create self-service layers to deflect routine inquiries',
      'Develop KPI tracking and performance visibility systems',
      'Align customer experience systems with retention and revenue goals',
    ],
  },
  execution: {
    body: 'Implementation spanned global operations across the USA, France, and Pakistan. This wasn\u2019t a technology deployment — it was an organizational transformation that required coordinating across time zones, languages, and team cultures while maintaining service continuity throughout the transition. Close collaboration with the owner ensured every systems decision aligned with the business vision, not just operational convenience.',
    items: [
      'Built and deployed AI chatbot handling the majority of frontline interactions',
      'Scaled operations from 500 to 4,000 customers without proportional headcount growth',
      'Integrated automation into live support operations without service disruption',
      'Reduced live agent dependency by 70% through structured AI-assisted workflows',
      'Established customer experience systems that drove retention and upsell',
      'Created operational visibility through real-time performance dashboards',
    ],
  },
  results: [
    { value: '8x', label: 'Customer base growth', context: 'Scaled from 500 to 4,000 customers through systems — not headcount' },
    { value: '70%', label: 'Reduction in live agent dependency', context: 'AI chatbot and automated workflows replaced manual handling for the majority of volume' },
    { value: '90%', label: 'Increase in customer satisfaction', context: 'Faster response times and consistent handling improved CSAT significantly' },
    { value: '$130K', label: 'Monthly revenue', context: 'Up from $75K — driven by improved retention, capacity, and customer experience' },
  ],
  insight:
    'Digital Harmony didn\u2019t just need better tools. They needed a fundamentally different operating model. By redesigning workflows, implementing AI-driven automation, and building systems that could scale independently of headcount, the business grew 8x while becoming more efficient, more responsive, and more profitable. The transformation worked because it started with how the organization actually operated — not with what technology was available.',
  quote: 'The real leverage is in systems, not headcount.',
}

// ─── Radco Data ─────────────────────────────────────────────────────────────

const radco = {
  label: 'Case Study',
  company: 'Radco',
  industry: 'Property Operations',
  engagement: 'Operational Restructuring',
  headline: 'Turning Operational Friction into Measurable Performance',
  context:
    'A multi-property management portfolio was underperforming across two critical operational dimensions — occupancy rates and maintenance responsiveness. Leadership assumed the answer was more resources. The real issue was how work was structured.',
  problem: {
    body: 'Portfolio occupancy had stagnated near 80%, well below market potential. Simultaneously, the maintenance team was managing 360 open work orders at any given time — creating resident frustration, staff burnout, and compounding operational drag. Both problems traced to the same root cause: workflows that had grown organically without structure or accountability.',
    signals: [
      'Occupancy stagnant at ~80% despite strong market demand',
      '360+ open maintenance work orders creating operational backlog',
      'Leasing workflows disconnected from maintenance timelines',
      'No structured accountability across teams or functions',
    ],
  },
  strategy:
    'Rather than adding headcount, the approach focused on operational restructuring — mapping how work actually flowed across leasing and maintenance, identifying where bottlenecks were concentrated, and redesigning the systems that governed both. The goal was to create clarity, not add capacity.',
  execution: [
    'Mapped end-to-end workflows across leasing and maintenance operations',
    'Redesigned work order prioritization and escalation systems',
    'Aligned leasing pipeline with unit-readiness timelines',
    'Established structured accountability and visibility for both teams',
    'Implemented tracking systems to surface bottlenecks in real time',
  ],
  results: [
    { value: '93%', label: 'Portfolio occupancy', context: 'Up from ~80%, with pre-leasing reaching 96% — driven by workflow alignment' },
    { value: '94%', label: 'Backlog reduction', context: 'Open work orders reduced from 360 to 23 through restructured prioritization' },
  ],
  insight: 'Operational problems that look like staffing problems are usually systems problems. Radco didn\u2019t need more people — it needed structured workflows, clear accountability, and visibility into how work actually moved across the organization.',
  quote: 'The problem was never capacity. It was clarity.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        headline="Transformation in Practice"
        supporting="Real engagements. Measurable outcomes. Built on systems design, workflow optimization, and strategic AI implementation."
      />

      {/* ── Digital Harmony ─────────────────────────────────────────────── */}
      <SectionWrapper className="bg-background" id="digital-harmony">
        {/* Section label */}
        <Reveal className="mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-sans font-medium text-gold uppercase tracking-[0.16em]">
              {digitalHarmony.label}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <span className="text-xs font-sans text-white/35 tracking-wide">
              {digitalHarmony.company}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <span className="text-xs font-sans text-white/35 tracking-wide">
              {digitalHarmony.industry}
            </span>
          </div>
        </Reveal>

        {/* Headline + context */}
        <Reveal delay={60} className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-start">
            <h2 className="font-display font-bold text-display-xl text-white leading-[1.06]">
              {digitalHarmony.headline}
            </h2>
            <p className="font-sans text-base text-white/60 leading-[1.85] lg:pt-2">
              {digitalHarmony.context}
            </p>
          </div>
        </Reveal>

        {/* Results — lead with proof */}
        <Reveal delay={100}>
          <div className="rounded-2xl border border-border bg-surface overflow-hidden mb-16">
            <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
              {digitalHarmony.results.map((r) => (
                <div key={r.label} className="flex flex-col gap-4 px-6 md:px-8 py-12">
                  <span className="font-display font-bold text-display-3xl text-gold-gradient leading-none">
                    {r.value}
                  </span>
                  <div className="flex flex-col gap-1.5">
                    <span className="font-sans text-sm font-medium text-white/75">
                      {r.label}
                    </span>
                    <span className="font-sans text-xs text-white/40 leading-[1.6]">
                      {r.context}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Problem / Strategy / Execution — structured narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:divide-x lg:divide-border/40">

          {/* Problem */}
          <Reveal delay={80}>
            <div className="flex flex-col gap-6 lg:pr-10 pb-12 lg:pb-0">
              <div>
                <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mb-4">
                  The Problem
                </p>
                <p className="font-sans text-sm text-white/60 leading-[1.85] mb-6">
                  {digitalHarmony.problem.body}
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {digitalHarmony.problem.signals.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-[0.45em] w-1 h-1 rounded-full bg-white/20 shrink-0" />
                    <span className="font-sans text-xs text-white/45 leading-[1.7]">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Strategy */}
          <Reveal delay={140}>
            <div className="flex flex-col gap-6 lg:px-10 py-12 lg:py-0 border-t lg:border-0 border-border/30">
              <div>
                <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mb-4">
                  The Strategy
                </p>
                <p className="font-sans text-sm text-white/60 leading-[1.85] mb-6">
                  {digitalHarmony.strategy.body}
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {digitalHarmony.strategy.moves.map((m) => (
                  <li key={m} className="flex items-start gap-3">
                    <span className="mt-[0.45em] w-1 h-1 rounded-full bg-gold/40 shrink-0" />
                    <span className="font-sans text-xs text-white/50 leading-[1.7]">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Execution */}
          <Reveal delay={200}>
            <div className="flex flex-col gap-6 lg:pl-10 pt-12 lg:pt-0 border-t lg:border-0 border-border/30">
              <div>
                <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mb-4">
                  The Execution
                </p>
                <p className="font-sans text-sm text-white/60 leading-[1.85] mb-6">
                  {digitalHarmony.execution.body}
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {digitalHarmony.execution.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[0.45em] w-1 h-1 rounded-full bg-white/20 shrink-0" />
                    <span className="font-sans text-xs text-white/45 leading-[1.7]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Insight / Pull quote */}
        <Reveal delay={100}>
          <div className="mt-16 pt-14 border-t border-border/40">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center">
              <blockquote>
                <p className="font-display font-bold text-display-lg text-white leading-[1.12] mb-6">
                  &ldquo;{digitalHarmony.quote}&rdquo;
                </p>
                <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em]">
                  Key Insight — Digital Harmony Transformation
                </p>
              </blockquote>
              <p className="font-sans text-sm text-white/55 leading-[1.9]">
                {digitalHarmony.insight}
              </p>
            </div>
          </div>
        </Reveal>
      </SectionWrapper>

      {/* ── Radco — Supporting Case Study ──────────────────────────────── */}
      <SectionWrapper className="bg-surface border-t border-border/40" id="radco">
        <Reveal className="mb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-sans font-medium text-white/50 uppercase tracking-[0.16em]">
              {radco.label}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <span className="text-xs font-sans text-white/35 tracking-wide">
              {radco.company}
            </span>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <span className="text-xs font-sans text-white/35 tracking-wide">
              {radco.industry}
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 lg:gap-20 items-start">
          {/* Left: narrative */}
          <Reveal>
            <div className="flex flex-col gap-8">
              <h2 className="font-display font-bold text-display-md text-white leading-[1.12]">
                {radco.headline}
              </h2>
              <p className="font-sans text-base text-white/60 leading-[1.85]">
                {radco.context}
              </p>
              <div>
                <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mb-3">
                  The Approach
                </p>
                <p className="font-sans text-sm text-white/55 leading-[1.85]">
                  {radco.strategy}
                </p>
              </div>
              <div className="border-l border-gold/25 pl-5">
                <p className="font-display font-semibold text-base text-white/80 leading-snug mb-2">
                  &ldquo;{radco.quote}&rdquo;
                </p>
                <p className="font-sans text-xs text-white/40 leading-[1.8]">
                  {radco.insight}
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: metrics */}
          <Reveal delay={100}>
            <div className="rounded-xl border border-border bg-background overflow-hidden">
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
                {radco.results.map((r) => (
                  <div key={r.label} className="flex flex-col gap-4 px-8 py-10">
                    <span className="font-display font-bold text-display-xl text-white/85 leading-none">
                      {r.value}
                    </span>
                    <div className="flex flex-col gap-1">
                      <span className="font-sans text-sm font-medium text-white/70">
                        {r.label}
                      </span>
                      <span className="font-sans text-xs text-white/35 leading-[1.6]">
                        {r.context}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
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
                These outcomes came from systems thinking.
                <br />
                <span className="text-white/55">Yours can too.</span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Start a Conversation
                </Button>
                <Button href="/services" variant="ghost" size="lg">
                  View Focus Areas
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
