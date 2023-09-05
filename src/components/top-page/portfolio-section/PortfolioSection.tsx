import React, { FC } from "react";
import SectionTitle from "../../atoms/SectionTitle";
import { EndPoints } from "../../../../types/cms-types";

type Props = {
  posts?: EndPoints["gets"]["portfolio"]["contents"];
};

const PortfolioSection: FC<Props> = ({ posts }) => {
  return (
    <section className="pt-[180px]">
      <SectionTitle title="Portfolio" />
    </section>
  );
};

export default PortfolioSection;
