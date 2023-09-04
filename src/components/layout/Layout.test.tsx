import { screen, render } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import Layout from "./Layout";

describe("Layoutの結合テスト", () => {
  it("ハンバーガーボタン非クリック時、ハンバーガーボタンのaria-expandedがfalseかつnavのaria-hiddenがtrue", () => {
    render(
      <Layout>
        <div />
      </Layout>,
    );
    expect(
      screen.getByRole("button", { name: "ハンバーガーメニュー" }),
    ).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByTestId("navi")).toHaveAttribute("aria-hidden", "true");
  });

  it("ハンバーガーメニュークリック時、ハンバーガーボタンのaria-expandedがtrue、navのaria-hiddenがfalse", async () => {
    render(
      <Layout>
        <div />
      </Layout>,
    );

    const humbarger = screen.getByRole("button", {
      name: "ハンバーガーメニュー",
    });
    await UserEvent.click(humbarger);
    expect(
      screen.getByRole("button", { name: "ハンバーガーメニュー" }),
    ).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByTestId("navi")).toHaveAttribute("aria-hidden", "false");
  });
});
