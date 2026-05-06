import type { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { SystemFlow } from '@/components/sections/SystemFlow'
import { CaseStudyPreview } from '@/components/sections/CaseStudyPreview'
import { OperatingPhilosophy } from '@/components/sections/OperatingPhilosophy'
import { WhatIBuild } from '@/components/sections/WhatIBuild'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ProofBeforePhilosophy } from '@/components/sections/ProofBeforePhilosophy'

export const metadata: Metadata = {
  title: 'Gary L. Mariner II — AI Systems Architecture for Modern Operators',
  description:
    'AI systems architecture for modern operators: websites, automation, AI workflows, CRM pathways, and business operations connected into one scalable execution layer.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofBeforePhilosophy />
      <SystemFlow />
      <CaseStudyPreview />
      <OperatingPhilosophy />
      <WhatIBuild />
      <FinalCTA />
    </>
  )
}
