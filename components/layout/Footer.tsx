import Link from 'next/link'
import Image from 'next/image'
import { siteContent } from '@/lib/content'

export function Footer() {
  const { footer } = siteContent

  return (
    <footer className="border-t border-border px-6 md:px-10 lg:px-16 py-12">
      <div className="max-w-site mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/glm-signature.png"
              alt="Gary L. Mariner II"
              width={56}
              height={56}
              className="rounded-xl shrink-0 ring-1 ring-gold/25 shadow-[0_0_18px_rgba(201,168,76,0.16)]"
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
          <nav className="flex flex-wrap gap-6">
            {footer.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-sans text-white/40 hover:text-white/70 transition-colors duration-200 tracking-wide"
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
                className="text-xs font-sans text-white/40 hover:text-gold transition-colors duration-200 tracking-wide"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider + Legal */}
        <div className="divider mt-8 mb-6" />
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
    </footer>
  )
}
