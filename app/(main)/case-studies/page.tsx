import type { Metadata } from 'next'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Gauge,
  GitBranch,
  MessageSquare,
  Network,
  Route,
  Workflow,
  Zap,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/utils'

const nexusHref = 'https://www.marinernexus.com'

export const metadata: Metadata = {
  title: 'Digital Harmony Case Study - Gary L. Mariner II',
  description:
    'A visual breakdown of the AI-powered support system that reduced support load 70%, increased satisfaction 90%, and scaled revenue to $130K/month.',
}

const problemPoints = [
  'High manual workload',
  'Slow response times',
  'Limited scalability',
]

const systemBlocks: Array<{
  title: string
  description: string
  icon: LucideIcon
}> = [
  {
    title: 'Intake Layer',
    description: 'Centralized customer entry points',
    icon: MessageSquare,
  },
  {
    title: 'AI Layer',
    description: 'Chatbot handles primary requests',
    icon: Bot,
  },
  {
    title: 'Workflow Layer',
    description: 'Automated routing + resolution',
    icon: Workflow,
  },
  {
    title: 'Output Layer',
    description: 'Faster responses, reduced load',
    icon: Zap,
  },
]

const results = [
  {
    value: '70%',
    signal: 'down',
    label: 'Support Load',
  },
  {
    value: '90%',
    signal: 'up',
    label: 'Customer Satisfaction',
  },
  {
    value: '$130K/mo',
    signal: 'from $75K',
    label: 'Revenue',
  },
]

const meaningPoints = [
  'Systems replace effort',
  'Automation removes friction',
  'AI scales output without scaling cost',
]

export default function CaseStudiesPage() {
  return (
    <main className="bg-black text-white">
      <CaseStudyHero />
      <ProblemSection />
      <SystemSection />
      <ResultsSection />
      <SystemInActionSection />
      <MeaningSection />
      <ConversionBridge />
    </main>
  )
}

