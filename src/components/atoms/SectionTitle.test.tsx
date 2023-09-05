import { screen, render } from "@testing-library/react";
import SectionTitle from "./SectionTitle";

describe("SectionTitleの単体テスト", () => {
  it("タイトルにSkillsと入力した場合、正しくレンダリングされるかどうか", () => {
    render(<SectionTitle title="Skills" />);
    expect(screen.getByRole("heading")).toHaveTextContent("Skills");
  });

  it("タイトルにPortfolioと入力した場合、正しくレンダリングされるかどうか", () => {
    render(<SectionTitle title="Portfolio" />);
    expect(screen.getByRole("heading")).toHaveTextContent("Portfolio");
  });

  it("スナップショットテスト", () => {
    const { container } = render(<SectionTitle title="Skills" />);
    expect(container).toMatchSnapshot();
  });
});
