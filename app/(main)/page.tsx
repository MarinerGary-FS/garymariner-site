import { Hero } from '@/components/sections/Hero'
import { AuthorityStrip } from '@/components/sections/AuthorityStrip'
import { SignaturePOV } from '@/components/sections/SignaturePOV'
import { PositioningBlock } from '@/components/sections/PositioningBlock'
import { SystemFlow } from '@/components/sections/SystemFlow'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { ServicesPreview } from '@/components/sections/ServicesPreview'
import { ProofSection } from '@/components/sections/ProofSection'
import { CaseStudyPreview } from '@/components/sections/CaseStudyPreview'
import { OperatingPhilosophy } from '@/components/sections/OperatingPhilosophy'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <AuthorityStrip />
      <SignaturePOV />
      <PositioningBlock />
      <SystemFlow />
      <BeforeAfter />
      <ServicesPreview />
      <ProofSection />
      <CaseStudyPreview />
      <OperatingPhilosophy />
      <FinalCTA />
    </>
  )
}
