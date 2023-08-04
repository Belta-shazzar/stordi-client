/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // light mode
        primary: '#f7f7f7',
        secondary: '#333333',
        accent: '#32a8a0',
        hover: '#9fdad7',
        // dark mode
        dm_primary: '#202020',
      }
    },
    fontFamily: {
      Monts: ['Montserrat, sans-serif'],
    },
    container: {
      padding: '2rem',
      center: true
    }
  },
  plugins: [],
}

