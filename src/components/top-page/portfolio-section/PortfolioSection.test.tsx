import { screen, render } from "@testing-library/react";
import PortfolioSection from "./PortfolioSection";
import { multipleDummyData } from "./dummyData";

describe("Portfolioセクションの結合テスト", () => {
  it("複数のダミーデータに大してそれぞれ正しくレンダリングされているかどうか", () => {
    render(<PortfolioSection posts={multipleDummyData.contents} />);
    expect(
      screen.getByRole("heading", {
        name: multipleDummyData.contents[0].title,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: multipleDummyData.contents[1].title,
      }),
    ).toBeInTheDocument();
  });
});
