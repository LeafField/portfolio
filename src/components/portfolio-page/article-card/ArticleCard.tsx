import Image from "next/image";
import React, { FC } from "react";
import { EndPoints } from "../../../../types/cms-types";
import { notoBold } from "../../../lib/font";
import Link from "next/link";

type Props = {
  post: EndPoints["get"]["portfolio"];
  reverse: boolean;
};

const ArticleCard: FC<Props> = ({ post, reverse }) => {
  return (
    <Link className="block" href={`portfolio/${post.id}`}>
      <article
        className={`${
          reverse && "flex-row-reverse"
        } max-w-5xl justify-between gap-x-4 transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-1px] hover:shadow-lg md:flex lg:gap-x-[60px] `}
      >
        <figure className="relative mx-auto aspect-video w-full max-w-[409px] sm:h-[229px] ">
          <Image
            src={post.image.url}
            alt="ポートフォリオのサムネイル画像"
            width={post.image.width}
            height={post.image.height}
            placeholder="blur"
            blurDataURL={post.image.blurDataURL}
            style={{ maxWidth: "100%", height: "100%" }}
          />
        </figure>
        <div className="flex flex-col justify-center gap-y-1 p-4 md:gap-y-5 ">
          <h3
            className={`${notoBold.className} text-center text-lg sm:text-2xl md:text-left  `}
          >
            {post.title}
          </h3>
          <p>{post.description}</p>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
