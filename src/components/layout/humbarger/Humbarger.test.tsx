import { screen, render } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import Humbarger from "./Humbarger";

describe("クリックイベントに対してaria-expandedが正しく反応しているか", () => {
  it("初期状態", () => {
    render(<Humbarger />);
    expect(screen.getByRole("button")).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
  it("クリック時", async () => {
    render(<Humbarger />);
    const humbarger = screen.getByRole("button");
    await UserEvent.click(humbarger);
    expect(humbarger).toHaveAttribute("aria-expanded", "true");
  });

  it("スナップショットテスト", () => {
    const { container } = render(<Humbarger />);
    expect(container).toMatchSnapshot();
  });
});
