/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#5C6857',
          dark: '#394240',
          light: '#A4ABA1',
        },
        secondary: '#A5776C',
        background: {
          DEFAULT: '#E5DDD4',
          alt: '#C6B4A9',
        },
        text: {
          DEFAULT: '#394240',
          light: '#BBAFA5',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
