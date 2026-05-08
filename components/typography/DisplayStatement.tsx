import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type DisplayStatementProps = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'p'
  size?: 'hero' | 'large' | 'medium'
  className?: string
}

export function DisplayStatement({
  children,
  as: Tag = 'h2',
  size = 'large',
  className,
}: DisplayStatementProps) {
  return (
    <Tag
      className={cn(
        'w-[calc(100vw-2.5rem)] max-w-full overflow-hidden font-display font-semibold text-[#F3F1EC] text-balance sm:w-auto',
        size === 'hero' && 'text-[clamp(2.65rem,10vw,9.4rem)] leading-[0.96] sm:leading-[0.92]',
        size === 'large' && 'text-[clamp(2.7rem,6vw,6.7rem)] leading-[0.95]',
        size === 'medium' && 'text-[clamp(2.2rem,4.5vw,4.8rem)] leading-[1.02]',
        className
      )}
    >
      {children}
    </Tag>
  )
}
