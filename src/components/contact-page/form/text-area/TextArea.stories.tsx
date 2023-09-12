import { Meta, StoryObj } from "@storybook/react";
import TextArea from "./TextArea";
import { noto } from "../../../../lib/font";

const dummyFn: () => any = () => {};

const meta: Meta<typeof TextArea> = {
  title: "contact-page/TextArea",
  component: TextArea,
  decorators: [
    (StoryComponents) => (
      <div className={`${noto.className} mx-auto max-w-[1000px] pt-8`}>
        <StoryComponents />
      </div>
    ),
  ],
  args: {
    register: dummyFn,
    errorMessage: "",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TextAreaStory = {};
