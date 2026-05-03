import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

export function FinalCTA() {
  const { finalCTA } = siteContent

  return (
    <section className="system-section relative overflow-hidden bg-background px-5 py-12 md:px-8 md:py-16 lg:px-10">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.07] blur-[140px]" />
      <div className="absolute inset-x-[10%] top-16 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="relative mx-auto max-w-site">
        <Reveal>
          <div className="liquid-glass system-card noise-overlay mx-auto flex max-w-5xl flex-col items-center rounded-lg px-5 py-9 text-center md:px-10 md:py-12">
            <h2 className="font-display text-4xl font-bold leading-[1.08] text-white md:text-5xl">
              {finalCTA.headline}
            </h2>
            <p className="mt-3 max-w-xl font-sans text-base leading-7 text-white/80">
              {finalCTA.supporting}
            </p>

            <div className="mt-5 flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
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
