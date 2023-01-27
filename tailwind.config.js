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
        50:  "#f7f7f7",
        100: "#e3e3e3",
        200: "#c8c8c8",
        300: "#a4a4a4",
        400: "#818181",
        500: "#666666",
        600: "#515151",
        700: "#434343",
        800: "#383838",
        900: "#000000",
      },
      primary: {
        50:  "#f2f4fc",
        100: "#e1e8f8",
        200: "#c9d5f4",
        300: "#a4bbec",
        400: "#7998e1",
        500: "#6983db",
        600: "#455bcb",
        700: "#3c4ab9",
        800: "#363e97",
        900: "#303878",
      },
      success: {
        50:  "#f2f4fc",
        100: "#e1e8f8",
        200: "#c9d5f4",
        300: "#a4bbec",
        400: "#7998e1",
        500: "#6983db",
        600: "#455bcb",
        700: "#3c4ab9",
        800: "#363e97",
        900: "#303878",
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
