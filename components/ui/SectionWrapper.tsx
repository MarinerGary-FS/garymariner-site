import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  innerClassName?: string
  id?: string
  as?: 'section' | 'div' | 'article'
}

export function SectionWrapper({
  children,
  className,
  innerClassName,
  id,
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag id={id} className={cn('px-6 md:px-10 lg:px-16 py-28 md:py-36', className)}>
      <div className={cn('max-w-site mx-auto', innerClassName)}>{children}</div>
    </Tag>
  )
}
