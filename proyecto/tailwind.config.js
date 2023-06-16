/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        rale: ['Raleway']
      },
      colors: {
        danger: '#ff5f40',
        info: {
          100: '#21a19c',
          200: '#6ebfb5'
        }
      }
    },
  },
  plugins: [],
}

