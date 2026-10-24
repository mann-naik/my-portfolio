/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        foreground: "#FAFAFA",
        muted: "#A1A1AA",
        accent: {
          DEFAULT: "#3B82F6",
          glow: "rgba(59, 130, 246, 0.5)",
        },
        surface: "#111111",
        border: "#27272A",
      }
    },
  },
  plugins: [],
}