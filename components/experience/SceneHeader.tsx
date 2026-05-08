import { cn } from '@/lib/utils'

type SceneHeaderProps = {
  index: string
  label: string
  className?: string
}

export function SceneHeader({ index, label, className }: SceneHeaderProps) {
  return (
    <div
      className={cn(
        'mb-10 flex items-center gap-4 text-[0.68rem] uppercase tracking-[0.24em] text-white/42 sm:mb-14',
        className
      )}
    >
      <span className="font-display text-white/70">{index}</span>
      <span className="h-px w-12 bg-white/16" />
      <span>{label}</span>
    </div>
  )
}
