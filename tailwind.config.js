/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/pageContainer/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "BlueLight-20": "#E1F5FE",
      "GreenLight-30": "#20C997",
      "GrayScale-30": "#AEAEB2",
      "GrayScale-20": "#C6C6C6",
      "GrayScale-10": "#F4F4F4",
      white: "#fff",
    },
  },
  plugins: [],
};
