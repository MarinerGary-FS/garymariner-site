'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Share2 } from 'lucide-react'
import { closeOnEscape, NetworkExchange, networkEmailHref } from './NetworkExchange'
import { NetworkSocialConnections } from './NetworkSocialConnections'
import { NetworkEcosystem } from './NetworkEcosystem'
import styles from './network.module.css'

export const networkUrl = 'https://www.garymariner.com/network'
type SharePlatform = {
  share?: (data: ShareData) => Promise<void>
  writeText?: (value: string) => Promise<void>
}

// Outcomes describe observable browser operations, never delivery or contact import.
export async function shareNetworkLink(platform: SharePlatform): Promise<'native' | 'copied' | 'cancelled' | 'manual'> {
  if (platform.share) {
    try {
      await platform.share({ title: 'Gary L. Mariner II', url: networkUrl })
      return 'native'
    } catch (error) {
      return typeof error === 'object' && error !== null && 'name' in error && error.name === 'AbortError'
        ? 'cancelled' : 'manual'
    }
  }
  if (!platform.writeText) return 'manual'
  try {
    await platform.writeText(networkUrl)
    return 'copied'
  } catch {
    return 'manual'
  }
}

type Disclosure = 'exchange' | 'social' | 'ecosystem'

export function NetworkingPortal() {
  const [open, setOpen] = useState({ exchange: false, social: false, ecosystem: false })
  const [message, setMessage] = useState('')
  const [manualShare, setManualShare] = useState(false)
  const [sharing, setSharing] = useState(false)
  const exchangeRef = useRef<HTMLButtonElement>(null)
  const socialRef = useRef<HTMLButtonElement>(null)
  const ecosystemRef = useRef<HTMLButtonElement>(null)
  const addressRef = useRef<HTMLInputElement>(null)
  const triggers = { exchange: exchangeRef, social: socialRef, ecosystem: ecosystemRef }

  function close(disclosure: Disclosure) {
    setOpen((previous) => ({ ...previous, [disclosure]: false }))
    triggers[disclosure].current?.focus()
  }

  function toggle(disclosure: Disclosure) {
    setOpen((previous) => ({ ...previous, [disclosure]: !previous[disclosure] }))
  }

  function explore(disclosure: Disclosure) {
    setOpen((previous) => ({ ...previous, [disclosure]: true }))
    triggers[disclosure].current?.focus()
  }

  async function share() {
    if (sharing) return
    setMessage('')
    setManualShare(false)
    setSharing(true)
    const outcome = await shareNetworkLink({
      share: navigator.share ? (data) => navigator.share(data) : undefined,
      writeText: navigator.clipboard?.writeText ? (value) => navigator.clipboard.writeText(value) : undefined,
    })
    setSharing(false)
    if (outcome === 'copied') setMessage('Link copied. You can paste it into a message.')
    if (outcome === 'manual') {
      setMessage('Sharing is unavailable here. Select and copy the page address below.')
      setManualShare(true)
    }
  }

  return (
    <div className={styles.environment}>
      <a href="#network-actions" className={styles.skip}>Skip to contact actions</a>
      <div className={styles.portrait}>
        <Image src="/images/gary-portrait.jpg" alt="Gary L. Mariner II" fill priority
          sizes="(max-width: 360px) 360px, (max-width: 700px) 400px, (max-width: 1100px) 76vw, 70vw"
          className={styles.image} />
      </div>
      <div className={styles.atmosphere} aria-hidden="true" />
      <header className={styles.masthead}><span>GARY MARINER</span><span>The living exchange</span></header>
      <section className={styles.identity} aria-labelledby="network-title">
        <p className={styles.eyebrow}>A connection,<br />continued.</p>
        <h1 id="network-title">Gary L.<span>Mariner II<span className={styles.period}>.</span></span></h1>
        <p className={styles.role}>Systems architect.<span>Founder of Mariner Nexus.</span></p>
      </section>
      <section id="network-actions" className={styles.threshold} aria-labelledby="network-action-title" tabIndex={-1}>
        <div className={styles.thresholdHeading}>
          <h2 id="network-action-title">Good to meet you.</h2>
          <p>Take my contact. Keep the conversation going.</p>
        </div>
        <div className={styles.actions}>
          <a className={`${styles.control} ${styles.save}`} href="/network/gary-mariner.vcf" download="Gary-Mariner.vcf">
            Save My Contact <ArrowDown size={22} aria-hidden="true" />
          </a>
          <button id="network-exchange-trigger" ref={exchangeRef} type="button" className={`${styles.control} ${styles.exchangeButton}`}
            aria-expanded={open.exchange} aria-controls="network-exchange" onClick={() => toggle('exchange')}
            onKeyDown={(event) => closeOnEscape(event, open.exchange, () => close('exchange'))}>
            Exchange With Me <ArrowUpRight size={20} aria-hidden="true" />
          </button>
          <button type="button" className={`${styles.control} ${styles.share}`} onClick={share} disabled={sharing}>
            {sharing ? 'Sharing…' : 'Share'} <Share2 size={19} aria-hidden="true" />
          </button>
        </div>
        <p role="status" aria-atomic="true" className={styles.status}>{message}</p>
        {manualShare && (
          <div className={styles.manualShare}>
            <label htmlFor="network-address">Network page address</label>
            <div>
              <input id="network-address" ref={addressRef} type="url" value={networkUrl} readOnly spellCheck={false} />
              <button type="button" className={styles.close} onClick={() => { addressRef.current?.focus(); addressRef.current?.select() }}>Select address</button>
            </div>
          </div>
        )}
        <a className={styles.emailFallback} href={networkEmailHref}>Prefer email? Continue in your own app <ArrowUpRight size={16} aria-hidden="true" /></a>
        <p className={styles.privacy}>You choose what to share and send it yourself. Opening your email app does not send a message.
          This page does not submit or store your details, sync contacts, or enroll you in marketing.</p>
        <NetworkExchange open={open.exchange} onClose={() => close('exchange')} />
        <NetworkSocialConnections open={open.social} triggerRef={socialRef} onToggle={() => toggle('social')} onClose={() => close('social')} />
        <div className={styles.exploreRow}>
          <button ref={ecosystemRef} type="button" className={styles.exploreControl}
            aria-expanded={open.ecosystem} aria-controls="network-ecosystem" onClick={() => toggle('ecosystem')}
            onKeyDown={(event) => closeOnEscape(event, open.ecosystem, () => close('ecosystem'))}>
            <span><small>Personal + professional</small>Enter the Ecosystem</span><ArrowUpRight size={22} aria-hidden="true" />
          </button>
          <a className={styles.exploreControl} href="https://www.marinernexus.com/start" target="_blank" rel="noopener noreferrer">
            <span><small>The commercial pathway</small>Enter Mariner Nexus</span><ArrowUpRight size={22} aria-hidden="true" />
            <span className={styles.srOnly}> (opens in a new tab)</span>
          </a>
        </div>
        <NetworkEcosystem open={open.ecosystem} onClose={() => close('ecosystem')}
          onExchange={() => explore('exchange')} onSocial={() => explore('social')} />
      </section>
      <footer className={styles.footer}><span>Human connection. Intelligent possibilities.</span><span>GARYMARINER.COM / NETWORK</span></footer>
    </div>
  )
}
