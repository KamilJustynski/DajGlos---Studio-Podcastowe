import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "primereact/timeline";
import { LookTileScheme } from "../../interfaces";

export const LookTile: React.FC<LookTileScheme> = ({
  titleNumber,
  title,
  animation,
  content,
  data,
  height,
  width,
}) => {
  return (
    <div className="mt-20 relative">
      <div className="mb-10 text-[#fff] text-[20px] text-center laptop:text-start laptop:flex laptop:items-center laptop:gap-5">
        <div className="p-3 w-[50px] h-[50px] laptop:w-[40px] laptop:h-[45px] flex items-center mb-3 tablet:w-[80px] laptop:mx-0 tablet:h-[80px] justify-center bg-[#fff]  mx-auto text-[#DD0326] tablet:text-[25px] font-bold rounded-full">
          {titleNumber}
        </div>
        <p className="tablet:text-[25px] laptop:text-[30px]">{title}</p>
      </div>
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        style={{
          position: "absolute",
          left: "50%",
          top: height,
          width: "0.5px",
          backgroundColor: "#fff",
          zIndex: 1,
        }}
        className="laptop:hidden"
      ></motion.div>
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        style={{
          position: "absolute",
          left: window.innerWidth >= 1280 ? "7%" : "9%",
          width: width,
          backgroundColor: "#fff",
          zIndex: 1,
        }}
        className="hidden laptop:flex h-[0.8px] top-[136px]"
      ></motion.div>
      <Timeline
        className="text-[#fff] relative laptop:hidden"
        value={data}
        align="alternate"
        content={content}
      />
      <Timeline
        className="text-[#fff] hidden relative laptop:flex"
        value={data}
        layout="horizontal"
        align="top"
        content={content}
      />
    </div>
  );
};
