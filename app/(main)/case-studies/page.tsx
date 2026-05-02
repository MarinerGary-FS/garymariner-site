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
  engagement: 'AI Systems & Growth',
  headline: 'From 500 Customers to 4,000 \u2014 While Cutting Agent Dependency 70%',
  context:
    'A global customer service operation with ~500 customers. The model was built on live agents \u2014 every new customer meant more staff, more cost, more complexity. Growth was becoming a liability.',
  problem: {
    body: 'The company needed to grow 8x without scaling the team 8x. The operation had no self-service infrastructure, inconsistent response times, and no structured approach to retention.',
    signals: [
      'Complete dependency on live agents',
      'No AI or self-service infrastructure',
      'Inconsistent response times across regions',
      'Rising cost without proportional revenue',
    ],
  },
  strategy: {
    body: 'Working directly with the founder, the strategy was to redesign the entire operation \u2014 not patch it. Deploy AI chatbot systems, build multi-channel infrastructure, and turn reactive support into proactive customer experience.',
    moves: [
      'AI chatbot systems for frontline interactions',
      'Multi-channel support (chat, social, SMS, email)',
      'Automated ticketing, routing, and escalation',
      'Self-service layers for routine inquiries',
      'KPI tracking and performance visibility',
    ],
  },
  execution: {
    body: 'Implementation spanned the USA, France, and Pakistan. Close collaboration with the owner ensured every decision aligned with the business vision, not just operational convenience.',
    items: [
      'Deployed AI chatbot handling majority of frontline volume',
      'Scaled from 500 to 4,000 customers without proportional headcount',
      'Integrated automation without service disruption',
      'Reduced agent dependency 70% through AI-assisted workflows',
      'Built customer experience systems driving retention and upsell',
    ],
  },
  results: [
    { value: '8x', label: 'Customer growth', context: '500 to 4,000 through systems, not headcount' },
    { value: '70%', label: 'Agent reduction', context: 'AI chatbot replaced manual handling' },
    { value: '90%', label: 'CSAT increase', context: 'Faster, more consistent handling' },
    { value: '$130K', label: 'Monthly revenue', context: 'Up from $75K' },
  ],
  insight:
    'They didn\u2019t need better tools. They needed a different operating model. The transformation worked because it started with how the organization operated \u2014 not what technology was available.',
  quote: 'The real leverage is in systems, not headcount.',
}

// ─── Radco Data ─────────────────────────────────────────────────────────────

const radco = {
  label: 'Case Study',
  company: 'Radco',
  industry: 'Property Operations',
  engagement: 'Operational Restructuring',
  headline: 'From 80% Occupancy and 360 Open Work Orders to Operational Clarity',
  context:
    'A multi-property portfolio underperforming on occupancy and maintenance. Leadership assumed they needed more people. The real issue was how work was structured.',
  strategy:
    'Mapped how work actually flowed, identified bottlenecks, and redesigned the systems governing leasing and maintenance. The goal: clarity, not capacity.',
  results: [
    { value: '93%', label: 'Portfolio occupancy', context: 'Up from ~80%, pre-leasing reached 96%' },
    { value: '94%', label: 'Backlog reduction', context: '360 work orders reduced to 23' },
  ],
  insight: 'Operational problems that look like staffing problems are usually systems problems.',
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
            <h2 className="font-display font-bold text-display-xl text-white">
              {digitalHarmony.headline}
            </h2>
            <p className="font-sans text-base text-white/60 leading-[1.85] lg:pt-2">
              {digitalHarmony.context}
            </p>
          </div>
        </Reveal>

        {/* Results — lead with proof */}
        <Reveal delay={100}>
          <div className="rounded-lg border border-border bg-surface overflow-hidden mb-16">
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
                    <span className="font-sans text-xs text-white/60 leading-[1.7]">{m}</span>
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
                <p className="font-display font-bold text-display-lg text-white mb-6">
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
            <span className="text-xs font-sans font-medium text-white/60 uppercase tracking-[0.16em]">
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

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 lg:gap-20 items-start">
          <Reveal>
            <div className="flex flex-col gap-6">
              <h2 className="font-display font-bold text-display-md text-white">
                {radco.headline}
              </h2>
              <p className="font-sans text-sm text-white/55 leading-[1.85]">
                {radco.context}
              </p>
              <p className="font-sans text-sm text-white/55 leading-[1.85]">
                {radco.strategy}
              </p>
              <div className="border-l border-gold/25 pl-5 mt-2">
                <p className="font-display font-semibold text-base text-white/75 leading-snug">
                  &ldquo;{radco.quote}&rdquo;
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="rounded-xl border border-border bg-background overflow-hidden">
              <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              {radco.results.map((r) => (
                <div key={r.label} className="flex flex-col gap-3 px-8 py-8 border-b border-border/30 last:border-0">
                  <span className="font-display font-bold text-display-lg text-white/85 leading-none">
                    {r.value}
                  </span>
                  <span className="font-sans text-sm text-white/60">{r.label}</span>
                  <span className="font-sans text-xs text-white/30">{r.context}</span>
                </div>
              ))}
            </div>
          </Reveal>
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
