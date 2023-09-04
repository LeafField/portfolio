import { Meta, StoryObj } from "@storybook/react";
import Humbarger from "./Humbarger";

const meta = {
  title: "layout/HumbargerButton",
  component: Humbarger,
  decorators: [
    (StoryComponent) => (
      <div className="flex h-32 w-full items-center justify-center">
        <StoryComponent />
      </div>
    ),
  ],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Close: Story = {};
