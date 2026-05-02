'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { siteContent } from '@/lib/content'

export function Hero() {
  const { hero } = siteContent
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = heroRef.current
    if (!root) return

    let ctx: { revert: () => void } | undefined

    const run = async () => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        root.querySelectorAll<HTMLElement>('.hero-reveal').forEach((el) => {
          el.style.opacity = '1'
          el.style.transform = 'none'
        })
        return
      }

      const { gsap } = await import('gsap')
      ctx = gsap.context(() => {
        gsap.fromTo(
          '.hero-reveal',
          { autoAlpha: 0, y: 14 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            stagger: 0.1,
          }
        )
      }, root)
    }

    run()

    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-background px-5 pb-8 pt-24 md:px-8 lg:px-10"
    >
      <SystemBackdrop />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] w-full max-w-[calc(100vw-2.5rem)] flex-col justify-center md:max-w-site">
        <div className="max-w-2xl">
          <div className="hero-reveal mb-4 flex items-center gap-2">
            <span className="h-px w-10 bg-gold/70" />
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold">
              {hero.eyebrow}
            </p>
          </div>

          <h1 className="hero-reveal max-w-2xl whitespace-pre-line break-words font-display text-[2.45rem] font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {hero.headline}
          </h1>

          <p className="hero-reveal mt-4 max-w-[19rem] font-sans text-base leading-7 text-white/70 sm:max-w-md">
            {hero.supporting}
          </p>

          <div className="hero-reveal mobile-hero-control mt-4 flex w-[calc(100vw-2.5rem)] max-w-[calc(100vw-2.5rem)] flex-col gap-2 sm:w-auto sm:max-w-full sm:flex-row">
            <Button
              href={hero.primaryCTA.href}
              size="lg"
              className="w-full max-w-full sm:w-auto"
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
              className="w-full max-w-full sm:w-auto"
              trackingEvent="selected_work_click"
              trackingLabel={hero.secondaryCTA.label}
            >
              {hero.secondaryCTA.label}
            </Button>
          </div>
        </div>

        <div className="pointer-events-none mobile-hero-control mt-6 grid w-[calc(100vw-2.5rem)] max-w-[calc(100vw-2.5rem)] gap-3 sm:w-full sm:max-w-full md:absolute md:bottom-10 md:left-0 md:right-0 md:mt-0 md:grid-cols-[minmax(220px,340px)_minmax(0,1fr)_minmax(220px,300px)] md:items-end">
          <div className="hero-reveal liquid-glass pointer-events-auto rounded-lg p-4">
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-2 md:gap-3">
              <ProofStat value="70%" marker="↓" label="Support Load" />
              <ProofStat value="90%" marker="↑" label="Satisfaction" />
              <ProofStat value="$130K/mo" label="Revenue" />
            </div>
          </div>

          <div className="hidden md:block" />

          <a
            href="https://www.marinernexus.com"
            target="_blank"
            rel="noopener noreferrer"
            data-track-event="bridge_cta_click"
            data-track-label="Enter the System"
            className="hero-reveal liquid-glass pointer-events-auto group flex items-center justify-between gap-3 rounded-lg p-4 text-white transition-all duration-300 hover:border-gold/35 hover:bg-white/[0.04]"
          >
            <span className="font-display text-base font-semibold">Enter the System</span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-gold transition-all duration-300 group-hover:translate-x-1 group-hover:border-gold/50">
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
      <div className="absolute inset-0 bg-grid opacity-25" />
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
