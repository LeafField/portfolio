import React, {
  FC,
  useCallback,
  useLayoutEffect,
  useRef,
  useEffect,
} from "react";
import Link from "next/link";
import { EndPoints } from "../../../../types/cms-types";
import Image from "next/image";
import parse from "html-react-parser";
import styles from "./ContentParser.module.css";
import uTurnImage from "../../../../public/uturn.svg";

type Props = {
  post: EndPoints["get"]["portfolio"];
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
      <div
        ref={ref}
        className="relative z-10 ml-auto mr-[calc(50%-50*var(--vw))] mt-[-24px] w-fit animate-leftSlide border border-r-0 border-whiteColor bg-mainColor/10 py-4 pl-4 pr-[calc(50*var(--vw)-50%)] text-right shadow-md backdrop-blur-sm transition duration-300 hover:translate-y-1 hover:shadow-none"
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
      </div>
      <div className={styles.content}>{parse(post.content)}</div>

      <Link href={"/portfolio"} className="mt-8 flex gap-2">
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
