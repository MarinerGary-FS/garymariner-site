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
          const trigger = () => el.classList.add('is-visible')
          if (delay > 0) {
            setTimeout(trigger, delay)
          } else {
            trigger()
          }
          observer.unobserve(el)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.01 }
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
