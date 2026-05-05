import type { Metadata } from 'next'
import { SocialPortal } from '@/components/social/SocialPortal'

export const metadata: Metadata = {
  title: 'Gary L. Mariner II — AI Systems Architect',
  description:
    'Enter the system. Gary L. Mariner II builds cinematic, high-performance digital ecosystems for brands, businesses, and individuals ready to scale.',
  openGraph: {
    title: 'Gary L. Mariner II — AI Systems Architect',
    description:
      'A cinematic command-entry portal into Gary L. Mariner II’s ecosystem.',
    url: 'https://www.garymariner.com/social',
    siteName: 'Gary L. Mariner II',
    type: 'website',
    images: [{ url: '/og-image.png', width: 600, height: 600 }],
  },
}

export default function SocialPage() {
  return <SocialPortal />
}
