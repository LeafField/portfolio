import React, { FC } from "react";

type Props = {
  busy: boolean;
};

const SubmitButton: FC<Props> = ({ busy }) => {
  return (
    <button
      className={`${
        busy && "pointer-events-none translate-y-2 shadow-none"
      } mx-auto mt-[46px] flex items-center justify-center bg-mainColor px-4 py-2 text-whiteColor shadow-md transition duration-300 hover:translate-y-[2px] hover:shadow-none`}
      type="submit"
    >
      {busy ? "送信中" : "送信"}
    </button>
  );
};

export default SubmitButton;
