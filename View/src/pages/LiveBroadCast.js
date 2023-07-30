import React from "react";
import "../assets/index.css";
import { Col, Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import AddsBanner from "../component/AddsBanner";

import ListGroup from "react-bootstrap/ListGroup";
const newsAgencies = [
  {
    name: "وكالة عمون الإخبارية",
    image: process.env.PUBLIC_URL + "/images/al-rai-jordan.jpg",
  },

  {
    name: " جريدة الغد ",
    image: process.env.PUBLIC_URL + "/images/alghad.png",
  },
  {
    name: " التلفزيون الأردني  ",
    image: process.env.PUBLIC_URL + "/images/alordoni.jpg",
  },
  {
    name: "قناة رؤيا   ",
    image: process.env.PUBLIC_URL + "/images/roya.svg",
  },
  {
    name: "  وكالة عمون الإخبارية",
    image: process.env.PUBLIC_URL + "/images/ammon.png",
  },

  {
    name: " خبرني ",
    image: process.env.PUBLIC_URL + "/images/khaberni.jpg",
  },
  {
    name: " صحيفة الدستور",
    image: process.env.PUBLIC_URL + "/images/dostor.jpg",
  },
  {
    name: " بلكي",
    image: process.env.PUBLIC_URL + "/images/balki.jpg",
  },
];

const LiveBroadCast = () => {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center ">
      <p
        className="category-title mx-auto mt-5 p-2 text-white w-100"
        style={{ backgroundColor: "#B31312" }}
      >
        قنوات البث المباشر
      </p>

      <Row className="d-flex  justify-content-between align-items-center gap-4 mb-3">
        {newsAgencies.map((newsAgency) => (
          <Col className="text-center d-flex justify-content-center align-items-center">
            <Card className="mb-5" style={{ width: "15rem" }}>
              <Card.Img
                variant="top"
                src={newsAgency.image}
                style={{ height: "10rem" }}
              />
              <Card.Body>
                <Card.Title className="text-center">
                  {newsAgency.name}
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <AddsBanner />
      </Row>
    </Container>
  );
};
export default LiveBroadCast;
