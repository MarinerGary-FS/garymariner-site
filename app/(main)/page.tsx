import type { Metadata } from 'next'
import { HomeExperience } from '@/components/experience/HomeExperience'

export const metadata: Metadata = {
  title: 'Gary L. Mariner II — Executive AI Systems Architecture',
  description:
    'An executive intelligence environment for AI transformation, systems architecture, operational clarity, and human-centered execution.',
}

export default function HomePage() {
  return <HomeExperience />
}
