/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FA4A6F',
        'secondary': '#232635',
        'tertiary': '#0EB7BE',
        'quaternary': '#EC3899',
        'quinary': '#36394B',
      }
    }
  },
  plugins: [require('daisyui')],
}