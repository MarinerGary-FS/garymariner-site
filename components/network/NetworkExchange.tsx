'use client'

import { useEffect, useRef, useState } from 'react'
import { socialPrimaryAction, socialSecondaryAction } from '@/components/social/SocialHero'
import { emptyExchangeDraft, prepareExchange } from '@/lib/network-exchange-handoff'
import type { ExchangeDraft, ExchangeErrors } from '@/lib/network-exchange-handoff'
import styles from './network.module.css'

type Props = {
  invitation: boolean
  onExchange: () => void
  onDismiss: () => void
  draft: ExchangeDraft
  onDraft: (draft: ExchangeDraft) => void
}

export function NetworkExchange({ invitation, onExchange, onDismiss, draft, onDraft }: Props) {
  const [errors, setErrors] = useState<ExchangeErrors>({})
  const [notice, setNotice] = useState('')
  const [manual, setManual] = useState('')
  const summary = useRef<HTMLDivElement>(null)
  const nameInput = useRef<HTMLInputElement>(null)
  const text = useRef<HTMLTextAreaElement>(null)
  const generation = useRef(0)
  const previousInvitation = useRef(invitation)
  useEffect(() => {
    if (previousInvitation.current && !invitation) nameInput.current?.focus({ preventScroll: true })
    previousInvitation.current = invitation
  }, [invitation])
  useEffect(() => () => { generation.current++ }, [])

  function change(key: keyof ExchangeDraft, value: string) {
    generation.current++
    onDraft({ ...draft, [key]: value })
    setErrors({})
    setNotice('')
    setManual('')
  }
  function prepare() {
    const result = prepareExchange(draft)
    setErrors(result.errors)
    if (!result.details) {
      setNotice('Review the highlighted fields. Your entries are still here.')
      requestAnimationFrame(() => summary.current?.focus())
    }
    return result
  }
  function handoff() {
    const result = prepare()
    if (!result.details) return
    setManual(result.details)
    if (!result.href) {
      setNotice('This message is too long for a reliable email link. Copy the details below into your email app.')
      return
    }
    setNotice('Your email app may open. Review and send the message yourself. If nothing opens, copy your details below. Your entries remain here.')
    window.location.href = result.href
  }
  async function copy() {
    const result = prepare()
    if (!result.details) return
    const request = ++generation.current
    setManual(result.details)
    setNotice('You can select and copy your details below while clipboard access is pending.')
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(result.details)
      if (request === generation.current) setNotice('Details copied. Paste them into a message to gary.mariner@gmail.com and send it yourself.')
    } catch {
      if (request === generation.current) setNotice('Clipboard access is unavailable. Select and copy your details below.')
    }
  }
  function clear() {
    generation.current++
    onDraft({ ...emptyExchangeDraft })
    setErrors({}); setManual(''); setNotice('Fields cleared. This does not remove anything already copied to your clipboard or email app.')
    nameInput.current?.focus()
  }
  if (invitation) return <div className={styles.exchangeContent}>
    <p>Would you like to exchange details? Saving Gary’s contact does not require sharing yours.</p>
    <button type="button" className={socialPrimaryAction} onClick={onExchange}>Exchange Details</button>
    <button type="button" className={socialSecondaryAction} onClick={onDismiss}>Not Now</button>
    <p className={styles.exchangePrivacy}>Nothing is submitted here. You choose what to share through your own email app.</p>
  </div>

  return <form className={styles.exchangeForm} noValidate onSubmit={(event) => { event.preventDefault(); handoff() }} aria-describedby="exchange-privacy">
    <p id="exchange-privacy" className={styles.exchangePrivacy}>These fields stay in this page’s memory. Send My Details hands them to your email app; you review and send the message yourself. The website cannot confirm opening, sending, delivery, or contact import. No marketing enrollment.</p>
    {Object.keys(errors).length > 0 && <div ref={summary} tabIndex={-1} role="alert" className={styles.errorSummary}>
      <p>Check your details:</p>
      <ul>{(Object.keys(errors) as (keyof ExchangeDraft)[]).map(key => <li key={key}><a href={`#exchange-${key}`}>{errors[key]}</a></li>)}</ul>
    </div>}
    {(['name', 'email', 'phone', 'context'] as const).map(key => <div key={key} className={styles.field}>
      <label htmlFor={`exchange-${key}`}>{({ name: 'Name', email: 'Email', phone: 'Phone (optional)', context: 'Where we met / context (optional)' })[key]}</label>
      {key === 'context' ? <textarea id={`exchange-${key}`} rows={3} maxLength={600} value={draft[key]} onChange={event => change(key, event.target.value)} aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `exchange-${key}-error` : undefined} />
        : <input ref={key === 'name' ? nameInput : undefined} id={`exchange-${key}`} type={key === 'email' ? 'email' : key === 'phone' ? 'tel' : 'text'} autoComplete={key === 'name' ? 'name' : key === 'email' ? 'email' : 'tel'} required={key !== 'phone'} maxLength={key === 'name' ? 120 : key === 'email' ? 254 : 40} value={draft[key]} onChange={event => change(key, event.target.value)} aria-invalid={!!errors[key]} aria-describedby={errors[key] ? `exchange-${key}-error` : undefined} />}
      {errors[key] && <p id={`exchange-${key}-error`} className={styles.fieldError}>{errors[key]}</p>}
    </div>)}
    <div className={styles.exchangeActions}>
      <button type="submit" className={socialPrimaryAction}>Send My Details</button>
      <button type="button" className={socialSecondaryAction} onClick={copy}>Copy Details</button>
      <button type="button" className={socialSecondaryAction} onClick={clear}>Clear</button>
    </div>
    <p role="status" aria-atomic="true" className={styles.exchangePrivacy}>{notice}</p>
    {manual && <div className={styles.field}>
      <label htmlFor="exchange-copy">Details to copy into your email app</label>
      <textarea ref={text} id="exchange-copy" value={manual} readOnly rows={6} />
      <button type="button" className={socialSecondaryAction} onClick={() => { text.current?.focus(); text.current?.select() }}>Select Details</button>
    </div>}
    <p className={styles.exchangePrivacy}>Dismiss and return to keep editing. Clear removes these fields; closing or reloading the page discards them. Copying places details on your device’s clipboard.</p>
  </form>
}
