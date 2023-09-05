import React, { FC } from "react";
import { robotoBold } from "../../lib/font";

type Props = {
  title: string;
};

const SectionTitle: FC<Props> = ({ title }) => {
  return (
    <h2 className={`${robotoBold.className} text-center text-[32px]`}>
      {title}
    </h2>
  );
};

export default SectionTitle;
