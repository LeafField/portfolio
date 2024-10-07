import React, { useRef } from "react";
import SectionTitle from "../../atoms/section-title/SectionTitle";
import SkillMap from "./skill-map/SkillMap";
import Image from "next/image";
import noteImage from "../../../../public/skillImage.jpg";
import SkillText from "./skill-text/SkillText";

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="space-y-[60px] overflow-hidden bg-whiteColor px-4  pt-[180px]">
      <SectionTitle title="Skills" />
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row  ">
        <div
          ref={containerRef}
          className="relative max-h-[150px] flex-1 overflow-hidden before:innerShadow  max-lg:mx-[calc(100%-100vw)] md:max-h-[250px] lg:mt-[124px]  lg:h-[29vw] lg:max-h-[388px] lg:w-[640px] "
        >
          <figure className="relative h-fit w-full">
            <Image
              src={noteImage}
              alt="机の上のノート"
              style={{
                width: "100%",
                height: "auto",
              }}
              width={noteImage.width}
              height={noteImage.height}
              sizes="50vw,(max-width:1024) 100vw"
              blurDataURL={noteImage.blurDataURL}
              placeholder="blur"
            />
          </figure>
        </div>
        <div className="flex-1">
          <SkillMap />
          <SkillText />
        </div>
      </div>
    </section>
  );
};

export default Skills;
