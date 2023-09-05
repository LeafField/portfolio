import React from "react";
import { pacifico } from "../../../lib/font";
import Humbarger from "../humbarger/Humbarger";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-whiteColor sticky left-0 top-0 z-50 w-full shadow-sm">
      <div className="mx-auto flex h-24 max-w-[1366px] items-center justify-between px-11 ">
        <h1>
          <Link className={`${pacifico.className} text-[2rem]`} href={`/`}>
            LeafField
          </Link>
        </h1>
        <Humbarger />
      </div>
    </header>
  );
};

export default Header;
