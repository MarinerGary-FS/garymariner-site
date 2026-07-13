import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from '@/lib/utils'

type GlassElement = 'div' | 'article' | 'aside' | 'section'

interface GlassPanelProps extends ComponentPropsWithoutRef<'div'> {
  as?: GlassElement
  strength?: 'standard' | 'strong'
}

export function GlassPanel({
  as = 'div',
  strength = 'standard',
  className,
  ...props
}: GlassPanelProps) {
  const Tag = as as ElementType
  return (
    <Tag
      className={cn('gm-glass', strength === 'strong' && 'gm-glass-strong', className)}
      {...props}
    />
  )
}
