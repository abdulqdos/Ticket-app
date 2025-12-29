/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        textGray: "#808080",
        grayLight: "#D9D9D9",
        link: "#3B82F6",
        blue: "#0000ff",
        success: "#22bb33",
        info: "#f0ad4e",
        danger: "#bb2124"
      },
      plugins: [],
    },
  },
};
	