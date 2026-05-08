import { SceneContainer } from '@/components/experience/SceneContainer'
import { SceneHeader } from '@/components/experience/SceneHeader'
import { DisplayStatement } from '@/components/typography/DisplayStatement'
import { EditorialText } from '@/components/typography/EditorialText'
import { EcosystemMap } from '@/components/ecosystem/EcosystemMap'
import { ExecutiveMediaPreview } from '@/components/media/ExecutiveMediaPreview'
import { homeScenes } from '@/lib/scene-config'

const scene = homeScenes[4]

export function EcosystemScene() {
  return (
    <SceneContainer id="ecosystem" tone="ecosystem">
      <SceneHeader index={scene.index} label={scene.label} />
      <div className="max-w-5xl">
        <DisplayStatement size="medium">{scene.title}</DisplayStatement>
        <EditorialText variant="lead" className="mt-8">{scene.statement}</EditorialText>
        <EditorialText className="mt-6">{scene.body}</EditorialText>
      </div>
      <EcosystemMap />
      <ExecutiveMediaPreview />
    </SceneContainer>
  )
}
