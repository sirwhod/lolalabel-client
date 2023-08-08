/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'lola-pink-500': '#EF2687',
        'lola-pink-900': '#C00560',
        'lola-red-500': '#E8315C',
        'lola-orange-500': '#FB7E1E',
        'lola-yellow-500': '#FDCE01',
        'lola-green-500': '#08B173',
        'lola-white-500': '#FFFBD6',
        'lola-black-900': '#000000',
      },

      fontFamily: {
        anton: ['var(--font-anton)', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
