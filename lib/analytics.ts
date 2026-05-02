export type AnalyticsPayload = {
  event: string
  label?: string
  href?: string
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent({ event, label, href }: AnalyticsPayload) {
  if (typeof window === 'undefined') return

  window.gtag?.('event', event, {
    event_category: 'authority_engine',
    event_label: label,
    link_url: href,
  })
}
