import { describe, expect, it, vi } from 'vitest'
import { networkUrl, shareNetworkLink } from '../../../../components/network/NetworkingPortal'

describe('network sharing browser outcomes', () => {
  it('uses native sharing without a second clipboard operation', async () => {
    const share = vi.fn().mockResolvedValue(undefined)
    const writeText = vi.fn()
    expect(await shareNetworkLink({ share, writeText })).toBe('native')
    expect(share).toHaveBeenCalledWith({ title: 'Gary L. Mariner II', url: networkUrl })
    expect(writeText).not.toHaveBeenCalled()
  })

  it('keeps native cancellation quiet without copying', async () => {
    const writeText = vi.fn()
    expect(await shareNetworkLink({ share: vi.fn().mockRejectedValue(new DOMException('Cancelled', 'AbortError')), writeText })).toBe('cancelled')
    expect(writeText).not.toHaveBeenCalled()
  })

  it('offers manual recovery after native failure rather than silently copying', async () => {
    const writeText = vi.fn()
    expect(await shareNetworkLink({ share: vi.fn().mockRejectedValue(new Error('Blocked')), writeText })).toBe('manual')
    expect(writeText).not.toHaveBeenCalled()
  })

  it('copies the exact public URL when native sharing is absent', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    expect(await shareNetworkLink({ writeText })).toBe('copied')
    expect(writeText).toHaveBeenCalledWith('https://www.garymariner.com/network')
  })

  it('does not claim copy success before the write completes', async () => {
    let finish!: () => void
    const write = new Promise<void>((resolve) => { finish = resolve })
    let observed: string | undefined
    const pending = shareNetworkLink({ writeText: () => write }).then((result) => { observed = result })
    await Promise.resolve()
    expect(observed).toBeUndefined()
    finish()
    await pending
    expect(observed).toBe('copied')
  })

  it('offers manual recovery for denied or aborted clipboard writes', async () => {
    for (const error of [new DOMException('Denied', 'NotAllowedError'), new DOMException('Aborted', 'AbortError')]) {
      expect(await shareNetworkLink({ writeText: vi.fn().mockRejectedValue(error) })).toBe('manual')
    }
  })

  it('works without either browser API', async () => {
    expect(await shareNetworkLink({})).toBe('manual')
  })
})
