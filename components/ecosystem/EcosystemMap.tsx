import Link from 'next/link'
import { ecosystemNodes } from '@/lib/ecosystem-config'
import { cn } from '@/lib/utils'

const accentClasses = {
  sapphire: 'border-[#5B7FFF]/28 text-[#9DB0FF] shadow-[0_0_60px_rgba(91,127,255,0.10)]',
  cyan: 'border-[#58C4DD]/28 text-[#9EE7F4] shadow-[0_0_60px_rgba(88,196,221,0.09)]',
  blue: 'border-[#5B7FFF]/24 text-[#B8C5FF] shadow-[0_0_60px_rgba(91,127,255,0.08)]',
  ember: 'border-[#8F4D4D]/30 text-[#D99A9A] shadow-[0_0_60px_rgba(143,77,77,0.08)]',
}

export function EcosystemMap() {
  return (
    <div className="relative mt-14 grid gap-4 lg:grid-cols-4">
      <div
        aria-hidden="true"
        className="absolute left-8 right-8 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-white/14 to-transparent lg:block"
      />
      {ecosystemNodes.map((node) => (
        <Link
          key={node.id}
          href={node.href}
          className={cn(
            'group relative min-h-64 overflow-hidden rounded-[20px] border bg-white/[0.035] p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-white/[0.055]',
            accentClasses[node.accent]
          )}
          {...(node.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <span className="mb-8 block h-2 w-2 rounded-full bg-current shadow-[0_0_24px_currentColor]" />
          <span className="mb-3 block text-xs uppercase tracking-[0.22em] text-white/38">
            {node.role}
          </span>
          <h3 className="font-display text-2xl font-semibold text-[#F3F1EC]">{node.name}</h3>
          <p className="mt-5 text-sm leading-6 text-white/58">{node.description}</p>
          <p className="mt-8 border-t border-white/10 pt-4 text-sm leading-6 text-current">
            {node.signal}
          </p>
        </Link>
      ))}
    </div>
  )
}
