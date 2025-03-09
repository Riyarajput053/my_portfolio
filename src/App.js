import "./App.css";
import React from "react";
import Navb from "./components/Navb";
import Intro from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { Routes, BrowserRouter, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      
      <Navb />
     
      <Routes>
        
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
