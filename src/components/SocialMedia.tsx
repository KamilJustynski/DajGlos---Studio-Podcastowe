import React from "react";

const SocialMedia = () => {
  return (
    <div className="container mx-auto">
      <p className="text-center text-[60px] font-[900] mb-10 text-[#fff]">
        Poznajmy <br /> <span className="text-[40px]">się bliej...</span>
      </p>
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
