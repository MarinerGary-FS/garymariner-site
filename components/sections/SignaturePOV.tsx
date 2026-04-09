import { Reveal } from '@/components/ui/Reveal'
import { siteContent } from '@/lib/content'

export function SignaturePOV() {
  const { pov } = siteContent
  const [line1, line2] = pov.statement.split('\n')

  return (
    <section className="relative px-6 md:px-10 lg:px-16 py-36 md:py-52 bg-background overflow-hidden">
      {/* Centered gold glow — atmospheric only */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-gold/[0.03] blur-[140px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display font-bold text-display-xl md:text-display-2xl text-white">
            {line1}
            <br />
            <span className="text-gold-gradient">{line2}</span>
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
