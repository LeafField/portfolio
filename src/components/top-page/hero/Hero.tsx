import Image from "next/image";
import React from "react";
import Jpg from "../../../../public/sun-binbin-Ddk5lE7tM7U-unsplash3.jpg";
import styles from "./Hero.module.css";
import HeroText from "./hero-text/HeroText";
import Allow from "./allow/Allow";

const Hero = () => {
  return (
    <section
      className={`${styles.cover} relative flex h-[calc(100svh-64px)] flex-col items-center justify-between overflow-hidden px-4 pt-8 sm:h-[calc(100svh-96px)] sm:justify-center`}
    >
      <figure className="absolute inset-0 h-[calc(100%+150px)] w-full">
        <Image
          src={Jpg}
          alt="森林と湖の画像"
          fill
          style={{ objectFit: "cover", transition: "0.6s" }}
          sizes="100vw"
          priority
          key={`森林と湖の画像`}
          placeholder="blur"
          blurDataURL={Jpg.blurDataURL}
        />
      </figure>
      <HeroText />
      <Allow />
    </section>
  );
};

export default Hero;
