import { describe, expect, it } from 'vitest'
import { decisionCases, homepageContent, thoughtStream } from './homepage-content'

describe('homepage content governance', () => {
  it('routes every audience path to an existing homepage anchor contract', () => {
    expect(homepageContent.audiencePaths.every((path) => path.href.startsWith('#'))).toBe(true)
  })

  it('publishes no quantitative decision outcomes without evidence metadata', () => {
    for (const { project } of decisionCases) {
      for (const outcome of project.outcomes) {
        expect(outcome.value).toBeUndefined()
        expect(outcome.approved).toBe(true)
      }
    }
  })

  it('publishes only visible Thought Stream entries with valid ISO dates', () => {
    expect(thoughtStream.every((entry) => entry.visibility === 'public')).toBe(true)
    expect(thoughtStream.every((entry) => /^\d{4}-\d{2}-\d{2}$/.test(entry.publishedAt))).toBe(true)
  })
})
