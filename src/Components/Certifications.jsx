import React from "react";
import ai from "../assets/images/certificate/ai.png";
import edu from "../assets/images/certificate/edu.png";
import iit from "../assets/images/certificate/IIT.png";
import introjv from "../assets/images/certificate/introjv.png";
import introoopsjv from "../assets/images/certificate/introoopsjv.png";
import oopsjv from "../assets/images/certificate/oopsjv.png";
import mysql from "../assets/images/certificate/mysql.png";
import react from "../assets/images/certificate/React.png";

function Certifications() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-transparent via-black/20 to-transparent p-8">
      {/* IIT Certificate - Larger and Centered */}
      <div className="flex justify-center mb-10">
        <div className="relative group rounded-lg overflow-hidden shadow-lg transition-all duration-500 border border-transparent hover:border-cyan-400 hover:scale-105">
          <img
            src={iit}
            alt="IIT Certificate"
            className="w-[530px] h-[350px] object-cover rounded-lg group-hover:brightness-110"
          />
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500 rounded-full"></span>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-white text-center mb-6 underline underline-offset-8 decoration-cyan-400">
        Other Certifications
      </h2>

      {/* Certificate Grid */}
      <div className="flex flex-wrap justify-center gap-8">
        {[ai, mysql, react, edu, introjv, introoopsjv, oopsjv].map(
          (src, idx) => (
            <div
              key={idx}
              className="relative group rounded-lg overflow-hidden shadow-md transition-all duration-500 border border-transparent hover:border-cyan-400 hover:scale-105"
            >
              <img
                src={src}
                alt={`Certificate ${idx + 1}`}
                className="w-[320px] h-[220px] object-cover rounded-lg group-hover:brightness-110"
              />
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500 rounded-full"></span>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Certifications;
