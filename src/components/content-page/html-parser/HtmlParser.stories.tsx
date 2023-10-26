import { Meta, StoryObj } from "@storybook/react";
import HtmlParser from "./HtmlParser";
import { noto } from "../../../lib/font";
import { dummyContentData } from "../../../lib/dummyData";

const meta: Meta<typeof HtmlParser> = {
  title: "content-page/HtmlParser",
  component: HtmlParser,
  decorators: [
    (StoryComponents) => (
      <div className={`${noto.className} mx-auto max-w-[816px] `}>
        <StoryComponents />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HtmlParserStory: Story = {
  args: {
    post: dummyContentData,
  },
};
