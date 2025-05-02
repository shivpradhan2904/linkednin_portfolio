import React from "react";
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
  return (
    <div className="w-full min-h-screen p-10">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 place-items-center">
        {techs.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-[#1e293b]/70 p-6 rounded-xl shadow-lg border border-transparent hover:border-cyan-400 transition-all duration-500 group relative"
          >
            <div className="w-32 h-32 mb-3">
              <img
                src={tech.image}
                alt={tech.name}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]"
              />
            </div>
            <span className="text-white text-base font-medium tracking-wide">
              {tech.name}
            </span>

            {/* Hover Border Animation */}
            <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-cyan-400 group-hover:w-full transition-all duration-500 ease-out"></span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTech;
