import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import NewCard from "../component/NewCard";

import "../assets/index.css";
import { useParams } from "react-router-dom";
import { AllNews } from "../newsData";

const Details = () => {
  const { id } = useParams();
  const clickedNew = AllNews.filter((e) => e.id === parseInt(id))[0];

  return (
    <Container className=" details-container d-flex align-items-center justify-content-center flex-column ">
      <Card className=" mb-5 my-4 w-75 border-0 d-flex gap-3">
        <Row>
          <h6>
            <img
              style={{ width: "2rem" }}
              src="../../public/images/roya.jpg"
              alt=""
            />
            {clickedNew.publisher}
          </h6>
        </Row>
        <Row>
          <h5>{clickedNew.title}</h5>
        </Row>
        <Row>
          <p>{clickedNew["published-datetime"]}</p>
        </Row>

        <Card.Img
          className="details-img-center"
          variant="top"
          src={clickedNew.image}
          style={{ width: "100%", height: "30rem" }}
        />
        <Card.Body>
          <Card.Text> {clickedNew.description}</Card.Text>
        </Card.Body>
      </Card>
      <Row>
        <Col className="d-flex align-items-center justify-content-center">
          <h5 className="category-more my-4 ">المزيد</h5>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center gap-4 my-5">
        {AllNews.map((newsItem) => {
          return <NewCard data={newsItem} />;
        })}
      </Row>
    </Container>
  );
};

export default Details;
