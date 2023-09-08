import { render } from "@testing-library/react";
import Nav from "./Nav";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

describe("Navの単体テスト", () => {
  it("スナップショットテスト", () => {
    const { container } = render(<Nav />);
    expect(container).toMatchSnapshot();
  });
});
