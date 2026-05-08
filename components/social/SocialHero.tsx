'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import { socialHero } from '@/lib/social-config'

export function SocialHero({ onEnterEcosystem }: { onEnterEcosystem: () => void }) {
  const imageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-hero-reveal]',
        { y: 14 },
        { y: 0, duration: 0.75, ease: 'power3.out', stagger: 0.06 },
      )

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -8,
          scale: 1.015,
          duration: 4.8,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
        })
      }
    })

    return () => context.revert()
  }, [])

  return (
    <section className="relative mx-auto grid w-full max-w-6xl items-center gap-6 px-5 pb-5 pt-6 sm:px-8 md:min-h-[48vh] md:grid-cols-[0.96fr_1.04fr] md:gap-10 lg:min-h-[50vh] lg:px-10 lg:pt-8">
      <div className="order-2 text-center md:order-1 md:text-left">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-blue-100/62" data-hero-reveal>
          {socialHero.label}
        </p>
        <h1
          className="mt-3 font-display text-[2.35rem] font-semibold leading-[0.96] tracking-normal text-white min-[390px]:text-[2.75rem] sm:text-[4.35rem] lg:text-[5.65rem]"
          data-hero-reveal
        >
          {socialHero.titleLineOne}
          <span className="block">{socialHero.titleLineTwo}</span>
        </h1>
        <p
          className="mx-auto mt-4 max-w-[21rem] text-[1.02rem] font-semibold leading-7 text-white md:mx-0 sm:max-w-[34rem] sm:text-[1.26rem] sm:leading-8"
          data-hero-reveal
        >
          {socialHero.statement}
        </p>
        <p
          className="mx-auto mt-3 max-w-[18.5rem] text-sm leading-6 text-white/58 md:mx-0 sm:max-w-xl sm:text-base sm:leading-7"
          data-hero-reveal
        >
          {socialHero.body}
        </p>
        <p
          className="mx-auto mt-3 max-w-[18.5rem] text-sm font-medium leading-6 text-white/42 md:mx-0 sm:max-w-xl"
          data-hero-reveal
        >
          {socialHero.note}
        </p>

        <div className="mt-6 grid gap-3 sm:mx-auto sm:max-w-md sm:grid-cols-2 md:mx-0" data-hero-reveal>
          <button
            type="button"
            onClick={onEnterEcosystem}
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-black shadow-[0_18px_60px_rgba(255,255,255,0.16)] transition duration-300 hover:bg-blue-100"
          >
            {socialHero.primaryCta}
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <Link
            href="https://www.marinernexus.com/case-studies"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.045] px-5 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-blue-200/30 hover:bg-white/[0.075]"
          >
            {socialHero.secondaryCta}
            <ArrowUpRight className="h-4 w-4 text-white/45 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="order-1 mx-auto w-full max-w-[14.2rem] md:order-2 md:max-w-[21rem] lg:max-w-[24rem]">
        <div ref={imageRef} className="relative aspect-[4/5]">
          <div className="absolute -inset-4 rounded-[2rem] bg-[conic-gradient(from_160deg,rgba(91,127,255,0.22),rgba(255,255,255,0.08),rgba(88,196,221,0.12),rgba(91,127,255,0.22))] opacity-70 blur-2xl" />
          <div className="absolute inset-0 rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.13),rgba(255,255,255,0.025))] shadow-[0_36px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl" />
          <div className="absolute inset-3 overflow-hidden rounded-[1.45rem] border border-white/10 bg-black">
            <Image
              src="/images/gary-portrait.jpg"
              alt="Gary L. Mariner II"
              fill
              priority
              sizes="(min-width: 1024px) 432px, (min-width: 768px) 384px, 248px"
              className="object-cover object-[center_15%]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.64)_100%)]" />
          </div>
          <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        </div>
      </div>
    </section>
  )
}
