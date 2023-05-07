/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
      },
      maxWidth: {
        container: '1024px',
      },
      colors: {
        'bl': '#1C1C1C',
        'grey': '#999999',
        'primary': '#BEEE4C',
        'wh_opacity': 'rgba(255, 255, 255,.7)',
      },
      boxShadow: {
        'bl_shadow': '0 0 15px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}