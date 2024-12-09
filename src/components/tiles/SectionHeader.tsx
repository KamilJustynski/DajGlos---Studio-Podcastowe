import React from "react";
import { SectionHeaderScheme } from "../../interfaces";

const SectionHeader: React.FC<SectionHeaderScheme> = ({
  title,
  color,
  position,
}) => {
  return (
    <h1
      className={`text-${position} laptop:text-[150px] text-[60px] tablet:text-[70px] font-[900] ${color}`}
    >
      {title}
    </h1>
  );
};
export default SectionHeader;
