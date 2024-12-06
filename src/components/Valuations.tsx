export const Valuations = () => {
  return (
    <div className="container mx-auto px-5 my-32">
      <div className="flex items-center justify-center mb-10">
        <p className="text-[60px] font-[900] text-[#fff]">Wycena</p>
        <img src="ArrowRight.png" alt="" className="w-28 h-28" />
      </div>
      <div className="flex items-center justify-center">
        <img src="Microphone.png" alt="" className="w-20 h-auto" />
        <div className="flex items-center justify-center">
          <img src="ArrowRight.png" alt="" className="rotate-180 w-20 h-20" />
          <div>
            <p className="text-[60px] font-[900] text-[#F69197]">Oferta</p>
            <p className="text-[20px] font-[900] text-[#F69197]">Przykładowe</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-white mt-16 h-[300px] tablet:h-[400px] rounded-[20px] relative overflow-hidden">
        <p className="text-[50px] tablet:text-[90px] pt-12 pl-10 font-[900] text-[#DD0326]">
          Zarezerwuj studio
        </p>
        <div className="absolute bottom-10 right-10 tablet:right-16 tablet:bottom-8 tablet:h-44 tablet:w-44 h-28 w-28 bg-[#DD0326] rounded-full flex justify-center items-center">
          <a
            href="https://calendly.com/dajglos"
            target="_blank"
            rel="noreferrer"
            className="text-[30px] cursor-pointer font-[900] tablet:text-[50px] text-[#F69197]"
          >
            Tutaj
          </a>
        </div>
        <div className="absolute h-24 w-24 left-8 -top-16 tablet:-top-24 tablet:left-12 tablet:h-40 tablet:w-40 rounded-full bg-[#DD0326]"></div>
      </div>
    </div>
  );
};
