import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import type { SceneTone } from '@/lib/scene-config'
import { AmbientBackground } from '@/components/environment/AmbientBackground'

type SceneContainerProps = {
  id: string
  tone: SceneTone
  children: ReactNode
  density?: 'low' | 'medium'
  className?: string
}

export function SceneContainer({
  id,
  tone,
  children,
  density = 'medium',
  className,
}: SceneContainerProps) {
  return (
    <section
      id={id}
      data-scene={tone}
      className={cn(
        'executive-scene relative isolate overflow-hidden',
        density === 'low' ? 'min-h-[92svh]' : 'min-h-[100svh]',
        className
      )}
    >
      <AmbientBackground scene={tone} />
      <div className="relative z-10 mx-auto flex min-h-[inherit] w-full max-w-[min(1440px,100vw)] flex-col justify-center overflow-hidden px-5 py-28 sm:px-8 md:py-36 lg:px-12">
        {children}
      </div>
    </section>
  )
}
