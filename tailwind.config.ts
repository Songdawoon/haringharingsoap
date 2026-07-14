import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFB6C1",
        secondary: "#20B2AA",
        accent: "#FF69B4",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        handwriting: ["var(--font-handwriting)"],
      },
    },
  },
  plugins: [],
};
export default config;
