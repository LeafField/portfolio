import { Pacifico, Noto_Sans_JP, Roboto } from "next/font/google";

export const pacifico = Pacifico({ subsets: ["latin"], weight: "400" });
export const noto = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400"],
});
export const notoBold = Noto_Sans_JP({ subsets: ["latin"], weight: "500" });
export const roboto = Roboto({ subsets: ["latin"], weight: "400" });
export const robotoBold = Roboto({ subsets: ["latin"], weight: "700" });
