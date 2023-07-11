/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navcolor: '#202020',
        navbtncolor: '#eb1616',
        footertextcolor: '#b7b7b7',
        footercolor: '#2c2c2c',
      },

      animation: {
        hover: 'hover',
        'group-hover': 'group-hover',
        focus: 'focus',
        'group-focus': 'group-focus',
      },
    },
  },
  plugins: [],
};
