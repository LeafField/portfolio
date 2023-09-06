import { Meta, StoryObj } from "@storybook/react";
import ArticleCard from "./ArticleCard";
import { dummyData } from "../../../lib/dummyData";
import { noto } from "../../../lib/font";

const meta = {
  title: "portfolio-page/card",
  component: ArticleCard,
  decorators: [
    (StoryComponet) => (
      <div
        className={`${noto.className} flex items-center justify-center pt-9 `}
      >
        <StoryComponet />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardStory: Story = {
  args: {
    reverse: false,
    post: dummyData,
  },
};

export const ReverseCardStory: Story = {
  args: {
    reverse: true,
    post: dummyData,
  },
};
