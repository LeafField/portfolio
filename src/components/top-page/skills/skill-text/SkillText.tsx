import React from "react";
import { notoBold } from "../../../../lib/font";

const SkillText = () => {
  return (
    <div className="space-y-2 pt-4 lg:p-5">
      <h3 className={`text-xl md:text-2xl ${notoBold.className}`}>
        フロントエンドの極みを目指して
      </h3>
      <p className="text-justify text-sm md:text-base">
        主にReactとNext.jsが得意ですが、フロントエンドを極める為にはフロントエンドだけに閉じこもらず
        関係する分野に広く通じていた方がいいと考えサーバーサイド（主にNest.js）やインフラ周りの勉強を始めています。
        <br />
        将来的にはデザインも勉強し、デザイナーとデザインについて熱く語り合い、サーバーサイドエンジニアと深く連携ができるフロントエンドエンジニアを目指しています。
      </p>
    </div>
  );
};

export default SkillText;
