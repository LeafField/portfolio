import { screen, render } from "@testing-library/react";
import HtmlParser from "./HtmlParser";
import { dummyContentData2 } from "../../../lib/dummyData";

describe("HtmlParserの単体テスト", () => {
  it("dummyContentDataに対して、各章のh3タグが正しくレンダリングされているか", () => {
    render(<HtmlParser post={dummyContentData2} />);
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
    const { container } = render(<HtmlParser post={dummyContentData2} />);
    expect(container).toMatchSnapshot();
  });
});
