/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    //all others should be in a folder
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

