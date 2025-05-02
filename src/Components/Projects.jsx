import React from "react";
import food from "../assets/images/food.jpg";
import netflix from "../assets/images/netflix.jpg";
import smart from "../assets/images/smart.webp";
import currency from "../assets/images/currency.png";
import portfolio from "../assets/images/portfolio.webp";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "DineEase",
    description:
      "Dine Ease is an intuitive food delivery web app that simplifies meal ordering with a clean UI and smart filtering features. Users can explore menus, view restaurant details, and place orders seamlessly. It’s optimized for speed and mobile responsiveness.",
    image: food,
    visitLink: "#",
    codeLink: "#",
    skills: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "A front-end clone of the Netflix homepage built using pure HTML, CSS, and vanilla JavaScript. It features a fully responsive layout, modern UI with flexbox/grid, hover animations, and smooth scrolling. ",
    image: netflix,
    visitLink: "#",
    codeLink: "#",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Smart Assistant",
    description:
      "Smart Assistant is a voice-based virtual assistant that responds to user commands like checking the time, searching the web, or opening apps. Built using JavaScript and Web Speech APIs, it provides a hands-free experience mimicking basic AI assistant tasks.",
    image: smart,
    visitLink: "#",
    codeLink: "#",
    skills: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Currency Converter",
    description:
      "This is a real-time currency converter built with API integration to fetch live exchange rates. Users can select currencies and instantly get accurate conversion results. It features error handling, a clean interface, and supports multiple currency pairs.",
    image: currency,
    visitLink: "#",
    codeLink: "#",
    skills: ["React", "TailWind CSS", "JavaScript", "Context API"],
  },
  {
    id: 5,
    title: "Portfolio Master",
    description:
      "Portfolio Master is a modern, animated personal portfolio website to showcase your projects, skills, and contact details. Built with React and Tailwind CSS, it includes smooth scroll, section transitions, and a responsive design optimized for all devices.",
    image: portfolio,
    visitLink: "#",
    codeLink: "#",
    skills: ["React", "Tailwind CSS", "JavaScript"],
  },
];

function Projects() {
  return (
    <div className="proj_container flex flex-wrap justify-center items-center w-full min-h-screen gap-8 p-8 bg-gradient-to-b from-transparent via-black/20 to-transparent">
      {projects.map((proj) => (
        <div
          key={proj.id}
          className="relative group w-[400px] h-[480px] bg-[#1e293b]/80 text-white rounded-xl shadow-lg p-5 flex flex-col items-start gap-3 transition-all duration-500 hover:scale-[1.02] border border-transparent hover:border-cyan-400"
        >
          {/* Smooth border-fill effect */}
          <span className="absolute bottom-2 left-4 right-4 h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>

          <div className="relative w-full h-44 overflow-hidden rounded-lg group">
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.3)]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-10 bg-[#57c2d482] text-white text-xs font-semibold flex items-center justify-center transition-all duration-300 overflow-hidden rounded-b-lg">
              View Demo
            </div>
          </div>

          <h2 className="text-xl font-bold w-full text-left text-cyan-200">
            {proj.title}
          </h2>

          <p className="text-sm text-left text-white/80">{proj.description}</p>

          <div className="w-full mt-1">
            <h4 className="text-xs text-white/60 mb-2 uppercase tracking-wide">
              Skills Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {proj.skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-[11px] md:text-xs bg-[#ffffff1a] border border-white/10 px-3 py-1 rounded-full text-white shadow-sm hover:bg-white/20 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center w-full mt-auto">
            <a
              href={proj.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-1 bg-gray-800 hover:bg-[#1f3436b7] text-white text-sm font-medium rounded-md border border-transparent hover:border-white transition-all duration-300 transform hover:scale-105"
            >
              <FaGithub className="text-sm" />
              Source Code
            </a>
            <a
              href={proj.visitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-9 py-1 bg-[#6ebccc5e] hover:bg-[#b4f2ff5e] text-white text-sm font-medium rounded-md border border-transparent hover:border-white transition-all duration-300 transform hover:scale-105"
            >
              <FaExternalLinkAlt className="text-sm" />
              Visit
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
