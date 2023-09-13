import { Meta, StoryObj } from "@storybook/react";
import ContentImage from "./ContentImage";
import { noto } from "../../../lib/font";
import { dummyContentData } from "../../../lib/dummyData";

const meta: Meta<typeof ContentImage> = {
  title: "content-page/ContentImage",
  component: ContentImage,
  decorators: [
    (StoryComponents) => (
      <div className={`${noto.className} mx-auto max-w-[816px] pt-8 `}>
        <StoryComponents />
      </div>
    ),
  ],
  args: {
    post: dummyContentData,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ContentImageStory: Story = {};
