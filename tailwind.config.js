/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    borderRadius: {
      none: "0px",
      xs: "4px",
      sm: "8px",
      md: "12px",
      lg: "16px",
      xl: "28px",
    },
    fontSize: {
      label: [
        "0.75rem",
        {
          letterSpacing: "0",
          lineHeight: "1rem",
          fontWeight: "400",
        },
      ],
      body: [
        "1rem",
        {
          letterSpacing: "0",
          lineHeight: "1.25rem",
          fontWeight: "400",
        },
      ],
      tittle: [
        "1.5rem",
        {
          letterSpacing: "0",
          lineHeight: "1.5rem",
          fontWeight: "400",
        },
      ],
      head: [
        "2rem",
        {
          letterSpacing: "0",
          lineHeight: "2.25rem",
          fontWeight: "400",
        },
      ],
      display: [
        "3.5rem",
        {
          letterSpacing: "0",
          lineHeight: "4rem",
          fontWeight: "400",
        },
      ],
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      neutral: {
        50: "#f6f7f7",
        100: "#e2e5e4",
        200: "#c4cbc9",
        300: "#9fa9a8",
        400: "#7b8686",
        500: "#606c6b",
        600: "#4c5555",
        700: "#3f4646",
        800: "#353a3a",
        900: "#2d3131",
      },
      primary: {
        50: "#ebfef6",
        100: "#cefde8",
        200: "#a2f8d5",
        300: "#66efc2",
        400: "#29dea8",
        500: "#05c491",
        600: "#00a077",
        700: "#008062",
        800: "#006a53",
        900: "#015342",
      },
      danger: {
        50: "#fef2f2",
        100: "#ffe1e2",
        200: "#ffc8c9",
        300: "#ff8a8d",
        400: "#fd6c70",
        500: "#f53e43",
        600: "#e22025",
        700: "#be171b",
        800: "#9d171a",
        900: "#821a1d",
      },
    },
    extend: {
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
