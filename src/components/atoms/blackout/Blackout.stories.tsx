import { Meta, StoryObj } from "@storybook/react";
import Blackout from "./Blackout";

const meta = {
  title: "atoms/Blackout",
  component: Blackout,
} satisfies Meta<typeof Blackout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BlackoutStory: Story = {};
