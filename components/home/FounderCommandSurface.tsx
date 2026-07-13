import { Activity, Compass, Network, Radio, ScanLine } from 'lucide-react'
import { GlassPanel } from '@/components/foundation/GlassPanel'
import { SystemSection } from '@/components/foundation/SystemSection'
import { homepageContent } from '@/lib/homepage-content'

const signals = [
  { label: 'Operating focus', value: homepageContent.command.focus, icon: Compass },
  { label: 'Operating principle', value: homepageContent.command.principle, icon: Activity },
  { label: 'Question in view', value: homepageContent.command.question, icon: ScanLine },
] as const

export function FounderCommandSurface() {
  return (
    <SystemSection
      id="intelligence"
      eyebrow="Act II / Intelligence"
      title="The founder command surface"
      description="A concise view of the operating questions, leadership domains, and system relationships shaping the work."
      className="overflow-hidden"
    >
      <GlassPanel as="article" strength="strong" aria-label="Founder operating system" className="overflow-hidden">
        <header className="flex flex-col gap-5 border-b border-white/10 p-5 sm:flex-row sm:items-center sm:justify-between md:p-7">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md border border-cyan/20 bg-cyan/5 text-cyan">
              <Radio aria-hidden="true" className="h-4 w-4" />
            </span>
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/38">Gary Mariner OS</p>
              <h3 className="mt-1 text-lg font-semibold">Operating intelligence</h3>
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Deliberate / Active
          </div>
        </header>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr]">
          <div className="divide-y divide-white/10 lg:border-r lg:border-white/10">
            {signals.map(({ label, value, icon: Icon }, index) => (
              <section key={label} aria-labelledby={`command-signal-${index}`} className="grid gap-6 p-5 md:grid-cols-[0.42fr_1fr] md:p-7">
                <div className="flex items-center gap-3 text-white/48">
                  <Icon aria-hidden="true" className="h-4 w-4 text-cyan" strokeWidth={1.5} />
                  <h4 id={`command-signal-${index}`} className="font-mono text-[0.68rem] font-normal uppercase tracking-[0.08em]">
                    {label}
                  </h4>
                </div>
                <p className="max-w-2xl font-display text-xl font-medium leading-7 text-white/88 md:text-2xl md:leading-8">
                  {value}
                </p>
              </section>
            ))}
          </div>

          <aside aria-labelledby="leadership-domains-title" className="p-5 md:p-7">
            <div className="mb-8 flex items-center gap-3 text-white/48">
              <Network aria-hidden="true" className="h-4 w-4 text-sapphire-light" strokeWidth={1.5} />
              <h4 id="leadership-domains-title" className="font-mono text-[0.68rem] font-normal uppercase tracking-[0.08em]">
                Leadership domains
              </h4>
            </div>
            <ol className="divide-y divide-white/10 border-y border-white/10">
              {homepageContent.command.domains.map((domain, index) => (
                <li key={domain} className="grid grid-cols-[2rem_1fr] gap-3 py-4">
                  <span className="font-mono text-xs text-white/28">0{index + 1}</span>
                  <span className="text-sm font-medium text-white/72">{domain}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </GlassPanel>
    </SystemSection>
  )
}
