import React from "react";
import { pacifico } from "../../../lib/font";
import Humbarger from "../humbarger/Humbarger";
import Link from "next/link";
import useStore from "../../../store";

const Header = () => {
  const { humbarger } = useStore();
  return (
    <header className="sticky left-0 top-0 z-50 w-full bg-whiteColor shadow-md">
      <div className="mx-auto flex h-16 max-w-[1366px] items-center justify-between px-11 sm:h-24 ">
        <h1>
          <Link
            className={`${pacifico.className} ${
              humbarger && "pointer-events-none cursor-default"
            } text-[2rem]`}
            href={`/`}
          >
            LeafField
          </Link>
        </h1>
        <Humbarger />
      </div>
    </header>
  );
};

export default Header;
