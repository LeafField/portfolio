import { Meta, StoryObj } from "@storybook/react";
import SkillText from "./SkillText";
import { notoBold } from "../../../../lib/font";

const meta: Meta = {
  title: "skill/SkillText",
  component: SkillText,
  decorators: [
    (StoryComponent) => (
      <div className={`max-w-[620px] ${notoBold}`}>
        <StoryComponent />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SkillTextStory: Story = {};
