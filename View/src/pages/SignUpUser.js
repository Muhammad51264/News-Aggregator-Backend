import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RegisterForm from "../component/RegisterForm";

const SignUpUser = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center">
        <Col style={{ maxWidth: "60rem" }}>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
};
export default SignUpUser;
