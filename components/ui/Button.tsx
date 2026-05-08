import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps {
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'ghost' | 'text'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  external?: boolean
  disabled?: boolean
  style?: React.CSSProperties
  trackingEvent?: string
  trackingLabel?: string
}

export function Button({
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  children,
  className,
  external,
  disabled,
  style,
  trackingEvent,
  trackingLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-sans font-semibold tracking-wide transition-all duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sapphire/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background'

  const variants = {
    primary:
      'bg-sapphire text-[#05070A] hover:scale-[1.015] hover:bg-sapphire-light hover:shadow-[0_10px_34px_rgba(91,127,255,0.28)] active:scale-[1.005] active:shadow-[0_2px_8px_rgba(91,127,255,0.15)] active:bg-sapphire-dark',
    ghost:
      'border border-white/15 text-white hover:scale-[1.015] hover:border-white/30 hover:bg-white/[0.04] hover:shadow-[0_4px_18px_rgba(0,0,0,0.32)] active:scale-[1.005] active:bg-white/[0.06]',
    text: 'text-cyan hover:text-cyan-light underline-offset-4 hover:underline p-0 rounded-sm',
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

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        style={style}
        data-track-event={trackingEvent}
        data-track-label={trackingLabel}
        data-track-href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      style={style}
      disabled={disabled}
      aria-disabled={disabled}
    >
      {children}
    </button>
  )
}
