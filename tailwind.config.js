/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      'space-light': 'space-light',
      'space-regular': 'space-regular',
      'space-medium': 'space-medium',
      'space-semibold': 'space-semibold',
      'space-bold': 'space-bold',
    },
  },
  plugins: [],
}
