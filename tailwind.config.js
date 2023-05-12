const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,

      blue: {
        500: "#6a71fb",
        600: "#4e55da",
        700: "#5424e5",
        800: "#35188b",
        900: "#3a0183", // Acai
        950: "#1f073b",
      },
      fuchsia: {
        600: "#a33ad4",
        700: "#931cba",
      },
      green: {
        500: "#16c080",
      },
      grey: {
        200: "#e1e1e1", // Consider replacing with `300`
        300: "#e7e7e7",
        400: "#9d9d9d",
        500: "#848484",
        600: "#454545",
        700: "#303030",
      },
      purple: {
        900: "#49148a",
      },
      slate: {
        100: "#f8f8fd",
        200: "#e7e8f4",
        500: "#78798f",
        900: "#19163a",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "24px",
      },
    },
    extend: {
      backgroundImage: {
        "purple-gradient": "linear-gradient(90deg, #3a0184, #a238d4)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
