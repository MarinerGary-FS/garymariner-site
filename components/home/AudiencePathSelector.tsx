import { ArrowDownRight } from 'lucide-react'
import { Container } from '@/components/foundation/Container'
import { homepageContent } from '@/lib/homepage-content'

export function AudiencePathSelector() {
  return (
    <section aria-labelledby="audience-path-title" className="relative border-b border-white/10 bg-surface/35 py-16 md:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <header className="max-w-md">
            <p className="gm-kicker mb-4">Choose your entry point</p>
            <h2 id="audience-path-title" className="text-3xl font-semibold leading-tight md:text-4xl">
              What are you here to understand?
            </h2>
            <p className="mt-4 text-sm leading-6 text-white/58">
              Every path reaches the complete system. The choice only changes where you begin.
            </p>
          </header>

          <nav aria-label="Audience paths" className="grid border-t border-white/12 sm:grid-cols-2">
            {homepageContent.audiencePaths.map((path) => (
              <a
                key={path.id}
                href={path.href}
                className="gm-interactive group grid min-h-40 content-between gap-8 border-b border-white/12 p-5 hover:bg-white/[0.035] sm:border-x sm:border-x-transparent sm:p-6 sm:odd:border-r-white/12"
              >
                <span className="flex items-start justify-between gap-4">
                  <span className="font-display text-xl font-semibold text-white">{path.label}</span>
                  <ArrowDownRight aria-hidden="true" className="h-4 w-4 shrink-0 text-cyan transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </span>
                <span className="max-w-sm text-sm leading-6 text-white/52">{path.context}</span>
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </section>
  )
}
