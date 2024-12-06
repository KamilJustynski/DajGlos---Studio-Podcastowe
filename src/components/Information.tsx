import { useEffect, useState } from "react";
import { WHAT_WE_DO, FOR_WHO } from "../helpers";
import { RxTriangleRight } from "react-icons/rx";

const Information = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % FOR_WHO.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="container mx-auto px-5 my-32">
      <h3 className="text-[30px] tablet:hidden text-center tablet:text-[60px] text-[#FFFFFF]">
        Tworzymy przestrzeń...
      </h3>
      <div className="h-[200px] laptop:h-[500px] flex flex-col justify-center items-center tablet:items-start">
        <div className="tablet:w-auto text-[#FFFFFF] tablet:flex tablet:flex-col tablet:items-start hidden">
          <h4 className="text-[30px] laptop:font-[700]">
            Tworzymy przestrzeń...
          </h4>
          <div className="flex flex-col">
            <p className="tablet:w-[310px]">
              do tworzenia najwyższej jakości materiałów takich jak:
            </p>
            <div className="font-bold w-[310px] laptop:w-[400px]">
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
              <p className="hidden text-[#FFFFFF] laptop:flex laptop:mt-3">
                Dzięki temu możesz dać swój głos światu i dzielić się ideami,
                pasjami oraz mówić o swoim biznesie w profesjonalny i jakościowy
                sposób.
              </p>
            </div>
          </div>
        </div>
        {FOR_WHO.map((word, index) => {
          const position =
            (index - currentIndex + FOR_WHO.length) % FOR_WHO.length;
          const isCenter = position === 2;
          const isZero = position === 0 || position === 5;
          const isFour = position === 4;
          const isOne = position === 1 || position === 3;

          return (
            <div
              key={index}
              className={`absolute tablet:right-20 laptop:left-1/3 laptop:ml-44 laptop:mt-20 w-max transform font-[900] -translate-x-1/2 transition-all duration-1000 ease-in-out
                ${
                  isCenter
                    ? "text-[40px] tablet:text-[30px] laptop:text-[50px] text-[#F69197]"
                    : "text-[20px] tablet:text-[15px] laptop:text-[30px] text-[#F69197] blur-[2px]"
                }   ${isZero ? "blur-[3px]" : ""} ${
                isFour ? "blur-[2px]" : ""
              } ${isOne ? "blur-[1px]" : ""}`}
              style={{
                transform: `translateY(${
                  position * 40 - (window.innerWidth >= 768 ? 140 : 60)
                }px)`,
              }}
            >
              {word}
            </div>
          );
        })}
        <img
          src="Micro.png"
          alt=""
          className="absolute right-0 hidden laptop:flex laptop:h-[600px]"
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
