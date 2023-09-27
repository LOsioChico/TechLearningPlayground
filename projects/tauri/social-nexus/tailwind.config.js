/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkGray: '#313338',
        red: '#ED4245',
        green: '#57F287',
        yellow: '#FEE75C',
        fuchsia: '#EB459E',
        burple: '#5865F2',
      },
    },
  },
  plugins: [],
}
