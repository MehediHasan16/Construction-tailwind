/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'rubi': 'Rubik',
        'openSans': 'Open Sans'
      },
      colors: {
        yellowShade: {
          400: '#FFB400'
        }
      },



    },
  },
  plugins: []
}
