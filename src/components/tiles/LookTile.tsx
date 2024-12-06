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
}) => {
  return (
    <div className="mt-20 relative">
      <div className="mb-10 text-[#fff] text-[20px] text-center">
        <div className="p-3 w-[50px] h-[50px] flex items-center mb-3 tablet:w-[80px] tablet:h-[80px] justify-center bg-[#fff]  mx-auto text-[#DD0326] tablet:text-[25px] font-bold rounded-full">
          {titleNumber}
        </div>
        <p className="tablet:text-[25px]">{title}</p>
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
