import type { Metadata } from 'next'
import { NetworkingPortal } from '@/components/network/NetworkingPortal'

export const metadata: Metadata = {
  title: 'Gary L. Mariner II — Stay Connected',
  description:
    'Save Gary’s contact card, continue a conversation, or explore alignment with Mariner Nexus.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Gary L. Mariner II — Stay Connected',
    description:
      'Save Gary’s contact card and continue the conversation.',
    url: 'https://www.garymariner.com/network',
    siteName: 'Gary L. Mariner II',
    type: 'website',
    images: [{ url: '/og-image.png', width: 600, height: 600 }],
  },
}

export default function NetworkPage() {
  return <NetworkingPortal />
}
