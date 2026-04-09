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
        'relative px-6 md:px-10 lg:px-16 pt-36 pb-16 md:pt-44 md:pb-20 overflow-hidden bg-background',
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
            'flex items-center gap-3 mb-8',
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
              'font-sans text-base md:text-lg text-white/55 leading-[1.85] mt-7',
              isCenter ? 'max-w-2xl mx-auto' : 'max-w-2xl'
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
