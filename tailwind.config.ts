import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#131520",
          light:   "#1e2338",
          dark:    "#0b0d18",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light:   "#dfc070",
          dark:    "#a8832d",
        },
        cream: {
          DEFAULT: "#FBF8F2",
          dark:    "#EDE8DF",
        },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter:    ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        marquee:   "marquee 30s linear infinite",
        marquee2:  "marquee2 30s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%":   { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
