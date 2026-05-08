import { Button } from '@/components/ui/Button'
import { copySystem } from '@/lib/copy-system'

export function ControlledCTA() {
  return (
    <div className="flex flex-col gap-3 pt-10 sm:flex-row sm:items-center">
      <Button href="/contact" size="lg" trackingEvent="executive_cta_click" trackingLabel="Begin a conversation">
        {copySystem.ctas.primary}
      </Button>
      <Button href="https://www.marinernexus.com/" external variant="ghost" size="lg">
        {copySystem.ctas.secondary}
      </Button>
    </div>
  )
}
