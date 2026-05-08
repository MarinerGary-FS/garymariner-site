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
        'w-[calc(100vw-2.5rem)] max-w-[22rem] text-balance font-display font-semibold text-[#F3F1EC] sm:w-auto sm:max-w-full',
        size === 'hero' && 'text-[2.55rem] leading-[1.02] sm:text-[5.6rem] sm:leading-[0.94] lg:text-[8.15rem]',
        size === 'large' && 'text-[2.45rem] leading-[1.04] sm:text-[4.65rem] lg:text-[6.25rem]',
        size === 'medium' && 'text-[2.2rem] leading-[1.08] sm:text-[3.8rem] lg:text-[4.75rem]',
        className
      )}
    >
      {children}
    </Tag>
  )
}
