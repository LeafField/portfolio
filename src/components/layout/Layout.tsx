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
      <Nav />
      <div
        className={`shadow-right relative z-10 transition-transform duration-500 ${
          humbarger && " translate-x-[-70vw] sm:translate-x-[-354px] "
        }`}
      >
        <Whiteout />
        <Header />
        <main
          className={`${noto.className} overflow-x-hidden bg-whiteColor pb-[180px]`}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
