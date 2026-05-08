import { Reveal } from '@/components/ui/Reveal'

const services = [
  {
    tag: 'AI Workflow Architecture',
    title: 'AI workflows for operational scale.',
    description: 'For operators carrying repetitive work. Maps AI to intake, response, routing, and execution so teams reduce manual workload.',
  },
  {
    tag: 'Website-to-CRM Ecosystems',
    title: 'Digital pathways that do not stop at the page.',
    description: 'For organizations with disconnected lead capture. Connects websites, booking, CRM, and follow-up into a business engine.',
  },
  {
    tag: 'Automation & Dashboards',
    title: 'Operational visibility without extra coordination.',
    description: 'For teams managing too many manual updates. Builds automation and dashboards that clarify ownership, status, and next action.',
  },
  {
    tag: 'Conversion Website Systems',
    title: 'Executive websites built to convert.',
    description: 'For brands that need authority and demand capture. Turns case studies, offers, and proof into consultation-ready architecture.',
  },
  {
    tag: 'Nonprofit Digital Infrastructure',
    title: 'Community systems that route action.',
    description: 'For mission-driven organizations. Connects events, donations, volunteers, CRM pathways, and communications into usable infrastructure.',
  },
  {
    tag: 'Executive Brand Platforms',
    title: 'Authority platforms for modern leaders.',
    description: 'For executives and founders. Builds a premium digital presence around positioning, proof, trust, and clear conversion.',
  },
]

export function WhatIBuild() {
  return (
    <section className="system-section relative overflow-hidden bg-background px-5 py-12 md:px-8 md:py-16 lg:px-10">
      <div className="absolute inset-0 flow-wash" />

      <div className="relative mx-auto max-w-site">
        <Reveal className="mb-10 max-w-3xl">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Systems I Build
          </p>
          <h2 className="font-display text-4xl font-bold leading-[1.08] text-white md:text-5xl">
            Strategy, execution, and systems implementation in one operating layer.
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 120}>
              <article className="system-card noise-overlay group relative min-h-[320px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#050505] transition-all duration-500 hover:scale-[1.01] hover:border-gold/25 hover:shadow-[0_22px_70px_rgba(0,0,0,0.42)]">
                <ServiceVisual variant={index} />
                <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5">
                  <div className="liquid-glass rounded-lg p-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
                      {service.tag}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/60 md:text-base">
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
  const isExecution = variant % 2 === 1

  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div
        className={
          isExecution
            ? 'absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(88,196,221,0.14),transparent_32%),radial-gradient(circle_at_28%_50%,rgba(91,127,255,0.08),transparent_30%)]'
            : 'absolute inset-0 bg-[radial-gradient(circle_at_38%_30%,rgba(91,127,255,0.14),transparent_30%),radial-gradient(circle_at_72%_56%,rgba(88,196,221,0.08),transparent_32%)]'
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
