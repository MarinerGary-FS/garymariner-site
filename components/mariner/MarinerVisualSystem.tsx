'use client'

import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'

type MarinerVisualSystemProps = {
  children: ReactNode
  intensity?: 'subtle' | 'standard' | 'cinematic'
  showGrid?: boolean
  showOrbs?: boolean
}

export function MarinerVisualSystem({
  children,
  intensity = 'standard',
  showGrid = true,
  showOrbs = true,
}: MarinerVisualSystemProps) {
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const handleMove = (event: MouseEvent) => {
      const rect = root.getBoundingClientRect()
      const x = ((event.clientX - rect.left) / rect.width) * 100
      const y = ((event.clientY - rect.top) / rect.height) * 100

      root.style.setProperty('--cursor-x', `${x}%`)
      root.style.setProperty('--cursor-y', `${y}%`)
    }

    root.addEventListener('mousemove', handleMove)
    return () => root.removeEventListener('mousemove', handleMove)
  }, [])

  const opacity =
    intensity === 'subtle'
      ? 'opacity-40'
      : intensity === 'cinematic'
        ? 'opacity-100'
        : 'opacity-70'

  return (
    <section
      ref={rootRef}
      className="relative min-h-screen overflow-hidden bg-[#050505] text-[#f8fafc]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(59,130,246,0.28),transparent_36%),radial-gradient(circle_at_82%_78%,rgba(239,68,68,0.18),transparent_42%),radial-gradient(circle_at_50%_42%,rgba(212,175,55,0.08),transparent_32%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--cursor-x,50%)_var(--cursor-y,35%),rgba(255,255,255,0.08),transparent_24%)]" />

      {showGrid && (
        <div
          className={`absolute inset-0 ${opacity} bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]`}
        />
      )}

      {showOrbs && (
        <>
          <div className="absolute left-[8%] top-[18%] h-48 w-48 rounded-full bg-blue-500/10 blur-3xl motion-safe:animate-pulse" />
          <div className="absolute bottom-[12%] right-[10%] h-56 w-56 rounded-full bg-red-500/10 blur-3xl motion-safe:animate-pulse" />
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/5 blur-3xl" />
        </>
      )}

      <div className="relative z-10">{children}</div>
    </section>
  )
}
