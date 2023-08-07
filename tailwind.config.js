/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        violet: {
          'lola-pink': '#EF2687',
          'lola-red': '#F10C42',
          'lola-orange': '#FB7E1E',
          'lola-yellow': '#FDCE01',
          'lola-green': '#08B173',
          'lola-white': '#FFFBD6',
          'lola-black': '#000000',
        },
      },

      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
