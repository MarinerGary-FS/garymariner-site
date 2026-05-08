'use client'

import { useCallback, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Download, ExternalLink, Share2 } from 'lucide-react'
import { IdentityBackdrop } from '@/components/social/IdentityBackdrop'
import { garyContact, socialChannels } from '@/lib/vcard'
import { socialProof } from '@/lib/social-config'
import { trackEvent } from '@/lib/analytics'

const networkPathways = [
  {
    eyebrow: 'Executive identity',
    label: 'GaryMariner.com',
    description: 'Strategic context for the work, the operating philosophy, and the executive narrative.',
    href: garyContact.website,
    cta: 'Open identity layer',
  },
  {
    eyebrow: 'Execution depth',
    label: 'Mariner Nexus',
    description: 'Systems architecture, AI transformation, implementation capability, and venture-building proof.',
    href: garyContact.businessSite,
    cta: 'View execution layer',
  },
  {
    eyebrow: 'Human systems',
    label: 'Undugu Foundation',
    description: 'Nonprofit innovation, community infrastructure, and the human-centered layer behind the ecosystem.',
    href: garyContact.foundationSite,
    cta: 'Open impact layer',
  },
]

const networkSignals = [
  {
    label: 'AI transformation',
    value: 'Executive vision translated into usable systems.',
  },
  {
    label: 'Systems architecture',
    value: 'Operational complexity shaped into clear execution paths.',
  },
  {
    label: 'Human-centered strategy',
    value: 'Technology decisions grounded in people, adoption, and trust.',
  },
]

