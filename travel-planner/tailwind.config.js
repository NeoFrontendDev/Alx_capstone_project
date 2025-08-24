/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        black: '#000',
        dark_gray_brown: '#231815',
        dark_purple: '#281a40',
        dark_gray: '#282828',
        gray_crimson: '#7b4b55',
        gray_red: '#b38b85',
        gray_red: '#b49f9d',
        gray_orange: '#b88974',
        pastel_orange: '#f2b893',
        light_orange: '#f2ebf',
      },
    },
  },
  plugins: [],
}
