import { describe, expect, it } from 'vitest'
import { GET } from '../app/network/gary-mariner.vcf/route'

describe('network contact download', () => {
  it('serves an importable CRLF-delimited card as a named attachment', async () => {
    const response = GET()
    const body = await response.text()
    expect(response.headers.get('content-type')).toBe('text/vcard; charset=utf-8')
    expect(response.headers.get('content-disposition')).toContain('attachment; filename="Gary-Mariner.vcf"')
    expect(body.startsWith('BEGIN:VCARD\r\nVERSION:3.0\r\n')).toBe(true)
    expect(body.endsWith('END:VCARD\r\n')).toBe(true)
    expect(body.replaceAll('\r\n', '')).not.toContain('\n')
    expect(body).toContain('N:Mariner;Gary;L.;II;\r\n')
    expect(body).toContain('TEL;TYPE=CELL,VOICE:+14048041250\r\n')
    expect(body).toContain('EMAIL;TYPE=INTERNET,WORK:gary@marinernexus.com\r\n')
    expect(body).not.toMatch(/undugu|tiktok|instagram/i)
    expect(body.split('\r\n').every(line => Buffer.byteLength(line) <= 75)).toBe(true)
  })
})
