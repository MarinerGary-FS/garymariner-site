import { cn } from '@/lib/utils'

interface PageHeroProps {
  eyebrow: string
  headline: string
  supporting?: string
  align?: 'left' | 'center'
  className?: string
}

export function PageHero({
  eyebrow,
  headline,
  supporting,
  align = 'left',
  className,
}: PageHeroProps) {
  const isCenter = align === 'center'

  return (
    <section
      className={cn(
        'relative px-5 md:px-8 lg:px-10 pt-28 pb-12 md:pt-36 md:pb-16 overflow-hidden bg-background',
        className
      )}
    >
      {/* Warm ambient — consistent with homepage hero depth */}
      <div className="absolute top-0 left-0 w-[500px] h-[400px] rounded-full bg-gold/[0.04] blur-[100px] pointer-events-none" />
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 divider-gold" />

      <div className={cn('relative max-w-site mx-auto', isCenter && 'text-center')}>
        {/* Eyebrow */}
        <div
          className={cn(
            'flex items-center gap-2 mb-4',
            isCenter && 'justify-center'
          )}
          style={{ animation: 'fadeUp 0.6s ease 0.05s both' }}
        >
          <span className="w-6 h-px bg-gold/50" />
          <span className="text-xs font-sans font-medium text-gold/80 uppercase tracking-[0.18em]">
            {eyebrow}
          </span>
        </div>

        {/* Headline */}
        <h1
          className={cn(
            'font-display font-bold text-display-2xl text-white ',
            isCenter ? 'max-w-3xl mx-auto' : 'max-w-3xl'
          )}
          style={{ animation: 'fadeUp 0.75s ease 0.18s both' }}
        >
          {headline}
        </h1>

        {/* Supporting */}
        {supporting && (
          <p
            className={cn(
              'font-sans text-base text-white/60 leading-[1.7] mt-4',
              isCenter ? 'max-w-xl mx-auto' : 'max-w-xl'
            )}
            style={{ animation: 'fadeUp 0.75s ease 0.3s both' }}
          >
            {supporting}
          </p>
        )}
      </div>
    </section>
  )
}
