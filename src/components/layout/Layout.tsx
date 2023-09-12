import React, { FC, ReactNode, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import useStore from "../../store";
import Nav from "./navi/Nav";
import { noto } from "../../lib/font";
import Whiteout from "../atoms/whiteout/Whiteout";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { humbarger } = useStore();

  return (
    <>
      <Header />
      <div
        className={`relative z-10 shadow-right transition-transform duration-500 ${
          humbarger && " translate-x-[-70vw] sm:translate-x-[-354px] "
        }`}
      >
        <Whiteout />
        <main
          className={`${noto.className} relative z-10 overflow-x-hidden bg-whiteColor pb-[180px] pt-[64px] sm:pt-[96px]`}
        >
          {children}
        </main>
        <Footer />
      </div>
      <Nav />
    </>
  );
};

export default Layout;
