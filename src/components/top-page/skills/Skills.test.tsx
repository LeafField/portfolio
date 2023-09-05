import { screen, render } from "@testing-library/react";
import Skills from "./Skills";

describe("SKillsの結合テスト", () => {
  it("スナップショットテスト", () => {
    const { container } = render(<Skills />);
    expect(container).toMatchSnapshot();
  });
});
