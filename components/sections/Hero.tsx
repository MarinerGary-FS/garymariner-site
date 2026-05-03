import { Button } from '@/components/ui/Button'
import { siteContent } from '@/lib/content'

export function Hero() {
  const { hero } = siteContent
  const headlineLines = hero.headline.split('\n')

  return (
    <section
      className="relative flex items-start overflow-hidden bg-background px-5 pb-10 pt-24 md:min-h-screen md:items-center md:px-8 md:pb-8 md:pt-24 lg:px-10"
    >
      <SystemBackdrop />

      <div className="relative z-10 mx-auto flex w-full max-w-[calc(100vw-2.5rem)] flex-col justify-start md:min-h-[calc(100vh-8rem)] md:max-w-site md:justify-center">
        <div className="max-w-2xl md:pt-8">
          <div className="hero-animated mb-4 flex items-center gap-2" style={{ animationDelay: '80ms' }}>
            <span className="h-px w-10 bg-gold/70" />
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
              {hero.eyebrow}
            </p>
          </div>

          <h1 className="max-w-2xl break-words font-display text-[2.4rem] font-bold leading-[1.04] tracking-tight text-white drop-shadow-[0_8px_42px_rgba(0,0,0,0.72)] sm:text-5xl md:text-6xl lg:text-7xl">
            {headlineLines.map((line, index) => (
              <span
                key={line}
                className="hero-animated block"
                style={{ animationDelay: `${180 + index * 120}ms` }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            className="hero-animated mt-4 max-w-[19rem] font-sans text-base leading-7 text-white/70 sm:max-w-md"
            style={{ animationDelay: '460ms' }}
          >
            {hero.supporting}
          </p>

          <div className="mt-5 flex w-full max-w-full flex-col gap-2 sm:w-auto sm:flex-row">
            <Button
              href={hero.primaryCTA.href}
              size="lg"
              className="w-[calc(100vw-2.5rem)] max-w-full sm:w-auto"
              trackingEvent="hero_cta_click"
              trackingLabel={hero.primaryCTA.label}
            >
              {hero.primaryCTA.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              href={hero.secondaryCTA.href}
              variant="ghost"
              size="lg"
              className="w-[calc(100vw-2.5rem)] max-w-full sm:w-auto"
              trackingEvent="selected_work_click"
              trackingLabel={hero.secondaryCTA.label}
            >
              {hero.secondaryCTA.label}
            </Button>
          </div>
        </div>

        <div className="pointer-events-none mt-6 grid w-full max-w-full gap-3 sm:w-full sm:max-w-full md:absolute md:bottom-10 md:left-0 md:right-0 md:mt-0 md:grid-cols-[minmax(220px,340px)_minmax(0,1fr)_minmax(220px,300px)] md:items-end">
          <div className="liquid-glass system-card noise-overlay pointer-events-auto rounded-lg p-4">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-2 md:gap-3">
              <ProofStat value="70%" marker="↓" label="Support Load" />
              <ProofStat value="90%" marker="↑" label="Satisfaction" />
              <ProofStat value="$130K/mo" label="Revenue" />
            </div>
          </div>

          <div className="hidden h-px bg-gradient-to-r from-gold/16 via-white/12 to-sky-300/16 md:block" />

          <a
            href="https://www.marinernexus.com"
            target="_blank"
            rel="noopener noreferrer"
            data-track-event="bridge_cta_click"
            data-track-label="Enter Mariner Nexus"
            className="liquid-glass system-card noise-overlay pointer-events-auto group flex items-center justify-between gap-3 rounded-lg p-4 text-white transition-all duration-500 hover:scale-[1.015] hover:border-gold/35 hover:bg-white/[0.04]"
          >
            <span className="relative z-10 font-display text-base font-semibold">Enter Mariner Nexus</span>
            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gold transition-all duration-500 group-hover:translate-x-1 group-hover:border-gold/50 group-hover:bg-gold/[0.08]">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

function SystemBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="hero-drift absolute inset-[-2%] bg-grid opacity-25" />
      <div className="absolute inset-0 cinematic-vignette" />
      <div className="absolute left-1/2 top-1/2 h-[88vw] max-h-[920px] min-h-[520px] w-[88vw] min-w-[520px] max-w-[920px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 system-orbit" />
      <div className="absolute left-1/2 top-1/2 h-[54vw] max-h-[620px] min-h-[360px] w-[54vw] min-w-[360px] max-w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />
      <div className="absolute left-1/2 top-1/2 h-px w-[120vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/12 to-transparent" />
      <div className="scan-line absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="slow-float absolute right-[12%] top-[22%] h-28 w-56 rounded-lg border border-white/[0.06] bg-white/[0.018] backdrop-blur-[3px]" />
      <div className="slow-float-delayed absolute bottom-[24%] left-[10%] hidden h-24 w-44 rounded-lg border border-gold/10 bg-gold/[0.025] backdrop-blur-[3px] md:block" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  )
}

function ProofStat({ value, marker, label }: { value: string; marker?: string; label: string }) {
  return (
    <div className="min-w-0">
      <p className="font-display text-xl font-bold leading-none text-white">
        {value} {marker && <span className="text-gold">{marker}</span>}
      </p>
      <p className="mt-2 text-[9px] font-medium uppercase tracking-[0.14em] text-white/42 sm:text-[10px] sm:tracking-[0.16em]">
        {label}
      </p>
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
