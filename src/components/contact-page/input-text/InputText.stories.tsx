import { Meta, StoryObj } from "@storybook/react";
import InputText from "./InputText";
import { noto } from "../../../lib/font";

const dummyFn: () => any = () => {};

const meta: Meta<typeof InputText> = {
  title: "contact-page/inputText",
  component: InputText,
  args: {
    register: dummyFn,
  },
  decorators: [
    (StoryComponents) => (
      <div className={`pt-8 ${noto.className}`}>
        <StoryComponents />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const NameStory: Story = {
  args: {
    registerType: "name",
    label: "お名前",
  },
};

export const DummyFormsStory: Story = {
  args: {
    registerType: "name",
    label: "お名前",
  },
  decorators: [
    (StoryComponents) => (
      <div className={`pt-8 ${noto.className}`}>
        <StoryComponents />
        <StoryComponents />
        <StoryComponents />
      </div>
    ),
  ],
};
