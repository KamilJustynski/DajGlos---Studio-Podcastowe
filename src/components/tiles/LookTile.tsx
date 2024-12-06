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
}) => {
  return (
    <div className="card mt-20 relative">
      <div className="mb-10 text-[#fff] text-lg text-center">
        <div className="p-3 w-[50px] h-[50px] flex items-center mb-3 justify-center bg-[#fff]  mx-auto text-[#DD0326] font-bold rounded-full">
          {titleNumber}
        </div>
        <p>{title}</p>
      </div>
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        style={{
          position: "absolute",
          left: "50%",
          top: "110px",
          width: "0.5px",
          backgroundColor: "#fff",
          zIndex: 1,
        }}
        className="timeline-line"
      ></motion.div>
      <Timeline
        className="text-[#fff] relative"
        value={data}
        align="alternate"
        content={content}
      />
    </div>
  );
};
