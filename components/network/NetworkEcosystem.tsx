'use client'

import { ArrowUpRight } from 'lucide-react'
import { NetworkDisclosure } from './NetworkExchange'
import styles from './network.module.css'

export function NetworkEcosystem({ open, onClose, onExchange, onSocial }: {
  open: boolean
  onClose: () => void
  onExchange: () => void
  onSocial: () => void
}) {
  return (
    <NetworkDisclosure id="network-ecosystem" title="A few ways into the conversation." open={open} onClose={onClose}>
      <nav className={styles.ecosystemPaths} aria-label="Curated personal-professional exploration">
        <a href="https://www.garymariner.com/" target="_blank" rel="noopener noreferrer">
          <span><small>The perspective</small>Explore Gary’s systems thinking</span>
          <ArrowUpRight size={20} aria-hidden="true" /><span className={styles.srOnly}> (opens in a new tab)</span>
        </a>
        <button type="button" onClick={onExchange}>
          <span><small>The conversation</small>Explore a personal or professional connection</span>
          <ArrowUpRight size={20} aria-hidden="true" />
        </button>
        <button type="button" onClick={onSocial}>
          <span><small>The person</small>Find a personal channel</span>
          <ArrowUpRight size={20} aria-hidden="true" />
        </button>
      </nav>
    </NetworkDisclosure>
  )
}
