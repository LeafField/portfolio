import { Meta, StoryObj } from "@storybook/react";
import SectionTitle from "./SectionTitle";

const meta: Meta = {
  title: "atoms/SectionTitle",
  component: SectionTitle,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Skills: Story = {
  args: {
    title: "Skills",
  },
};

export const PortFolio: Story = {
  args: {
    title: "Portfolio",
  },
};
