import React, { FC, ReactNode, useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import useStore from "../../store";
import Nav from "./navi/Nav";
import { noto } from "../../lib/font";
import Blackout from "../atoms/blackout/Blackout";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { humbarger } = useStore();

  useEffect(() => {
    if (humbarger) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.removeAttribute("style");
    }
  }, [humbarger]);

  return (
    <>
      <Nav />
      <div
        className={`relative z-10 shadow-2xl transition-transform duration-500 ${
          humbarger && " translate-x-[-70vw] sm:translate-x-[-354px] "
        }`}
      >
        <Header />
        <main
          className={`${noto.className} relative overflow-x-hidden bg-whiteColor pb-[180px]`}
        >
          <Blackout />
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
