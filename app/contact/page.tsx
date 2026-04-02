import type { Metadata } from 'next'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Gary L. Mariner II',
  description:
    'Book a consultation or send a message. Focused on AI systems, operations optimization, and digital infrastructure for business.',
}

const expectations = [
  {
    title: 'Clear Agenda',
    description: 'Every consultation has a defined purpose. We focus on your business, your challenges, and what systems can realistically improve.',
  },
  {
    title: 'No Sales Pressure',
    description: 'The goal of the first conversation is to determine whether there\'s a real fit — not to close a deal.',
  },
  {
    title: 'Actionable Outcome',
    description: 'You\'ll leave the conversation with clarity on what\'s creating friction in your operations and what the path forward looks like.',
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="relative px-6 md:px-10 lg:px-16 pt-36 pb-16 md:pt-44 md:pb-20 bg-background overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-gold/[0.03] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 divider-gold" />

        <div className="relative max-w-site mx-auto">
          <div
            className="flex items-center gap-3 mb-8"
            style={{ animation: 'fadeUp 0.6s ease 0.05s both' }}
          >
            <span className="w-6 h-px bg-gold/50" />
            <span className="text-xs font-sans font-medium text-gold/80 uppercase tracking-[0.18em]">
              Let&apos;s Work Together
            </span>
          </div>

          <h1
            className="font-display font-bold text-display-2xl text-white leading-[1.06] max-w-2xl mb-7"
            style={{ animation: 'fadeUp 0.75s ease 0.18s both' }}
          >
            Start a Conversation.
          </h1>
          <p
            className="font-sans text-base text-white/50 leading-[1.85] max-w-xl"
            style={{ animation: 'fadeUp 0.75s ease 0.3s both' }}
          >
            Whether you&apos;re ready to move or just exploring what&apos;s possible — this is where it starts.
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
                    Book Directly
                  </p>
                  <h2 className="font-display font-bold text-display-md text-white leading-tight mb-3">
                    Schedule a Consultation
                  </h2>
                  <p className="font-sans text-sm text-white/50 leading-[1.8] mb-7">
                    30 minutes. Focused on your business. No templates, no pitch decks — just a direct conversation about what you&apos;re trying to solve.
                  </p>
                  <Button href="https://cal.com/garymariner" size="md" external>
                    Book via Cal.com →
                  </Button>
                </div>
              </div>
            </Reveal>

            {/* What to expect */}
            <Reveal delay={80}>
              <div className="flex flex-col gap-6">
                <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em]">
                  What to Expect
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
                  href="https://linkedin.com/in/garymariner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-sans text-white/40 hover:text-gold transition-colors duration-200 tracking-wide"
                >
                  Connect →
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right — contact form */}
          <Reveal delay={100}>
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-4">
                  Send a Message
                </p>
                <p className="font-sans text-sm text-white/45 leading-[1.8]">
                  Prefer to write first? Describe what you&apos;re working through and I&apos;ll respond directly.
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
