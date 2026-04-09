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
              Focus Areas
            </p>
            <h2 className="font-display font-bold text-display-md text-white">
              Where I Create Value
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-sans text-white/40 hover:text-white/80 transition-colors duration-200 group self-start md:self-auto pb-1 border-b border-transparent hover:border-white/20"
          >
            View all focus areas
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </Reveal>

      {/* Service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 75}>
            <ServiceCard service={service} index={i} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  )
}

const serviceIcons = [
  // AI Transformation Strategy
  (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="8" width="8" height="8" rx="1" />
      <path d="M12 2v6M12 16v6M2 12h6M16 12h6" />
    </svg>
  ),
  // Digital Infrastructure
  (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 3v18" />
    </svg>
  ),
  // Operations & Workflow
  (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  // Strategic Communications
  (p: { className?: string }) => (
    <svg className={p.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),
]

interface Service {
  title: string
  description: string
  href: string
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = serviceIcons[index]
  return (
    <Link
      href={service.href}
      className="group relative flex flex-col gap-5 p-6 md:p-8 rounded-xl border border-border bg-surface hover:border-gold/25 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(0,0,0,0.35)] transition-all duration-300 overflow-hidden"
    >
      {/* Gold top accent — faint at rest, intensifies on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent group-hover:via-gold/45 transition-all duration-500" />

      {/* Header row */}
      <div className="flex items-start justify-between gap-4">
        <div className="w-10 h-10 rounded-lg border border-white/[0.06] bg-white/[0.02] flex items-center justify-center group-hover:border-gold/20 group-hover:bg-gold/[0.04] transition-all duration-300">
          <Icon className="w-5 h-5 text-white/30 group-hover:text-gold/60 transition-colors duration-300" />
        </div>
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
