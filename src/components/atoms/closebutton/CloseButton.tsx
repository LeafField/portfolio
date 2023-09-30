import React from "react";
import { roboto } from "../../../lib/font";
import useStore from "../../../store";

const CloseButton = () => {
  const { showModal } = useStore();

  return (
    <button
      className={`flex items-center justify-center border border-mainColor/30 px-3 py-1 text-main-textColor transition-colors duration-300 hover:border-mainColor ${roboto.className}`}
      onClick={() => showModal({ show: false })}
    >
      Close
    </button>
  );
};

export default CloseButton;
