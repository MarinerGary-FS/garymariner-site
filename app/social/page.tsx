import type { Metadata } from 'next'
import { SocialContactCard } from './SocialContactCard'

export const metadata: Metadata = {
  title: 'Gary L. Mariner II — Digital Contact Card',
  description:
    'Save Gary L. Mariner II’s contact information, connect with Mariner Nexus, and book a consultation.',
  openGraph: {
    title: 'Gary L. Mariner II — Digital Contact Card',
    description:
      'Save Gary L. Mariner II’s contact information, connect with Mariner Nexus, and book a consultation.',
    url: 'https://www.garymariner.com/social',
    siteName: 'Gary L. Mariner II',
    type: 'website',
    images: [{ url: '/og-image.png', width: 600, height: 600 }],
  },
}

export default function SocialPage() {
  return <SocialContactCard />
}