export function NetworkingPortal() {
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle')

  const handleShare = useCallback(async () => {
    const url = garyContact.networkUrl
    trackEvent({ event: 'network_share_click', label: 'Share Network Card', href: url })

    try {
      if (navigator.share) {
        await navigator.share({
          title: garyContact.name,
          text: `${garyContact.name}, ${garyContact.role}.`,
          url,
        })
        return
      }

      await navigator.clipboard.writeText(url)
      setCopyState('copied')
      window.setTimeout(() => setCopyState('idle'), 2200)
    } catch {
      setCopyState('idle')
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030405] text-white">
      <IdentityBackdrop />

      <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-full flex-col px-5 py-8 sm:max-w-6xl sm:px-8 lg:px-10">
        <div className="grid min-w-0 flex-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="w-full max-w-[350px] sm:mx-auto sm:max-w-[22rem] lg:mx-0">
            <div className="relative aspect-[4/5]">
              <div className="absolute -inset-4 rounded-[2rem] bg-[conic-gradient(from_160deg,rgba(91,127,255,0.22),rgba(255,255,255,0.08),rgba(88,196,221,0.12),rgba(91,127,255,0.22))] opacity-70 blur-2xl" />
              <div className="absolute inset-0 rounded-[2rem] border border-white/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.13),rgba(255,255,255,0.025))] shadow-[0_36px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl" />
              <div className="absolute inset-3 overflow-hidden rounded-[1.45rem] border border-white/10 bg-black">
                <Image
                  src="/images/gary-portrait.jpg"
                  alt="Gary L. Mariner II"
                  fill
                  priority
                  sizes="(min-width: 1024px) 352px, 80vw"
                  className="object-cover object-[center_15%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(0,0,0,0.68)_100%)]" />
              </div>
              <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
            </div>
          </div>

          <div className="w-full min-w-0 max-w-[350px] sm:max-w-full">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-blue-100/62">
              Private networking card
            </p>
            <h1 className="mt-3 font-display text-[2.7rem] font-semibold leading-[0.96] tracking-normal text-white sm:text-[4.4rem] lg:text-[5.4rem]">
              Gary L.
              <span className="block">Mariner II</span>
            </h1>
            <p className="mt-5 max-w-2xl text-[1.06rem] font-semibold leading-7 text-white sm:text-[1.28rem] sm:leading-8">
              Executive AI transformation, systems architecture, and human-centered execution.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
              Save the contact card for private follow-up. Use this page as a curated
              gateway into the work, proof, ecosystem, and public channels.
            </p>

            <div className="mt-7 rounded-2xl border border-blue-100/18 bg-[linear-gradient(145deg,rgba(255,255,255,0.105),rgba(255,255,255,0.028))] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-blue-100/68">
                Private follow-up
              </p>
              <p className="mt-2 max-w-xl text-sm leading-6 text-white/62">
                Download the contact card to add the private contact layer to your phone.
                The page itself keeps the visible experience focused on context.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto]">
                <a
                  href={garyContact.vcardPath}
                  download
                  onClick={() =>
                    trackEvent({
                      event: 'network_save_contact_click',
                      label: 'Save Contact',
                      href: garyContact.vcardPath,
                    })
                  }
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-black shadow-[0_18px_60px_rgba(255,255,255,0.16)] transition hover:bg-blue-100"
                >
                  <Download className="h-4 w-4" />
                  Save contact
                </a>
                <button
                  type="button"
                  onClick={handleShare}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.045] px-5 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-blue-200/35 hover:bg-white/[0.08]"
                >
                  {copyState === 'copied' ? <Check className="h-4 w-4 text-blue-200" /> : <Share2 className="h-4 w-4" />}
                  {copyState === 'copied' ? 'Copied' : 'Share'}
                </button>
              </div>
            </div>

            <section
              aria-label="Selected proof"
              className="mt-7 grid min-w-0 gap-2 sm:grid-cols-3"
            >
              {socialProof.map((item) => (
                <div
                  key={item.label}
                  className="border-y border-white/[0.07] bg-white/[0.018] px-4 py-3 backdrop-blur-sm sm:border-x"
                >
                  <p className="font-display text-xl font-semibold leading-none text-white sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[0.66rem] font-semibold uppercase leading-4 tracking-[0.14em] text-white/42">
                    {item.label}
                  </p>
                </div>
              ))}
            </section>
          </div>
        </div>

        <div className="relative z-10 grid min-w-0 max-w-[350px] gap-4 pb-6 sm:max-w-full lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-2xl border border-white/[0.075] bg-white/[0.026] p-4 backdrop-blur-xl sm:p-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-blue-100/58">
              Start here
            </p>
            <div className="mt-4 grid gap-2">
              {networkPathways.map((pathway) => (
                <NetworkPathway key={pathway.label} {...pathway} />
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/[0.075] bg-white/[0.026] p-4 backdrop-blur-xl sm:p-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-blue-100/58">
              Networking context
            </p>
            <div className="mt-4 grid gap-2">
              {networkSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-xl border border-white/[0.065] bg-white/[0.03] px-4 py-3"
                >
                  <p className="text-sm font-semibold text-white">{signal.label}</p>
                  <p className="mt-1 text-sm leading-6 text-white/54">{signal.value}</p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-blue-100/58">
              Public channels
            </p>
            <div className="mt-4 grid gap-2">
              {socialChannels.map((channel) => (
                <Link
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackEvent({ event: channel.event, label: channel.label, href: channel.href })
                  }
                  className="group flex min-h-12 items-center justify-between rounded-xl border border-white/[0.065] bg-white/[0.03] px-4 py-3 text-white/74 transition hover:border-blue-200/30 hover:bg-white/[0.07] hover:text-white"
                >
                  <span>
                    <span className="block text-sm font-semibold">{channel.label}</span>
                    <span className="mt-1 block text-[0.64rem] font-semibold uppercase tracking-[0.14em] text-white/32">
                      {channel.type}
                    </span>
                  </span>
                  <ExternalLink className="h-4 w-4 text-white/30 transition group-hover:text-blue-100" />
                </Link>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

function NetworkPathway({
  eyebrow,
  label,
  description,
  href,
  cta,
}: {
  eyebrow: string
  label: string
  description: string
  href: string
  cta: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent({ event: 'network_pathway_click', label, href })}
      className="group flex min-h-24 items-center justify-between gap-4 rounded-xl border border-white/[0.065] bg-white/[0.03] p-4 transition hover:border-blue-200/25 hover:bg-white/[0.06]"
    >
      <span className="min-w-0">
        <span className="block text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-white/34">
          {eyebrow}
        </span>
        <span className="mt-1 block text-base font-semibold text-white/88">{label}</span>
        <span className="mt-2 block text-sm leading-6 text-white/52">{description}</span>
        <span className="mt-3 block text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-blue-100/62">
          {cta}
        </span>
      </span>
      <ExternalLink className="h-4 w-4 shrink-0 text-white/30 transition group-hover:text-blue-100" />
    </Link>
  )
}
