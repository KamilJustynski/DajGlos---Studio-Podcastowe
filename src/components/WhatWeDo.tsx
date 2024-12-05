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
    <main className="mt-[32px] mb-[100vh] container mx-auto px-5">
      <p className="sticky top-0 text-center text-[60px] font-[900] text-[#F69197]">
        Co robimy?
      </p>
      {WHAT_WE_DO_SQUARE.map(({ image, title, description }, index) => (
        <div
          ref={container}
          className="h-[90vh] tablet:h-[70vh] flex flex-col items-center justify-center sticky top-0"
        >
          <div
            key={index}
            style={{
              top: `calc(-10% + ${
                index * (window.innerWidth >= 768 ? 100 : 60)
              }px)`,
            }}
            className={`bg-[#2A2626] flex  items-center justify-center text-center p-5 flex-col w-full h-[400px] relative -top-[10%] rounded-[30px]`}
          >
            <img className="w-auto h-32" src={image} alt="Zdjęcie" />
            <div className="flex gap-3 flex-col p-5 text-[#fff]">
              <p>{title}</p>
              <p>{description}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};
