import React, { FC } from "react";
import Link from "next/link";
import { EndPoints } from "../../../types/cms-types";
import Image from "next/image";
import uTurnImage from "../../../public/uturn.svg";
import HtmlParser from "./html-parser/HtmlParser";
import ContentImage from "./content-image/ContentImage";

type Props = {
  post: EndPoints["get"]["portfolio"];
};

const ContentParser: FC<Props> = ({ post }) => {
  return (
    <article className="mx-auto max-w-[816px] px-4 pt-[80px] ">
      <ContentImage post={post} />
      <HtmlParser post={post} />

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
