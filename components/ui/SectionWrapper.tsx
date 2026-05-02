import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  id?: string
  as?: 'section' | 'div' | 'article'
}

export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(function SectionWrapper({
  children,
  className,
  innerClassName,
  id,
  as: Tag = 'section',
}, ref) {
  return (
    <Tag ref={ref as never} id={id} className={cn('px-5 md:px-8 lg:px-10 py-20 md:py-24', className)}>
      <div className={cn('max-w-site mx-auto', innerClassName)}>{children}</div>
    </Tag>
  )
})
