import { React, useState, useEffect } from "react";
import "../assets/Category.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NewCard from "../component/NewCard";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import { AllNews } from "../newsData";
import "../assets/index.css";
import AddsBanner from "../component/AddsBanner";
import axios from "axios";
import { useNewsContext } from "../pages/Layout";

const Category = () => {
  const params = useParams();
  console.log(params);
  const props = params.type;

  const { allNews, setAllNews } = useNewsContext();

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

  const filteredObjectsSport = allNews.filter(
    (obj) => obj.category === "sport"
  );
  const filteredObjectsEconomy = allNews.filter(
    (obj) => obj.category === "economy"
  );
  const filteredObjectsBreaking = allNews.filter(
    (obj) => obj.category === "breaking"
  );
  const filteredObjectsWorld = allNews.filter(
    (obj) => obj.category === "world"
  );
  const filteredObjectsHealth = allNews.filter(
    (obj) => obj.category === "health"
  );

  return (
    <Container>
      <Row>
        {props === "sport" && (
          <>
            <p
              className="category-title mx-auto mt-5 p-2 text-white"
              style={{ backgroundColor: "#ff8d00" }}
            >
              أخبار الرياضة
            </p>

            <AddsBanner />

            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsSport.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}

        {props === "economy" && (
          <>
            <p
              className="category-title mx-auto mt-5 p-2 text-light"
              style={{ backgroundColor: "#17c8bd" }}
            >
              أخبار الاقتصاد
            </p>
            <AddsBanner />
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsEconomy.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}
        {props === "breaking" && (
          <>
            <p
              className="category-title mx-auto mt-5 p-2 text-white"
              style={{ backgroundColor: "#FF0000" }}
            >
              عاجل
            </p>
            <AddsBanner />
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsBreaking.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}

        {props === "world" && (
          <>
            <p
              className="category-title mx-auto mt-5 p-2 text-white"
              style={{ backgroundColor: "#9933CC" }}
            >
              أخبار العالم
            </p>
            <AddsBanner />
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsWorld.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}

        {props === "health" && (
          <>
            <p
              className="category-title mx-auto mt-5 p-2 text-white"
              style={{ backgroundColor: "#3366CC" }}
            >
              أخبار الصحة
            </p>
            <AddsBanner />
            <Row className="d-flex justify-content-center gap-4 my-5">
              {filteredObjectsHealth.map((obj) => (
                <NewCard data={obj} />
              ))}
            </Row>
          </>
        )}
      </Row>

      <Row>
        <Col className=" category-more d-flex align-items-center justify-content-center ">
          <h5 className="category-more my-4 "> المزيد</h5>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center gap-4 my-5">
        {allNews.map((newsItem) => {
          return <NewCard data={newsItem} />;
        })}
      </Row>
    </Container>
  );
};

export default Category;
