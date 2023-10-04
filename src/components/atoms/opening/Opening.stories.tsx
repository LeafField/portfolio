import { Meta, StoryObj } from "@storybook/react";
import Opening from "./Opening";

const meta: Meta<typeof Opening> = {
  title: "atoms/Opening",
  component: Opening,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const OpeningAnimationStory: Story = {};
