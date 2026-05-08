export type EcosystemNode = {
  id: string
  name: string
  role: string
  description: string
  href: string
  signal: string
  accent: 'sapphire' | 'cyan' | 'blue' | 'ember'
}

export const ecosystemNodes: EcosystemNode[] = [
  {
    id: 'gary-mariner',
    name: 'GaryMariner.com',
    role: 'Executive intelligence layer',
    description:
      'The strategic surface for systems thinking, transformation leadership, and executive translation.',
    href: '/',
    signal: 'Vision into intelligent execution',
    accent: 'sapphire',
  },
  {
    id: 'mariner-nexus',
    name: 'Mariner Nexus',
    role: 'Execution infrastructure',
    description:
      'The implementation layer for AI systems, digital infrastructure, workflow architecture, and case-study depth.',
    href: 'https://www.marinernexus.com/',
    signal: 'Where architecture becomes operational',
    accent: 'cyan',
  },
  {
    id: 'undugu',
    name: 'Undugu Foundation',
    role: 'Human systems and community innovation',
    description:
      'A nonprofit innovation platform connecting culture, community, technology, and practical infrastructure.',
    href: 'https://www.undugu.org/',
    signal: 'Technology in service of people',
    accent: 'blue',
  },
  {
    id: 'black-relativity',
    name: 'Black Relativity',
    role: 'Media and cultural intelligence',
    description:
      'A curated media signal for ideas at the intersection of culture, systems, technology, and future-building.',
    href: '/social',
    signal: 'Strategic perspective, not content noise',
    accent: 'ember',
  },
]
