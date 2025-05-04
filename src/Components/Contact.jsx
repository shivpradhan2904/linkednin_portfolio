import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import image2 from "../assets/images/image3.avif"; // Replace with your image

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const mailtoLink = `mailto:sibapradhan2904@gmail.com?subject=Message from ${name} (${email})&body=${encodeURIComponent(
      message
    )}`;

    window.location.href = mailtoLink;
  };
  return (
    <div
      className="h-full w-full flex flex-col text-white p-2 shadow-4xl shadow-white"
      style={{
        backgroundImage: `url(${image2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="flex flex-col justify-between items-center w-full h-full mx-auto rounded-3xl shadow-2xl flex-1 overflow-hidden backdrop-blur-md transition-all duration-300 ease-in-out"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0px 30px rgba(97, 151, 141, 0.56)",
        }}
      >
        {/* Scrollable content */}
        <div className="flex-1 w-full overflow-y-auto px-2 sm:px-4 sm:py-3 space-y-3 mt-5">
          {/* Contact Form Section */}
          <div className="flex flex-col md:flex-row gap-5 justify-center mt-12 sm:mt-5">
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-[50%] bg-transparent p-2 sm:p-6 rounded-xl shadow-md mx-auto"
            >
              <div className="w-full space-y-5">
                <h3 className="sm:text-2xl text-lg font-bold text-cyan-400 text-center transition-all duration-300">
                  Get in Touch
                </h3>

                {/* Name */}
                <div className="flex items-center bg-transparent border border-cyan-400/30 sm:p-3 p-2 rounded-md">
                  <FaUser className="text-cyan-400 mr-2" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-transparent w-full text-white outline-none placeholder-white/70 placeholder:text-sm sm:placeholder:text-base"
                  />
                </div>

                {/* Email */}
                <div className="flex items-center bg-transparent border border-cyan-400/30 p-3 rounded-md">
                  <FaEnvelope className="text-cyan-400 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-transparent w-full text-white outline-none placeholder-white/70 placeholder:text-sm sm:placeholder:text-base"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-transparent border border-cyan-400/30 text-white outline-none placeholder-white/70 placeholder:text-sm sm:placeholder:text-base"
                ></textarea>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 px-4 sm:px-6 py-2 rounded-md font-semibold text-[12px] sm:text-lg transition-all duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col mt-5 sm:mt-10 items-center">
            <h3
              className="text-lg sm:text-2xl font-bold mb-3"
              style={{
                color: "cyan",
                textShadow: "0 0 10px #fff, 0 0 20px #4ca1af, 0 0 30px #2c3e50",
              }}
            >
              Connect with Me
            </h3>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 w-full max-w-2xl mb-4">
              {[
                {
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                  baseColor: "text-cyan-400",
                  hoverColor: "hover:text-cyan-500",
                  underlineColor: "bg-cyan-400",
                  link: "https://www.linkedin.com/in/siba-pradhan-2606a9289",
                },
                {
                  icon: <FaInstagram />,
                  label: "Instagram",
                  baseColor: "text-pink-400",
                  hoverColor: "hover:text-pink-500",
                  underlineColor: "bg-pink-400",
                  link: "https://www.instagram.com/__shiv__here/?next=%2F",
                },
                {
                  icon: <FaWhatsapp />,
                  label: "WhatsApp",
                  baseColor: "text-green-400",
                  hoverColor: "hover:text-green-500",
                  underlineColor: "bg-green-400",
                  link: "https://wa.me/9078738600", // e.g. wa.me/919876543210
                },
                {
                  icon: <MdAlternateEmail />,
                  label: "Email",
                  baseColor: "text-red-400",
                  hoverColor: "hover:text-red-500",
                  underlineColor: "bg-red-400",
                  link: "mailto:sibapradhan2904@gmail.com",
                },
              ].map(
                (
                  { icon, label, baseColor, hoverColor, underlineColor, link },
                  i
                ) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center relative transition-all duration-300"
                  >
                    <div
                      className={`${baseColor} ${hoverColor} text-xl sm:text-3xl md:text-4xl p-2 sm:p-4 rounded-full border border-transparent group-hover:border-current group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                    >
                      {icon}
                    </div>
                    <span
                      className="text-sm sm:text-sm font-bold text-white group-hover:text-inherit transition-all duration-300"
                      style={{ color: "white" }}
                    >
                      {label}
                    </span>

                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-[2px] ${underlineColor} transition-all duration-500 group-hover:w-full`}
                    ></span>
                  </a>
                )
              )}

              {/* GitHub (only sm+) */}
              <a
                href="https://github.com/shivpradhan2904"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex group flex-col items-center relative transition-all duration-300"
              >
                <div className="text-gray-400 hover:text-gray-300 text-4xl p-4 rounded-full border border-transparent group-hover:border-current group-hover:scale-110 group-hover:shadow-lg transition-all duration-500">
                  <FaGithub />
                </div>
                <span
                  className="text-sm font-bold text-white group-hover:text-gray-400 transition-all duration-300"
                  style={{ color: "white" }}
                >
                  {" "}
                  GitHub
                </span>
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gray-400 transition-all duration-500 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full p-1 sm:p-4 bg-transparent text-center border-t mt-1 border-[#44a6bc8f]">
          <div className="overflow-hidden mb-2">
            <div className="whitespace-nowrap animate-marquee text-cyan-300 text-[10px] sm:text-sm uppercase tracking-wide">
              Thank you for visiting! Let's connect on LinkedIn, Instagram,
              WhatsApp, GitHub, or Email.
            </div>
          </div>
          <p
            className="text-[6px] sm:text-[8px] text-white font-bold tracking-widest "
            style={{
              color: "white",
              // textShadow: "0 0 10px #fff, 0 0 20px #4ca1af, 0 0 30px #2c3e50",
            }}
          >
            © 2025 Shiv. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* Custom styles */}
      <style>
        {`
      @keyframes glow {
        0% {
          text-shadow: 0 0 5px #fff, 0 0 10px #4ca1af, 0 0 15px #2c3e50;
        }
        100% {
          text-shadow: 0 0 10px #fff, 0 0 20px #4ca1af, 0 0 30px #2c3e50;
        }
      }

      .animate-glow {
        animation: glow 2s infinite;
      }

      @keyframes marquee {
        0% { transform: translateX(100%); }
        100% { transform: translateX(-100%); }
      }

      .animate-marquee {
        display: inline-block;
        animation: marquee 15s linear infinite;
      }
    `}
      </style>
    </div>
  );
}

export default Contact;
