import { Meta, StoryObj } from "@storybook/react";
import Loading from "./Loading";

const meta: Meta<typeof Loading> = {
  title: "atoms/Loading",
  component: Loading,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingStory: Story = {};
