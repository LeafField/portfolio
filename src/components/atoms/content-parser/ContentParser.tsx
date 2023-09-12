import React, { FC, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import { EndPoints } from "../../../../types/cms-types";
import Image from "next/image";
import parse, {
  HTMLReactParserOptions,
  Element,
  domToReact,
  DOMNode,
} from "html-react-parser";
import uTurnImage from "../../../../public/uturn.svg";
import { motion } from "framer-motion";

type Props = {
  post: EndPoints["get"]["portfolio"];
};

const parserOptions: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (!(domNode instanceof Element)) return;
    switch (domNode.name) {
      case "h3":
        return (
          <h3 className="mb-2 pt-8 text-2xl font-bold">
            {domToReact(domNode.children)}
          </h3>
        );

      case "p":
        return <p className="pt-1 leading-6">{domToReact(domNode.children)}</p>;

      case "ul":
        return (
          <ul className="m-[revert] list-disc p-[revert]">
            {domToReact(domNode.children)}
          </ul>
        );

      default:
        return domNode;
    }
  },
};

const ContentParser: FC<Props> = ({ post }) => {
  const ref = useRef<HTMLDivElement>(null);

  const viewPortCalc = useCallback(() => {
    const vw = document.body.offsetWidth / 100;
    ref.current?.style.setProperty("--vw", `${vw}px`);
  }, [ref]);

  useEffect(() => {
    viewPortCalc();
    window.addEventListener("resize", viewPortCalc);

    return () => {
      window.removeEventListener("resize", viewPortCalc);
    };
  }, [viewPortCalc]);

  return (
    <article className="mx-auto max-w-[816px] px-4 pt-[80px] ">
      <figure className="relative mr-auto aspect-video w-[90%] overflow-hidden ">
        <Image
          src={post.image.url}
          alt={post.title}
          width={post.image.width}
          height={post.image.height}
          placeholder="blur"
          blurDataURL={post.image.blurDataURL}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </figure>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ x: { duration: 0.6 }, ease: "easeInOut" }}
        ref={ref}
        className="relative z-10 ml-auto mr-[calc(50%-50*var(--vw))] mt-[-24px] w-fit border border-r-0 border-whiteColor bg-mainColor/10 py-4 pl-4 pr-[calc(50*var(--vw)-50%)] text-right shadow-md backdrop-blur-sm "
      >
        <h2 className=" text-xl text-main-textColor sm:text-3xl">
          {post.title}
        </h2>
        <div className="mt-1 flex flex-row-reverse gap-8">
          <Link
            className="ml-auto mt-2 block w-fit leading-4 text-[revert] text-blue-700 underline "
            href={post.siteurl}
            target="_blank"
          >
            サイトURL
          </Link>
          <Link
            className="ml-auto mt-2 block w-fit leading-4 text-[revert] text-blue-700 underline "
            href={post.github}
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </motion.div>
      <div className="pt-8">{parse(post.content, parserOptions)}</div>

      <Link scroll={false} href={"/portfolio"} className="mt-16 flex gap-2">
        <Image
          className="block"
          src={uTurnImage}
          alt="矢印"
          width={32}
          height={32}
        />
        <span className="text-2xl">一覧に戻る</span>
      </Link>
    </article>
  );
};

export default ContentParser;
