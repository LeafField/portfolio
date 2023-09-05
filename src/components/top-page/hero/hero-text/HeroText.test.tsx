import { render, screen } from "@testing-library/react";
import HeroText from "./HeroText";

describe("HeroTextの単体テスト", () => {
  it("セクションタイトルが正しくレンダリングされているか", () => {
    render(<HeroText />);
    expect(screen.getByRole("heading")).toHaveTextContent(
      "Welcome to my portfolio!",
    );
  });

  it("スナップショットテスト", () => {
    const { container } = render(<HeroText />);
    expect(container).toMatchSnapshot();
  });
});
