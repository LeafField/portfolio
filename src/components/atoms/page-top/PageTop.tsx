import Image from "next/image";
import React, { FC, useRef } from "react";
import { robotoBold } from "../../../lib/font";
import pageTopImage from "../../../../public/pageTop2.jpg";
import useStore from "../../../store";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

type Props = {
  title: string;
};

const PageTop: FC<Props> = ({ title }) => {
  const containerRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLElement>(null);
  const { headerSize } = useStore();

  useGSAP(
    () => {
      gsap.to(imageRef.current, {
        y: -150,
        scrollTrigger: {
          trigger: containerRef.current,
          start: `-${headerSize} top`,
          end: "bottom top",
          scrub: 0.6,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="before:blackCover relative flex h-[200px] min-w-full items-center justify-center overflow-hidden sm:h-[400px] "
    >
      <h2
        className={`${robotoBold.className} relative z-20 text-center text-3xl text-whiteColor sm:text-5xl `}
      >
        {title}
      </h2>
      <figure
        ref={imageRef}
        className="absolute inset-0 h-[calc(100%+150px)] w-full"
      >
        <Image
          src={pageTopImage}
          alt="明るい森の画像"
          fill
          style={{ objectFit: "cover" }}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={pageTopImage.blurDataURL}
          key={pageTopImage.src}
          priority
          quality={75}
        />
      </figure>
    </section>
  );
};

export default PageTop;
