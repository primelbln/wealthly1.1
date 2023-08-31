/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      tuna: {
        100: "#3f3f41",
        200: "#323234",
        300: "#252527",
      },
      flamingo: {
        100: "#d56d48",
        200: "#d97b5a",
        300: "#dd8a6c",
      },
      white: "#fff",
    },
  },
  plugins: [],
};
