import Image from "next/image";
import React, { FC } from "react";
import Jpg from "../../../../public/top-image.jpg";
import { robotoBold } from "../../../lib/font";

type Props = {
  title: string;
};

const PageTop: FC<Props> = ({ title }) => {
  return (
    <section className="relative flex h-[200px] min-w-full items-center justify-center overflow-hidden before:absolute before:inset-0 before:z-10 before:block before:bg-[rgba(0,0,0,0.44)] sm:h-[400px] ">
      <h2
        className={`${robotoBold.className} relative z-20 text-center text-3xl text-whiteColor sm:text-5xl `}
      >
        {title}
      </h2>
      <Image
        src={Jpg}
        alt="明るい森の画像"
        fill
        style={{ objectFit: "cover", transition: "0.3s" }}
        sizes="100vw"
        placeholder="blur"
        blurDataURL={Jpg.blurDataURL}
        key={Jpg.src}
        priority
        quality={50}
      />
    </section>
  );
};

export default PageTop;
