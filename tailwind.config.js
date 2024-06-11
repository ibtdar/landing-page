/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white':'#ffffff',
      'black': '#000000',
      'black-2': '#121212',
      'yellow': '#EFC337',
      'gray': '#5E5E5E',
    },
    fontFamily: {
      space: ['Space Grotesk', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
    },
    extend: {
      boxShadow: {
        'custom-light': '1px 5px 10px rgba(0, 0, 0, 0.05)',
        'custom-hover': '3px 3px 0px #EFC337',
      },
    },
  },
  plugins: [],
}

