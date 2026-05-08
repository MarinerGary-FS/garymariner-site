import { SceneTransition } from '@/components/experience/SceneTransition'
import { ControlledInvitationScene } from '@/components/scenes/ControlledInvitationScene'
import { EcosystemScene } from '@/components/scenes/EcosystemScene'
import { EntrySystemScene } from '@/components/scenes/EntrySystemScene'
import { HumanTransformationScene } from '@/components/scenes/HumanTransformationScene'
import { SystemsInfrastructureScene } from '@/components/scenes/SystemsInfrastructureScene'
import { TranslatorScene } from '@/components/scenes/TranslatorScene'

export function HomeExperience() {
  return (
    <>
      <EntrySystemScene />
      <SceneTransition />
      <TranslatorScene />
      <SceneTransition />
      <SystemsInfrastructureScene />
      <SceneTransition />
      <HumanTransformationScene />
      <SceneTransition />
      <EcosystemScene />
      <SceneTransition />
      <ControlledInvitationScene />
    </>
  )
}
