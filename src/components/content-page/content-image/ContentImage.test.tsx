import { screen, render } from "@testing-library/react";
import ContentImage from "./ContentImage";
import { dummyContentData } from "../../../lib/dummyData";

describe("ContentImageの単体テスト", () => {
  it("スナップショットテスト", () => {
    const { container } = render(<ContentImage post={dummyContentData} />);
    expect(container).toMatchSnapshot();
  });

  it("dummyContentDataに対して正しくレンダリングされているか", () => {
    render(<ContentImage post={dummyContentData} />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      "このポートフォリオサイト",
    );
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      dummyContentData.github,
    );
    expect(screen.getByRole("link", { name: "サイトURL" })).toHaveAttribute(
      "href",
      dummyContentData.siteurl,
    );
  });
});
