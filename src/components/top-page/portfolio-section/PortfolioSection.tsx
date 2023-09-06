import React, { FC } from "react";
import SectionTitle from "../../atoms/SectionTitle";
import { EndPoints } from "../../../../types/cms-types";
import Article from "./article/Article";

type Props = {
  posts: EndPoints["gets"]["portfolio"]["contents"];
};

const PortfolioSection: FC<Props> = ({ posts }) => {
  return (
    <section className="px-4 pt-[180px] ">
      <SectionTitle title="Portfolio" />
      <div className="mx-auto grid max-w-[1280px] gap-y-8 pt-[60px] sm:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] sm:gap-x-4 ">
        {posts.map((post) => (
          <Article post={post} key={post.id} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
