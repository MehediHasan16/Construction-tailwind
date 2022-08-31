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
        },
        gray_light: {
          50: '#f7f7f7'
        }
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }


    },
  },
  plugins: []
}
