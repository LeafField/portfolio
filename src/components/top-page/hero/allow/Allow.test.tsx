import { screen, render } from "@testing-library/react";
import Allow from "./Allow";

describe("Allowの単体テスト", () => {
  it("文字が正しくレンダリングされているか", () => {
    render(<Allow />);
    expect(screen.getByText("Scroll")).toBeInTheDocument();
  });

  it("スナップショットテスト", () => {
    const { container } = render(<Allow />);
    expect(container).toMatchSnapshot();
  });
});
