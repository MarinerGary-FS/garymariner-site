import { cn } from '@/lib/utils'
import type { SceneTone } from '@/lib/scene-config'

type AmbientBackgroundProps = {
  scene?: SceneTone
  className?: string
}

const sceneClass: Record<SceneTone, string> = {
  entry: 'from-[#05070A] via-[#0A1018] to-[#11151B]',
  translator: 'from-[#05070A] via-[#0B1118] to-[#121821]',
  systems: 'from-[#05070A] via-[#08111D] to-[#11151B]',
  human: 'from-[#05070A] via-[#11100E] to-[#15130F]',
  ecosystem: 'from-[#05070A] via-[#0A1117] to-[#12141B]',
  invitation: 'from-[#05070A] via-[#0A0D11] to-[#101319]',
}

export function AmbientBackground({ scene = 'entry', className }: AmbientBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
    >
      <div className={cn('absolute inset-0 bg-gradient-to-b', sceneClass[scene])} />
      <div className="ambient-light absolute inset-0 opacity-80" />
      <div className="depth-grid absolute inset-x-0 top-0 h-full opacity-45" />
      <div className="infrastructure-field absolute inset-0 opacity-60" />
      <div className="noise-field absolute inset-0 opacity-35" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.18)_58%,rgba(0,0,0,0.58)_100%)]" />
    </div>
  )
}
