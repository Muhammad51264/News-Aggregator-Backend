import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Calendar from "./Calender";
import Weather from "./Weather";
import Container from "react-bootstrap/Container";
import "../assets/index.css";

const Aside = () => {
  return (
    <Container>
      <Row className="text-center d-flex mb-4">
        <Col className="p-2" style={{ background: "#ff0000" }}>
          <i
            class="fa-brands fa-google pt-2 pb-2"
            style={{ color: "white" }}
          ></i>
        </Col>
        <Col className="p-2" style={{ background: "#016cfe" }}>
          <i
            class="fa-brands fa-facebook-f pt-2 pb-2"
            style={{ color: "white" }}
          ></i>
        </Col>
        <Col className="p-2" style={{ background: "#4cd4f2" }}>
          <i
            class="fa-brands fa-twitter pt-2 pb-2"
            style={{ color: "white" }}
          ></i>
        </Col>
        <Col className="p-2" style={{ background: "orange" }}>
          <i
            class="fa-brands fa-twitter pt-2 pb-2"
            style={{ color: "white" }}
          ></i>
        </Col>
      </Row>
      <Weather />
      <Calendar />
    </Container>
  );
};

export default Aside;
