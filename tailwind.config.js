/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#4312e5',
        "hover": 'rgb(241 245 249 / 0.6)',
        "dark": "#030014"
      }
    },
  },
  plugins: [],
}