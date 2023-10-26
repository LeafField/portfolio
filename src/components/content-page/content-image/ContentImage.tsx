import React, { FC, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { EndPoints } from "../../../../types/cms-types";
import { motion } from "framer-motion";

type Props = {
  post: EndPoints["get"]["portfolio"];
};

const ContentImage: FC<Props> = ({ post }) => {
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
    <>
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
          {post.siteurl && (
            <Link
              className="ml-auto mt-2 block w-fit leading-4 text-blue-700 underline "
              href={post.siteurl}
              target="_blank"
            >
              サイトURL
            </Link>
          )}
          <Link
            className="ml-auto mt-2 block w-fit leading-4 text-blue-700 underline "
            href={post.github}
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default ContentImage;
