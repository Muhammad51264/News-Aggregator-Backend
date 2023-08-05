import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import RegisterForm from "../component/RegisterForm";
import { Link } from "react-router-dom";

const SignUpUser = () => {
  return (
    <div className="sign-up-user">
      <h4 className="pt-4">
        <Link to="/" style={{ textDecoration: "none", paddingRight: "2rem" }}>
          <span style={{ color: "#fff" }}>المحطة</span>{" "}
          <span style={{ color: "#EF4747" }}>الإخبارية</span>
        </Link>
      </h4>
      <Container fluid>
        <Row className="d-flex justify-content-center align-items-center">
          <Col style={{ maxWidth: "60rem" }}>
            <RegisterForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SignUpUser;
