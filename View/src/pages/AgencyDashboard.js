import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CreatePostField from "../component/CreatePostField";
import "../assets/AgencyDashboard.css";

const AgencyDashboard = () => {
  return (
    <Container>
      <Row className="agency-dashboard mt-5">
        <Col>
          <p
            className="category-title mx-auto p-2 text-white w-100"
            style={{ backgroundColor: "#EF4747", color: "#fff" }}
          >
            لوحة التحكم{" "}
          </p>
          <CreatePostField />
        </Col>
      </Row>
    </Container>
  );
};
export default AgencyDashboard;
