import { Meta, StoryObj } from "@storybook/react";
import Form from "./Form";
import { noto } from "../../lib/font";
import { rest } from "msw";

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
  parameters: {
    msw: {
      handlers: [
        rest.post("/api/mail", (req, res, ctx) => {
          return res(
            ctx.json({
              message: "送信できました",
            }),
          );
        }),
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const FormStory: Story = {};
