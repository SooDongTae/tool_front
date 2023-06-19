/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.{js,jsx,ts,tsx}",
    "./src/pageContainer/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        InputHover: {
          from: {},
          to: {
            "font-size": "1.1rem",
            color: "#20C997",
            transform: "translate(0px,-33px)",
          },
        },
        TextAreaHover: {
          from: {},
          to: {
            "font-size": "1.1rem",
            color: "#20C997",
            transform: "translate(0px,-27px)",
          },
        },
        Loading: {
          "0%": {},
          "100%": {
            opacity: "0",
            transform: "scale(0.5)",
          },
          "50%": {
            opacity: "1",
            transform: "scale(1.2)",
          },
        },
      },
      animation: {
        InputHover: "InputHover .3s ease-in-out forwards",
        TextAreaHover: "TextAreaHover .3s ease-in-out forwards",
        Loading: "Loading 1s linear infinite",
      },
    },
    colors: {
      "BlueLight-20": "#E1F5FE",
      "GreenLight-30": "#20C997",
      "GreenLight-20": "#4AF1C9",
      "GrayScale-50": "#444444",
      "GrayScale-40": "#878787",
      "GrayScale-30": "#AEAEB2",
      "GrayScale-20": "#C6C6C6",
      "GrayScale-15": "#EEEEEE",
      "GrayScale-10": "#F4F4F4",
      "GrayScale-5": "#F2F2F2",
      "GreenDark-30": "#20a26f",
      "OrangeDark-30": "#ffa500",
      "Background-Gray": "#fafafa",
      Gold: "#ffd700",
      white: "#fff",
      black: "#000",
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
