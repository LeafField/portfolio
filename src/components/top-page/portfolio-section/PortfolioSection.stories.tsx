import { Meta, StoryObj } from "@storybook/react";
import PortfolioSection from "./PortfolioSection";
import { noto } from "../../../lib/font";
import { multipleDummyData } from "../../../lib/dummyData";

const meta: Meta = {
  title: "top-page/portfolio",
  component: PortfolioSection,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PortFolioSectionStory: Story = {
  args: {
    posts: multipleDummyData.contents,
  },
  decorators: [
    (StoryComponent) => (
      <div className={noto.className}>
        <StoryComponent />
      </div>
    ),
  ],
};
