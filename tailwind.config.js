/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      maxWidth: {
        'xxs': '16rem'
      },
      maxHeight: {
        'xxs': '16rem'
      }
    },
  },
  plugins: [],
}
