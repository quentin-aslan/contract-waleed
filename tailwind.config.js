/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-move-left': 'fade-in-move-left 1s ease-in-out',
        'fade-in-move-right': 'fade-in-move-right 1s ease-in-out',
      },
      keyframes: {
        'fade-in-move-left': {
          '0%': { opacity: '0', transform: 'translate(-100%, -100%)' },
          '100%': { opacity: '1', transform: 'translate(0, 0)' },
        },
        'fade-in-move-right': {
          '0%': { opacity: '0', transform: 'translate(100%, -100%)' },
          '100%': { opacity: '1', transform: 'translate(0, 0)' },
        },
      },
      colors: {
        primary: "#33ccff",
        secondary: "#fa5639",
        'dark-secondary': "#1c1d21"
      }
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
}
