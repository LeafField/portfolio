import React from "react";
import useStore from "../../../store";
import Loading from "../../atoms/loading/Loading";
import CloseButton from "../../atoms/closebutton/CloseButton";

const Modal = () => {
  const { modal, showModal } = useStore();

  const backgroundClickHandler = () => {
    if (modal.completed) {
      showModal({ show: false });
    }
  };

  if (modal.show) {
    return (
      <div
        className={`fixed inset-0 z-[10000] flex min-h-screen w-full items-center justify-center bg-whiteColor/60 ${
          modal.completed && "cursor-pointer"
        } `}
        onClick={backgroundClickHandler}
      >
        <dialog
          className="animate-wakeUp relative z-[10010] flex h-20 w-72 flex-col items-center justify-start gap-2 bg-white pt-2 text-main-textColor shadow-md "
          open={modal.show}
        >
          <span>{modal.message}</span>
          {modal.completed ? <CloseButton /> : <Loading />}
        </dialog>
      </div>
    );
  } else {
    return null;
  }
};

export default Modal;
