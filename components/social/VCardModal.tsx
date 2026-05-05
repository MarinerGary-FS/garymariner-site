'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, Download, ExternalLink, Mail, Phone, Share2, X } from 'lucide-react'
import { contactRows, garyContact, socialChannels } from '@/lib/vcard'
import { trackEvent } from '@/lib/analytics'

type VCardModalProps = {
  copyState: 'idle' | 'copied'
  onShare: () => void
  onClose: () => void
}

export function VCardModal({ copyState, onShare, onClose }: VCardModalProps) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/78 px-4 py-4 backdrop-blur-xl sm:items-center sm:px-5 sm:py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vcard-modal-title"
    >
      <div className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/12 bg-[#080a0d]/96 p-5 shadow-[0_35px_120px_rgba(0,0,0,0.65)] sm:p-6">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/58 transition hover:border-white/20 hover:text-white"
          aria-label="Close contact card"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-4 pr-12">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-black">
            <Image
              src="/images/gary-portrait.jpg"
              alt={garyContact.name}
              fill
              sizes="80px"
              className="object-cover object-[center_15%]"
            />
          </div>
          <div>
            <h2
              id="vcard-modal-title"
              className="font-display text-2xl font-semibold tracking-normal text-white"
            >
              {garyContact.name}
            </h2>
            <p className="mt-1 text-sm font-medium text-blue-100/72">{garyContact.role}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-2">
          {contactRows.map((row) => (
            <ContactRow key={row.label} {...row} />
          ))}
        </div>

        <div className="mt-5 rounded-2xl border border-white/[0.075] bg-white/[0.025] p-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/36">
            Social Profiles
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {socialChannels
              .filter((channel) => channel.type === 'Social')
              .map((channel) => (
                <Link
                  key={channel.label}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-10 items-center justify-between rounded-xl bg-white/[0.035] px-3 text-sm font-semibold text-white/72 transition hover:bg-white/[0.07] hover:text-white"
                >
                  {channel.label}
                  <ExternalLink className="h-3.5 w-3.5 text-white/32 group-hover:text-blue-100" />
                </Link>
              ))}
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
          <a
            href={garyContact.vcardPath}
            download
            onClick={() =>
              trackEvent({
                event: 'save_contact_click',
                label: 'Save Contact',
                href: garyContact.vcardPath,
              })
            }
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-black transition hover:bg-blue-100"
          >
            <Download className="h-4 w-4" />
            Save Contact
          </a>
          <button
            type="button"
            onClick={onShare}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.045] px-5 text-sm font-semibold text-white transition hover:border-blue-200/35 hover:bg-white/[0.08]"
          >
            {copyState === 'copied' ? <Check className="h-4 w-4 text-blue-200" /> : <Share2 className="h-4 w-4" />}
            {copyState === 'copied' ? 'Copied' : 'Share'}
          </button>
        </div>
      </div>
    </div>
  )
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  const Icon = label.includes('Email') ? Mail : label === 'Phone' ? Phone : ExternalLink

  return (
    <Link
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-3 rounded-2xl border border-white/[0.075] bg-white/[0.025] p-3 transition hover:border-blue-200/25 hover:bg-white/[0.05]"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/[0.055] text-white/62 group-hover:text-blue-100">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/34">
          {label}
        </span>
        <span className="mt-1 block break-words text-sm font-medium text-white/78">{value}</span>
      </span>
    </Link>
  )
}
