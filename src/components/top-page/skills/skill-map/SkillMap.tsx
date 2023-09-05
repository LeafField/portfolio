import React from "react";
import Image from "next/image";
import htmlImage from "../../../../../public/html.svg";
import cssImage from "../../../../../public/css-3.svg";
import jsImage from "../../../../../public/javascript.svg";
import tsImage from "../../../../../public/typescript-icon.svg";
import reactImage from "../../../../../public/react.svg";
import nextImage from "../../../../../public/nextjs-icon.svg";
import tailwindImage from "../../../../../public/tailwindcss-icon.svg";
import nestImage from "../../../../../public/nestjs.svg";

const SkillMap = () => {
  return (
    <div className="relative z-10 mx-auto flex flex-wrap justify-center gap-4 bg-mainColor py-5 pl-5 pr-5 md:gap-12 lg:ml-[-144px] lg:max-w-[785px] lg:pl-[145px]">
      <Image
        className="h-[50px] w-[35px] md:h-[100px] md:w-[70px] "
        src={htmlImage}
        alt="HTML"
        width={70}
        height={100}
      />
      <Image
        className="h-[50px] w-[35px] md:h-[100px] md:w-[70px] "
        src={cssImage}
        alt="CSS"
        width={70}
        height={100}
      />
      <Image
        className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] "
        src={jsImage}
        alt="JavaScript"
        width={100}
        height={100}
      />
      <Image
        className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] "
        src={tsImage}
        alt="TypeScript"
        width={100}
        height={100}
      />
      <Image
        className="h-[50px] w-[56px] md:h-[100px] md:w-[112px] "
        src={reactImage}
        alt="React"
        width={112}
        height={100}
      />
      <Image
        className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] "
        src={nextImage}
        alt="Next.js"
        width={100}
        height={100}
      />
      <Image
        className="h-[45px] w-[75px] md:h-[90px] md:w-[150px] "
        src={tailwindImage}
        alt="Tailwind CSS"
        width={150}
        height={90}
      />
      <Image
        className="h-[50px] w-[50px] md:h-[100px] md:w-[100px] "
        src={nestImage}
        alt="Nest.js"
        width={100}
        height={100}
      />
    </div>
  );
};

export default SkillMap;
