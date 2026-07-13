import { describe, expect, it } from 'vitest'
import { createMetadata } from './metadata'

describe('createMetadata', () => {
  it('builds canonical metadata from a route path', () => {
    const metadata = createMetadata({ title: 'Architecture', path: '/architecture' })
    expect(metadata.alternates?.canonical).toBe('https://garymariner.com/architecture')
    expect(metadata.openGraph?.title).toBe('Architecture')
  })

  it('can exclude internal surfaces from indexing', () => {
    const metadata = createMetadata({ title: 'Foundation', path: '/foundation', noIndex: true })
    expect(metadata.robots).toEqual({ index: false, follow: false })
  })
})
