import React from "react";

interface SectionHeader {
  title: string;
}

const SectionHeader: React.FC<SectionHeader> = ({ title }) => {
  return (
    <h1 className="text-center laptop:text-[150px] text-[60px] tablet:text-[70px] font-[900] text-[#F69197]">
      {title}
    </h1>
  );
};
export default SectionHeader;
