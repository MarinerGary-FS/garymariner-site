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
      <Reveal className="mb-8">
        <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-5">
          Soft Exit
        </p>
        <h2 className="font-display font-bold text-display-lg text-white max-w-lg">
          Credibility before the conversation.
        </h2>
        <p className="font-sans text-base text-white/80 leading-[1.7] mt-4 max-w-xl">
          {proof.intro}
        </p>
      </Reveal>

      {/* Digital Harmony — Primary */}
      <Reveal delay={50}>
        <div className="rounded-lg border border-border bg-surface overflow-hidden mb-4">
          <div className="flex items-center gap-3 px-5 md:px-6 pt-5 pb-4 border-b border-border/50">
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
                <div className="flex flex-col gap-3 px-5 md:px-6 py-8 md:py-9">
                  <AnimatedCounter
                    value={m.value}
                    className="font-display font-bold text-display-3xl text-gold-gradient leading-none"
                  />
                  <span className="font-sans text-xs text-white/60 leading-snug max-w-[200px]">
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
        <div className="rounded-lg border border-border/60 bg-surface/50 overflow-hidden">
          <div className="flex items-center gap-3 px-5 md:px-6 pt-5 pb-4 border-b border-border/40">
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
                <div className="flex flex-col gap-3 px-5 md:px-6 py-8 md:py-9">
                  <AnimatedCounter
                    value={m.value}
                    className="font-display font-bold text-display-2xl text-white/85 leading-none"
                  />
                  <span className="font-sans text-xs text-white/60 leading-snug max-w-[220px]">
                    {m.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={250}>
        <p className="font-sans text-sm text-white/60 leading-[1.75] mt-6 max-w-2xl">
          {proof.closing}
        </p>
      </Reveal>
    </SectionWrapper>
  )
}
