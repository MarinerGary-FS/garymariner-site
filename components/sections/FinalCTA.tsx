import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

export function FinalCTA() {
  const { finalCTA } = siteContent

  return (
    <section className="relative px-6 md:px-10 lg:px-16 py-28 md:py-36 overflow-hidden bg-background border-t border-border/40">
      {/* Deep background glow — more present than before */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-gold/[0.07] blur-[120px] pointer-events-none" />

      <div className="relative max-w-site mx-auto">
        <Reveal>
          {/* Contained frame — creates intentionality and finality */}
          <div className="group max-w-3xl mx-auto rounded-2xl border border-gold/20 hover:border-gold/30 bg-surface/30 backdrop-blur-sm px-6 sm:px-10 md:px-16 py-12 md:py-20 flex flex-col items-center text-center gap-8 md:gap-10 transition-all duration-400 hover:shadow-[0_0_60px_rgba(201,168,76,0.06)]">

            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-gold/50" />
              <span className="text-xs font-sans text-white/35 uppercase tracking-[0.18em]">
                Conversion Bridge
              </span>
              <span className="w-6 h-px bg-gold/50" />
            </div>

            <h2 className="font-display font-bold text-display-xl text-white">
              {finalCTA.headline}
            </h2>

            <p className="font-sans text-base md:text-lg text-white/60 leading-[1.8] max-w-xl">
              {finalCTA.supporting}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button href={finalCTA.primaryCTA.href} size="lg">
                {finalCTA.primaryCTA.label}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href={finalCTA.secondaryCTA.href} variant="ghost" size="lg">
                {finalCTA.secondaryCTA.label}
              </Button>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}
