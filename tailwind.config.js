/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "hsl(0, 0%, 63%)",
        white: "hsl(0, 0%, 100%)",
        veryDarkGray: "hsl(0, 0%, 27%)",
      },
    },
  },
  plugins: [],
};
