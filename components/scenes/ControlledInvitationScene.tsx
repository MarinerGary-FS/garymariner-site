import { SceneContainer } from '@/components/experience/SceneContainer'
import { SceneHeader } from '@/components/experience/SceneHeader'
import { DisplayStatement } from '@/components/typography/DisplayStatement'
import { EditorialText } from '@/components/typography/EditorialText'
import { ControlledCTA } from '@/components/conversion/ControlledCTA'
import { homeScenes } from '@/lib/scene-config'

const scene = homeScenes[5]

export function ControlledInvitationScene() {
  return (
    <SceneContainer id="controlled-invitation" tone="invitation" density="low">
      <div className="mx-auto max-w-5xl text-center">
        <SceneHeader index={scene.index} label={scene.label} className="justify-center" />
        <DisplayStatement size="large">{scene.title}</DisplayStatement>
        <EditorialText variant="lead" className="mx-auto mt-9">{scene.statement}</EditorialText>
        <EditorialText className="mx-auto mt-6">{scene.body}</EditorialText>
        <div className="flex justify-center">
          <ControlledCTA />
        </div>
      </div>
    </SceneContainer>
  )
}
