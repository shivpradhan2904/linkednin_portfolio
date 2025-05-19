import React, { useState, useEffect, useRef } from "react";
import ai from "../assets/images/certificate/ai.png";
import edu from "../assets/images/certificate/edu.png";
import iit from "../assets/images/certificate/IIT.png";
import introjv from "../assets/images/certificate/introjv.png";
import introoopsjv from "../assets/images/certificate/introoopsjv.png";
import oopsjv from "../assets/images/certificate/oopsjv.png";
import mysql from "../assets/images/certificate/mysql.png";
import react from "../assets/images/certificate/React.png";

function Certifications() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [inView, setInView] = useState(false);

  // Ref to track visibility
  const certificateRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );
    if (certificateRef.current) {
      observer.observe(certificateRef.current);
    }

    return () => {
      if (certificateRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  const allCertificates = [ai, mysql, react, oopsjv, introjv, introoopsjv, edu];

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  return (
    <div>
      <div className="sm:hidden block w-full min-h-screen bg-gradient-to-b from-transparent via-[#fff0] to-transparent p-4 sm:p-8">
        // {/* IIT Certificate */}
        <div className="flex justify-center mb-6">
          <div
            className="relative group rounded-lg overflow-hidden shadow-lg transition-all duration-500 border border-transparent hover:border-cyan-400 hover:scale-105 cursor-pointer w-full max-w-[600px]"
            onClick={() => setSelectedImage(iit)}
          >
            <img
              src={iit}
              alt="IIT Certificate"
              className="w-full h-auto object-contain rounded-lg group-hover:brightness-110"
            />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500 rounded-full"></span>
          </div>
        </div>
        {/* Small screen scrollable box */}
        <div className="block sm:hidden relative h-[550px] overflow-hidden mb-6">
          {/* Shadows */}
          <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#80080800] to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#fff0] to-transparent z-10 pointer-events-none" />

          {/* Scrollable Certificates */}
          <div
            className="h-full overflow-y-auto space-y-6 px-4 py-4 hide-scrollbar"
            style={{
              scrollPaddingTop: "100px",
              scrollPaddingBottom: "100px",
              perspective: "1000px",
            }}
          >
            {allCertificates.map((src, index) => (
              <motion.div
                key={index}
                onClick={() => setSelectedImage(src)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                className="transform-gpu transition-transform duration-300 ease-in-out scale-95 hover:scale-100"
                style={{ transformOrigin: "center" }}
              >
                <div className="w-full max-w-[20rem] mx-auto bg-[#03191f66] rounded-xl shadow-lg p-1 text-white flex flex-col gap-2 border border-white/10">
                  <img
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-[9rem] object-contain rounded-md"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Modal View */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-full max-h-full p-4">
              <img
                src={selectedImage}
                alt="Enlarged Certificate"
                className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg shadow-xl scale-105 "
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black/80 rounded-full p-2"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="hidden sm:block w-full min-h-screen bg-gradient-to-b from-transparent via-[#65555500] to-transparent p-4 sm:p-8 text-white">
        {/* IIT Certificate - Large on Top */}
        <div className="hidden sm:flex justify-center mb-10">
          <div
            className="relative group rounded-lg overflow-hidden shadow-lg transition-all duration-500 border border-transparent hover:border-cyan-400 hover:scale-105 cursor-pointer w-full max-w-[600px]"
            onClick={() => setSelectedImage(iit)}
          >
            <img
              src={iit}
              alt="IIT Certificate"
              className="w-full h-auto object-contain rounded-lg group-hover:brightness-110 transition-all duration-300"
            />
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500 rounded-full"></span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-6 underline underline-offset-8 decoration-cyan-400">
          Other Certifications
        </h2>

        {/* Certificate Grid */}
        <div
          ref={certificateRef}
          className={`hidden sm:flex flex-wrap justify-center gap-6 sm:gap-7 ${
            inView ? "animate-fadeIn" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          {allCertificates.map((src, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(src)}
              className="relative group rounded-lg overflow-hidden shadow-md transition-all duration-500 border border-transparent hover:border-cyan-400 hover:scale-105 cursor-pointer w-[90vw] sm:w-[14rem] md:w-[15rem] lg:w-[17rem]"
            >
              <img
                src={src}
                alt={`Certificate ${idx + 1}`}
                className="w-full h-auto object-contain rounded-lg group-hover:brightness-110 transition-all duration-300"
              />
              <span className="absolute bottom-0 left-0 h-[1px] sm:h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500 rounded-full"></span>
            </div>
          ))}
        </div>

        {/* Modal for All Certificates (including IIT) */}
        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-40 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-[80vw] max-w-[400px] max-h-[80vh] bg-black rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <img
                src={selectedImage}
                alt="Enlarged Certificate"
                className="w-full h-auto max-h-[60vh] object-contain rounded-lg shadow-xl"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 text-white bg-black/60 hover:bg-black/80 rounded-full p-2 text-lg"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Certifications;
