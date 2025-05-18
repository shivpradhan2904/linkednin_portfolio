import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import { Element } from "react-scroll";
import image2 from "./assets/images/image3.png";

function App() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${image2})` }}
    >
      {/* Optional dark overlay for better text visibility */}
      <div className="bg-black bg-opacity-60 min-h-screen">
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div> 

        <div className="pt-16"> {/* padding top to offset fixed Navbar */}
          <Element name="home" className="element">
            <Home />
          </Element>

          <Element name="about" className="element">
            <About />
          </Element>

          <Element name="portfolio" className="element">
            <Portfolio />
          </Element>

          <Element name="contact" className="element">
            <Contact />
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;
