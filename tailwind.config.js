/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        sm: "3.25rem",
        md: "3.75rem",
        lg: "32rem",
        xlg: "36rem",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        gray29: "#F0F0F9",
      },
    },
  },
  plugins: [],
};
