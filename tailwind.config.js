/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode :"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      logoFont:['Pacifico', 'cursive'],
      body:["Shrikhand",'cursive'],
      textFont:['Rubik', 'sans-serif'],
      myName:['Russo One', 'sans-serif']
    },

  },
  plugins: [],
}
