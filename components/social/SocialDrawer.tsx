'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { ExternalLink, X } from 'lucide-react'
import { socialChannels } from '@/lib/vcard'
import { trackEvent } from '@/lib/analytics'

type SocialDrawerProps = {
  onClose: () => void
}

export function SocialDrawer({ onClose }: SocialDrawerProps) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 px-4 pb-4 sm:absolute sm:inset-x-auto sm:bottom-8 sm:right-8 sm:w-[28rem] sm:px-0 sm:pb-0">
      <section className="social-drawer rounded-3xl border border-white/12 bg-[#080a0d]/92 p-4 shadow-[0_26px_100px_rgba(0,0,0,0.58)] backdrop-blur-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-blue-100/58">
              Open Channels
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold tracking-normal text-white">
              Follow the Signal
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/58 transition hover:border-white/20 hover:text-white"
            aria-label="Close social channels"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

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
              className="group flex min-h-14 items-center justify-between rounded-2xl border border-white/[0.075] bg-white/[0.035] px-4 py-3 text-white/74 transition duration-300 hover:border-blue-200/30 hover:bg-white/[0.07] hover:text-white"
              data-social-icon
            >
              <span>
                <span className="block text-sm font-semibold">{channel.label}</span>
                <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/32">
                  {channel.type}
                </span>
              </span>
              <ExternalLink className="h-4 w-4 text-white/30 transition group-hover:text-blue-100" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
