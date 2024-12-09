import React from "react";
import SectionHeader from "./tiles/SectionHeader";

const SocialMedia = () => {
  return (
    <div className="container mx-auto w-full">
      <SectionHeader
        position="start"
        color="text-[#FFF]"
        title="Poznajmy się bliżej..."
      />
      <div className="w-full bg-black flex p-1 gap-1 text-white items-center justify-between">
        <div className="bg-yellow-200 w-1/4">IMG1</div>
        <div className="bg-green-200 w-1/4">IMG1</div>
        <div className="bg-pink-200 w-1/4">IMG1</div>
        <div className="bg-purple-200 w-1/4">IMG1</div>
      </div>
    </div>
  );
};
export default SocialMedia;
