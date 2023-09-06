import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./ArticleCard.stories";

const { CardStory, ReverseCardStory } = composeStories(stories);

const testDescription =
  "figmaにてデザインから行いNext.jsで開発しました。訪れた人が癒されるようなコンセプトです。デザインから作る事でフロントエンドエンジニアとして、デザインへの理解を深めるいい機会になりました。";

describe("ArticleCardの単体テスト", () => {
  it("propsで渡されたdummyDataのtitleとdescriptionが正しく表示されている", () => {
    expect.assertions(2);
    render(<CardStory />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      "このポートフォリオサイト",
    );
    expect(screen.getByText(testDescription)).toBeInTheDocument();
  });

  it("reverseがfalseの時、flex-col-reverseのクラス名が正しく存在しない", () => {
    render(<CardStory />);
    expect(screen.getByRole("article")).not.toHaveClass("flex-row-reverse");
  });

  it("reverseがtrueの時、flex-col-reverseのクラス名が正しく存在する", () => {
    render(<ReverseCardStory />);
    expect(screen.getByRole("article")).toHaveClass("flex-row-reverse");
  });
});
