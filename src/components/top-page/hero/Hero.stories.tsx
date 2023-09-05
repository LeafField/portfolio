import { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

const meta: Meta = {
  title: "top-page/Hero",
  component: Hero,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeroStory: Story = {};
