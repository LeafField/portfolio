import React from "react";
import { pacifico } from "../../../lib/font";

const Header = () => {
  return (
    <header className="mx-auto flex h-24 max-w-[1366px] items-center justify-between px-11">
      <h1 className={`${pacifico.className} text-[2rem]`}>LeafField</h1>
      <button>三</button>
    </header>
  );
};

export default Header;
