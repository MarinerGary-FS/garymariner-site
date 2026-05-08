import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: 'https://www.marinernexus.com/about',
        permanent: false,
      },
      {
        source: '/services',
        destination: 'https://www.marinernexus.com/services',
        permanent: false,
      },
      {
        source: '/services/:path*',
        destination: 'https://www.marinernexus.com/services',
        permanent: false,
      },
      {
        source: '/case-studies',
        destination: 'https://www.marinernexus.com/case-studies',
        permanent: false,
      },
      {
        source: '/case-studies/:path*',
        destination: 'https://www.marinernexus.com/case-studies',
        permanent: false,
      },
    ]
  },
}

export default nextConfig
