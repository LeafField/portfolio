import React from "react";
import SectionTitle from "../../atoms/SectionTitle";
import SkillMap from "./skill-map/SkillMap";
import Image from "next/image";
import noteImage from "../../../../public/jess-bailey-q10VITrVYUM-unsplash.jpg";
import SkillText from "./skill-text/SkillText";

const Skills = () => {
  return (
    <section className="space-y-[60px] bg-whiteColor px-[43px] pt-[180px]">
      <SectionTitle title="Skills" />
      <div className="mx-auto flex max-w-7xl">
        <figure className="relative mt-[124px] hidden h-[388px] w-[640px] flex-1 overflow-hidden lg:block">
          <Image
            src={noteImage}
            alt="机の上のノート"
            fill
            style={{ objectFit: "cover" }}
            sizes="50vw"
            blurDataURL={noteImage.blurDataURL}
            placeholder="blur"
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
