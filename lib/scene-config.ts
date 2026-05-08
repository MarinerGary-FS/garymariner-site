import { copySystem } from '@/lib/copy-system'

export type SceneTone = 'entry' | 'translator' | 'systems' | 'human' | 'ecosystem' | 'invitation'

export type HomeScene = {
  id: SceneTone
  index: string
  label: string
  title: string
  statement: string
  body: string
  fragments: string[]
  density: 'low' | 'medium'
}

export const homeScenes: HomeScene[] = [
  {
    id: 'entry',
    index: '01',
    label: 'Entry into the system',
    title: 'Vision needs intelligent execution.',
    statement:
      'Executive intent, operational systems, AI adoption, and human movement need a shared architecture.',
    body:
      'This is the executive intelligence layer: a calm environment for translating complexity into systems that can actually move.',
    fragments: [
      'Systems shape culture.',
      'Infrastructure determines adaptability.',
      'Clarity changes behavior.',
    ],
    density: 'low',
  },
  {
    id: 'translator',
    index: '02',
    label: 'The translator',
    title: 'Between vision and execution is where transformation either lives or collapses.',
    statement:
      'The work is translation: executive priorities into operational architecture, AI potential into adoption, and complexity into shared clarity.',
    body:
      'Gary works in the gap between leadership, systems, people, and implementation so organizations can move without adding unnecessary overhead.',
    fragments: [
      'Executive intent -> operational execution',
      'Complexity -> clarity',
      'AI potential -> human adoption',
      'Vision -> system architecture',
    ],
    density: 'medium',
  },
  {
    id: 'systems',
    index: '03',
    label: 'Systems and infrastructure',
    title: 'Technology becomes valuable only when the organization can operationalize it.',
    statement:
      'The proof is not in tools. It is in the workflows, ownership, routing, measurement, and communication systems that make execution repeatable.',
    body:
      'Digital Harmony reduced live agent dependency by 70%, increased customer satisfaction by 90%, and grew monthly revenue from $75K to $130K through AI-assisted workflow design and multi-channel systems.',
    fragments: copySystem.proof.digitalHarmony.map((metric) => `${metric.value}|${metric.label}`),
    density: 'medium',
  },
  {
    id: 'human',
    index: '04',
    label: 'Human-centered transformation',
    title: 'Systems are only intelligent when they protect the people moving through them.',
    statement:
      'Operational clarity is not cold. The right system reduces friction, restores attention, and gives people a clearer way to participate.',
    body:
      'This is where technology, cultural leadership, community infrastructure, and emotional intelligence belong in the same conversation.',
    fragments: [
      'Technology should serve people.',
      'Community infrastructure matters.',
      'Transformation requires understanding.',
    ],
    density: 'low',
  },
  {
    id: 'ecosystem',
    index: '05',
    label: 'The ecosystem',
    title: 'The work expands through connected initiatives, not isolated channels.',
    statement:
      'GaryMariner.com is the executive intelligence layer. Mariner Nexus carries implementation depth. Undugu centers human systems. Black Relativity extends the strategic media signal.',
    body:
      'The ecosystem is designed to route attention intentionally: strategy here, execution depth at Mariner Nexus, community innovation through Undugu, and curated perspective through media.',
    fragments: ['Mariner Nexus', 'Undugu Foundation', 'Black Relativity'],
    density: 'medium',
  },
  {
    id: 'invitation',
    index: '06',
    label: 'Controlled invitation',
    title: 'If the vision is serious, the system around it has to be serious too.',
    statement:
      'Begin with the business problem. Map the friction. Build the architecture around the execution reality.',
    body:
      'For founders, operators, and organizations carrying too much complexity, the next move is a strategic conversation about alignment.',
    fragments: [copySystem.ctas.primary, copySystem.ctas.secondary],
    density: 'low',
  },
]
