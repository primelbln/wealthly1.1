/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        128: "32rem",
        140: "40rem",
        200: "60rem",
      },
      maxHeight: {
        200: "60rem",
      },
    },
  },
  plugins: [],
};
