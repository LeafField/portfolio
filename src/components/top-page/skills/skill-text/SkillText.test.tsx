import { screen, render } from "@testing-library/react";
import SkillText from "./SkillText";

describe("SkillTextの単体テスト", () => {
  it("タイトルが正しく表示されているか", () => {
    render(<SkillText />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      "フロントエンドの高みを目指して",
    );
  });

  it("スナップショットテスト", () => {
    const { container } = render(<SkillText />);
    expect(container).toMatchSnapshot();
  });
});
