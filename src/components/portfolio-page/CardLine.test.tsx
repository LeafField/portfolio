import { screen, render } from "@testing-library/react";
import * as stories from "./CardLine.stories";
import { composeStories } from "@storybook/react";

const { CardLineStory } = composeStories(stories);

describe("CardLineの結合テスト", () => {
  it("二つのダミーデータに大して奇数のarticleタグにはflex-row-reverseクラスが存在せず、偶数のarticleタグにはflex-row-reverseが存在する", () => {
    render(<CardLineStory />);
    const articles = screen.getAllByRole("article");
    expect(articles[0]).not.toHaveClass("flex-row-reverse");
    expect(articles[1]).toHaveClass("flex-row-reverse");
  });
});
