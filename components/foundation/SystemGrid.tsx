import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

export function SystemGrid({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('gm-grid', className)} {...props} />
}
