/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#003b71',
        secondary: '#ff9e16',
      },
      fontSize: {
        '2xs': '.5rem',
      },
      screens: {
        xs: '300px',
      },
    },
  },
  plugins: [],
};
