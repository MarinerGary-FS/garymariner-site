import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

interface EnergyFieldProps extends ComponentPropsWithoutRef<'div'> {
  grid?: boolean
}

export function EnergyField({ grid = true, className, ...props }: EnergyFieldProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      {...props}
    >
      <div className="gm-energy-field absolute inset-0" />
      {grid ? <div className="gm-blueprint-grid absolute inset-0" /> : null}
    </div>
  )
}
