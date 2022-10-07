import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import {
  AiFillHtml5
} from "react-icons/ai";
import {
  FaCss3
} from "react-icons/fa";

import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (

    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <div>
        <h2 className="text-color bold" style={{textAlign: "center"}}>Tech Stack</h2>
      </div>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5 className="text-color bold"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="text-color bold"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs className="text-color bold"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="text-color bold"/>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs className="text-color bold"/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3 className="text-color bold"/>
      </Col>
      
      
    
     
    </Row>
  );
}

export default Techstack;
