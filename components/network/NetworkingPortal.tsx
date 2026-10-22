'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Share2 } from 'lucide-react'
import Image from 'next/image'
import { IdentityBackdrop } from '@/components/social/IdentityBackdrop'
import { SocialDrawer } from '@/components/social/SocialDrawer'
import { socialPrimaryAction, socialSecondaryAction } from '@/components/social/SocialHero'
import type { KeyboardEvent } from 'react'
import { NetworkExchange } from './NetworkExchange'
import { emptyExchangeDraft } from '@/lib/network-exchange-handoff'
import type { ExchangeDraft } from '@/lib/network-exchange-handoff'

const networkEmail = 'gary.mariner@gmail.com'
const networkEmailHref = `mailto:${networkEmail}?subject=${encodeURIComponent('Great connecting — Gary Mariner')}`
function closeOnEscape(event: KeyboardEvent<HTMLElement>, open: boolean, onClose: () => void) {
  if (event.key !== 'Escape' || event.defaultPrevented || !open) return
  event.preventDefault()
  event.stopPropagation()
  onClose()
}
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

const personalChannels = [
  { label: 'LinkedIn', type: 'Gary Mariner II', href: 'https://www.linkedin.com/in/gary-mariner-ii/' },
  { label: 'Instagram', type: '@theleodynasty', href: 'https://www.instagram.com/theleodynasty/' },
  { label: 'TikTok', type: '@theleodynasty', href: 'https://www.tiktok.com/@theleodynasty' },
] as const

type Panel = 'exchange' | 'social'

