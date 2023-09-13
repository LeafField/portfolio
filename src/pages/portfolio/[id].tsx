import React from "react";
import { InferGetStaticPropsType, GetStaticPaths, NextPage } from "next/types";
import { client } from "../../lib/client";
import { EndPoints } from "../../../types/cms-types";
import ContentParser from "../../components/content-page/ContentParser";
import { getPlaiceholder } from "plaiceholder";
import { motion } from "framer-motion";
import Meta from "../../components/atoms/metadata/Meta";

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res = await client.get<EndPoints["gets"]["portfolio"]>({
      endpoint: "portfolio",
      queries: { fields: "id" },
    });
    const paths = res.contents.map((post) => ({ params: { id: post.id } }));

    return {
      paths,
      fallback: false,
    };
  } catch (err: any) {
    console.log("ポートフォリオ個別ページのgetStaticPathsのエラー");
    throw new Error(err);
  }
};

type Params = {
  params: {
    id: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  try {
    const post = await client.get<EndPoints["get"]["portfolio"]>({
      endpoint: "portfolio",
      contentId: params!.id,
    });
    const buffer = await fetch(post.image.url).then(async (res) =>
      Buffer.from(await res.arrayBuffer()),
    );
    const { base64 } = await getPlaiceholder(buffer);
    post.image.blurDataURL = base64;
    return {
      props: {
        post,
      },
    };
  } catch (err: any) {
    console.log("ポートフォリオ個別ページのgetStaticPropsのエラー");
    throw new Error(err);
  }
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const ContentPage: NextPage<Props> = ({ post }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Meta title={post.title} />
      <ContentParser post={post} />
    </motion.div>
  );
};

export default ContentPage;
