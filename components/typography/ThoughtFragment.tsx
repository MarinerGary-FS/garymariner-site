import { cn } from '@/lib/utils'

type ThoughtFragmentProps = {
  children: React.ReactNode
  className?: string
}

export function ThoughtFragment({ children, className }: ThoughtFragmentProps) {
  return (
    <span
      className={cn(
        'inline-flex border-l border-white/14 pl-4 text-sm leading-6 text-white/52',
        className
      )}
    >
      {children}
    </span>
  )
}
