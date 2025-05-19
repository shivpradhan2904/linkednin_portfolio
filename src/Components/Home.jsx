import React, { useState, useEffect, useRef } from "react";
import image2 from "../assets/images/image3.avif"; // Replace with actual image path
import image from "../assets/images/img.jpg"; // Replace with actual image path
import image1 from "../assets/images/splash1.png"; // Replace with actual image path
import resume from "../assets/images/image.png"; // Replace with actual image path

import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import Download from "./Download";

const texts = ["MERN Stack Developer", "Traveller", "Photographer"];

function TypingEffect() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let typingSpeed = isDeleting ? 100 : 200;

    let timeout;

    if (!isDeleting && charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        // Once full word is typed, delay before deleting
        if (charIndex + 1 === currentText.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000); // wait 1s before deleting
        }
      }, typingSpeed);
    } else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        // Once fully deleted, go to next word
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentTextIndex]);
  return (
    <span className="text-yellow-300">
      {displayText}
      <span className="border-r-2 border-yellow-300 animate-pulse ml-1"></span>
    </span>
  );
}

function Home() {
  const [showInfo, setShowInfo] = useState(false);
  const underContainerRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = resume;
      link.download = "Siba_Resume.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(false);
    }, 2000); // fake loading effect
  };

  const handleToggle = () => {
    setShowInfo((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (
      underContainerRef.current &&
      !underContainerRef.current.contains(event.target)
    ) {
      setShowInfo(false);
    }
  };

  useEffect(() => {
    if (showInfo) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showInfo]);
  // console.log("heloo")

  return (
    <div
      className="w-full h-full overflow-hidden"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex justify-center items-center  relative p-5">
        <div
          className="box md:mt-0 mt-1 md:hover:h-[47rem] md:h-[42rem] lg:h-[46rem] md:w-[92rem] md:hover:w-[95rem] h-full w-full bg-transparent shadow-2xl bg-opacity-50 backdrop-blur-md rounded-3xl flex flex-col justify-between items-center px-4 py-0 sm:py-2 transition-all duration-300 ease-in-out"
          style={{
            boxShadow: "0 0px 30px rgba(114, 212, 186, 0.31)",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Marquee Text for Mobile View */}
          <div className="marquee-container md:hidden block text-[9px] sm:text-[14px] lg:text-[14px] xl:text-[16px]">
            <div
              className="marquee-track w-full"
              style={{
                fontFamily: "Edu Australia VIC WA NT Hand Arrows, cursive",
              }}
            >
              <span className="marquee-text">Welcome to my portfolio! </span>
              <span className="marquee-text">Welcome to my portfolio! </span>
            </div>
          </div>

          <button
            onClick={handleToggle}
            style={{ fontFamily: '"PT Serif", cursive' }}
            className="md:block hidden bg-gradient-to-br from-blue-500 via-purple-400 to-pink-600 text-white font-semibold py-1 px-12 rounded-lg
              hover:from-blue-600 hover:via-purple-500 hover:to-pink-700 mt-11
              transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl 
              focus:outline-none focus:ring-4 focus:ring-blue-300 "
          >
            About more
          </button>

          <div className="flex justify-between items-center gap-[4rem] lg:gap-[10rem] xl:gap-[15rem] ">
            <div className="flex flex-col items-center">
              {/* Intro Heading */}
              <div
                className="text-center text-white sm:text-xl md:text-3xl xl:text-5xl font-bold leading-snug"
                style={{ fontFamily: "Playwrite AU SA, cursive" }}
              >
                Hello There! ✌️ I'm Shiv,
                <br />
                a <TypingEffect />
              </div>
              <div className="my-4 md:hidden flex flex-col items-center">
                {/* Centered Image 666*/}
                <div
                  className=" sm:h-[15rem] sm:w-[15rem] md:w-[20rem] md:h-[20rem] h-[11rem] w-[11rem]"
                  style={{
                    WebkitMaskImage: `url(${image1})`,
                    WebkitMaskSize: "cover",
                    WebkitMaskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskImage: `url(${image1})`,
                    maskSize: "cover",
                    maskRepeat: "no-repeat",
                    maskPosition: "center",
                  }}
                >
                  <img
                    src={image}
                    alt="Clipped Profile"
                    className="h-full w-full object-cover"
                  />
                </div>

                <button
                  onClick={handleDownload}
                  style={{ fontFamily: '"Winky Rough", cursive' }}
                  className="mt-4 bg-gradient-to-r border-2 text-sm cursor-pointer border-[#2e9088] from-cyan-300 via-purple-400 to-blue-600 text-white font-semibold py-1 w-30 rounded-lg 
      transition-all duration-300 ease-in-out transform hover:bg-gradient-to-l hover:scale-105 hover:shadow-lg "
                  disabled={downloading}
                >
                  {downloading ? (
                    <div className="flex justify-center items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Downloading...
                    </div>
                  ) : (
                    "Get Resume"
                  )}
                </button>
              </div>

              {/* About Me Paragraph */}
              <div className="text-center sm:mt-4 md:mt-1">
                <p
                  className="text-[#fff] md:text-lg text-[10px] px-4 max-w-2xl"
                  // style={{
                  //   color: "white",
                  //   textShadow:
                  //     "0 0 3px #ffffff, 0 0 10px #ffffffb3, 0 0 20px #ffffff",
                  // }}
                >
                  <span
                    className="font-semibold text-xl md:text-3xl text-cyan-300"
                    style={{ fontFamily: "Bodoni Moda, cursive" }}
                  >
                    Shiv here 🚀
                  </span>{" "}
                  <span >
                    — crafting cool and clean UI experiences and I love building
                    clean and interactive user interfaces 💻.
                    <div className="border-b border-cyan-300 my-2"></div>I enjoy
                    learning new technologies 🚀, solving real-world problems
                    🧠, and turning ideas into reality through code 🎯.
                    <div className="border-b border-cyan-300 my-2"></div>
                    <span className="">
                      Let's connect and create something awesome together! 🌟
                    </span>
                  </span>
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3 sm:gap-4 md:gap-6 mb-5 mt-2 md:mt-2 sm:mt-8 lg:mt-9">
                <a
                  href="https://www.linkedin.com/in/siba-pradhan-2606a9289"
                  className="border border-cyan-400 p-2 sm:p-3 lg:p-4 rounded-full text-cyan-400 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 hover:rotate-6 hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.8)] transition-all duration-300 ease-in-out"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/shivpradhan2904"
                  className="border border-cyan-400 p-2 sm:p-3 md:p-4 rounded-full text-cyan-400 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 hover:-rotate-6 hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.8)] transition-all duration-300 ease-in-out"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.instagram.com/__shiv__here/?next=%2F"
                  className="border border-cyan-400 p-2 sm:p-3 md:p-4 rounded-full text-cyan-400 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 hover:rotate-6 hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.8)] transition-all duration-300 ease-in-out"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/9078738600" // Replace 'yourphonenumber' with your actual WhatsApp number
                  className="border border-cyan-400 p-2 sm:p-3 md:p-4 rounded-full text-cyan-400 text-lg sm:text-xl md:text-2xl lg:text-3xl hover:scale-110 hover:-rotate-6 hover:shadow-[0_0_20px_4px_rgba(34,211,238,0.8)] transition-all duration-300 ease-in-out"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>

            <div className="my-4 hidden md:flex flex-col items-center">
              {/* Centered Image */}
              <div
                className="lg:h-[20rem] lg:w-[20rem] md:h-[18rem] md:w-[18rem] h-[15rem] w-[15rem]"
                style={{
                  WebkitMaskImage: `url(${image1})`,
                  WebkitMaskSize: "cover",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  maskImage: `url(${image1})`,
                  maskSize: "cover",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                }}
              >
                <img
                  src={image}
                  alt="Clipped Profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <Download /> {/* Download button */}
              </div>
            </div>
          </div>

          <button
            onClick={handleToggle}
            style={{ fontFamily: '"PT Serif", cursive' }}
            className=" md:hidden bg-gradient-to-br from-blue-500 via-purple-400 to-pink-600 text-white font-semibold py-[1px] px-6 rounded-lg
              hover:from-blue-600 hover:via-purple-500 hover:to-pink-700 text-[8px]
              transition-all duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl 
              focus:outline-none focus:ring-4 focus:ring-blue-300 mb-4"
          >
            About more
          </button>
          <div className="marquee-container hidden md:block">
            <div
              className="marquee-track w-full"
              style={{
                fontFamily: "Edu Australia VIC WA NT Hand Arrows, cursive",
              }}
            >
              <span className="marquee-text">Welcome to my portfolio! </span>
              <span className="marquee-text">Welcome to my portfolio! </span>
            </div>
          </div>
        </div>

        <div
          ref={underContainerRef}
          className={`fixed left-1/2 transform -translate-x-1/2 w-[90%] max-w-[700px] rounded-xl shadow-xl text-black transition-all duration-700 ease-in-out z-10 ${
            showInfo
              ? "bottom-8 opacity-100 translate-y-0"
              : "-bottom-[500px] opacity-0 translate-y-12"
          }`}
        >
          <div
            className="text-black leading-relaxed tracking-normal p-4 sm:p-6 rounded-2xl"
            style={{
              background: "linear-gradient(135deg, #2c3e50, #4ca1af, #2c3e50)",
              color: "white",
              // textShadow: "0 0 10px #fff, 0 0 20px #4ca1af, 0 0 30px #2c3e50",
            }}
          >
            {/* About Me Section */}
            <h2 className="text-lg sm:text-2xl font-semibold flex items-center justify-center gap-2 mb-4">
              <span>📘</span> About Me
            </h2>
            <p
              className="text-center mb-4 text-[12px] sm:text-[17px] text-cyan-100"
              // style={{ fontFamily: "'Tagesschrift', cursive" }}
            >
              I am currently studying MCA at{" "}
              <span className="text-yellow-300 font-semibold">
                Institute of Management and Information Technology
              </span>
              , a renowned institute dedicated to developing IT professionals. I
              am passionate about building creative software solutions and
              continuously learning in the field of technology.
            </p>

            {/* Location Section */}
            <h3 className="text-xl font-semibold flex items-center justify-center gap-2 mb-2 sm:mb-4">
              <span>📍</span> Location
            </h3>
            <p
              className="text-center text-[12px] sm:text-[18px] sm:mb-4 text-cyan-100"
              // style={{ fontFamily: "'Tagesschrift', cursive" }}
            >
              I am currently based in{" "}
              <span className="text-green-300 font-semibold">
                Bhubaneswar, Odisha
              </span>
              , a beautiful city known for its temples and growing tech culture.
            </p>

            {/* Quote */}
            <footer
              className="text-center text-sm mt-4 sm:mt-6 sm:text-lg italic font-bold text-800"
              style={{ fontFamily: "'Playwrite Australia SA', cursive" }}
            >
              <p
                style={{
                  color: "white",
                  textShadow:
                    "0 0 10px #fff, 0 0 20px #4ca1af, 0 0 30px #2c3e50",
                }}
              >
                "A day without laughter is a day wasted." — Charlie Chaplin
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
