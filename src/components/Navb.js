import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "react-bootstrap";
import logo2 from "../images/logo2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";


const Navb = () => {
  return (
    <Navbar expand="lg" className=" bg-dark fixed-top ">
      <Container>
        <Navbar.Brand href="/">
          <Image src={logo2} alt="rr" rounded width="100" height="70" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link style={{ color: "#fff" }}  href="/">
              INTRO
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="/about">
              ABOUT ME
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="/skills">
              SKILLS
            </Nav.Link>
            <Nav.Link style={{ color: "#fff" }} href="/projects">
              PROJECTS
            </Nav.Link>
           
            <Nav.Link style={{ color: "#fff" }} href="/contact">
              CONTACT
            </Nav.Link>
          </Nav>
          <Nav className="mr-auto ">
            <span className="px-2">
              <a href="https://github.com/Riyarajput053">
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faSquareGithub}
                  size="2x"
                />
              </a>
            </span>
            <span className="px-2">
              <a href="https://linkedin.com/in/riyarajput">
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faLinkedin}
                  size="2x"
                />
              </a>
            </span>
            <span className="px-2">
              <a href="https://twitter.com/riyaa_rajput__">
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faSquareXTwitter}
                  size="2x"
                />
              </a>
            </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navb;
