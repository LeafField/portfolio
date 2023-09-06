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
        className={`${roboto.className} space-y-[58px] p-[58px] text-center text-4xl`}
      >
        <li>
          <Link href={"/"}>TOP</Link>
        </li>
        <li>
          <Link href={"/portfolio"}>Portfolio</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link target="_blank" href={"https://github.com/LeafField"}>
            GitHub
          </Link>
        </li>
        <li>
          <Link target="_blank" href={"https://twitter.com/youko8713"}>
            {"X(Twitter)"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
