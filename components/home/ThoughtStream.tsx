import { Container } from '@/components/foundation/Container'
import { thoughtStream } from '@/lib/homepage-content'

const categoryLabels = {
  researching: 'Research direction',
  building: 'Building principle',
  solved: 'Recently solved',
  question: 'Question in view',
  principle: 'Operating principle',
} as const

export function ThoughtStream() {
  return (
    <section id="field-notes" aria-labelledby="thought-stream-title" className="relative overflow-hidden border-y border-white/10 bg-surface/30 py-24 md:py-32 lg:py-40">
      <div className="gm-blueprint-grid absolute inset-0 opacity-25" aria-hidden="true" />
      <Container className="relative z-10">
        <header className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="gm-kicker mb-4">Act IV / Field Notes</p>
            <h2 id="thought-stream-title" className="text-4xl font-semibold leading-[1.06] md:text-6xl">
              Thought Stream
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-white/62 lg:justify-self-end md:text-lg md:leading-8">
            A maintained editorial layer for research, operating principles, and questions still worth examining.
          </p>
        </header>

        <ol className="mt-12 grid border-l border-t border-white/12 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {thoughtStream.map((entry, index) => (
            <li key={entry.id} className="flex min-h-72 flex-col border-b border-r border-white/12 p-5 md:p-6">
              <div className="flex items-center justify-between gap-4 font-mono text-[0.68rem] uppercase tracking-[0.08em]">
                <span className="text-cyan/76">{categoryLabels[entry.category]}</span>
                <span className="text-white/24">0{index + 1}</span>
              </div>
              <h3 className="mt-10 text-xl font-semibold leading-7 text-white md:text-2xl md:leading-8">{entry.title}</h3>
              {entry.summary ? <p className="mt-auto pt-8 text-sm leading-6 text-white/54">{entry.summary}</p> : null}
            </li>
          ))}
        </ol>
        <p className="mt-5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/28">
          Editorial framework established July 2026 · Static until intentionally updated
        </p>
      </Container>
    </section>
  )
}
