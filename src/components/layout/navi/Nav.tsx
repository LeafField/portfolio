import React from "react";
import Link from "next/link";
import { pacifico, roboto } from "../../../lib/font";
import useStore from "../../../store";

const Nav = () => {
  const { humbarger } = useStore();
  return (
    <nav
      id="navi"
      role="navigation"
      data-testid="navi"
      aria-hidden={!humbarger}
      className={`fixed right-0 top-0 z-0 text-main-textColor`}
    >
      <h2 className={`${pacifico.className} mx-auto w-fit text-[64px]`}>
        Menu
      </h2>
      <ul
        className={`${roboto.className} flex flex-col items-center justify-center space-y-6 p-7 text-4xl sm:space-y-[58px] sm:p-[58px]`}
      >
        <li>
          <Link
            href={"/"}
            className="relative block w-min after:block after:h-[1px] after:w-[100%] after:scale-0 after:bg-main-textColor after:transition-transform after:duration-300 hover:after:scale-100 "
          >
            TOP
          </Link>
        </li>
        <li>
          <Link
            className="relative block w-min after:block after:h-[1px] after:w-[100%] after:scale-0 after:bg-main-textColor after:transition-transform after:duration-300 hover:after:scale-100 "
            href={"/portfolio"}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            className="relative block w-min after:block after:h-[1px] after:w-[100%] after:scale-0 after:bg-main-textColor after:transition-transform after:duration-300 hover:after:scale-100 "
            href={"/contact"}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className="relative block w-min after:block after:h-[1px] after:w-[100%] after:scale-0 after:bg-main-textColor after:transition-transform after:duration-300 hover:after:scale-100 "
            target="_blank"
            href={"https://github.com/LeafField"}
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            className="relative block w-min after:mt-1 after:block after:h-[1px] after:w-[100%] after:scale-0 after:bg-main-textColor after:transition-transform after:duration-300 hover:after:scale-100 "
            target="_blank"
            href={"https://twitter.com/youko8713"}
          >
            {"X(Twitter)"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
