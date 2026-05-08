import Link from 'next/link'
import Image from 'next/image'
import { siteContent } from '@/lib/content'

export function Footer() {
  const { footer } = siteContent

  return (
    <footer className="border-t border-white/[0.08] bg-background px-5 py-10 md:px-8 md:py-14 lg:px-10">
      <div className="max-w-site mx-auto">
        <div className="liquid-glass rounded-lg px-5 py-5 md:px-6 md:py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/glm-signature.png"
              alt="Gary L. Mariner II"
              width={56}
              height={56}
              className="rounded-xl shrink-0 ring-1 ring-sapphire/25 shadow-[0_0_18px_rgba(91,127,255,0.16)] [filter:hue-rotate(185deg)_saturate(1.35)_brightness(1.08)]"
            />
            <div className="flex flex-col gap-1.5">
              <span className="font-display font-bold text-sm text-white tracking-tight">
                Gary L. Mariner II
              </span>
              <span className="text-xs text-white/40 font-sans tracking-wide">
                {footer.tagline}
              </span>
              <span className="text-xs text-white/25 font-sans tracking-wide mt-0.5">
                {footer.location}&nbsp;&middot;&nbsp;
                <a
                  href={`mailto:${footer.email}`}
                  className="hover:text-white/45 transition-colors duration-200"
                >
                  {footer.email}
                </a>
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-4">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="text-xs font-sans text-white/60 hover:text-white/80 transition-colors duration-200 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            {footer.social.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-sans text-white/40 hover:text-cyan transition-colors duration-200 tracking-wide"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider + Legal */}
        <div className="divider mt-6 mb-4" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs font-sans text-white/25 tracking-wide">{footer.legal}</p>
          <a
            href="https://marinernexus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-sans text-white/15 hover:text-white/35 transition-colors duration-200 tracking-[0.08em]"
          >
            Built by Mariner Nexus
          </a>
        </div>
        </div>
      </div>
    </footer>
  )
}
