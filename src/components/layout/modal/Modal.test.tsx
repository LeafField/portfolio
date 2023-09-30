import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import useStore from "../../../store";
import { FC, ReactNode, useEffect } from "react";
import { Modal as ModalType } from "../../../store";

type SetStoreProps = {
  value: ModalType;
  children: ReactNode;
};

const SetStore: FC<SetStoreProps> = ({ value, children }) => {
  const { showModal } = useStore();
  useEffect(() => {
    showModal({
      show: value.show,
      message: value.message,
      completed: value.completed,
    });
  }, [showModal, value]);

  return <>{children}</>;
};

describe("Modalの単体テスト", () => {
  it("送信中の時", () => {
    const value: ModalType = {
      show: true,
      message: "送信中です...",
      completed: false,
    };
    const { container } = render(
      <SetStore value={value}>
        <Modal />
      </SetStore>,
    );
    expect(screen.getByRole("dialog")).toHaveTextContent(String(value.message));
    expect(container).toMatchSnapshot();
  });

  it("送信が完了した時", async () => {
    const value: ModalType = {
      show: true,
      message: "送信完了しました",
      completed: true,
    };
    const { container } = render(
      <SetStore value={value}>
        <Modal />
      </SetStore>,
    );

    const closeButton = screen.getByRole("button", { name: "Close" });
    expect(closeButton).toBeInTheDocument();
    expect(container).toMatchSnapshot();

    await userEvent.click(closeButton);
    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
