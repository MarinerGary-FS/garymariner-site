'use client'

import { useState, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'
import { MEETING_TYPES, DEFAULT_CAL_LINK, type MeetingType } from '@/lib/cal-config'
import { trackEvent } from '@/lib/analytics'

// Extend window with Cal embed API
declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void
  }
}

interface BookingButtonProps {
  variant?: 'primary' | 'ghost' | 'text'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
  /** Skip qualifier and open this cal link directly */
  calLink?: string
  style?: React.CSSProperties
  onClick?: () => void
  trackingEvent?: string
  trackingLabel?: string
}

export function BookingButton({
  variant = 'primary',
  size = 'md',
  className,
  children,
  calLink,
  style,
  onClick,
  trackingEvent,
  trackingLabel,
}: BookingButtonProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<MeetingType | null>(null)

  const base =
    'inline-flex items-center justify-center font-sans font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sapphire/60'

  const variants = {
    primary:
      'bg-sapphire text-[#05070A] hover:bg-sapphire-light hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(91,127,255,0.30)] active:translate-y-0 active:shadow-none active:bg-sapphire-dark',
    ghost:
      'border border-white/20 text-white hover:border-white/35 hover:bg-white/[0.04] active:bg-white/[0.08]',
    text: 'text-cyan hover:text-cyan-light underline-offset-4 hover:underline p-0',
  }

  const sizes = {
    sm: 'px-5 py-3 text-sm rounded-md gap-2',
    md: 'px-6 py-3.5 text-sm rounded-lg gap-2',
    lg: 'px-6 py-3 text-sm rounded-lg gap-2',
  }

  const classes = cn(
    base,
    variants[variant],
    variant !== 'text' && sizes[size],
    className
  )

  // Lock body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on Escape key
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const openCal = useCallback((link: string) => {
    if (typeof window !== 'undefined' && window.Cal) {
      window.Cal('modal', { calLink: link, config: { theme: 'dark' } })
    } else {
      // Fallback: open in new tab
      window.open(`https://cal.com/${link}`, '_blank', 'noopener,noreferrer')
    }
  }, [])

  const handleClick = () => {
    onClick?.()
    if (trackingEvent) {
      trackEvent({ event: trackingEvent, label: trackingLabel })
    }
    if (calLink) {
      // Direct open — no qualifier needed
      openCal(calLink)
    } else {
      // Show qualifier modal
      setSelected(null)
      setOpen(true)
    }
  }

  const handleContinue = () => {
    const link = selected ? selected.calLink : DEFAULT_CAL_LINK
    setOpen(false)
    // Small delay so modal closes before Cal popup opens
    setTimeout(() => openCal(link), 150)
  }

  return (
    <>
      <button
        type="button"
        className={classes}
        style={style}
        onClick={handleClick}
      >
        {children}
      </button>

      {/* Qualifier modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Select a meeting type"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Panel */}
          <div className="relative w-full sm:max-w-lg bg-[#111111] border border-white/10 rounded-t-lg sm:rounded-lg shadow-2xl shadow-black/80 overflow-hidden max-h-[90vh] overflow-y-auto">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-sapphire/50 to-cyan/30" />

            <div className="px-6 pt-8 pb-6 sm:px-8 sm:pt-10 sm:pb-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <p className="text-xs font-sans text-cyan/70 uppercase tracking-[0.16em] mb-2">
                    Controlled invitation
                  </p>
                  <h2 className="font-display font-bold text-xl text-white leading-tight">
                    What type of conversation fits best?
                  </h2>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="shrink-0 ml-4 mt-0.5 w-8 h-8 flex items-center justify-center rounded-full border border-white/10 text-white/40 hover:text-white/80 hover:border-white/20 transition-all duration-200"
                  aria-label="Close"
                >
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-3.5 h-3.5">
                    <path d="M3 3l10 10M13 3L3 13" />
                  </svg>
                </button>
              </div>

              {/* Meeting type cards */}
              <div className="flex flex-col gap-3 mb-8">
                {MEETING_TYPES.map((type) => {
                  const isSelected = selected?.id === type.id
                  return (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setSelected(type)}
                      className={cn(
                        'w-full text-left rounded-xl border p-5 transition-all duration-200 group',
                        isSelected
                          ? 'border-sapphire/50 bg-sapphire/[0.07]'
                          : 'border-white/8 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                      )}
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <span className={cn(
                          'font-display font-semibold text-base transition-colors duration-200',
                          isSelected ? 'text-white' : 'text-white/80'
                        )}>
                          {type.label}
                        </span>
                        <span className={cn(
                          'shrink-0 text-xs font-sans px-2.5 py-1 rounded-full border transition-colors duration-200',
                          isSelected
                            ? 'border-sapphire/40 text-sapphire-light bg-sapphire/10'
                            : 'border-white/10 text-white/35'
                        )}>
                          {type.duration}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-white/45 leading-[1.7]">
                        {type.description}
                      </p>
                      {/* Selection indicator */}
                      <div className={cn(
                        'mt-3 flex items-center gap-2 transition-all duration-200',
                        isSelected ? 'opacity-100' : 'opacity-0'
                      )}>
                        <div className="w-3.5 h-3.5 rounded-full border-2 border-sapphire bg-sapphire/20 flex items-center justify-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-sapphire" />
                        </div>
                        <span className="text-xs font-sans text-cyan/70">Selected</span>
                      </div>
                    </button>
                  )
                })}
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleContinue}
                  disabled={!selected}
                  className={cn(
                    'flex-1 inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm rounded-lg px-6 py-3.5 transition-all duration-200',
                    selected
                      ? 'bg-sapphire text-[#05070A] hover:bg-sapphire-light hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(91,127,255,0.25)]'
                      : 'bg-white/5 text-white/25 cursor-not-allowed'
                  )}
                >
                  Continue to Booking
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="sm:w-auto inline-flex items-center justify-center font-sans text-sm text-white/40 hover:text-white/80 transition-colors duration-200 px-4 py-3.5"
                >
                  Cancel
                </button>
              </div>

              <p className="mt-5 text-center text-xs font-sans text-white/20 leading-relaxed">
                Not sure which to pick? Start with a Strategy Call.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
