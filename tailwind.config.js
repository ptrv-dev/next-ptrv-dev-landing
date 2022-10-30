/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
    },
    extend: {
      transitionProperty: {
        position: 'left, right, top, bottom',
      },
    },
  },
  plugins: [],
};
