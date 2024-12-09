import { useEffect, useState } from "react";
import { WHAT_WE_DO, FOR_WHO } from "../helpers";
import ForWhoTile from "./tiles/ForWhoTile";

const Information = () => {
  return (
    <div className="container mx-auto px-5 my-32 tablet:my-44">
      <h3 className="text-[30px] tablet:hidden text-center tablet:text-[60px] text-[#FFFFFF]">
        Tworzymy przestrzeń...
      </h3>
      <div className="h-[200px] laptop:h-[500px] flex flex-col justify-center items-center tablet:items-start">
        <div className="tablet:w-auto text-[#FFFFFF] tablet:flex tablet:flex-col tablet:items-start hidden">
          <h3 className="text-[30px] laptop:font-[700] desktop:text-[40px]">
            Tworzymy przestrzeń...
          </h3>
          <div className="flex flex-col">
            <p className="tablet:w-[310px] desktop:text-[24px] desktop:w-[700px]">
              do tworzenia najwyższej jakości materiałów takich jak:
            </p>
            <div className="font-bold w-[310px] laptop:w-[400px] desktop:text-[24px] desktop:w-[700px] tablet:text-[13px]">
              <br />
              Podcasty i videocasty,
              <br />
              Content na Social Media (viralowe rolki),
              <br />
              Kursy Online,
              <br />
              Live'y i Streamingi, <br />
              Landing Page, Sklepy i Strony WWW,
              <br />
              Grafiki, Video i Reklamy <br />
              <p className="hidden text-[#FFFFFF] font-normal laptop:flex laptop:mt-3">
                Dzięki temu możesz dać swój głos światu i dzielić się ideami,
                pasjami oraz mówić o swoim biznesie w profesjonalny i jakościowy
                sposób.
              </p>
            </div>
          </div>
        </div>
        <ForWhoTile />
        <img
          src="Micro.png"
          alt=""
          className="absolute right-0 hidden laptop:flex laptop:h-[600px] desktop:w-[900px] desktop:h-auto"
        />
        <p className="mt-10 hidden tablet:flex text-[#FFFFFF] laptop:hidden">
          Dzięki temu możesz dać swój głos światu i dzielić się ideami, pasjami
          oraz mówić o swoim biznesie w profesjonalny i jakościowy sposób.
        </p>
      </div>
      <div className="mt-24 text-[#FFFFFF] text-center tablet:hidden">
        <h4>do tworzenia najwyższej jakości materiałów takich jak:</h4> <br />
        <div className="grid  grid-cols-2 gap-5 items-center justify-center">
          {WHAT_WE_DO.map((text, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 w-full"
            >
              <div>
                <img
                  src="ArrowRight.png"
                  alt=""
                  className="w-10 h-10 rotate-180"
                />
              </div>
              <p className="text-[12px] w-[140px] text-start">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Information;
