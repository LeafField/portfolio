import { Meta, StoryObj } from "@storybook/react";
import Skills from "./Skills";
import { noto } from "../../../lib/font";

const meta: Meta = {
  title: "top-page/Skills",
  component: Skills,
  decorators: [
    (StoryComponent) => (
      <div className={noto.className}>
        <StoryComponent />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SkillsStory: Story = {};
