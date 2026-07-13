import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Newsreader } from 'next/font/google'
import Script from 'next/script'
import { EventTracker } from '@/components/analytics/EventTracker'
import { createMetadata } from '@/lib/metadata'
import '@/styles/tokens.css'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-newsreader',
  display: 'swap',
})

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = createMetadata({
  title: 'Gary L. Mariner II | Executive AI Systems Architect',
  description:
    'AI transformation consultant, digital ecosystem architect, and business automation strategist building AI workflow automation, nonprofit digital infrastructure, and conversion-ready systems from Atlanta.',
  keywords: [
    'Gary L. Mariner II',
    'AI Systems Architect',
    'AI transformation consultant',
    'digital ecosystem architect',
    'business automation strategist',
    'Mariner Nexus founder',
    'Atlanta AI systems consultant',
    'nonprofit digital infrastructure',
    'AI workflow automation',
  ],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}>
      <body className="bg-background text-white font-sans antialiased">
        <a className="gm-skip-link" href="#main-content">
          Skip to content
        </a>
        <EventTracker />
        <main id="main-content">{children}</main>
        {/* Cal.com embed — loaded after interactive, no layout impact */}
        <Script
          id="cal-embed"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function (C, A, L) {
                let p = function (a, ar) { a.q.push(ar); };
                let d = C.document;
                C.Cal = C.Cal || function () {
                  let cal = C.Cal;
                  let ar = arguments;
                  if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                  }
                  if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                      cal.ns[namespace] = cal.ns[namespace] || api;
                      p(cal.ns[namespace], ar);
                      p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                  }
                  p(cal, ar);
                };
              })(window, "https://app.cal.com/embed/embed.js", "init");
              Cal("init", { origin: "https://cal.com" });
            `,
          }}
        />
      </body>
    </html>
  )
}
