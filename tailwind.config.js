/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#114075",
        surface: "#F9FAFB",
        textGray: "#64748B",
        grayLight: "#D9D9D9",
        link: "#3B82F6",
        blue: "#2563EB",
        success: "#22bb33",
        info: "#f0ad4e",
        danger: "#bb2124"
      },
      plugins: [],
    },
  },
};
	