import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { BookingButton } from '@/components/ui/BookingButton'
import { siteContent } from '@/lib/content'

export function Hero() {
  const { hero } = siteContent

  return (
    <section className="relative min-h-screen flex items-center overflow-x-hidden bg-background">
      {/* Architectural grid — very subtle */}
      <div className="absolute inset-0 pointer-events-none bg-grid opacity-25" />

      {/* Family crest — atmospheric right-side presence */}
      <div className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none select-none overflow-hidden">
        <Image
          src="/images/family-crest.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-[0.06]"
          aria-hidden
          priority
        />
        {/* Left fade — seamless blend into content side */}
        <div className="absolute inset-y-0 left-0 w-[50%] bg-gradient-to-r from-background to-transparent" />
        {/* Top / bottom softening */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Left-side text area depth — subtle warm radial behind headline */}
      <div className="absolute left-0 top-0 bottom-0 w-[45%] pointer-events-none">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[600px] h-[600px] rounded-full bg-gold/[0.035] blur-[120px]" />
      </div>

      {/* Bottom-right structural glow */}
      <div className="absolute -bottom-24 right-[10%] w-[500px] h-[500px] rounded-full bg-gold/[0.05] blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-site mx-auto px-6 md:px-10 lg:px-16 pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_460px] gap-14 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="flex flex-col max-w-2xl">
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-3 mb-6 md:mb-10"
              style={{ animation: 'fadeUp 0.6s ease 0.05s both' }}
            >
              <span className="w-8 h-px bg-gold" />
              <span className="text-xs font-sans font-medium text-gold uppercase tracking-[0.18em]">
                {hero.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-bold text-display-2xl text-white mb-7"
              style={{ animation: 'fadeUp 0.75s ease 0.18s both' }}
            >
              {hero.headline}
            </h1>

            {/* Supporting copy */}
            <p
              className="font-sans text-base md:text-lg text-white/65 leading-[1.85] max-w-[540px] mb-6"
              style={{ animation: 'fadeUp 0.75s ease 0.3s both' }}
            >
              {hero.supporting}
            </p>

            {/* Proof tagline */}
            <div
              className="flex items-center gap-3 mb-12"
              style={{ animation: 'fadeUp 0.75s ease 0.38s both' }}
            >
              <span className="w-5 h-px bg-gold/55 shrink-0" />
              <span className="font-sans text-sm text-white/40 tracking-wide">
                {hero.tagline}
              </span>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: 'fadeUp 0.75s ease 0.50s both' }}
            >
              <Button href={hero.primaryCTA.href} size="lg">
                {hero.primaryCTA.label}
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href={hero.secondaryCTA.href} variant="ghost" size="lg">
                {hero.secondaryCTA.label}
              </Button>
            </div>
          </div>

          {/* Right: Portrait */}
          <div
            className="hidden lg:block"
            style={{ animation: 'fadeIn 1.0s ease 0.45s both' }}
          >
            <PortraitPanel />
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />
    </section>
  )
}

function PortraitPanel() {
  return (
    <div className="relative">
      {/* Portrait container — 3:4 with object-position shifted up for upper-third eye alignment */}
      <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden">

        {/* Crest texture layer — extremely subtle, adds depth without competing */}
        <Image
          src="/images/family-crest.jpg"
          alt=""
          fill
          className="object-cover object-center opacity-[0.10] scale-110"
          aria-hidden
        />

        {/* Portrait — eyes in upper third via object-position */}
        <Image
          src="/images/gary-portrait.jpg"
          alt="Gary L. Mariner II — AI Systems Architect for Business Operations"
          fill
          className="object-cover object-[center_15%] relative"
          priority
          sizes="(max-width: 1280px) 400px, 460px"
        />

        {/* Tonal integration — pulls gray studio bg into the dark site */}
        <div className="absolute inset-0 bg-background/12" />

        {/* Bottom fade — removes Remini watermark and grounds the image */}
        <div className="absolute bottom-0 left-0 right-0 h-[30%] bg-gradient-to-t from-background via-background/75 to-transparent" />

        {/* Right edge blend */}
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background/35 to-transparent" />

        {/* Frame border */}
        <div className="absolute inset-0 rounded-2xl border border-white/[0.07]" />
      </div>

      {/* Corner brackets */}
      <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-gold/50 rounded-tl-sm pointer-events-none" />
      <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-gold/30 rounded-br-sm pointer-events-none" />
      <div className="absolute -top-2 -right-2 w-5 h-5 border-t border-r border-white/10 rounded-tr-sm pointer-events-none" />

      {/* Proof card — bottom left: revenue metric */}
      <MetricCard
        position="absolute bottom-6 -left-4 xl:-left-8"
        label="Monthly Revenue"
        value="$130K"
        subtext="Digital Harmony"
        delta="↑ from $75K"
      />

      {/* Proof card — top right: reduction metric */}
      <MetricCard
        position="absolute top-8 -right-4 xl:-right-8"
        label="Agent Dependency"
        value="70%"
        subtext="Reduction"
      />
    </div>
  )
}

function MetricCard({
  position,
  label,
  value,
  subtext,
  delta,
}: {
  position: string
  label: string
  value: string
  subtext: string
  delta?: string
}) {
  return (
    <div className={`${position} z-10 bg-[#0D0D0D]/95 backdrop-blur-md border border-white/[0.10] rounded-xl shadow-2xl shadow-black/70 overflow-hidden`}>
      {/* Gold top accent line — makes it read as a data card, not a UI widget */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="px-5 py-4">
        <p className="text-[9px] font-sans text-white/35 uppercase tracking-[0.2em] mb-2.5">
          {label}
        </p>
        {/* Value — the focal point */}
        <p className="font-display font-bold text-[1.75rem] leading-none text-white tracking-tight">
          {value}
        </p>
        <p className="text-[11px] font-sans text-white/50 mt-2 leading-none">
          {subtext}
        </p>
        {delta && (
          <div className="mt-2.5 pt-2.5 border-t border-white/[0.07] flex items-center gap-1.5">
            <span className="text-gold text-xs leading-none">↑</span>
            <span className="text-[9px] font-sans text-white/30 uppercase tracking-widest">
              {delta.replace('↑ ', '')}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}
