'use client'

import type { RefObject } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { closeOnEscape, NetworkDisclosure } from './NetworkExchange'
import styles from './network.module.css'

// Verified against the owner's published /social links. Keep business routing separate.
const personalChannels = [
  { name: 'LinkedIn', handle: 'Gary Mariner II', href: 'https://www.linkedin.com/in/gary-mariner-ii/' },
  { name: 'Instagram', handle: '@theleodynasty', href: 'https://www.instagram.com/theleodynasty/' },
  { name: 'TikTok', handle: '@theleodynasty', href: 'https://www.tiktok.com/@theleodynasty' },
] as const

export function NetworkSocialConnections({ open, triggerRef, onToggle, onClose }: {
  open: boolean
  triggerRef: RefObject<HTMLButtonElement | null>
  onToggle: () => void
  onClose: () => void
}) {
  return (
    <div className={styles.socialZone}>
      <button id="network-social-trigger" ref={triggerRef} type="button" className={styles.socialToggle}
        aria-expanded={open} aria-controls="network-social" onClick={onToggle}
        onKeyDown={(event) => closeOnEscape(event, open, onClose)}>
        Social Connections <span aria-hidden="true" className={styles.chevron}>{open ? '−' : '+'}</span>
      </button>
      <NetworkDisclosure id="network-social" title="Connect in your own way." open={open} onClose={onClose}>
        <nav className={styles.channels} aria-label="Personal social channels">
          {personalChannels.map((channel) => (
            <a key={channel.name} href={channel.href} target="_blank" rel="noopener noreferrer">
              <span>{channel.name}<small>{channel.handle}</small></span>
              <ArrowUpRight size={20} aria-hidden="true" />
              <span className={styles.srOnly}> (opens in a new tab)</span>
            </a>
          ))}
        </nav>
        <p className={styles.privacy}>Personal channels. Each opens in a new tab.</p>
      </NetworkDisclosure>
    </div>
  )
}
