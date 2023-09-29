import React from "react";
import useStore from "../../../store";

const Humbarger = () => {
  const { humbargerToggle, humbarger } = useStore();

  const clickHandler = () => {
    humbargerToggle(!humbarger);
  };

  return (
    <button
      type="button"
      aria-controls="navi"
      aria-expanded={humbarger}
      onClick={clickHandler}
      className="mr-[-1rem] p-4 "
    >
      <span
        className={`block h-[1px] w-6 bg-main-textColor transition-transform duration-[500ms] ${
          humbarger && "translate-y-[7px] rotate-[-225deg]"
        }`}
      ></span>
      <span
        className={`mt-[6px] block h-[1px] w-6 bg-main-textColor transition-all duration-[500ms] ${
          humbarger && "scale-0"
        }`}
      ></span>
      <span
        className={`mt-[6px] block h-[1px] w-6 bg-main-textColor transition-all duration-[500ms] ${
          humbarger && "translate-y-[-7px] rotate-[225deg]"
        }`}
      ></span>
      <span className="absolute top-[-100px] opacity-0">
        ハンバーガーメニュー
      </span>
    </button>
  );
};

export default Humbarger;
