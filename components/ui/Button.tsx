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
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center font-sans font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60'

  const variants = {
    // Primary: gold fill — the decision point
    primary:
      'bg-gold text-background hover:bg-gold-light hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(201,168,76,0.30)] active:translate-y-0 active:shadow-none active:bg-gold-dark',
    // Ghost: controlled border — secondary action
    ghost:
      'border border-white/20 text-white hover:border-white/35 hover:bg-white/[0.04] active:bg-white/[0.08]',
    text: 'text-gold hover:text-gold-light underline-offset-4 hover:underline p-0',
  }

  const sizes = {
    sm: 'px-5 py-3 text-sm rounded-md gap-2',
    md: 'px-6 py-3.5 text-sm rounded-lg gap-2',
    lg: 'px-9 py-4 text-base rounded-lg gap-2.5',
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
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} style={style} disabled={disabled}>
      {children}
    </button>
  )
}
