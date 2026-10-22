// Dedicated card keeps /social and its existing download asset unchanged.
const card = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'FN:Gary L. Mariner II',
  'N:Mariner;Gary;L.;II;',
  'ORG:Mariner Nexus',
  'TITLE:Systems Architect',
  'TEL;TYPE=CELL,VOICE:+14048041250',
  'EMAIL;TYPE=INTERNET,WORK:gary@marinernexus.com',
  'URL:https://www.garymariner.com/network',
  'END:VCARD',
  '',
].join('\r\n')

export function GET() {
  return new Response(card, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="Gary-Mariner.vcf"',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
