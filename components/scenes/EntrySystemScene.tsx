import { SceneContainer } from '@/components/experience/SceneContainer'
import { SceneHeader } from '@/components/experience/SceneHeader'
import { DisplayStatement } from '@/components/typography/DisplayStatement'
import { homeScenes } from '@/lib/scene-config'

const scene = homeScenes[0]

export function EntrySystemScene() {
  return (
    <SceneContainer id="entry-system" tone="entry" density="low">
      <div className="max-w-5xl">
        <div>
          <SceneHeader index={scene.index} label={scene.label} />
          <DisplayStatement as="h1" size="hero">
            {scene.title}
          </DisplayStatement>
          <p className="mt-10 max-w-[20rem] font-sans text-[1.0625rem] leading-8 text-white/66 md:max-w-[700px] md:text-[1.25rem] md:leading-9">
            {scene.statement}
          </p>
        </div>
      </div>
    </SceneContainer>
  )
}
