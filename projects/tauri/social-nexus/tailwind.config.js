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
        danger: 'hsl( 358 calc( 1 *92.9%) 72.4% /0.75)',
        red: '#ED4245',
        green: '#57F287',
        yellow: '#FEE75C',
        fuchsia: '#EB459E',
        burple: '#5865F2',
        burpleHover: '#4752c4',
        burpleActive: '#3c45a5',
        darkGray: '#313338',
        normalGray: '#B4B4B4',
        lightGray: '#EDEDED',
        inputBackground: '#1e1f22',
        textLink: '#00a8fc',
      },
    },
  },
  plugins: [],
}
