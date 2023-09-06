import { Meta, StoryObj } from "@storybook/react";
import CardLine from "./CardLine";
import { noto } from "../../lib/font";
import { multipleDummyData } from "../../lib/dummyData";

const meta = {
  title: "portfolio-page/CardLine",
  component: CardLine,
  decorators: [
    (StoryComponets) => (
      <div className={noto.className}>
        <StoryComponets />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardLineStory: Story = {
  args: {
    posts: multipleDummyData.contents,
  },
};
