import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              About <span className="blue"> Me </span> 
            </h1>
            <p className="home-about-body">
            Welcome to my website! I'm Bader, a <b className="blue">passionate software developer </b>
             with a diverse background and a knack for problem-solving.
             <br />
             <br />
             I believe that technology has the power to transform businesses and improve people's lives,
             and I'm dedicated to creating innovative solutions that make a positive impact.

              <br />
              <br />I have so far learned
              <i>
                <b className="blue"> Python, JavaScript, HTML, CSS, React, Vite, servers, and APIs. </b>
              </i>
              <br />
              <br />
              <br />
              <br />
              My areas of focus are, &nbsp;
              <i>
                <b className="blue">web development,</b> {" "}
                <b className="blue">
                Building RESTful APIs, Passion for Data-Driven Applications, Data Visualization
                </b>.
              </i>
              <br />
              <br />
              
             
            </p>
          </Col>
          
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/BBricha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/badr.bricha"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bbricha/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
