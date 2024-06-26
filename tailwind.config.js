/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        myYellow: "#ED9B05",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
