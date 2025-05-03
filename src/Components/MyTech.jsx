import React, {  useEffect, useRef } from 'react';
import html from "../assets/images/Tech/html.png";
import css from "../assets/images/Tech/css1.png";
import js from "../assets/images/Tech/javascript.png";
import react from "../assets/images/Tech/reactjs.png";
import tailwind from "../assets/images/Tech/tail.png";
import node from "../assets/images/Tech/node.png";
import express from "../assets/images/Tech/express.png";
import mongodb from "../assets/images/Tech/mongo.png";
import boot from "../assets/images/Tech/boot.png";
import java from "../assets/images/Tech/java.png";
import mysql from "../assets/images/Tech/mysql.png";
import oracle from "../assets/images/Tech/oracle.png";
import { motion } from "framer-motion";

const techs = [
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: js },
  { name: "Java", image: java },
  { name: "MySQL", image: mysql },
  { name: "Oracle", image: oracle },
  { name: "React", image: react },
  { name: "Tailwind", image: tailwind },
  { name: "Node.js", image: node },
  { name: "Express", image: express },
  { name: "MongoDB", image: mongodb },
  { name: "Bootstrap", image: boot },
];

function MyTech() {

  // Ref for each tech card
  const techRef = useRef([]);

  // Intersection Observer to detect when the tech icons come into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.5 }
    );

    techRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      techRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="w-full min-h-screen p-6 sm:p-10">
      {/* Grid for sm and up */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
      {techs.map((tech, index) => (
        <div
          ref={(el) => (techRef.current[index] = el)}
          key={index}
          className="flex flex-col items-center bg-[#1e293b]/70 p-6 rounded-xl shadow-lg border border-transparent hover:border-cyan-400 transition-all duration-500 group relative opacity-0" // initial opacity for fade-in
        >
          <div className="w-24 h-24 md:w-32 md:h-32 mb-3">
            <img
              src={tech.image}
              alt={tech.name}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]"
            />
          </div>
          <span className="text-white text-base font-medium tracking-wide">{tech.name}</span>
          <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500 ease-out"></span>
        </div>
      ))}
    </div>

      {/* Scroll box only for <sm screens */}
      <div className="sm:hidden max-h-[700px] overflow-y-auto space-y-4 mt-4 pr-2 scrollbar-none">
      {techs.map((tech, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: index * 0.05,
          }}
          className="flex items-center bg-[#1e293b]/70 p-4 rounded-xl shadow-md border border-transparent hover:border-cyan-400 transition-all duration-300 group relative"
        >
          <div className="w-20 h-20 mr-4">
            <img
              src={tech.image}
              alt={tech.name}
              className="w-full h-full object-contain group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.6)] transition-transform duration-300 bg-[#3290978d] shadow-[0_0_15px_5px_rgba(0,255,255,0.4)]"
            />
          </div>
          <span
            className="text-white text-base font-medium tracking-wide"
            style={{
              
              textShadow:
                "0 0 3px #56dbed, 0 0 4 0px #4ca1af, 0 0 30px #2c3e50",
            }}
          >
            {tech.name}
          </span>
        </motion.div>
      ))}
    </div>
    </div>
  );
}

export default MyTech;
