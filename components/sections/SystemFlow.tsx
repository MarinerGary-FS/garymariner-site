'use client'

import { useEffect, useRef } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

export function SystemFlow() {
  const { systemFlow } = siteContent
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = lineRef.current
    if (!el) return

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
    <section id="system-flow" className="relative overflow-hidden bg-background px-6 py-28 md:px-10 md:py-40 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(201,168,76,0.065),transparent_34%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-site">
        <Reveal className="mx-auto mb-14 max-w-4xl text-center md:mb-20">
          <h2 className="font-display text-[clamp(2.3rem,5vw,5.2rem)] font-bold leading-[1.02] text-white">
            {systemFlow.title}
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          <div
            ref={lineRef}
            className="absolute left-[10%] right-[10%] top-1/2 z-0 hidden h-px origin-left md:block"
            style={{
              background: 'linear-gradient(90deg, rgba(201,168,76,0.08), rgba(201,168,76,0.7), rgba(94,174,255,0.36), rgba(201,168,76,0.08))',
              transform: 'scaleX(0)',
              transition: 'transform 1.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />

          {systemFlow.steps.map((stage, i) => (
            <Reveal key={stage.label} delay={100 + i * 100} className="relative z-10">
              <div className="liquid-glass group flex min-h-[240px] flex-col justify-between rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/25 hover:bg-white/[0.04] md:min-h-[300px] md:p-7">
                <div className="flex items-start justify-between">
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-white/28">
                    0{i + 1}
                  </span>
                  <span className="flex h-3 w-3 rounded-full bg-gold/70 shadow-[0_0_22px_rgba(201,168,76,0.55)]" />
                </div>

                <div>
                  <h3 className="font-display text-3xl font-semibold text-white md:text-4xl">
                    {stage.label}
                  </h3>
                  <p className="mt-4 max-w-[16rem] font-sans text-sm leading-7 text-white/56">
                    {stage.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
