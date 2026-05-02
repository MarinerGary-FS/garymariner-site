'use client'

import { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

export function CaseStudyPreview() {
  const { caseStudy } = siteContent
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const root = sectionRef.current
    if (!root) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.querySelectorAll<HTMLElement>('.case-result').forEach((el) => {
        el.style.opacity = '1'
        el.style.transform = 'none'
      })
      return
    }

    let ctx: { revert: () => void } | undefined
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting) return

        const { gsap } = await import('gsap')
        ctx = gsap.context(() => {
          gsap.fromTo(
            '.case-result',
            { autoAlpha: 0, y: 14 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              ease: 'power3.out',
              stagger: 0.1,
            }
          )
        }, root)
        observer.disconnect()
      },
      { threshold: 0.25 }
    )

    observer.observe(root)
    return () => {
      observer.disconnect()
      ctx?.revert()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="selected-work"
      className="relative overflow-hidden bg-background px-5 py-20 md:px-8 md:py-24 lg:px-10"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(91,164,255,0.08),transparent_32%)]" />

      <div className="relative mx-auto grid max-w-site gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-8">
        <Reveal className="max-w-xl">
          <p className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-gold">
            {caseStudy.company}
          </p>
          <h2 className="max-w-2xl font-display text-4xl font-bold leading-[1.1] text-white md:text-5xl">
            {caseStudy.hook}
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative min-h-[520px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#040404] shadow-[0_24px_90px_rgba(0,0,0,0.42)]">
            <CaseBackdrop />

            <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5">
              <div className="liquid-glass rounded-lg p-4">
                <div className="mb-4 flex flex-col gap-2 border-b border-white/[0.08] pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/36">
                      System Built
                    </p>
                    <p className="mt-2 font-display text-lg font-semibold text-white">
                      {caseStudy.systemBuilt}
                    </p>
                  </div>
                  <Button
                    href={caseStudy.href}
                    external
                    variant="ghost"
                    size="sm"
                    className="self-start sm:self-auto"
                    trackingEvent="case_study_click"
                    trackingLabel={caseStudy.cta}
                  >
                    {caseStudy.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>

                <div className="grid gap-2 sm:grid-cols-3">
                  {caseStudy.outcomes.map((outcome) => (
                    <div key={outcome.label} className="case-result">
                      <p className="font-display text-2xl font-bold leading-none text-gold md:text-3xl">
                        {outcome.value}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-white/60">
                        {outcome.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CaseBackdrop() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_22%,rgba(201,168,76,0.13),transparent_25%),radial-gradient(circle_at_75%_40%,rgba(88,166,255,0.12),transparent_26%)]" />
      <div className="absolute left-[12%] top-[15%] h-[320px] w-[320px] rounded-full border border-gold/15" />
      <div className="absolute left-[22%] top-[25%] h-px w-[56%] rotate-12 bg-gradient-to-r from-gold/30 via-white/18 to-transparent" />
      <div className="absolute right-[12%] top-[22%] h-24 w-48 rounded-lg border border-white/[0.07] bg-white/[0.025] backdrop-blur-[2px]" />
      <div className="absolute left-[14%] top-[44%] h-28 w-56 rounded-lg border border-white/[0.07] bg-white/[0.025] backdrop-blur-[2px]" />
      <div className="absolute bottom-[36%] right-[16%] h-20 w-40 rounded-lg border border-gold/10 bg-gold/[0.025] backdrop-blur-[2px]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/82 to-transparent" />
    </div>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}
