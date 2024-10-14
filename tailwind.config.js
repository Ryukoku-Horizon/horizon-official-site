/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.tsx",
    ".app/*.tsx",
    "components/*.tsx",
  ],
  theme: {
    extend: {
      fontSize: {
        '3vh': '30vh',
      },
    },
  },
  plugins: [],
}

