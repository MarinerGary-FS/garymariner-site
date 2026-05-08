import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type EditorialTextProps = {
  children: ReactNode
  className?: string
  variant?: 'lead' | 'body' | 'quiet'
}

export function EditorialText({ children, className, variant = 'body' }: EditorialTextProps) {
  return (
    <p
      className={cn(
        'w-[calc(100vw-2.5rem)] max-w-[min(760px,100%)] overflow-hidden font-sans text-white/68 sm:w-auto',
        variant === 'lead' && 'text-lg leading-8 md:text-xl md:leading-9',
        variant === 'body' && 'text-base leading-7 md:text-lg md:leading-8',
        variant === 'quiet' && 'text-sm leading-6 text-white/48 md:text-base md:leading-7',
        className
      )}
    >
      {children}
    </p>
  )
}
