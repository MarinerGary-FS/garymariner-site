import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

export function FinalCTA() {
  const { finalCTA } = siteContent

  return (
    <section className="relative overflow-hidden bg-background px-6 py-28 md:px-10 md:py-44 lg:px-16">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[140px]" />
      <div className="absolute inset-x-[10%] top-16 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="relative mx-auto max-w-site">
        <Reveal>
          <div className="liquid-glass mx-auto flex max-w-5xl flex-col items-center rounded-xl px-6 py-14 text-center md:px-16 md:py-24">
            <h2 className="font-display text-[clamp(2.6rem,6vw,6.4rem)] font-bold leading-[0.98] text-white">
              {finalCTA.headline}
            </h2>
            <p className="mt-7 max-w-2xl font-sans text-base leading-8 text-white/62 md:text-lg">
              {finalCTA.supporting}
            </p>

            <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button
                href={finalCTA.primaryCTA.href}
                external
                size="lg"
                className="w-full sm:w-auto"
                trackingEvent="bridge_cta_click"
                trackingLabel={finalCTA.primaryCTA.label}
              >
                {finalCTA.primaryCTA.label}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={finalCTA.secondaryCTA.href}
                external
                variant="ghost"
                size="lg"
                className="w-full sm:w-auto"
                trackingEvent="bridge_cta_click"
                trackingLabel={finalCTA.secondaryCTA.label}
              >
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
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}
