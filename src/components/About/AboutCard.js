import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there! I am <span className="blue">Bader Bricha</span>
            , a software developer driven by a love for problem-solving.
             With a diverse background and a keen eye for detail,
             I bring a fresh perspective to the world of technology.
            <br />
            <br />
             I am proud to be a graduate of Per Scholas, a renowned training program that has 
            equipped me with the essential skills and knowledge to excel in the field 
            of software development. This intensive program has honed my technical abilities
             and provided me with a solid foundation in various programming languages and frameworks.
            <br />
            <br />
            My journey in the tech industry began with hands-on experience, troubleshooting and resolving 
            hardware and software issues for various devices. This practical knowledge, combined with 
            my Per Scholas training, has enabled me to tackle complex challenges with confidence.
            <br />
            <br />
             To further expand my technical expertise, I immersed myself in Python, Java, JavaScript,
              HTML, CSS, React, servers, and APIs. These languages and frameworks have empowered me to create
               innovative solutions and build robust applications.
               <br />
               <br />
              As a software developer, I thrive in dynamic and collaborative environments. Leveraging my technical 
              proficiency and problem-solving abilities, I tackle complex challenges head-on. I'm fueled by a 
              passion for innovation, creativity, and delivering exceptional results.
              <br />
              <br />
              I am committed to continuous learning, staying abreast of the latest advancements in the field. 
              By constantly expanding my knowledge and skills, I ensure that I can provide cutting-edge solutions to real-world problems.
            
            <br />
            <br />
            Apart from coding, some activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Soccer
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Code with passion, innovate with purpose, and create solutions that shape the future."{" "}
          </p>
          <footer className="blockquote-footer">Bader</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
