import { EndPoints } from "../../types/cms-types";
import { getPlaiceholder } from "plaiceholder";

type Posts = EndPoints["gets"]["portfolio"]["contents"];

export const blurGenerator = async (posts: Posts) => {
  const blurGeneratedPosts = await Promise.all(
    posts.map(async (post) => {
      const buffer = await fetch(post.image.url).then(async (res) =>
        Buffer.from(await res.arrayBuffer()),
      );
      const { base64 } = await getPlaiceholder(buffer);
      post.image.blurDataURL = base64;
      return post;
    }),
  );

  return blurGeneratedPosts;
};
