/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        'bgShadow': 'inset 0 0 100px 50px black'
      },
      colors: {
        'moodboard': {
          'light': '#e7e4df',
          'dark': '#191613',
          'orange': '#a05e3b',
          'salmon': '#e0857c',
          'musg': '#988359',
          'green': '#8a9e89',
          'yellow': '#9c7a30',
          'gray': '#b0b1b7'
        }
      }
    },
  },
  plugins: [],
}
