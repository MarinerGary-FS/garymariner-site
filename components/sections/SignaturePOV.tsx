import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

export function SignaturePOV() {
  const { pov } = siteContent
  const [line1, line2] = pov.statement.split('\n')

  return (
    <section className="relative px-6 md:px-10 lg:px-16 py-32 md:py-44 bg-background overflow-hidden">
      {/* Centered gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] rounded-full bg-gold/[0.035] blur-[140px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto flex flex-col items-center text-center gap-12 md:gap-16">
        <Reveal>
          <h2 className="font-display font-bold text-display-xl md:text-display-2xl text-white leading-[1.06]">
            {line1}
            <br />
            <span className="text-gold-light">{line2}</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <p className="font-sans text-base text-white/45 leading-[1.85] max-w-lg">
            {pov.belief}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="divider-gold w-24" />
        </Reveal>

        <Reveal delay={300}>
          <p className="font-display font-semibold text-lg md:text-xl text-white/80 leading-snug max-w-md">
            {pov.role}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
