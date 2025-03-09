import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import Resume from "../images/Resume.pdf"

const AboutMe = () => {
  const paraVariants = {
    hidden: {
      opacity: 0,
      y: 500,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
    <div className="container" style={{marginTop: "20vh" }}>
      <motion.h1
        variants={paraVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "tween", duration: 1 }}
        style={{ color: "black" }}
      >
        About Me
        <motion.hr
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ type: "tween", duration: 2}}
          style={{
            color: "#D895DA",
            backgroundColor: "#D895DA",
            height: "3px",
            width:"15rem"
          }}
        />
      </motion.h1>
      <div className="mt-5 align-items-center">
        <div>
          <motion.p
            variants={paraVariants}
            initial="hidden"
            animate="visible"
            transition={{ type: "tween", duration: 1, delay: 0.5 }}
            style={{ fontSize: "25px" }}
          >
            Hi there! I am currently enrolled in the fourth year of the Chameli
            Devi Group of Institutions' Bachelor of Technology in Computer
            Science Engineering program. I'm excited to discover new things and
            am actively honing my data science and machine learning skills. Additionally, I have
            made several web development projects with MERN stack, which has
            greatly aided in my skill-building.
          </motion.p>
        </div>
        <motion.button
          className="btn mt-5"
          variants={paraVariants}
          initial="hidden"
          animate="visible"
          transition={{ type: "tween", duration: 1, delay: 0.8 }}
          style={{ backgroundColor: "black", color: "white" }}
          onClick={() => window.open("https://drive.google.com/file/d/1ZZVe6HZxpaYawGY5MWHgHKFVQGG7T7Lt/view?usp=sharing", "_blank")}
        >
          My Resume
        </motion.button>
      </div>
      <motion.h1
        variants={paraVariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "tween", duration: 1, delay: 1.2 }}
        className="mt-5"
      >
        Education
      </motion.h1>
      <div>
        <motion.hr
          animate={{ x: 0, opacity: 1 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ type: "tween", duration: 2, delay: 2 }}
          style={{
            color: "#D895DA",
            backgroundColor: "#D895DA",
            height: "3px",
            width:"15rem"
          }}
        />
        <motion.div
          variants={paraVariants}
          initial="hidden"
          animate="visible"
          transition={{ type: "tween", duration: 1, delay: 1.5 }}
          className="vl mt-5"
          style={{ borderLeft: "6px solid", color: "#D895DA", height: "250px" }}
        >
          <div className="mx-5 text-black">
            <p>MAY 2019 - APRIL 2021</p>
            <h1>Brilliant Higher Secondary School</h1>
            <p>HIGH SCHOOL</p>
            <p className="mt-3" style={{ fontSize: "20px" }}>
              During my high school education, I developed a strong interest in
              subjects such as Math, Social Science and Computer. I also enjoyed
              participating in sports and other physical activities. My high
              school education provided me with a well-rounded foundation and
              helped me discover my passions and interests.
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={paraVariants}
          initial="hidden"
          animate="visible"
          transition={{ type: "tween", duration: 1, delay: 2 }}
          className="vl mt-5"
          style={{ borderLeft: "6px solid", color: "#D895DA", height: "270px" }}
        >
          <div className="mx-5 text-black">
            <p>OCTOBER 2021 - APRIL 2025</p>
            <h1>Chameli Devi Group Of Institutions</h1>
            <p>BACHELOR'S DEGREE</p>
            <p className="mt-3" style={{ fontSize: "20px" }}>
              I completed my Bachelor’s degree in Computer Science. During my
              studies, I gained a strong foundation in computer science concepts
              such as algorithms, data structures, and computer organization. I
              also developed my skills in programming languages such as JavaScript and
              Python and worked on various projects that allowed me to apply my
              knowledge in practical settings. My education has equipped me with
              the skills and knowledge to excel in the field of computer
              science.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default AboutMe;
