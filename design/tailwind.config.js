/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        '--primary-color': '#A8D5BA',
        '--secondary-color': '#E6f4e4',
        '--light-green': '#D3E7D5',
        '--medium-green': '#7bAF8A',
        '--dark-green': '#5A7D64',
        '--muted-green': '#4A6B54',
      }
    },
  },
  plugins: [],
}