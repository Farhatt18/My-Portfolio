import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Education from "./Education";
import Experience from "./Experience";
import laptopImg from "../../Assets/avatar2.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Get to <strong className="purple">Know</strong> me!
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "40px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />
        <br />
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <div>
              <h1 className="project-heading">
                Education
                <strong className="purple"> Timeline </strong>
              </h1>

              <Education />
            </div>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={12}>
            <div>
              <h1 className="project-heading">
                Experience
                <strong className="purple"> Timeline </strong>
              </h1>

              <Experience />
            </div>
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
      </Container>
    </Container>
  );
}

export default About;
