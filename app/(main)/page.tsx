import { Hero } from '@/components/sections/Hero'
import { SystemFlow } from '@/components/sections/SystemFlow'
import { CaseStudyPreview } from '@/components/sections/CaseStudyPreview'
import { OperatingPhilosophy } from '@/components/sections/OperatingPhilosophy'
import { WhatIBuild } from '@/components/sections/WhatIBuild'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SystemFlow />
      <CaseStudyPreview />
      <OperatingPhilosophy />
      <WhatIBuild />
      <FinalCTA />
    </>
  )
}
