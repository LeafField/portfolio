import React from "react";
import useStore from "../../../store";

const Blackout = () => {
  const { humbarger, humbargerToggle } = useStore();

  const clickHandler = () => {
    humbargerToggle(false);
  };

  return (
    <div
      onClick={clickHandler}
      className={`${
        humbarger
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }  absolute inset-0 z-40 cursor-pointer bg-whiteColor/60 transition-all duration-300`}
      aria-hidden="true"
      data-testid="whiteout"
    />
  );
};

export default Blackout;
