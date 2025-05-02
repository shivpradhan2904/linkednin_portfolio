import React from "react";
import { motion } from "framer-motion";
import image2 from "../assets/images/image3.avif"; // Replace with your image
import int from "../assets/images/post.png"; // Replace with your image
import post from "../assets/images/mortarboard.png"; // Replace with your image
import gra from "../assets/images/puzzle.png"; // Replace with your image
import sc from "../assets/images/school.png"; // Replace with your image

function About() {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center text-white overflow-x-hidden p-2"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Outer Glass Box */}
      <div
        className="h-full md:w-full w-full bg-transparent shadow-2xl backdrop-blur-md rounded-3xl flex flex-col justify-between items-center px-4 sm:py-2 transition-all duration-300 ease-in-out"
        style={{
          boxShadow: "0 0px 30px rgba(97, 151, 141, 0.56)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Title */}
        <div className="text-center">
          <div
            className="sm:text-4xl text-xl mt-2  font-bold bg-gradient-to-r from-[#56dbed] via-[#8fe3ffb0] to-[#0ce7d5ea] text-transparent bg-clip-text animate-gradient"
            style={{
              textShadow: "0 0 3px #56dbed, 0 0 20px #4ca1af, 0 0 30px #2c3e50",
              fontFamily: "'Tagesschrift', cursive",
            }}
          >
            My Academic Journey
          </div>
          <div className="h-1 w-32 mx-auto mt-2 bg-gradient-to-r from-[#4eb0bd] via-[#0c96c4b0] to-[#047ecab9] animate-gradient rounded-full"></div>
        </div>

        {/* Education Sections */}
        <div className="flex flex-col gap-14 mt-10 w-full items-center">
          {/* Masters Degree */}
          <Section
            title="Masters Degree"
            institution="Institute of Management and Information Technology"
            location="Cuttack, Odisha"
            duration="2023 - 2025"
            circleTitle="Post Graduation"
            circleImage={post}
          />
          <div className="hidden sm:block h-1 w-100 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-4"></div>

          {/* Bachelors Degree */}
          <Section
            reverse
            title="Bachelor's Degree"
            institution="Berhampur University"
            location="Berhampur, Ganjam, Odisha"
            duration="2020 - 2023"
            circleTitle="Graduation"
            circleImage={gra}
          />
          <div className="hidden sm:block h-1 w-100 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-4"></div>

          {/* Intermediate */}
          <Section
            title="Intermediate"
            institution="Kabi Samrat Upendra Bhanja College"
            location="Bhanjanagar, Ganjam, Odisha"
            duration="2018 - 2020"
            circleTitle="Higher Secondary"
            circleImage={int}
          />
          <div className="hidden sm:block h-1 w-100 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-4"></div>

          {/* Secondary */}
          <Section
            reverse
            title="Secondary"
            institution="Satya Sai Vidya Vihar"
            location="Bhanjanagar, Ganjam, Odisha"
            duration="2017 - 2018"
            circleTitle="Secondary"
            circleImage={sc}
          />
          <div className="hidden sm:block h-1 w-100 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-4"></div>
        </div>
      </div>
    </div>
  );
}

// Reusable Section Component
function Section({
  title,
  institution,
  location,
  duration,
  circleTitle,
  circleImage,
  reverse,
}) {
  return (
    <div className="flex flex-col gap-6 items-center w-full">
      {/* Mobile Layout: Circle */}
      <div className="flex flex-col sm:hidden items-center gap-6 w-full">
        <Circle
          circleTitle={circleTitle}
          circleImage={circleImage}
          duration={duration}
        />
        <TextBox
          title={title}
          institution={institution}
          location={location}
          duration={duration}
        />
        <div className="h-1 w-40 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-4"></div>
      </div>

      {/* Desktop Layout: Side-by-Side */}
      <div className="hidden sm:flex sm:flex-row sm:items-center sm:justify-center sm:gap-10 w-full">
        {reverse ? (
          <>
            <TextBox
              title={title}
              institution={institution}
              location={location}
              duration={duration}
            />
            <Circle
              circleTitle={circleTitle}
              circleImage={circleImage}
              duration={duration}
            />
          </>
        ) : (
          <>
            <Circle
              circleTitle={circleTitle}
              circleImage={circleImage}
              duration={duration}
            />
            <TextBox
              title={title}
              institution={institution}
              location={location}
              duration={duration}
            />
          </>
        )}
      </div>
    </div>
  );
}

// Circle Component
function Circle({ circleTitle, circleImage, duration }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative h-[25vh] w-[25vh] sm:w-[34vh] sm:h-[33vh] rounded-full overflow-hidden flex justify-center items-center hover:scale-110 transition-transform duration-500 ease-in-out"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-900 to-cyan-300 hover:from-purple-600 hover:to-pink-500 transition-all duration-500"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-white">
        <img
          src={circleImage}
          alt=""
          className="sm:h-[45px] sm:w-[45px] w-[40px] h-[40px] invert mb-5"
        />
        <div
          className="sm:text-2xl text-lg font-bold bg-gradient-to-r from-[#b5f3fb] via-[#ffffff] to-[#ffffffea] text-transparent bg-clip-text"
          style={{ fontFamily: "'Cal Sans', cursive" }}
        >
          {circleTitle}
        </div>
        <span className="font-bold text-xl">{duration}</span>
      </div>
    </motion.div>
  );
}

// TextBox Component
function TextBox({ title, institution, location, duration }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-transparent shadow-2xl backdrop-blur-md rounded-3xl px-4 py-4 w-full max-w-lg"
    >
      <h2
        className="text-xl md:text-2xl font-semibold text-[#86fff3] mb-4 text-center"
        style={{
          textShadow: "0 0 10px #fff, 0 0 20px #4ca1af, 0 0 30px #2c3e50",
        }}
      >
        {title}
      </h2>

      <div className="space-y-4">
        <InfoRow icon="🎓" text={institution} />
        <InfoRow icon="📍" text={location} />
        <InfoRow icon="📅" text={duration} />
      </div>
    </motion.div>
  );
}

// Info Row Component
function InfoRow({ icon, text }) {
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex items-center gap-2"
    >
      <span>{icon}</span>
      <p className="sm:text-lg text-[12px]">{text}</p>
    </motion.div>
  );
}

export default About;
