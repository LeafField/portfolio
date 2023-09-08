import { Meta, StoryObj } from "@storybook/react";
import Whiteout from "./Whiteout";

const meta = {
  title: "atoms/Whiteout",
  component: Whiteout,
} satisfies Meta<typeof Whiteout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BlackoutStory: Story = {};
