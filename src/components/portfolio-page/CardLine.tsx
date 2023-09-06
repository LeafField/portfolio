import React, { FC } from "react";
import { EndPoints } from "../../../types/cms-types";
import ArticleCard from "./article-card/ArticleCard";

type Props = {
  posts: EndPoints["gets"]["portfolio"]["contents"];
};

const CardLine: FC<Props> = ({ posts }) => {
  return (
    <section className="mx-auto mt-[180px] max-w-5xl space-y-[120px] px-4">
      {posts.map((post, i) => (
        <ArticleCard post={post} key={post.id} reverse={i % 2 !== 0} />
      ))}
    </section>
  );
};

export default CardLine;
