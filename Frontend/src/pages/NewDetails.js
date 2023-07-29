import React from "react";
import Card from "react-bootstrap/Card";
import "../assets/NewDetails.css";
import { useParams } from "react-router-dom";
import { AllNews } from "../newsData";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import "../assets/index.css";

const NewDetails = () => {
  const { id } = useParams();
  const clickedNew = AllNews.filter((e) => e.id === parseInt(id))[0];

  return (
    <div>
      <Container className="d-flex flex-column justify-content-center   px-4 text-end gap-4 details-container">
        <Row className="d-flex  flex-column gap-2 text-end">
          <h6>- {clickedNew.publisher}</h6>
          <h5>{clickedNew.title}</h5>
        </Row>
        <Row className="text-end">
          <img src={clickedNew.image} style={{ height: "20rem" }} alt="" />
        </Row>
        <Row className="text-end">{clickedNew.description}</Row>
      </Container>
    </div>
  );
};
export default NewDetails;
