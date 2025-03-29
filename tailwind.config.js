/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFD',
        yellow: '#FBCF41',
        orange: '#F6A230',
        blue: '#5966B1'
      },
      fontFamily: {
        gilroy: ['Gilroy', 'sans-serif'],
        toast: ['Bread Toast', 'cursive'],
      },
    },
  },
  plugins: [],
}