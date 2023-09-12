import { Meta, StoryObj } from "@storybook/react";
import ContactText from "./ContactText";
import { noto } from "../../../lib/font";

const meta = {
  title: "contact-page/ContactText",
  component: ContactText,
  decorators: [
    (StoryComponents) => (
      <div className={noto.className}>
        <StoryComponents />
      </div>
    ),
  ],
} satisfies Meta<typeof ContactText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ContactTextStory = {};
