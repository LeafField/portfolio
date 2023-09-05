import { screen, render } from "@testing-library/react";
import Hero from "./Hero";

describe("Heroの結合テスト", () => {
  it("各コンポーネントが正常にマウントされているか", () => {
    render(<Hero />);

    expect(screen.getByRole("heading")).toHaveTextContent(
      "Welcome to my portfolio!",
    );
    expect(screen.getByText("Scroll")).toBeInTheDocument();
  });

  it("Imageコンポーネントは正しく機能しているか", () => {
    render(<Hero />);

    expect(screen.getByRole("img")).toHaveAttribute("alt", "森林と湖の画像");
  });
});
