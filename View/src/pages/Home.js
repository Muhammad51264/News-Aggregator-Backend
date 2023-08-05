import React, { useContext, useEffect, useState } from "react";
import Hero from "../component/Hero";
import axios from "axios";
import Story from "../component/Story";
import AddsBanner from "../component/AddsBanner";
import { Row, Col, Container } from "react-bootstrap";
import Aside from "../component/Aside";
import NewCard from "../component/NewCard";
// import { AllNews } from "../newsData";
import "../assets/index.css";
import { useNewsContext } from "../pages/Layout";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

// Add more objects

const Home = () => {
  // const [allNews, setAllNews] = useState([]);
  const { allNews, setAllNews } = useNewsContext();
  const [userType, setUserType] = useCookies("user");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all news items from the backend API
    axios
      .get("http://localhost:8080/news/allNews")
      .then((response) => {
        setAllNews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching all news:", error);
      });
  }, []);
  useEffect(() => {
    if (userType.user === "Agency") {
      navigate("/admindashboard");
    }
  }, []);

  return (
    <div className="">
      <div className=" d-flex flex-column justify-content-center align-items-center mb-5">
        <Hero />
        <AddsBanner />
      </div>
      <Container>
        <Row>
          <Col lg={3}>
            <Aside />
          </Col>
          <Col lg={9} className="d-flex flex-column gap-4">
            <Row>
              <Story />
            </Row>
            {/*landing page news*/}
            <Row className="d-flex justify-content-center gap-3 my-4">
              {allNews
                .slice()
                .reverse()
                .map((newsItem) => {
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
