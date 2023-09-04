import { render } from "@testing-library/react";
import Header from "./Header";

describe("Headerの単体テスト", () => {
  it("スナップショットテスト", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
