import { Button } from '@/components/ui/Button'
import { siteContent } from '@/lib/content'

export function Hero() {
  const { hero } = siteContent
  const headlineLines = hero.headline.split('\n')

  return (
    <section
      className="relative flex items-center overflow-hidden bg-background px-5 pb-8 pt-20 md:min-h-screen md:px-8 md:pt-24 lg:px-10"
    >
      <HeroBackdrop />

      <div className="relative z-10 mx-auto flex w-full max-w-[calc(100vw-2.5rem)] flex-col justify-center md:min-h-[calc(100vh-8rem)] md:max-w-site">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="max-w-[22rem] sm:max-w-3xl md:pt-8 lg:max-w-[33rem]">
            <div className="hero-animated mb-6 flex items-center gap-3" style={{ animationDelay: '80ms' }}>
              <span className="h-px w-12 bg-gold/80" />
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
                {hero.eyebrow}
              </p>
            </div>

            <h1 className="max-w-[22rem] break-words font-display text-[2.35rem] font-bold leading-[1.02] tracking-tight text-white drop-shadow-[0_8px_42px_rgba(0,0,0,0.72)] sm:max-w-3xl sm:text-5xl md:text-6xl lg:text-[4.65rem]">
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
              className="hero-animated mt-6 max-w-2xl font-sans text-base leading-7 text-white/76 sm:text-lg sm:leading-8"
              style={{ animationDelay: '460ms' }}
            >
              {hero.supporting}
            </p>

            <p
              className="hero-animated mt-5 max-w-2xl border-l border-gold/45 pl-4 font-sans text-sm leading-6 text-white/56"
              style={{ animationDelay: '540ms' }}
            >
              {hero.tagline}
            </p>

            <div className="mt-8 flex w-full max-w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Button
                href={hero.primaryCTA.href}
                size="lg"
                className="w-full max-w-full justify-between whitespace-nowrap sm:w-auto sm:min-w-[255px]"
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
                className="w-full max-w-full whitespace-nowrap sm:w-auto sm:min-w-[225px]"
                trackingEvent="selected_work_click"
                trackingLabel={hero.secondaryCTA.label}
              >
                {hero.secondaryCTA.label}
              </Button>
            </div>
          </div>

          <div className="hero-animated relative hidden min-h-[560px] lg:block" style={{ animationDelay: '260ms' }}>
            <div className="absolute inset-y-3 right-[-8%] w-[104%] overflow-hidden rounded-sm border border-gold/20 bg-[#070707] shadow-[0_40px_140px_rgba(0,0,0,0.62)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_28%,rgba(91,127,255,0.12),transparent_24%),linear-gradient(135deg,#05070A_0%,#11151B_44%,#05070A_100%)]" />
              <div className="absolute inset-10 border border-white/[0.055]" />
              <div className="absolute left-[17%] top-[17%] h-[340px] w-[340px] rounded-[2rem] border border-gold/25" />
              <div className="absolute left-[18%] top-[20%] font-display text-[9rem] font-bold leading-none tracking-[-0.08em] text-gold/55">
                GM
              </div>
              <div className="absolute bottom-[16%] right-[8%] grid w-[18.5rem] gap-3 border-l border-gold/35 bg-black/45 py-4 pl-6 pr-4 backdrop-blur-sm">
                <SystemLine label="Strategy" value="diagnose the real operating constraint" />
                <SystemLine label="Systems" value="connect workflows, CRM, automation, and AI" />
                <SystemLine label="Execution" value="ship infrastructure that improves performance" />
              </div>
              <div className="absolute left-[9%] top-[10%] h-px w-[64%] rotate-[-8deg] bg-gradient-to-r from-gold/75 via-gold/25 to-transparent" />
              <div className="absolute bottom-[12%] right-[-4%] h-px w-[72%] rotate-[-8deg] bg-gradient-to-r from-transparent via-gold/55 to-gold/15" />
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent" />
            </div>
            <div className="absolute left-4 top-10 h-px w-44 bg-gold/70" />
            <div className="absolute bottom-16 left-0 max-w-[19rem] border-l border-gold/45 pl-5">
              <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.42em] text-white/82">
                Leadership.
              </p>
              <p className="mt-2 font-sans text-[0.7rem] font-medium uppercase tracking-[0.42em] text-white/82">
                Integrity.
              </p>
              <p className="mt-2 font-sans text-[0.7rem] font-medium uppercase tracking-[0.42em] text-gold">
                Impact.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none mt-8 grid w-full max-w-full gap-3 sm:w-full sm:max-w-full md:absolute md:bottom-8 md:left-0 md:right-0 md:mt-0 md:grid-cols-[minmax(220px,380px)_minmax(0,1fr)_minmax(220px,300px)] md:items-end">
          <div className="brand-glass system-card noise-overlay pointer-events-auto rounded-sm p-4">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
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
            className="brand-glass system-card noise-overlay pointer-events-auto group flex items-center justify-between gap-3 rounded-sm p-4 text-white transition-all duration-500 hover:scale-[1.015] hover:border-gold/35 hover:bg-white/[0.04]"
          >
            <span className="relative z-10 font-display text-base font-semibold">Enter Mariner Nexus</span>
            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold/35 text-gold transition-all duration-500 group-hover:translate-x-1 group-hover:border-gold/60 group-hover:bg-gold/[0.08]">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

function HeroBackdrop() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(91,127,255,0.10),transparent_26%),linear-gradient(135deg,#05070A_0%,#11151B_48%,#05070A_100%)]" />
      <div className="hero-drift absolute inset-[-2%] bg-grid opacity-[0.13]" />
      <div className="absolute right-[-10rem] top-20 h-[34rem] w-[34rem] rounded-[3rem] border border-gold/[0.08] opacity-70 lg:hidden" />
      <div className="absolute right-[-2.5rem] top-36 font-display text-[9rem] font-bold leading-none tracking-[-0.08em] text-gold/[0.08] lg:hidden">
        GM
      </div>
      <div className="absolute left-[-10%] top-[16%] h-px w-[76vw] rotate-[-8deg] bg-gradient-to-r from-transparent via-gold/55 to-transparent" />
      <div className="absolute bottom-[17%] right-[-8%] h-px w-[74vw] rotate-[-8deg] bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="absolute left-[7%] top-[18%] hidden h-[520px] w-[520px] rounded-full border border-gold/[0.06] md:block" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
    </div>
  )
}

function SystemLine({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
        {label}
      </p>
      <p className="mt-1 text-sm leading-6 text-white/58">
        {value}
      </p>
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
