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
          <div className="max-w-3xl mx-auto rounded-2xl border border-gold/20 bg-surface/30 backdrop-blur-sm px-10 md:px-16 py-14 md:py-20 flex flex-col items-center text-center gap-10">

            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="w-6 h-px bg-gold/50" />
              <span className="text-xs font-sans text-white/35 uppercase tracking-[0.18em]">
                Let&apos;s Work Together
              </span>
              <span className="w-6 h-px bg-gold/50" />
            </div>

            {/* Headline — conversational and direct */}
            <h2 className="font-display font-bold text-display-xl text-white leading-[1.08]">
              {finalCTA.headline}
            </h2>

            {/* CTAs — clear hierarchy: primary dominates */}
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
