'use client'

import { useRef } from 'react'
import type { ElementType, MouseEvent as ReactMouseEvent, ReactNode } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'

type CommandCardProps = {
  label: string
  eyebrow: string
  description: string
  detail: string
  cta: string
  icon: ElementType
  accent: 'blue' | 'cyan' | 'sapphire' | 'silver'
  href?: string
  onClick?: () => void
}

export function CommandCard({
  label,
  eyebrow,
  description,
  detail,
  cta,
  icon: Icon,
  accent,
  href,
  onClick,
}: CommandCardProps) {
  const cardRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null)

  const handleMove = (event: ReactMouseEvent<HTMLElement>) => {
    const target = cardRef.current
    if (!target) return

    const rect = target.getBoundingClientRect()
    const x = event.clientX - rect.left - rect.width / 2
    const y = event.clientY - rect.top - rect.height / 2

    gsap.to(target, {
      x: x * 0.03,
      y: y * 0.04,
      scale: 1.012,
      duration: 0.34,
      ease: 'power3.out',
    })
  }

  const handleLeave = () => {
    const target = cardRef.current
    if (!target) return

    gsap.to(target, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.55,
      ease: 'elastic.out(1, 0.55)',
    })
  }

  const content = (
    <>
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.055] text-white/80 transition duration-300 group-hover:border-white/25 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-[0.68rem] font-semibold uppercase leading-none tracking-[0.18em] text-white/38 transition duration-300 group-hover:text-white/58">
          {eyebrow}
        </span>
        <span className="mt-3 flex items-start justify-between gap-4">
          <span className="font-display text-[1.24rem] font-semibold leading-tight tracking-normal text-white sm:text-[1.55rem]">
            {label}
          </span>
          <ArrowUpRight className="h-5 w-5 shrink-0 text-white/34 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
        </span>
        <span className="mt-3 block max-w-[14rem] text-[0.86rem] leading-6 text-white/58 [overflow-wrap:anywhere] sm:max-w-none sm:text-sm">
          {description}
        </span>
        <span className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr]">
          <span className="overflow-hidden">
            <span className="block pt-4 text-sm leading-6 text-white/72">{detail}</span>
            <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-100">
              {cta}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </span>
        </span>
      </span>
    </>
  )

  const sharedProps = {
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    className: `group social-pathway social-pathway-${accent}`,
  }

  if (href) {
    return (
      <Link
        href={href}
        ref={(node) => {
          cardRef.current = node
        }}
        onClick={onClick}
        {...sharedProps}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type="button"
      ref={(node) => {
        cardRef.current = node
      }}
      onClick={onClick}
      {...sharedProps}
    >
      {content}
    </button>
  )
}

export function CommandGrid({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <section
      id={id}
      tabIndex={id ? -1 : undefined}
      className="mx-auto grid w-full max-w-6xl scroll-mt-8 gap-3 px-5 outline-none md:grid-cols-2 md:px-8 lg:scroll-mt-10 lg:gap-4 lg:px-10"
    >
      {children}
    </section>
  )
}
