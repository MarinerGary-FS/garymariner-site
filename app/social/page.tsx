import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Gary L. Mariner II — Connect',
  description:
    'AI Transformation & Communications Leader. Bridging AI, People, and Operations.',
  openGraph: {
    title: 'Gary L. Mariner II — Connect',
    description:
      'AI Transformation & Communications Leader. Bridging AI, People, and Operations.',
    url: 'https://garymariner.com/social',
    siteName: 'Gary L. Mariner II',
    type: 'website',
    images: [{ url: '/og-image.png', width: 600, height: 600 }],
  },
}

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const actions = [
  {
    label: 'Explore My Work',
    href: '/',
    description: 'Full portfolio & case studies',
  },
  {
    label: 'Start a Conversation',
    href: 'mailto:gary.mariner@gmail.com',
    description: 'Direct to my inbox',
  },
  {
    label: 'Book a 15-Minute Intro',
    href: 'https://cal.com/garymariner/strategy-call',
    description: 'Quick strategy chat',
    external: true,
  },
]

const featuredLinks = [
  {
    label: 'Digital Harmony Case Study',
    description: 'How AI-driven systems scaled customer ops and grew revenue 73%',
    href: '/case-studies',
    tag: 'Case Study',
  },
  {
    label: 'AI Systems Strategy',
    description: 'Aligning business goals with practical AI-assisted systems',
    href: '/services#ai-systems',
    tag: 'Service',
  },
  {
    label: 'Undugu Society',
    description: 'Supporting street children & youth empowerment in Nairobi',
    href: 'https://undugu.org',
    tag: 'Impact',
    external: true,
  },
]

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/gary-mariner-ii/',
    icon: LinkedInIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/theleodynasty/',
    icon: InstagramIcon,
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@theleodynasty',
    icon: TikTokIcon,
  },
  {
    label: 'Email',
    href: 'mailto:gary.mariner@gmail.com',
    icon: EmailIcon,
  },
]

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SocialPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-background overflow-hidden">
      {/* Background crest watermark */}
      <div className="absolute inset-0 pointer-events-none select-none flex items-center justify-center">
        <div className="relative w-[600px] h-[600px] opacity-[0.03]">
          <Image
            src="/images/family-crest.jpg"
            alt=""
            fill
            className="object-contain"
            aria-hidden
          />
        </div>
      </div>

      {/* Ambient gold glow */}
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-gold/[0.03] blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative w-full max-w-md mx-auto px-6 py-14 sm:py-20 flex flex-col items-center">

        {/* ---- Hero Profile ---- */}
        <div
          className="flex flex-col items-center text-center mb-12"
          style={{ animation: 'fadeUp 0.7s ease 0.05s both' }}
        >
          {/* Profile image with gold ring + glow */}
          <div className="relative mb-7">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-gold/35 via-gold/15 to-gold/35 blur-md" />
            <div className="relative w-[7.5rem] h-[7.5rem] rounded-full overflow-hidden ring-2 ring-gold/40 shadow-[0_0_40px_rgba(201,168,76,0.12)]">
              <Image
                src="/images/gary-portrait.jpg"
                alt="Gary L. Mariner II"
                fill
                className="object-cover object-[center_15%]"
                priority
                sizes="120px"
              />
            </div>
          </div>

          {/* GLM Signature mark */}
          <div className="mb-5">
            <Image
              src="/images/glm-signature.png"
              alt=""
              width={28}
              height={28}
              className="opacity-30"
              aria-hidden
            />
          </div>

          <h1 className="font-display font-bold text-display-md text-white mb-2.5">
            Gary L. Mariner II
          </h1>
          <p className="font-sans text-sm font-medium text-gold/90 tracking-wide">
            AI Transformation & Communications Leader
          </p>
          <p className="font-sans text-xs text-white/40 mt-2 tracking-wide">
            Bridging AI, People, and Operations
          </p>
        </div>

        {/* ---- Divider ---- */}
        <div
          className="divider-gold w-full mb-10"
          style={{ animation: 'fadeIn 0.6s ease 0.3s both' }}
        />

        {/* ---- Primary Action Buttons ---- */}
        <div
          className="w-full flex flex-col gap-3.5 mb-14"
          style={{ animation: 'fadeUp 0.7s ease 0.35s both' }}
        >
          {actions.map((action) => (
            <ActionButton key={action.label} {...action} />
          ))}
        </div>

        {/* ---- Featured Links ---- */}
        <Reveal className="w-full mb-14">
          <p className="text-[10px] font-sans font-medium text-white/25 uppercase tracking-[0.2em] mb-5">
            Featured
          </p>
          <div className="flex flex-col gap-3">
            {featuredLinks.map((link) => (
              <FeaturedCard key={link.label} {...link} />
            ))}
          </div>
        </Reveal>

        {/* ---- Social Icons ---- */}
        <Reveal className="flex items-center gap-6 mb-16" delay={100}>
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="group flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white/45 transition-all duration-200 hover:border-gold/40 hover:text-gold hover:shadow-[0_0_20px_rgba(201,168,76,0.10)]"
            >
              <social.icon className="w-[18px] h-[18px]" />
            </Link>
          ))}
        </Reveal>

        {/* ---- Footer ---- */}
        <Reveal className="flex flex-col items-center gap-2" delay={200}>
          <p className="text-[11px] font-sans text-white/20 tracking-wide">
            &copy; {new Date().getFullYear()} Gary L. Mariner II
          </p>
          <a
            href="https://marinernexus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[9px] font-sans text-white/10 hover:text-white/25 transition-colors duration-200 tracking-[0.1em]"
          >
            Built by Mariner Nexus
          </a>
        </Reveal>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Components                                                         */
