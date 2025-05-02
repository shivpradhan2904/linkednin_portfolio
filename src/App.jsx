import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio"; // Add these if you have them
import Contact from "./Components/Contact";   // Add these if you have them
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>
      <Element name="portfolio" className="element">
        <Home />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      {/* Add elements for Portfolio and Contact sections */}
      <Element name="Portfolio" className="element">
        <Portfolio />
      </Element>
      <Element name="contact" className="element">
        <Contact />
      </Element>
    </>
  );
}

export default App;