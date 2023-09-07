import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "main-textColor": "#333333",
        mainColor: "#B6B6B6",
        whiteColor: "#FDFDFD",
      },
      keyframes: {
        leftSlide: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        leftSlide: "leftSlide 1s ease-in-out",
      },
    },
  },

  plugins: [],
};
export default config;
