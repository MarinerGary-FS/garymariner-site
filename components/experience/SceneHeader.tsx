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
        'mb-10 flex items-center gap-4 font-sans text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/42 sm:mb-14',
        className
      )}
    >
      <span className="font-sans text-white/70">{index}</span>
      <span className="h-px w-12 bg-white/16" />
      <span>{label}</span>
    </div>
  )
}
