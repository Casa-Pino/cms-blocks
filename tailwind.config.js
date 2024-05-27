/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      gridColumn: {
        'span-fif': '50% 1fr',
      },
      screens: {
        'sm-mw': { max: '639px' },
      },
      backgroundImage: {
        image: 'linear-gradient(360deg, rgba(0,0,0,0.7022003859616397) 10%, rgba(0,0,0,0) 45%);',
      },
    },
  },
  plugins: [],
};
