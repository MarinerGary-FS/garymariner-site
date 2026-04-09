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
        background: '#0A0A0A',
        surface: {
          DEFAULT: '#111111',
          raised: '#161616',
          elevated: '#1C1C1C',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#D4B86A',
          dark: '#A8892E',
          muted: '#C9A84C1A',
        },
        border: {
          DEFAULT: '#222222',
          subtle: '#1A1A1A',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        'display-3xl': ['clamp(3.75rem, 8vw, 7rem)', { lineHeight: '1.1', letterSpacing: '-0.04em' }],
        'display-2xl': ['clamp(2.75rem, 5.5vw, 5rem)', { lineHeight: '1.12', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(2.25rem, 4.5vw, 4rem)', { lineHeight: '1.14', letterSpacing: '-0.025em' }],
        'display-lg': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.18', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.375rem, 2vw, 2rem)', { lineHeight: '1.25', letterSpacing: '-0.015em' }],
      },
      maxWidth: {
        site: '1280px',
      },
      spacing: {
        section: '7rem',
        'section-sm': '5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'line-grow': 'lineGrow 0.8s ease forwards',
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
