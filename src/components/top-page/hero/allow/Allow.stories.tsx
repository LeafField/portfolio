import { Meta, StoryObj } from "@storybook/react";
import Allow from "./Allow";

const meta: Meta = {
  title: "Hero/Allow",
  component: Allow,
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AllowStory: Story = {};
