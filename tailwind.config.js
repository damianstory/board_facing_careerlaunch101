/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#0092FF',
          white: '#FFFFFF',
        },
        secondary: {
          'blue-light': '#C6E7FF',
          'blue-pale': '#E6F4FF',
        },
        brand: {
          navy: '#22224C',
          'off-white': '#F6F6FF',
          'light-blue': '#C6E7FF',
        },
        neutral: {
          1: '#E5E9F1',
          2: '#D9DFEA', 
          3: '#AAB7CB',
          4: '#65738B',
          5: '#485163',
          6: '#252A33',
        },
        functional: {
          success: '#059669',
          warning: '#EA580C', 
          error: '#DC2626',
          neutral: '#65738B',
          dark: '#22224C',
        },
        background: {
          white: '#FFFFFF',
          light: '#F9FAFB',
          dark: '#111827',
        },
      },
      fontFamily: {
        sans: ['Museo Sans', 'Open Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '80px', letterSpacing: '-0.5px', fontWeight: '900' }],
        'h1-mobile': ['40px', { lineHeight: '56px', fontWeight: '900' }],
        'h2': ['40px', { lineHeight: '56px', letterSpacing: '-0.3px', fontWeight: '900' }],
        'h2-mobile': ['32px', { lineHeight: '48px', fontWeight: '900' }],
        'h3': ['32px', { lineHeight: '48px', letterSpacing: '-0.2px', fontWeight: '900' }],
        'h3-mobile': ['24px', { lineHeight: '36px', fontWeight: '900' }],
        'h4': ['24px', { lineHeight: '36px', letterSpacing: '-0.1px', fontWeight: '900' }],
        'h4-mobile': ['20px', { lineHeight: '30px', fontWeight: '900' }],
        'body': ['16px', { lineHeight: '28px' }],
        'body-large': ['20px', { lineHeight: '32px' }],
        'body-large-mobile': ['18px', { lineHeight: '26px' }],
        'body-small': ['14px', { lineHeight: '20px', letterSpacing: '0.1px' }],
        'caption': ['12px', { lineHeight: '16px', letterSpacing: '0.3px', fontWeight: '500' }],
        'button': ['16px', { lineHeight: '24px', letterSpacing: '0.1px', fontWeight: '600' }],
        'button-mobile': ['18px', { lineHeight: '24px', fontWeight: '600' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'nav-break': '1030px',
        'desktop': '1024px',
        'large': '1200px',
      },
      animation: {
        'subtle-pulse': 'subtle-pulse 2s infinite',
        'underline-expand': 'underline-expand 200ms ease-out',
        'loading': 'loading 1.5s infinite',
      },
      keyframes: {
        'subtle-pulse': {
          '0%, 100%': { boxShadow: '0 4px 12px rgba(249, 115, 22, 0.15)' },
          '50%': { boxShadow: '0 6px 20px rgba(249, 115, 22, 0.25)' },
        },
        'underline-expand': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'loading': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      transitionTimingFunction: {
        'standard': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'decelerate': 'cubic-bezier(0.0, 0.0, 0.2, 1)',
        'accelerate': 'cubic-bezier(0.4, 0.0, 1, 1)',
        'spring': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        'fast': '150ms',
        'standard': '250ms',
        'slow': '400ms',
      },
    },
  },
  plugins: [],
}

