import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NAVBAR_LINKS } from "../helpers";

const Navbar = () => {
  const [open, isOpen] = useState(false);

  const handleOpen = () => {
    isOpen((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-between">
      <img
        className="w-24 h-24 tablet:w-44 tablet:h-44"
        src="Logotype.png"
        alt="Logotyp Daj-Głos"
      />
      <button onClick={handleOpen} className="mr-4 tablet:mr-6">
        <GiHamburgerMenu className="text-white text-[20px] tablet:text-[30px]" />
      </button>

      {open && (
        <div
          onClick={handleOpen}
          className="fixed top-0 left-0 w-full h-full bg-black/60 z-50"
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 w-[250px] tablet:w-[400px] h-full bg-[#2A2626] transition-transform duration-300 z-50 ${
          open ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={handleOpen}
            className="text-[#dd0326] text-3xl tablet:text-5xl font-bold"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col text-white tablet:text-[20px] justify-center items-center gap-5 mt-10">
          {NAVBAR_LINKS.map((link, index) => (
            <a href="#" key={index}>
              {link}
            </a>
          ))}
          <button className="bg-[#dd0326] p-3 w-[200px] tablet:w-[250px] font-bold rounded-full">
            Bezpłatna konsultacja
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
