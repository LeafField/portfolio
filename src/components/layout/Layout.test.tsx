import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
    await userEvent.click(humbarger);
    expect(
      screen.getByRole("button", { name: "ハンバーガーメニュー" }),
    ).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByTestId("navi")).toHaveAttribute("aria-hidden", "false");
  });

  it("ナビゲーションのリンクをクリックした時にハンバーガーメニューは閉じるか", async () => {
    render(
      <Layout>
        <div></div>
      </Layout>,
    );

    const humbarger = screen.getByRole("button", {
      name: "ハンバーガーメニュー",
    });
    await userEvent.click(humbarger);

    waitFor(() => {
      expect(
        screen.getByRole("button", { name: "ハンバーガーメニュー" }),
      ).toHaveAttribute("aria-expanded", "true");
    });

    await userEvent.click(screen.getByTestId("navigation-list"));
    waitFor(() => {
      expect(humbarger).toHaveAttribute("aria-expanded", "false");
    });
  });
});
