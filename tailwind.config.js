/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
       'light':'lightgray'
      },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(circle, rgba(32,24,190,1) 0%, rgba(99,120,226,1) 84%);',
      },
    },
  },
  plugins: [],
}
