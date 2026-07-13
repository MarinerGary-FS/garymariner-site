import Image from 'next/image'
import { ArrowDown, ArrowRight } from 'lucide-react'
import { Container } from '@/components/foundation/Container'
import { homepageContent } from '@/lib/homepage-content'

export function HeroSignal() {
  const { hero } = homepageContent

  return (
    <section id="origin" aria-labelledby="home-title" className="relative isolate min-h-[92svh] overflow-hidden border-b border-white/10">
      <Image
        src="/images/gary-studio-97.jpg"
        alt="Portrait of Gary L. Mariner II"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[62%_center] opacity-45 saturate-[0.78] md:object-[72%_center] md:opacity-62"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,13,0.98)_0%,rgba(7,9,13,0.9)_43%,rgba(7,9,13,0.38)_72%,rgba(7,9,13,0.68)_100%),linear-gradient(180deg,rgba(7,9,13,0.5),rgba(7,9,13,0.16)_55%,rgba(7,9,13,0.94))]" />
      <div className="gm-energy-field absolute inset-0 opacity-55" aria-hidden="true" />
      <div className="gm-blueprint-grid absolute inset-0 opacity-35" aria-hidden="true" />

      <Container className="relative z-10 flex min-h-[92svh] flex-col justify-between pb-8 pt-20 sm:pb-10 sm:pt-24 md:pt-28 lg:pb-12">
        <div className="gm-boot-signal flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/52" aria-label="Entry state ready">
          <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgb(110_231_183/0.55)]" />
          <span>Signal acquired</span>
          <span aria-hidden="true" className="h-px w-10 bg-white/20" />
          <span>Executive intelligence layer</span>
        </div>

        <div className="max-w-5xl py-8 sm:py-10 md:py-12">
          <p className="gm-kicker mb-4">{hero.role}</p>
          <h1 id="home-title" className="font-display text-[2.65rem] font-semibold leading-[0.98] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            {hero.identity}
          </h1>
          <p className="mt-5 max-w-4xl font-display text-[1.35rem] font-medium leading-[1.12] text-white/92 sm:mt-6 sm:text-3xl md:text-5xl">
            {hero.signal}
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-6 text-white/68 sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
            {hero.supporting}
          </p>

          <div className="mt-7 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-3">
            <a
              href="#intelligence"
              className="gm-interactive inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-sapphire px-5 text-sm font-semibold text-background hover:bg-sapphire-light sm:min-h-12"
            >
              Enter the system <ArrowDown aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="#decisions"
              className="gm-interactive inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/18 bg-black/20 px-5 text-sm font-semibold text-white hover:bg-white/[0.06] sm:min-h-12"
            >
              Explore selected work <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="hidden gap-3 border-t border-white/12 pt-5 text-xs text-white/46 sm:grid sm:grid-cols-3 sm:gap-8">
          <span>Atlanta, Georgia</span>
          <span>Systems · Transformation · Culture</span>
          <span className="sm:text-right">Scroll to continue</span>
        </div>
      </Container>
    </section>
  )
}
