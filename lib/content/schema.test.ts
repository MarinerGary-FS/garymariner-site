import { describe, expect, it } from 'vitest'
import { defineProject, defineThoughtStreamEntry, type Project } from './schema'

const project: Project = {
  slug: 'digital-harmony',
  title: 'Digital Harmony',
  summary: 'A decision-led transformation system.',
  status: 'completed',
  domains: ['operations'],
  audienceRelevance: ['executive'],
  problem: 'Fragmented systems.',
  context: 'Operational transformation.',
  constraints: ['Continuity'],
  decision: 'Create a governed operating layer.',
  tradeoffs: ['Phased delivery'],
  architecture: [],
  outcomes: [],
  lessons: ['Sequence infrastructure before automation.'],
  featured: true,
}

describe('content schema helpers', () => {
  it('accepts and freezes governed project content', () => {
    expect(Object.isFrozen(defineProject(project))).toBe(true)
  })

  it('rejects an ungoverned verified quantitative claim', () => {
    expect(() =>
      defineProject({
        ...project,
        outcomes: [
          {
            label: 'Efficiency',
            value: '40%',
            description: 'Reduced processing time.',
            evidenceStatus: 'verified',
            approved: false,
          },
        ],
      })
    ).toThrow(/requires a source, sourceDate, and approval/)
  })

  it('requires ISO dates for thought stream entries', () => {
    expect(() =>
      defineThoughtStreamEntry({
        id: 'systems-note',
        category: 'principle',
        title: 'Structure precedes scale.',
        publishedAt: 'July 13, 2026',
        visibility: 'draft',
      })
    ).toThrow(/ISO date/)
  })
})
