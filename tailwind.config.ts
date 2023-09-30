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
      boxShadow: {
        right:
          "8px 0 6px -1px rgb(0 0 0 / 0.1), 4px 0 4px -2px rgb(0 0 0 / 0.1)",
      },
      keyframes: {
        leftSlide: {
          "0%": { transform: "translateX(100vw)" },
          "100%": { transform: "translateX(0)" },
        },
        wakeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        leftSlide: "leftSlide 1s ease-in-out",
        wakeUp: "wakeUp 0.6s ease-in-out",
      },
    },
  },

  plugins: [],
};
export default config;
