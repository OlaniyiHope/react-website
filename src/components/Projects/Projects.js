import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import "./Project.css";
import what from "../../assets/what.jpeg";
import logow from "../../assets/logow.png";
import lova from "../../assets/kobo.jpg";
import hlhs from "../../assets/yep.png";
import life2 from "../../assets/life2.png";
import hybrid from "../../assets/hy.png";
import cat from "../../assets/cat.jpg";
import tmm from "../../assets/tmm.png";
import Footer from "../footer/Footer";
function Projects() {
  return (
    <>
      <Container fluid className="project-section">
        <Container>
          <h1
            className="project-heading text-color bold"
            style={{ textAlign: "center" }}
          >
            <strong className="purple text-color bold">
              Some of my Works{" "}
            </strong>
          </h1>
          <p
            className="text-color bold "
            style={{ textAlign: "center", fontSize: 16 }}
          >
            Here are a few projects I've worked on.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card text-color bold">
              <ProjectCard
                imgPath={lova}
                isBlog={false}
                title="Bidding and gaming website"
                description="A platform where people play games and earn money, and also do biddings for electronic items "
                link="https://kobobid.com"
              />
            </Col>
            <Col md={4} className="project-card text-color bold">
              <ProjectCard
                imgPath={hlhs}
                isBlog={false}
                title="School managment solution"
                description="A school management solution where students can check their results, teachers can upload the student result, attendance, subects and their teacher etc."
                link=""
              />
            </Col>
            <Col md={4} className="project-card text-color bold">
              <ProjectCard
                imgPath={life2}
                isBlog={false}
                title="Investment Mobile App"
                description="A saving, investment and thrift app used to help users to save money,
              invest money and pay bills easily"
              />
            </Col>

            <Col md={4} className="project-card text-color bold">
              <ProjectCard
                imgPath={hybrid}
                isBlog={false}
                title="Real estate website"
                description="Hybrid homes and properties is a real estate website that helps people to look for
              a place to stay and also realtors can upload properties"
                link="https://hybridhomesandproperties.com.ng"
              />
            </Col>

            <Col md={4} className="project-card text-color bold">
              <ProjectCard
                imgPath={tmm}
                isBlog={false}
                title="Transport booking Web App"
                description="A transport App and Website, where people can travel, book tickets and trips can be managed by the admin. etc
              "
                link="https://themiraclemotorsng.com"
              />
            </Col>

            <Col md={4} className="project-card text-color bold">
              <ProjectCard
                imgPath={logow}
                isBlog={false}
                title="Real Estate Booking Site"
                description="A real estate website where travelers and people book and get ticket and houses owner can add and give informations
              about the building"
              />
            </Col>

            <Col md={4} className="project-card text-color bold">
              <ProjectCard
                imgPath={what}
                isBlog={false}
                title="MasterPiece Schools"
                description="A school website, where people are informed about the school, students can read news and information and can will later on have
              access to their portals"
                link="https://masterpieceschools.com.ng"
              />
            </Col>

            <Col md={4} className="project-card text-color bold">
              <ProjectCard
                imgPath={cat}
                isBlog={false}
                title="Crowdfunding Platform"
                description="A space where people with ideas can get funding for their ideas and people that needs support financially can get it"
              />
            </Col>

            <Col md={4} className="project-card text-color bold"></Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}

export default Projects;
