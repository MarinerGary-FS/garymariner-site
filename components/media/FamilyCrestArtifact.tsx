import Image from 'next/image'
import { cn } from '@/lib/utils'

type FamilyCrestArtifactProps = {
  className?: string
  imageClassName?: string
  priority?: boolean
}

export function FamilyCrestArtifact({ className, imageClassName, priority = false }: FamilyCrestArtifactProps) {
  return (
    <div
      className={cn(
        'pointer-events-none relative overflow-hidden [mask-image:radial-gradient(ellipse_at_center,black_0%,rgba(0,0,0,0.62)_42%,transparent_78%)]',
        className
      )}
      aria-hidden="true"
    >
      <Image
        src="/images/family-crest-artifact.jpg"
        alt=""
        fill
        priority={priority}
        sizes="(min-width: 1024px) 34vw, 90vw"
        className={cn(
          'object-cover object-center opacity-[0.18] saturate-[0.62] contrast-[0.94]',
          imageClassName
        )}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,7,10,0.48)_58%,rgba(5,7,10,0.82)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,7,10,0.72),transparent_46%,rgba(5,7,10,0.78)),linear-gradient(180deg,rgba(5,7,10,0.78),transparent_42%,rgba(5,7,10,0.84))]" />
    </div>
  )
}
