'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BookingButton } from '@/components/ui/BookingButton'
import { siteContent } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const { nav } = siteContent

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = previousOverflow }
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }

    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-background/95 backdrop-blur-md border-b border-border/60'
            : 'bg-transparent'
        )}
      >
        <div className="gm-container flex h-16 items-center justify-between md:h-[4.5rem]">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 flex items-center transition-all duration-200 rounded-lg ring-1 ring-sapphire/30 shadow-[0_0_14px_rgba(91,127,255,0.18)] hover:ring-cyan/45 hover:shadow-[0_0_20px_rgba(88,196,221,0.22)]"
            aria-label="Gary L. Mariner II — Home"
          >
            <Image
              src="/images/glm-signature.png"
              alt="Gary L. Mariner II"
              width={40}
              height={40}
              className="rounded-lg [filter:hue-rotate(185deg)_saturate(1.35)_brightness(1.08)]"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="relative text-sm font-sans text-white/60 hover:text-white transition-colors duration-300 tracking-wide after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-cyan/45 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center lg:flex">
            <BookingButton size="sm" trackingEvent="booking_cta_click" trackingLabel={nav.cta.label}>
              {nav.cta.label}
            </BookingButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            ref={menuButtonRef}
            className="-m-1 flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sapphire/60 lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className={cn(
                'block w-5 h-px bg-white transition-all duration-300 origin-center',
                menuOpen && 'rotate-45 translate-y-[6px]'
              )}
            />
            <span
              className={cn(
                'block w-5 h-px bg-white transition-all duration-300',
                menuOpen && 'opacity-0 scale-x-0'
              )}
            />
            <span
              className={cn(
                'block w-5 h-px bg-white transition-all duration-300 origin-center',
                menuOpen && '-rotate-45 -translate-y-[6px]'
              )}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen ? <div
        id="mobile-navigation"
        className="fixed inset-0 z-40 flex flex-col bg-background px-6 pb-12 pt-24 lg:hidden"
      >
        <nav aria-label="Mobile navigation" className="flex flex-1 flex-col gap-8">
          {nav.links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              onClick={() => setMenuOpen(false)}
              className={cn(
                'text-2xl font-display font-semibold text-white/80 hover:text-white transition-all duration-300',
                'gm-motion-enter'
              )}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <BookingButton
          size="lg"
          className={cn(
            'w-full justify-center transition-all duration-300',
            'gm-motion-enter'
          )}
          style={{ animationDelay: `${nav.links.length * 60 + 60}ms` } as React.CSSProperties}
          onClick={() => setMenuOpen(false)}
          trackingEvent="booking_cta_click"
          trackingLabel={nav.cta.label}
        >
          {nav.cta.label}
        </BookingButton>
      </div> : null}
    </>
  )
}
