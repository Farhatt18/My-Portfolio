import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";

import TinDog from "../../Assets/Projects/TinDog Project.png";
import careerhub from "../../Assets/Projects/careerhub.png";
import habittree from "../../Assets/Projects/habittree.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careerhub}
              isBlog={false}
              title="Careerhub"
              description="Careerhub is a clone of Linkedin build with react.js, Redux, Ruby on Rails, HTML, CSS and AWS S3. Have features which allows user for realtime posting,  sharing as well as supports commenting on postings."
              ghLink="https://github.com/Farhatt18/CareerHub"
              demoLink="https://careerhub-iofc.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={habittree}
              isBlog={false}
              title="Habit Tree"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/cfang322/Habit-Tree?tab=readme-ov-file"
              demoLink="https://habit-tree.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TinDog}
              isBlog={false}
              title="Tindog"
              description="TinDog connects dog owners and their pets with potential matches nearby. Using Bootstrap components, it offers a sleek interface for finding friends, dates, or life partners for pets."
              ghLink="https://github.com/Farhatt18/Bootstrap-TinDog"
              demoLink=""
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
