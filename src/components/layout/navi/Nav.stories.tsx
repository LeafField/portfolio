import { Meta, StoryObj } from "@storybook/react";
import Nav from "./Nav";

const meta: Meta = {
  title: "layout/navigation",
  component: Nav,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NavigationStory: Story = {};
