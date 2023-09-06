import { screen, render } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import * as stories from "./Article.stories";

const { ArticleStory } = composeStories(stories);

describe("Articleの単体テスト", () => {
  it("ダミーデータを入力し、Articleにtitleとdescriptionが正しく表示されているか", () => {
    render(<ArticleStory />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      "このポートフォリオサイト",
    );
    expect(
      screen.getByText(
        "figmaにてデザインから行いNext.jsで開発しました。訪れた人が癒されるようなコンセプトです。デザインから作る事でフロントエンドエンジニアとして、デザインへの理解を深めるいい機会になりました。",
      ),
    ).toBeInTheDocument();
  });

  it("スナップショットテスト", () => {
    const { container } = render(<ArticleStory />);
    expect(container).toMatchSnapshot();
  });
});
