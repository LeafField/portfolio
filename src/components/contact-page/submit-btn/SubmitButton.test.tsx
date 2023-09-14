import { render, screen } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

const busyCss = "pointer-events-none translate-y-2 shadow-none";

describe("SubmitButtonの単体テスト", () => {
  it("busyがfalseの時、ボタンに表示されている文字が「送信」であり、busyCssのクラスが適用されていない", () => {
    expect.assertions(2);
    render(<SubmitButton busy={false} completed={false} />);
    expect(screen.getByRole("button", { name: "送信" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "送信" })).not.toHaveClass(
      busyCss,
    );
  });

  it("busyがtrueの時、「送信中」の表示になりbusyCssのクラスが適用されている", () => {
    expect.assertions(2);
    render(<SubmitButton busy={true} completed={false} />);
    expect(screen.getByRole("button")).toHaveTextContent("送信中");
    expect(screen.getByRole("button", { name: "送信中" })).toHaveClass(busyCss);
  });

  it("スナップショットテスト", () => {
    const { container } = render(
      <SubmitButton busy={false} completed={false} />,
    );
    expect(container).toMatchSnapshot();
  });
});
