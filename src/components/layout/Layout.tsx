import React, { FC, ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import useStore from "../../store";
import Nav from "./navi/Nav";

type Props = {
  children: ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  const { humbarger } = useStore();
  return (
    <>
      <Nav />
      <div
        className={`relative z-10 shadow-xl transition-transform duration-500 ${
          humbarger &&
          " translate-x-[-70vw] translate-y-10 sm:translate-x-[-354px] sm:translate-y-[88px]"
        }`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
