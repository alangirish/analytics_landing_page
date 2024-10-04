/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors:{
        grey:" #475467",
        purple: "#7F56D9",
        lightPurple :"#D6BBFB",
        mediumPurple: "#6941C6",
        bg:"#F9FAFB",

      }
    },
  },
  plugins: [],
};
