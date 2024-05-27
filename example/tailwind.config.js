/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/"@morpheus/core"/**/*.{vue,js,ts,jsx,tsx}',
    '../lib/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        image: 'linear-gradient(360deg, rgba(0,0,0,0.7022003859616397) 10%, rgba(0,0,0,0) 45%);',
      },
      screens: {
        'sm-mw': { max: '639px' },
      },
      minHeight: {
        'min-h-10': '612px',
      },
    },
  },
  plugins: [],
};
