module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
        "primary-extra-light": "var(--primary-extra-light)",
        "primary-shadow": "var(--primary-shadow)",
        "gray-dark": "var(--gray-dark)",
        gray: "var(--gray)",
        "gray-extra-light": "var(--gray-extra-light)",
        light: "var(--light)",
        secondary: "var(--secondary)",
        "secondary-tint": "var(--secondary-tint)",
      },
      fontFamily: {
        sans: "var(--font-sans)",
        mono: "var(--font-mono)",
      },
    },
    debugScreens: {
      position: ["top", "left"],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};
