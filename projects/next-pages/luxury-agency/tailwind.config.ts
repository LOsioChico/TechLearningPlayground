import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0E1010',
        darkLight: '#171919',
        primary: '#CB6CE6',
        primaryLight: '#FFEDF8',
      },
    },
  },
  plugins: [],
}
export default config
