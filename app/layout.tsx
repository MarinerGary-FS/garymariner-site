import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gary L. Mariner II — AI Systems Architect for Business Operations',
  description:
    'I help businesses replace operational complexity with smarter systems, modern infrastructure, and AI-assisted workflows that improve execution and reduce overhead. Based in Atlanta, GA.',
  openGraph: {
    title: 'Gary L. Mariner II — AI Systems Architect for Business Operations',
    description:
      'I help businesses replace operational complexity with smarter systems and AI-assisted infrastructure. Results driven by system design, not additional overhead.',
    url: 'https://garymariner.com',
    siteName: 'Gary L. Mariner II',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gary L. Mariner II — AI Systems Architect for Business Operations',
    description:
      'I help businesses replace operational complexity with smarter systems and AI-assisted infrastructure. Results driven by system design, not additional overhead.',
  },
  metadataBase: new URL('https://garymariner.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-background text-white font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
