'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

export function EventTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const tracked = target?.closest<HTMLElement>('[data-track-event]')
      if (!tracked) return

      trackEvent({
        event: tracked.dataset.trackEvent ?? 'site_click',
        label: tracked.dataset.trackLabel,
        href: tracked.dataset.trackHref ?? tracked.getAttribute('href') ?? undefined,
      })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
