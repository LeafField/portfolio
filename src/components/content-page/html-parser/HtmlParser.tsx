import React, { FC } from "react";
import Image from "next/image";
import { EndPoints } from "../../../../types/cms-types";
import parse, {
  DOMNode,
  HTMLReactParserOptions,
  domToReact,
  Element,
} from "html-react-parser";

const parserOptions: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element) {
      if (domNode.name === "h3") {
        return (
          <h3 className="mb-2 pt-8 text-2xl font-bold">
            {domToReact(domNode.children)}
          </h3>
        );
      } else if (domNode.name === "p") {
        return <p className="pt-1 leading-6">{domToReact(domNode.children)}</p>;
      } else if (domNode.name === "ul") {
        return (
          <ul className="m-[revert] list-disc p-[revert]">
            {domToReact(domNode.children)}
          </ul>
        );
      } else if (domNode.name === "img" && domNode.attribs) {
        return (
          <figure className="relative my-4 aspect-video w-full overflow-hidden sm:w-[500px]">
            <Image
              src={domNode.attribs.src}
              alt={domNode.attribs.alt}
              fill
              sizes="(min-width:640px) 500px,100vw"
              style={{ width: "100%", objectFit: "cover" }}
              className="block"
            />
          </figure>
        );
      }
    }
  },
};

type Props = {
  post: EndPoints["get"]["portfolio"];
};

const HtmlParser: FC<Props> = ({ post }) => {
  return <div className="pt-8">{parse(post.content, parserOptions)}</div>;
};

export default HtmlParser;
