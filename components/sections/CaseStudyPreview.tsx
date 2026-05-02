import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteContent } from '@/lib/content'

export function CaseStudyPreview() {
  const { caseStudy } = siteContent

  return (
    <SectionWrapper className="bg-background border-t border-border/40">
      {/* Header */}
      <Reveal className="mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-5">
              Case Study Engine
            </p>
            <h2 className="font-display font-bold text-display-md text-white">
              Proof built as a conversion system.
            </h2>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-sans text-white/40 hover:text-white/80 transition-colors duration-200 group self-start md:self-auto pb-1 border-b border-transparent hover:border-white/20"
          >
            View full case study
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </Reveal>

      {/* Featured case study */}
      <Reveal delay={80}>
        <div className="rounded-2xl border border-border bg-surface overflow-hidden group hover:border-white/10 hover:shadow-[0_8px_40px_rgba(0,0,0,0.4)] transition-all duration-400">

          {/* Top gold line — visible immediately, intensifies on hover */}
          <div className="h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent group-hover:via-gold/60 transition-all duration-500" />

          <div className="p-6 md:p-10 lg:p-14">
            {/* Label row */}
            <div className="flex flex-wrap items-center gap-3 mb-7 md:mb-10">
              <span className="text-xs font-sans font-medium text-gold uppercase tracking-[0.16em]">
                {caseStudy.label}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/15" />
              <span className="text-xs font-sans text-white/35 tracking-wide">
                {caseStudy.company}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
              {/* Left: Narrative */}
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="font-display font-bold text-display-md text-white mb-5">
                    {caseStudy.hook}
                  </h3>
                  <p className="font-sans text-base text-white/60 leading-[1.8]">
                    {caseStudy.summary}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border-l border-gold/30 pl-5">
                    <p className="text-[10px] font-sans font-medium text-white/30 uppercase tracking-[0.18em] mb-3">
                      Breakdown
                    </p>
                    <p className="font-sans text-sm text-white/55 leading-[1.75]">
                      Disconnected support workflows were forcing growth to depend on manual labor.
                    </p>
                  </div>
                  <div className="border-l border-gold/30 pl-5">
                    <p className="text-[10px] font-sans font-medium text-white/30 uppercase tracking-[0.18em] mb-3">
                      System Built
                    </p>
                    <p className="font-sans text-sm text-white/55 leading-[1.75]">
                      {caseStudy.systemBuilt}
                    </p>
                  </div>
                </div>

                <Button href={caseStudy.href} variant="ghost" size="md" className="self-start">
                  {caseStudy.cta} →
                </Button>
              </div>

              {/* Right: Pull quote + outcomes */}
              <div className="flex flex-col gap-8 lg:border-l lg:border-border/50 lg:pl-14">
                {/* Pull quote — typographically dominant */}
                <blockquote>
                  <p className="font-display font-bold text-display-lg text-white">
                    &ldquo;{caseStudy.quote}&rdquo;
                  </p>
                </blockquote>

                {/* Outcome metrics */}
                <div className="flex flex-col gap-0 border-t border-border/50 pt-8">
                  {caseStudy.outcomes.map((o, i) => (
                    <div
                      key={o.label}
                      className="flex items-baseline justify-between py-4 border-b border-border/30 last:border-0"
                    >
                      <span className="font-sans text-sm text-white/45 tracking-wide">
                        {o.label}
                      </span>
                      <span className="font-display font-bold text-xl text-gold tabular-nums">
                        {o.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionWrapper>
  )
}
