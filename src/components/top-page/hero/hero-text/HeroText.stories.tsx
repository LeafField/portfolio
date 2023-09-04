import { Meta, StoryObj } from "@storybook/react";
import HeroText from "./HeroText";

const meta: Meta = {
  title: "Hero/HeroText",
  component: HeroText,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeroTextStory: Story = {};
