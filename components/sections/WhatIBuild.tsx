import { Reveal } from '@/components/ui/Reveal'

const services = [
  {
    tag: 'Architecture',
    title: 'System Design',
    description: 'Build the operating layer that connects everything.',
  },
  {
    tag: 'Execution',
    title: 'Automation + AI',
    description: 'Remove manual friction and scale output.',
  },
]

export function WhatIBuild() {
  return (
    <section className="relative overflow-hidden bg-background px-5 py-20 md:px-8 md:py-24 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative mx-auto max-w-site">
        <div className="grid gap-4 lg:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 120}>
              <article className="group relative min-h-[400px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#050505] transition-all duration-500 hover:-translate-y-0.5 hover:scale-[1.02] hover:border-gold/25 hover:shadow-[0_22px_70px_rgba(0,0,0,0.42)]">
                <ServiceVisual variant={index} />
                <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5">
                  <div className="liquid-glass rounded-lg p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
                      {service.tag}
                    </p>
                    <h2 className="mt-3 font-display text-3xl font-bold leading-none text-white md:text-4xl">
                      {service.title}
                    </h2>
                    <p className="mt-3 max-w-md text-sm leading-6 text-white/60 md:text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceVisual({ variant }: { variant: number }) {
  const isExecution = variant === 1

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className={
          isExecution
            ? 'absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(88,166,255,0.14),transparent_32%),radial-gradient(circle_at_28%_50%,rgba(201,168,76,0.08),transparent_30%)]'
            : 'absolute inset-0 bg-[radial-gradient(circle_at_38%_30%,rgba(201,168,76,0.14),transparent_30%),radial-gradient(circle_at_72%_56%,rgba(88,166,255,0.08),transparent_32%)]'
        }
      />
      <div className="system-orbit absolute left-1/2 top-[38%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60" />
      <div className="absolute left-[18%] top-[24%] h-px w-[68%] rotate-[-10deg] bg-gradient-to-r from-transparent via-white/22 to-transparent" />
      <div className="absolute left-[20%] top-[42%] h-px w-[60%] rotate-6 bg-gradient-to-r from-transparent via-gold/24 to-transparent" />
      <div className="slow-float absolute right-[12%] top-[18%] h-20 w-36 rounded-lg border border-white/[0.06] bg-white/[0.02]" />
      <div className="slow-float-delayed absolute left-[12%] top-[34%] h-24 w-44 rounded-lg border border-white/[0.06] bg-white/[0.02]" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/78 to-transparent" />
    </div>
  )
}
