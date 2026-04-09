import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { BookingButton } from '@/components/ui/BookingButton'
import { siteContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About — Gary L. Mariner II',
  description:
    'AI Systems Architect for Business Operations. 15+ years in operational leadership, process design, and AI-assisted systems implementation.',
}

const background = [
  {
    period: '15+ Years',
    title: 'Operations & Business Leadership',
    description:
      'Built and managed teams across sales, customer operations, and business development. Developed a ground-level understanding of how organizations run — where friction accumulates, where decisions break down, and what it actually takes to change them.',
  },
  {
    period: 'Cross-Industry',
    title: 'Global Team Leadership',
    description:
      'Led cross-functional operations across multiple industries and geographies — including global customer service teams spanning the USA, Europe, and Asia. Learned that operational problems are consistent regardless of industry: disconnected systems, unclear processes, and poor visibility.',
  },
  {
    period: 'The Shift',
    title: 'From Operations to Systems Architecture',
    description:
      "When AI tools matured beyond experimentation, the opportunity became clear. Not just new tools — but a fundamental rethinking of how business systems could be designed. Shifted focus from running operations to redesigning them through structured AI-assisted workflows and modern infrastructure.",
  },
  {
    period: 'Today',
    title: 'AI Systems Architecture for Business',
    description:
      'Works with founders, operators, and executives to replace operational friction with structured systems. Every engagement starts with understanding how the business actually runs — then designing infrastructure that improves execution, reduces overhead, and scales without adding complexity.',
  },
]

const differentiators = [
  {
    title: 'Systems Thinking Over Tool Usage',
    description:
      'Most AI adoption fails because it starts with tools, not systems. Every engagement begins with how work actually flows — then identifies where AI creates real leverage.',
  },
  {
    title: 'Operator Background',
    description:
      '15+ years running operations means the work is grounded in how businesses actually function. Not theory. Not vendor pitches. Practical design from real execution experience.',
  },
  {
    title: 'Communication + Operations + Technology',
    description:
      'The ability to bridge all three disciplines — strategic communication, operational design, and technical systems — is what makes implementation actually stick.',
  },
]

export default function AboutPage() {
  const { philosophy, finalCTA } = siteContent

  return (
    <>
      <PageHero
        eyebrow="About Gary"
        headline="Built on Operations. Focused on Systems."
        supporting="15+ years in operational leadership — now applied to AI systems architecture, workflow design, and modern business infrastructure."
      />

      {/* Bio narrative */}
      <SectionWrapper className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-24 items-start">

          {/* Left — sticky identity block */}
          <Reveal>
            <div className="lg:sticky lg:top-36 flex flex-col gap-6">
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
                Gary works at the intersection of strategy, communication, and implementation —
                helping organizations reduce overhead, improve execution, and build systems that
                scale without unnecessary complexity.
              </p>

              <div className="flex flex-col gap-3 mt-2">
                {['15+ Years in Operations', 'AI Systems Implementation', 'Global Team Leadership', 'Cross-Industry Experience'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                    <span className="text-xs font-sans text-white/50 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <BookingButton size="sm">
                  Book a Consultation
                </BookingButton>
              </div>
            </div>
          </Reveal>

          {/* Right — career narrative */}
          <div className="flex flex-col">
            {background.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group flex gap-6 md:gap-8 py-8 border-b border-border/50 last:border-0">
                  {/* Period */}
                  <div className="shrink-0 w-20">
                    <span className="text-xs font-sans text-gold/60 tracking-[0.12em] uppercase leading-none">
                      {item.period}
                    </span>
                  </div>

                  {/* Content */}
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
            The Difference
          </p>
          <h2 className="font-display font-bold text-display-md text-white max-w-xl">
            Why This Approach Produces Results
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-border/50">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="group flex flex-col gap-5 md:px-10 first:pl-0 last:pr-0 py-8 md:py-2 border-b border-border/30 md:border-b-0 last:border-b-0">
                <div className="w-8 h-0.5 bg-gold/35 group-hover:bg-gold/65 group-hover:w-14 transition-all duration-500 rounded-full" />
                <h3 className="font-display font-semibold text-lg text-white leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-white/50 leading-[1.8]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Philosophy */}
      <SectionWrapper className="bg-background border-t border-border/40">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-10">
            Operating Philosophy
          </p>
          <h2 className="font-display font-bold text-display-xl text-white leading-[1.06] mb-8">
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
                    <p className="font-sans text-sm text-white/50 leading-[1.8]">
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
      <section className="relative px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-background border-t border-border/40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gold/[0.06] blur-[120px] pointer-events-none" />
        <div className="relative max-w-site mx-auto">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-6">
                Work Together
              </p>
              <h2 className="font-display font-bold text-display-xl text-white leading-[1.06] mb-8">
                If your business is carrying too much friction, let&apos;s fix that.
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingButton size="lg">
                  Book a Consultation
                </BookingButton>
                <Button href="/contact" variant="ghost" size="lg">
                  Start a Conversation
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
