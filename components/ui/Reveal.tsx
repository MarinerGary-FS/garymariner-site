'use client'

import { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  as?: keyof React.JSX.IntrinsicElements
}

export function Reveal({ children, className, delay = 0, as: Tag = 'div' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

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
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    // @ts-expect-error — dynamic tag assignment is safe here
    <Tag ref={ref} className={cn('reveal', className)}>
      {children}
    </Tag>
  )
}
