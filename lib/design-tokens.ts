export const designTokens = {
  colors: {
    obsidian: '#05070A',
    graphite: '#11151B',
    carbon: '#171C23',
    steel: '#242B35',
    fog: '#A8B0BC',
    ivory: '#F3F1EC',
    softWhite: '#E8E6E1',
  },
  environment: {
    ambientBlue: 'rgba(60, 100, 255, 0.08)',
    ambientCyan: 'rgba(0, 180, 255, 0.06)',
    ambientGold: 'rgba(91, 127, 255, 0.05)',
    ambientCrimson: 'rgba(140, 40, 40, 0.04)',
  },
  accent: {
    sapphire: '#5B7FFF',
    cyan: '#58C4DD',
    gold: '#5B7FFF',
    ember: '#8F4D4D',
  },
  gradients: {
    atmosphericPrimary:
      'linear-gradient(180deg, rgba(5,7,10,1) 0%, rgba(17,21,27,1) 100%)',
    atmosphericOverlay:
      'radial-gradient(circle at top, rgba(91,127,255,0.10), transparent 60%)',
    ambientDepth:
      'linear-gradient(135deg, rgba(255,255,255,0.02), rgba(255,255,255,0))',
  },
  spacing: {
    sceneMobile: '8rem',
    sceneTablet: '10rem',
    sceneDesktop: '14rem',
    sceneCinematic: '18rem',
  },
  motion: {
    fast: '220ms',
    standard: '450ms',
    slow: '800ms',
    cinematic: '1400ms',
    atmospheric: '3000ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
} as const

export type DesignTokens = typeof designTokens
