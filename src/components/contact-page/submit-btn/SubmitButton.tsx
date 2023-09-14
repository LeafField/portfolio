import React, { FC } from "react";

type Props = {
  busy: boolean;
  completed: boolean;
};

const SubmitButton: FC<Props> = ({ busy, completed }) => {
  return (
    <button
      className={`${
        busy && "pointer-events-none translate-y-2 shadow-none"
      } mx-auto mt-[46px] flex items-center justify-center bg-mainColor px-4 py-2 text-whiteColor shadow-md transition duration-300 hover:translate-y-[2px] hover:shadow-none focus:outline-4 focus:outline-gray-400`}
      type="submit"
    >
      {completed ? "送信完了" : `${busy ? "送信中" : "送信"}`}
    </button>
  );
};

export default SubmitButton;
