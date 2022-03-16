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
      boxShadow: {
        "primary-left": "-10px 0px 30px -15px var(--primary-shadow)",
      },
    },
    debugScreens: {
      position: ["top", "left"],
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
};

// screens: {
//   'sm': '640px',
//   // => @media (min-width: 640px) { ... }

//   'md': '768px',
//   // => @media (min-width: 768px) { ... }

//   'lg': '1024px',
//   // => @media (min-width: 1024px) { ... }

//   'xl': '1280px',
//   // => @media (min-width: 1280px) { ... }

//   '2xl': '1536px',
//   // => @media (min-width: 1536px) { ... }
// }
