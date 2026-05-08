import { cn } from '@/lib/utils'

type ThoughtFragmentProps = {
  children: React.ReactNode
  className?: string
}

export function ThoughtFragment({ children, className }: ThoughtFragmentProps) {
  return (
    <span
      className={cn(
        'inline-flex border-l border-white/14 pl-4 font-sans text-sm leading-6 text-white/50',
        className
      )}
    >
      {children}
    </span>
  )
}
