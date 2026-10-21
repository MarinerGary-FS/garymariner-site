'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowDown, ArrowUpRight, Layers3, Radio, Share2 } from 'lucide-react'
import { CommandCard, CommandGrid } from '@/components/social/CommandCard'
import { IdentityBackdrop } from '@/components/social/IdentityBackdrop'
import { SocialDrawer } from '@/components/social/SocialDrawer'
import { SocialHero, socialPrimaryAction, socialSecondaryAction } from '@/components/social/SocialHero'
import { socialHero } from '@/lib/social-config'
import { closeOnEscape, networkEmail, networkEmailHref } from './NetworkExchange'
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

const networkHero = {
  ...socialHero,
  body: 'A controlled entry point into the public ecosystem: implementation depth through Mariner Nexus and curated personal connections.',
}

type Panel = 'exchange' | 'social'

export function NetworkingPortal() {
  const [panel, setPanel] = useState<Panel | null>(null)
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
    setPanel((previous) => previous === next ? null : next)
  }

  function enterEcosystem() {
    const routes = document.getElementById('network-ecosystem')
    routes?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
    routes?.focus({ preventScroll: true })
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
    <div className={`${styles.root} social-portal relative min-h-screen overflow-hidden bg-[#030405] text-white`}
      onFocusCapture={(event) => {
        if (!panel || event.target === triggerRef.current) return
        const drawer = document.getElementById(`network-${panel}`)
        if (drawer && !drawer.contains(event.target)) dismiss(false)
      }}>
      <IdentityBackdrop />
      <div className="relative z-10 flex min-h-screen flex-col">
        <SocialHero content={networkHero} onEnterEcosystem={enterEcosystem} secondaryHref="https://www.marinernexus.com/start" respectReducedMotion
          additionalActions={<>
            <a href="/network/gary-mariner.vcf" download="Gary-Mariner.vcf" className={socialPrimaryAction}>
              Save My Contact <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <button type="button" className={socialSecondaryAction} aria-expanded={panel === 'exchange'} aria-controls="network-exchange"
              onClick={(event) => show('exchange', event.currentTarget)}
              onKeyDown={(event) => closeOnEscape(event, panel === 'exchange', () => dismiss())}>
              Exchange With Me <ArrowUpRight className="h-4 w-4 text-white/45" aria-hidden="true" />
            </button>
          </>} />

        <div className="relative z-10 pb-7">
          <CommandGrid id="network-ecosystem">
            <CommandCard label="Enter Mariner Nexus" eyebrow="Execution & transformation"
              description="Implementation depth, systems work, and operational proof live in the execution layer."
              detail="Mariner Nexus shows how strategic systems thinking becomes digital infrastructure."
              cta="Build intelligently" href="https://www.marinernexus.com/start" icon={Layers3} accent="sapphire" respectReducedMotion />
            <CommandCard label="Social Connections" eyebrow="Personal connections"
              description="Connect through LinkedIn, Instagram, and TikTok."
              detail="Choose a personal channel and continue the conversation at your pace."
              cta="Open channels" icon={Radio} accent="cyan" expanded={panel === 'social'} controls="network-social" respectReducedMotion
              onClick={(event) => show('social', event.currentTarget)}
              onKeyDown={(event) => closeOnEscape(event, panel === 'social', () => dismiss())} />
          </CommandGrid>

          <div className={styles.utility}>
            <a href={networkEmailHref} className={styles.emailLink}>Prefer email? Continue in your own app <ArrowUpRight size={16} aria-hidden="true" /></a>
            <p className={styles.privacy}>You choose what to share and send it yourself. Opening your email app does not send a message.
              This page does not submit or store your details, sync contacts, or enroll you in marketing.</p>
            <div className={styles.utilityActions}>
              <button type="button" className={socialSecondaryAction} onClick={share} disabled={sharing}>
                {sharing ? 'Sharing…' : 'Share this page'} <Share2 size={16} aria-hidden="true" />
              </button>
              <a href="https://www.garymariner.com/" className={styles.emailLink}>Explore GaryMariner.com <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <p role="status" aria-atomic="true" className={styles.status}>{message}</p>
            {manualShare && <div className={styles.manualShare}>
              <label htmlFor="network-address">Network page address</label>
              <input id="network-address" ref={addressRef} type="url" value={networkUrl} readOnly spellCheck={false} />
              <button type="button" className={socialSecondaryAction} onClick={() => { addressRef.current?.focus(); addressRef.current?.select() }}>Select address</button>
            </div>}
          </div>
        </div>

        <footer className="relative z-10 mx-auto mt-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 border-t border-white/[0.06] px-5 py-4 text-xs font-medium text-white/42 sm:flex-row sm:px-8 lg:px-10">
          <span>© Gary L. Mariner II</span>
          <a href="https://www.marinernexus.com/start" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-100">Built with Mariner Nexus</a>
        </footer>
      </div>

      {panel && <SocialDrawer key={panel} id={`network-${panel}`} className={styles.drawerBackdrop} closeRef={closeRef}
        onClose={() => dismiss()} trackClicks={false} channels={personalChannels} announceNewTab
        eyebrow={panel === 'exchange' ? 'Continue the conversation' : 'Personal connections'}
        title={panel === 'exchange' ? 'Exchange With Me' : 'Connect in your own way.'}
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
        {panel === 'exchange' ? <div className={styles.exchangeContent}>
          <p>Share your name, preferred contact details, and where we met. Mention a personal connection, business interest, or collaboration if you’d like.</p>
          <a href={networkEmailHref} className={socialPrimaryAction}>Open your email app <ArrowUpRight size={16} aria-hidden="true" /></a>
          <p>You choose what to share and send it yourself. Opening your email app does not send a message.</p>
          <a href={`mailto:${networkEmail}`} className={styles.emailLink}>{networkEmail}</a>
        </div> : undefined}
      </SocialDrawer>}
    </div>
  )
}
