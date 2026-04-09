'use client'

import { Reveal } from '@/components/ui/Reveal'

const stages = [
  { label: 'Leadership', sub: 'Vision & Strategy', icon: CompassIcon },
  { label: 'Communication', sub: 'Alignment & Translation', icon: BridgeIcon },
  { label: 'AI Systems', sub: 'Infrastructure & Automation', icon: CircuitIcon },
  { label: 'Execution', sub: 'Operational Reality', icon: TargetIcon },
]

export function SystemFlow() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-28 md:py-36 bg-surface border-t border-border/40">
      <div className="max-w-site mx-auto">
        <Reveal className="text-center mb-16 md:mb-20">
          <p className="text-xs font-sans text-gold/70 uppercase tracking-[0.2em] mb-5">
            How Transformation Works
          </p>
          <h2 className="font-display font-bold text-display-lg text-white max-w-2xl mx-auto">
            From vision to execution — through the layers that matter.
          </h2>
        </Reveal>

        {/* Flow diagram */}
        <div className="relative flex flex-col md:flex-row items-stretch gap-4 md:gap-0">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-1/2 left-[12%] right-[12%] h-px bg-gradient-to-r from-gold/30 via-gold/15 to-gold/30 -translate-y-1/2 z-0" />

          {stages.map((stage, i) => (
            <Reveal key={stage.label} delay={i * 120} className="flex-1 relative z-10">
              <div className="flex flex-col items-center text-center gap-4 md:gap-5">
                {/* Node */}
                <div className="relative">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-gold/25 bg-background flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.06)]">
                    <stage.icon className="w-6 h-6 md:w-7 md:h-7 text-gold/70" />
                  </div>
                  {/* Step number */}
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center text-[9px] font-sans font-medium text-gold/80">
                    {i + 1}
                  </span>
                </div>

                {/* Arrow between nodes — mobile only */}
                {i < stages.length - 1 && (
                  <div className="md:hidden w-px h-6 bg-gradient-to-b from-gold/30 to-gold/10" />
                )}

                {/* Label */}
                <div className="flex flex-col gap-1">
                  <span className="font-display font-semibold text-sm md:text-base text-white">
                    {stage.label}
                  </span>
                  <span className="font-sans text-[11px] md:text-xs text-white/35">
                    {stage.sub}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Connector arrows — desktop */}
        <div className="hidden md:flex justify-center mt-10">
          <p className="font-sans text-xs text-white/25 tracking-wide">
            Each layer depends on the one before it. Skip one, and the system breaks.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ── Icons ── */

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.15" stroke="none" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}

function BridgeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 18h16" />
      <path d="M4 18c0-6 4-10 8-10s8 4 8 10" />
      <line x1="8" y1="18" x2="8" y2="13" />
      <line x1="12" y1="18" x2="12" y2="8" />
      <line x1="16" y1="18" x2="16" y2="13" />
    </svg>
  )
}

function CircuitIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="8" height="8" rx="1" />
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
      <circle cx="12" cy="2" r="1" fill="currentColor" stroke="none" opacity="0.4" />
      <circle cx="12" cy="22" r="1" fill="currentColor" stroke="none" opacity="0.4" />
      <circle cx="2" cy="12" r="1" fill="currentColor" stroke="none" opacity="0.4" />
      <circle cx="22" cy="12" r="1" fill="currentColor" stroke="none" opacity="0.4" />
    </svg>
  )
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  )
}
