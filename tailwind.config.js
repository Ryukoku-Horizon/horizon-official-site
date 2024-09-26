/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.tsx",
    ".app/*.tsx"
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

