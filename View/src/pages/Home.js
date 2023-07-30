import React from "react";
import Hero from "../component/Hero";
import Story from "../component/Story";
import AddsBanner from "../component/AddsBanner";
import Header from "../component/Header";
import { Row, Col, Container } from "react-bootstrap";
import Aside from "../component/Aside";
import NewCard from "../component/NewCard";
import { AllNews } from "../newsData";
import "../assets/index.css";

// Add more objects

const Home = () => {
  return (
    <div className="">
      <div className="">
        <Hero />
      </div>
      <Container>
        <Row>
          <Col lg={3}>
            <Aside />
          </Col>
          <Col lg={9}>
            <Row>
              <Story />
            </Row>
            {/*landing page news*/}
            <Row className="d-flex justify-content-center gap-3 my-4">
              {AllNews.map((newsItem) => {
                return <NewCard data={newsItem} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
