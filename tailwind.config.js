/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      animation: {
        gradient: "gradientBG 10s ease infinite",
        fadeIn: "fadeIn 1.2s ease forwards",
      },
      keyframes: {
        gradientBG: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      colors: {
        primaryBgColor: "#ffffff",
        secondaryBgColor: {
          100: "#fef9c3", // yellow-100
          300: "#fde68a", // yellow-300
        },
        primaryTextColor: "#000000",
        secondaryTextColor: "#333333",
      },
      boxShadow: {
        "3xl": "1.5px 4.5px 8px 4.5px #dddddd",
      },
    },
  },
  plugins: [],
};
