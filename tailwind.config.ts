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
    },
  },

  plugins: [],
};
export default config;
