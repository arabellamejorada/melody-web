/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Dela Gothic One"', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],              
      },
      colors: {
        white: '#FFFFFD',
        yellow: '#FBCF41',
        orange: '#F6A230',
        blue: '#5966B1',
        bluehovered: '#4F5C9D',
        orangehovered: '#DB8C28',
        yellowhovered: '#E6B736'
      }
    },
  },
  plugins: [],
}

