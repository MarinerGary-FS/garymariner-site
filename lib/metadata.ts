import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Gary L. Mariner II',
  url: 'https://garymariner.com',
  defaultDescription:
    'Executive AI transformation, systems architecture, and human-centered digital infrastructure.',
  socialImage: {
    path: '/og-image.png',
    width: 600,
    height: 600,
    alt: 'Gary L. Mariner II, Executive AI Systems Architect',
  },
} as const

interface MetadataOptions {
  title: string
  description?: string
  path?: `/${string}` | '/'
  keywords?: string[]
  image?: string
  noIndex?: boolean
}

export function createMetadata({
  title,
  description = siteConfig.defaultDescription,
  path = '/',
  keywords,
  image = siteConfig.socialImage.path,
  noIndex = false,
}: MetadataOptions): Metadata {
  const canonical = new URL(path, siteConfig.url).toString()

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords,
    alternates: { canonical },
    robots: noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: 'website',
      images: [
        {
          url: image,
          width: siteConfig.socialImage.width,
          height: siteConfig.socialImage.height,
          alt: siteConfig.socialImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary',
      title,
      description,
      images: [image],
    },
  }
}
