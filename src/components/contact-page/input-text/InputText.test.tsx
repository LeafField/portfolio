import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputText from "./InputText";
import { FormType } from "../../../lib/formSchema";

const renderedComponents = (
  label: string,
  type: keyof FormType,
  errorMessage?: string,
) => {
  const { container } = render(
    <InputText
      label={label}
      registerType={type}
      register={jest.fn()}
      errorMessage={errorMessage}
      busy={false}
    />,
  );

  return { container, label };
};

describe("InputTextの単体テスト", () => {
  it("コンポーネントが正しくレンダリングされているか", () => {
    expect.assertions(3);
    const errorText = "入力が正しくありません";
    const { label } = renderedComponents("お名前", "name", errorText);
    expect(screen.getByText(`${label}:`)).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: `${label}:` }),
    ).toBeInTheDocument();
    expect(screen.getByText(`${errorText}`)).toBeInTheDocument();
  });

  it("inputタグが正しく入力できるか", async () => {
    const { label } = renderedComponents("お名前", "name");
    const input = screen.getByRole("textbox", { name: `${label}:` });
    const text = "テスト太郎";
    await userEvent.type(input, text);
    expect(input).toHaveDisplayValue(text);
  });

  it("スナップショットテスト", () => {
    const { container } = renderedComponents(
      "お名前",
      "name",
      "名前は必須です",
    );
    expect(container).toMatchSnapshot();
  });
});
