/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    "prettier-plugin-tailwindcss",
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
