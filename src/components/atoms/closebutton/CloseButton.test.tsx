import { render } from "@testing-library/react";
import CloseButton from "./CloseButton";

describe("CloseButtonの単体テスト", () => {
  it("スナップショットテスト", () => {
    const { container } = render(<CloseButton />);
    expect(container).toMatchSnapshot();
  });
});
