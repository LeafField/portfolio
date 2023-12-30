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
    <div className="relative z-10 mx-auto mt-[-75px] flex max-w-[328px] flex-col justify-center gap-4 bg-mainColor py-5 pl-5 pr-5  md:mt-[-100px] md:max-w-[600px] lg:ml-[-144px] lg:mt-0 lg:max-w-[785px] lg:gap-8 lg:pl-[145px] min-[1302px]:gap-12">
      <div className="flex justify-evenly">
        <div className="flex h-[50px] w-[50px] items-center justify-center md:h-[75px] md:w-[75px] xl:h-[100px] xl:w-[100px]">
          <Image
            className="h-[50px] w-[35px] md:h-[75px] md:w-[52px] xl:h-[100px] xl:w-[70px]  "
            src={htmlImage}
            alt="HTML"
            width={70}
            height={100}
            key={1}
          />
        </div>
        <div className="flex h-[50px] w-[50px] items-center justify-center md:h-[75px] md:w-[75px] xl:h-[100px] xl:w-[100px]">
          <Image
            className="h-[50px] w-[35px] md:h-[75px] md:w-[52px] xl:h-[100px] xl:w-[70px] "
            src={cssImage}
            alt="CSS"
            width={70}
            height={100}
            key={2}
          />
        </div>

        <Image
          className="h-[50px] w-[50px] md:h-[75px] md:w-[75px] xl:h-[100px] xl:w-[100px] "
          src={jsImage}
          alt="JavaScript"
          width={100}
          height={100}
          key={3}
        />
        <Image
          className="h-[50px] w-[50px] md:h-[75px] md:w-[75px] xl:h-[100px] xl:w-[100px] "
          src={tsImage}
          alt="TypeScript"
          width={100}
          height={100}
          key={4}
        />
      </div>
      <div className="flex justify-evenly">
        <Image
          className="h-[50px] w-[56px] md:h-[75px] md:w-[75px] xl:h-[100px] xl:w-[112px] "
          src={reactImage}
          alt="React"
          width={112}
          height={100}
          key={5}
        />
        <Image
          className="h-[50px] w-[50px] md:h-[75px] md:w-[75px] xl:h-[100px] xl:w-[100px] "
          src={nextImage}
          alt="Next.js"
          width={100}
          height={100}
          key={6}
        />
        <Image
          className="h-[45px] w-[75px] md:h-[75px] md:w-[75px] xl:h-[90px] xl:w-[150px] "
          src={tailwindImage}
          alt="Tailwind CSS"
          width={150}
          height={90}
          key={7}
        />
        <Image
          className="h-[50px] w-[50px] md:h-[75px] md:w-[75px] xl:h-[100px] xl:w-[100px] "
          src={nestImage}
          alt="Nest.js"
          width={100}
          height={100}
          key={8}
        />
      </div>
    </div>
  );
};

export default SkillMap;
