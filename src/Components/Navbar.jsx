import React, { useState, useEffect, useRef } from "react";
import "../assets/Stylesheets/style.css"; // Ensure to import your CSS file
import shiv from "../assets/images/box.png"; // Ensure to import your image
import { Link } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the mobile menu container

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu if clicked outside of the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false); // Close menu if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside); // Add event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up on unmount
    };
  }, []);

  return (
    <div className="fixed w-full h-[2.5rem] sm:h-[4rem] bg-[#19b6bc3d] flex justify-between items-center px-8 shadow-xl shadow-[#72d4ba4f] rounded-b-full z-50">
      {/* Avatar and Name Section */}
      <div className="flex items-center space-x-1 sm:space-x-4">
        <div className="rounded-full h-[1rem] w-[1rem] sm:h-[2rem] sm:w-[2rem] md:h-[2.5rem] md:w-[2.5rem] flex bg-[#14b58500] hover:scale-110 transition-transform duration-300 overflow-hidden">
          <img src={shiv} alt="Profile" className="object-cover" />
        </div>
        <div className="text-white flex flex-col font-bold relative">
          <span
            className="relative inline-block text-transparent bg-clip-text text-xs sm:text-xl md:text-2xl bg-gradient-to-r hover:scale-110 transition-transform duration-300 shiny-text"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Siba Pradhan
          </span>
        </div>
      </div>

      {/* Hamburger Icon - visible before the sm breakpoint */}
      <div
        className="sm:hidden flex flex-col items-center justify-center cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`w-5 h-[0.5px] bg-white transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-5 h-[0.5px] bg-white my-1 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-5 h-[0.5px] bg-white transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>

      {/* Mobile Menu (appears before sm and on hamburger click) */}
      <div
        ref={menuRef} // Add the reference to the menu container
        className={`fixed top-0 left-0 w-full h-[11rem] bg-[#19b7bcb7] text-white text-center transform transition-all duration-300 ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col space-y-3 justify-center items-center mt-3">
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="lighting-link text-[14px] hover:scale-110 hover:text-[#d7e1e0] transition-transform duration-300"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="lighting-link text-[14px] hover:scale-110 hover:text-[#d7e1e0] transition-transform duration-300"
          >
            Education
          </Link>
          <Link
            to="Portfolio"
            smooth={true}
            duration={500}
            className="lighting-link text-[14px] hover:scale-110 hover:text-[#d7e1e0] transition-transform duration-300"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="lighting-link text-[14px] hover:scale-110 hover:text-[#d7e1e0] transition-transform duration-300"
          >
            Contact Us
          </Link>
          {/* "Let's Talk" Button in Mobile Menu */}
          <div
            className="group box jumping h-[1.5em] w-[5.5rem] md:h-[2rem] md:w-[7rem] border-[1px] border-black bg-[#0fc4fbbc] rounded-3xl px-0.5 flex justify-center items-center cursor-pointer shadow-md hover:shadow-lg transition-transform duration-300 hover:bg-black hover:scale-110"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <a
              href="tel:+919078738600"
              className="flex justify-center items-center w-full h-full"
            >
              <span className="font-semibold sm:text-[15px] text-[10px] md:text-[13px] pt-0.5 text-black transition-colors duration-300 group-hover:text-white">
                Let's Talk
              </span>
              <span className="hidden sm:block md:ml-1 font-bold sm:font-semibold text-black transition-colors duration-300 group-hover:text-white">
                👍
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Navbar Links for larger screens (visible after sm breakpoint) */}
      <div
        className="hidden sm:flex space-x-4 md:space-x-6 text-white font-sans font-bold cursor-pointer"
        style={{ fontFamily: "'Raleway', cursive" }}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="lighting-link hover:scale-100 hover:text-[#d7e1e0] rounded-2xl px-2 py-1 transition-transform duration-300"
        >
          Home
        </Link>

        <Link
          to="about"
          smooth={true}
          duration={500}
          className="lighting-link hover:scale-100 hover:text-[#d7e1e0] rounded-2xl px-2 py-1 transition-transform duration-300"
        >
          Education
        </Link>

        <Link
          to="portfolio"
          smooth={true}
          duration={500}
          className="lighting-link hover:scale-100 hover:text-[#d7e1e0] rounded-2xl px-2 py-1 transition-transform duration-300"
        >
          Portfolio
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="lighting-link hover:scale-100 hover:text-[#d7e1e0] rounded-2xl px-2 py-1 transition-transform duration-300"
        >
          Contact Us
        </Link>
      </div>

      {/* "Let's Talk" Button visible after sm breakpoint */}
      <div
  className="group box jumping hidden sm:flex h-[1rem] w-[3rem] sm:h-[1.5rem] sm:w-[5rem] md:h-[2rem] md:w-[7rem] bg-[#ffffff] rounded-3xl px-0.5 justify-center items-center cursor-pointer shadow-md hover:shadow-lg transition-transform duration-300 hover:bg-black hover:scale-110"
  style={{ fontFamily: "'Poppins', sans-serif" }}
  onClick={() => window.location.href = "tel:+1234567890"}
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
