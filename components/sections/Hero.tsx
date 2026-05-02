import { Button } from '@/components/ui/Button'
import { siteContent } from '@/lib/content'

export function Hero() {
  const { hero } = siteContent

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-x-hidden bg-background">
      {/* Architectural grid — very subtle */}
      <div className="absolute inset-0 pointer-events-none bg-grid opacity-25" />

      {/* Cinematic depth fields */}
      <div className="absolute left-0 top-0 bottom-0 w-[55%] pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 left-[-10%] w-[680px] h-[680px] rounded-full bg-gold/[0.04] blur-[130px]" />
      </div>
      <div className="absolute -bottom-32 right-[8%] w-[640px] h-[520px] rounded-full bg-gold/[0.055] blur-[150px] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-site mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-20 md:pt-32 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_440px] xl:grid-cols-[minmax(0,1fr)_500px] gap-14 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="flex flex-col max-w-2xl">
            <div
              className="inline-flex items-center gap-3 mb-6 md:mb-10"
              style={{ animation: 'fadeUp 0.6s ease 0.05s both' }}
            >
              <span className="w-8 h-px bg-gold" />
              <span className="text-xs font-sans font-medium text-gold uppercase tracking-[0.18em]">
                {hero.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-bold text-display-lg lg:text-display-xl text-white mb-6 max-w-[760px]"
              style={{ animation: 'fadeUp 0.75s ease 0.18s both' }}
            >
              {hero.headline}
            </h1>

            {/* Supporting copy */}
            <p
              className="font-sans text-base md:text-lg text-white/65 leading-[1.75] max-w-[520px] mb-5"
              style={{ animation: 'fadeUp 0.75s ease 0.3s both' }}
            >
              {hero.supporting}
            </p>

            {/* Proof tagline */}
            <div
              className="flex items-center gap-3 mb-9"
              style={{ animation: 'fadeUp 0.75s ease 0.38s both' }}
            >
              <span className="w-5 h-px bg-gold/55 shrink-0" />
              <span className="font-sans text-sm text-white/40 tracking-wide">
                {hero.tagline}
              </span>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: 'fadeUp 0.75s ease 0.50s both' }}
            >
              <Button href={hero.primaryCTA.href} size="lg">
                {hero.primaryCTA.label}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href={hero.secondaryCTA.href} variant="ghost" size="lg">
                {hero.secondaryCTA.label}
              </Button>
            </div>
          </div>

          <div
            className="hidden lg:block"
            style={{ animation: 'fadeIn 1.0s ease 0.45s both' }}
          >
            <SystemSignal />
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  )
}

function SystemSignal() {
  return (
    <div className="relative aspect-square">
      <div className="absolute inset-4 rounded-full border border-gold/10 bg-gold/[0.015]" />
      <div className="absolute inset-16 rounded-full border border-white/[0.06]" />
      <div className="absolute inset-28 rounded-full border border-gold/20 bg-background/80 shadow-[0_0_80px_rgba(201,168,76,0.08)]" />

      <div className="absolute left-10 right-10 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
      <div className="absolute top-10 bottom-10 left-1/2 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

      <div className="absolute left-2 top-[18%] h-px w-[42%] bg-gradient-to-r from-transparent to-white/15" />
      <div className="absolute right-2 bottom-[24%] h-px w-[38%] bg-gradient-to-l from-transparent to-white/15" />
      <div className="absolute left-[18%] bottom-10 h-[34%] w-px bg-gradient-to-t from-transparent to-white/10" />

      <SignalNode className="left-[8%] top-[16%]" label="Ops" />
      <SignalNode className="right-[4%] top-[38%]" label="AI" />
      <SignalNode className="left-[20%] bottom-[8%]" label="CX" />
      <SignalNode className="right-[18%] bottom-[14%]" label="Rev" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-gold/25 bg-surface/90 shadow-[0_0_48px_rgba(201,168,76,0.12)]">
          <span className="font-display text-4xl font-bold text-gold-gradient">GM</span>
        </div>
      </div>

      <MetricCard
        position="absolute bottom-8 -left-4 xl:-left-8"
        label="Monthly Revenue"
        value="$130K"
        subtext="Digital Harmony"
        delta="↑ from $75K"
      />
      <MetricCard
        position="absolute top-8 -right-4 xl:-right-8"
        label="Agent Dependency"
        value="70%"
        subtext="Reduction"
      />
    </div>
  )
}

function SignalNode({ className, label }: { className: string; label: string }) {
  return (
    <div className={`absolute ${className} flex h-14 w-14 items-center justify-center rounded-full border border-white/[0.08] bg-surface/80 backdrop-blur-sm`}>
      <span className="font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
        {label}
      </span>
    </div>
  )
}

function MetricCard({
  position,
  label,
  value,
  subtext,
  delta,
}: {
  position: string
  label: string
  value: string
  subtext: string
  delta?: string
}) {
  return (
    <div className={`${position} z-10 bg-[#0D0D0D]/95 backdrop-blur-md border border-white/[0.10] rounded-xl shadow-2xl shadow-black/70 overflow-hidden`}>
      {/* Gold top accent line — makes it read as a data card, not a UI widget */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="px-5 py-4">
        <p className="text-[9px] font-sans text-white/35 uppercase tracking-[0.2em] mb-2.5">
          {label}
        </p>
        {/* Value — the focal point */}
        <p className="font-display font-bold text-[1.75rem] leading-none text-white tracking-tight">
          {value}
        </p>
        <p className="text-[11px] font-sans text-white/50 mt-2 leading-none">
          {subtext}
        </p>
        {delta && (
          <div className="mt-2.5 pt-2.5 border-t border-white/[0.07] flex items-center gap-1.5">
            <span className="text-gold text-xs leading-none">↑</span>
            <span className="text-[9px] font-sans text-white/30 uppercase tracking-widest">
              {delta.replace('↑ ', '')}
            </span>
          </div>
        )}
      </div>
    </div>
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
