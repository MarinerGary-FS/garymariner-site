import { Reveal } from '@/components/ui/Reveal'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteContent } from '@/lib/content'

export function PositioningBlock() {
  const { positioning } = siteContent

  return (
    <SectionWrapper className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-start">

        {/* Left: Problem statement — anchored */}
        <Reveal>
          <div className="lg:sticky lg:top-36">
            <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-8">
              The Problem
            </p>
            <h2 className="font-display font-bold text-display-lg text-white leading-[1.1]">
              {positioning.headline}
            </h2>
            <p className="font-sans text-base text-white/60 leading-[1.85] mt-7">
              {positioning.body}
            </p>
          </div>
        </Reveal>

        {/* Right: Numbered editorial list — no cards */}
        <div className="flex flex-col">
          {positioning.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={100 + i * 80}>
              <div className="group flex gap-6 md:gap-8 py-8 border-b border-border/50 last:border-0 hover:border-border transition-colors duration-300">

                {/* Number — large, structural */}
                <div className="shrink-0 pt-0.5">
                  <span className="font-display font-bold text-4xl leading-none text-white/[0.07] group-hover:text-white/[0.12] transition-colors duration-300 select-none tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5">
                  {/* Gold accent */}
                  <div className="w-6 h-0.5 bg-gold/40 group-hover:bg-gold/70 group-hover:w-10 transition-all duration-400 rounded-full mb-1" />
                  <h3 className="font-display font-semibold text-base md:text-lg text-white">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-white/55 leading-[1.75]">
                    {pillar.description}
                  </p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </SectionWrapper>
  )
}
