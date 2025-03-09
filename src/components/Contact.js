import React from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";




const Contact = () => {
  return (
    <div className="app mt-5">
      <motion.div className="container p-5 text-center">
        <motion.h1 className="mt-5">
          Contact me at
          <motion.hr
            animate={{ x: 420, opacity: 1 }}
            initial={{ opacity: 0, x: 200 }}
            transition={{ type: "tween", duration: 2 }}
            style={{
              color: "#D895DA",
              backgroundColor: "#D895DA",
              height: "3px",
              width: "25rem",
            }}
          />
        </motion.h1>
        <button className="btn mt-5" ><a href="https://linkedin.com/in/riya-rajput-8a5921243">
                <FontAwesomeIcon
                  style={{ color: "black" }}
                  icon={faEnvelope}
                  size="2x"
                />
              </a> </button>
        <button className="btn mt-5"><a href="https://linkedin.com/in/riyarajput">
                <FontAwesomeIcon
                  style={{ color: "black" }}
                  icon={faLinkedin}
                  size="2x"
                />
              </a></button>
        <button className="btn mt-5"><a href="https://github.com/Riyarajput053">
                <FontAwesomeIcon
                  style={{ color: "black" }}
                  icon={faSquareGithub}
                  size="2x"
                />
              </a></button>
        <button className="btn mt-5"><a href="https://twitter.com/riyaa_rajput__">
                <FontAwesomeIcon
                  style={{ color: "black" }}
                  icon={faSquareXTwitter}
                  size="2x"
                />
              </a></button>
      </motion.div>
    </div>
  );
};

export default Contact;
