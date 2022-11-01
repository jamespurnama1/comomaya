/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      "white": "#ffffff",
      "gray": "#eaeaea",
      "black": "#000000",
      "beige": "#faf8f4",
      "active": "#982eff",
    },
  },
  plugins: []
};
