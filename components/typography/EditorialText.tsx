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
        'w-[calc(100vw-2.5rem)] max-w-[min(700px,100%)] overflow-hidden font-sans font-normal text-white/66 sm:w-auto',
        variant === 'lead' && 'text-[1.0625rem] leading-8 md:text-[1.25rem] md:leading-9',
        variant === 'body' && 'text-base leading-7 md:text-[1.0625rem] md:leading-8',
        variant === 'quiet' && 'text-sm leading-6 text-white/46 md:text-[0.96875rem] md:leading-7',
        className
      )}
    >
      {children}
    </p>
  )
}
