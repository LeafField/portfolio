import { screen, render } from "@testing-library/react";
import ContentParser from "./ContentParser";
import { dummyContentData } from "../../../lib/dummyData";

describe("ContentParserの単体テスト", () => {
  it("ダミーデータに対してタイトル、リンクが正しく表示されているか", () => {
    expect.assertions(2);
    render(<ContentParser post={dummyContentData} />);
    expect(
      screen.getByRole("heading", { name: dummyContentData.title }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "サイトURL" })).toHaveAttribute(
      "href",
      dummyContentData.siteurl,
    );
  });

  it("html-react-parserに渡したcontentデータが正しくレンダリングされているかどうか", () => {
    expect.assertions(3);
    render(<ContentParser post={dummyContentData} />);
    expect(
      screen.getByRole("heading", { name: "アプリ概要" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "使用技術" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "今後の課題" }),
    ).toBeInTheDocument();
  });

  it("スナップショットテスト", () => {
    const { container } = render(<ContentParser post={dummyContentData} />);
    expect(container).toMatchSnapshot();
  });
});
