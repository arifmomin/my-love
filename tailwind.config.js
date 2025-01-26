/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        greatvibs : ["Great Vibes", "cursive"],
        roboto: ["Roboto Slab", "serif"],
        caps: ["Elsie Swash Caps", "serif"],
      },
      colors: {
        BrandColor: "#EDFBFE",
        fontColor: "#0fbcdacb",
      }
    },
  },
  plugins: [],
}