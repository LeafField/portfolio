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
      className={`fixed right-0 top-0 z-0 flex h-[calc(100svh-64px)] max-h-[650px] flex-col text-main-textColor sm:h-[calc(100svh-96px)] ${
        !humbarger && "opacity-0 delay-[0.6s] "
      } `}
    >
      <h2
        className={`${pacifico.className} mx-auto mt-[80px] w-fit text-5xl sm:mt-[112px]`}
      >
        Menu
      </h2>
      <ul
        className={`${roboto.className} flex flex-1 flex-col items-center justify-between p-7 text-2xl sm:p-[58px]  sm:text-4xl`}
      >
        <li data-testid="navigation-list">
          <Link
            scroll={false}
            href={"/"}
            className="relative block w-min after:block after:h-[1px] after:w-[100%] after:scale-0 after:bg-main-textColor after:transition-transform after:duration-300 hover:after:scale-100 "
          >
            TOP
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            className="relative block w-min after:block after:h-[1px] after:w-[100%] after:scale-0 after:bg-main-textColor after:transition-transform after:duration-300 hover:after:scale-100 "
            href={"/portfolio"}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            className="relative block w-min after:block after:h-[1px] after:w-[100%] after:scale-0 after:bg-main-textColor after:transition-transform after:duration-300 hover:after:scale-100 "
            href={"/contact"}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
            className="relative block w-min after:block after:h-[1px] after:w-[100%] after:scale-0 after:bg-main-textColor after:transition-transform after:duration-300 hover:after:scale-100 "
            target="_blank"
            href={"https://github.com/LeafField"}
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            scroll={false}
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
