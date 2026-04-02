import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import Script from 'next/script'
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
