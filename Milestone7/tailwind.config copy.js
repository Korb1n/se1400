/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter', 
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
      colors: {
        blue: {
          50: '#eef5ff',
          100: '#d9e9ff',
          200: '#bcdbff',
          300: '#8fc7ff',
          400: '#5aacff',
          500: '#3090ff',
          600: '#1476f9',
          700: '#0a61ea',
          800: '#104dbd',
          900: '#134294',
        },
      },
    },
  },
  plugins: [],
};