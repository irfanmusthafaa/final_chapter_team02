const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require("tailwindcss/colors");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: { colors },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
});
