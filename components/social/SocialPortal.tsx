'use client'

import { useCallback, useEffect, useState } from 'react'
import { BriefcaseBusiness, Layers3, Radio, UserPlus } from 'lucide-react'
import { gsap } from 'gsap'
import { CommandCard, CommandGrid } from '@/components/social/CommandCard'
import { IdentityBackdrop } from '@/components/social/IdentityBackdrop'
import { SocialDrawer } from '@/components/social/SocialDrawer'
import { SocialHero } from '@/components/social/SocialHero'
import { VCardModal } from '@/components/social/VCardModal'
import { garyContact } from '@/lib/vcard'
import { trackEvent } from '@/lib/analytics'

const commands = [
  {
    label: 'Start a Build',
    eyebrow: 'System Build',
    description: 'For websites, digital ecosystems, automation, AI systems, and brand infrastructure.',
    detail: 'Bring the idea, the pressure, or the chaos. We turn it into a premium operating system.',
    cta: 'Build With Me',
    href: '/contact',
    icon: BriefcaseBusiness,
    accent: 'blue',
    event: 'social_start_build_click',
  },
  {
    label: 'Enter Mariner Nexus',
    eyebrow: 'Execution Layer',
    description: 'For implementation depth, systems work, and transformation proof.',
    detail: 'Case-study depth and execution capability now live inside the Mariner Nexus layer.',
    cta: 'Enter Nexus',
    href: 'https://www.marinernexus.com/case-studies',
    icon: Layers3,
    accent: 'red',
    event: 'social_explore_work_click',
  },
  {
    label: 'Save My Contact',
    eyebrow: 'Direct Signal',
    description: 'Open the contact system for phone, email, websites, and social profiles.',
    detail: 'Save the vCard when you are ready to stay connected beyond the page.',
    cta: 'Add to Contacts',
    icon: UserPlus,
    accent: 'silver',
    event: 'social_vcard_open',
  },
  {
    label: 'Follow the Signal',
    eyebrow: 'Live Channels',
    description: 'Open the private channel drawer for social, business, and impact links.',
    detail: 'LinkedIn, Instagram, TikTok, Mariner Nexus, and Undugu stay hidden until intent is clear.',
    cta: 'Open Channels',
    icon: Radio,
    accent: 'blue',
    event: 'social_drawer_open',
  },
] as const

export function SocialPortal() {
  const [isVCardOpen, setIsVCardOpen] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [copyState, setCopyState] = useState<'idle' | 'copied'>('idle')

  useEffect(() => {
    if (!isDrawerOpen) return

    const context = gsap.context(() => {
      gsap.fromTo(
        '.social-drawer',
        { y: 22, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.45, ease: 'power3.out' },
      )
      gsap.from('[data-social-icon]', {
        y: 12,
        opacity: 0,
        duration: 0.36,
        ease: 'power3.out',
        stagger: 0.05,
      })
    })

    return () => context.revert()
  }, [isDrawerOpen])

  const handleShare = useCallback(async () => {
    trackEvent({ event: 'share_contact_click', label: 'Share Contact', href: garyContact.socialUrl })

    try {
      if (navigator.share) {
        await navigator.share({
          title: garyContact.name,
          text: `${garyContact.name}, ${garyContact.role}.`,
          url: garyContact.socialUrl,
        })
        return
      }

      await navigator.clipboard.writeText(garyContact.socialUrl)
      setCopyState('copied')
      window.setTimeout(() => setCopyState('idle'), 2200)
    } catch {
      setCopyState('idle')
    }
  }, [])

  return (
    <main className="social-portal relative min-h-screen overflow-hidden bg-[#030405] text-white">
      <IdentityBackdrop />

      <div className="relative z-10 flex min-h-screen flex-col">
        <SocialHero />

        <div className="relative z-10 pb-7">
          <CommandGrid>
            {commands.map((command) => {
              if ('href' in command) {
                return (
                  <CommandCard
                    key={command.label}
                    {...command}
                    onClick={() =>
                      trackEvent({
                        event: command.event,
                        label: command.label,
                        href: command.href,
                      })
                    }
                  />
                )
              }

              return (
                <CommandCard
                  key={command.label}
                  {...command}
                  onClick={() => {
                    trackEvent({ event: command.event, label: command.label })
                    if (command.label === 'Save My Contact') {
                      setIsVCardOpen(true)
                    } else {
                      setIsDrawerOpen(true)
                    }
                  }}
                />
              )
            })}
          </CommandGrid>

          <p className="mx-auto mt-6 max-w-[19rem] text-center text-[0.64rem] font-medium uppercase leading-5 tracking-[0.12em] text-white/38 sm:max-w-2xl sm:text-xs sm:tracking-[0.18em]">
            Systems built across brands, organizations, and high-growth environments.
          </p>
        </div>

        <footer className="relative z-10 mx-auto mt-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/[0.06] px-5 py-4 text-xs font-medium text-white/42 sm:flex-row sm:px-8 lg:px-10">
          <span>© Gary L. Mariner II</span>
          <a
            href={garyContact.businessSite}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-100"
          >
            Built with Mariner Nexus
          </a>
        </footer>
      </div>

      {isDrawerOpen && <SocialDrawer onClose={() => setIsDrawerOpen(false)} />}
      {isVCardOpen && (
        <VCardModal
          copyState={copyState}
          onShare={handleShare}
          onClose={() => setIsVCardOpen(false)}
        />
      )}
    </main>
  )
}
