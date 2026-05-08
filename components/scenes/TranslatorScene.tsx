import Image from 'next/image'
import { SceneContainer } from '@/components/experience/SceneContainer'
import { SceneHeader } from '@/components/experience/SceneHeader'
import { DisplayStatement } from '@/components/typography/DisplayStatement'
import { EditorialText } from '@/components/typography/EditorialText'
import { homeScenes } from '@/lib/scene-config'

const scene = homeScenes[1]

export function TranslatorScene() {
  return (
    <SceneContainer id="translator" tone="translator">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SceneHeader index={scene.index} label={scene.label} />
          <DisplayStatement size="medium">{scene.title}</DisplayStatement>
          <EditorialText variant="lead" className="mt-8">{scene.statement}</EditorialText>
          <EditorialText variant="quiet" className="mt-6">{scene.body}</EditorialText>
        </div>
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.035] shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
          <Image
            src="/images/glm-business.jpg"
            alt="Gary Mariner in an executive setting"
            width={1400}
            height={1400}
            className="aspect-[5/4] w-full object-cover opacity-72 saturate-[0.76]"
            sizes="(min-width: 1024px) 48vw, 100vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,7,10,0.06),rgba(5,7,10,0.76)),radial-gradient(circle_at_22%_16%,rgba(91,127,255,0.16),transparent_34%)]" />
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <p className="max-w-md text-sm leading-6 text-white/70">
              Executive presence matters most when it is connected to operational reality.
            </p>
          </div>
        </div>
      </div>
      <div className="translation-map mt-14 grid gap-4">
          {scene.fragments.map((pair) => {
            const [from, to] = pair.split(' -> ')
            return (
              <div
                key={pair}
                className="grid gap-4 border-t border-white/10 py-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center"
              >
                <p className="font-display text-2xl font-semibold text-white/82">{from}</p>
                <span className="hidden h-px w-16 bg-gradient-to-r from-[#5B7FFF]/24 via-white/24 to-[#58C4DD]/28 sm:block" />
                <p className="text-lg leading-7 text-[#F3F1EC]">{to}</p>
              </div>
            )
          })}
      </div>
    </SceneContainer>
  )
}
