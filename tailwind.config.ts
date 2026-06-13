import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'luxury': {
          'green': '#004225',
          'green-light': '#005a31',
          'green-dark': '#002a16',
          'gold': '#F7E7CE',
          'gold-royal': '#D4AF37',
          'gold-antique': '#C28840',
          'charcoal': '#1A1A1A',
          'ivory': '#FFFDF7',
        },
      },
      backgroundImage: {
        'luxury-gradient': 'linear-gradient(135deg, #004225 0%, #005a31 50%, #1A1A1A 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F7E7CE 0%, #D4AF37 50%, #C28840 100%)',
        'shimmer': 'linear-gradient(90deg, rgba(247,231,206,0) 0%, rgba(247,231,206,0.8) 50%, rgba(247,231,206,0) 100%)',
      },
      boxShadow: {
        'luxury': '0 20px 60px rgba(0, 66, 37, 0.3)',
        'gold-glow': '0 0 30px rgba(247, 231, 206, 0.3)',
        'luxury-deep': '0 30px 90px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(247, 231, 206, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(247, 231, 206, 0.6)' },
        },
        'rotate-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
      },
      fontSize: {
        'luxury': '4.5rem',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
