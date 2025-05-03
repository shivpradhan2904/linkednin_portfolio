import React from "react";
import food from "../assets/images/foo.jpg";
import netflix from "../assets/images/net.webp";
import smart from "../assets/images/smart.webp";
import currency from "../assets/images/currency.png";
import portfolio from "../assets/images/port.jpg";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "DineEase",
    description:
      "Dine Ease is an intuitive food delivery web app that simplifies meal ordering with a clean UI and smart filtering features. Users can explore menus, view restaurant details, and place orders seamlessly. It’s optimized for speed and mobile responsiveness.",
    image: food,
    visitLink: "https://mealplanner-six.vercel.app/",
    codeLink: "https://github.com/shivpradhan2904/DineEase",
    skills: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    id: 2,
    title: "Netflix Clone",
    description:
      "A front-end clone of the Netflix homepage built using pure HTML, CSS, and vanilla JavaScript. It features a fully responsive layout, modern UI with flexbox/grid, hover animations, and smooth scrolling. ",
    image: netflix,
    visitLink: "https://vercel.com/shivs-projects-753a38a2/netflix_clone",
    codeLink: "https://github.com/shivpradhan2904/NETFLIX",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "Smart Assistant",
    description:
      "Smart Assistant is a voice-based virtual assistant that responds to user commands like checking the time, searching the web, or opening apps. Built using JavaScript and Web Speech APIs, it provides a hands-free experience mimicking basic AI assistant tasks.",
    image: smart,
    visitLink: "https://anil-dada-smart-assistant-project.vercel.app/",
    codeLink: "https://github.com/shivpradhan2904/Anil-dada",
    skills: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Currency Converter",
    description:
      "This is a real-time currency converter built with API integration to fetch live exchange rates. Users can select currencies and instantly get accurate conversion results. It features error handling, a clean interface, and supports multiple currency pairs.",
    image: currency,
    visitLink: "https://currency-converter-gamma-coral.vercel.app/",
    codeLink: "https://github.com/shivpradhan2904/Currency-Converter",
    skills: ["React", "TailWind CSS", "JavaScript", "Context API"],
  },
  {
    id: 5,
    title: "Portfolio Master",
    description:
      "Portfolio Master is a modern, animated personal portfolio website to showcase your projects, skills, and contact details. Built with React and Tailwind CSS, it includes smooth scroll, section transitions, and a responsive design optimized for all devices.",
    image: portfolio,
    visitLink: "https://portfolio-master-two-ashen.vercel.app/",
    codeLink: "https://github.com/shivpradhan2904/Portfolio_master",
    skills: ["React", "Tailwind CSS", "JavaScript"],
  },
];

function Projects() {
  return (
    <div>
      <div className="block sm:hidden relative h-[550px] overflow-hidden mb-6">
        {/* Outer shadow container */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-[#80080800] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#fff0] to-transparent z-10 pointer-events-none" />

        {/* Scroll container */}
        <div
          className="h-full overflow-y-scroll snap-y snap-mandatory px-4 py-6 hide-scrollbar"
          style={{
            scrollPaddingTop: "100px",
            scrollPaddingBottom: "100px",
            perspective: "1000px",
          }}
        >
          {projects.slice(0, 5).map((proj, index) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="snap-center transform-gpu transition-transform duration-300 ease-in-out scale-90 hover:scale-100"
              style={{
                transformOrigin: "center",
              }}
            >
              <div className="w-[18rem] mx-auto bg-[#1e293b]/80 rounded-xl shadow-lg p-4 text-white flex flex-col gap-2 border border-white/10">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-36 object-cover rounded-md"
                />
                <h2
                  className="text-base font-bold text-cyan-300 bg-[#00000000] rounded-lg pl-2"
                  style={{
                    boxShadow: "0 0px 30px rgba(97, 151, 141, 0.56)",
                  }}
                >
                  {proj.title}
                </h2>
                <p className="text-xs text-white/80">{proj.description}</p>
                <div className="flex flex-wrap gap-1 text-[10px]">
                  {proj.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-white/10 rounded-full border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center w-full mt-auto gap-2">
                  <a
                    href={proj.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-1 bg-[#6ebccc5e] hover:bg-[#1f3436b7] text-white text-[10px] font-medium rounded-md border border-transparent hover:border-white transition-all duration-300 transform hover:scale-105"
                  >
                    <FaGithub className="text-[10px]" />
                    Code
                  </a>
                  <a
                    href={proj.visitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-1 bg-[#6ebccc5e] hover:bg-[#b4f2ff5e] text-white text-[10px] font-medium rounded-md border border-transparent hover:border-white transition-all duration-300 transform hover:scale-105"
                  >
                    <FaExternalLinkAlt className="text-[10px]" />
                    Visit
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="proj_container hidden sm:flex flex-wrap justify-center items-center w-full min-h-screen gap-6 sm:gap-8 p-4 sm:p-8 bg-gradient-to-b from-transparent via-black/20 to-transparent">
        {projects.map((proj, index) => (
          <div
            key={proj.id}
            className={`relative cursor-pointer  group w-full sm:w-[35%] sm:h-[440px] md:w-[31%] md:h-[450px] lg:h-[450px] bg-[#1e293b]/80 text-white rounded-xl shadow-lg p-4 sm:p-5 flex flex-col items-start gap-3 transition-all duration-500 hover:scale-[1.02] border border-transparent hover:border-cyan-400 opacity-0 animate-projects-fade-up`}
            style={{
              animationDelay: `${index * 0.1}s`, // Adds a delay between each project for the smooth effect
            }}
          >
            <span className="absolute bottom-2 left-4 right-4 h-[2px] bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></span>

            <div className="relative w-full h-40 sm:h-44 overflow-hidden rounded-lg group">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.3)]"
              />
              <div className="absolute bottom-0 left-0 right-0 h-0 group-hover:h-10 bg-[#57c2d482] text-white text-xs font-semibold flex items-center justify-center transition-all duration-300 overflow-hidden rounded-b-lg">
                View Demo
              </div>
            </div>

            <h2 className="text-lg sm:text-sm font-bold w-full text-left text-cyan-200">
              {proj.title}
            </h2>

            <p className="text-[12px] text-left text-white/80 line-clamp-3">
              {proj.description}
            </p>

            <div className="w-full mt-1">
              <h4 className="text-xs text-white/60 mb-2 uppercase tracking-wide">
                Skills Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {proj.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="md:text-[11px] text-[9px] md:text-xs bg-[#ffffff1a] border border-white/10 px-2 md:px-3 py-1 rounded-full text-white shadow-sm hover:bg-white/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center w-full mt-auto gap-2">
              <a
                href={proj.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-1 bg-gray-800 hover:bg-[#1f3436b7] text-white text-sm font-medium rounded-md border border-transparent hover:border-white transition-all duration-300 transform hover:scale-105"
              >
                <FaGithub className="text-sm" />
                Code
              </a>
              <a
                href={proj.visitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-1 bg-[#6ebccc5e] hover:bg-[#b4f2ff5e] text-white text-sm font-medium rounded-md border border-transparent hover:border-white transition-all duration-300 transform hover:scale-105"
              >
                <FaExternalLinkAlt className="text-sm" />
                Visit
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
