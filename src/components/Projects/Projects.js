import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chat from "../../Assets/Projects/chatbot.png";
import parcheesi from "../../Assets/Projects/demo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chat}
              isBlog={false}
              title="ChatBot"
              description="This website is a project that utilizes the OpenAI API to create a chatbot and generate photos. It is built using React and hosted on Render.com.Note that due to the free version of hosting being used, the website may load slowly."
              ghLink="https://github.com/BBricha/api-project-modII"
              demoLink="https://chatbot-img-generate.onrender.com/chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parcheesi}
              isBlog={false}
              title="Parcheesi Star"
              description="Parcheesi Game built with JavaScript, Html, and CSS. This is a simple Parcheesi game that can be played with 2 players. The game board consists of a track with colored spaces that represent different actions."
              ghLink="https://github.com/BBricha/Parcheesi_star_"
              demoLink="https://bbricha.github.io/Parcheesi_star_/"
            />
          </Col>

    
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
