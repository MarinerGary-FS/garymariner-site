'use client'

import { useCallback, useState } from 'react'
import type { ElementType } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowUpRight,
  Building2,
  Calendar,
  Check,
  Download,
  Globe2,
  HeartHandshake,
  Mail,
  Phone,
  Share2,
} from 'lucide-react'
import { MarinerCommandCard } from '@/components/mariner/MarinerCommandCard'
import { MarinerVisualSystem } from '@/components/mariner/MarinerVisualSystem'
import { trackEvent } from '@/lib/analytics'

const socialUrl = 'https://www.garymariner.com/social'

const primaryActions = [
  {
    label: 'Call',
    description: '+1 (404) 804-1250',
    href: 'tel:+14048041250',
    icon: Phone,
    event: 'call_click',
  },
  {
    label: 'Email',
    description: 'gary@marinernexus.com',
    href: 'mailto:gary@marinernexus.com',
    icon: Building2,
    event: 'email_click',
  },
  {
    label: 'Book Call',
    description: 'Cal.com strategy call',
    href: 'https://cal.com/garymariner/strategy-call',
    icon: Calendar,
    event: 'booking_click',
    external: true,
  },
]

const contactLinks = [
  {
    label: 'GaryMariner.com',
    description: 'AI Systems Architect',
    href: 'https://www.garymariner.com',
    icon: Globe2,
    external: true,
  },
  {
    label: 'MarinerNexus.com',
    description: 'Business systems and AI infrastructure',
    href: 'https://www.marinernexus.com',
    icon: Building2,
    external: true,
  },
  {
    label: 'Undugu Foundation',
    description: 'Technology and community impact',
    href: 'https://www.undugu.org',
    icon: HeartHandshake,
    external: true,
  },
  {
    label: 'Email Undugu',
    description: 'gary@undugufoundation.org',
    href: 'mailto:gary@undugufoundation.org',
    icon: Mail,
    event: 'email_click',
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gary-mariner-ii/',
    icon: LinkedInIcon,
    event: 'linkedin_click',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/theleodynasty/',
    icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@theleodynasty',
    icon: TikTokIcon,
  },
].filter((link) => Boolean(link.href))

