import React from "react";
import { pacifico } from "../../../../lib/font";

const HeroText = () => {
  return (
    <div className="relative z-20 max-w-[824px] space-y-4 border border-white p-4 text-white sm:p-6 lg:space-y-[56px]">
      <h2 className={`${pacifico.className} text-center text-2xl sm:text-5xl`}>
        Welcome to my portfolio!
      </h2>
      <p className="text-justify text-base leading-[150%] lg:text-2xl">
        はじめまして！私のポートフォリオサイトをご覧いただき、ありがとうございます。
        <br />
        このサイトを通じて私自身のスキルや経験を知っていただき、興味を持っていただけたら嬉しいです。
        <br />
        私はWebサイトやWebアプリの制作が大好きで、常に新しい技術やトレンドに興味を持ち、積極的に学び続けています。
        <br />
        あなたと共にお客様の想像を超えるような作品を作る日を楽しみにしています。
      </p>
    </div>
  );
};

export default HeroText;