/* ------------------------------------------------------------------ */

function ActionButton({
  label,
  href,
  description,
  external,
}: {
  label: string
  href: string
  description: string
  external?: boolean
}) {
  const linkProps = external
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  return (
    <Link
      href={href}
      {...linkProps}
      className="group relative w-full flex items-center justify-between px-6 py-5 rounded-xl border border-white/10 bg-[#111111]/70 backdrop-blur-sm transition-all duration-200 hover:border-gold/25 hover:bg-[#161616]/80 hover:shadow-[0_0_28px_rgba(201,168,76,0.06)] active:scale-[0.99]"
    >
      <div className="flex flex-col gap-1">
        <span className="font-sans font-semibold text-[15px] text-white tracking-tight group-hover:text-gold-light transition-colors duration-200">
          {label}
        </span>
        <span className="font-sans text-[11px] text-white/30">
          {description}
        </span>
      </div>
      <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-gold/50 transition-all duration-200 group-hover:translate-x-0.5 shrink-0 ml-3" />
    </Link>
  )
}

function FeaturedCard({
  label,
  description,
  href,
  tag,
  external,
}: {
  label: string
  description: string
  href: string
  tag: string
  external?: boolean
}) {
  const linkProps = external
    ? { target: '_blank' as const, rel: 'noopener noreferrer' }
    : {}

  return (
    <Link
      href={href}
      {...linkProps}
      className="group relative w-full flex flex-col gap-2.5 px-5 py-4.5 rounded-xl border border-white/[0.06] bg-[#0D0D0D]/60 transition-all duration-200 hover:border-white/10 hover:bg-[#111111]/50"
    >
      {/* Tag */}
      <span className="inline-flex self-start px-2.5 py-0.5 rounded text-[9px] font-sans font-medium text-gold/60 bg-gold/[0.06] uppercase tracking-[0.14em]">
        {tag}
      </span>
      <p className="font-sans text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200">
        {label}
      </p>
      <p className="font-sans text-[11px] text-white/30 leading-relaxed">
        {description}
      </p>
    </Link>
  )
}

/* ------------------------------------------------------------------ */
/*  Icons                                                              */
/* ------------------------------------------------------------------ */

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4l4 4-4 4" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.48v-7.15a8.16 8.16 0 005.58 2.18v-3.45a4.85 4.85 0 01-1.99-.43l-.01-.01v-.13z" />
    </svg>
  )
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4l-10 8L2 4" />
    </svg>
  )
}
