export const audiencePaths = ['founder', 'executive', 'partner', 'community', 'technical'] as const
export type AudiencePath = (typeof audiencePaths)[number]

export const evidenceStatuses = ['verified', 'qualitative', 'placeholder'] as const
export type EvidenceStatus = (typeof evidenceStatuses)[number]

export interface Outcome {
  label: string
  value?: string
  description: string
  evidenceStatus: EvidenceStatus
  source?: string
  sourceDate?: string
  approved: boolean
}

export interface ArchitectureNode {
  id: string
  label: string
  description: string
  connections: string[]
}

export interface Project {
  slug: string
  title: string
  summary: string
  status: 'active' | 'completed' | 'concept'
  domains: string[]
  audienceRelevance: AudiencePath[]
  problem: string
  context: string
  constraints: string[]
  decision: string
  tradeoffs: string[]
  architecture: ArchitectureNode[]
  outcomes: Outcome[]
  lessons: string[]
  featured: boolean
}

export interface ThoughtStreamEntry {
  id: string
  category: 'researching' | 'building' | 'solved' | 'question' | 'principle'
  title: string
  summary?: string
  publishedAt: string
  relatedProjectSlugs?: string[]
  visibility: 'public' | 'draft'
}

function assertNonEmpty(value: string, field: string): void {
  if (!value.trim()) throw new Error(`${field} must not be empty`)
}

function assertIsoDate(value: string, field: string): void {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value) || Number.isNaN(Date.parse(`${value}T00:00:00Z`))) {
    throw new Error(`${field} must be an ISO date in YYYY-MM-DD format`)
  }
}

export function defineProject(project: Project): Project {
  assertNonEmpty(project.slug, 'project.slug')
  assertNonEmpty(project.title, 'project.title')
  assertNonEmpty(project.summary, 'project.summary')
  assertNonEmpty(project.decision, 'project.decision')

  for (const outcome of project.outcomes) {
    assertNonEmpty(outcome.label, 'outcome.label')
    assertNonEmpty(outcome.description, 'outcome.description')

    if (outcome.value && outcome.evidenceStatus === 'verified') {
      if (!outcome.source || !outcome.sourceDate || !outcome.approved) {
        throw new Error(
          `Verified quantitative outcome "${outcome.label}" requires a source, sourceDate, and approval`
        )
      }
      assertIsoDate(outcome.sourceDate, 'outcome.sourceDate')
    }
  }

  return Object.freeze(project)
}

export function defineThoughtStreamEntry(entry: ThoughtStreamEntry): ThoughtStreamEntry {
  assertNonEmpty(entry.id, 'thought.id')
  assertNonEmpty(entry.title, 'thought.title')
  assertIsoDate(entry.publishedAt, 'thought.publishedAt')
  return Object.freeze(entry)
}
