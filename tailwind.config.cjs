/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,vue,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      "futura": 'Futura, sans-serif'
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "white": "#ffffff",
      "gray": "#eaeaea",
      "darkGray": "#282828",
      "black": "#000000",
      "beige": {
        "normal": "#BDBCBB",
        "lighter": '#E3E1E1',
      },
      "brown": {
        100: "#E5DFD1",
        500: "#C7BBA2",
      },
      "active": "#7BFF47",
      "purple": "#982eff",
      "blue": "#808CAD",
      "stone": {
        100: "#F2F4F7",
        200: "#CDD2E0",
        300: "#A0AAC4",
        400: "#8F9BBC",
        500: "#6878A1",
        600: "#56658A",
        700: "#3F4964",
        800: "#272E3F",
        900: "#181C26"
      }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
