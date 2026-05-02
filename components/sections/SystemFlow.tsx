'use client'

import { useEffect, useRef } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

const icons = [AlertIcon, BreakIcon, CircuitIcon, TargetIcon]

export function SystemFlow() {
  const { systemFlow } = siteContent
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return

    // Respect reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.transform = 'scaleX(1)'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = 'scaleX(1)'
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="system-flow" className="relative px-6 md:px-10 lg:px-16 py-32 md:py-44 bg-background border-t border-border/40 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-gold/[0.025] blur-[120px] pointer-events-none" />

      <div className="relative max-w-site mx-auto">
        <Reveal className="mb-16 md:mb-20 max-w-2xl">
          <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-5">
            System Thinking
          </p>
          <h2 className="font-display font-bold text-display-lg text-white">
            {systemFlow.title}
          </h2>
        </Reveal>

        {/* Flow diagram */}
        <div className="relative flex flex-col md:flex-row items-stretch gap-6 md:gap-0">

          {/* Animated connecting line — desktop */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-10 left-[12%] right-[12%] h-px z-0 origin-left"
            style={{
              background: 'linear-gradient(90deg, rgba(201,168,76,0.4) 0%, rgba(201,168,76,0.15) 50%, rgba(201,168,76,0.4) 100%)',
              transform: 'scaleX(0)',
              transition: 'transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            }}
          />

          {systemFlow.steps.map((stage, i) => {
            const Icon = icons[i]
            return (
            <Reveal key={stage.label} delay={200 + i * 150} className="flex-1 relative z-10">
              <div className="group flex h-full flex-col items-center text-center gap-5 px-4">
                {/* Node */}
                <div className="relative">
                  <div className="absolute -inset-2 rounded-full bg-gold/[0.04] blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-20 h-20 rounded-full border border-gold/20 bg-background flex items-center justify-center shadow-[0_0_24px_rgba(201,168,76,0.05)] group-hover:border-gold/40 group-hover:shadow-[0_0_32px_rgba(201,168,76,0.10)] transition-all duration-400">
                    <Icon className="w-7 h-7 text-gold/60 group-hover:text-gold/90 transition-colors duration-300" />
                  </div>
                  {/* Step indicator */}
                  <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full bg-gold/10 border border-gold/25 flex items-center justify-center text-[9px] font-sans font-medium text-gold/70">
                    {i + 1}
                  </span>
                </div>

                {/* Mobile connector */}
                {i < systemFlow.steps.length - 1 && (
                  <div className="md:hidden flex flex-col items-center gap-1">
                    <div className="w-px h-4 bg-gradient-to-b from-gold/25 to-transparent" />
                    <ChevronDown className="w-3 h-3 text-gold/30" />
                  </div>
                )}

                {/* Label */}
                <h3 className="font-display font-semibold text-lg text-white/85 tracking-wide">
                  {stage.label}
                </h3>
                <p className="font-sans text-sm leading-[1.75] text-white/48 max-w-[220px]">
                  {stage.description}
                </p>
              </div>
            </Reveal>
            )
          })}
        </div>

        {/* Tagline */}
        <Reveal delay={800}>
          <p className="text-center font-sans text-xs text-white/20 tracking-wider mt-14 md:mt-16">
            {systemFlow.closing}
          </p>
        </Reveal>
      </div>
    </section>
  )
}

/* ── Icons ── */

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 4.5l3 3 3-3" />
    </svg>
  )
}

function AlertIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 9v5" />
      <path d="M12 17h.01" />
    </svg>
  )
}

function BreakIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h7" />
      <path d="M13 6h7" />
      <path d="M4 12h4" />
      <path d="M10 12h10" />
      <path d="M4 18h10" />
      <path d="M16 18h4" />
    </svg>
  )
}

function CircuitIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="8" height="8" rx="1" />
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
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
