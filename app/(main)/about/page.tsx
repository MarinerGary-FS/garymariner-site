import type { Metadata } from 'next'
import { PageHero } from '@/components/ui/PageHero'
import { SectionWrapper } from '@/components/ui/SectionWrapper'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { siteContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'About — Gary L. Mariner II',
  description:
    'AI Transformation & Communications Leader. 15+ years in operational leadership, cross-functional communication, and systems thinking.',
}

const background = [
  {
    period: '15+ Years',
    title: 'Frontline to Leadership — Across Industries',
    description:
      'Built and led teams across sales, customer operations, and business development. Spent enough time on the frontline to know what leadership decisions look like when they actually reach the people doing the work. Developed an instinct for where friction hides, where communication fails, and where the gap between strategy and execution quietly costs organizations more than they realize.',
  },
  {
    period: 'Global',
    title: 'The Communication Problem Nobody Talks About',
    description:
      'Led operations spanning the USA, Europe, and Asia. Coordinated across time zones, languages, and team cultures. The consistent lesson: most organizational failure isn\u2019t a competence problem or a technology problem. It\u2019s a communication problem. The strategy was sound. The execution was capable. What was missing was the translation layer between them.',
  },
  {
    period: 'The Shift',
    title: 'From Managing Operations to Redesigning Them',
    description:
      'When AI matured beyond experimentation, the opportunity wasn\u2019t just new tools — it was a fundamental rethinking of how organizations could be designed. Not incremental improvement. Structural transformation. Shifted focus from running operations to rebuilding them through AI-assisted workflows, human-centered design, and infrastructure that actually matches how people work.',
  },
  {
    period: 'Today',
    title: 'Where AI, People, and Communication Converge',
    description:
      'Works at the intersection that most people avoid — where technology meets human behavior, where leadership vision meets operational reality, and where communication either makes or breaks the system. Every engagement starts with understanding people, not deploying tools.',
  },
]

const differentiators = [
  {
    title: 'Translator Between Floors',
    description:
      'I\u2019ve been in the room with the executive team and on the floor with the people doing the work. Most transformation fails because nobody translates between those two realities. I do.',
  },
  {
    title: 'AI Serves People — Not the Other Way Around',
    description:
      'Every AI initiative I\u2019ve seen fail had the same root cause: it was designed around the technology, not the humans. Systems that ignore how people actually work don\u2019t work. Full stop.',
  },
  {
    title: 'Three Disciplines. One Person.',
    description:
      'Communication. Operations. Technology. Most people are strong in one, competent in two, absent in the third. I bridge all three — and that\u2019s where lasting organizational change actually lives.',
  },
]

