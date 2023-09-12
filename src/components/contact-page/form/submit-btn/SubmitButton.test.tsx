import { render, screen } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe("SubmitButtonの単体テスト", () => {
  it("コンポーネントが正しくレンダリングされているか", () => {
    render(<SubmitButton />);
    expect(screen.getByRole("button", { name: "送信" })).toBeInTheDocument();
  });

  it("スナップショットテスト", () => {
    const { container } = render(<SubmitButton />);
    expect(container).toMatchSnapshot();
  });
});
