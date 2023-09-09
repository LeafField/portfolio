import React from "react";
import Link from "next/link";
import { pacifico, roboto } from "../../../lib/font";

const Footer = () => {
  return (
    <footer
      className={`flex items-center justify-center bg-mainColor py-[35px] text-white ${roboto.className}`}
    >
      <div className="flex flex-col gap-y-[50px] text-center">
        <h2>
          <Link
            scroll={false}
            className={`${pacifico.className} text-[2rem]`}
            href={"/"}
          >
            LeafField
          </Link>
        </h2>
        <ul className="flex flex-col gap-7 text-2xl sm:flex-row sm:gap-16">
          <li>
            <Link scroll={false} href={"/portfolio"}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link scroll={false} href={"/contact"}>
              Contact
            </Link>
          </li>
          <li>
            <Link
              scroll={false}
              target="_blank"
              href={"https://github.com/LeafField"}
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              scroll={false}
              target="_blank"
              href={"https://twitter.com/youko8713"}
            >
              {"X(Twitter)"}
            </Link>
          </li>
        </ul>
        <small className="text-base">2023&copy;LeafField</small>
      </div>
    </footer>
  );
};

export default Footer;
