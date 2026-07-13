import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  reading?: boolean
}

export function Container({ reading = false, className, ...props }: ContainerProps) {
  return <div className={cn('gm-container', reading && 'gm-reading-width', className)} {...props} />
}
