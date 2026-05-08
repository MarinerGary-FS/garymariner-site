import { SceneContainer } from '@/components/experience/SceneContainer'
import { SceneHeader } from '@/components/experience/SceneHeader'
import { DisplayStatement } from '@/components/typography/DisplayStatement'
import { EditorialText } from '@/components/typography/EditorialText'
import { homeScenes } from '@/lib/scene-config'

const scene = homeScenes[2]

export function SystemsInfrastructureScene() {
  return (
    <SceneContainer id="systems-infrastructure" tone="systems">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <SceneHeader index={scene.index} label={scene.label} />
          <DisplayStatement size="medium">{scene.title}</DisplayStatement>
          <EditorialText variant="lead" className="mt-8">{scene.statement}</EditorialText>
          <EditorialText className="mt-6">{scene.body}</EditorialText>
        </div>
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0A0F16]/70 p-5 shadow-[0_40px_120px_rgba(0,0,0,0.35)] md:p-8">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative grid gap-4">
            {scene.fragments.map((fragment, index) => {
              const [value, label] = fragment.split('|')
              return (
                <div
                  key={fragment}
                  className="relative grid min-h-32 items-end border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-[0.42fr_1fr]"
                >
                  <span className="font-display text-5xl font-semibold leading-none text-[#9DB0FF] md:text-6xl">
                    {value}
                  </span>
                  <p className="text-sm leading-6 text-white/62 sm:text-base">
                    {label}
                  </p>
                  <span
                    className="absolute right-5 top-5 h-2 w-2 rounded-full bg-[#58C4DD]/70"
                    style={{ opacity: 0.35 + index * 0.2 }}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </SceneContainer>
  )
}
