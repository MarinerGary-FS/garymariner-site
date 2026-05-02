'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: keyof React.JSX.IntrinsicElements
  [key: string]: unknown
}

export function Reveal({ children, className, delay = 0, as: Tag = 'div', ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const trigger = async () => {
            const { gsap } = await import('gsap')
            el.classList.add('is-visible')
            gsap.fromTo(
              el,
              { autoAlpha: 0, y: 14 },
              { autoAlpha: 1, y: 0, duration: 0.7, ease: 'power3.out' }
            )
          }
          if (delay > 0) {
            setTimeout(trigger, delay)
          } else {
            trigger()
          }
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    // @ts-expect-error — dynamic tag assignment is safe here
    <Tag ref={ref} className={cn('reveal', className)} {...props}>
      {children}
    </Tag>
  )
}
