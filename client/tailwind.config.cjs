/* eslint-disable @typescript-eslint/no-var-requires */
const { join } = require("path");
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: [join(__dirname, "src/**/*.{js,ts,jsx,tsx}"), "index.html"],
  theme: {},
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
