import { Reveal } from '@/components/ui/Reveal'

const beforeItems = [
  'Disconnected tools',
  'Unclear ownership',
  'Manual workarounds',
  'Communication gaps',
]

const afterItems = [
  'Integrated systems',
  'Clear accountability',
  'Automated workflows',
  'Aligned communication',
]

export function BeforeAfter() {
  return (
    <section className="px-6 md:px-10 lg:px-16 py-28 md:py-36 bg-background border-t border-border/40">
      <div className="max-w-site mx-auto">
        <Reveal className="text-center mb-12 md:mb-16">
          <p className="text-xs font-sans text-gold/70 uppercase tracking-[0.2em]">
            The Shift
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-6 items-center max-w-3xl mx-auto">
          {/* Before */}
          <Reveal>
            <div className="rounded-xl border border-white/[0.06] bg-surface/40 p-6 md:p-8">
              <p className="text-[10px] font-sans font-medium text-white/25 uppercase tracking-[0.18em] mb-5">
                Before
              </p>
              <div className="flex flex-col gap-3.5">
                {beforeItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-sm bg-white/10 shrink-0" />
                    <span className="font-sans text-sm text-white/40">{item}</span>
                  </div>
                ))}
              </div>
              {/* Fragmented visual */}
              <div className="mt-6 flex gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1 rounded-full bg-white/[0.06]"
                    style={{ width: `${20 + Math.random() * 30}%` }}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          {/* Arrow */}
          <Reveal delay={150} className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-2">
              <div className="hidden md:block w-8 h-px bg-gradient-to-r from-white/10 to-gold/40" />
              <div className="w-8 h-8 rounded-full border border-gold/30 bg-gold/[0.06] flex items-center justify-center">
                <ArrowIcon className="w-3.5 h-3.5 text-gold/70 md:rotate-0 rotate-90" />
              </div>
              <div className="hidden md:block w-8 h-px bg-gradient-to-r from-gold/40 to-white/10" />
            </div>
          </Reveal>

          {/* After */}
          <Reveal delay={200}>
            <div className="rounded-xl border border-gold/15 bg-gold/[0.03] p-6 md:p-8">
              <p className="text-[10px] font-sans font-medium text-gold/60 uppercase tracking-[0.18em] mb-5">
                After
              </p>
              <div className="flex flex-col gap-3.5">
                {afterItems.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-sm bg-gold/30 shrink-0" />
                    <span className="font-sans text-sm text-white/65">{item}</span>
                  </div>
                ))}
              </div>
              {/* Aligned visual */}
              <div className="mt-6 flex gap-1.5">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="h-1 flex-1 rounded-full bg-gold/20" />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}
