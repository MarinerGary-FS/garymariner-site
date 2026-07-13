import Image from 'next/image'
import { Container } from '@/components/foundation/Container'
import { homepageContent } from '@/lib/homepage-content'

export function LegacyBridge() {
  const { legacy } = homepageContent

  return (
    <section id="legacy" aria-labelledby="legacy-title" className="relative isolate overflow-hidden py-24 md:py-32 lg:py-40">
      <Image
        src="/images/family-crest-artifact.jpg"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover opacity-[0.055] saturate-50"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(7_9_13/0.98),rgb(7_9_13/0.86),rgb(7_9_13/0.96)),linear-gradient(180deg,rgb(7_9_13/0.45),rgb(7_9_13))]" aria-hidden="true" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <figure className="relative mx-auto w-full max-w-xl overflow-hidden rounded-lg border border-white/10 bg-surface shadow-[var(--gm-shadow-depth)] lg:mx-0">
            <Image
              src="/images/glm-close-up.jpg"
              alt="Gary L. Mariner II"
              width={1365}
              height={1365}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="aspect-[4/5] w-full object-cover object-center saturate-[0.72]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgb(7_9_13/0.82)),radial-gradient(circle_at_70%_18%,rgb(216_189_122/0.1),transparent_34%)]" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-white/56 md:p-6">
              Leadership · Culture · Systems
            </figcaption>
          </figure>

          <div>
            <p className="gm-kicker mb-4 text-gold">Act V / Identity and legacy</p>
            <h2 id="legacy-title" className="max-w-3xl text-4xl font-semibold leading-[1.06] md:text-6xl">
              {legacy.title}
            </h2>
            <p className="gm-editorial mt-7 max-w-3xl text-white/84 md:text-2xl">{legacy.statement}</p>
            <p className="mt-6 max-w-2xl text-base leading-7 text-white/58 md:text-lg md:leading-8">{legacy.body}</p>

            <ul className="mt-10 grid border-l border-t border-white/12 sm:grid-cols-2" aria-label="Legacy principles">
              {legacy.principles.map((principle) => (
                <li key={principle} className="border-b border-r border-white/12 p-4 text-sm font-medium text-white/72 md:p-5">
                  {principle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
