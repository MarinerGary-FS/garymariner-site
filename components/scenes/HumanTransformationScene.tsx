import Image from 'next/image'
import { SceneContainer } from '@/components/experience/SceneContainer'
import { SceneHeader } from '@/components/experience/SceneHeader'
import { DisplayStatement } from '@/components/typography/DisplayStatement'
import { EditorialText } from '@/components/typography/EditorialText'
import { ThoughtFragment } from '@/components/typography/ThoughtFragment'
import { homeScenes } from '@/lib/scene-config'

const scene = homeScenes[3]

export function HumanTransformationScene() {
  return (
    <SceneContainer id="human-centered-transformation" tone="human" density="low">
      <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div className="relative order-2 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] lg:order-1">
          <Image
            src="/images/glm-close-up.jpg"
            alt="Gary Mariner"
            width={1365}
            height={1365}
            className="aspect-[4/5] w-full object-cover opacity-76 saturate-[0.78]"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,10,0.08),rgba(5,7,10,0.74)),radial-gradient(circle_at_50%_18%,rgba(91,127,255,0.10),transparent_34%)]" />
        </div>
        <div className="order-1 lg:order-2">
          <SceneHeader index={scene.index} label={scene.label} />
          <DisplayStatement size="medium">{scene.title}</DisplayStatement>
          <EditorialText variant="lead" className="mt-8">{scene.statement}</EditorialText>
          <EditorialText className="mt-6">{scene.body}</EditorialText>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {scene.fragments.map((fragment) => (
              <ThoughtFragment key={fragment}>{fragment}</ThoughtFragment>
            ))}
          </div>
        </div>
      </div>
    </SceneContainer>
  )
}
