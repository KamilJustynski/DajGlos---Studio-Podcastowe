import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { NAVBAR_LINKS } from "../helpers";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [open, isOpen] = useState(false);

  const handleOpen = () => {
    isOpen((prevState) => !prevState);
  };

  return (
    <div className="flex items-center justify-between desktop:px-10">
      <img
        className="w-24 h-24 tablet:w-44 tablet:h-44"
        src="Logotype.png"
        alt="Logotyp Daj-Głos"
      />
      <button onClick={handleOpen} className="mr-4 tablet:mr-6 laptop:hidden">
        <GiHamburgerMenu className="text-white text-[20px] tablet:text-[30px]" />
      </button>

      <div className="hidden laptop:flex text-white justify-center items-center gap-10 desktop:gap-16 laptop:text-[16px] desktop:text-[20px]">
        {NAVBAR_LINKS.map((link, index) => (
          <Link
            to={link}
            smooth={true}
            key={index}
            className="hover:text-[#E4E4E4] hover:scale-105 duration-150 cursor-pointer"
          >
            {link}
          </Link>
        ))}
      </div>
      <Link
        className="hidden laptop:flex"
        to="Bezpłatna konsultacja"
        smooth={true}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="mr-10 rounded-[50px] text-[#fff] bg-[#567FD8] px-5 py-2 laptop:text-[16px] desktop:text-[20px] desktop:px-8 desktop:py-4"
        >
          Bezpłatna konsultacja
        </motion.button>
      </Link>

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
            className="text-[#567FD8] text-3xl tablet:text-5xl font-bold"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col text-white tablet:text-[20px] justify-center items-center gap-5 mt-10">
          {NAVBAR_LINKS.map((link, index) => (
            <Link
              className="cursor-pointer"
              onClick={handleOpen}
              to={link}
              smooth={true}
              key={index}
            >
              {link}
            </Link>
          ))}
          <Link onClick={handleOpen} to="Bezpłatna konsultacja" smooth={true}>
            <button className="bg-[#567FD8] p-3 w-[200px] tablet:w-[250px] font-bold rounded-full">
              Bezpłatna konsultacja
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
