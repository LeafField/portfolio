import { Meta, StoryObj } from "@storybook/react";
import ContentParser from "./ContentParser";
import { noto } from "../../../lib/font";
import { dummyContentData } from "../../../lib/dummyData";

const meta = {
  title: "atoms/parser",
  component: ContentParser,
  decorators: [
    (StoryComponents) => (
      <div className={`${noto.className} overflow-x-hidden `}>
        <StoryComponents />
      </div>
    ),
  ],
} satisfies Meta<typeof ContentParser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DummyContentStory: Story = {
  args: {
    post: dummyContentData,
  },
};
