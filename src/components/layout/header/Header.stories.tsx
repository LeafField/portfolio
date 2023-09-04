import { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";

const meta: Meta = {
  title: "layout/header",
  component: Header,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
