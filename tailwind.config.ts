import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1220",
        mist: "#f4f7fb",
        line: "#d7e0ec",
        brand: {
          DEFAULT: "#0f766e",
          dark: "#0d5f59",
          soft: "#e6f5f3"
        },
        accent: "#ea580c"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"]
      },
      boxShadow: {
        panel: "0 24px 60px rgba(11, 18, 32, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
