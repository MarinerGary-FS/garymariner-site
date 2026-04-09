import { Reveal } from '@/components/ui/Reveal'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteContent } from '@/lib/content'

export function ProofSection() {
  const { proof } = siteContent

  const [digitalHarmony, radco] = proof.cases

  return (
    <SectionWrapper className="bg-background border-t border-border/40">
      {/* Section header */}
      <Reveal className="mb-16">
        <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-5">
          Outcomes
        </p>
        <h2 className="font-display font-bold text-display-lg text-white max-w-lg">
          Outcomes Grounded in Execution
        </h2>
        <p className="font-sans text-base text-white/60 leading-[1.8] mt-5 max-w-xl">
          {proof.intro}
        </p>
      </Reveal>

      {/* Digital Harmony — Primary */}
      <Reveal delay={50}>
        <div className="rounded-2xl border border-border bg-surface overflow-hidden mb-4">
          <div className="flex items-center gap-4 px-8 md:px-10 pt-8 pb-6 border-b border-border/50">
            <h3 className="font-display font-semibold text-base text-white">
              {digitalHarmony.name}
            </h3>
            <span className="text-[11px] font-sans text-gold/60 uppercase tracking-[0.14em] px-2.5 py-1 rounded-full border border-gold/20">
              {digitalHarmony.label}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
            {digitalHarmony.metrics.map((m, mi) => (
              <Reveal key={m.label} delay={80 + mi * 100}>
                <div className="flex flex-col gap-5 px-8 md:px-10 py-12 md:py-14">
                  <AnimatedCounter
                    value={m.value}
                    className="font-display font-bold text-display-3xl text-gold-gradient leading-none"
                  />
                  <span className="font-sans text-xs text-white/50 leading-snug max-w-[200px]">
                    {m.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Radco — Supporting */}
      <Reveal delay={150}>
        <div className="rounded-2xl border border-border/60 bg-surface/50 overflow-hidden">
          <div className="flex items-center gap-4 px-8 md:px-10 pt-6 pb-5 border-b border-border/40">
            <h3 className="font-display font-semibold text-sm text-white/80">
              {radco.name}
            </h3>
            <span className="text-[11px] font-sans text-white/30 uppercase tracking-[0.14em] px-2.5 py-1 rounded-full border border-border/60">
              {radco.label}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border/40">
            {radco.metrics.map((m, mi) => (
              <Reveal key={m.label} delay={200 + mi * 80}>
                <div className="flex flex-col gap-4 px-8 md:px-10 py-12 md:py-14">
                  <AnimatedCounter
                    value={m.value}
                    className="font-display font-bold text-display-2xl text-white/85 leading-none"
                  />
                  <span className="font-sans text-xs text-white/50 leading-snug max-w-[220px]">
                    {m.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={250}>
        <p className="font-sans text-sm text-white/50 leading-[1.85] mt-10 max-w-2xl">
          {proof.closing}
        </p>
      </Reveal>
    </SectionWrapper>
  )
}
