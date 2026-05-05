import type { ReactNode } from 'react'

export function MarinerCommandCard({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.035))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[18px] sm:p-6">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute -inset-1 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_42%)]" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
