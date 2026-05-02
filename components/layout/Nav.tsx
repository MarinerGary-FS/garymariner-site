'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BookingButton } from '@/components/ui/BookingButton'
import { siteContent } from '@/lib/content'
import { cn } from '@/lib/utils'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { nav } = siteContent

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
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
        <div className="max-w-site mx-auto px-5 md:px-8 lg:px-10 h-16 md:h-[4.5rem] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="shrink-0 flex items-center transition-all duration-200 rounded-lg ring-1 ring-gold/30 shadow-[0_0_14px_rgba(201,168,76,0.18)] hover:ring-gold/50 hover:shadow-[0_0_20px_rgba(201,168,76,0.28)]"
            aria-label="Gary L. Mariner II — Home"
          >
            <Image
              src="/images/glm-signature.png"
              alt="Gary L. Mariner II"
              width={40}
              height={40}
              className="rounded-lg"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-sans text-white/60 hover:text-white transition-colors duration-300 tracking-wide after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold/40 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <BookingButton size="sm" trackingEvent="booking_cta_click" trackingLabel={nav.cta.label}>
              {nav.cta.label}
            </BookingButton>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 -m-1 p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 rounded-md"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
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
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background flex flex-col px-6 pt-24 pb-12 transition-all duration-300 md:hidden',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav className="flex flex-col gap-8 flex-1">
          {nav.links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={cn(
                'text-2xl font-display font-semibold text-white/80 hover:text-white transition-all duration-300',
                menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              )}
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <BookingButton
          size="lg"
          className={cn(
            'w-full justify-center transition-all duration-300',
            menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
          style={{ transitionDelay: menuOpen ? `${nav.links.length * 60 + 60}ms` : '0ms' } as React.CSSProperties}
          onClick={() => setMenuOpen(false)}
          trackingEvent="booking_cta_click"
          trackingLabel={nav.cta.label}
        >
          {nav.cta.label}
        </BookingButton>
      </div>
    </>
  )
}
