export function IdentityBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="social-mesh absolute inset-0" />
      <div className="social-grid absolute inset-0" />
      <div className="social-particles absolute inset-0" />
      <div className="absolute left-1/2 top-[18%] h-72 w-72 -translate-x-1/2 rounded-full border border-white/[0.055] bg-white/[0.015] shadow-[0_0_120px_rgba(148,163,184,0.12)] sm:h-[28rem] sm:w-[28rem]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.18)_48%,rgba(0,0,0,0.82)_100%)]" />
    </div>
  )
}
