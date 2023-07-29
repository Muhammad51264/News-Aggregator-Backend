import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../assets/index.css";

const Footer = () => {
  return (
    <footer className="footer w-100">
      {/* first footer layer begining */}
      <Navbar expand="lg" style={{ display: "flex", flexDirection: "column" }}>
        <Container style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ color: "#fff", textAlign: "center" }}>
            كن أول من يعلم الخبر مع تطبيق "المحطة الإخبارية"
          </p>
          <p style={{ color: "#fff" }}>حمّل التطبيق الآن</p>
        </Container>

        <Row className="d-flex justify-content-center w-100">
          <Col className=" column col1">
            <img
              src="../../public/images/GooglePlay.png"
              alt=""
              style={{ width: "150px", height: "auto" }}
            ></img>
          </Col>
          <Col className=" column col2">
            <img
              src="../../public/images/AppStore.png"
              alt=""
              style={{ width: "150px", height: "auto" }}
            ></img>
          </Col>
        </Row>
      </Navbar>
      {/* first footer layer ending */}
      {/* second footer layer begining */}
      <div className="footer-social-media-row">
        <Row className="text-center w-100 d-flex mb-4">
          <Col style={{ background: "#ff0000" }}>
            <i class="fa-brands fa-google pt-2 pb-2" style={{ color: "white" }}></i>
          </Col>
          <Col style={{ background: "#016cfe" }}>
            <i class="fa-brands fa-facebook-f pt-2 pb-2" style={{ color: "white" }}></i>
          </Col>
          <Col style={{ background: "#4cd4f2" }}>
            <i class="fa-brands fa-twitter pt-2 pb-2" style={{ color: "white" }}></i>
          </Col>
        </Row>
        <p className="text-center">سياسة الخصوصية | شروط الخدمة</p>
      </div>

      {/* second footer layer ending */}
    </footer>
  );
};

export default Footer;
