import React from "react";
import SectionTitle from "../../atoms/section-title/SectionTitle";
import SkillMap from "./skill-map/SkillMap";
import Image from "next/image";
import noteImage from "../../../../public/jess-bailey-q10VITrVYUM-unsplash.jpg";
import SkillText from "./skill-text/SkillText";

const Skills = () => {
  return (
    <section className="space-y-[60px] overflow-hidden bg-whiteColor px-4  pt-[180px]">
      <SectionTitle title="Skills" />
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row  ">
        <figure className="relative max-h-[150px] flex-1 overflow-hidden before:absolute before:inset-0 before:z-10 before:block before:shadow-[inset_2px_2px_5px_0_rgba(0,0,0,0.3)] max-lg:mx-[calc(100%-100vw)] md:max-h-[250px] lg:mt-[124px]  lg:h-[29vw] lg:max-h-[388px] lg:w-[640px] ">
          <Image
            src={noteImage}
            alt="机の上のノート"
            style={{
              width: "100%",
              height: "auto",
            }}
            sizes="50vw,(max-width:1024) 100vw"
            blurDataURL={noteImage.blurDataURL}
            placeholder="blur"
            width={noteImage.width}
            height={noteImage.height}
          />
        </figure>
        <div className="flex-1">
          <SkillMap />
          <SkillText />
        </div>
      </div>
    </section>
  );
};

export default Skills;
