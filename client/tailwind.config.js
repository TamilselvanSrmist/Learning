/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg':"url('/src/images/overviewSRM.jpg')",
      }
    },
  },
  plugins: [],
}

