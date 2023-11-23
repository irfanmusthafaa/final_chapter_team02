/** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
//   corePlugins: {
//     preflight: false,
//   },
// };

// const withMT = require("@material-tailwind/react/utils/withMT");
// const colors = require("tailwindcss/colors");

// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: { colors },
//   },
//   plugins: [],
//   corePlugins: {
//     preflight: false,
//   },
// });

const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

// eslint-disable-next-line no-undef
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Figtree", "sans-serif"],
      logo: "font-family: Agustina Regular",
    },
    extend: { colors },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
});
