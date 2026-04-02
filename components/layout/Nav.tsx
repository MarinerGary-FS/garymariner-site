'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
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
        <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 h-16 md:h-[4.5rem] flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-base tracking-tight text-white hover:text-gold transition-colors duration-200"
          >
            {nav.name}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-sans text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button href={nav.cta.href} size="sm" external={nav.cta.external}>
              {nav.cta.label}
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={cn(
                'block w-5 h-px bg-white transition-all duration-300',
                menuOpen && 'rotate-45 translate-y-[7px]'
              )}
            />
            <span
              className={cn(
                'block w-5 h-px bg-white transition-all duration-300',
                menuOpen && 'opacity-0'
              )}
            />
            <span
              className={cn(
                'block w-5 h-px bg-white transition-all duration-300',
                menuOpen && '-rotate-45 -translate-y-[7px]'
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
        <Button
          href={nav.cta.href}
          external={nav.cta.external}
          size="lg"
          className={cn(
            'w-full justify-center transition-all duration-300',
            menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          )}
          style={{ transitionDelay: menuOpen ? `${nav.links.length * 60 + 60}ms` : '0ms' } as React.CSSProperties}
          onClick={() => setMenuOpen(false)}
        >
          {nav.cta.label}
        </Button>
      </div>
    </>
  )
}
