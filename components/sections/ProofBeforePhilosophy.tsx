import { ArrowUpRight, Crown, ShieldCheck, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

export function ProofBeforePhilosophy() {
  const { proofBeforePhilosophy } = siteContent

  return (
    <section className="system-section relative overflow-hidden border-y border-white/[0.06] bg-surface px-5 py-14 md:px-8 md:py-[4.5rem] lg:px-10">
      <div className="absolute inset-0 bg-grid opacity-10" />
      <div className="absolute inset-0 flow-wash" />

      <div className="relative mx-auto max-w-site">
        <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <div>
              <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-gold">
                Leadership. Integrity. Impact.
              </p>
              <h2 className="font-display text-4xl font-bold leading-[1.06] text-white md:text-5xl">
                {proofBeforePhilosophy.title}
              </h2>
            </div>
          </Reveal>
          <Reveal delay={80} className="grid gap-5">
            <p className="max-w-2xl font-sans text-base leading-8 text-white/66">
              {proofBeforePhilosophy.intro}
            </p>
            <div className="brand-glass relative overflow-hidden rounded-sm p-4">
              <div className="relative z-10 grid grid-cols-3 gap-px border border-gold/16 bg-gold/16">
                {['Leadership', 'Integrity', 'Strategy'].map((item) => (
                  <div key={item} className="bg-black/78 px-3 py-4 text-center">
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mb-5 grid gap-5 lg:grid-cols-[1.06fr_0.94fr] lg:items-stretch">
            <div className="brand-glass relative min-h-[310px] overflow-hidden rounded-sm p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(91,127,255,0.13),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.035),transparent_44%)]" />
              <div className="absolute left-[-9%] top-[16%] h-px w-[76%] rotate-[-8deg] bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
              <div className="absolute bottom-[19%] right-[-8%] h-px w-[74%] rotate-[-8deg] bg-gradient-to-r from-transparent via-gold/42 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <p className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-gold">
                    Brand Principles Applied
                  </p>
                  <h3 className="max-w-xl font-display text-3xl font-semibold leading-[1.08] text-white md:text-4xl">
                    A quieter, sharper system built around executive authority.
                  </h3>
                </div>
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <PrincipleIcon icon={<Crown className="h-5 w-5" />} label="Leadership" />
                  <PrincipleIcon icon={<ShieldCheck className="h-5 w-5" />} label="Integrity" />
                  <PrincipleIcon icon={<TrendingUp className="h-5 w-5" />} label="Impact" />
                </div>
              </div>
            </div>
            <div className="brand-glass flex min-h-[310px] flex-col justify-between rounded-sm p-6">
              <div>
                <p className="mb-5 font-sans text-xs font-medium uppercase tracking-[0.22em] text-gold">
                  Business Outcomes
                </p>
                <h3 className="max-w-md font-display text-3xl font-semibold leading-[1.08] text-white md:text-4xl">
                  Authority is built through measurable operational change.
                </h3>
              </div>
              <div className="mt-8 grid gap-4">
                <BrandOutcome value="70%" label="live agent dependency reduction" />
                <BrandOutcome value="90%" label="customer satisfaction increase" />
                <BrandOutcome value="$75K -> $130K/mo" label="revenue growth from Digital Harmony" />
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {proofBeforePhilosophy.cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 70}>
              <article className="system-card noise-overlay group flex h-full min-h-[310px] flex-col justify-between rounded-sm border border-white/[0.08] bg-background/72 p-5 transition-all duration-500 hover:scale-[1.01] hover:border-gold/25 hover:bg-white/[0.035] md:p-6">
                <div className="relative z-10">
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-3 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-white/30">
                        Proof 0{index + 1}
                      </p>
                      <h3 className="font-display text-2xl font-semibold leading-tight text-white">
                        {card.title}
                      </h3>
                    </div>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/10 bg-white/[0.035] text-gold transition-colors duration-300 group-hover:border-gold/35">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                  </div>

                  <div className="grid gap-4">
                    <ProofLine label="Problem" value={card.problem} />
                    <ProofLine label="Solution" value={card.solution} />
                    <ProofLine label="Business Result" value={card.result} strong />
                  </div>
                </div>

                <div className="relative z-10 mt-7">
                  <Button
                    href={card.href}
                    external={card.href.startsWith('http')}
                    variant="text"
                    size="sm"
                    className="text-xs"
                  >
                    View related work
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function PrincipleIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="border border-gold/16 bg-black/38 p-4 text-center">
      <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-gold/35 text-gold">
        {icon}
      </div>
      <p className="mt-3 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-white/52">
        {label}
      </p>
    </div>
  )
}

function BrandOutcome({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-t border-white/[0.08] pt-4">
      <p className="font-display text-2xl font-bold leading-none text-gold md:text-3xl">
        {value}
      </p>
      <p className="max-w-[13rem] text-right font-sans text-xs uppercase tracking-[0.14em] text-white/45">
        {label}
      </p>
    </div>
  )
}

function ProofLine({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="border-l border-white/10 pl-4">
      <p className="mb-1.5 font-sans text-[10px] font-medium uppercase tracking-[0.17em] text-white/28">
        {label}
      </p>
      <p className={`font-sans text-sm leading-6 ${strong ? 'text-white/76' : 'text-white/56'}`}>
        {value}
      </p>
    </div>
  )
}