function CaseStudyHero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden bg-black px-5 pb-14 pt-28 md:px-8 md:pb-16 md:pt-36 lg:px-10">
      <SystemCinema className="absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.82)_36%,rgba(0,0,0,0.42)_70%,#000_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(92vh-10rem)] max-w-site items-center">
        <div className="hero-animated max-w-3xl">
          <p className="mb-5 font-sans text-xs font-semibold uppercase tracking-[0.22em] text-gold">
            Case Study
          </p>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.98] text-white">
            Support load dropped 70%.
            <span className="block text-white/[0.62]">The system replaced manual work.</span>
          </h1>
          <p className="mt-7 max-w-2xl font-sans text-base leading-7 text-white/[0.62] md:text-lg">
            An AI-powered support system transformed operations and unlocked scalable growth.
          </p>
          <div className="mt-9">
            <Button
              href={nexusHref}
              external
              size="lg"
              trackingEvent="nexus_case_study_hero_click"
              trackingLabel="Apply This System"
            >
              Apply This System
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProblemSection() {
  return (
    <section className="system-section relative overflow-hidden bg-black px-5 py-16 md:px-8 md:py-20 lg:px-10">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="relative mx-auto grid max-w-site gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <Reveal>
          <h2 className="max-w-xl font-display text-display-lg font-bold text-white">
            The problem wasn&apos;t support. It was the system.
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-6 md:grid-cols-[0.72fr_1fr] md:items-center">
            <ul className="space-y-4">
              {problemPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm font-medium text-white/[0.72]">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
            <BrokenFlowVisual />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function SystemSection() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 py-16 md:px-8 md:py-24 lg:px-10">
      <div className="absolute inset-0 flow-wash" />
      <div className="relative mx-auto max-w-site">
        <Reveal className="mb-10 md:mb-14">
          <h2 className="max-w-3xl font-display text-display-xl font-bold text-white">
            The system that replaced the bottleneck
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative">
            <div className="absolute left-8 right-8 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-gold/[0.35] to-transparent lg:block" />
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {systemBlocks.map((block, index) => (
                <SystemBlock key={block.title} block={block} index={index} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function SystemBlock({
  block,
  index,
}: {
  block: (typeof systemBlocks)[number]
  index: number
}) {
  const Icon = block.icon

  return (
    <div className="group relative">
      <div className="liquid-glass relative min-h-[210px] overflow-hidden rounded-lg p-5 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-gold/30 group-hover:shadow-[0_22px_80px_rgba(201,168,76,0.08)]">
        <div className="mb-9 flex items-center justify-between">
          <span className="font-sans text-xs text-white/[0.32]">0{index + 1}</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.04] text-gold">
            <Icon className="h-4 w-4" />
          </span>
        </div>
        <h3 className="font-display text-xl font-semibold text-white">{block.title}</h3>
        <p className="mt-3 max-w-[13rem] text-sm leading-6 text-white/[0.55]">{block.description}</p>
      </div>
    </div>
  )
}

function ResultsSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-16 md:px-8 md:py-24 lg:px-10">
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.055] blur-[120px]" />
      <div className="relative mx-auto max-w-site">
        <Reveal className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-display text-display-md font-bold text-white">Hard proof</h2>
          <p className="text-sm text-white/[0.42]">Measured within months of system deployment.</p>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-3">
          {results.map((result, index) => (
            <Reveal key={result.label} delay={index * 90}>
              <div className="group min-h-[260px] rounded-lg border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/[0.28] hover:bg-white/[0.04] md:p-7">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-sans text-xs uppercase tracking-[0.18em] text-white/[0.28]">
                    Result
                  </span>
                  <SignalPill signal={result.signal} />
                </div>
                <p className="font-display text-[clamp(3.25rem,7vw,5.6rem)] font-bold leading-none text-gold-gradient">
                  {result.value}
                </p>
                <p className="mt-5 text-base font-semibold text-white/[0.78]">{result.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SignalPill({ signal }: { signal: string }) {
  if (signal === 'down') {
    return (
      <span className="rounded-full border border-gold/20 bg-gold/[0.08] px-3 py-1 text-xs font-semibold text-gold">
        ↓
      </span>
    )
  }

  if (signal === 'up') {
    return (
      <span className="rounded-full border border-gold/20 bg-gold/[0.08] px-3 py-1 text-xs font-semibold text-gold">
        ↑
      </span>
    )
  }

  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/[0.55]">
      {signal}
    </span>
  )
}

function SystemInActionSection() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-5 py-16 md:px-8 md:py-24 lg:px-10">
      <div className="relative mx-auto max-w-site">
        <Reveal>
          <div className="system-card noise-overlay relative min-h-[440px] overflow-hidden rounded-xl border border-white/[0.08] bg-black shadow-[0_28px_100px_rgba(0,0,0,0.4)]">
            <ActionVisual />
            <div className="absolute inset-x-4 bottom-4 md:inset-x-auto md:bottom-6 md:left-6 md:max-w-md">
              <div className="liquid-glass rounded-lg p-5">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  System In Action
                </p>
                <p className="font-display text-xl font-semibold leading-tight text-white">
                  AI handled the majority of incoming requests, reducing dependency on live agents.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function MeaningSection() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-16 md:px-8 md:py-20 lg:px-10">
      <div className="relative mx-auto grid max-w-site gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <h2 className="max-w-xl font-display text-display-lg font-bold text-white">
            This is what most businesses are missing
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid gap-3">
            {meaningPoints.map((point) => (
              <li
                key={point}
                className="flex items-center gap-4 rounded-lg border border-white/[0.08] bg-white/[0.025] p-4 text-base font-medium text-white/[0.74]"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-gold" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

function ConversionBridge() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-16 md:px-8 md:py-24 lg:px-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.12),transparent_38%)]" />
      <div className="relative mx-auto max-w-site">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-display-xl font-bold text-white">
              If this looks familiar, it should.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.58]">
              Most businesses don&apos;t need more people. They need a better system.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                href={nexusHref}
                external
                size="lg"
                trackingEvent="nexus_case_study_bridge_click"
                trackingLabel="Apply This To Your Business"
              >
                Apply This To Your Business
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={nexusHref}
                external
                variant="ghost"
                size="lg"
                trackingEvent="nexus_case_study_bridge_secondary_click"
                trackingLabel="Enter Mariner Nexus"
              >
                Enter Mariner Nexus
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function SystemCinema({ className }: { className?: string }) {
  return (
    <div className={cn('overflow-hidden', className)}>
      <div className="absolute inset-0 bg-grid opacity-[0.16]" />
      <div className="hero-drift absolute right-[-12%] top-[8%] h-[620px] w-[620px] rounded-full border border-gold/10 md:right-[4%]">
        <div className="system-orbit absolute inset-8 rounded-full opacity-[0.45]" />
        <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm" />
      </div>
      <div className="absolute right-[8%] top-[30%] hidden w-[440px] md:block">
        <SystemNode className="left-0 top-0" icon={MessageSquare} label="Intake" />
        <SystemNode className="left-[42%] top-20" icon={Bot} label="AI" active />
        <SystemNode className="right-0 top-44" icon={Route} label="Routing" />
        <SystemNode className="left-[18%] top-64" icon={Gauge} label="Output" />
        <div className="absolute left-[62px] top-[42px] h-px w-40 rotate-[24deg] bg-gradient-to-r from-gold/50 to-white/10" />
        <div className="absolute left-[238px] top-[120px] h-px w-32 rotate-[31deg] bg-gradient-to-r from-gold/40 to-white/10" />
        <div className="absolute left-[108px] top-[252px] h-px w-44 -rotate-[33deg] bg-gradient-to-r from-white/10 to-gold/[0.35]" />
      </div>
    </div>
  )
}

function SystemNode({
  className,
  icon: Icon,
  label,
  active,
}: {
  className?: string
  icon: LucideIcon
  label: string
  active?: boolean
}) {
  return (
    <div
      className={cn(
        'absolute flex items-center gap-2 rounded-lg border px-3 py-2 backdrop-blur-md',
        active
          ? 'border-gold/30 bg-gold/[0.08] text-gold'
          : 'border-white/10 bg-white/[0.035] text-white/[0.58]',
        className
      )}
    >
      <Icon className="h-4 w-4" />
      <span className="text-xs font-semibold uppercase tracking-[0.14em]">{label}</span>
    </div>
  )
}

function BrokenFlowVisual() {
  const nodes = [
    { label: 'Agents', x: '8%', y: '18%' },
    { label: 'Tickets', x: '62%', y: '10%' },
    { label: 'Delays', x: '38%', y: '46%' },
    { label: 'Escalate', x: '68%', y: '68%' },
    { label: 'Repeat', x: '12%', y: '72%' },
  ]

  return (
    <div className="relative h-[300px] overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.025]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,168,76,0.08),transparent_32%),radial-gradient(circle_at_70%_60%,rgba(120,120,120,0.12),transparent_34%)]" />
      <div className="absolute left-[15%] top-[31%] h-px w-[54%] rotate-[14deg] bg-white/[0.12]" />
      <div className="absolute left-[20%] top-[63%] h-px w-[55%] -rotate-[18deg] bg-white/10" />
      <div className="absolute left-[46%] top-[24%] h-px w-[32%] rotate-[56deg] bg-gold/[0.18]" />
      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute rounded-md border border-white/10 bg-black/[0.55] px-3 py-2 text-xs font-medium text-white/[0.55] shadow-[0_10px_40px_rgba(0,0,0,0.28)]"
          style={{ left: node.x, top: node.y }}
        >
          {node.label}
        </div>
      ))}
      <GitBranch className="absolute bottom-5 right-5 h-9 w-9 text-gold/[0.55]" />
    </div>
  )
}

function ActionVisual() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(201,168,76,0.13),transparent_28%),radial-gradient(circle_at_24%_52%,rgba(90,172,255,0.08),transparent_30%)]" />
      <div className="absolute left-[12%] top-[18%] hidden h-[260px] w-[260px] rounded-full border border-gold/[0.12] md:block" />
      <div className="scan-line absolute left-0 right-0 top-1/2 h-20 bg-gradient-to-b from-transparent via-gold/[0.08] to-transparent" />

      <div className="absolute left-[10%] top-[20%] hidden w-[78%] md:block">
        <ActionPacket className="left-0 top-10" label="Chat" />
        <ActionPacket className="left-[26%] top-0" label="Classify" active />
        <ActionPacket className="left-[53%] top-24" label="Resolve" />
        <ActionPacket className="right-0 top-6" label="Route" active />
        <div className="absolute left-[12%] top-[55px] h-px w-[24%] bg-gradient-to-r from-gold/[0.45] to-white/[0.12]" />
        <div className="absolute left-[40%] top-[70px] h-px w-[22%] rotate-[25deg] bg-gradient-to-r from-white/[0.12] to-gold/[0.35]" />
        <div className="absolute left-[64%] top-[94px] h-px w-[22%] -rotate-[19deg] bg-gradient-to-r from-gold/[0.35] to-white/[0.12]" />
      </div>

      <Network className="absolute right-8 top-8 h-16 w-16 text-white/10 md:h-24 md:w-24" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/[0.72] to-transparent" />
    </div>
  )
}

function ActionPacket({
  className,
  label,
  active,
}: {
  className?: string
  label: string
  active?: boolean
}) {
  return (
    <div
      className={cn(
        'absolute flex h-20 w-32 items-center justify-center rounded-lg border text-xs font-semibold uppercase tracking-[0.16em] backdrop-blur-md',
        active
          ? 'border-gold/[0.28] bg-gold/[0.08] text-gold'
          : 'border-white/10 bg-white/[0.035] text-white/[0.58]',
        className
      )}
    >
      {label}
    </div>
  )
}
