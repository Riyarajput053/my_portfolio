import React, { useState } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { Modal, Button } from "react-bootstrap";
import techblog from "../images/techblog.png";
import health_monitor from "../images/health_monitor.png";

const Projects = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [show, setShow] = useState(false);

  const handleCardClick = (id) => {
    setSelectedId(id === selectedId ? null : id);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  const renderModalContent = () => {
    switch (selectedId) {
      case 1:
        return (
          <div className="row">
            <div className="col-4">
              <img
                className="m-5 p-5"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSdJS8hphqyI4aOwBWZugMNrWskWAiEJTdeBl0shz9Hw&s"
                alt="health monitor"
              ></img>
            </div>
            <div className="col-8  ">
              <h1 className="text-white text-center">Health monitor</h1>
              <p className="text-white mt-5 text-center">
                This is a digital health records management web that allows
                users to upload their medical records and documents, such as lab
                reports, prescriptions and Mediclaim information, for easy and
                secure access anytime, anywhere.
              </p>
              <h4 className="text-white text-center mt-5">KEY FEATURES</h4>

              <ol className="mt-5">
                <li className="text-white">
                  Stores medical reports, bills, scanned images, doctor notes
                  and so more.
                </li>
                <li className="text-white">
                  Perform risk analysis on the basis of previous health records,
                  diseases and symptoms.
                </li>
                <li className="text-white">
                  Search functionality for finding doctors of specific
                  speciality.{" "}
                </li>
                <li className="text-white">
                  Share the reports and medical data to the doctor.
                </li>
              </ol>
              <a className="text-center mx-3" href="https://health-monitor-front-end.onrender.com">
                Go to this website
              </a>
          
            </div>
          </div>
        );
      case 2:
        return (
          <div className="row">
            <div className="col-4">
              <img className="w-50 m-5 p-5" src={techblog}></img>
            </div>
            <div className="col-8">
              <h1 className="text-center text-white">TechBlog</h1>
              <p className="text-white text-center mt-5">
                Created a powerful and fully responsive MERN stack web app with
                cutting-edge features.
              </p>
              <h4 className="text-white mt-5">KEY FEATURES</h4>
              <div className="mt-3">
                <ol>
                  <li className="text-white">
                    {" "}
                    Admins gain the ability to effortlessly manage posts,
                    comments, and users, complete with CRUD operations
                  </li>
                  <li className="text-white">
                    Added a sleek dark mode to enhance user experience and cater
                    to different preferences.
                  </li>
                  <li className="text-white">
                    {" "}
                    Users can search by title, limit results, and sort through a
                    modern sidebar,
                  </li>
                  <li className="text-white">
                    Everyone has the ability to leave, edit, and delete their
                    comments on the post pages, fostering an interactive
                    community.
                  </li>
                </ol>
                <a className="text-center mx-3" href="#">
                  Go to this website (...coming soon)
                </a>
              </div>
            </div>
          </div>
        );
      // case 3:
      //   return <div></div>;
      // default:
      //   return null;
    }
  };

  const pvariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="app mt-5">
      <motion.h1
        className="text-center pt-5"
        variants={pvariants}
        initial="hidden"
        animate="visible"
        transition={{ type: "tween", duration: 1 }}
      >
        Projects
        <motion.hr
          animate={{ x: 640, opacity: 1 }}
          initial={{ opacity: 0, x: 600 }}
          transition={{ type: "tween", duration: 2 }}
          style={{
            color: "#D895DA",
            backgroundColor: "#D895DA",
            height: "3px",
            width: "15rem",
          }}
        />
      </motion.h1>
      <div className="container d-flex justify-content-center align-items-center">
        <motion.div
          variants={pvariants}
          initial="hidden"
          animate="visible"
          transition={{ type: "tween", duration: 1, delay: 0.5 }}
        >
          <div className="row">
            <div className="col">
              <motion.div
                layout
                className="card"
                style={{
                  marginTop: "10rem",
                  padding: "4rem 4rem",

                  borderRadius: "2rem",
                  boxShadow: "0px 5px 20px rgba(216, 149, 218, 0.5)",
                }}
                onClick={() => handleCardClick(1)}
              >
                <img
                  className="w-75 h-25 "
                  src={health_monitor}
                  alt="health monitor logo"
                ></img>
                <hr />
                <motion.h2 layout="position" className="mt-5">
                  Health monitor{" "}
                </motion.h2>
              </motion.div>
            </div>
            <div className="col">
              <motion.div
                layout
                className="card"
                style={{
                  marginTop: "10rem",
                  padding: "4.8rem 8rem",
                  borderRadius: "2rem",
                  boxShadow: "0px 5px 20px rgba(216, 149, 218, 0.5)",
                }}
                onClick={() => handleCardClick(2)}
              >
                <img className="w-100" src={techblog} alt="techblog logo"></img>
                <hr />

                <motion.h2 layout="position" className="mt-5">
                  TechBlog
                </motion.h2>
              </motion.div>
            </div>
            <div className="col">
              <motion.div
                layout
                className="card"
                style={{
                  marginTop: "10rem",
                  padding: "5rem 8rem",
                  borderRadius: "2rem",
                  boxShadow: "0px 5px 20px rgba(216, 149, 218, 0.5)",
                }}
                onClick={() => handleCardClick(3)}
              >
                <motion.h2 layout="position">Coming Soon! </motion.h2>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <Modal show={show} onHide={handleClose} fullscreen>
        {/* <Modal.Header closeButton> */}
        <Modal.Title
          style={{
            backgroundColor: "#31363F",
            color: "#fff",
            paddingTop: "10px",
          }}
          className="px-5"
        >
          Projects{" "}
          <motion.hr
            animate={{ x: 0, opacity: 1 }}
            initial={{ opacity: 0, x: -500 }}
            transition={{ type: "tween", duration: 1.5 }}
            style={{
              color: "#D895DA",
              backgroundColor: "#D895DA",
              height: "3px",
              width: "100rem",
            }}
          />
        </Modal.Title>
        {/* </Modal.Header> */}
        <Modal.Body style={{ backgroundColor: "#31363F" }}>
          {renderModalContent()}
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#31363F", border: "none" }}>
          <Button
            style={{ backgroundColor: "#D895DA" }}
            variant="secondary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Projects;
