/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: '#001F3F',
        sky: '#87CEEB',
      },
    },
  },
  plugins: [],
}