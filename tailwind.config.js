/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        earth: {
          50: "#fef6ec",
          100: "#fbe6ca",
          200: "#f7cc90",
          300: "#f2a547",
          400: "#f0902f",
          500: "#e96e17",
          600: "#ce4d11",
          700: "#ab3312",
          800: "#8b2915",
          900: "#732114",
        },
        beige: "#f2eccf",
        beigeDark: "#e6d8a2",
        cinder: {
          50: "#f4f5f9",
          100: "#d9dfee",
          200: "#b2bddd",
          300: "#8493c4",
          400: "#5a6aa7",
          500: "#404f8c",
          600: "#313c70",
          700: "#2b325a",
          800: "#262b49",
          900: "#090a10",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
