/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'glorify': ['Glorify', 'sans-serif'],
        'nata': ['Nata', 'sans-serif'],
        'skeina': ['Skeina', 'sans-serif'],
        'coolvetica': ['Coolvetica', 'sans-serif'],
        'maelstrom': ['Maelstrom', 'sans-serif']
      }
    },
  },
  plugins: [require('tailwindcss-font-inter')],
}