import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Opening from "./Opening";

describe("Openingの単体テスト", () => {
  it("アニメーション完了時にopacity-0クラスとinvisibleクラスが付与される", async () => {
    render(<Opening testDom={true} />);
    global.scrollTo = jest.fn();
    await userEvent.click(screen.getByTestId("testButton"));
    await waitFor(() => {
      expect(screen.getByTestId("opening")).toHaveClass("opacity-0");
      expect(screen.getByTestId("opening")).toHaveClass("invisible");
    });
  });

  it("異常系:stopAnimationのpropsをtrueにしていた場合、コールバック関数が実行されない（テスト用のpropsです）", async () => {
    render(<Opening testDom={true} stopAnimation={true} />);
    await userEvent.click(screen.getByTestId("testButton"));
    await waitFor(() => {
      expect(screen.getByTestId("opening")).not.toHaveClass("opacity-0");
      expect(screen.getByTestId("opening")).not.toHaveClass("invisible");
    });
  });

  it("スナップショットテスト", () => {
    const { container } = render(<Opening stopAnimation={true} />);
    expect(container).toMatchSnapshot();
  });
});
