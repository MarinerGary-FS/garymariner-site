import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

export function AuthorityStrip() {
  const { authority } = siteContent

  return (
    <section className="relative bg-surface border-y border-border overflow-hidden">
      {/* Subtle top gold light */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      <div className="max-w-site mx-auto px-5 md:px-8 lg:px-10 py-16 md:py-20">
        <Reveal className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-8 items-start">

          <div>
            <p className="text-xs font-sans text-white/40 uppercase tracking-[0.18em] mb-4">
              Authority Positioning
            </p>
            <h2 className="font-display font-bold text-display-lg text-white max-w-lg">
              {authority.tagline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/60 border border-border/60">
            {authority.items.map((item, i) => (
              <div key={item} className="group bg-surface px-5 py-6 md:px-6 md:py-7">
                <span className="font-display text-4xl font-bold text-white/[0.06] group-hover:text-gold/20 transition-colors duration-300">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="mt-5 h-0.5 w-8 rounded-full bg-gold/45 group-hover:w-10 group-hover:bg-gold transition-all duration-300" />
                <p className="mt-4 font-display text-base font-semibold text-white leading-tight">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </Reveal>

        <Reveal delay={140} className="mt-8 flex flex-wrap items-center gap-y-3 gap-x-0">
          {['15+ Years Operational Leadership', 'AI Systems & Workflow Optimization', 'Measurable Business Outcomes'].map((item, i, items) => (
            <span key={item} className="flex items-center">
              <span className="text-xs sm:text-sm font-sans text-white/45 tracking-wide pr-3 sm:pr-5">
                {item}
              </span>
              {i < items.length - 1 && (
                <>
                  <span className="w-1 h-1 rounded-full bg-gold/40 shrink-0" />
                  <span className="w-3 sm:w-5" />
                </>
              )}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
