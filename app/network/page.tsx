import type { Metadata } from 'next'
import { NetworkingPortal } from '@/components/network/NetworkingPortal'

export const metadata: Metadata = {
  title: 'Gary L. Mariner II — Contact Card',
  description:
    'A private networking contact card for Gary L. Mariner II with direct contact details, ecosystem links, and vCard download.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Gary L. Mariner II — Contact Card',
    description:
      'Direct contact details and ecosystem links for Gary L. Mariner II.',
    url: 'https://www.garymariner.com/network',
    siteName: 'Gary L. Mariner II',
    type: 'website',
    images: [{ url: '/og-image.png', width: 600, height: 600 }],
  },
}

export default function NetworkPage() {
  return <NetworkingPortal />
}
