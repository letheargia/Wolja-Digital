import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
      },
      colors: {
        'gray': '#2d3748',
        'main': '#84cc16',
        'gray-2': '#4a5568',
        'stroke': 'rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

export default config
