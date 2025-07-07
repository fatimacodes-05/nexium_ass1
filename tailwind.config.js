/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          light: "#F3E8FF",
          DEFAULT: "#C084FC",
          dark: "#7C3AED",
        },
      },
    },
  },
  plugins: [],
};
