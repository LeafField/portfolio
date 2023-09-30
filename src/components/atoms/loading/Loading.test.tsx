import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("Loadingの単体テスト", () => {
  it("スナップショットテスト", () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });
});
