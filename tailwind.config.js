/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontSize: {
        'heading-1': '64px',
        'heading-2': '55px',
        'heading-3': '45px',
        'heading-4': '35px',
        'heading-5': '26px',
        'paragraph': '16px',
      },
      fontWeight: {
        'heading-1': '700',
        'heading-2': '500',
        'heading-3': '700',
        'heading-4': '500',
        'heading-5': '500',
        'paragraph': '400',
      },
      colors: {
        "primary": '#4312e5',
        "hover": 'rgb(241 245 249 / 0.6)',
        "dark": "#030014",
        'primary-blue': {
          DEFAULT: '#0469ff',
          '50': '#e6f0ff',
          '100': '#b1d1ff',
          '200': '#8cbaff',
          '300': '#579bff',
          '400': '#3687ff',
          '500': '#0469ff',
          '600': '#0460e8',
          '700': '#034bb5',
          '800': '#023a8c',
          '900': '#022c6b',
        },
        'washed-purple': {
          DEFAULT: '#b5b2ff',
          '50': '#f8f7ff',
          '100': '#e8e7ff',
          '200': '#dddcff',
          '300': '#cdcbff',
          '400': '#c4c1ff',
          '500': '#b5b2ff',
          '600': '#a5a2e8',
          '700': '#817eb5',
          '800': '#64628c',
          '900': '#4c4b6b',
        },
        'primary-purple': {
          DEFAULT: '#7000ff',
          '50': '#f1e6ff',
          '100': '#d3b0ff',
          '200': '#bd8aff',
          '300': '#9f54ff',
          '400': '#8d33ff',
          '500': '#7000ff',
          '600': '#6600e8',
          '700': '#5000b5',
          '800': '#3e008c',
          '900': '#2f006b',
        },
        'neutral': {
          DEFAULT: '#020014',
          '1': '#ffffff',
          '2': '#fcfcfd',
          '3': '#f5f5f6',
          '4': '#f0f0f1',
          '5': '#d9d9dc',
          '6': '#c0bfc4',
          '7': '#8d8c95',
          '8': '#5b5966',
          '9': '#464553',
          '10': '#282637',
          '11': '#201f30',
          '12': '#161427',
          '13': '#020014',
        },
      }
    },
  },
  plugins: [],
}