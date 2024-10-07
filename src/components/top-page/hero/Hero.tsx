import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import HeroText from "./hero-text/HeroText";
import Allow from "./allow/Allow";
import hero from "../../../../public/hero.jpg";

const Hero = () => {
  return (
    <section
      className={`${styles.cover} relative flex h-[calc(100svh-64px)] flex-col items-center justify-between overflow-hidden px-4 pt-8 sm:h-[calc(100svh-96px)] sm:justify-center`}
    >
      <figure id="heroImg" className="absolute inset-0 z-0 h-full w-full">
        <Image
          src={hero}
          alt="森林と湖の画像"
          fill
          style={{
            objectFit: "cover",
          }}
          sizes="100vw"
          priority
          key={`森林と湖の画像`}
          placeholder="blur"
          blurDataURL={hero.blurDataURL}
        />
      </figure>
      <HeroText />
      <Allow />
    </section>
  );
};

export default Hero;
