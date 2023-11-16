/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "primary": "#FC5986",
        "secondary": "#FAF6F5",
        "tertiary": "#E2D7D5",
        "quaternary": "#CFC2BF",
      },
    },
  },
  plugins: [],
}