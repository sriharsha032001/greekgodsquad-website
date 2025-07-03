/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      /* 1. Extend fontFamily to include Montserrat */
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
      },
      /* 2. Your existing dropShadow config */
      dropShadow: {
        glow: '0 0 10px #22c55e, 0 0 20px #22c55e, 0 0 30px #22c55e',
      },
    },
  },
  plugins: [],
};