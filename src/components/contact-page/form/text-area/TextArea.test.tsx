import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextArea from "./TextArea";

const renderedComponent = (errorMessage?: string) => {
  const { container } = render(
    <TextArea register={jest.fn()} errorMessage={errorMessage} />,
  );
  return { container, errorMessage };
};

const labelText = "お問い合わせ内容:";
const dummyInputText = "これはinputテストの為のダミーの書き込みです";

describe("TextAreaの単体テスト", () => {
  it("コンポーネントが正しくレンダリングされているか", () => {
    expect.assertions(2);
    const { errorMessage } = renderedComponent("40文字以上入力してください");
    expect(screen.getByLabelText(labelText)).toBeInTheDocument();
    if (errorMessage) {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    }
  });

  it("textareaタグが正しく入力できるか", async () => {
    expect.assertions(1);
    renderedComponent();
    const input = screen.getByRole("textbox", { name: `${labelText}` });
    await userEvent.type(input, dummyInputText);
    expect(input).toHaveDisplayValue(dummyInputText);
  });
});
