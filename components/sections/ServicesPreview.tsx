import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { siteContent } from '@/lib/content'

export function ServicesPreview() {
  const { services } = siteContent

  return (
    <SectionWrapper className="bg-background border-t border-border/40">
      {/* Section header */}
      <Reveal className="mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-5">
              Services
            </p>
            <h2 className="font-display font-bold text-display-md text-white">
              How I Help Businesses Operate Smarter
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-sans text-white/40 hover:text-white/80 transition-colors duration-200 group self-start md:self-auto pb-1 border-b border-transparent hover:border-white/20"
          >
            View all services
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </Reveal>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 75}>
            <ServiceCard service={service} index={i} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  )
}

interface Service {
  title: string
  description: string
  href: string
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col gap-5 p-8 rounded-xl border border-border bg-surface hover:border-gold/30 transition-all duration-300 overflow-hidden"
    >
      {/* Gold top border — absolutely positioned, full-width on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold/0 group-hover:bg-gold/40 transition-all duration-500" />

      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <span className="font-display font-bold text-[2.5rem] leading-none text-white/[0.04] group-hover:text-white/[0.07] transition-colors duration-300 select-none tabular-nums mt-1">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="text-white/20 group-hover:text-gold/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 text-base leading-none mt-1">
          ↗
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <h3 className="font-display font-semibold text-lg text-white group-hover:text-white transition-colors duration-200 leading-snug">
          {service.title}
        </h3>
        <p className="font-sans text-sm text-white/55 leading-[1.75]">
          {service.description}
        </p>
      </div>
    </Link>
  )
}
