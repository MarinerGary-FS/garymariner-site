import { defineProject, defineThoughtStreamEntry } from './content/schema'

export const homepageContent = {
  hero: {
    identity: 'Gary L. Mariner II',
    role: 'Executive AI Transformation Leader · Systems Architect · Founder',
    signal: 'I architect intelligent systems for businesses, communities, and ideas built to outlive the moment.',
    supporting:
      'Founder and CTO of Mariner Nexus. Systems architect. Communications strategist. Builder of scalable digital ecosystems.',
  },
  audiencePaths: [
    {
      id: 'founder',
      label: 'Building a business',
      context: 'Move from fragmented operations to a coherent execution system.',
      href: '#systems',
    },
    {
      id: 'executive',
      label: 'Evaluating leadership',
      context: 'Examine judgment, operating range, and transformation depth.',
      href: '#decisions',
    },
    {
      id: 'partner',
      label: 'Exploring partnership',
      context: 'Understand the ventures, relationships, and ecosystem direction.',
      href: '#nexus',
    },
    {
      id: 'community',
      label: 'Advancing a community',
      context: 'Connect technology, culture, service, and durable infrastructure.',
      href: '#legacy',
    },
    {
      id: 'technical',
      label: 'Understanding the work',
      context: 'Inspect the architecture behind strategy and implementation.',
      href: '#intelligence',
    },
  ],
  command: {
    focus: 'Translating ambitious vision into intelligent execution.',
    principle: 'Strategy before tools. Systems in service of people.',
    question: 'What must become clearer before technology can create leverage?',
    domains: ['AI transformation', 'Operational systems', 'Digital ecosystems', 'Organizational clarity'],
  },
  systems: [
    {
      id: 'vision',
      label: 'Executive vision',
      description: 'Define the outcome, constraints, and decisions that matter.',
    },
    {
      id: 'architecture',
      label: 'System architecture',
      description: 'Connect workflows, data, ownership, and digital infrastructure.',
    },
    {
      id: 'adoption',
      label: 'Human adoption',
      description: 'Design for the people responsible for making the system real.',
    },
    {
      id: 'execution',
      label: 'Intelligent execution',
      description: 'Create repeatable movement, measurement, and accountability.',
    },
  ],
  legacy: {
    title: 'Technology is only one layer of the work.',
    statement:
      'Leadership, ancestry, communications, culture, community service, and systems thinking belong in the same architecture.',
    body:
      'The objective is not automation for its own sake. It is infrastructure that protects attention, expands participation, and gives people a clearer way to move together.',
    principles: ['Human dignity', 'Cultural intelligence', 'Community infrastructure', 'Long-term stewardship'],
  },
  inquiry: {
    title: 'Serious vision requires serious architecture.',
    body:
      'Begin with the business problem. Map the friction. Build around the execution reality.',
  },
} as const

export const decisionCases = [
  {
    label: 'Customer operations',
    href: 'https://www.marinernexus.com/case-studies',
    project: defineProject({
      slug: 'digital-harmony',
      title: 'Digital Harmony',
      summary: 'A global customer operation redesigned around connected workflows and AI-assisted support.',
      status: 'completed',
      domains: ['AI workflows', 'Customer operations', 'Analytics'],
      audienceRelevance: ['founder', 'executive', 'technical'],
      problem: 'Disconnected support paths created friction across regions, channels, and handoffs.',
      context: 'Customer support required a system that could scale without losing clarity or service quality.',
      constraints: ['Multi-channel operations', 'Distributed teams', 'Service continuity'],
      decision: 'Redesign the operating layer before expanding automation.',
      tradeoffs: ['Phased workflow change', 'Governance before speed'],
      architecture: [],
      outcomes: [
        {
          label: 'Operational result',
          description: 'A leaner support model with clearer routing, faster response paths, and stronger visibility.',
          evidenceStatus: 'qualitative',
          approved: true,
        },
      ],
      lessons: ['The leverage came from connected systems, not isolated tools.'],
      featured: true,
    }),
  },
  {
    label: 'Property operations',
    href: 'https://www.marinernexus.com/case-studies',
    project: defineProject({
      slug: 'radco',
      title: 'Radco',
      summary: 'Operational restructuring across occupancy, maintenance, ownership, and reporting workflows.',
      status: 'completed',
      domains: ['Operations', 'Property systems', 'Accountability'],
      audienceRelevance: ['founder', 'executive'],
      problem: 'Operational backlog and unclear ownership limited visibility and consistent execution.',
      context: 'Property operations needed a clearer relationship between frontline work and leadership decisions.',
      constraints: ['Active portfolio operations', 'Service continuity', 'Cross-team coordination'],
      decision: 'Clarify ownership and redesign the operating rhythm around visible work.',
      tradeoffs: ['Immediate triage alongside structural change'],
      architecture: [],
      outcomes: [
        {
          label: 'Operational result',
          description: 'Stronger execution visibility, clearer maintenance ownership, and improved operating discipline.',
          evidenceStatus: 'qualitative',
          approved: true,
        },
      ],
      lessons: ['Operational clarity changes both performance and culture.'],
      featured: true,
    }),
  },
  {
    label: 'Community infrastructure',
    href: 'https://www.undugu.org/',
    project: defineProject({
      slug: 'undugu-digital-ecosystem',
      title: 'Undugu Foundation',
      summary: 'A digital ecosystem connecting engagement, events, giving, outreach, and community action.',
      status: 'active',
      domains: ['Nonprofit systems', 'Community engagement', 'Digital infrastructure'],
      audienceRelevance: ['community', 'partner', 'technical'],
      problem: 'Community pathways needed clearer intake, event, giving, and communication infrastructure.',
      context: 'Technology needed to support service and participation without eclipsing the human mission.',
      constraints: ['Nonprofit capacity', 'Accessible participation', 'Mission alignment'],
      decision: 'Build one connected engagement layer around the community journey.',
      tradeoffs: ['Prioritize maintainable infrastructure over feature volume'],
      architecture: [],
      outcomes: [
        {
          label: 'Infrastructure result',
          description: 'A clearer platform for events, giving, outreach, and organizational coordination.',
          evidenceStatus: 'qualitative',
          approved: true,
        },
      ],
      lessons: ['Technology creates value when it strengthens participation.'],
      featured: true,
    }),
  },
] as const

export const thoughtStream = [
  defineThoughtStreamEntry({
    id: 'operational-friction',
    category: 'researching',
    title: 'How AI exposes the operational friction organizations have learned to tolerate.',
    summary: 'The tool is rarely the first problem. Workflow, ownership, and communication usually are.',
    publishedAt: '2026-07-13',
    visibility: 'public',
  }),
  defineThoughtStreamEntry({
    id: 'structure-before-tools',
    category: 'principle',
    title: 'Structure before tools.',
    summary: 'Technology should serve a clear operating decision, not become the decision.',
    publishedAt: '2026-07-13',
    visibility: 'public',
  }),
  defineThoughtStreamEntry({
    id: 'systems-serve-people',
    category: 'building',
    title: 'Systems that reduce friction without reducing humanity.',
    summary: 'The most intelligent infrastructure protects attention and expands meaningful participation.',
    publishedAt: '2026-07-13',
    visibility: 'public',
  }),
  defineThoughtStreamEntry({
    id: 'human-judgment',
    category: 'question',
    title: 'What must remain human as systems scale?',
    summary: 'Judgment, context, trust, and accountability cannot be treated as implementation details.',
    publishedAt: '2026-07-13',
    visibility: 'public',
  }),
] as const
