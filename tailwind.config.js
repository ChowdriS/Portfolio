/** @type {import('tailwindcss').Config} */
const {fontFamily}=require('tailwindcss/defaultTheme')



module.exports = {
  content: ["./src/**/*.{js,ts,tsx,jsx}"],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        // sans: ['var(--font-inter)'],
        mont: ['Montserrat', ...fontFamily.sans],
      },
      colors: {
        dark: "black",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
    },
    backgroundImage: {
      circularLight:"repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)",
      circularDark:"repeating-radial-gradient(rgba(255,255,255,0.4) 2px,black 5px,black 100px)",
    },
  },
  plugins: [],
}
}