import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Container } from './Container'

interface SystemSectionProps extends Omit<ComponentPropsWithoutRef<'section'>, 'title'> {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  children: ReactNode
  readingHeader?: boolean
}

export function SystemSection({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  readingHeader = true,
  ...props
}: SystemSectionProps) {
  if (!id) throw new Error('SystemSection requires an id for accessible heading association')
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('gm-section-space relative isolate', className)}
      {...props}
    >
      <Container>
        <header className={cn('mb-12 md:mb-16', readingHeader && 'gm-reading-width')}>
          {eyebrow ? <p className="gm-kicker mb-4">{eyebrow}</p> : null}
          <h2 id={headingId} className="text-3xl font-semibold leading-tight text-white md:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 md:text-lg md:leading-8">
              {description}
            </p>
          ) : null}
        </header>
        {children}
      </Container>
    </section>
  )
}
