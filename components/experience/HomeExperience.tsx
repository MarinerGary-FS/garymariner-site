import { AudiencePathSelector } from '@/components/home/AudiencePathSelector'
import { DecisionCaseStudies } from '@/components/home/DecisionCaseStudies'
import { EcosystemGateway } from '@/components/home/EcosystemGateway'
import { FounderCommandSurface } from '@/components/home/FounderCommandSurface'
import { HeroSignal } from '@/components/home/HeroSignal'
import { LegacyBridge } from '@/components/home/LegacyBridge'
import { StrategicInquiry } from '@/components/home/StrategicInquiry'
import { SystemsOverview } from '@/components/home/SystemsOverview'
import { ThoughtStream } from '@/components/home/ThoughtStream'

export function HomeExperience() {
  return (
    <>
      <HeroSignal />
      <AudiencePathSelector />
      <FounderCommandSurface />
      <SystemsOverview />
      <DecisionCaseStudies />
      <ThoughtStream />
      <LegacyBridge />
      <EcosystemGateway />
      <StrategicInquiry />
    </>
  )
}
