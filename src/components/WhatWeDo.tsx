"use client";
import { useRef } from "react";
import { WHAT_WE_DO_SQUARE } from "../helpers";
import { motion, useScroll } from "framer-motion";

export const WhatWeDo = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  return (
    <main className="mt-32 mb-32 tablet:mt-44 container mx-auto px-5">
      <p className="text-center laptop:text-[150px] text-[60px] tablet:text-[70px] font-[900] text-[#F69197]">
        Co robimy?
      </p>
      {WHAT_WE_DO_SQUARE.map(({ image, title, description }, index) => (
        <div
          ref={container}
          className="h-[80vh] tablet:h-[70vh] laptop:h-[80vh] flex flex-col items-center justify-center sticky top-10"
        >
          <div
            key={index}
            // style={{
            //   top: `calc(-10% + ${
            //     index * (window.innerWidth >= 768 ? 100 : 50)
            //   }px)`,
            // }}
            className={`bg-[#2A2626] flex items-center laptop:flex-row  justify-center text-center p-5 flex-col w-full h-[450px] laptop:h-[400px] laptop:w-[800px] relative -top-[10%] rounded-[30px]`}
          >
            <img
              className="w-auto h-48 laptop:w-1/2 laptop:h-auto"
              src={image}
              alt="Zdjęcie"
            />
            <div className="flex gap-3 flex-col laptop:w-1/2 p-5 laptop:text-start text-[#fff]">
              <p className="laptop:text-[40px]">{title}</p>
              <p className="laptop:text-[20px]">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};
