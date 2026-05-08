import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Sans, Newsreader } from 'next/font/google'
import Script from 'next/script'
import { EventTracker } from '@/components/analytics/EventTracker'
import './globals.css'

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-newsreader',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gary L. Mariner II — AI Systems Architect',
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
  openGraph: {
    title: 'Gary L. Mariner II — AI Systems Architect',
    description:
      'AI workflow automation, digital infrastructure, and business operations architecture for modern organizations.',
    url: 'https://garymariner.com',
    siteName: 'Gary L. Mariner II',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 600,
        height: 600,
        alt: 'Gary L. Mariner II — AI Systems Architect for Business Operations',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Gary L. Mariner II — AI Systems Architect',
    description:
      'AI workflow automation, digital infrastructure, and business operations architecture for modern organizations.',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://garymariner.com'),
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${ibmPlexSans.variable}`}>
      <body className="bg-background text-white font-sans antialiased">
        <EventTracker />
        <main>{children}</main>
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
