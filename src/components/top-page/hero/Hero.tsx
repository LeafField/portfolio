import Image from "next/image";
import React from "react";
import Jpg from "../../../../public/sun-binbin-Ddk5lE7tM7U-unsplash.jpg";
import styles from "./Hero.module.css";
import HeroText from "./hero-text/HeroText";
import Allow from "./allow/Allow";

const Hero = () => {
  return (
    <section
      className={`${styles.cover} relative flex h-[calc(100svh-96px)] flex-col items-center justify-start overflow-hidden px-4 pt-8 sm:justify-center`}
    >
      <Image
        src={Jpg}
        alt="森林と湖の画像"
        fill
        style={{ objectFit: "cover", transition: "0.2s" }}
        sizes="100vw"
        priority
        key={`森林と湖の画像`}
        placeholder="blur"
        blurDataURL={Jpg.blurDataURL}
      />
      <HeroText />
      <Allow />
    </section>
  );
};

export default Hero;
