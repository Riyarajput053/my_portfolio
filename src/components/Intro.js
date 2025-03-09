import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion/dist/framer-motion";
import AboutMe from "./AboutMe";
// import pic from "../images/1.avif"
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

// import { delay } from "framer-motion/dist/framer-motion";
const Intro = () => {
  const variants = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <>
      <div
        className="app-container d-flex justify-content-center align-items-center"
        style={{ backgroundColor: "black", height: "100vh" }}
      >
        <div className="d-flex" style={{ height: "40vh", width: "100vh" }}>
          <div>     
            <motion.h3
              animate={{ x: 0, scale: 1 }}
              transition={{ type: "tween", duration: 0.5, delay: 0.3 }}
              initial={{ x: -100, scale: 0 }}
              style={{ color: "#D895DA" }}
            >
              Hello I am Riya Rajput
            </motion.h3>

            <motion.p
              animate={{ x: 0, scale: 1 }}
              transition={{ type: "tween", duration: 0.5, delay: 1 }}
              initial={{ x: -100, scale: 0 }}
              className="text-white fs-1"
            >
              Full-Stack Developer & AI/ML Enthusiast !! <br />
              
            </motion.p>
            <motion.hr
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ type: "tween", duration: 1, delay: 1 }}
              className="mt-5"
              style={{
                color: "#D895DA",
                backgroundColor: "#D895DA",
                height: "3px",
              }}
            />
            <Link to="/about">
              <motion.button
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{ type: "tween", duration: 1, delay: 1 }}
                className="btn mt-5"
                style={{ backgroundColor: "white" }}
              >
                Read more
              </motion.button>
            </Link>
          </div>
        </div>
        {/* <img src={pic} style={{maxHeight:"500px", maxWidth:"500px"}} alt="rr"></img> */}
      </div>
      <AboutMe />
      <Skills/>
      <Projects></Projects>
      <Contact></Contact>

      
    </>
  );
};

export default Intro;
