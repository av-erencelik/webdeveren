/** @type {import('tailwindcss').Config} */
module.exports = {
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
        night: "#090A10",
      },
    },
  },
  plugins: [],
};
