'use client'

import { useEffect, useState } from 'react'

export function MotionPreviewToggle() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    return () => {
      delete document.documentElement.dataset.motion
    }
  }, [])

  const toggleMotion = () => {
    const next = !reduced
    setReduced(next)
    document.documentElement.dataset.motion = next ? 'reduce' : 'full'
  }

  return (
    <button
      type="button"
      aria-pressed={reduced}
      onClick={toggleMotion}
      className="gm-interactive inline-flex min-h-12 items-center gap-3 rounded-md border border-white/15 px-4 text-sm font-semibold text-white hover:bg-white/5"
    >
      <span
        aria-hidden="true"
        className={`h-2.5 w-2.5 rounded-full ${reduced ? 'bg-gold' : 'bg-emerald-300'}`}
      />
      Motion: {reduced ? 'reduced' : 'full'}
    </button>
  )
}
