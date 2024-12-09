import SectionHeader from "./tiles/SectionHeader";
import { motion } from "framer-motion";

export const Valuations = () => {
  return (
    <div id="Wycena" className="container mx-auto px-5 my-32">
      <div className="flex items-center justify-center mb-10">
        <SectionHeader position="center" color="text-[#FFF]" title="Wycena" />
        <img
          src="ArrowRight.png"
          alt=""
          className="w-20 h-20 laptop:w-56 laptop:h-56"
        />
      </div>
      <div className="flex items-center justify-center desktop:justify-around laptop:mb-32">
        <img
          src="Microphone.png"
          alt=""
          className="w-28 h-auto laptop:w-56 desktop:w-72"
        />
        <div className="flex items-center justify-center">
          <img
            src="ArrowRight.png"
            alt=""
            className="rotate-180 w-20 h-20 laptop:w-44 laptop:h-44"
          />
          <div>
            <p className="text-[50px] font-[900] laptop:text-[150px] tablet:text-[70px] text-[#F69197]">
              Oferta
            </p>
            <p className="text-[20px] tablet:text-[40px] laptop:text-[70px] font-[900] text-[#F69197]">
              Przykładowe
            </p>
          </div>
        </div>
      </div>
      <div
        id="Bezpłatna konsultacja"
        className="w-full bg-[#F8F0E7] mt-16 h-[300px] tablet:h-[400px] laptop:h-[700px] rounded-[20px] relative overflow-hidden laptop:rounded-[50px]"
      >
        <p className="text-[50px] tablet:text-[90px] laptop:text-[150px] laptop:pt-28 pt-12 pl-10 font-[900] text-[#DD0326]">
          Zarezerwuj studio
        </p>
        <a
          href="https://calendly.com/dajglos"
          target="_blank"
          rel="noreferrer"
          className="text-[30px] cursor-pointer font-[900] tablet:text-[50px] laptop:text-[70px] text-[#F69197]"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="absolute bottom-10 right-10 tablet:right-16 tablet:bottom-8 tablet:h-44 tablet:w-44 h-28 w-28 bg-[#DD0326] rounded-full flex justify-center items-center laptop:h-64 laptop:w-64 laptop:right-24 laptop:bottom-16"
          >
            Tutaj
          </motion.div>
        </a>
        <div className="absolute h-24 w-24 left-8 -top-16 tablet:-top-24 tablet:left-12 tablet:h-40 tablet:w-40 rounded-full bg-[#DD0326] laptop:h-64 laptop:w-64 laptop:left-24 laptop:-top-44"></div>
      </div>
    </div>
  );
};
