/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple-200": "#dac7fc",
        "purple-300": "#caacff",
        "purple-500": "#6b49cd",
        "purple-700": "#5d0096",
        "purple-900": "#210035",
        "pink-500": "#ad26ff",
      },
    },
  },
  plugins: [],
}

