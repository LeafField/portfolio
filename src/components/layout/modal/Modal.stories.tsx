import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";
import { noto } from "../../../lib/font";
import useStore from "../../../store";
import { useEffect } from "react";

const ModalButton = () => {
  const { showModal } = useStore();
  return (
    <>
      <button
        className="relative z-[10050] border "
        onClick={() =>
          showModal({ show: true, message: "送信中です...", completed: false })
        }
      >
        開く
      </button>
      <button
        className="relative z-[10050] border "
        onClick={() =>
          showModal({
            show: true,
            message: "送信完了しました",
            completed: true,
          })
        }
      >
        送信完了
      </button>
      <button
        className="relative z-[10050] border "
        onClick={() => showModal({ show: false })}
      >
        閉じる
      </button>
    </>
  );
};

const meta: Meta<typeof Modal> = {
  title: "layout/modal",
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ModalStory: Story = {
  decorators: [
    (StoryComponents) => (
      <div className={`${noto.className}`}>
        <ModalButton />
        <StoryComponents />
      </div>
    ),
  ],
};
