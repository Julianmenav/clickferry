/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'japanese-blue': '#d4effa',
        'clickferry': '#004a99'
      }
    },
  },
  plugins: [],
}

