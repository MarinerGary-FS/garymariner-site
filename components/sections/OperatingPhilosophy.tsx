import { Reveal } from '@/components/ui/Reveal'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteContent } from '@/lib/content'

export function OperatingPhilosophy() {
  const { philosophy } = siteContent

  // Split elaboration into its three declarative sentences
  const declarations = philosophy.elaboration
    .split('.')
    .map((s) => s.trim())
    .filter(Boolean)

  return (
    <SectionWrapper className="bg-background border-t border-border/40">

      {/* Central statement — maximum typographic presence */}
      <Reveal className="max-w-4xl mx-auto mb-14 md:mb-28">
        <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-8 md:mb-10 text-center">
          Operating Philosophy
        </p>

        {/* Primary statement */}
        <h2 className="font-display font-bold text-display-2xl text-white text-center mb-8 md:mb-12">
          {philosophy.statement}
        </h2>

        {/* Three declarations — stacked with clear visual rhythm */}
        <div className="flex flex-col items-center gap-4">
          {declarations.map((line, i) => (
            <Reveal key={i} delay={80 + i * 120}>
              <p className="font-display font-semibold text-display-md text-gold/75 text-center leading-[1.2]">
                {line}.
              </p>
            </Reveal>
          ))}
        </div>

        {/* Closing — smaller, measured */}
        <Reveal delay={500}>
          <p className="font-sans text-base text-white/45 leading-[1.85] text-center mt-10 max-w-xl mx-auto">
            {philosophy.closing}
          </p>
        </Reveal>
      </Reveal>

      {/* Horizontal rule */}
      <div className="divider mb-12 md:mb-24" />

      {/* Principle columns — clean, no visual noise */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {philosophy.principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <div className="group flex flex-col gap-5 py-8 md:py-0 border-b border-border/30 md:border-b-0 last:border-b-0">
              {/* Gold accent — expands on hover */}
              <div className="w-8 h-0.5 bg-gold/35 group-hover:bg-gold/65 group-hover:w-14 transition-all duration-500 rounded-full" />

              <h3 className="font-display font-semibold text-lg text-white leading-snug">
                {p.title}
              </h3>
              <p className="font-sans text-sm text-white/50 leading-[1.8]">
                {p.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

    </SectionWrapper>
  )
}
