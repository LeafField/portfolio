import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputText from "./InputText";
import { FormType } from "../../../../lib/formSchema";

const renderedComponents = (label: string, type: keyof FormType) => {
  const { container } = render(
    <InputText label={label} registerType={type} register={jest.fn()} />,
  );

  return { container, label, type };
};

describe("InputTextの単体テスト", () => {
  it("コンポーネントが正しくレンダリングされているか", () => {
    const { label } = renderedComponents("お名前", "name");
    expect(screen.getByText(`${label}:`)).toBeInTheDocument();
    expect(
      screen.getByRole("textbox", { name: `${label}:` }),
    ).toBeInTheDocument();
  });
});