export default function AboutPage() {
  const { philosophy } = siteContent

  return (
    <>
      <PageHero
        eyebrow="About Gary"
        headline="Built on Operations. Driven by Communication. Focused on Transformation."
        supporting="15+ years of operational leadership — now applied to AI transformation, systems design, and the human side of organizational change."
      />

      {/* Bio narrative */}
      <SectionWrapper className="bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-24 items-start">

          {/* Left — sticky identity block */}
          <Reveal>
            <div className="lg:sticky lg:top-36 flex flex-col gap-6">
              <div>
                <p className="font-display font-bold text-display-md text-white leading-tight mb-2">
                  Gary L. Mariner II
                </p>
                <p className="text-sm font-sans text-gold/80 tracking-wide">
                  AI Transformation & Communications Leader
                </p>
              </div>

              <div className="divider" />

              <p className="font-sans text-sm text-white/45 leading-[1.85]">
                Gary works at the intersection of AI, people, and operations —
                helping organizations navigate transformation by aligning technology
                with how teams actually work and communicate.
              </p>

              <div className="flex flex-col gap-3 mt-2">
                {['15+ Years in Operational Leadership', 'AI-Driven Transformation', 'Global Cross-Functional Teams', 'Strategic Communications'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50 shrink-0" />
                    <span className="text-xs font-sans text-white/50 tracking-wide">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4">
                <Button href="/contact" size="sm">
                  Start a Conversation
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Right — career narrative */}
          <div className="flex flex-col">
            {background.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="group flex gap-6 md:gap-8 py-8 border-b border-border/50 last:border-0">
                  <div className="shrink-0 w-20">
                    <span className="text-xs font-sans text-gold/60 tracking-[0.12em] uppercase leading-none">
                      {item.period}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <div className="w-6 h-0.5 bg-gold/35 group-hover:bg-gold/65 group-hover:w-10 transition-all duration-400 rounded-full mb-1" />
                    <h3 className="font-display font-semibold text-base md:text-lg text-white">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-white/55 leading-[1.8]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What makes this work different */}
      <SectionWrapper className="bg-surface border-t border-border/40">
        <Reveal className="mb-14">
          <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-5">
            The Difference
          </p>
          <h2 className="font-display font-bold text-display-md text-white max-w-xl">
            Why This Approach Works
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:divide-x md:divide-border/50">
          {differentiators.map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <div className="group flex flex-col gap-5 md:px-10 first:pl-0 last:pr-0 py-8 md:py-2 border-b border-border/30 md:border-b-0 last:border-b-0">
                <div className="w-8 h-0.5 bg-gold/35 group-hover:bg-gold/65 group-hover:w-14 transition-all duration-500 rounded-full" />
                <h3 className="font-display font-semibold text-lg text-white leading-snug">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-white/50 leading-[1.8]">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Beyond Work — Undugu */}
      <SectionWrapper className="bg-background border-t border-border/40">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-8">
            Beyond Work
          </p>
          <h2 className="font-display font-bold text-display-md text-white leading-tight mb-6">
            Systems thinking extends beyond business.
          </h2>
          <p className="font-sans text-sm text-white/55 leading-[1.85] mb-4">
            The same principles that transform organizations — clarity, structure, human-centered design — can create impact far beyond the boardroom.
          </p>
          <p className="font-sans text-sm text-white/55 leading-[1.85] mb-8">
            I serve as Technology Committee Chair for the Undugu Society, an organization in Nairobi dedicated to empowering street children and vulnerable youth through education, vocational training, and community integration. In that role, I help integrate technology and AI into community-focused initiatives — ensuring that the same systems thinking applied to business transformation also serves the people who need it most.
          </p>
          <Button href="https://undugu.org" variant="text" size="sm" external>
            Learn about Undugu Society &rarr;
          </Button>
        </Reveal>
      </SectionWrapper>

      {/* Philosophy */}
      <SectionWrapper className="bg-background border-t border-border/40">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-10">
            Operating Philosophy
          </p>
          <h2 className="font-display font-bold text-display-xl text-white leading-[1.06] mb-8">
            {philosophy.statement}
          </h2>
          <p className="font-sans text-base text-white/55 leading-[1.85] mb-12">
            {philosophy.closing}
          </p>

          <div className="flex flex-col gap-0 border-t border-border/50 pt-10">
            {philosophy.principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="flex gap-6 py-7 border-b border-border/30 last:border-0">
                  <span className="font-display font-bold text-3xl text-white/[0.06] leading-none select-none tabular-nums shrink-0 pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-semibold text-base text-white">
                      {p.title}
                    </h3>
                    <p className="font-sans text-sm text-white/50 leading-[1.8]">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </SectionWrapper>

      {/* CTA */}
      <section className="relative px-6 md:px-10 lg:px-16 py-24 md:py-32 bg-background border-t border-border/40 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-gold/[0.06] blur-[120px] pointer-events-none" />
        <div className="relative max-w-site mx-auto">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-sans text-white/30 uppercase tracking-[0.18em] mb-6">
                What&apos;s Next
              </p>
              <h2 className="font-display font-bold text-display-xl text-white leading-[1.06] mb-8">
                Interested in working together?
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Start a Conversation
                </Button>
                <Button href="/case-studies" variant="ghost" size="lg">
                  Explore My Work
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
