import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

export function SignaturePOV() {
  const { pov } = siteContent

  return (
    <section className="relative px-6 md:px-10 lg:px-16 py-28 md:py-40 bg-background overflow-hidden">
      {/* Centered gold glow — gravity point */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] rounded-full bg-gold/[0.04] blur-[140px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        {/* Lead statement — the scroll-stopper */}
        <Reveal>
          <p className="text-xs font-sans text-gold/70 uppercase tracking-[0.2em] mb-10 text-center">
            Point of View
          </p>
          <h2 className="font-display font-bold text-display-xl md:text-display-2xl text-white text-center leading-[1.06] mb-12 md:mb-16">
            {pov.statement}
          </h2>
        </Reveal>

        {/* Supporting belief */}
        <Reveal delay={100}>
          <div className="max-w-2xl mx-auto">
            <div className="divider-gold mb-10" />
            <p className="font-sans text-base md:text-lg text-white/55 leading-[1.85] text-center mb-10">
              {pov.belief}
            </p>
          </div>
        </Reveal>

        {/* Role statement — the identity anchor */}
        <Reveal delay={200}>
          <div className="max-w-xl mx-auto">
            <p className="font-display font-semibold text-display-md text-white/90 text-center leading-[1.25]">
              {pov.role}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
