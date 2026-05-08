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
    <section id="system-flow" className="system-section relative overflow-hidden bg-background px-5 py-12 md:px-8 md:py-16 lg:px-10">
      <div className="absolute inset-0 flow-wash" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-white/[0.08] via-gold/[0.08] to-transparent opacity-50" />

      <div className="relative mx-auto max-w-site">
        <Reveal className="mx-auto mb-6 max-w-[20rem] text-center sm:max-w-3xl">
          <h2 className="font-display text-xl font-bold leading-[1.16] text-white sm:text-4xl md:text-5xl">
            {systemFlow.title}
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-4 md:grid-cols-4">
          <div
            ref={lineRef}
            className="absolute left-[10%] right-[10%] top-1/2 z-0 hidden h-px origin-left md:block"
            style={{
              background: 'linear-gradient(90deg, rgba(91,127,255,0.08), rgba(91,127,255,0.62), rgba(88,196,221,0.40), rgba(91,127,255,0.08))',
              transform: 'scaleX(0)',
              transition: 'transform 1.25s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />

          {systemFlow.steps.map((stage, i) => (
            <Reveal key={stage.label} delay={100 + i * 100} className="relative z-10">
              <div className="liquid-glass system-card noise-overlay group flex min-h-[160px] flex-col justify-between rounded-lg p-4 transition-all duration-500 hover:scale-[1.01] hover:border-gold/25 hover:bg-white/[0.04] md:min-h-[210px]">
                <div className="flex items-start justify-between">
                  <span className="font-sans text-[10px] font-medium uppercase tracking-[0.22em] text-white/28">
                    0{i + 1}
                  </span>
                  <span className="flex h-3 w-3 rounded-full bg-sapphire/70 shadow-[0_0_22px_rgba(91,127,255,0.50)]" />
                </div>

                <div>
                  <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
                    {stage.label}
                  </h3>
                  <p className="mt-2 max-w-[16rem] font-sans text-sm leading-6 text-white/60">
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
