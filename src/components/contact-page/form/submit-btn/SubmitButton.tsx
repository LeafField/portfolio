import React from "react";

const SubmitButton = () => {
  return (
    <button
      className="mx-auto flex items-center justify-center bg-mainColor px-4 py-2 text-whiteColor shadow-md transition duration-300 hover:translate-y-[2px] hover:shadow-none"
      type="submit"
    >
      送信
    </button>
  );
};

export default SubmitButton;
