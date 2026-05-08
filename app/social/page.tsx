import type { Metadata } from 'next'
import { SocialPortal } from '@/components/social/SocialPortal'

export const metadata: Metadata = {
  title: 'Gary L. Mariner II — Executive Ecosystem Gateway',
  description:
    'A controlled ecosystem entry point for Gary L. Mariner II: executive AI transformation, systems architecture, implementation depth, and human-centered impact.',
  openGraph: {
    title: 'Gary L. Mariner II — Executive Ecosystem Gateway',
    description:
      'A cinematic, executive entry point into Gary L. Mariner II’s connected ecosystem.',
    url: 'https://www.garymariner.com/social',
    siteName: 'Gary L. Mariner II',
    type: 'website',
    images: [{ url: '/og-image.png', width: 600, height: 600 }],
  },
}

export default function SocialPage() {
  return <SocialPortal />
}
