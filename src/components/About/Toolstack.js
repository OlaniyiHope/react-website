import React from "react";
import { Col, Row } from "react-bootstrap";
import {
 SiLinux,
  SiVisualstudiocode,
  SiHeroku,
  SiNetlify,
} from "react-icons/si";
import {
  AiFillGithub
} from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <div>
        <h2 className="text-color bold" style={{textAlign: "center"}}>Tech Tool</h2>
      </div>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux className="text-color bold"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode className="text-color bold"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub className="text-color bold"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify className="text-color bold"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku className="text-color bold"/>
      </Col>
    </Row>
  );
}

export default Toolstack;
