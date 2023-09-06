import React, { FC } from "react";
import { EndPoints } from "../../../../../types/cms-types";
import Link from "next/link";
import Image from "next/image";
import { notoBold } from "../../../../lib/font";

type Props = {
  post: EndPoints["get"]["portfolio"];
};

const Article: FC<Props> = ({ post }) => {
  return (
    <article
      key={post.id}
      className="transition-shadow duration-300 hover:shadow-lg"
    >
      <Link href={`/portfolio/${post.id}`}>
        <figure className="h-[229px] w-full overflow-hidden">
          <Image
            src={post.image.url}
            alt="サムネイル画像"
            width={post.image.width}
            height={post.image.height}
            style={{ maxWidth: "100%", height: "auto" }}
            placeholder="blur"
            blurDataURL={post.image.blurDataURL}
          />
        </figure>
        <h3
          className={`${notoBold.className} relative z-10 mt-[-49px] flex h-[50px] w-full justify-center text-lg min-[420px]:text-2xl `}
        >
          <span className="flex h-full w-fit items-center justify-center bg-whiteColor px-8">
            {post.title}
          </span>
        </h3>
        <p className=" p-2 text-justify">{post.description}</p>
      </Link>
    </article>
  );
};

export default Article;
