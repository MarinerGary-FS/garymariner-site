import { Hero } from '@/components/sections/Hero'
import { AuthorityStrip } from '@/components/sections/AuthorityStrip'
import { SystemFlow } from '@/components/sections/SystemFlow'
import { ProofSection } from '@/components/sections/ProofSection'
import { CaseStudyPreview } from '@/components/sections/CaseStudyPreview'
import { OperatingPhilosophy } from '@/components/sections/OperatingPhilosophy'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AuthorityStrip />
      <SystemFlow />
      <CaseStudyPreview />
      <OperatingPhilosophy />
      <FinalCTA />
      <ProofSection />
    </>
  )
}
