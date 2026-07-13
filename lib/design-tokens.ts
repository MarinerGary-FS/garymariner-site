export const designTokens = {
  colors: {
    void: 'var(--gm-bg-void)',
    graphite: 'var(--gm-bg-graphite)',
    elevated: 'var(--gm-bg-elevated)',
    primaryText: 'var(--gm-text-primary)',
    secondaryText: 'var(--gm-text-secondary)',
    mutedText: 'var(--gm-text-muted)',
  },
  accent: {
    sapphire: 'var(--gm-sapphire)',
    cyan: 'var(--gm-cyan)',
    gold: 'var(--gm-gold)',
    emerald: 'var(--gm-emerald)',
  },
  typography: {
    display: 'var(--gm-font-display)',
    body: 'var(--gm-font-body)',
    mono: 'var(--gm-font-mono)',
    editorial: 'var(--gm-font-editorial)',
  },
  layout: {
    container: 'var(--gm-container-max)',
    reading: 'var(--gm-reading-max)',
    gutter: 'var(--gm-page-gutter)',
    gridGap: 'var(--gm-grid-gap)',
  },
  motion: {
    micro: 'var(--gm-duration-micro)',
    module: 'var(--gm-duration-module)',
    reveal: 'var(--gm-duration-reveal)',
    environment: 'var(--gm-duration-environment)',
    standardEase: 'var(--gm-ease-standard)',
    expressiveEase: 'var(--gm-ease-expressive)',
  },
} as const

export type DesignTokens = typeof designTokens
