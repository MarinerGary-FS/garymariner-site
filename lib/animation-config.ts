export const animationConfig = {
  reveal: {
    duration: 900,
    delayStep: 90,
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
  environment: {
    driftDuration: 28000,
    gridDuration: 36000,
    lightDuration: 18000,
  },
  reducedMotion: {
    disableDrift: true,
    revealDuration: 1,
  },
} as const
