'use client'

import type { KeyboardEvent, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import styles from './network.module.css'

export const networkEmail = 'gary.mariner@gmail.com'
export const networkEmailHref = `mailto:${networkEmail}?subject=${encodeURIComponent('Great connecting — Gary Mariner')}`

export function closeOnEscape(event: KeyboardEvent<HTMLElement>, open: boolean, onClose: () => void) {
  if (event.key !== 'Escape' || event.defaultPrevented || !open) return
  event.preventDefault()
  event.stopPropagation()
  onClose()
}

/** In-flow disclosure: no modal, focus trap, background inerting or blur dismissal. */
export function NetworkDisclosure({ id, title, open, onClose, children }: {
  id: string
  title: string
  open: boolean
  onClose: () => void
  children: ReactNode
}) {
  return (
    <section id={id} hidden={!open} className={styles.disclosure} aria-labelledby={`${id}-title`}
      onKeyDown={(event) => closeOnEscape(event, open, onClose)}>
      <div className={styles.disclosureHeading}>
        <h3 id={`${id}-title`}>{title}</h3>
        <button type="button" className={styles.close} onClick={onClose} aria-label={`Close ${id === 'network-exchange' ? 'Exchange With Me' : id === 'network-social' ? 'Social Connections' : 'ecosystem exploration'}`}>
          Close <span aria-hidden="true">×</span>
        </button>
      </div>
      {children}
    </section>
  )
}

export function NetworkExchange({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <NetworkDisclosure id="network-exchange" title="A hello, in your own words." open={open} onClose={onClose}>
      <p className={styles.panelCopy}>
        Share your name, preferred contact details, and where we met. Mention a personal connection,
        business interest, or collaboration if you’d like.
      </p>
      <a className={`${styles.control} ${styles.save} ${styles.emailAction}`} href={networkEmailHref}>
        Open your email app <ArrowUpRight size={20} aria-hidden="true" />
      </a>
      <p className={styles.privacy}>You choose what to share and send it yourself. Opening your email app does not send a message.</p>
      <p className={styles.panelCopy}>No email app? Write to <a href={`mailto:${networkEmail}`}>{networkEmail}</a>.</p>
    </NetworkDisclosure>
  )
}
