import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

export function OperatingPhilosophy() {
  const { philosophy } = siteContent

  const statements = [
    philosophy.statement,
    ...philosophy.elaboration
      .split('.')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => `${line}.`),
  ]

  return (
    <section className="relative overflow-hidden bg-background px-6 py-28 md:px-10 md:py-44 lg:px-16">
      <div className="absolute inset-0 bg-grid opacity-15" />
      <div className="absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.045]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,168,76,0.07),transparent_36%)]" />

      <div className="relative mx-auto max-w-site">
        <div className="mx-auto max-w-6xl">
          {statements.map((statement, index) => (
            <Reveal key={statement} delay={index * 90}>
              <p className="border-t border-white/[0.08] py-7 font-display text-[clamp(2.4rem,6vw,6.6rem)] font-bold leading-[0.98] text-white md:py-10">
                {statement}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
