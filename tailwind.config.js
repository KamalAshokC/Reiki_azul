/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        azul: {
          50:  '#F2F7F9',
          100: '#E1EDF1',
          200: '#C3DBE2',
          300: '#9CC3CE',
          400: '#5B9BAE',
          500: '#4A7C8C',
          600: '#3C6673',
          700: '#2F3E46', // deep slate — text
          800: '#243138',
          900: '#1A2329',
        },
        sand:  '#F5EFE6',
        sage:  '#A8B5A0',
        clay:  '#C9A98C',
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      borderRadius: { lg: '0.875rem', xl: '1.25rem', '2xl': '1.75rem' },
      boxShadow: {
        soft: '0 4px 24px -6px rgba(47,62,70,0.12)',
        lift: '0 12px 40px -12px rgba(47,62,70,0.22)',
      },
      maxWidth: { content: '72rem' },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: { fadeUp: 'fadeUp .6s ease-out both' },
    },
  },
  plugins: [],
};