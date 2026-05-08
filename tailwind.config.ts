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
        background: '#05070A',
        surface: {
          DEFAULT: '#11151B',
          raised: '#171C23',
          elevated: '#242B35',
        },
        sapphire: {
          DEFAULT: '#5B7FFF',
          light: '#9DB0FF',
          dark: '#2F4EA8',
          muted: '#5B7FFF1A',
        },
        cyan: {
          DEFAULT: '#58C4DD',
          light: '#9EE7F4',
          dark: '#237D94',
          muted: '#58C4DD1A',
        },
        gold: {
          DEFAULT: '#5B7FFF',
          light: '#9DB0FF',
          dark: '#2F4EA8',
          muted: '#5B7FFF1A',
        },
        border: {
          DEFAULT: '#242B35',
          subtle: '#171C23',
        },
      },
      fontFamily: {
        display: ['var(--font-newsreader)', 'Georgia', 'serif'],
        sans: ['var(--font-ibm-plex-sans)', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-3xl': ['3.75rem', { lineHeight: '1', letterSpacing: '0' }],
        'display-2xl': ['2.75rem', { lineHeight: '1.04', letterSpacing: '0' }],
        'display-xl': ['2.25rem', { lineHeight: '1.08', letterSpacing: '0' }],
        'display-lg': ['1.75rem', { lineHeight: '1.14', letterSpacing: '0' }],
        'display-md': ['1.375rem', { lineHeight: '1.24', letterSpacing: '0' }],
      },
      maxWidth: {
        site: '1024px',
      },
      spacing: {
        section: '7rem',
        'section-sm': '5rem',
      },
      transitionDuration: {
        '400': '400ms',
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
