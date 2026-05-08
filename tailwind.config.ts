import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#080808",
          red: "#CC1F1F",
          "red-hover": "#E02222",
          "red-dim": "#991717",
          white: "#FFFFFF",
          gray: "#A0A0A0",
          "gray-dark": "#1A1A1A",
          border: "#222222",
        },
      },
      fontFamily: {
        display: ["var(--font-barlow)", "Barlow Condensed", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "pulse-live": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "pulse-live": "pulse-live 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
