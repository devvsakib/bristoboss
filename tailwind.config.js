/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#D99904",
        "secondary": "#737373",
      },
    },
  },
  plugins: [require("daisyui")],
}

