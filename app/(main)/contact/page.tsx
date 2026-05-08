import type { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Reveal } from '@/components/ui/Reveal'
import { BookingButton } from '@/components/ui/BookingButton'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Explore Alignment — Gary L. Mariner II',
  description:
    'Begin a controlled conversation about AI transformation, systems architecture, operational clarity, and intelligent execution.',
}

const expectations = [
  {
    title: 'Operational clarity',
    description: 'The conversation centers on where manual workload, disconnected tools, unclear workflows, or weak conversion pathways are costing the business.',
  },
  {
    title: 'Strategic fit',
    description: 'The goal is to determine whether AI systems, automation, or digital infrastructure can create meaningful improvement.',
  },
  {
    title: 'Intelligent next step',
    description: 'You leave with clearer diagnosis of the execution gap and a practical path for what should be built, connected, or simplified.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative px-5 md:px-8 lg:px-10 pt-36 pb-16 md:pt-44 md:pb-20 bg-background overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-gold/[0.03] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 divider-gold" />

        <div className="relative max-w-site mx-auto">
          <div
            className="flex items-center gap-3 mb-8"
            style={{ animation: 'fadeUp 0.6s ease 0.05s both' }}
          >
            <span className="w-6 h-px bg-gold/50" />
            <span className="text-xs font-sans font-medium text-gold/80 uppercase tracking-[0.18em]">
              Controlled invitation
            </span>
          </div>

          <h1
            className="font-display font-bold text-display-2xl text-white max-w-2xl mb-7"
            style={{ animation: 'fadeUp 0.75s ease 0.18s both' }}
          >
            Explore alignment.
          </h1>
          <p
            className="font-sans text-base text-white/60 leading-[1.85] max-w-xl"
            style={{ animation: 'fadeUp 0.75s ease 0.3s both' }}
          >
            Bring the operational friction, digital infrastructure gap, or AI workflow opportunity. We will identify whether the vision needs a system, a conversation, or a clearer execution path.
          </p>
        </div>
      </section>

      {/* Main content */}
      <SectionWrapper className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">

          {/* Left — booking + info */}
          <div className="flex flex-col gap-10">

            {/* Book directly */}
            <Reveal>
              <div className="rounded-xl border border-gold/20 bg-surface/40 overflow-hidden">
                <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <div className="p-8">
                  <p className="text-xs font-sans text-gold/70 uppercase tracking-[0.16em] mb-4">
                    Direct conversation
                  </p>
                  <h2 className="font-display font-bold text-display-md text-white leading-tight mb-3">
                    Begin with the business problem.
                  </h2>
                  <p className="font-sans text-sm text-white/60 leading-[1.8] mb-7">
                    A focused conversation about what you are trying to solve, what is creating friction, and whether intelligent infrastructure can move the work forward.
                  </p>
                  <BookingButton size="md">
                    Begin a conversation
                  </BookingButton>
                </div>
              </div>
            </Reveal>

            {/* What to expect */}
            <Reveal delay={80}>
              <div className="flex flex-col gap-6">
                <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em]">
                  What to expect
                </p>
                {expectations.map((item, i) => (
                  <div key={item.title} className="flex gap-5">
                    <span className="font-display font-bold text-2xl text-white/[0.06] leading-none select-none tabular-nums shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      <h3 className="font-display font-semibold text-sm text-white">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs text-white/45 leading-[1.75]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* LinkedIn */}
            <Reveal delay={120}>
              <div className="divider" />
              <div className="pt-6 flex items-center justify-between">
                <span className="text-xs font-sans text-white/30 tracking-wide">
                  Also available on LinkedIn
                </span>
                <a
                  href="https://www.linkedin.com/in/gary-mariner-ii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-sans text-white/40 hover:text-gold transition-colors duration-200 tracking-wide"
                >
                  Connect
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — contact form */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-4">
                  Start with context
                </p>
                <p className="font-sans text-sm text-white/45 leading-[1.8]">
                  Prefer to write first? Describe the workflow, automation, website, CRM, or operations challenge and I&apos;ll respond directly.
                </p>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </SectionWrapper>
    </>
  )
}
