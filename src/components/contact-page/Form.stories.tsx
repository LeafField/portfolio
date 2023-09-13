import { Meta, StoryObj } from "@storybook/react";
import Form from "./Form";
import { noto } from "../../lib/font";

const meta: Meta<typeof Form> = {
  title: "contact-page/Form",
  component: Form,
  decorators: [
    (StoryComponents) => (
      <div className={`${noto.className}`}>
        <StoryComponents />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FormStory: Story = {};
