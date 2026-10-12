// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8ef',
          100: '#f9edcf',
          200: '#f3d99e',
          300: '#ecc06d',
          400: '#e5a63c',
          500: '#C9953C',  // Main gold
          600: '#b8862f',
          700: '#9a6c27',
          800: '#7d5620',
          900: '#66461a',
          DEFAULT: '#C9953C',
        },
        dark: {
          50: '#e8edf2',
          100: '#c5cfd9',
          200: '#9fb0c0',
          300: '#7890a7',
          400: '#5b7894',
          500: '#3e6081',
          600: '#2d4a63',
          700: '#1f3548',
          800: '#1a2d3d',
          900: '#1B2B3A',  // Main dark blue
          950: '#121d27',
          DEFAULT: '#1B2B3A',
        },
        gold: '#C9953C',
        darkblue: '#1B2B3A',
        cream: '#F5F0E8',
      },
fontFamily: {
  heading: ['Fraunces', 'serif'],
  body: ['Plus Jakarta Sans', 'sans-serif'],
  accent: ['Manrope', 'sans-serif'],
},
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.6s ease-out forwards',
        'fade-in-left': 'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-gold': 'pulseGold 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 149, 60, 0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(201, 149, 60, 0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #C9953C 0%, #E5C067 50%, #C9953C 100%)',
        'gradient-dark': 'linear-gradient(135deg, #1B2B3A 0%, #2d4a63 50%, #1B2B3A 100%)',
        'shimmer-gold': 'linear-gradient(90deg, transparent, rgba(201,149,60,0.3), transparent)',
      },
    },
  },
  plugins: [],
}
export default config