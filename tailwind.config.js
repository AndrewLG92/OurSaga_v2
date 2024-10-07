/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        bgPrimary: "#7470b5",
      },
      colors: {
        primary: "#f2526a",
      },
    },
  },
  plugins: [],
}