export function NetworkingPortal() {
  const [panel, setPanel] = useState<Panel | null>(null)
  const [invitation, setInvitation] = useState(false)
  const [draft, setDraft] = useState<ExchangeDraft>({ ...emptyExchangeDraft })
  const [message, setMessage] = useState('')
  const [manualShare, setManualShare] = useState(false)
  const [sharing, setSharing] = useState(false)
  const triggerRef = useRef<HTMLElement | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const addressRef = useRef<HTMLInputElement>(null)
  const keyboardExitRef = useRef(false)

  useEffect(() => {
    if (panel) closeRef.current?.focus({ preventScroll: true })
  }, [panel])

  function dismiss(restoreFocus = true) {
    setPanel(null)
    if (restoreFocus) triggerRef.current?.focus()
  }

  function show(next: Panel, trigger: HTMLElement) {
    triggerRef.current = trigger
    if (next === 'exchange') setInvitation(false)
    setPanel((previous) => previous === next ? null : next)
  }

  async function share() {
    if (sharing) return
    setMessage('')
    setManualShare(true)
    setMessage('You can also select and copy the page address below.')
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

  async function copyLink() {
    setManualShare(true)
    setMessage('Select and copy the page address below, or wait for clipboard confirmation.')
    const outcome = await shareNetworkLink({
      writeText: navigator.clipboard?.writeText ? (value) => navigator.clipboard.writeText(value) : undefined,
    })
    setManualShare(outcome !== 'copied')
    setMessage(outcome === 'copied' ? 'Link copied. You can paste it into a message.' : 'Select and copy the page address below.')
  }

  return (
    <div className={`${styles.root} social-portal relative min-h-screen overflow-hidden bg-[#030405] text-white`}
      onFocusCapture={(event) => {
        if (!panel || event.target === triggerRef.current) return
        const drawer = document.getElementById(`network-${panel}`)
        if (drawer && !drawer.contains(event.target)) dismiss(false)
      }}>
      <IdentityBackdrop />
      <div className={styles.roomContent}>
        <header className={styles.masthead}>
          <a href="https://www.garymariner.com/" aria-label="Gary Mariner home">Gary Mariner</a>
          <span>Let’s stay connected.</span>
        </header>

        <section className={styles.signalRoom} aria-labelledby="network-title">
          <div className={styles.portraitField}>
            <Image src="/images/gary-portrait.jpg" alt="Gary L. Mariner II" width={2048} height={3072} priority
              sizes="(min-width: 1600px) 840px, (min-width: 960px) 56vw, (min-width: 640px) 440px, 86vw" />
          </div>
          <div className={styles.portraitAtmosphere} aria-hidden="true" />

          <div className={styles.identity}>
            <p className={styles.eyebrow}>Good to meet you.</p>
            <h1 id="network-title" className={styles.name}>Gary L.<span>Mariner II</span></h1>
            <p className={styles.personal}>Father. Husband. Builder.</p>
            <p className={styles.positioning}>Technology, ideas &amp; good conversation.</p>

            <div className={styles.connectionThreshold}>
              <a href="/network/gary-mariner.vcf" download="Gary-Mariner.vcf" className={`${socialPrimaryAction} ${styles.saveContact}`}
                aria-expanded={panel === 'exchange' && invitation} aria-controls="network-exchange"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget
                  setInvitation(true)
                  setPanel('exchange')
                }}
                onKeyDown={(event) => closeOnEscape(event, panel === 'exchange' && invitation, () => dismiss())}>
                <span>Save My Contact</span><ArrowDown size={20} aria-hidden="true" />
              </a>
              <div className={styles.secondaryPaths}>
                <button type="button" aria-expanded={panel === 'social'} aria-controls="network-social"
                  onClick={(event) => show('social', event.currentTarget)}
                  onKeyDown={(event) => closeOnEscape(event, panel === 'social', () => dismiss())}>
                  Social Connections <ArrowUpRight size={18} aria-hidden="true" />
                </button>
                <a href="https://www.marinernexus.com/start" target="_blank" rel="noopener noreferrer">
                  Explore Mariner Nexus <ArrowUpRight size={18} aria-hidden="true" />
                  <span className={styles.srOnly}> (opens in a new tab)</span>
                </a>
              </div>
              <p className={styles.thresholdNote}>Keep in touch, on your terms.</p>
            </div>

            <div className={styles.utilityActions}>
              <button type="button" className={styles.utilityButton} onClick={share} disabled={sharing}>
                <Share2 size={15} aria-hidden="true" /> {sharing ? 'Sharing…' : 'Share'}
              </button>
              <button type="button" className={styles.utilityButton} onClick={copyLink}>Copy Link</button>
            </div>
            <p role="status" aria-atomic="true" className={styles.status}>{message}</p>
            {manualShare && <div className={styles.manualShare}>
              <label htmlFor="network-address">Network page address</label>
              <input id="network-address" ref={addressRef} type="url" value={networkUrl} readOnly spellCheck={false} />
              <button type="button" className={socialSecondaryAction} onClick={() => { addressRef.current?.focus(); addressRef.current?.select() }}>Select address</button>
            </div>}
          </div>
        </section>

        <footer className={styles.footer}>
          <span>© Gary L. Mariner II</span>
          <a href={networkEmailHref}>Prefer email?<span className={styles.srOnly}> Opens your email app; you send the message yourself.</span></a>
          <span>No automatic collection. Just connection.</span>
        </footer>
      </div>

      {panel && <SocialDrawer key={panel} id={`network-${panel}`} className={styles.drawerBackdrop} closeRef={closeRef}
        onClose={() => dismiss()} trackClicks={false} channels={personalChannels} announceNewTab
        eyebrow={panel === 'exchange' ? 'Continue the conversation' : 'Personal connections'}
        title={panel === 'exchange' ? invitation ? 'Keep the conversation going.' : 'Exchange Details' : 'Connect in your own way.'}
        closeLabel={panel === 'exchange' ? 'Close contact exchange' : 'Close Social Connections'}
        onKeyDown={(event) => {
          keyboardExitRef.current = event.key === 'Tab'
          closeOnEscape(event, true, () => dismiss())
        }}
        onFocusLeave={(event) => {
          const next = event.relatedTarget
          if (next instanceof Node && !event.currentTarget.contains(next) && (next !== triggerRef.current || keyboardExitRef.current)) dismiss(false)
          keyboardExitRef.current = false
        }}>
        {panel === 'exchange' ? <NetworkExchange invitation={invitation} onExchange={() => setInvitation(false)} onDismiss={() => dismiss()} draft={draft} onDraft={setDraft} /> : undefined}
      </SocialDrawer>}
    </div>
  )
}
