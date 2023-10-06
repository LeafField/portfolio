import React, { FC, ReactNode, useState } from "react";
import Lottie from "lottie-react";
import animData from "./animData.json";

type Props = {
  stopAnimation?: boolean;
  testDom?: boolean;
};

const Opening: FC<Props> = ({ stopAnimation = false, testDom = false }) => {
  const [animStatus, setAnimStatus] = useState<boolean>(false);
  const [invisible, setInvisible] = useState<boolean>(false);

  const completedHandler = () => {
    if (stopAnimation) return;
    setAnimStatus(true);
    window.scrollTo(0, 0);
    setTimeout(() => {
      setInvisible(true);
    }, 300);
  };

  return (
    <div
      className={`fixed inset-0 z-[10100] flex min-h-screen flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        animStatus ? "opacity-0" : ""
      } ${invisible ? "invisible" : ""} `}
      data-testid="opening"
    >
      <div className="h-[265px] w-[320px]">
        <Lottie
          animationData={animData}
          className="h-[265px] w-[320px]"
          loop={false}
          onComplete={completedHandler}
        />
      </div>
      <p className="text-xl">ようこそ、わたしのポートフォリオへ！</p>
      {testDom && (
        <div data-testid="testButton" onClick={completedHandler}></div>
      )}
    </div>
  );
};

export default Opening;
