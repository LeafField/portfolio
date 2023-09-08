import { Meta, StoryObj } from "@storybook/react";
import Layout from "./Layout";

const meta: Meta = {
  title: "layout/Layout",
  component: Layout,
  decorators: [
    (Story) => (
      <div className="m-0 p-0">
        <Story />
      </div>
    ),
  ],
  parameters: {
    nextjs: {
      router: {
        basepath: "/",
      },
    },
  },
};

export default meta;

export const Primary: StoryObj<typeof meta> = {};
