import { Meta, StoryObj } from "@storybook/react";
import Humbarger from "./Humbarger";

const meta = {
  title: "layout/HumbargerButton",
  component: Humbarger,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Close: Story = {};
