import React, { FC } from "react";
import { EndPoints } from "../../../../../types/cms-types";
import parse, {
  DOMNode,
  HTMLReactParserOptions,
  domToReact,
  Element,
} from "html-react-parser";

const parserOptions: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (!(domNode instanceof Element)) return;
    switch (domNode.name) {
      case "h3":
        return (
          <h3 className="mb-2 pt-8 text-2xl font-bold">
            {domToReact(domNode.children)}
          </h3>
        );

      case "p":
        return <p className="pt-1 leading-6">{domToReact(domNode.children)}</p>;

      case "ul":
        return (
          <ul className="m-[revert] list-disc p-[revert]">
            {domToReact(domNode.children)}
          </ul>
        );

      default:
        return domNode;
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
