/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "1100px",
        ms: "840px",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"], // Adding Raleway font family
      },
    },
  },
  plugins: [],
};
