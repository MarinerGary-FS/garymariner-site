import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

export function AuthorityStrip() {
  const { authority } = siteContent

  return (
    <div className="relative bg-surface border-y border-border overflow-hidden">
      {/* Subtle top gold light */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-site mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-14">
        <Reveal className="flex flex-col items-center gap-7">

          {/* Tagline — the dominant element, not a subheading */}
          <p className="font-display font-bold text-display-md text-white/90 text-center tracking-tight">
            {authority.tagline}
          </p>

          {/* Credential row — editorial separator style */}
          <div className="flex flex-wrap items-center justify-center gap-y-4">
            {authority.items.map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="text-sm font-sans text-white/55 tracking-wide px-5 md:px-6 whitespace-nowrap">
                  {item}
                </span>
                {i < authority.items.length - 1 && (
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/45 shrink-0" />
                )}
              </span>
            ))}
          </div>

        </Reveal>
      </div>
    </div>
  )
}
