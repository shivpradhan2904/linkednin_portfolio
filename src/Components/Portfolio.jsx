import React from "react";
import { useRef, useEffect, useState } from "react";

import image2 from "../assets/images/image3.avif"; // Replace with your image
import code from "../assets/images/code.png"; // Replace with your image
import cert from "../assets/images/certificate.png"; // Replace with your image
import tech from "../assets/images/cpu.png"; // Replace with your image
import Projects from "./Projects";
import Certifications from "./Certifications";
import MyTech from "./MyTech";

function Portfolio() {
  const [selectedBox, setSelectedBox] = useState(1);
  const containerRef = useRef(null);
  const boxRefs = useRef([]);

  const [underlinePos, setUnderlinePos] = useState({ left: 0, width: 0 });

  const boxes = [
    { id: 1, label: "Projects", img: code },
    { id: 2, label: "Certification", img: cert },
    { id: 3, label: "Tech Stack", img: tech },
  ];
  useEffect(() => {
    if (boxRefs.current[selectedBox - 1]) {
      const box = boxRefs.current[selectedBox - 1];
      setUnderlinePos({
        width: box.offsetWidth * 0.5,
        left: box.offsetLeft + box.offsetWidth * 0.25, // center the underline
      });
    }
  }, [selectedBox]);

  return (
    <div
      className="w-full h-full flex flex-col justify-center items-center text-white overflow-x-hidden p-2 "
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="h-full md:w-full w-full bg-transparent shadow-2xl backdrop-blur-md rounded-3xl flex flex-col justify-between items-center px-4 sm:py-2 transition-all duration-300 ease-in-out"
        style={{
          boxShadow: "0 0px 30px rgba(97, 151, 141, 0.56)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        <div
          className="relative flex justify-center w-full gap-2  h-[3rem] sm:h-[4rem] p-2 mt-[4rem]"
          ref={containerRef}
        >
          {boxes.map((box, index) => (
            <div
              key={box.id}
              onClick={() => setSelectedBox(box.id)}
              ref={(el) => (boxRefs.current[index] = el)}
              className={`group font-semibold flex flex-col items-center justify-center w-72 rounded-lg cursor-pointer text-lg
            transition-all duration-400 ease-in-out
            ${
              selectedBox === box.id
                ? "bg-[#3290978d] shadow-[0_0_15px_5px_rgba(0,255,255,0.4)]"
                : "shadow-none"
            }
            hover:shadow-[0_0_15px_5px_rgba(0,255,255,0.4)]`}
            >
              <img
                src={box.img}
                alt={box.label}
                className={`sm:w-6 sm:h-6 h-4 w-4 mb-1 transition-all duration-200 invert
              group-hover:drop-shadow-[0_0_5px_white]
              ${selectedBox === box.id ? "drop-shadow-[0_0_5px_white]" : ""}`}
              />
              <span className="font-bold text-[10px] sm:text-lg text-white">{box.label}</span>
            </div>
          ))}

          {/* Underline that moves to selected item */}
          <div
            className="absolute bottom-0 h-1 bg-cyan-400 rounded transition-all duration-700 ease-in-out"
            style={{
              width: underlinePos.width,
              left: underlinePos.left,
            }}
          />
        </div>

        {/* Conditional rendering based on selectedBox */}
        <div className="mt-8 transition-opacity duration-300 ease-in-out opacity-100">
          {selectedBox === 1 && <Projects />}
          {selectedBox === 2 && <Certifications />}
          {selectedBox === 3 && <MyTech />}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