export function SocialContactCard() {
  const [shareState, setShareState] = useState<'idle' | 'copied'>('idle')

  const handleShare = useCallback(async () => {
    trackEvent({
      event: 'share_contact_click',
      label: 'Share Contact',
      href: socialUrl,
    })

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'Gary L. Mariner II',
          text: 'Connect with Gary L. Mariner II — Founder & CTO of Mariner Nexus.',
          url: socialUrl,
        })
        return
      }

      await navigator.clipboard.writeText(socialUrl)
      setShareState('copied')
      window.setTimeout(() => setShareState('idle'), 2400)
    } catch {
      setShareState('idle')
    }
  }, [])

  return (
    <MarinerVisualSystem intensity="cinematic">
      <main className="mx-auto flex min-h-screen w-full max-w-xl flex-col justify-center gap-5 px-5 py-10">
        <MarinerCommandCard>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-[440px] w-[440px] rounded-full bg-blue-500/20 blur-[90px]" />
                <div className="absolute h-[280px] w-[280px] rounded-full border border-white/10" />
                <div className="absolute h-[360px] w-[360px] rounded-full border border-blue-400/10" />
              </div>
              <div className="relative h-32 w-32 overflow-hidden rounded-full border border-white/10 bg-black shadow-[0_0_56px_rgba(59,130,246,0.24)] sm:h-36 sm:w-36">
                <Image
                  src="/images/gary-portrait.jpg"
                  alt="Gary L. Mariner II"
                  fill
                  priority
                  sizes="144px"
                  className="object-cover object-[center_15%]"
                />
              </div>
            </div>

            <Image
              src="/images/glm-signature.png"
              alt=""
              width={34}
              height={34}
              className="mb-4 opacity-35"
              aria-hidden
            />

            <h1 className="max-w-full font-display text-[1.68rem] font-bold leading-tight tracking-normal text-white min-[430px]:text-[1.88rem] sm:text-[2.35rem]">
              Gary L. Mariner II
            </h1>
            <p className="mt-2 text-sm font-semibold tracking-wide text-blue-200/95">
              Founder & CTO, Mariner Nexus
            </p>
            <p className="mt-3 max-w-[25rem] text-sm leading-6 text-white/60">
              AI Systems Architect building premium digital ecosystems for founders, nonprofits, and operators.
            </p>

            <div className="mt-7 grid w-full gap-3">
              <a
                href="/gary-mariner.vcf"
                download
                onClick={() =>
                  trackEvent({
                    event: 'save_contact_click',
                    label: 'Save Contact',
                    href: '/gary-mariner.vcf',
                  })
                }
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 text-sm font-bold text-white shadow-[0_14px_40px_rgba(59,130,246,0.30)] transition duration-200 hover:-translate-y-0.5 hover:bg-blue-600 active:translate-y-0"
              >
                <Download className="h-5 w-5" />
                Save Contact
              </a>
              <button
                type="button"
                onClick={handleShare}
                className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.055] px-5 text-sm font-semibold text-white transition duration-200 hover:border-blue-300/35 hover:bg-white/[0.085] active:scale-[0.99]"
              >
                {shareState === 'copied' ? (
                  <>
                    <Check className="h-5 w-5 text-blue-300" />
                    Link Copied
                  </>
                ) : (
                  <>
                    <Share2 className="h-5 w-5" />
                    Share Contact
                  </>
                )}
              </button>
            </div>
          </div>
        </MarinerCommandCard>

        <section className="rounded-2xl border border-white/10 bg-[#0b0b0b]/88 p-3 shadow-xl shadow-black/30 backdrop-blur">
          <div className="grid gap-2">
            {primaryActions.map((action) => (
              <ActionLink key={action.label} {...action} featured />
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#080808]/82 p-3 backdrop-blur">
          <div className="grid gap-2">
            {contactLinks.map((link) => (
              <ActionLink key={link.label} {...link} />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-3 gap-2">
          {socialLinks.map((link) => (
            <SocialLink key={link.label} {...link} />
          ))}
        </section>

        <footer className="pb-6 pt-2 text-center">
          <Link
            href="/"
            className="text-xs font-medium text-white/28 transition-colors hover:text-blue-200/80"
          >
            GaryMariner.com
          </Link>
        </footer>
      </main>
    </MarinerVisualSystem>
  )
}

function ActionLink({
  label,
  description,
  href,
  icon: Icon,
  event,
  external,
  featured,
}: {
  label: string
  description: string
  href: string
  icon: ElementType
  event?: string
  external?: boolean
  featured?: boolean
}) {
  const linkProps = external
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  return (
    <Link
      href={href}
      {...linkProps}
      onClick={() => {
        if (event) trackEvent({ event, label, href })
      }}
      className="group flex min-h-[4.75rem] items-center gap-4 rounded-xl border border-white/[0.07] bg-white/[0.025] px-4 py-3.5 transition duration-200 hover:border-blue-300/30 hover:bg-white/[0.055] active:scale-[0.99]"
    >
      <span
        className={
          featured
            ? 'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-500/13 text-blue-300 ring-1 ring-blue-300/20'
            : 'flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.045] text-white/62 ring-1 ring-white/10'
        }
      >
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-[0.95rem] font-semibold leading-5 tracking-normal text-white">
          {label}
        </span>
        <span className="mt-1 block break-words text-xs leading-5 text-white/42">
          {description}
        </span>
      </span>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-white/24 transition duration-200 group-hover:text-blue-200/70" />
    </Link>
  )
}

function SocialLink({
  label,
  href,
  icon: Icon,
  event,
}: {
  label: string
  href: string
  icon: ElementType
  event?: string
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (event) trackEvent({ event, label, href })
      }}
      className="group flex min-h-[4.5rem] flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.035] text-white/64 transition duration-200 hover:border-blue-300/35 hover:bg-white/[0.065] hover:text-blue-200 active:scale-[0.98]"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
      <span className="text-[0.7rem] font-semibold">{label}</span>
    </Link>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.26 6.34 6.34 0 0 0 10.86 4.48v-7.15a8.16 8.16 0 0 0 5.58 2.18v-3.45a4.85 4.85 0 0 1-1.99-.43l-.01-.01v-.13z" />
    </svg>
  )
}
