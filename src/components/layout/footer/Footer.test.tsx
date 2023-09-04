import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footerの単体テスト", () => {
  it("正しくレンダリングされているか", () => {
    render(<Footer />);
    expect(screen.getByRole("heading")).toHaveTextContent("LeafField");
  });

  it("スナップショットテスト", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
