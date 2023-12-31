import { screen, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
import Modal from "../layout/modal/Modal";

const dummyType = async () => {
  await userEvent.type(
    screen.getByRole("textbox", { name: "お名前:" }),
    "テスト太郎",
  );
  await userEvent.type(
    screen.getByRole("textbox", { name: "Eメール:" }),
    "test@test.com",
  );
  await userEvent.type(
    screen.getByRole("textbox", { name: "お問い合わせ内容:" }),
    "この本は面白いですよ。登場人物がが魅力的で、ストーリーがスリリングです。読んでいて飽きません。",
  );
  await userEvent.click(screen.getByRole("button", { name: "送信" }));
};

describe("Formの結合テスト", () => {
  window.scrollTo = jest.fn();
  afterEach(() => {
    jest.resetAllMocks();
    jest.resetModules();
    jest.clearAllMocks();
  });
  it("異常系:何も入力していない状態で送信ボタンを押すと警告文が表示される", async () => {
    render(<Form />);
    await userEvent.click(screen.getByRole("button", { name: "送信" }));
    expect(screen.getByText("名前の入力は必須です")).toBeInTheDocument();
    expect(screen.getByText("Eメールの入力は必須です")).toBeInTheDocument();
    expect(screen.getByText("40文字以上入力してください")).toBeInTheDocument();
  });

  it("異常系:メールアドレスの入力が間違っていた場合、正しいアドレスを入力するよう促す警告文が表示される", async () => {
    render(<Form />);
    await userEvent.type(
      screen.getByRole("textbox", { name: "Eメール:" }),
      "間違ったメールアドレス",
    );
    await userEvent.click(screen.getByRole("button", { name: "送信" }));
    expect(
      screen.getByText("正しいメールアドレスを入力してください"),
    ).toBeInTheDocument();
  });

  it("正常系:フォーム内容が正しく送信できた時、ボタンに送信完了と表示され成功のアラートが表示される", async () => {
    render(
      <>
        <Modal />
        <Form />
      </>,
    );
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ status: 200 }));
    await dummyType();

    expect(global.fetch).toHaveBeenCalled();
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "送信完了" }),
      ).toBeInTheDocument();
      expect(screen.getByRole("dialog")).toHaveTextContent("送信完了しました");
    });

    await userEvent.click(screen.getByRole("button", { name: "Close" }));
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("異常系:フォーム内容は正しく送信できたがサーバー側でエラーが発生した時、送信失敗のアラートが表示される", async () => {
    render(
      <>
        <Modal />
        <Form />
      </>,
    );
    global.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject({ status: 500 }));
    global.alert = jest.fn();
    await dummyType();

    await waitFor(() => {
      expect(global.alert).toHaveBeenCalledWith(
        "フォームの送信に失敗しました。お手数ですが、X(Twitter)のLeafFieldまでご連絡頂けたら幸いです。",
      );
    });
  });
});
