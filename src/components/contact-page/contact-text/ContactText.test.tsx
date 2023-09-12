import { render } from "@testing-library/react";
import ContactText from "./ContactText";

describe("ContactTextの単体テスト", () => {
  it("スナップショットテスト", () => {
    const { container } = render(<ContactText />);
    expect(container).toMatchSnapshot();
  });
});
