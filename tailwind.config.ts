import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--gm-bg-void-rgb) / <alpha-value>)',
        surface: {
          DEFAULT: 'rgb(var(--gm-bg-graphite-rgb) / <alpha-value>)',
          raised: 'rgb(var(--gm-bg-carbon-rgb) / <alpha-value>)',
          elevated: 'rgb(var(--gm-bg-elevated-rgb) / <alpha-value>)',
        },
        sapphire: {
          DEFAULT: 'rgb(var(--gm-sapphire-rgb) / <alpha-value>)',
          light: 'rgb(var(--gm-sapphire-light-rgb) / <alpha-value>)',
          dark: 'rgb(var(--gm-sapphire-dark-rgb) / <alpha-value>)',
          muted: 'rgb(var(--gm-sapphire-rgb) / 0.1)',
        },
        cyan: {
          DEFAULT: 'rgb(var(--gm-cyan-rgb) / <alpha-value>)',
          light: 'rgb(var(--gm-platinum-rgb) / <alpha-value>)',
          dark: 'rgb(var(--gm-cyan-rgb) / 0.72)',
          muted: 'rgb(var(--gm-cyan-rgb) / 0.1)',
        },
        gold: {
          DEFAULT: 'rgb(var(--gm-gold-rgb) / <alpha-value>)',
          light: 'rgb(var(--gm-gold-light-rgb) / <alpha-value>)',
          dark: 'rgb(var(--gm-gold-dark-rgb) / <alpha-value>)',
          muted: 'rgb(var(--gm-gold-rgb) / 0.1)',
        },
        border: {
          DEFAULT: 'rgb(var(--gm-platinum-rgb) / 0.12)',
          subtle: 'rgb(var(--gm-platinum-rgb) / 0.08)',
        },
      },
      fontFamily: {
        display: ['var(--gm-font-display)'],
        sans: ['var(--gm-font-body)'],
        mono: ['var(--gm-font-mono)'],
        editorial: ['var(--gm-font-editorial)'],
      },
      fontSize: {
        'display-3xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0' }],
        'display-2xl': ['2.75rem', { lineHeight: '1.04', letterSpacing: '0' }],
        'display-xl': ['2.25rem', { lineHeight: '1.08', letterSpacing: '0' }],
        'display-lg': ['1.75rem', { lineHeight: '1.14', letterSpacing: '0' }],
        'display-md': ['1.375rem', { lineHeight: '1.24', letterSpacing: '0' }],
      },
      maxWidth: {
        site: 'var(--gm-container-max)',
        reading: 'var(--gm-reading-max)',
      },
      spacing: {
        section: '7rem',
        'section-sm': '5rem',
      },
      transitionDuration: {
        '400': 'var(--gm-duration-module)',
      },
      animation: {
        'fade-up': 'fadeUp 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'fade-in': 'fadeIn 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
        'line-grow': 'lineGrow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        lineGrow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
