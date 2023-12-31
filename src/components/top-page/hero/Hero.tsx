import Image from "next/image";
import React, { useRef } from "react";
import styles from "./Hero.module.css";
import HeroText from "./hero-text/HeroText";
import Allow from "./allow/Allow";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import hero from "../../../../public/hero.jpg";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        y: -400,
        scrollTrigger: {
          trigger: heroRef.current,
          start: `-100px top`,
          end: "bottom top",
          scrub: 0.6,
        },
      });
    },
    { scope: heroRef },
  );

  return (
    <section
      className={`${styles.cover} relative flex h-[calc(100svh-64px)] flex-col items-center justify-between overflow-hidden px-4 pt-8 sm:h-[calc(100svh-96px)] sm:justify-center`}
      ref={heroRef}
    >
      <figure
        id="heroImg"
        className="absolute inset-0 h-[calc(100%+400px)] w-full"
        ref={imageRef}
      >
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
