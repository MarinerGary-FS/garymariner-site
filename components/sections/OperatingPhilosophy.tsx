import { Boxes, BrainCircuit, TrendingUp, Users } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

export function OperatingPhilosophy() {
  const principles = [
    {
      title: 'Systems over software.',
      icon: Boxes,
    },
    {
      title: 'Intelligence over imitation.',
      icon: BrainCircuit,
    },
    {
      title: 'Leverage over headcount.',
      icon: Users,
    },
    {
      title: 'Growth by design.',
      icon: TrendingUp,
    },
  ]

  return (
    <section className="system-section relative overflow-hidden border-y border-white/[0.06] bg-background px-5 py-12 md:px-8 md:py-16 lg:px-10">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute inset-0 flow-wash" />

      <div className="relative mx-auto max-w-site">
        <Reveal className="mb-5 flex items-center gap-3">
          <span className="h-px w-8 bg-gold/70" />
          <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-gold">
            03 / Philosophy
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => {
            const Icon = principle.icon

            return (
              <Reveal key={principle.title} delay={index * 70}>
                <article className="system-card noise-overlay group relative min-h-[136px] overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.025] p-4 backdrop-blur-md transition-all duration-500 hover:scale-[1.01] hover:border-gold/30 hover:bg-white/[0.045]">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-gold/70 via-sky-300/50 to-transparent opacity-80" />
                  <div className="mb-8 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-white/[0.08] bg-black/30 text-sapphire transition-all duration-500 group-hover:border-sapphire/30 group-hover:text-sapphire-light group-hover:shadow-[0_0_24px_rgba(91,127,255,0.16)]">
                      <Icon className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                    <span className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/28">
                      0{index + 1}
                    </span>
                  </div>

                  <h2 className="font-display text-xl font-semibold leading-[1.14] text-white md:text-[1.35rem]">
                    {principle.title}
                  </h2>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
