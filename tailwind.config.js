/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    fontFamily: {
        norwester: ['norwester', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

