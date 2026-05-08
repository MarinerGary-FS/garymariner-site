import type { Metadata } from 'next'
import { NetworkingPortal } from '@/components/network/NetworkingPortal'

export const metadata: Metadata = {
  title: 'Gary L. Mariner II — Networking Gateway',
  description:
    'A private networking gateway for Gary L. Mariner II with curated ecosystem links and a vCard download.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Gary L. Mariner II — Networking Gateway',
    description:
      'Curated networking context and ecosystem links for Gary L. Mariner II.',
    url: 'https://www.garymariner.com/network',
    siteName: 'Gary L. Mariner II',
    type: 'website',
    images: [{ url: '/og-image.png', width: 600, height: 600 }],
  },
}

export default function NetworkPage() {
  return <NetworkingPortal />
}
