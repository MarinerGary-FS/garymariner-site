import { ArrowRight, ExternalLink } from 'lucide-react'
import { Container } from '@/components/foundation/Container'
import { homepageContent } from '@/lib/homepage-content'

export function StrategicInquiry() {
  const { inquiry } = homepageContent

  return (
    <section id="inquiry" aria-labelledby="inquiry-title" className="relative overflow-hidden py-24 md:py-32 lg:py-40">
      <Container>
        <div className="grid gap-10 border-y border-white/12 py-12 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:py-16">
          <div>
            <p className="gm-kicker mb-4 text-gold">Strategic inquiry</p>
            <h2 id="inquiry-title" className="max-w-4xl text-4xl font-semibold leading-[1.06] md:text-6xl">
              {inquiry.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/62 md:text-lg md:leading-8">{inquiry.body}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
            <a
              href="/contact"
              className="gm-interactive inline-flex min-h-12 items-center justify-between gap-4 rounded-md bg-gold px-5 text-sm font-semibold text-background hover:bg-gold-light"
            >
              Begin a conversation <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="https://www.marinernexus.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="gm-interactive inline-flex min-h-12 items-center justify-between gap-4 rounded-md border border-white/16 px-5 text-sm font-semibold text-white hover:bg-white/5"
            >
              Enter Mariner Nexus <ExternalLink aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
