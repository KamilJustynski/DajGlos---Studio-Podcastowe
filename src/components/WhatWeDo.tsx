"use client";
import { useRef } from "react";
import { WHAT_WE_DO_SQUARE } from "../helpers";
import { useScroll } from "framer-motion";
import SectionHeader from "./tiles/SectionHeader";

export const WhatWeDo = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  return (
    <main className="mt-32 mb-32 tablet:mt-44 container mx-auto px-5">
      <SectionHeader title="Co robimy?" />
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
              <p className="laptop:text-[40px] tablet:text-[25px] font-[900]">
                {title}
              </p>
              <p className="laptop:text-[20px]">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};
