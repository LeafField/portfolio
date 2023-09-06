import { Meta, StoryObj } from "@storybook/react";
import PageTop from "./PageTop";

const meta = {
  title: "atoms/page-top",
  component: PageTop,
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const PageTopStory: Story = {
  args: {
    title: "Portfolio",
  },
};
