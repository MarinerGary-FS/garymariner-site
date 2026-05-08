import { SceneContainer } from '@/components/experience/SceneContainer'
import { SceneHeader } from '@/components/experience/SceneHeader'
import { DisplayStatement } from '@/components/typography/DisplayStatement'
import { EditorialText } from '@/components/typography/EditorialText'
import { EcosystemMap } from '@/components/ecosystem/EcosystemMap'
import { ExecutiveMediaPreview } from '@/components/media/ExecutiveMediaPreview'
import { FamilyCrestArtifact } from '@/components/media/FamilyCrestArtifact'
import { homeScenes } from '@/lib/scene-config'

const scene = homeScenes[4]

export function EcosystemScene() {
  return (
    <SceneContainer id="ecosystem" tone="ecosystem">
      <FamilyCrestArtifact className="absolute right-[-24rem] top-[54%] hidden h-[46rem] w-[32rem] -translate-y-1/2 opacity-60 blur-[0.2px] lg:block" />
      <div className="relative">
        <SceneHeader index={scene.index} label={scene.label} />
        <div className="max-w-5xl">
          <DisplayStatement size="medium">{scene.title}</DisplayStatement>
          <EditorialText variant="lead" className="mt-8">{scene.statement}</EditorialText>
          <EditorialText className="mt-6">{scene.body}</EditorialText>
        </div>
        <div className="mt-10 max-w-3xl border-y border-white/[0.07] bg-white/[0.018] px-5 py-5 backdrop-blur-sm">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/36">
            Heritage as infrastructure
          </p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/56">
            The ecosystem is built around continuity: identity, execution, human impact, and public
            intelligence moving as one connected system.
          </p>
        </div>
      </div>
      <EcosystemMap />
      <ExecutiveMediaPreview />
    </SceneContainer>
  )
}
