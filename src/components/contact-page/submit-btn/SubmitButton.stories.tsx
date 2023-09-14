import { Meta, StoryObj } from "@storybook/react";
import SubmitButton from "./SubmitButton";
import { noto } from "../../../lib/font";

const meta: Meta<typeof SubmitButton> = {
  title: "contact-page/submitButton",
  component: SubmitButton,
  decorators: [
    (StoryComponents) => (
      <div className={noto.className}>
        <StoryComponents />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SubmitButtonStory: Story = {
  args: {
    busy: false,
    completed: false,
  },
};
