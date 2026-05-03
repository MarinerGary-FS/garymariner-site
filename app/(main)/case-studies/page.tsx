import type { Metadata } from 'next'
import { ArrowDown, ArrowUp, Bot, GitBranch, Inbox, Route, Zap } from 'lucide-react'
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
  headline: 'Support load dropped 70%. Manual work was removed.',
  subline: 'An AI system replaced the bottleneck and scaled output.',
  problem: [
    'Support requests were handled manually.',
    'Response times were inconsistent.',
    'Growth required hiring more staff.',
  ],
  system: [
    { label: 'Intake', line: 'Requests enter a unified system layer.', icon: Inbox },
    { label: 'AI Layer', line: 'AI intercepts and resolves common issues instantly.', icon: Bot },
    { label: 'Workflow', line: 'Edge cases are routed automatically.', icon: Route },
    { label: 'Output', line: 'Response time drops. Load decreases.', icon: Zap },
  ],
  results: [
    { value: '70%', marker: '↓', label: 'Support Load Reduced', icon: ArrowDown },
    { value: '90%', marker: '↑', label: 'Customer Satisfaction', icon: ArrowUp },
    { value: '$130K/mo', marker: '', label: 'Revenue Output', icon: GitBranch },
  ],
  action: 'Most incoming requests were resolved without human intervention.',
  meaning: [
    'Systems replace effort.',
    'Automation removes friction.',
    'AI scales output without scaling cost.',
  ],
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
      {/* ── Digital Harmony ─────────────────────────────────────────────── */}
      <SectionWrapper
        className="relative overflow-hidden bg-background pt-24 md:pt-32 pb-14 md:pb-16"
        innerClassName="max-w-[1120px]"
        id="digital-harmony"
      >
        <div className="absolute inset-0 bg-grid opacity-[0.16]" />
        <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-gold/[0.055] blur-[110px]" />

        {/* Section label */}
        <div className="relative mb-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-sans font-medium text-gold uppercase tracking-[0.16em]">
              Case Studies
            </span>
            <span className="w-1 h-1 rounded-full bg-white/15" />
            <span className="text-xs font-sans text-white/35 tracking-wide">
              {digitalHarmony.company}
            </span>
            <span className="hidden sm:block w-1 h-1 rounded-full bg-white/15" />
            <span className="hidden sm:inline text-xs font-sans text-white/35 tracking-wide">
              {digitalHarmony.industry}
            </span>
          </div>
        </div>

        {/* Hero */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.08fr)_360px] gap-10 lg:gap-20 items-end">
            <div className="min-w-0">
              <p className="mb-5 text-xs font-sans font-medium uppercase tracking-[0.16em] text-white/32">
                {digitalHarmony.label}
              </p>
              <h1 className="max-w-4xl font-display font-bold text-[clamp(2.2rem,7.2vw,7.25rem)] leading-[1.02] text-white">
                {digitalHarmony.headline}
              </h1>
            </div>
            <div className="min-w-0 lg:pb-3">
              <p className="max-w-sm font-sans text-xl md:text-2xl font-medium leading-[1.25] text-white/68">
                {digitalHarmony.subline}
              </p>
              <div className="mt-7 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Button href="https://www.marinernexus.com" external size="lg">
                  Apply This System
                </Button>
                <Button href="https://www.marinernexus.com" external variant="ghost" size="lg">
                  Enter Mariner Nexus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="relative overflow-hidden bg-background py-14 md:py-18"
        innerClassName="max-w-[1120px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-16 items-center">
          {/* Problem */}
          <div>
            <div className="min-w-0">
              <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mb-7">
                The Problem
              </p>
              <div className="space-y-5">
                {digitalHarmony.problem.map((line) => (
                  <p
                    key={line}
                    className="border-l border-white/14 pl-5 font-display text-xl md:text-3xl font-semibold leading-tight text-white"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="relative min-h-[260px] min-w-0 overflow-hidden rounded-lg border border-white/10 bg-surface/70 p-6 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(201,168,76,0.12),transparent_31%),linear-gradient(135deg,rgba(255,255,255,0.035),transparent_48%)]" />
              <div className="relative h-[220px]">
                <span className="absolute left-[7%] top-[18%] h-3 w-3 rounded-full bg-white/28 shadow-[0_0_24px_rgba(255,255,255,0.22)]" />
                <span className="absolute left-[35%] top-[9%] h-2.5 w-2.5 rounded-full bg-gold/70 shadow-[0_0_28px_rgba(201,168,76,0.34)]" />
                <span className="absolute left-[61%] top-[28%] h-4 w-4 rounded-full bg-white/20" />
                <span className="absolute left-[82%] top-[13%] h-2 w-2 rounded-full bg-white/36" />
                <span className="absolute left-[18%] top-[70%] h-4 w-4 rounded-full bg-white/18" />
                <span className="absolute left-[47%] top-[62%] h-2 w-2 rounded-full bg-white/42" />
                <span className="absolute left-[73%] top-[76%] h-3 w-3 rounded-full bg-gold/55" />
                <span className="absolute left-[10%] top-[26%] h-px w-[31%] -rotate-12 bg-white/12" />
                <span className="absolute left-[38%] top-[17%] h-px w-[30%] rotate-[19deg] bg-gold/25" />
                <span className="absolute left-[60%] top-[38%] h-px w-[29%] -rotate-[30deg] bg-white/10" />
                <span className="absolute left-[21%] top-[72%] h-px w-[27%] -rotate-[9deg] bg-white/10" />
                <span className="absolute left-[48%] top-[68%] h-px w-[28%] rotate-[14deg] bg-gold/20" />
                <span className="absolute bottom-2 left-0 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="absolute right-4 top-5 hidden text-[10px] font-sans uppercase tracking-[0.2em] text-white/24 sm:block">
                  Broken Flow
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="relative overflow-hidden bg-surface py-12 md:py-16 border-y border-border/40"
        innerClassName="max-w-[1120px]"
      >
        {/* System */}
        <Reveal className="mb-8">
          <div className="flex items-end justify-between gap-8">
            <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em]">
              The System
            </p>
            <span className="hidden md:block h-px flex-1 bg-gradient-to-r from-gold/25 to-transparent" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {digitalHarmony.system.map((block, index) => {
            const Icon = block.icon
            return (
              <Reveal key={block.label} delay={index * 55}>
                <div className="liquid-glass group h-full rounded-lg p-5 transition-transform duration-400 hover:scale-[1.02]">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.035] text-gold">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <p className="mb-3 text-xs font-sans uppercase tracking-[0.14em] text-white/34">
                    {block.label}
                  </p>
                  <p className="font-sans text-sm font-medium leading-snug text-white/72">
                    {block.line}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="relative overflow-hidden bg-background py-14 md:py-18"
        innerClassName="max-w-[1120px]"
      >
        {/* Results */}
        <Reveal className="mb-8">
          <div className="flex items-center justify-between gap-6">
            <p className="text-xs font-sans text-gold uppercase tracking-[0.16em]">
              Results
            </p>
            <p className="text-xs font-sans text-white/38">Measured within months.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4 md:gap-5">
          {digitalHarmony.results.map((r, index) => {
            const Icon = r.icon
            return (
              <Reveal
                key={r.label}
                delay={index * 80}
                className={index === 0 ? 'lg:row-span-2' : ''}
              >
                <div className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-lg border border-white/10 bg-surface p-6 md:p-8 transition-transform duration-400 hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(201,168,76,0.16),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_44%)] opacity-80" />
                  <div className="relative flex items-center justify-between">
                    <Icon size={22} strokeWidth={1.7} className="text-gold/75" />
                    <span className="h-px w-20 bg-gradient-to-r from-transparent to-white/16" />
                  </div>
                  <div className="relative mt-12">
                    <div className="flex items-start gap-3">
                      <span className="font-display font-bold text-[clamp(3.75rem,13vw,10.5rem)] leading-[0.78] text-gold-gradient">
                        {r.value}
                      </span>
                      {r.marker && (
                        <span className="mt-2 font-display text-[clamp(2.75rem,6vw,5.5rem)] leading-none text-gold/70">
                          {r.marker}
                        </span>
                      )}
                    </div>
                    <p className="mt-6 max-w-xs font-sans text-base md:text-xl font-semibold leading-tight text-white">
                      {r.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </SectionWrapper>

      <SectionWrapper
        className="relative overflow-hidden bg-background pt-2 pb-14 md:pb-18"
        innerClassName="max-w-[1120px]"
      >
        {/* System in action + meaning */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-12 items-start">
          <Reveal>
            <div className="rounded-lg border border-white/10 bg-surface/65 p-6 md:p-8">
              <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mb-5">
                System in Action
              </p>
              <p className="font-display text-3xl md:text-4xl font-semibold leading-tight text-white">
                {digitalHarmony.action}
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="lg:pt-10">
              <p className="text-xs font-sans text-white/30 uppercase tracking-[0.15em] mb-5">
                What This Means
              </p>
              <div className="space-y-4">
                {digitalHarmony.meaning.map((line) => (
                  <p
                    key={line}
                    className="font-display text-2xl md:text-3xl font-semibold leading-tight text-white/82"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Conversion bridge */}
        <Reveal delay={120}>
          <div className="mt-10 md:mt-12 rounded-lg border border-gold/25 bg-[linear-gradient(135deg,rgba(201,168,76,0.105),rgba(255,255,255,0.025)_42%,rgba(255,255,255,0.01))] p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-7 lg:gap-10 items-center">
              <h2 className="max-w-3xl font-display text-4xl md:text-display-lg font-bold leading-tight text-white">
                If your business depends on manual work,
                <br />
                <span className="text-white/58">this is already costing you.</span>
              </h2>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Button href="https://www.marinernexus.com" external size="lg">
                  Apply This System
                </Button>
                <Button href="https://www.marinernexus.com" external variant="ghost" size="lg">
                  Enter Mariner Nexus
                </Button>
              </div>
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
      <section className="relative px-5 md:px-8 lg:px-10 py-14 md:py-18 bg-background border-t border-border/40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gold/[0.06] blur-[120px] pointer-events-none" />
        <div className="relative max-w-site mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-7 lg:gap-12 items-center">
              <h2 className="max-w-3xl font-display text-4xl md:text-display-lg font-bold leading-tight text-white">
                If your business depends on manual work,
                <br />
                <span className="text-white/58">this is already costing you.</span>
              </h2>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <Button href="https://www.marinernexus.com" external size="lg">
                  Apply This System
                </Button>
                <Button href="https://www.marinernexus.com" external variant="ghost" size="lg">
                  Enter Mariner Nexus
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
