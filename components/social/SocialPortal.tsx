'use client'

import { useEffect, useState } from 'react'
import { Layers3, Radio } from 'lucide-react'
import { gsap } from 'gsap'
import { CommandCard, CommandGrid } from '@/components/social/CommandCard'
import { IdentityBackdrop } from '@/components/social/IdentityBackdrop'
import { SocialDrawer } from '@/components/social/SocialDrawer'
import { SocialHero } from '@/components/social/SocialHero'
import { socialCommands, socialProof } from '@/lib/social-config'
import { garyContact } from '@/lib/vcard'
import { trackEvent } from '@/lib/analytics'

const commandIcons = {
  layers: Layers3,
  radio: Radio,
}

export function SocialPortal() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleEnterEcosystem = () => {
    trackEvent({ event: 'social_enter_ecosystem_click', label: 'Enter the ecosystem' })

    const routes = document.getElementById('ecosystem-routes')
    if (!routes) return

    routes.scrollIntoView({ behavior: 'smooth', block: 'start' })
    window.history.replaceState(null, '', '#ecosystem-routes')
    routes.focus({ preventScroll: true })
  }

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

  return (
    <main className="social-portal relative min-h-screen overflow-hidden bg-[#030405] text-white">
      <IdentityBackdrop />

      <div className="relative z-10 flex min-h-screen flex-col">
        <SocialHero onEnterEcosystem={handleEnterEcosystem} />

        <div className="relative z-10 pb-7">
          <section
            aria-label="Selected proof"
            className="mx-auto mb-4 grid w-full max-w-6xl gap-2 px-5 sm:grid-cols-3 md:px-8 lg:px-10"
          >
            {socialProof.map((item) => (
              <div
                key={item.label}
                className="border-y border-white/[0.07] bg-white/[0.018] px-4 py-3 backdrop-blur-sm sm:border-x sm:first:border-l sm:last:border-r"
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

          <CommandGrid id="ecosystem-routes">
            {socialCommands.map((command) => {
              const Icon = commandIcons[command.icon]
              const { icon: _icon, ...cardCommand } = command

              if ('href' in command) {
                return (
                  <CommandCard
                    key={command.label}
                    {...cardCommand}
                    icon={Icon}
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
                  {...cardCommand}
                  icon={Icon}
                  onClick={() => {
                    trackEvent({ event: command.event, label: command.label })
                    setIsDrawerOpen(true)
                  }}
                />
              )
            })}
          </CommandGrid>

          <p className="mx-auto mt-6 max-w-[19rem] text-center text-[0.64rem] font-medium uppercase leading-5 tracking-[0.12em] text-white/38 sm:max-w-2xl sm:text-xs sm:tracking-[0.18em]">
            Strategic identity, execution depth, human impact, and public intelligence remain connected.
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
    </main>
  )
}
