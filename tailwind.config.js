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
      fontFamily: {
        'teko':  ["var(--font-teko)"],
        'rubik': ["var(--font-rubik)"],
        'kanit': ["var(--font-kanit)"],
        'murecho': ["var(--font-murecho)"],
      },
    },
  },
  plugins: [],
}

