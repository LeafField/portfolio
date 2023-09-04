import { render } from "@testing-library/react";
import Nav from "./Nav";

describe("Navの単体テスト", () => {
  it("スナップショットテスト", () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});
