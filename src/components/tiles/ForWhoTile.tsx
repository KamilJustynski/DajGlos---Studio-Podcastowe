import { useEffect, useState } from "react";
import { FOR_WHO } from "../../helpers";

const ForWhoTile = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % FOR_WHO.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
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
            className={`absolute tablet:right-20 desktop:left-[900px] tablet:mb-36 laptop:left-1/3 laptop:ml-44 laptop:mt-20 w-max transform font-[900] -translate-x-1/2 transition-all duration-1000 ease-in-out
              ${
                isCenter
                  ? "text-[40px] tablet:text-[25px] laptop:text-[40px] desktop:text-[60px] text-[#F69197]"
                  : "text-[20px] tablet:text-[15px] laptop:text-[25px] desktop:text-[30px] text-[#F69197] blur-[2px]"
              }   ${isZero ? "blur-[3px]" : ""} ${isFour ? "blur-[2px]" : ""} ${
              isOne ? "blur-[1px]" : ""
            }`}
            style={{
              transform: `translateY(${position * 40 - 60}px)`,
            }}
          >
            {word}
          </div>
        );
      })}
    </>
  );
};
export default ForWhoTile;
