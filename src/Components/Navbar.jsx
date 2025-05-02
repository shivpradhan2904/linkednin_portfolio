import React from "react";
import "../assets/Stylesheets/style.css"; // Ensure to import your CSS file
import shiv from "../assets/images/box.png"; // Ensure to import your image
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="fixed w-full h-[2.5rem] sm:h-[4rem] bg-[#19b6bc3d] flex justify-between items-center px-8 shadow-xl shadow-[#72d4ba4f] rounded-b-full">
      <div className="flex items-center space-x-1 sm:space-x-4">
        <div className="rounded-full h-[1rem] w-[1rem] sm:h-[2rem] sm:w-[2rem] md:h-[2.5rem] md:w-[2.5rem] flex bg-[#14b58541] hover:scale-110 transition-transform duration-300 overflow-hidden">
          <img src={shiv} alt="Profile" className="object-cover" />
        </div>
        <div className="text-white flex flex-col font-bold relative">
          <span
            className="relative inline-block text-transparent bg-clip-text text-xs sm:text-xl md:text-2xl bg-gradient-to-r hover:scale-110 transition-transform duration-300 shiny-text"
            style={{ fontFamily: "'Dancing Script', cursive" }} // Apply Dancing Script for "Siba Pradhan"
          >
            Siba Pradhan
          </span>
        </div>
      </div>

      <div
        className="hidden sm:flex space-x-4 md:space-x-6 text-white font-sans font-bold cursor-pointer"
        style={{ fontFamily: "'Josefin Sans', cursive" }}
      >
        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          className="lighting-link text-[15px] flex justify-center items-center hover:scale-110 text-sm hover:text-[#d7e1e0] rounded-2xl p-1 transition-transform duration-300 shadow-md hover:shadow-lg"
        >
          Home
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={500}
          className="lighting-link hover:scale-110 hover:text-[#d7e1e0] rounded-2xl p-1 transition-transform duration-300 shadow-md hover:shadow-lg"
        >
          Education
        </Link>
        <Link
          to="Portfolio"
          smooth={true}
          duration={500}
          className="lighting-link hover:scale-110 hover:text-[#d7e1e0] rounded-2xl p-1 transition-transform duration-300 shadow-md hover:shadow-lg"
        >
          portfolio
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="lighting-link hover:scale-110 hover:text-[#d7e1e0] rounded-2xl p-1 transition-transform duration-300 shadow-md hover:shadow-lg"
        >
          Contact Us
        </Link>
      </div>

      <div
        className="group box jumping h-[1rem] w-[3rem] sm:h-[1.5rem] sm:w-[5rem] md:h-[2rem] md:w-[7rem] bg-[#ffffff] rounded-3xl px-0.5 flex justify-center items-center cursor-pointer shadow-md hover:shadow-lg transition-transform duration-300 hover:bg-black hover:scale-110"
        style={{ fontFamily: "'Poppins', sans-serif" }} // Apply Poppins for the button
      >
        <span className="font-semibold sm:text-[10px] text-[7px] md:text-[13px] pt-0.5 sm:pt-0 text-black transition-colors duration-300 group-hover:text-white">
          Let's Talk
        </span>
        <span className="hidden sm:block md:ml-1 md:font-bold font-semibold text-black transition-colors duration-300 group-hover:text-white">
          👍
        </span>
      </div>
    </div>
  );
}

export default Navbar;
