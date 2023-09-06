import { Meta, StoryObj } from "@storybook/react";
import Article from "./Article";
import { EndPoints } from "../../../../../types/cms-types";
import testImage from "../../../../../public/jess-bailey-q10VITrVYUM-unsplash.jpg";

const dummyData: EndPoints["get"]["portfolio"] = {
  content: "",
  createdAt: "",
  description:
    "figmaにてデザインから行いNext.jsで開発しました。訪れた人が癒されるようなコンセプトです。デザインから作る事でフロントエンドエンジニアとして、デザインへの理解を深めるいい機会になりました。",
  id: "fsdfhjskjd",
  image: {
    height: testImage.height,
    width: testImage.width,
    url: `${testImage.src}`,
    blurDataURL: "fdsafjhgas",
  },
  publishedAt: "",
  revisedAt: "",
  title: "このポートフォリオサイト",
  updatedAt: "",
};

const meta: Meta = {
  title: "portfolio/Article",
  component: Article,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ArticleStory: Story = {
  args: {
    post: dummyData,
  },
  decorators: [
    (StoryComponent) => (
      <div className="grid max-w-[1280px] grid-cols-3 gap-4 pt-4 ">
        <div className="col-start-2">
          <StoryComponent />
        </div>
      </div>
    ),
  ],
};

export const AritcleThreeStory: Story = {
  args: {
    post: dummyData,
  },
  decorators: [
    (StoryComponent) => (
      <div className="px-4">
        <div className="mx-auto grid max-w-[1280px] gap-y-8 pt-4 sm:grid-cols-[repeat(auto-fill,minmax(360px,1fr))] sm:gap-x-4 ">
          <StoryComponent />
          <StoryComponent />
          <StoryComponent />
          <StoryComponent />
        </div>
      </div>
    ),
  ],
};
