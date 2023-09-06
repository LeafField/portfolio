import { screen, render } from "@testing-library/react";
import PageTop from "./PageTop";

describe("PageTopの単体テスト", () => {
  it("Propsで渡した通りのタイトルが正しく表示されているか", () => {
    render(<PageTop title="Portfolio" />);
    expect(screen.getByRole("heading")).toHaveTextContent("Portfolio");
  });

  it("スナップショットテスト", () => {
    const { container } = render(<PageTop title="Portfolio" />);
    expect(container).toMatchSnapshot();
  });
});
