import React from "react";
import {motion} from "framer-motion/dist/framer-motion";

const Skills = () => {
  return (
    <div
      className="app mt-5"
      style={{ backgroundColor: "black", height: "100vh" }}
    >
      <motion.h1 className="text-center pt-5" style={{ color: "white" }}>
        Skills
        <motion.hr
          animate={{ x: 680, opacity: 1 }}
          initial={{ opacity: 0, x: 600 }}
          transition={{ type: "tween", duration: 2 }}
          style={{
            color: "#D895DA",
            backgroundColor: "#D895DA",
            height: "3px",
            width: "10rem",
          }}
        />
      </motion.h1>
      <div
        className=" d-flex justify-content-center align-item-center  "
        style={{ marginTop: "90px" }}
      >
        <div className="row ">
          <div style={{ color: "white" }} className="col p-5">
            <h1 style={{ fontSize: "5rem", color: "#D895DA" }}>01.</h1>
            <h1 className="pb-3">Programming skills</h1>

            <li>C</li>
            <li>C++</li>
            <li>Javascript</li>
            <li>Python</li>
          </div>
          <div style={{ color: "white" }} className="col p-5">
            <h1 style={{ fontSize: "5rem", color: "#D895DA" }}>02.</h1>
            <h1 className="pb-3">Development skills</h1>

            <li>HTML5</li>
            <li>CSS</li>
            <li>ReactJs</li>
            <li>NodeJs</li>
            <li>MongoDB</li>
          </div>
          <div style={{ color: "white" }} className="col p-5">
            <h1 style={{ fontSize: "5rem", color: "#D895DA" }}>03.</h1>
            <h1 className="pb-3">
              Technical
              <br />
              skills
            </h1>

            <li>DSA</li>
            <li>DBMS</li>
            <li>OS</li>
            <li>Git</li>
            <li>ML</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
